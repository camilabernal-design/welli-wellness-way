import { useState } from "react";
import { motion } from "framer-motion";
import { CheckSquare, ArrowRight, CheckCircle2, Circle, PartyPopper, MessageSquare, QrCode, Users, Monitor, Eye, Megaphone } from "lucide-react";
import confetti from "canvas-confetti";

interface ModuleProps {
  onComplete: () => void;
}

const checklistItems = [
  {
    id: 1,
    text: "Hablar de Welli temprano en la consulta",
    tip: "No esperes al momento del pago. Mencionalo desde el principio.",
    icon: MessageSquare,
  },
  {
    id: 2,
    text: "Ser claro con el valor en cuotas",
    tip: "Usa el Cotizador Pro para mostrar cuotas, no totales.",
    icon: CheckCircle2,
  },
  {
    id: 3,
    text: "Ofrecer Welli a todos los pacientes",
    tip: "No asumas quién puede o no pagar. Todos merecen la opción.",
    icon: Users,
  },
  {
    id: 4,
    text: "Tener el QR de Welli visible",
    tip: "En recepción, consultorio y sala de espera.",
    icon: QrCode,
  },
  {
    id: 5,
    text: "Entrenar a todo el equipo",
    tip: "Recepción, asistentes y caja deben saber ofrecer Welli.",
    icon: Megaphone,
  },
  {
    id: 6,
    text: "Tener acceso al Panel de Admin",
    tip: "Para ver el estado de solicitudes y desembolsos.",
    icon: Monitor,
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
          particleCount: 150,
          spread: 100,
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
            <span className="text-sm font-medium">El Checklist del Éxito</span>
          </div>
          <h2 className="section-title">6 Pasos para Maximizar tus Cierres</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Asegúrate de tener todo listo para ofrecer Welli como un profesional.
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
              className="h-full bg-gradient-to-r from-welli-yellow to-success rounded-full"
            />
          </div>
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-10"
        >
          {checklistItems.map((item, index) => {
            const isChecked = checkedItems.includes(item.id);
            const Icon = item.icon;
            
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                onClick={() => toggleItem(item.id)}
                className={`w-full p-5 rounded-2xl border-2 text-left transition-all flex items-start gap-4 ${
                  isChecked
                    ? "bg-success/10 border-success/40"
                    : "bg-card border-border hover:border-welli-yellow/50"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isChecked ? "bg-success" : "bg-welli-yellow/20"
                }`}>
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : (
                    <Icon className="w-5 h-5 text-welli-yellow" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`font-bold text-lg ${isChecked ? "text-foreground" : "text-foreground"}`}>
                    {item.text}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{item.tip}</p>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isChecked ? "bg-success" : "bg-muted"
                }`}>
                  {isChecked ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Completion Message */}
        {allChecked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-gradient-to-r from-success/20 to-welli-yellow/20 border-2 border-success/40 text-center mb-10"
          >
            <div className="flex justify-center gap-2 mb-4">
              <PartyPopper className="w-10 h-10 text-welli-yellow" />
              <PartyPopper className="w-10 h-10 text-success" />
              <PartyPopper className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl text-foreground mb-2">
              ¡Felicitaciones! 🎉
            </h3>
            <p className="text-lg text-muted-foreground">
              Estás completamente preparado para maximizar tus cierres con Welli.
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
        </motion.div>
      </div>
    </div>
  );
};

export default FinalChecklist;
