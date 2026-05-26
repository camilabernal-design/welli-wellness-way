import { motion } from "framer-motion";
import { ArrowRight, Clock, AlertTriangle } from "lucide-react";

interface Props { onComplete: () => void; }

const sections = [
  { time: 5, label: 'Indagación inicial', color: 'bg-welli-yellow' },
  { time: 3, label: 'Solución contextualizada al dolor', color: 'bg-secondary' },
  { time: 8, label: 'Funcionamiento de la plataforma', color: 'bg-welli-yellow' },
  { time: 4, label: 'Manejo de respuestas comunes', color: 'bg-secondary' },
  { time: 3, label: 'Cierre con activación cerrada', color: 'bg-welli-yellow' },
  { time: 2, label: 'Próximos pasos', color: 'bg-secondary' },
];

const total = sections.reduce((s, x) => s + x.time, 0);

const warnings = [
  'El aliado mira el celular más de 3 veces → resume y avanza.',
  'Hace preguntas operativas básicas → vuelve a "cómo funciona", saltaste muy rápido.',
  'No te interrumpe nunca → no se está conectando, haz una pregunta directa.',
];

const MaestriaEquipoModule5SessionStructure = ({ onComplete }: Props) => (
  <div className="module-container">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
          <Clock className="w-4 h-4 text-secondary" />
          <span className="text-xs font-bold text-indigo-950">Módulo 5 · Estructura</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
          Anatomía de una sesión de 25 min
        </h1>
      </motion.div>

      <div className="bg-card rounded-2xl border-2 border-secondary/30 p-6 mb-6">
        <div className="flex h-3 rounded-full overflow-hidden mb-4">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              animate={{ width: `${(s.time / total) * 100}%` }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={s.color}
            />
          ))}
        </div>
        <div className="space-y-2">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-welli-yellow/5 border border-welli-yellow/20"
            >
              <div className={`w-3 h-3 rounded-full ${s.color}`} />
              <span className="font-bold text-indigo-950 w-12">{s.time} min</span>
              <span className="text-sm text-indigo-800 flex-1">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-6 mb-6">
        <h3 className="font-bold text-indigo-950 mb-2">Por qué este orden funciona</h3>
        <p className="text-sm text-indigo-800">
          El cliente compra una <strong>herramienta</strong>, no un curso de ventas. Primero aprende a usarla.
          Después aprende a manejar conversaciones con sus pacientes.
        </p>
      </div>

      <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6 mb-10">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <h3 className="font-bold text-indigo-950">Señales de que la sesión está fallando</h3>
        </div>
        <ul className="space-y-2">
          {warnings.map((w, i) => (
            <li key={i} className="text-sm text-indigo-800 flex gap-2">
              <span className="text-destructive">•</span>{w}
            </li>
          ))}
        </ul>
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

export default MaestriaEquipoModule5SessionStructure;
