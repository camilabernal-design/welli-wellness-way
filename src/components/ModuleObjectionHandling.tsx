import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowRight, ChevronDown, AlertCircle, Lightbulb, MessageSquare, Heart, Users } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const objections = [
  {
    category: "Productos Financieros",
    objection: '"No quiero productos financieros"',
    context: "Desconfianza hacia el sistema bancario tradicional",
    response: '"Welli no es un banco ni una tarjeta de crédito. Es un crédito de libre inversión exclusivo para salud, con aprobación rápida y sin afectar tus cupos bancarios."',
    tip: "Enfatiza que Welli es un producto diseñado solo para procedimientos de salud, no es deuda bancaria tradicional.",
    icon: Shield,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    category: "Historial Crediticio",
    objection: '"Mi historial es malo"',
    context: "Miedo al rechazo por reportes negativos",
    response: '"Vale la pena intentar. Welli tiene aprobaciones parciales y a veces el historial no es tan determinante como piensas. En minutos sabremos."',
    tip: "Siempre anima a intentar. El peor escenario es un 'no' que ya tenías. El Plan B siempre está disponible.",
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    category: "Intereses",
    objection: '"No quiero pagar intereses"',
    context: "Preocupación por costos adicionales",
    response: '"Con Welli, la tasa es transparente desde el primer momento. Además, si decides pagar antes del plazo, no hay penalidad. Siempre tienes el control."',
    tip: "Enfoca en la transparencia, flexibilidad y que no hay cargos ocultos ni penalidades por pago anticipado.",
    icon: MessageSquare,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    category: "Rechazo",
    objection: "Welli rechazó al paciente",
    context: "El sistema no aprobó la solicitud",
    response: '"La entidad no pudo aprobar hoy, pero podemos revisar si un familiar aplica por ti. Muchas veces un hijo, hermano o pareja tiene mejor historial."',
    tip: "El rechazo no es el fin. El Plan B (familiar) convierte muchos 'no' en 'sí'.",
    icon: Heart,
    color: "text-welli-yellow",
    bgColor: "bg-welli-yellow/10",
  },
];

const ModuleObjectionHandling = ({ onComplete }: ModuleProps) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [viewedCards, setViewedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
      if (!viewedCards.includes(index)) {
        setViewedCards([...viewedCards, index]);
      }
    }
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Manejo de Objeciones Comunes</span>
          </div>
          <h2 className="section-title">Convierte el "No" en "Sí"</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Las objeciones más frecuentes y cómo responderlas como un profesional.
          </p>
        </motion.div>

        {/* Mindset Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-elevated p-6 mb-8 bg-gradient-to-r from-welli-yellow/10 to-secondary/10 border-welli-yellow/20"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-welli-yellow/20">
              <AlertCircle className="w-6 h-6 text-welli-yellow" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-2">Mentalidad del Profesional</h3>
              <p className="text-muted-foreground">
                El rechazo no es personal ni hacia ti ni hacia el paciente. Es una evaluación financiera momentánea. 
                Tu rol es presentar alternativas y mantener la relación de confianza.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Objections Accordion */}
        <div className="space-y-4 mb-10">
          {objections.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = expandedCard === index;
            const isViewed = viewedCards.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? `${item.bgColor} border-current ${item.color}`
                    : isViewed
                    ? "bg-card border-success/30"
                    : "bg-card border-border"
                }`}
              >
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full p-6 text-left flex items-center gap-4"
                >
                  <div className={`p-3 rounded-xl ${item.bgColor}`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <span className={`text-xs font-medium uppercase tracking-wide ${item.color}`}>
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {item.objection}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.context}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <div className="p-5 rounded-xl bg-card/80 border border-border mb-4">
                          <p className="text-lg font-medium text-foreground">
                            {item.response}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 p-4 rounded-xl bg-success/10 border border-success/20">
                          <Lightbulb className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-foreground/80">
                            <span className="font-bold">Tip: </span>
                            {item.tip}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground">
            Objeciones estudiadas: <span className="font-bold text-success">{viewedCards.length}</span> / {objections.length}
          </p>
        </motion.div>

        {/* CTA - Always enabled */}
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
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModuleObjectionHandling;
