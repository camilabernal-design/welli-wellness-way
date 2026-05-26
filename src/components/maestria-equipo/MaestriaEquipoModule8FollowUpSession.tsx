import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Trophy, AlertCircle } from "lucide-react";

interface Props { onComplete: () => void; }

const steps = [
  { title: 'Apertura', desc: 'Confirmar el presupuesto que el aliado trae.', time: '2 min' },
  { title: 'Aplicación en vivo', desc: '8 min haciendo la solicitud real con un paciente real.', time: '8 min' },
  { title: 'Resultado', desc: 'Aprobado: se festeja. Rechazado: se transforma en Plan B.', time: '2 min' },
  { title: 'Incentivos', desc: 'Welli Points y referidos. Ahora sí, con confianza ganada.', time: '2 min' },
  { title: 'Próximo seguimiento', desc: 'Define cuándo vuelves a chequear progreso.', time: '1 min' },
];

const MaestriaEquipoModule8FollowUpSession = ({ onComplete }: Props) => (
  <div className="module-container">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
          <PlayCircle className="w-4 h-4 text-secondary" />
          <span className="text-xs font-bold text-indigo-950">Módulo 8 · Segunda sesión</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
          La pieza más importante de toda la metodología
        </h1>
        <p className="text-indigo-800">El aliado no rompe la barrera con teoría. La rompe haciendo el primer cierre acompañado.</p>
      </motion.div>

      <div className="bg-card rounded-2xl border-2 border-secondary/30 p-6 mb-6">
        <p className="text-xs font-bold text-secondary uppercase mb-4">Estructura de 15 minutos</p>
        <div className="space-y-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex gap-4 p-4 rounded-xl bg-welli-yellow/5 border border-welli-yellow/20"
            >
              <div className="w-10 h-10 rounded-full bg-welli-yellow flex items-center justify-center flex-shrink-0 font-bold text-indigo-950">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-indigo-950">{s.title}</h3>
                  <span className="text-xs font-bold text-welli-yellow">{s.time}</span>
                </div>
                <p className="text-sm text-indigo-800">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="rounded-2xl border-2 border-secondary/40 bg-secondary/10 p-6">
          <Trophy className="w-8 h-8 text-secondary mb-2" />
          <h3 className="font-bold text-indigo-950 mb-1">Aprobado</h3>
          <p className="text-sm text-indigo-800">Celebra con el doctor. Marca el momento. Reforzamiento positivo del comportamiento.</p>
        </div>
        <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6">
          <AlertCircle className="w-8 h-8 text-destructive mb-2" />
          <h3 className="font-bold text-indigo-950 mb-1">Rechazado</h3>
          <p className="text-sm text-indigo-800">No es fracaso, es aprendizaje del Plan B. "Pidamos con un familiar o pareja. Veamos cuál es el cupo."</p>
        </div>
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

export default MaestriaEquipoModule8FollowUpSession;
