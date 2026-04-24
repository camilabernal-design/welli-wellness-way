import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle2, XCircle, ArrowRight, Sparkles, Link2, Image as ImageIcon } from "lucide-react";
import confetti from "canvas-confetti";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import welliCheckEjemplo1 from "@/assets/welli-check-ejemplo-1.png";
import welliCheckEjemplo2 from "@/assets/welli-check-ejemplo-2.png";
import welliCheckEjemplo3 from "@/assets/welli-check-ejemplo-3.png";

interface ModuleProps {
  onComplete: () => void;
}

const quizOptions = [
  {
    id: "a",
    text: "Para que mi paciente obtenga una respuesta DEFINITIVA (APROBADO o rechazado) en segundos. Solo con la foto de la cédula y a través de WhatsApp.",
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
          <h2 className="section-title">APROBADO en segundos</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Tu paciente solo necesita la foto de su cédula y WhatsApp para obtener una respuesta definitiva.
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
            { icon: "✅", title: "Respuesta Definitiva", desc: "APROBADO o rechazado, sin esperas" },
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
                  ? "¡Correcto! 🎉 Welli Check da una respuesta DEFINITIVA de aprobación en segundos por WhatsApp."
                  : "No es correcto. Welli Check es exclusivamente para obtener la aprobación de crédito."}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Loom video - Personalized link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start gap-2 mb-4">
            <Link2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
            <h3 className="font-bold text-lg">
              Cómo generar un link personalizado de Welli Check para medir el número de solicitudes que se hacen a través de tu clínica
            </h3>
          </div>
          <div className="rounded-2xl overflow-hidden border-4 border-secondary shadow-lg">
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src="https://www.loom.com/embed/c42ca3f812f24ec195ac0c0d1e0265db"
                title="Cómo generar un link personalizado de Welli Check"
                allow="fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Ejemplos de piezas personalizadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start gap-2 mb-2">
            <ImageIcon className="w-5 h-5 text-welli-yellow mt-1 flex-shrink-0" />
            <h3 className="font-bold text-lg">
              Ejemplos de piezas personalizadas con Welli Check
            </h3>
          </div>
          <p className="text-muted-foreground text-sm mb-6 ml-7">
            Inspírate con estas piezas que puedes compartir con tus pacientes para invitarlos a iniciar su solicitud por WhatsApp.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: welliCheckEjemplo1, alt: "Recibe respuesta de tu financiación en segundos" },
              { src: welliCheckEjemplo2, alt: "¿Dejaste tu tratamiento para después?" },
              { src: welliCheckEjemplo3, alt: "Tu tratamiento no tiene que esperar" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="rounded-2xl overflow-hidden border-2 border-welli-yellow/40 bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto block" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
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
