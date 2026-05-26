import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Pencil } from "lucide-react";
import { useSession, Archetype, archetypeLabel } from "./SessionContext";

interface Props { onComplete: () => void; }

const questions = [
  {
    n: 1,
    main: "¿Cómo llegó a Welli?",
    sub: "¿Qué fue lo que más le llamó la atención?",
    cta: "Siguiente pregunta",
  },
  {
    n: 2,
    main: "¿Trabaja hoy con otro aliado financiero?",
    sub: "¿Cómo le ha ido?",
    cta: "Siguiente pregunta",
  },
  {
    n: 3,
    main: "En su consulta, ¿quién va a estar al frente de ofrecer Welli a los pacientes?",
    sub: "¿Usted, su asistente, o ambos?",
    cta: "Continuemos",
  },
];

const archetypes: { id: Archetype; label: string }[] = [
  { id: 'caidos', label: 'Clínica con presupuestos caídos' },
  { id: 'premium', label: 'Clínica premium' },
  { id: 'sin-aliados', label: 'Clínica sin aliados financieros' },
];

const ExpressAliadosModule2Discovery = ({ onComplete }: Props) => {
  const { archetype, setSessionData } = useSession();
  const [current, setCurrent] = useState(1);
  const [showToggle, setShowToggle] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleNext = () => {
    if (current < 3) {
      setCurrent(current + 1);
    } else {
      setShowToggle(true);
    }
  };

  const handleArchetypeChange = (a: Archetype) => {
    setSessionData({ archetype: a });
    setEditing(false);
  };

  const activeQ = questions[current - 1];
  const prevQs = questions.slice(0, current - 1);

  return (
    <div className="module-container">
      <div className="max-w-3xl mx-auto py-12 space-y-10">
        {/* Título superior fijo */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-2xl md:text-3xl font-bold text-indigo-950 text-center"
        >
          Antes de mostrarle Welli, cuénteme un poco de su consulta:
        </motion.h2>

        {/* Preguntas previas colapsadas */}
        {prevQs.length > 0 && (
          <div className="space-y-2">
            {prevQs.map((q) => (
              <motion.div
                key={q.n}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200"
              >
                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                <p className="text-sm text-slate-600">
                  <span className="font-bold text-slate-700">{q.n}. </span>
                  {q.main}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pregunta activa */}
        <AnimatePresence mode="wait">
          {!showToggle && (
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border-2 border-welli-yellow bg-welli-yellow/10 p-8 md:p-12 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-welli-yellow flex items-center justify-center font-display font-black text-3xl text-indigo-950 flex-shrink-0">
                  {activeQ.n}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-indigo-950 leading-tight">
                    {activeQ.main}
                  </h3>
                  <p className="text-lg text-indigo-800">{activeQ.sub}</p>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-3 text-base px-8 py-4 rounded-2xl font-bold bg-indigo-950 text-white hover:bg-indigo-900 transition-all shadow-md hover:shadow-lg"
                >
                  {activeQ.cta} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle de arquetipo (sutil) */}
        {showToggle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">
                Perfil identificado en preparación
              </p>
              <p className="text-sm font-bold text-indigo-950 mb-4">● {archetypeLabel(archetype)}</p>

              {!editing ? (
                <>
                  <p className="text-xs text-slate-600 mb-3">
                    ¿Después de esta conversación, sigue siendo el perfil correcto?
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={onComplete}
                      className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
                    >
                      <Check className="w-3 h-3" /> Confirmar
                    </button>
                    <button
                      onClick={() => setEditing(true)}
                      className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg font-medium bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all"
                    >
                      <Pencil className="w-3 h-3" /> Cambiar perfil
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  {archetypes.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => handleArchetypeChange(a.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                        archetype === a.id
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-950'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="text-center">
              <button
                onClick={onComplete}
                className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
              >
                Veamos su agenda <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExpressAliadosModule2Discovery;
