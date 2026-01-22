import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, XCircle, GraduationCap, Trophy, RefreshCcw, Star } from "lucide-react";
import confetti from "canvas-confetti";

interface Module6Props {
  onComplete: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es la principal razón por la que los pacientes dicen 'lo voy a pensar'?",
    options: [
      "No confían en el médico",
      "El precio total los asusta",
      "No tienen seguro médico",
      "No entienden el tratamiento",
    ],
    correctIndex: 1,
  },
  {
    id: 2,
    question: "¿Qué porcentaje adicional facturan los aliados que usan Welli proactivamente?",
    options: ["20%", "30%", "40%", "50%"],
    correctIndex: 2,
  },
  {
    id: 3,
    question: "¿Por qué Welli es mejor opción que una tarjeta de crédito para el paciente?",
    options: [
      "Tiene intereses más bajos",
      "Preserva su cupo de emergencia",
      "Da más puntos de fidelidad",
      "No requiere historial crediticio",
    ],
    correctIndex: 1,
  },
  {
    id: 4,
    question: "¿Qué es la 'Receta Financiera' de Welli?",
    options: [
      "Un préstamo bancario tradicional",
      "Un documento que muestra el tratamiento + la cuota mensual accesible",
      "Un seguro de salud",
      "Una tarjeta de crédito médica",
    ],
    correctIndex: 1,
  },
  {
    id: 5,
    question: "¿Cuánto tiene disponible en efectivo el paciente promedio para un tratamiento?",
    options: ["50% del valor", "35% del valor", "20% del valor", "10% del valor"],
    correctIndex: 2,
  },
];

const Module6Certification = ({ onComplete }: Module6Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);

  const question = questions[currentQuestion];
  const score = selectedAnswers.filter(
    (answer, index) => answer === questions[index].correctIndex
  ).length;
  const passed = score >= 4;

  useEffect(() => {
    if (examCompleted && passed) {
      // Fire confetti!
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#10b981", "#14b8a6", "#22c55e"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#10b981", "#14b8a6", "#22c55e"],
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [examCompleted, passed]);

  const handleSelectAnswer = (optionIndex: number) => {
    if (showResult) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setExamCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setShowResult(false);
    setExamCompleted(false);
  };

  return (
    <div className="module-container">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Examen de Certificación</span>
          </div>
          <h2 className="section-title">Demuestra lo que aprendiste</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Responde correctamente 4 de 5 preguntas para obtener tu certificación.
          </p>
        </motion.div>

        {!examCompleted ? (
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
                  className={`w-3 h-3 rounded-full transition-colors ${
                    selectedAnswers[index] !== null
                      ? selectedAnswers[index] === questions[index].correctIndex
                        ? "bg-success"
                        : "bg-danger"
                      : index === currentQuestion
                      ? "bg-primary"
                      : "bg-border"
                  }`}
                />
              ))}
            </motion.div>

            {/* Question Card */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-elevated p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {score}/{questions.length} correctas
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                {question.question}
              </h3>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={showResult}
                    whileHover={!showResult ? { scale: 1.01 } : {}}
                    whileTap={!showResult ? { scale: 0.99 } : {}}
                    className={`w-full text-left option-card ${
                      showResult
                        ? selectedAnswers[currentQuestion] === index
                          ? index === question.correctIndex
                            ? "correct"
                            : "incorrect"
                          : index === question.correctIndex
                          ? "correct opacity-70"
                          : ""
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          showResult
                            ? index === question.correctIndex
                              ? "border-success bg-success text-success-foreground"
                              : selectedAnswers[currentQuestion] === index
                              ? "border-danger bg-danger text-danger-foreground"
                              : "border-border"
                            : "border-border"
                        }`}
                      >
                        {showResult && index === question.correctIndex && (
                          <CheckCircle2 className="w-4 h-4" />
                        )}
                        {showResult &&
                          index !== question.correctIndex &&
                          selectedAnswers[currentQuestion] === index && (
                            <XCircle className="w-4 h-4" />
                          )}
                        {!showResult && (
                          <span className="text-sm font-medium text-muted-foreground">
                            {String.fromCharCode(65 + index)}
                          </span>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Next Button */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center"
                  >
                    <button onClick={handleNext} className="btn-primary">
                      {currentQuestion < questions.length - 1
                        ? "Siguiente pregunta"
                        : "Ver resultado"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            {passed ? (
              <>
                {/* Diploma */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="card-elevated p-10 bg-gradient-to-br from-card to-accent/5 border-2 border-accent/30 relative overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4">
                    <Star className="w-6 h-6 text-accent/30" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 text-accent/30" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Star className="w-6 h-6 text-accent/30" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Star className="w-6 h-6 text-accent/30" />
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center mx-auto mb-6"
                  >
                    <Trophy className="w-12 h-12 text-accent-foreground" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
                      Certificado de
                    </p>
                    <h3 className="font-display text-4xl font-bold gradient-text mb-4">
                      Aliado Platinum
                    </h3>
                    <p className="text-lg text-foreground mb-6">
                      Has demostrado dominio de las técnicas de venta empática con Welli
                    </p>

                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 text-accent mb-8">
                      <Award className="w-5 h-5" />
                      <span className="font-bold">
                        {score}/{questions.length} respuestas correctas
                      </span>
                    </div>

                    <div className="border-t border-border pt-6">
                      <p className="text-sm text-muted-foreground">
                        Fecha de certificación: {new Date().toLocaleDateString("es-CO")}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-8"
                >
                  <button onClick={onComplete} className="btn-neon text-lg">
                    ¡Felicitaciones! Comenzar a vender con Welli
                  </button>
                </motion.div>
              </>
            ) : (
              <>
                <div className="card-elevated p-10">
                  <div className="w-20 h-20 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-6">
                    <RefreshCcw className="w-10 h-10 text-warning" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    ¡Casi lo logras!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Obtuviste {score} de 5 respuestas correctas. 
                    Necesitas al menos 4 para certificarte.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={handleRestart} className="btn-primary">
                      Intentar de nuevo
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Module6Certification;
