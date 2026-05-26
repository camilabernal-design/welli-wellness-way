import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingDown, Crown, Sparkles, Users } from "lucide-react";

interface Props { onComplete: () => void; }

const archetypes = [
  {
    id: 'A',
    icon: TrendingDown,
    name: 'Clínica con presupuestos caídos',
    signals: ['Cartera con tratamientos no cobrados', 'Agenda con espacios vacíos', 'Menciona pacientes que se fueron sin tratarse'],
    pain: 'Financiero — está dejando ingresos sobre la mesa.',
    approach: 'Recuperación de agenda. Conversión de presupuestos perdidos. Habla de plata.',
  },
  {
    id: 'B',
    icon: Crown,
    name: 'Clínica premium sin dolor visible',
    signals: ['Clínica reconocida y posicionada', 'Dice "yo no necesito esto"', 'Pacientes admiran al profesional'],
    pain: 'Social. El paciente no se atreve a hablar de dinero por respeto.',
    approach: 'Welli como herramienta discreta. El paciente la activa sin pedirle nada al doctor. El doctor no se vuelve vendedor.',
  },
  {
    id: 'C',
    icon: Sparkles,
    name: 'Clínica sin aliados financieros',
    signals: ['Primera exposición al financiamiento', 'Curiosidad sin dolor articulado', 'Llegó por referido o evento'],
    pain: 'Latente. No conoce la pérdida.',
    approach: 'Crear conciencia del dolor antes de presentar la solución. Educa primero.',
  },
];

const MaestriaEquipoModule3Archetypes = ({ onComplete }: Props) => {
  const [selected, setSelected] = useState('A');
  const current = archetypes.find(a => a.id === selected)!;

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
            <Users className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold text-indigo-950">Módulo 3 · Arquetipos</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Tres arquetipos. Tres caminos.
          </h1>
          <p className="text-indigo-800">Selecciona un arquetipo y ajusta el speech.</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 mb-8">
          {archetypes.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelected(a.id)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                selected === a.id
                  ? 'border-welli-yellow bg-welli-yellow/20'
                  : 'border-welli-yellow/20 bg-white hover:border-welli-yellow/40'
              }`}
            >
              <a.icon className={`w-8 h-8 mx-auto mb-2 ${selected === a.id ? 'text-welli-yellow' : 'text-indigo-800'}`} />
              <p className="font-bold text-indigo-950 text-xs md:text-sm">Arquetipo {a.id}</p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-card rounded-2xl border-2 border-secondary/30 p-6 md:p-8 mb-6"
          >
            <h2 className="font-display text-2xl font-bold text-indigo-950 mb-6">{current.name}</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-welli-yellow/10 border border-welli-yellow/30 p-4">
                <p className="text-xs font-bold text-welli-yellow uppercase mb-2">Señales</p>
                <ul className="space-y-1.5">
                  {current.signals.map((s, i) => (
                    <li key={i} className="text-sm text-indigo-800 flex gap-2">
                      <span className="text-welli-yellow">•</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-destructive/5 border border-destructive/20 p-4">
                <p className="text-xs font-bold text-destructive uppercase mb-2">Dolor real</p>
                <p className="text-sm text-indigo-800">{current.pain}</p>
              </div>
              <div className="rounded-xl bg-secondary/10 border border-secondary/30 p-4">
                <p className="text-xs font-bold text-secondary uppercase mb-2">Enfoque comercial</p>
                <p className="text-sm text-indigo-800">{current.approach}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

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
};

export default MaestriaEquipoModule3Archetypes;
