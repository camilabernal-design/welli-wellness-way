import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, CheckCircle2, XCircle, ArrowRight, MessageSquare, RefreshCw } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const questions = [
  {
    id: 1,
    question: "¿Pudiste ver los videos de capacitación en la plataforma?",
    options: ["Sí, todos", "Solo algunos", "Aún no los he visto"],
  },
  {
    id: 2,
    question: "¿Practicaste una solicitud simulada en tu panel?",
    options: ["Sí, ya lo hice", "No, pero lo haré pronto", "Necesito ayuda"],
  },
  {
    id: 3,
    question: "¿Qué porcentaje recibe la clínica del monto aprobado?",
    options: ["85%", "95%", "100%"],
    correct: 1,
  },
];

const Phase2Summary = ({ onComplete }: ModuleProps) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const allAnswered = Object.keys(answers).length === questions.length;
  const correctAnswers = questions.filter(q => q.correct !== undefined && answers[q.id] === q.correct).length;

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-foreground mb-6">
            <LayoutDashboard className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Resumen Fase 1</span>
          </div>
          <h2 className="section-title">Bienvenido a la Fase 2</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Antes de continuar, repasemos lo que aprendiste en la Fase 1.
          </p>
        </motion.div>

        {/* Recap Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/10 to-secondary/10 border border-welli-yellow/20 mb-10"
        >
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-welli-yellow" />
            Lo que aprendiste en Fase 1:
          </h3>
          <ul className="space-y-3">
            {[
              "El costo de cada paciente que dice 'lo voy a pensar'",
              "Cómo presentar el tratamiento en cuotas, no en totales",
              "Que las consultas de crédito NO afectan el score",
              "Cómo funciona Welli Check en 30 segundos",
              "El proceso de solicitud y el Panel de Admin",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="card-elevated p-8 mb-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-secondary" />
            <h3 className="font-bold text-xl">Preguntas de repaso</h3>
          </div>

          <div className="space-y-8">
            {questions.map((q, qIndex) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + qIndex * 0.1 }}
              >
                <p className="font-medium text-foreground mb-4">{q.question}</p>
                <div className="grid md:grid-cols-3 gap-3">
                  {q.options.map((option, optionIndex) => {
                    const isSelected = answers[q.id] === optionIndex;
                    const isCorrect = showResults && q.correct !== undefined && optionIndex === q.correct;
                    const isWrong = showResults && q.correct !== undefined && isSelected && optionIndex !== q.correct;

                    return (
                      <button
                        key={optionIndex}
                        onClick={() => !showResults && handleAnswer(q.id, optionIndex)}
                        disabled={showResults}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          isCorrect
                            ? "border-success bg-success/10"
                            : isWrong
                            ? "border-danger bg-danger/10"
                            : isSelected
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50 bg-card"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{option}</span>
                          {isCorrect && <CheckCircle2 className="w-5 h-5 text-success" />}
                          {isWrong && <XCircle className="w-5 h-5 text-danger" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {!showResults && allAnswered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center"
            >
              <button
                onClick={handleSubmit}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Ver resultados
              </button>
            </motion.div>
          )}

          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-4 rounded-xl bg-success/10 border border-success/30 text-center"
            >
              <p className="font-medium text-success">
                ¡Buen repaso! Continuemos con las herramientas de crecimiento.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA - Always enabled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Continuar a Herramientas</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Phase2Summary;
