import { motion } from "framer-motion";
import { ArrowRight, Search, Pause, ShieldAlert } from "lucide-react";

interface Props { onComplete: () => void; }

const chains = [
  {
    seed: '"Tengo presupuestos caídos"',
    steps: ['¿Cuántos en la última semana?', '¿De qué montos?', '¿Por qué se le caen?'],
  },
  {
    seed: '"Tengo otro aliado"',
    steps: ['¿Hace cuánto?', '¿Qué le gusta de ese aliado?', '¿Qué le falta?'],
  },
];

const MaestriaEquipoModule4DeepInquiry = ({ onComplete }: Props) => (
  <div className="module-container">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
          <Search className="w-4 h-4 text-secondary" />
          <span className="text-xs font-bold text-indigo-950">Módulo 4 · Indagación profunda</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
          Hablar menos. Escuchar más.
        </h1>
        <p className="text-indigo-800">Cada respuesta abre una pregunta más específica.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {chains.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="bg-card rounded-2xl border-2 border-secondary/30 p-6"
          >
            <p className="text-xs font-bold text-secondary uppercase mb-2">Ejemplo {i + 1}</p>
            <p className="font-display text-lg font-bold text-indigo-950 mb-4">{c.seed}</p>
            <div className="space-y-2">
              {c.steps.map((s, j) => (
                <div key={j} className="flex items-start gap-2 p-3 rounded-xl bg-welli-yellow/10 border border-welli-yellow/30">
                  <span className="text-xs font-bold text-welli-yellow bg-indigo-950 px-2 py-0.5 rounded-full flex-shrink-0">{j + 1}</span>
                  <p className="text-sm text-indigo-800">"{s}"</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-6 flex gap-4"
        >
          <Pause className="w-10 h-10 text-welli-yellow flex-shrink-0" />
          <div>
            <h3 className="font-bold text-indigo-950 mb-1">Pausa estratégica</h3>
            <p className="text-sm text-indigo-800">Cuando el cliente termina, espera 2 segundos antes de responder. El silencio invita a profundizar.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
          className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6 flex gap-4"
        >
          <ShieldAlert className="w-10 h-10 text-destructive flex-shrink-0" />
          <div>
            <h3 className="font-bold text-indigo-950 mb-1">Evita el sesgo de confirmación</h3>
            <p className="text-sm text-indigo-800">No asumas el dolor antes de escucharlo. Llega sin guion grabado.</p>
          </div>
        </motion.div>
      </div>

      <div className="text-center">
        <button
          onClick={onComplete}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg"
        >
          Continuar
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default MaestriaEquipoModule4DeepInquiry;
