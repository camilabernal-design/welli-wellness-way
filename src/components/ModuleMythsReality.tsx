import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle, CheckCircle, Sparkles, ArrowRight, RotateCcw } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const myths = [
  {
    myth: "La comisión de Welli reduce mi ganancia",
    reality: "El ingreso por pacientes que cierran gracias a Welli supera con creces lo que pierdes por no tener financiación.",
    emoji: "💰",
  },
  {
    myth: "Toma mucho tiempo",
    reality: "Proceso 100% digital, respuesta en minutos. El paciente aplica desde su celular mientras está en consulta.",
    emoji: "⏱️",
  },
  {
    myth: "El paciente ya tiene tarjeta",
    reality: "Pocos tienen cupo para salud de alto valor. Welli es un cupo adicional exclusivo para bienestar.",
    emoji: "💳",
  },
];

const ModuleMythsReality = ({ onComplete }: ModuleProps) => {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    if (revealedCards.includes(index)) {
      setRevealedCards(revealedCards.filter((i) => i !== index));
    } else {
      setRevealedCards([...revealedCards, index]);
    }
  };

  const allRevealed = revealedCards.length === myths.length;

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Mitos vs. Realidad</span>
          </div>
          <h2 className="section-title">Derribemos los mitos juntos</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Toca cada tarjeta para revelar la verdad detrás de los mitos más comunes.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {myths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              onClick={() => toggleCard(index)}
              className="cursor-pointer"
            >
              <div
                className={`relative overflow-hidden rounded-2xl border-2 p-6 min-h-[280px] transition-all duration-500 ${
                  revealedCards.includes(index)
                    ? "bg-gradient-to-br from-success/10 to-accent/10 border-success/30"
                    : "bg-gradient-to-br from-danger/10 to-danger/5 border-danger/30"
                }`}
              >
                <AnimatePresence mode="wait">
                  {!revealedCards.includes(index) ? (
                    <motion.div
                      key="myth"
                      initial={{ opacity: 0, rotateY: -90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: 90 }}
                      className="h-full flex flex-col"
                    >
                      <div className="flex items-center gap-2 text-danger mb-4">
                        <XCircle className="w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-wide">Mito</span>
                      </div>
                      <span className="text-4xl mb-4">{item.emoji}</span>
                      <p className="text-lg font-display font-bold text-foreground flex-1">
                        "{item.myth}"
                      </p>
                      <p className="text-sm text-muted-foreground mt-4">
                        Toca para ver la realidad →
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="reality"
                      initial={{ opacity: 0, rotateY: 90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: -90 }}
                      className="h-full flex flex-col"
                    >
                      <div className="flex items-center gap-2 text-success mb-4">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-wide">Realidad</span>
                      </div>
                      <span className="text-4xl mb-4">✅</span>
                      <p className="text-lg font-medium text-foreground flex-1">
                        {item.reality}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-4">
                        <RotateCcw className="w-4 h-4" />
                        <span>Toca para volver</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground">
            Mitos revelados: <span className="font-bold text-accent">{revealedCards.length}</span> / {myths.length}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: allRevealed ? 1 : 0.5, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            disabled={!allRevealed}
            className="btn-success group inline-flex items-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{allRevealed ? "Continuar al Flujo del Éxito" : "Revela todos los mitos para continuar"}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModuleMythsReality;
