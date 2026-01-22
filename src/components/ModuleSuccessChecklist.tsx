import { useState } from "react";
import { motion } from "framer-motion";
import { CheckSquare, Square, ArrowRight, Trophy, Clock, MessageCircle, Users, QrCode, GraduationCap, Shield } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const checklistItems = [
  {
    id: 1,
    title: "Hablar temprano",
    description: "Menciona Welli desde el diagnóstico, no al final cuando ya hay resistencia.",
    icon: Clock,
  },
  {
    id: 2,
    title: "Ser claro",
    description: "Usa lenguaje simple. 'Cuotas de bienestar' en lugar de 'financiación'.",
    icon: MessageCircle,
  },
  {
    id: 3,
    title: "Ofrecer Welli a TODOS",
    description: "No prejuzgues. El paciente con mejor pinta a veces es quien más lo necesita.",
    icon: Users,
  },
  {
    id: 4,
    title: "Visualizar",
    description: "Coloca material POP y códigos QR en tu consultorio y sala de espera.",
    icon: QrCode,
  },
  {
    id: 5,
    title: "Entrenar al equipo",
    description: "Secretarias y asistentes deben estar alineados para mencionar Welli.",
    icon: GraduationCap,
  },
  {
    id: 6,
    title: "Protección y transparencia",
    description: "Welli protege los ahorros del paciente y ofrece total transparencia en tasas.",
    icon: Shield,
  },
];

const ModuleSuccessChecklist = ({ onComplete }: ModuleProps) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success mb-6">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Checklist Final de Éxito</span>
          </div>
          <h2 className="section-title">Tu compromiso con el éxito</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Marca cada punto como tu compromiso personal para maximizar resultados con Welli.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Progreso del compromiso</span>
            <span className="text-sm font-bold text-accent">{checkedItems.length} / {checklistItems.length}</span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-accent to-success rounded-full"
            />
          </div>
        </motion.div>

        {/* Checklist */}
        <div className="space-y-4 mb-10">
          {checklistItems.map((item, index) => {
            const Icon = item.icon;
            const isChecked = checkedItems.includes(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => toggleItem(item.id)}
                className={`cursor-pointer rounded-2xl border-2 p-5 transition-all duration-300 ${
                  isChecked
                    ? "bg-gradient-to-r from-success/10 to-accent/10 border-success/40"
                    : "bg-card border-border hover:border-muted-foreground/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ scale: isChecked ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-6 h-6 text-success" />
                    ) : (
                      <Square className="w-6 h-6 text-muted-foreground" />
                    )}
                  </motion.div>
                  <div className={`p-2 rounded-lg ${isChecked ? "bg-success/20" : "bg-secondary"}`}>
                    <Icon className={`w-5 h-5 ${isChecked ? "text-success" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-display font-bold text-lg transition-all ${
                        isChecked ? "text-success" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Celebration Message */}
        {allChecked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-elevated p-6 mb-10 bg-gradient-to-r from-success/10 to-accent/10 border-success/30 text-center"
          >
            <Trophy className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              ¡Compromiso completo!
            </h3>
            <p className="text-muted-foreground">
              Has aceptado todos los puntos clave para el éxito. Ahora es momento de la certificación.
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: allChecked ? 1 : 0.5, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            disabled={!allChecked}
            className="btn-neon group inline-flex items-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{allChecked ? "Ir a Certificación Final" : "Completa todos los puntos"}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModuleSuccessChecklist;
