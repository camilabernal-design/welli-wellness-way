import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Key, MessageCircle, PlayCircle, CheckCircle2, Gift, Users, Image as ImageIcon, ArrowRight } from "lucide-react";
import { useSession, archetypeLabel } from "./SessionContext";

interface Props { onComplete: () => void; }

const persistSessionMetrics = (data: {
  allyName: string; allySpecialty: string; archetype: string | null;
  totalDurationMinutes: number; painCalculation: unknown; scheduledFollowup: unknown;
}) => {
  try {
    const raw = localStorage.getItem("express_aliados_completed_sessions");
    const arr = raw ? JSON.parse(raw) : [];
    arr.push({
      sessionId: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      completedAt: Date.now(),
      ...data,
      modulesCompleted: [1, 2, 3, 4, 5, 6, 7],
    });
    localStorage.setItem("express_aliados_completed_sessions", JSON.stringify(arr));
  } catch {}
};

const ExpressAliadosModule7NextSteps = ({ onComplete }: Props) => {
  const session = useSession();
  const { allyName, allySpecialty, archetype, scheduledFollowup, sessionStartTime, resetSession } = session;
  const [stage, setStage] = useState<"timeline" | "summary">("timeline");

  const name = allyName?.trim() || "doctor";

  const followupDate = scheduledFollowup?.date || "—";
  const followupTime = scheduledFollowup?.time || "—";
  const followupPatient = scheduledFollowup?.patientName || "Caso a definir";

  const handleFinish = () => {
    const totalDurationMinutes = sessionStartTime
      ? Math.max(1, Math.round((Date.now() - sessionStartTime) / 60000))
      : 0;
    persistSessionMetrics({
      allyName, allySpecialty, archetype,
      totalDurationMinutes,
      painCalculation: session.painCalculation,
      scheduledFollowup: session.scheduledFollowup,
    });
    setStage("summary");
  };

  const handleBackToHub = () => {
    resetSession();
    onComplete();
  };

  if (stage === "summary") {
    const duration = sessionStartTime ? Math.max(1, Math.round((Date.now() - sessionStartTime) / 60000)) : 0;
    return (
      <div className="module-container">
        <div className="max-w-2xl mx-auto bg-card border-2 border-welli-yellow/40 rounded-3xl p-8 space-y-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-welli-yellow" />
            <h2 className="font-display text-2xl font-bold text-indigo-950">Sesión completada</h2>
          </div>
          <div className="space-y-1 text-indigo-950 text-sm">
            <p><strong>Aliado:</strong> {allyName || "—"}</p>
            <p><strong>Especialidad:</strong> {allySpecialty || "—"}</p>
            <p><strong>Perfil:</strong> {archetypeLabel(archetype)}</p>
            <p><strong>Duración:</strong> {duration} minutos</p>
          </div>
          <div className="border-t border-welli-yellow/30 pt-4">
            <p className="font-bold text-indigo-950 mb-2">Segunda sesión:</p>
            <p className="text-sm text-indigo-800">{followupDate} · {followupTime} · {followupPatient}</p>
          </div>
          <div className="border-t border-welli-yellow/30 pt-4 space-y-2">
            <p className="font-bold text-indigo-950 mb-2">Próximos pasos para usted:</p>
            {["Enviar credenciales (próxima hora)", "Enviar WhatsApp con material", "Confirmar 2ª sesión el día antes", "Registrar en HubSpot"].map((t, i) => (
              <label key={i} className="flex items-center gap-2 text-sm text-indigo-800">
                <input type="checkbox" className="w-4 h-4" /> {t}
              </label>
            ))}
          </div>
          <button
            onClick={handleBackToHub}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg"
          >
            <Home className="w-5 h-5" /> Volver al hub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Momento 1 — Línea de tiempo */}
        <div className="space-y-3 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950">
            Lo que pasa de aquí en adelante
          </h1>
          <p className="text-indigo-800 italic">Le hago un mapa rápido para que sepa qué esperar.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="rounded-3xl bg-welli-yellow/10 border-2 border-welli-yellow/40 p-5 space-y-2">
            <Key className="w-7 h-7 text-welli-yellow" />
            <p className="text-xs font-bold text-welli-yellow tracking-widest">HOY</p>
            <p className="font-display font-bold text-indigo-950">Credenciales del Portal</p>
            <ul className="text-xs text-indigo-800 space-y-1">
              <li>• Usuario y contraseña del Portal del Aliado</li>
              <li>• Link directo de Welli Check para su clínica</li>
              <li>• Mi número directo de WhatsApp</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-welli-yellow/10 border-2 border-welli-yellow/40 p-5 space-y-2">
            <MessageCircle className="w-7 h-7 text-welli-yellow" />
            <p className="text-xs font-bold text-welli-yellow tracking-widest">MAÑANA</p>
            <p className="font-display font-bold text-indigo-950">WhatsApp con material</p>
            <ul className="text-xs text-indigo-800 space-y-1">
              <li>• Video de cómo aplicar (referencia rápida)</li>
              <li>• Material POP digital</li>
              <li>• Recordatorio de su segunda sesión</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-welli-yellow/20 border-2 border-welli-yellow p-5 space-y-2 shadow-lg">
            <PlayCircle className="w-7 h-7 text-welli-yellow" />
            <p className="text-xs font-bold text-welli-yellow tracking-widest">ESTA SEMANA</p>
            <p className="font-display font-bold text-indigo-950">Segunda sesión</p>
            <p className="text-sm font-bold text-indigo-950">{followupDate}, {followupTime}</p>
            <p className="text-xs text-indigo-800">Paciente: {followupPatient}</p>
            <p className="text-xs text-indigo-800">15 minutos. Aplicación en vivo conmigo guiándolo.</p>
          </div>

          <div className="rounded-3xl bg-welli-yellow/10 border-2 border-welli-yellow/40 p-5 space-y-2">
            <CheckCircle2 className="w-7 h-7 text-welli-yellow" />
            <p className="text-xs font-bold text-welli-yellow tracking-widest">ESTE MES</p>
            <p className="font-display font-bold text-indigo-950">Primer desembolso</p>
            <p className="text-xs text-indigo-800">
              En las próximas 4 semanas debería tener su primer desembolso de Welli.
            </p>
            <p className="text-xs text-indigo-800">Le hago seguimiento personalmente cada 5-7 días.</p>
          </div>
        </div>

        {/* Momento 2 — Beneficios */}
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-bold text-indigo-950 text-center">
            Como aliado de Welli, también tiene:
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Gift, t: "Welli Points", d: "Bonificaciones por cada paciente financiado. Se acumulan y se canjean." },
              { icon: Users, t: "Bono referidos", d: "Si recomienda Welli a un colega y se vuelve aliado, recibe bono." },
              { icon: ImageIcon, t: "Material POP", d: "Stickers, fichas digitales, posters para imprimir en su consulta." },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl bg-white border-2 border-welli-yellow/30 p-5 text-center">
                <b.icon className="w-8 h-8 mx-auto text-welli-yellow mb-2" />
                <p className="font-display font-bold text-indigo-950">{b.t}</p>
                <p className="text-xs text-indigo-800 mt-1">{b.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-indigo-800 italic">
            De todo esto le mando el detalle por WhatsApp esta tarde — para que lo pueda revisar con calma cuando tenga tiempo.
          </p>
        </div>

        {/* Momento 3 — Cierre */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="rounded-3xl bg-gradient-to-br from-welli-yellow/20 via-welli-yellow/10 to-transparent p-10 text-center space-y-4"
        >
          <p className="font-display text-2xl md:text-3xl font-bold text-indigo-950">Gracias por su tiempo.</p>
          <p className="text-lg text-indigo-800">
            Nos vemos <strong className="text-indigo-950">{followupDate}, {followupTime}</strong>.
          </p>
          <p className="font-display text-xl md:text-2xl font-bold text-welli-yellow">Vamos juntos.</p>
        </motion.div>

        <div className="text-center">
          <button
            onClick={handleFinish}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Finalizar sesión <CheckCircle2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule7NextSteps;
