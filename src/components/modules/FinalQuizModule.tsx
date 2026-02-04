import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ArrowRight, CheckCircle2, XCircle, Trophy, RefreshCcw } from "lucide-react";
import confetti from "canvas-confetti";

interface ModuleProps {
  onComplete: () => void;
}

const questions = [
  {
    id: 1,
    question: "¿Estar APROBADO es el último paso para recibir el dinero?",
    options: [
      { text: "Sí, el dinero llega automáticamente", correct: false },
      { text: "No, falta solicitar el DESEMBOLSO en el portal", correct: true },
      { text: "Depende del monto aprobado", correct: false },
    ],
    feedback: {
      correct: "¡Exacto! Debes solicitar el desembolso en el portal para recibir el dinero.",
      incorrect: "Recuerda: APROBADO ≠ dinero. Debes solicitar el DESEMBOLSO.",
    },
  },
  {
    id: 2,
    question: "¿En cuánto tiempo llega el dinero después de solicitar el desembolso?",
    options: [
      { text: "1-2 semanas", correct: false },
      { text: "24-48 horas hábiles", correct: true },
      { text: "Inmediatamente", correct: false },
    ],
    feedback: {
      correct: "¡Correcto! El dinero llega en 24-48 horas hábiles.",
      incorrect: "El tiempo es 24-48 horas hábiles después de solicitar el desembolso.",
    },
  },
  {
    id: 3,
    question: "¿Quién puede aplicar por el paciente si este no es aprobado?",
    options: [
      { text: "Solo el paciente puede aplicar", correct: false },
      { text: "Un familiar o AMIGO", correct: true },
      { text: "Nadie, debe esperar 6 meses", correct: false },
    ],
    feedback: {
      correct: "¡Muy bien! Un familiar o amigo puede aplicar para que el tratamiento inicie hoy.",
      incorrect: "Un familiar o AMIGO puede aplicar por el paciente.",
    },
  },
];

const FinalQuizModule = ({ onComplete }: ModuleProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(optionIndex);
    setShowResult(true);

    if (questions[currentQuestion].options[optionIndex].correct) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      if (correctAnswers >= 2) {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
          colors: ["#FF810A", "#8C65C9", "#FFCE00"],
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setCorrectAnswers(0);
    setQuizComplete(false);
  };

  const question = questions[currentQuestion];

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/30 border border-welli-yellow/50 text-foreground mb-6">
            <Award className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-bold">Quiz Final Operativo</span>
          </div>
          <h2 className="section-title">Demuestra lo que aprendiste</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            3 preguntas clave sobre la operación con Welli.
          </p>
        </motion.div>

        {!quizComplete ? (
          <>
            {/* Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center gap-2 mb-8"
            >
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentQuestion
                      ? "bg-welli-yellow w-8"
                      : index < currentQuestion
                      ? "bg-success"
                      : "bg-muted"
                  }`}
                />
              ))}
            </motion.div>

            {/* Question Card */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-elevated p-8 mb-10"
            >
              <p className="text-xl font-bold text-foreground mb-6">
                {question.question}
              </p>

              <div className="space-y-4">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const showCorrectness = showResult && isSelected;

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      whileHover={!showResult ? { scale: 1.01 } : {}}
                      whileTap={!showResult ? { scale: 0.99 } : {}}
                      className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
                        showCorrectness
                          ? option.correct
                            ? "border-success bg-success/10"
                            : "border-danger bg-danger/10"
                          : showResult && option.correct
                          ? "border-success/50 bg-success/5"
                          : "border-border hover:border-welli-yellow/50 bg-card"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex-1 text-foreground">{option.text}</span>
                        {showCorrectness && (
                          option.correct ? (
                            <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
                          ) : (
                            <XCircle className="w-6 h-6 text-danger flex-shrink-0" />
                          )
                        )}
                        {showResult && !isSelected && option.correct && (
                          <CheckCircle2 className="w-6 h-6 text-success/50 flex-shrink-0" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {showResult && selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-xl ${
                    question.options[selectedAnswer].correct
                      ? "bg-success/10 border border-success/30"
                      : "bg-danger/10 border border-danger/30"
                  }`}
                >
                  <p className={`font-medium ${
                    question.options[selectedAnswer].correct ? "text-success" : "text-danger"
                  }`}>
                    {question.options[selectedAnswer].correct
                      ? question.feedback.correct
                      : question.feedback.incorrect}
                  </p>
                </motion.div>
              )}

              {showResult && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 text-center"
                >
                  <button
                    onClick={handleNext}
                    className="btn-welli inline-flex items-center gap-2"
                  >
                    {currentQuestion < questions.length - 1 ? "Siguiente" : "Ver Resultados"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </>
        ) : (
          /* Results Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-elevated p-10 text-center"
          >
            <div className="mb-6">
              <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center ${
                correctAnswers >= 2 ? "bg-success" : "bg-welli-yellow"
              }`}>
                <Trophy className={`w-12 h-12 ${
                  correctAnswers >= 2 ? "text-success-foreground" : "text-welli-yellow-foreground"
                }`} />
              </div>
            </div>

            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              {correctAnswers >= 2 ? "¡Excelente trabajo!" : "Buen intento"}
            </h3>
            
            <p className="text-xl text-muted-foreground mb-6">
              Respondiste correctamente{" "}
              <span className="font-bold text-welli-yellow">{correctAnswers}</span> de{" "}
              <span className="font-bold">{questions.length}</span> preguntas
            </p>

            {correctAnswers === questions.length && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-success/20 text-success font-bold mb-6"
              >
                <Award className="w-5 h-5" />
                Maestro Operativo Welli
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {correctAnswers < questions.length && (
                <button onClick={handleRestart} className="btn-secondary inline-flex items-center gap-2">
                  <RefreshCcw className="w-4 h-4" />
                  Intentar de nuevo
                </button>
              )}
              <button onClick={onComplete} className="btn-welli inline-flex items-center gap-2">
                Finalizar Capacitación
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FinalQuizModule;
