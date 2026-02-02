import { useState } from "react";
import { motion } from "framer-motion";
import { CheckSquare, ArrowRight, CheckCircle2, Circle, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

interface ModuleProps {
  onComplete: () => void;
}

const checklistItems = [
  {
    id: 1,
    text: "Tengo acceso al Panel de Administración de Welli",
    category: "Accesos",
  },
  {
    id: 2,
    text: "Sé cómo hacer una solicitud de crédito para un paciente",
    category: "Conocimiento",
  },
  {
    id: 3,
    text: "Entiendo que el 95% del monto va a la clínica",
    category: "Conocimiento",
  },
  {
    id: 4,
    text: "Tengo material POP visible en mi consultorio (acrílico, hablador)",
    category: "Materiales",
  },
  {
    id: 5,
    text: "Mi equipo administrativo sabe ofrecer Welli",
    category: "Equipo",
  },
  {
    id: 6,
    text: "Tengo el QR de Welli visible para mis pacientes",
    category: "Materiales",
  },
  {
    id: 7,
    text: "Sé qué responder cuando un paciente dice 'lo voy a pensar'",
    category: "Conocimiento",
  },
  {
    id: 8,
    text: "Conozco el Plan B (familiar que aplica por el paciente)",
    category: "Conocimiento",
  },
];

const FinalChecklist = ({ onComplete }: ModuleProps) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (itemId: number) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter(id => id !== itemId));
    } else {
      const newChecked = [...checkedItems, itemId];
      setCheckedItems(newChecked);
      
      // Confetti when all checked
      if (newChecked.length === checklistItems.length) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FF810A", "#8C65C9", "#FFCE00"],
        });
      }
    }
  };

  const allChecked = checkedItems.length === checklistItems.length;
  const progress = (checkedItems.length / checklistItems.length) * 100;

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/20 text-foreground mb-6">
            <CheckSquare className="w-4 h-4 text-success" />
            <span className="text-sm font-medium">Checklist Final</span>
          </div>
          <h2 className="section-title">¿Estás listo para empezar?</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Verifica que tienes todo lo necesario para ofrecer Welli a tus pacientes.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progreso</span>
            <span className="text-sm font-medium text-foreground">
              {checkedItems.length} / {checklistItems.length}
            </span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-primary to-success rounded-full"
            />
          </div>
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-elevated p-6 mb-10"
        >
          <div className="space-y-3">
            {checklistItems.map((item, index) => {
              const isChecked = checkedItems.includes(item.id);
              
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  onClick={() => toggleItem(item.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                    isChecked
                      ? "bg-success/10 border-success/40"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isChecked ? "bg-success" : "bg-muted"
                  }`}>
                    {isChecked ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${isChecked ? "text-foreground" : "text-foreground"}`}>
                      {item.text}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Completion Message */}
        {allChecked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-success/20 to-accent/20 border-2 border-success/40 text-center mb-10"
          >
            <div className="flex justify-center gap-2 mb-4">
              <PartyPopper className="w-8 h-8 text-welli-yellow" />
              <PartyPopper className="w-8 h-8 text-success" />
              <PartyPopper className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-xl text-foreground mb-2">
              ¡Felicitaciones! 🎉
            </h3>
            <p className="text-muted-foreground">
              Estás completamente preparado para empezar a ofrecer Welli a tus pacientes.
            </p>
          </motion.div>
        )}

        {/* CTA - Always enabled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>{allChecked ? "Finalizar Capacitación" : "Continuar"}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          {!allChecked && (
            <p className="text-xs text-muted-foreground mt-3">
              Puedes continuar, pero asegúrate de completar estos puntos antes de tu primera solicitud
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FinalChecklist;
