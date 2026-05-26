import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar, MessageCircle, Clock, User } from "lucide-react";
import { useSession, ScheduledFollowup } from "./SessionContext";

interface Props { onComplete: () => void; }

type Step = "intro" | "promise" | "scheduling" | "confirmed";
type SubStep = "day" | "time" | "patient";

const dayOptions = [
  { id: "tomorrow-am", label: "Mañana en la mañana", hint: "8am — 12pm" },
  { id: "tomorrow-pm", label: "Mañana en la tarde", hint: "2pm — 6pm" },
  { id: "day-after", label: "Pasado mañana", hint: "" },
  { id: "other", label: "Otro día esta semana", hint: "" },
];

const timeSlots = ["8:00am", "9:00am", "10:00am", "2:00pm", "3:00pm", "4:00pm"];

type PatientChoice = "has-name" | "will-review" | "flexible";

const patientChoices: { id: PatientChoice; label: string; followup: string }[] = [
  {
    id: "has-name",
    label: "Ya tengo a alguien en mente",
    followup: "",
  },
  {
    id: "will-review",
    label: "Lo voy a revisar en mi agenda — le aviso mañana",
    followup: "Perfecto, doctor. Le hago un recordatorio por WhatsApp mañana en la mañana para que cuando llegue a la consulta tenga el caso listo.",
  },
  {
    id: "flexible",
    label: "Prefiero que vaya saliendo el caso — caso flexible",
    followup: "Sin problema. En la segunda sesión vemos qué caso del día tiene a la mano.",
  },
];

const ExpressAliadosModule6FirstActivation = ({ onComplete }: Props) => {
  const { allyName, scheduledFollowup, setSessionData } = useSession();
  const [step, setStep] = useState<Step>(scheduledFollowup ? "confirmed" : "intro");
  const [sub, setSub] = useState<SubStep>("day");

  const [dayId, setDayId] = useState<string>(scheduledFollowup ? "tomorrow-am" : "");
  const [customDate, setCustomDate] = useState("");
  const [time, setTime] = useState(scheduledFollowup?.time || "");
  const [customTime, setCustomTime] = useState("");
  const [patientChoice, setPatientChoice] = useState<PatientChoice | null>(scheduledFollowup?.patientStatus || null);
  const [patientName, setPatientName] = useState(scheduledFollowup?.patientName || "");

  const name = allyName?.trim() || "doctor";

  const resolveDate = () => {
    if (dayId === "other") return customDate.trim();
    return dayOptions.find((o) => o.id === dayId)?.label || "";
  };
  const resolveTime = () => (time === "other" ? customTime.trim() : time);

  const canConfirmPatient = patientChoice && (patientChoice !== "has-name" || patientName.trim());

  const handleConfirm = () => {
    const followup: ScheduledFollowup = {
      date: resolveDate(),
      time: resolveTime(),
      patientName: patientChoice === "has-name" ? patientName.trim() : null,
      patientStatus: patientChoice!,
    };
    setSessionData({ scheduledFollowup: followup });
    setStep("confirmed");
  };

  if (step === "intro") {
    return (
      <div className="module-container">
        <div className="max-w-3xl mx-auto text-center space-y-8 py-12">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-indigo-950">
            Llegamos al momento más importante.
          </h1>
          <p className="text-lg text-indigo-800 leading-relaxed italic">
            "Doctor <span className="font-bold not-italic text-indigo-950">{name}</span>, la primera vez que se ofrece
            Welli a un paciente, es donde está el reto real. No por la herramienta — usted ya la conoce. Por la
            conversación."
          </p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="font-display text-xl md:text-2xl text-indigo-950 italic"
          >
            "Por eso esta segunda sesión existe."
          </motion.p>
          <button
            onClick={() => setStep("promise")}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Cuénteme más <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  if (step === "promise") {
    return (
      <div className="module-container">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 text-center">
            Por eso no lo dejamos solo.
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { tag: "AHORA", title: "Esta sesión", time: "25 minutos", d: "Aprende Welli", icon: CheckCircle2, active: false },
              { tag: "← AQUÍ", title: "Segunda sesión", time: "15 minutos", d: "Hace SU primer crédito con un paciente suyo, conmigo guiándolo", icon: ArrowRight, active: true },
              { tag: "PRÓXIMOS DÍAS", title: "Acompañamiento", time: "Lo que necesite", d: "Su asesor directo", icon: MessageCircle, active: false },
            ].map((s, i) => (
              <div
                key={i}
                className={`rounded-3xl border-2 p-6 space-y-3 ${
                  s.active
                    ? "border-welli-yellow bg-welli-yellow/15 shadow-lg scale-[1.02]"
                    : "border-welli-yellow/30 bg-card"
                }`}
              >
                <p className={`text-xs font-bold tracking-widest ${s.active ? "text-welli-yellow" : "text-indigo-800"}`}>
                  {s.tag}
                </p>
                <s.icon className="w-7 h-7 text-welli-yellow" />
                <p className="font-display text-xl font-bold text-indigo-950">{s.title}</p>
                <p className="text-sm font-bold text-indigo-950">{s.time}</p>
                <p className="text-sm text-indigo-800">{s.d}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-indigo-800 italic leading-relaxed max-w-2xl mx-auto">
            "La segunda sesión es lo que cambia todo. Son 15 minutos. Usted me trae el caso de un paciente real, y
            hacemos la aplicación juntos en vivo."
          </p>

          <div className="rounded-3xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-6 space-y-3">
            <p className="font-bold text-indigo-950">¿Qué pasa en esos 15 minutos?</p>
            <ul className="space-y-2 text-indigo-800 text-sm">
              <li>• Usted elige un paciente que valoró esta semana</li>
              <li>• Yo le acompaño desde mi pantalla, paso a paso</li>
              <li>• Aplicamos juntos, sale aprobado o no — no importa</li>
              <li className="font-bold text-indigo-950">• Sale con la experiencia hecha. La próxima vez ya lo hace solo.</li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={() => setStep("scheduling")}
              className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
            >
              Agendemos esa sesión <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "scheduling") {
    return (
      <div className="module-container">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center gap-2 mb-2">
            {(["day", "time", "patient"] as SubStep[]).map((s, i) => {
              const reached = (["day", "time", "patient"] as SubStep[]).indexOf(sub) >= i;
              return <div key={s} className={`h-1.5 w-16 rounded-full ${reached ? "bg-welli-yellow" : "bg-welli-yellow/20"}`} />;
            })}
          </div>

          <AnimatePresence mode="wait">
            {sub === "day" && (
              <motion.div
                key="day" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-display text-2xl md:text-3xl font-bold text-indigo-950 text-center">
                  ¿Cuándo le sirve mejor, doctor?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {dayOptions.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => setDayId(o.id)}
                      className={`p-5 rounded-2xl border-2 text-left transition-all ${
                        dayId === o.id
                          ? "border-welli-yellow bg-welli-yellow/20"
                          : "border-welli-yellow/20 bg-white hover:border-welli-yellow/40"
                      }`}
                    >
                      <p className="font-bold text-indigo-950">{o.label}</p>
                      {o.hint && <p className="text-xs text-indigo-800 mt-1">{o.hint}</p>}
                    </button>
                  ))}
                </div>
                {dayId === "other" && (
                  <input
                    type="text" value={customDate} onChange={(e) => setCustomDate(e.target.value)}
                    placeholder="Ej. Viernes 30 de mayo"
                    className="w-full px-4 py-3 rounded-xl border-2 border-welli-yellow/30 bg-white text-indigo-950 focus:outline-none focus:border-welli-yellow"
                  />
                )}
                <p className="text-sm text-indigo-800 italic text-center">
                  Tip: entre antes mejor — los pacientes que valoró esta semana siguen en su mente.
                </p>
                <div className="text-right">
                  <button
                    onClick={() => setSub("time")}
                    disabled={!dayId || (dayId === "other" && !customDate.trim())}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Siguiente <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {sub === "time" && (
              <motion.div
                key="time" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-display text-2xl md:text-3xl font-bold text-indigo-950 text-center">
                  ¿Qué hora le funciona?
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`p-4 rounded-2xl border-2 font-bold transition-all ${
                        time === t
                          ? "border-welli-yellow bg-welli-yellow/20 text-indigo-950"
                          : "border-welli-yellow/20 bg-white text-indigo-950 hover:border-welli-yellow/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setTime("other")}
                  className={`w-full p-4 rounded-2xl border-2 font-bold transition-all ${
                    time === "other"
                      ? "border-welli-yellow bg-welli-yellow/20 text-indigo-950"
                      : "border-welli-yellow/20 bg-white text-indigo-950 hover:border-welli-yellow/40"
                  }`}
                >
                  Otra hora
                </button>
                {time === "other" && (
                  <input
                    type="text" value={customTime} onChange={(e) => setCustomTime(e.target.value)}
                    placeholder="Ej. 11:30am"
                    className="w-full px-4 py-3 rounded-xl border-2 border-welli-yellow/30 bg-white text-indigo-950 focus:outline-none focus:border-welli-yellow"
                  />
                )}
                <div className="text-right">
                  <button
                    onClick={() => setSub("patient")}
                    disabled={!time || (time === "other" && !customTime.trim())}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Siguiente <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {sub === "patient" && (
              <motion.div
                key="patient" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-display text-2xl md:text-3xl font-bold text-indigo-950 text-center">
                  ¿Qué paciente vamos a trabajar?
                </h3>
                <p className="text-indigo-800 italic text-center max-w-2xl mx-auto">
                  "Piense en alguien que valoró esta semana, o la pasada, que se quedó pendiente — que usted sintió que
                  sí necesitaba el tratamiento pero no terminó cerrando."
                </p>

                <div className="space-y-3">
                  {patientChoices.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setPatientChoice(c.id)}
                      className={`w-full p-5 rounded-2xl border-2 text-left transition-all ${
                        patientChoice === c.id
                          ? "border-welli-yellow bg-welli-yellow/20"
                          : "border-welli-yellow/20 bg-white hover:border-welli-yellow/40"
                      }`}
                    >
                      <p className="font-bold text-indigo-950">{c.label}</p>
                    </button>
                  ))}
                </div>

                {patientChoice === "has-name" && (
                  <input
                    type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Primer nombre del paciente"
                    className="w-full px-4 py-3 rounded-xl border-2 border-welli-yellow/30 bg-white text-indigo-950 focus:outline-none focus:border-welli-yellow"
                  />
                )}

                {patientChoice && patientChoice !== "has-name" && (
                  <div className="rounded-2xl bg-welli-yellow/10 border-2 border-welli-yellow/40 p-4 text-sm text-indigo-800 italic">
                    {patientChoices.find((c) => c.id === patientChoice)?.followup}
                  </div>
                )}

                <div className="text-right">
                  <button
                    onClick={handleConfirm}
                    disabled={!canConfirmPatient}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Confirmar segunda sesión <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Confirmed
  const f = scheduledFollowup!;
  return (
    <div className="module-container">
      <div className="max-w-2xl mx-auto space-y-6 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex">
          <CheckCircle2 className="w-20 h-20 text-welli-yellow" />
        </motion.div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-indigo-950">
          Su segunda sesión está confirmada
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="rounded-3xl bg-card border-2 border-welli-yellow/40 p-6 text-left space-y-3"
        >
          <p className="text-xs font-bold text-welli-yellow tracking-widest text-center">SEGUNDA SESIÓN</p>
          <p className="font-display text-lg font-bold text-indigo-950 text-center">Dr. {name}</p>
          <div className="border-t border-welli-yellow/30 pt-3 space-y-2 text-indigo-950">
            <p className="flex items-center gap-3"><Calendar className="w-5 h-5 text-welli-yellow" /> {f.date}</p>
            <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-welli-yellow" /> {f.time} · 15 minutos</p>
            <p className="flex items-center gap-3">
              <User className="w-5 h-5 text-welli-yellow" />
              {f.patientName ? `Caso: ${f.patientName}` : "Caso se define en la sesión"}
            </p>
            <p className="flex items-center gap-3 text-sm text-indigo-800">
              <MessageCircle className="w-4 h-4 text-welli-yellow" /> Recordatorio por WhatsApp 30 min antes
            </p>
          </div>
        </motion.div>

        <p className="text-indigo-800 italic leading-relaxed">
          "Doctor {name}, gracias. Cuando hagamos esa aplicación juntos, va a ver lo simple que es. Y desde ese día,
          Welli va a ser parte de su consulta."
        </p>

        <button
          onClick={onComplete}
          className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
        >
          Continuar al cierre <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ExpressAliadosModule6FirstActivation;
