import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, AlertCircle, Heart, ArrowRight, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface Module3Props {
  onComplete: () => void;
}

const Module3Calculator = ({ onComplete }: Module3Props) => {
  const [amount, setAmount] = useState(10000000);
  const [months, setMonths] = useState(12);

  const monthOptions = [6, 12, 24];
  
  // Simple calculation (in reality would include interest)
  const monthlyPayment = Math.round(amount / months);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">El Traductor de Salud</span>
          </div>
          <h2 className="section-title">Transforma el susto en solución</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Mueve el slider y observa cómo cambia la percepción cuando hablas en cuotas, no en totales.
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="card-elevated p-8 mb-8"
        >
          {/* Amount Slider */}
          <div className="mb-10">
            <label className="block text-sm font-medium text-muted-foreground mb-4">
              Valor del tratamiento
            </label>
            <div className="mb-4">
              <Slider
                value={[amount]}
                onValueChange={(value) => setAmount(value[0])}
                min={1000000}
                max={30000000}
                step={500000}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>$1M</span>
              <motion.span
                key={amount}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="font-display font-bold text-2xl text-foreground"
              >
                {formatCurrency(amount)}
              </motion.span>
              <span>$30M</span>
            </div>
          </div>

          {/* Months Selector */}
          <div className="mb-10">
            <label className="block text-sm font-medium text-muted-foreground mb-4">
              Plazo de financiación
            </label>
            <div className="flex gap-4 justify-center">
              {monthOptions.map((m) => (
                <motion.button
                  key={m}
                  onClick={() => setMonths(m)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                    months === m
                      ? "bg-accent text-accent-foreground shadow-lg"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {m} meses
                </motion.button>
              ))}
            </div>
          </div>

          {/* Comparison Display */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Patient Fear - Left Side */}
            <motion.div
              layout
              className="p-8 rounded-2xl bg-gradient-to-br from-danger/10 to-danger/5 border-2 border-danger/20 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-danger" />
                <span className="text-sm font-medium text-danger">El Susto del Paciente</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "¿Cuánto cuesta el tratamiento?"
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={amount}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="danger-display"
                >
                  {formatCurrency(amount)}
                </motion.div>
              </AnimatePresence>
              <p className="mt-4 text-danger/80 font-medium">
                "Lo voy a pensar..."
              </p>
              <div className="mt-6 p-4 rounded-xl bg-card/50">
                <p className="text-sm text-muted-foreground">
                  El paciente solo ve un muro financiero imposible de escalar.
                </p>
              </div>
            </motion.div>

            {/* Welli Solution - Right Side */}
            <motion.div
              layout
              className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-welli-neon/10 border-2 border-accent/30 text-center relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-welli-neon/5 to-transparent animate-pulse-soft" />
              
              <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">La Solución Welli</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "Con Welli, son solo..."
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${amount}-${months}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="success-display"
                  >
                    {formatCurrency(monthlyPayment)}
                  </motion.div>
                </AnimatePresence>
                <p className="mt-2 text-lg font-medium text-accent">
                  al mes por {months} meses
                </p>
                <p className="mt-4 text-success font-bold">
                  "¡Sí, hagámoslo!"
                </p>
                <div className="mt-6 p-4 rounded-xl bg-card/50">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-accent mt-0.5" />
                    <p className="text-sm text-foreground/80">
                      Una cuota manejable que cabe en su presupuesto mensual.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="font-bold text-foreground">El secreto:</span> No vendas el tratamiento de{" "}
            <span className="text-danger font-bold">{formatCurrency(amount)}</span>.
            Vende la cuota de bienestar de{" "}
            <span className="text-success font-bold">{formatCurrency(monthlyPayment)}/mes</span>.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-neon group inline-flex items-center gap-3 text-lg"
          >
            <span>Practicar con objeciones reales</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Module3Calculator;
