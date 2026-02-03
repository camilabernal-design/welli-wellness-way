import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, Sparkles, DollarSign, Users, CheckCircle2 } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const IncomeOptimizationModule = ({ onComplete }: ModuleProps) => {
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
            <TrendingUp className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-medium">Optimización de Ingresos</span>
          </div>
          <h2 className="section-title">¿Inversión o Comisión?</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Cambia la perspectiva: el 5% de Welli no es un costo, es una inversión para recuperar el 100% que antes perdías.
          </p>
        </motion.div>

        {/* Main Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {/* Without Welli */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-danger/10 to-danger/5 border-2 border-danger/30 text-center">
            <div className="w-16 h-16 rounded-full bg-danger/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-danger" />
            </div>
            <h3 className="font-bold text-xl text-foreground mb-2">Sin Welli</h3>
            <p className="text-muted-foreground mb-4">El paciente dice "lo voy a pensar"</p>
            <div className="text-5xl font-extrabold text-danger mb-2">0%</div>
            <p className="text-danger font-medium">de ese tratamiento</p>
            <div className="mt-4 p-3 rounded-xl bg-danger/10">
              <p className="text-sm text-foreground">Paciente perdido = Ingreso perdido</p>
            </div>
          </div>

          {/* With Welli */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-success/10 to-welli-yellow/10 border-2 border-success/30 text-center">
            <div className="w-16 h-16 rounded-full bg-welli-yellow/30 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-welli-yellow" />
            </div>
            <h3 className="font-bold text-xl text-foreground mb-2">Con Welli</h3>
            <p className="text-muted-foreground mb-4">El paciente financia y empieza hoy</p>
            <div className="text-5xl font-extrabold text-success mb-2">95%</div>
            <p className="text-success font-medium">de ese tratamiento</p>
            <div className="mt-4 p-3 rounded-xl bg-success/10">
              <p className="text-sm text-foreground">Paciente tratado = Ingreso asegurado</p>
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-welli-yellow/30 to-secondary/20 border-2 border-welli-yellow/50 text-center mb-10"
        >
          <Sparkles className="w-10 h-10 text-welli-yellow mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            El 95% de algo siempre será mejor que el 100% de nada
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            El 5% de Welli no es un gasto, es el costo de adquirir un paciente que de otra forma se hubiera ido.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {[
            { text: "Pacientes que antes se iban, ahora se tratan", icon: CheckCircle2 },
            { text: "Ingreso inmediato (95% desembolsado en días)", icon: CheckCircle2 },
            { text: "Sin riesgo de cartera ni cobranza para ti", icon: CheckCircle2 },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="p-4 rounded-xl bg-success/10 border border-success/20"
            >
              <div className="flex items-start gap-3">
                <benefit.icon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">{benefit.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
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

export default IncomeOptimizationModule;
