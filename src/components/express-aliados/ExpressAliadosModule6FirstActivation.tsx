import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, MessageCircle, Eye, Heart } from "lucide-react";
import { useSession } from "./SessionContext";

interface Props { onComplete: () => void; }

const timeOptions = [
  { id: 'tomorrow-am', label: 'Mañana en la mañana' },
  { id: 'tomorrow-pm', label: 'Mañana en la tarde' },
  { id: 'day-after', label: 'Pasado mañana' },
  { id: 'other', label: 'Otro día' },
];

const benefits = [
  { icon: Eye, t: 'Ver cómo es el proceso real' },
  { icon: Heart, t: 'Quitar el miedo a ofrecerlo' },
  { icon: CheckCircle2, t: 'Salir con el primer crédito en marcha' },
];

const ExpressAliadosModule6FirstActivation = ({ onComplete }: Props) => {
  const { setSessionData, scheduledFollowup } = useSession();
  const [slot, setSlot] = useState<string | null>(scheduledFollowup ? 'tomorrow-am' : null);
  const [customDate, setCustomDate] = useState("");
  const [time, setTime] = useState(scheduledFollowup?.time || "");
  const [patient, setPatient] = useState(scheduledFollowup?.patientName || "");
  const [confirmed, setConfirmed] = useState(!!scheduledFollowup);

  const canConfirm = slot && time && patient.trim() && (slot !== 'other' || customDate);

  const handleConfirm = () => {
    if (!canConfirm) return;
    const dateLabel = slot === 'other'
      ? customDate
      : timeOptions.find(o => o.id === slot)?.label || '';
    setSessionData({
      scheduledFollowup: { date: dateLabel, time, patientName: patient.trim() },
    });
    setConfirmed(true);
  };

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-indigo-950 mb-3">
            El primer paciente: lo hacemos juntos
          </h1>
          <p className="text-lg md:text-xl text-indigo-800 max-w-2xl mx-auto">
            Ofrecer la primera financiación es lo que más cuesta. Por eso no lo dejamos solo.
          </p>
        </motion.div>

        <div className="bg-card rounded-3xl border-2 border-welli-yellow/40 p-6 mb-6">
          <div className="grid grid-cols-3 gap-2 mb-6">
            {[
              { n: 1, t: 'Hoy', d: 'Capacitación inicial' },
              { n: 2, t: 'Esta semana', d: 'Aplicación en vivo' },
              { n: 3, t: '2 semanas', d: 'Seguimiento' },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-10 h-10 rounded-full bg-welli-yellow mx-auto flex items-center justify-center font-bold text-indigo-950">{s.n}</div>
                <p className="font-bold text-indigo-950 text-sm mt-2">{s.t}</p>
                <p className="text-xs text-indigo-800">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-xl bg-welli-yellow/10 border border-welli-yellow/30 p-3 text-center">
                <b.icon className="w-6 h-6 mx-auto text-welli-yellow mb-1" />
                <p className="text-xs text-indigo-800 font-medium">{b.t}</p>
              </div>
            ))}
          </div>
        </div>

        {!confirmed ? (
          <div className="bg-welli-yellow/10 rounded-3xl border-2 border-welli-yellow/40 p-6 md:p-8 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-welli-yellow" />
              <h2 className="font-display text-2xl font-bold text-indigo-950">Agendemos la segunda sesión</h2>
            </div>

            <p className="text-sm font-bold text-indigo-950 mb-2">¿Cuándo le sirve mejor?</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {timeOptions.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setSlot(o.id)}
                  className={`p-3 rounded-xl border-2 text-sm font-bold transition-all ${
                    slot === o.id ? 'border-welli-yellow bg-welli-yellow/30 text-indigo-950' : 'border-welli-yellow/20 bg-white text-indigo-950 hover:border-welli-yellow/40'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
            {slot === 'other' && (
              <input
                type="text"
                value={customDate}
                onChange={(e) => setCustomDate(e.target.value)}
                placeholder="Ej. Viernes 30 de mayo"
                className="w-full px-4 py-3 rounded-xl border-2 border-welli-yellow/30 bg-white text-indigo-950 mb-4 focus:outline-none focus:border-welli-yellow"
              />
            )}

            <p className="text-sm font-bold text-indigo-950 mb-2">Hora preferida</p>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Ej. 9:30 AM"
              className="w-full px-4 py-3 rounded-xl border-2 border-welli-yellow/30 bg-white text-indigo-950 mb-4 focus:outline-none focus:border-welli-yellow"
            />

            <p className="text-sm font-bold text-indigo-950 mb-2">¿Qué presupuesto traerá? (nombre del paciente)</p>
            <input
              type="text"
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
              placeholder="Nombre del paciente"
              className="w-full px-4 py-3 rounded-xl border-2 border-welli-yellow/30 bg-white text-indigo-950 mb-6 focus:outline-none focus:border-welli-yellow"
            />

            <button
              onClick={handleConfirm}
              disabled={!canConfirm}
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${
                canConfirm ? 'bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 shadow-lg' : 'bg-welli-yellow/30 text-indigo-950/50 cursor-not-allowed'
              }`}
            >
              Confirmar segunda sesión
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary/10 rounded-3xl border-2 border-secondary/40 p-8 mb-6 text-center"
          >
            <CheckCircle2 className="w-14 h-14 mx-auto text-secondary mb-3" />
            <h3 className="font-display text-2xl font-bold text-indigo-950 mb-3">Segunda sesión confirmada</h3>
            <p className="text-lg text-indigo-950 font-bold">
              {scheduledFollowup?.date}, {scheduledFollowup?.time}
            </p>
            <p className="text-indigo-800 mb-3">Paciente: {scheduledFollowup?.patientName}</p>
            <p className="text-sm text-indigo-800/70 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> Recordatorio por WhatsApp 30 min antes.
            </p>
          </motion.div>
        )}

        <div className="text-center">
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Continuar <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule6FirstActivation;
