import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Target, XCircle, CheckCircle2 } from "lucide-react";

interface Props { onComplete: () => void; }

const scenarios = [
  {
    objection: '"No tengo tiempo mañana"',
    weak: 'Perfecto, cuando pueda me avisa.',
    strong: 'Perfecto, ¿el jueves entonces? ¿AM o PM?',
  },
  {
    objection: '"Mejor la próxima semana"',
    weak: 'Vale, hablamos la próxima.',
    strong: 'Le agendo el lunes a las 9 AM. Confirmo el viernes.',
  },
  {
    objection: '"No estoy seguro de tener pacientes"',
    weak: 'Ok, cuando tenga me avisa.',
    strong: 'Justo por eso lo hacemos. Identificamos uno juntos antes.',
  },
];

const MaestriaEquipoModule7ClosedActivation = ({ onComplete }: Props) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
            <Target className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold text-indigo-950">Módulo 7 · Activación cerrada</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Nunca cierres con compromiso vago
          </h1>
          <p className="text-indigo-800">Siempre día. Siempre hora. Siempre dos opciones.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-destructive" />
              <p className="font-bold text-indigo-950">Cierre débil</p>
            </div>
            <p className="text-sm text-indigo-800 italic">"Cualquier cosa me avisa, hablamos pronto."</p>
          </div>
          <div className="rounded-2xl border-2 border-secondary/40 bg-secondary/10 p-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <p className="font-bold text-indigo-950">Cierre fuerte</p>
            </div>
            <p className="text-sm text-indigo-800 italic">
              "Le propongo una segunda sesión de 15 minutos esta semana. Usted me trae uno de los presupuestos que mencionó, hacemos la aplicación juntos en línea. ¿Le sirve mejor mañana en la mañana o en la tarde?"
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-6 mb-8">
          <h3 className="font-bold text-indigo-950 mb-2">Técnica de las dos opciones</h3>
          <p className="text-sm text-indigo-800">
            Nunca preguntes <strong>"¿le sirve mañana?"</strong> → cierre binario que invita al "no".
            <br />Pregunta <strong>"¿AM o PM?"</strong> → ya asumiste el sí, eliges el cuándo.
          </p>
        </div>

        <h2 className="font-bold text-indigo-950 mb-3">Simulador: cómo manejar resistencias</h2>
        <div className="space-y-3 mb-10">
          {scenarios.map((s, i) => (
            <div key={i} className="bg-card rounded-2xl border-2 border-secondary/30 p-5">
              <p className="font-display text-lg font-bold text-indigo-950 mb-3">{s.objection}</p>
              <button
                onClick={() => setRevealed({ ...revealed, [i]: !revealed[i] })}
                className="text-xs font-bold text-secondary underline mb-2"
              >
                {revealed[i] ? 'Ocultar' : 'Ver reformulación'}
              </button>
              <AnimatePresence>
                {revealed[i] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid md:grid-cols-2 gap-3 mt-3"
                  >
                    <div className="p-3 rounded-xl bg-destructive/5 border border-destructive/20">
                      <p className="text-xs font-bold text-destructive mb-1">Débil</p>
                      <p className="text-sm text-indigo-800 italic">"{s.weak}"</p>
                    </div>
                    <div className="p-3 rounded-xl bg-welli-yellow/10 border border-welli-yellow/30">
                      <p className="text-xs font-bold text-welli-yellow mb-1">Fuerte</p>
                      <p className="text-sm text-indigo-800 italic">"{s.strong}"</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
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
};

export default MaestriaEquipoModule7ClosedActivation;
