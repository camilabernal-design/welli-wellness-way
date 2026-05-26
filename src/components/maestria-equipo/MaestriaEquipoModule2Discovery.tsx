import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, Lightbulb, Building2 } from "lucide-react";

const knownAllies = [
  { name: "Existe Crédito", commonPain: "Desembolso lento" },
  { name: "Medipay", commonPain: "Tasa alta, pero rápido" },
  { name: "Sí Crédito", commonPain: "Burocrático" },
];

interface Props { onComplete: () => void; }

const questions = [
  {
    q: "¿Cómo llegó a Welli? ¿Por qué nos está considerando?",
    answers: [
      { text: "Vi una publicidad / referido", direction: "Empieza por el caso de éxito de quien refirió." },
      { text: "Tengo pacientes que no pueden pagar", direction: "Va por dolor financiero claro. Profundiza con la 4ta pregunta." },
      { text: "Solo estoy explorando", direction: "Va sin dolor articulado. Crear conciencia antes de presentar." },
    ],
  },
  {
    q: "¿Ya cuenta con otros aliados financieros en su consulta?",
    answers: [
      { text: "Sí, tengo otro aliado", direction: "Compara sin atacar. Pregunta qué le falta hoy." },
      { text: "No, ninguno", direction: "Eres el primero. Educa sin asumir conocimiento." },
      { text: "Tuve uno antes y no funcionó", direction: "Profundiza en el dolor pasado antes de prometer." },
    ],
  },
  {
    q: "¿Quién va a estar al frente — usted, su asistente, o ambos?",
    answers: [
      { text: "Solo yo", direction: "Sesión enfocada en el doctor. Velocidad y autonomía." },
      { text: "Mi asistente / secretaria", direction: "Agenda segunda sesión incluyéndola. Material POP." },
      { text: "Ambos", direction: "Define roles claros. Quién aplica, quién hace seguimiento." },
    ],
  },
];


const MaestriaEquipoModule2Discovery = ({ onComplete }: Props) => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showConditional, setShowConditional] = useState(false);

  const current = questions[step];
  const isLast = step === questions.length - 1;

  const next = () => {
    setSelected(null);
    if (isLast) {
      setShowConditional(true);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
            <MessageSquare className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold text-indigo-950">Módulo 2 · Indagación</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Las 3 preguntas que abren la sesión
          </h1>
          <p className="text-indigo-800">Practica recibir respuestas y elegir la dirección correcta.</p>
        </motion.div>

        {!showConditional ? (
          <>
            <div className="flex justify-center gap-2 mb-6">
              {questions.map((_, i) => (
                <div key={i} className={`h-2 w-12 rounded-full ${i <= step ? 'bg-secondary' : 'bg-secondary/20'}`} />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-card rounded-2xl border-2 border-secondary/30 p-6 md:p-8 mb-6"
              >
                <p className="text-xs font-bold text-secondary mb-2">Pregunta {step + 1}</p>
                <h2 className="font-display text-xl md:text-2xl font-bold text-indigo-950 mb-6">"{current.q}"</h2>

                <p className="text-sm font-bold text-indigo-800 mb-3">Respuestas típicas del aliado:</p>
                <div className="space-y-2">
                  {current.answers.map((a, i) => (
                    <button
                      key={i}
                      onClick={() => setSelected(i)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        selected === i
                          ? 'border-welli-yellow bg-welli-yellow/20'
                          : 'border-welli-yellow/20 bg-white hover:border-welli-yellow/40'
                      }`}
                    >
                      <p className="font-bold text-indigo-950 text-sm mb-1">"{a.text}"</p>
                      {selected === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-2 pt-2 border-t border-welli-yellow/30 flex items-start gap-2"
                        >
                          <Lightbulb className="w-4 h-4 text-welli-yellow mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-indigo-800"><strong>Dirección:</strong> {a.direction}</p>
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>

                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 pt-5 border-t border-secondary/20"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-secondary" />
                      <p className="text-sm font-bold text-indigo-950">
                        Si el aliado menciona uno de estos, su dolor probable es:
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {knownAllies.map((a) => (
                        <div key={a.name} className="rounded-xl border border-secondary/30 bg-secondary/5 p-3">
                          <p className="font-bold text-indigo-950 text-sm mb-1">{a.name}</p>
                          <p className="text-xs text-indigo-800 italic">"{a.commonPain}"</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="text-center">
              <button
                onClick={next}
                disabled={selected === null}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all ${
                  selected !== null
                    ? 'bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 shadow-lg'
                    : 'bg-welli-yellow/30 text-indigo-950/50 cursor-not-allowed'
                }`}
              >
                {isLast ? 'Ver pregunta condicional' : 'Siguiente pregunta'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-welli-yellow/10 rounded-2xl border-2 border-welli-yellow/40 p-6 md:p-8 mb-6">
              <p className="text-xs font-bold text-welli-yellow uppercase mb-2">Pregunta condicional</p>
              <h2 className="font-display text-xl md:text-2xl font-bold text-indigo-950 mb-3">"¿Cuántos presupuestos se le han perdido en la última semana?"</h2>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white/60 mb-4">
                <Lightbulb className="w-4 h-4 text-welli-yellow mt-0.5 flex-shrink-0" />
                <p className="text-sm text-indigo-800">Pregunta condicional — usa solo si el aliado ya mencionó dolor financiero.</p>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-white border border-welli-yellow/30">
                <p className="text-xs font-bold text-indigo-950/70 uppercase mb-2">Para aliados de perfil premium, reformula así:</p>
                <p className="font-display text-lg font-bold text-indigo-950 italic">
                  "¿Cuántos pacientes valoró el mes pasado que no terminaron tomando el tratamiento?"
                </p>
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
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MaestriaEquipoModule2Discovery;
