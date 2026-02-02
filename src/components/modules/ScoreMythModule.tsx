import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldQuestion, CheckCircle2, AlertTriangle, ArrowRight, Info } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const ScoreMythModule = ({ onComplete }: ModuleProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

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
            <ShieldQuestion className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-medium">Mito del Score</span>
          </div>
          <h2 className="section-title">La objeción más común sobre el crédito</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Muchos pacientes temen que aplicar a Welli afecte su historial crediticio. Desmitifiquemos esto.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onClick={() => setIsRevealed(!isRevealed)}
          className="cursor-pointer"
        >
          <div
            className={`relative overflow-hidden rounded-3xl border-2 p-8 md:p-12 min-h-[400px] transition-all duration-700 ${
              isRevealed
                ? "bg-gradient-to-br from-success/10 via-accent/5 to-success/10 border-success/40"
                : "bg-gradient-to-br from-welli-yellow/10 via-secondary/10 to-danger/5 border-welli-yellow/40"
            }`}
          >
            <AnimatePresence mode="wait">
              {!isRevealed ? (
                <motion.div
                  key="myth"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-welli-yellow/20 flex items-center justify-center mb-6"
                  >
                    <AlertTriangle className="w-10 h-10 text-welli-yellow" />
                  </motion.div>
                  
                  <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">
                    Objeción del Paciente
                  </p>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 max-w-lg">
                    "No quiero hacer un estudio de crédito porque me afecta el score"
                  </h3>
                  
                  <p className="text-muted-foreground">
                    Toca para ver la respuesta correcta →
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="reality"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-success" />
                  </motion.div>
                  
                  <p className="text-sm font-bold uppercase tracking-wider text-success mb-4">
                    Respuesta Pro
                  </p>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 max-w-lg">
                    "Las consultas de crédito en Welli dejan huella de consulta pero <span className="text-success">NO afectan el puntaje (score)</span> del paciente"
                  </h3>

                  <div className="p-6 rounded-2xl bg-card/80 border border-success/20 max-w-lg">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-left">
                        <p className="font-medium text-foreground mb-2">Explicación técnica:</p>
                        <p className="text-sm text-muted-foreground">
                          Las consultas de crédito son registros normales que quedan cuando alguien revisa tu historial. 
                          <strong className="text-foreground"> Esto NO es lo mismo que una "baja de puntos".</strong> El score 
                          solo se afecta por comportamientos de pago, no por consultas.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-6">
                    Toca para volver al mito
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Key takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/10 to-secondary/10 border border-welli-yellow/20 text-center"
        >
          <p className="text-lg text-foreground">
            <span className="font-bold text-secondary">Recuerda:</span> El miedo al score es la barrera #1. 
            Con esta respuesta, le das tranquilidad al paciente para que aplique sin temor.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mt-10"
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

export default ScoreMythModule;
