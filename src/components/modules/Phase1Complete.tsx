import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, ExternalLink, PartyPopper, Play } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface ModuleProps {
  onComplete: () => void;
}

const Phase1Complete = ({ onComplete }: ModuleProps) => {
  useEffect(() => {
    // Celebration confetti on mount
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FF810A", "#8C65C9", "#FFCE00", "#05D5BD"],
    });
  }, []);

  return (
    <div className="module-container flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Celebration Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-welli-yellow to-primary flex items-center justify-center mx-auto mb-8"
        >
          <GraduationCap className="w-12 h-12 text-white" />
        </motion.div>

        {/* Confetti emoji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-6"
        >
          <PartyPopper className="w-8 h-8 text-welli-yellow" />
          <PartyPopper className="w-8 h-8 text-secondary" />
          <PartyPopper className="w-8 h-8 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
        >
          ¡Completaste la{" "}
          <span className="bg-gradient-to-r from-welli-yellow to-primary bg-clip-text text-transparent">
            Fase 1
          </span>
          !
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Ya conoces los fundamentos de Welli. Ahora tienes las herramientas básicas para 
          empezar a ofrecer financiación a tus pacientes.
        </motion.p>

        {/* What's next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-secondary/10 to-welli-yellow/10 border border-secondary/20 mb-10"
        >
          <h3 className="font-bold text-lg mb-4">¿Qué sigue?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📹</span>
              <div>
                <p className="font-medium">Videos adicionales</p>
                <p className="text-sm text-muted-foreground">Refuerza lo aprendido con tutoriales</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="font-medium">Fase 2: Crecimiento</p>
                <p className="text-sm text-muted-foreground">Herramientas avanzadas de cierre</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-10"
        >
          <a
            href="https://welli-ally-learn.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border-2 border-secondary/30 hover:border-secondary transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
              <Play className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground group-hover:text-secondary transition-colors">
                ¿Tienes dudas? Mira estos videos
              </p>
              <p className="text-sm text-muted-foreground">
                Plataforma de capacitación Welli
              </p>
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Comenzar Fase 2</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-sm text-muted-foreground">
            La Fase 2 incluye herramientas de crecimiento y cierre
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Phase1Complete;
