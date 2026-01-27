import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Shield, Heart, ArrowRight, ChevronDown, AlertCircle, Lightbulb } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const objections = [
  {
    category: "Rechazo de Welli",
    objection: "Welli rechazó al paciente",
    context: "Para el doctor - Manejo del 'No'",
    response: '"La entidad no pudo aprobar hoy, pero podemos revisar si un familiar aplica por ti. Muchas veces un hijo, hermano o pareja tiene mejor historial."',
    tip: "No es personal. El rechazo no significa que el paciente no merezca el tratamiento.",
    icon: Shield,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    category: "Intereses",
    objection: '"No quiero intereses"',
    context: "Preocupación por costos adicionales",
    response: '"Con Welli, la tasa es transparente desde el primer momento. Además, si decides pagar antes del plazo, no hay penalidad. Siempre tienes el control."',
    tip: "Enfoca en la transparencia y la flexibilidad del pago anticipado sin cargos extra.",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    category: "Historial Crediticio",
    objection: '"Mi historial es malo"',
    context: "Miedo al rechazo por reportes",
    response: '"Vale la pena intentar. Welli tiene aprobaciones parciales y a veces el historial no es tan determinante como piensas. En minutos sabremos."',
    tip: "Siempre anima a intentar. El peor escenario es un 'no' que ya tenías.",
    icon: Heart,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    category: "Score de Crédito",
    objection: '"No quiero hacer un estudio de crédito porque me afecta el score"',
    context: "Miedo a afectar historial crediticio",
    response: '"Que Welli te consulte en centrales de riesgo deja huella pero NO afecta tu score de crédito. Es solo una consulta informativa."',
    tip: "Explica que la consulta es 'blanda' y no impacta negativamente el puntaje crediticio.",
    icon: AlertCircle,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
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

  const allViewed = viewedCards.length === objections.length;

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
            <span className="text-sm font-medium">Manejo de Objeciones</span>
          </div>
          <h2 className="section-title">Convierte el "No" en "Sí"</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Prepárate para las objeciones más comunes y responde con confianza.
          </p>
        </motion.div>

        {/* Doctor's Mindset Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-elevated p-6 mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <AlertCircle className="w-6 h-6 text-primary" />
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
            Objeciones estudiadas: <span className="font-bold text-accent">{viewedCards.length}</span> / {objections.length}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: allViewed ? 1 : 0.5, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            disabled={!allViewed}
            className="btn-success group inline-flex items-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{allViewed ? "Ir al Checklist Final" : "Revisa todas las objeciones"}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModuleObjectionHandling;
