import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, User, Award, ArrowRight, CheckCircle2, XCircle, RefreshCcw } from "lucide-react";

interface Module4Props {
  onComplete: () => void;
}

interface Scenario {
  id: number;
  objection: string;
  options: {
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

const scenarios: Scenario[] = [
  {
    id: 1,
    objection: "Doctor, el vecino me cobra $2 millones menos por lo mismo.",
    options: [
      {
        text: "Bueno, puede ir donde el vecino si prefiere.",
        isCorrect: false,
        feedback: "Perdiste al paciente sin mostrar el valor diferencial.",
      },  
      {
        text: "Nuestros materiales son de mejor calidad.",
        isCorrect: false,
        feedback: "Válido, pero no resolviste el problema de presupuesto del paciente.",
      },
      {
        text: "Entiendo, pero aquí no solo pagas calidad, sino tranquilidad. Con nuestra Cuota Fija de Bienestar, pagas el tratamiento premium por menos de lo que gastas en una cena afuera, sin descapitalizarte.",
        isCorrect: true,
        feedback: "¡Excelente! Usaste la Cuota Fija de Bienestar para mostrar accesibilidad y valor.",
      }
    ],
  },
  {
    id: 2,
    objection: "No quiero deudas, prefiero ahorrar y volver en un año.",
    options: [
      {
        text: "La inflación en salud sube más rápido que tus ahorros. Con Welli, congelas el precio de hoy y empiezas tu recuperación mañana pagando una Cuota Fija de Bienestar mínima.",
        isCorrect: true,
        feedback: "¡Perfecto! Mostraste urgencia económica con la Cuota Fija de Bienestar.",
      },
      {
        text: "Está bien, lo esperamos cuando tenga el dinero.",
        isCorrect: false,
        feedback: "Perdiste la oportunidad de ayudar al paciente hoy.",
      },
      {
        text: "En un año el tratamiento va a costar más.",
        isCorrect: false,
        feedback: "Usaste miedo sin ofrecer la solución accesible.",
      },
    ],
  },
  {
    id: 3,
    objection: "Mi tarjeta de crédito está al límite por las vacaciones.",
    options: [
      {
        text: "Podemos esperar a que libere cupo.",
        isCorrect: false,
        feedback: "El paciente se fue y probablemente no volverá.",
      },
      {
        text: "Perfecto, porque Welli es un cupo adicional de salud que no toca tus tarjetas. Mantienes tu cupo de crédito para emergencias y manejas tu salud con una Cuota Fija de Bienestar independiente.",
        isCorrect: true,
        feedback: "¡Excelente! Posicionaste Welli como un cupo separado con la Cuota Fija de Bienestar.",
      },
      {
        text: "Las tarjetas tienen intereses más altos.",
        isCorrect: false,
        feedback: "Correcto, pero no conectaste con la solución.",
      },
    ],
  },
  {
    id: 4,
    objection: "¿No puedo ir pagándole a usted cada vez que venga?",
    options: [
      {
        text: "Sí, podemos hacer un acuerdo de pagos.",
        isCorrect: false,
        feedback: "Los acuerdos informales son riesgosos para ambas partes.",
      },
      {
        text: "No aceptamos pagos parciales.",
        isCorrect: false,
        feedback: "Respuesta fría sin ofrecer alternativa.",
      },      {
        text: "Para su seguridad y la nuestra, usamos Welli. Así usted asegura su tratamiento completo desde hoy y crea historial crediticio positivo pagando su Cuota Fija de Bienestar.",
        isCorrect: true,
        feedback: "¡Muy bien! Mostraste el beneficio de crear historial con la Cuota Fija de Bienestar.",
      }
    ],
  },
  {
    id: 5,
    objection: "Mi esposo dice que los intereses son muy altos.",
    options: [
      {
        text: "Los intereses son competitivos con el mercado.",
        isCorrect: false,
        feedback: "Respuesta técnica que no resuelve la objeción.",
      },
      {
        text: "Dile que más caro es postergar la salud. Welli es transparente: pagas una Cuota Fija de Bienestar, sin sorpresas, y puedes abonar a capital cuando quieras sin penalidad.",
        isCorrect: true,
        feedback: "¡Perfecto! Usaste transparencia y la Cuota Fija de Bienestar para vencer la objeción.",
      },
      {
        text: "Puede comparar con otras opciones de financiamiento.",
        isCorrect: false,
        feedback: "Lo enviaste a la competencia sin mostrar el valor de Welli.",
      },
    ],
  },
];

const Module4RolePlay = ({ onComplete }: Module4Props) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [earnedBadges, setEarnedBadges] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const scenario = scenarios[currentScenario];
  const allCompleted = currentScenario >= scenarios.length;

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);

    if (scenario.options[index].isCorrect) {
      setEarnedBadges([...earnedBadges, currentScenario]);
    }
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      // Finish the last scenario and show the completion screen
      setCurrentScenario(scenarios.length);
      setSelectedOption(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentScenario(0);
    setSelectedOption(null);
    setShowResult(false);
    setEarnedBadges([]);
  };

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 text-foreground mb-6">
            <MessageSquare className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-medium">Role-Play Arena: Las 5 Preguntas Difíciles</span>
          </div>
          <h2 className="section-title">Entrena tu respuesta con "Cuota Fija de Bienestar"</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            La respuesta ganadora siempre usa el concepto de <span className="font-bold text-welli-yellow">"Cuota Fija de Bienestar"</span>.
          </p>
        </motion.div>

        {/* Badges Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-4 mb-10"
        >
          {scenarios.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                earnedBadges.includes(index)
                  ? "bg-accent text-accent-foreground"
                  : index === currentScenario
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {earnedBadges.includes(index) ? (
                <Award className="w-6 h-6" />
              ) : (
                <span className="font-bold">{index + 1}</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {allCompleted ? (
          /* Completion Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-elevated p-10 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto">
                <Award className="w-12 h-12 text-accent-foreground" />
              </div>
            </motion.div>

            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              ¡Entrenamiento completado!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Obtuviste{" "}
              <span className="font-bold text-accent">{earnedBadges.length}</span> de{" "}
              <span className="font-bold">{scenarios.length}</span> Badges de Empatía
            </p>

            {earnedBadges.length >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="badge-success mb-8"
              >
                <Award className="w-5 h-5" />
                <span>Comunicador Empático</span>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleRestart} className="btn-primary inline-flex items-center gap-2">
                <RefreshCcw className="w-4 h-4" />
                Practicar de nuevo
              </button>
              <button onClick={onComplete} className="btn-success inline-flex items-center gap-2">
                Continuar
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* Scenario Card */
          <motion.div
            key={currentScenario}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="card-elevated overflow-hidden"
          >
            {/* Patient Objection */}
            <div className="p-6 bg-secondary/50 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground mb-1 block">
                    Paciente:
                  </span>
                  <p className="chat-bubble chat-bubble-patient inline-block">
                    "{scenario.objection}"
                  </p>
                </div>
              </div>
            </div>

            {/* Response Options */}
            <div className="p-6">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                ¿Cómo responderías?
              </p>
              <div className="space-y-3">
                {scenario.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={showResult}
                    whileHover={!showResult ? { scale: 1.01 } : {}}
                    whileTap={!showResult ? { scale: 0.99 } : {}}
                    className={`w-full text-left option-card ${
                      showResult
                        ? selectedOption === index
                          ? option.isCorrect
                            ? "correct"
                            : "incorrect"
                          : option.isCorrect
                          ? "correct opacity-70"
                          : ""
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          showResult
                            ? option.isCorrect
                              ? "border-success bg-success text-success-foreground"
                              : selectedOption === index
                              ? "border-danger bg-danger text-danger-foreground"
                              : "border-border"
                            : "border-border"
                        }`}
                      >
                        {showResult && option.isCorrect && <CheckCircle2 className="w-4 h-4" />}
                        {showResult && !option.isCorrect && selectedOption === index && (
                          <XCircle className="w-4 h-4" />
                        )}
                      </div>
                      <p className="text-sm">{option.text}</p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {showResult && selectedOption !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-6 p-4 rounded-xl ${
                      scenario.options[selectedOption].isCorrect
                        ? "bg-success/10 border border-success/30"
                        : "bg-danger/10 border border-danger/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {scenario.options[selectedOption].isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p
                          className={`font-medium ${
                            scenario.options[selectedOption].isCorrect
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {scenario.options[selectedOption].isCorrect
                            ? "¡Respuesta correcta!"
                            : "Respuesta mejorable"}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {scenario.options[selectedOption].feedback}
                        </p>
                      </div>
                    </div>

                    {scenario.options[selectedOption].isCorrect && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="mt-4 flex items-center gap-2"
                      >
                        <Award className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium text-accent">
                          +1 Badge de Empatía
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-center"
                >
                  <button
                    onClick={handleNext}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    {currentScenario < scenarios.length - 1 ? (
                      <>
                        Siguiente escenario
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Ver resultados
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Module4RolePlay;
