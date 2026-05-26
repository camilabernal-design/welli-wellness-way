import { motion } from "framer-motion";
import { Home, Key, MessageCircle, PlayCircle, CheckCircle2, Gift, Users, Image } from "lucide-react";
import { useSession } from "./SessionContext";

interface Props { onComplete: () => void; }

const timeline = [
  { icon: Key, t: 'Hoy', d: 'Credenciales del Portal del Aliado' },
  { icon: MessageCircle, t: 'Mañana', d: 'WhatsApp con recordatorios y enlaces' },
  { icon: PlayCircle, t: 'Esta semana', d: 'Segunda sesión: aplicación en vivo' },
  { icon: CheckCircle2, t: 'Este mes', d: 'Primer desembolso completado' },
];

const benefits = [
  { icon: Gift, t: 'Welli Points por paciente financiado' },
  { icon: Users, t: 'Bono por referir colegas' },
  { icon: Image, t: 'Material POP para el consultorio' },
];

const ExpressAliadosModule7NextSteps = ({ onComplete }: Props) => {
  const { allyName, resetSession } = useSession();

  const handleFinish = () => {
    resetSession();
    onComplete();
  };

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-indigo-950 mb-3">
            ¿Qué sigue ahora?
          </h1>
          <p className="text-lg text-indigo-800">El camino claro de los próximos 30 días.</p>
        </motion.div>

        <div className="bg-card rounded-3xl border-2 border-welli-yellow/40 p-6 mb-6">
          <div className="space-y-3">
            {timeline.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-welli-yellow/5 border border-welli-yellow/20"
              >
                <div className="w-12 h-12 rounded-xl bg-welli-yellow flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-6 h-6 text-indigo-950" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-indigo-950">{s.t}</p>
                  <p className="text-sm text-indigo-800">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-welli-yellow/10 rounded-3xl border-2 border-welli-yellow/40 p-6 mb-6">
          <h3 className="font-bold text-indigo-950 mb-4">Beneficios adicionales</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-xl bg-white p-4 text-center border border-welli-yellow/20">
                <b.icon className="w-8 h-8 mx-auto text-welli-yellow mb-2" />
                <p className="text-sm text-indigo-800">{b.t}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-indigo-800/70 italic mt-4 text-center">
            Le enviaremos el detalle completo por WhatsApp esta tarde.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="bg-indigo-950 rounded-3xl p-8 text-center mb-8"
        >
          <p className="font-display text-2xl md:text-3xl font-bold text-welli-yellow mb-3">
            ¡Gracias, {allyName || 'doctor/a'}!
          </p>
          <p className="text-white/80">
            Estamos para acompañarle. Cualquier pregunta, escríbanos por WhatsApp en cualquier momento.
          </p>
        </motion.div>

        <div className="text-center">
          <button
            onClick={handleFinish}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            <Home className="w-5 h-5" /> Finalizar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule7NextSteps;
