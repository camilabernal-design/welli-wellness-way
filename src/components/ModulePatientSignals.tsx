import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ChevronLeft, ChevronRight, MessageCircle, Lightbulb, ArrowRight, Target, Brain } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const flashcards = [
  {
    signal: '"Necesito pensarlo / Hablar con mi familia"',
    meaning: "Inseguridad económica, no por el tratamiento sino por el monto",
    response: '"Muchos pacientes se dan cuenta que pagar una Cuota Fija de Bienestar facilita la decisión. ¿Hacemos el ejemplo?"',
    icon: "🤔",
  },
  {
    signal: '"Pensé que mi prepagada cubría más"',
    meaning: "Presupuesto limitado para el copago o excedente",
    response: '"Podemos financiar solo ese excedente con una Cuota Fija de Bienestar muy accesible"',
    icon: "💳",
  },
  {
    signal: '"¿Puedo pagarles mensualmente mientras vengo a citas?"',
    meaning: "Quiere plazos sin burocracia bancaria",
    response: '"Welli es mejor: pagas una Cuota Fija de Bienestar, creas vida crediticia y no tocas tus tarjetas"',
    icon: "📅",
  },
  {
    signal: '"¿Aceptan tarjeta de crédito con cuotas?"',
    meaning: "Busca financiación pero no quiere usar su cupo disponible",
    response: '"Con Welli tienes un cupo exclusivo para salud. Manejas tu bienestar con una Cuota Fija de Bienestar independiente"',
    icon: "💰",
  },
];

const ModulePatientSignals = ({ onComplete }: ModuleProps) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setFlipped(false);
      setTimeout(() => setCurrentCard(currentCard + 1), 200);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setFlipped(false);
      setTimeout(() => setCurrentCard(currentCard - 1), 200);
    }
  };

  const card = flashcards[currentCard];

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
            <Brain className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-medium">Identifica al Paciente Ideal</span>
          </div>
          <h2 className="section-title">Lo que el paciente dice vs. Lo que siente</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Aprende a leer entre líneas. <span className="font-bold text-foreground">No juzgues la capacidad de pago</span>, identifica la oportunidad.
          </p>
        </motion.div>

        {/* Insight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-secondary/20 to-welli-yellow/20 border-2 border-secondary/30"
        >
          <p className="text-center text-muted-foreground">
            <span className="font-bold text-foreground">Regla de oro:</span> Cada señal de duda económica es una oportunidad Welli esperando ser activada.
          </p>
        </motion.div>

        {/* Flashcard Container */}
        <div className="relative mb-8">
          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            disabled={currentCard === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 rounded-full bg-card border border-border shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-welli-yellow/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCard}
            disabled={currentCard === flashcards.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 rounded-full bg-card border border-border shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-welli-yellow/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Flashcard */}
          <motion.div
            className="perspective-1000"
            onClick={() => setFlipped(!flipped)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentCard}-${flipped}`}
                initial={{ rotateY: flipped ? -90 : 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: flipped ? 90 : -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`card-elevated p-8 md:p-12 min-h-[350px] cursor-pointer ${
                  flipped
                    ? "bg-gradient-to-br from-success/10 to-welli-yellow/10 border-success/30"
                    : "bg-gradient-to-br from-welli-yellow/20 to-secondary/10 border-welli-yellow/30"
                }`}
              >
                {!flipped ? (
                  /* Front - Signal */
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <span className="text-6xl mb-6">{card.icon}</span>
                    <div className="flex items-center gap-2 text-welli-yellow mb-4">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium uppercase tracking-wide">El Paciente Dice</span>
                    </div>
                    <p className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {card.signal}
                    </p>
                    <p className="mt-6 text-sm text-muted-foreground">
                      Toca para ver el significado real y la respuesta pro
                    </p>
                  </div>
                ) : (
                  /* Back - Meaning & Response */
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-secondary mb-2">
                        <Lightbulb className="w-5 h-5" />
                        <span className="text-sm font-medium uppercase tracking-wide">El Paciente Siente</span>
                      </div>
                      <p className="text-lg text-foreground font-medium">{card.meaning}</p>
                    </div>
                    <div className="flex-1 p-6 rounded-xl bg-success/10 border border-success/20">
                      <div className="flex items-center gap-2 text-success mb-3">
                        <Target className="w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-wide">Respuesta Pro</span>
                      </div>
                      <p className="text-lg md:text-xl font-display font-bold text-foreground">
                        {card.response}
                      </p>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground text-center">
                      Toca para volver a la señal
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-10">
          {flashcards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setFlipped(false);
                setCurrentCard(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentCard
                  ? "bg-welli-yellow w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Continuar al Simulador de Cuotas</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModulePatientSignals;
