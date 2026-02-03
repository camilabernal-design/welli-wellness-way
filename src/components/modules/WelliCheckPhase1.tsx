import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle2, XCircle, ArrowRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const quizOptions = [
  {
    id: "a",
    text: "Para que mi paciente pueda saber si es elegible para un crédito con Welli en menos de 30 segundos. Solo con la foto de la cédula y a través de WhatsApp.",
    correct: true,
  },
  {
    id: "b",
    text: "Para agendar citas médicas automáticamente sin intervención humana.",
    correct: false,
  },
  {
    id: "c",
    text: "Para validar la autenticidad de los documentos médicos del paciente.",
    correct: false,
  },
];

const WelliCheckPhase1 = ({ onComplete }: ModuleProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionId: string) => {
    if (showResult) return;
    setSelectedAnswer(optionId);
    setShowResult(true);

    const isCorrect = quizOptions.find(o => o.id === optionId)?.correct;
    if (isCorrect) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF810A", "#8C65C9", "#FFCE00"],
      });
    }
  };

  const isCorrect = quizOptions.find(o => o.id === selectedAnswer)?.correct;

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
            <Smartphone className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-bold">Welli Check</span>
          </div>
          <h2 className="section-title">Preaprobado en 30 segundos</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Tu paciente solo necesita la foto de su cédula y WhatsApp para saber si es elegible.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: "📱", title: "Foto de Cédula", desc: "Solo necesita tomar una foto clara de su documento" },
            { icon: "💬", title: "WhatsApp", desc: "Todo el proceso se hace por WhatsApp, sin apps adicionales" },
            { icon: "⚡", title: "30 Segundos", desc: "Respuesta inmediata de elegibilidad" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl bg-welli-yellow/10 border-2 border-welli-yellow/30 text-center"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section - Updated YouTube link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-welli-yellow" />
            <h3 className="font-bold text-lg">Mira cómo funciona</h3>
          </div>
          <YouTubeEmbed 
            videoId="EN7ao47-Is8" 
            title="Welli Check - Cómo funciona"
            borderColor="welli-yellow"
          />
        </motion.div>

        {/* Quiz Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="card-elevated p-8 mb-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-welli-yellow" />
            <h3 className="font-bold text-xl">Quiz Rápido</h3>
          </div>
          
          <p className="text-lg font-medium mb-6">¿Para qué puedo usar Welli Check?</p>

          <div className="space-y-4">
            {quizOptions.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const showCorrectness = showResult && isSelected;

              return (
                <motion.button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
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
                      : "border-border hover:border-primary/50 bg-card"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-sm uppercase">
                      {option.id}
                    </span>
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

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-xl ${
                isCorrect ? "bg-success/10 border border-success/30" : "bg-danger/10 border border-danger/30"
              }`}
            >
              <p className={`font-medium ${isCorrect ? "text-success" : "text-danger"}`}>
                {isCorrect
                  ? "¡Correcto! 🎉 Welli Check permite preaprobaciones instantáneas por WhatsApp."
                  : "No es correcto. Welli Check es exclusivamente para verificar elegibilidad de crédito."}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA - Always enabled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WelliCheckPhase1;
