import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle2, XCircle, DollarSign, Clock } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const DisbursementWarningModule = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-danger/20 border border-danger/50 text-foreground mb-6">
            <AlertTriangle className="w-4 h-4 text-danger" />
            <span className="text-sm font-bold">¡CUIDADO! Error Común</span>
          </div>
          <h2 className="section-title">El Gran Error: "Ya quedó aprobado"</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Un crédito <span className="font-bold text-success">APROBADO</span> no significa dinero en tu cuenta.
          </p>
        </motion.div>

        {/* Warning Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card-elevated p-8 mb-10 border-2 border-danger/30"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wrong assumption */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-danger/10 border-2 border-danger/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-danger" />
                <span className="font-bold text-danger">Lo que muchos creen</span>
              </div>
              <p className="text-lg text-foreground mb-4">
                "El paciente fue aprobado = mi trabajo terminó"
              </p>
              <div className="p-4 rounded-xl bg-danger/20">
                <p className="text-sm text-danger font-medium">
                  ❌ El dinero NO llega automáticamente
                </p>
              </div>
            </motion.div>

            {/* Correct process */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-success/10 border-2 border-success/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-success" />
                <span className="font-bold text-success">Lo que debes hacer</span>
              </div>
              <p className="text-lg text-foreground mb-4">
                "Debo entrar al portal y solicitar el DESEMBOLSO"
              </p>
              <div className="p-4 rounded-xl bg-success/20">
                <p className="text-sm text-success font-medium">
                  ✓ Solo así recibes tu dinero
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <h3 className="font-bold text-xl text-center mb-6">El proceso correcto:</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { icon: "✅", text: "Paciente APROBADO", color: "success" },
              { icon: "→", text: "", color: "muted" },
              { icon: "🖥️", text: "Entrar al Portal Admin", color: "secondary" },
              { icon: "→", text: "", color: "muted" },
              { icon: "💰", text: "Solicitar DESEMBOLSO", color: "welli-yellow" },
              { icon: "→", text: "", color: "muted" },
              { icon: "🏦", text: "Recibir dinero", color: "success" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`${step.text ? "p-4 rounded-xl bg-card border-2" : ""} ${
                  step.color === "success" ? "border-success/40" :
                  step.color === "secondary" ? "border-secondary/40" :
                  step.color === "welli-yellow" ? "border-welli-yellow/40" : ""
                } text-center`}
              >
                <span className="text-2xl">{step.icon}</span>
                {step.text && <p className="text-sm font-medium mt-2">{step.text}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-success/20 border-2 border-welli-yellow/30 mb-10"
        >
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-welli-yellow" />
              <span className="font-bold text-foreground">Una vez solicitas el desembolso:</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-success" />
              <span className="text-2xl font-extrabold text-success">24-48 horas hábiles</span>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-2">
            El dinero llega directo a la cuenta de la clínica
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Ver Video de Desembolso</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DisbursementWarningModule;
