import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, ArrowRight, ChevronLeft, ChevronRight, MessageCircle,
  Lightbulb, Target, Brain, Heart, Users, AlertCircle
} from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const cards = [
  {
    signal: '"Necesito pensarlo / Hablar con mi familia"',
    meaning: "Inseguridad económica, no por el tratamiento sino por el monto",
    response: '"Muchos pacientes se dan cuenta que pagar una Cuota Fija de Bienestar facilita la decisión. ¿Hacemos el ejemplo?"',
    icon: "🤔",
    category: "Señal del Paciente",
  },
  {
    signal: '"Yo tengo tarjeta de crédito"',
    meaning: "El paciente cree que su TC es mejor opción",
    response: '"Con la tarjeta de crédito tienes cuota de manejo, interés variable, seguros adicionales y a veces una tasa más alta. Con Welli la tasa es fija y transparente desde el inicio, sin costos ocultos. Además, no tocas tu cupo disponible. Siempre es bueno tener otra opción."',
    icon: "💳",
    category: "Objeción Común",
  },
  {
    signal: '"¿Puedo pagarles mensualmente mientras vengo a citas?"',
    meaning: "Quiere plazos sin burocracia bancaria",
    response: '"Welli es mejor: pagas una Cuota Fija de Bienestar, creas vida crediticia y no tocas tus tarjetas"',
    icon: "📅",
    category: "Señal del Paciente",
  },
  {
    signal: '"No quiero productos financieros"',
    meaning: "Desconfianza hacia el sistema bancario tradicional",
    response: '"Welli no es un banco ni una tarjeta de crédito. Es un crédito de libre inversión exclusivo para salud, con aprobación rápida y sin afectar tus cupos bancarios."',
    icon: "🏦",
    category: "Objeción Común",
  },
  {
    signal: '"Mi historial es malo"',
    meaning: "Miedo al rechazo por reportes negativos",
    response: '"Vale la pena intentar. Welli tiene aprobaciones parciales y a veces el historial no es tan determinante como piensas. En minutos sabremos."',
    icon: "📊",
    category: "Objeción Común",
  },
  {
    signal: '"No quiero pagar intereses"',
    meaning: "Preocupación por costos adicionales",
    response: '"Con Welli, la tasa es transparente desde el primer momento. Además, si decides pagar antes del plazo, no hay penalidad. Siempre tienes el control."',
    icon: "💰",
    category: "Objeción Común",
  },
  {
    signal: "Welli rechazó al paciente",
    meaning: "El sistema no aprobó la solicitud",
    response: '"La entidad no pudo aprobar hoy, pero podemos revisar si un familiar aplica por ti. Muchas veces un hijo, hermano o pareja tiene mejor historial."',
    icon: "🔄",
    category: "Plan B",
  },
  {
    signal: '"En otra clínica es más barato"',
    meaning: "El paciente no objeta el valor clínico, pide ayuda para poder pagarlo",
    response: '"Doctor, su trabajo es único. Cuando un paciente objeta precio, en realidad pide ayuda para poder pagarlo. No baje su precio, aumente la viabilidad con Welli."',
    icon: "⚡",
    category: "Objeción Maestra",
  },
  {
    signal: '"Pensé que mi prepagada cubría más"',
    meaning: "Presupuesto limitado para el copago o excedente",
    response: '"Podemos financiar solo ese excedente con una Cuota Fija de Bienestar muy accesible"',
    icon: "🏥",
    category: "Señal del Paciente",
  },
];

const ObjectionsCloseModule = ({ onComplete }: ModuleProps) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[currentCard];

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
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

  const categoryColor = useMemo(() => {
    switch (card.category) {
      case "Señal del Paciente": return "text-welli-yellow";
      case "Objeción Común": return "text-secondary";
      case "Plan B": return "text-accent";
      case "Objeción Maestra": return "text-danger";
      default: return "text-primary";
    }
  }, [card.category]);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Objeciones y Cierre</span>
          </div>
          <h2 className="section-title">Lectura, objeciones y cierre</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Aprende a leer entre líneas, manejar objeciones y cerrar con confianza. Toca cada tarjeta para ver la respuesta pro.
          </p>
        </motion.div>

        {/* Mindset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-elevated p-6 mb-8 bg-gradient-to-r from-welli-yellow/10 to-secondary/10 border-welli-yellow/20"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-welli-yellow/20">
              <AlertCircle className="w-6 h-6 text-welli-yellow" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-2">Mentalidad del profesional</h3>
              <p className="text-muted-foreground">
                El rechazo no es personal. Cada señal de duda económica es una oportunidad Welli esperando ser activada. Tu rol es presentar alternativas y mantener la confianza.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Flipcard Carousel */}
        <div className="relative mb-8">
          <button
            onClick={prevCard}
            disabled={currentCard === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 rounded-full bg-card border border-border shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-welli-yellow/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCard}
            disabled={currentCard === cards.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 rounded-full bg-card border border-border shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-welli-yellow/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

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
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <span className={`text-xs font-bold uppercase tracking-wide mb-2 ${categoryColor}`}>
                      {card.category}
                    </span>
                    <span className="text-6xl mb-6">{card.icon}</span>
                    <div className="flex items-center gap-2 text-welli-yellow mb-4">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium uppercase tracking-wide">El paciente dice</span>
                    </div>
                    <p className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {card.signal}
                    </p>
                    <p className="mt-6 text-sm text-muted-foreground">
                      Toca para ver el significado real y la respuesta pro
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <span className={`text-xs font-bold uppercase tracking-wide mb-4 ${categoryColor}`}>
                      {card.category}
                    </span>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-secondary mb-2">
                        <Lightbulb className="w-5 h-5" />
                        <span className="text-sm font-medium uppercase tracking-wide">Lo que realmente siente</span>
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
          {cards.map((_, index) => (
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
        <div className="text-center">
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectionsCloseModule;
