import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  AlertCircle,
  Heart,
  ArrowRight,
  Building2,
  Percent,
  Sparkles,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface ModuleProps {
  onComplete: () => void;
}

const CalculatorProModule = ({ onComplete }: ModuleProps) => {
  const [amount, setAmount] = useState(5000000);
  const [months, setMonths] = useState(12);

  const monthOptions = [6, 12, 24, 36];
  const monthlyRate = 0.02;

  // 💰 Memoized formatter (evita recrearlo en cada render)
  const currencyFormatter = useMemo(() => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }, []);

  const formatCurrency = useCallback(
    (value: number) => currencyFormatter.format(value),
    [currencyFormatter]
  );

  // 🧮 Memoized calculations
  const calculations = useMemo(() => {
    const totalWithInterest =
      amount * Math.pow(1 + monthlyRate, months);

    return {
      totalWithInterest,
      monthlyPayment: Math.round(totalWithInterest / months),
      clinicDisbursement: Math.round(amount * 0.95),
      welliCommission: Math.round(amount * 0.05),
    };
  }, [amount, months]);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 text-foreground mb-6">
            <Calculator className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-medium">
              Simulador de Cuotas de Bienestar
            </span>
          </div>

          <h2 className="section-title">
            No vendas el total, vende la viabilidad
          </h2>

          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Transforma el susto del precio total en una{" "}
            <span className="font-bold text-welli-yellow">
              Cuota Fija de Bienestar
            </span>.
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
              Monto del tratamiento
            </label>

            <Slider
  value={[amount]}
  onValueChange={(value) => setAmount(value[0])}
  min={300000}
  max={25000000}
  step={100000}
  className="w-full"
/>

            <div className="flex justify-between text-sm text-muted-foreground mt-4">
              <span>$300K</span>

              <motion.span
                layout
                className="font-display font-bold text-2xl text-foreground"
              >
                {formatCurrency(amount)}
              </motion.span>

              <span>$25M</span>
            </div>
          </div>

          {/* Months Selector */}
          <div className="mb-10">
            <label className="block text-sm font-medium text-muted-foreground mb-4">
              Plazo de financiación
            </label>

            <div className="flex gap-4 justify-center flex-wrap">
              {monthOptions.map((m) => (
                <motion.button
                  key={m}
                  onClick={() => setMonths(m)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                    months === m
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {m} meses
                </motion.button>
              ))}
            </div>
          </div>

          {/* Rate Info */}
          <div className="mb-8 p-4 rounded-xl bg-secondary/10 border border-secondary/30 text-center">
            <p className="text-sm text-muted-foreground">
              Tasa aplicada:{" "}
              <span className="font-bold text-secondary">
                2% M.V.
              </span>{" "}
              (Mensual Vencida)
            </p>
          </div>

          {/* Clinic + Commission */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/30 to-welli-yellow/10 border-2 border-welli-yellow/50">
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-welli-yellow" />
                  <span className="text-sm font-medium">
                    La clínica recibe
                  </span>
                </div>

                <motion.p
                  layout
                  className="text-4xl font-extrabold text-welli-yellow"
                >
                  {formatCurrency(calculations.clinicDisbursement)}
                </motion.p>

                <p className="text-sm font-bold mt-1">
                  95% del monto ✓
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Percent className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Comisión Welli
                  </span>
                </div>

                <motion.p
                  layout
                  className="text-4xl font-extrabold text-secondary"
                >
                  {formatCurrency(calculations.welliCommission)}
                </motion.p>

                <p className="text-sm text-muted-foreground mt-1">
                  Solo 5% por el servicio
                </p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fear */}
            <motion.div
              layout
              className="p-8 rounded-2xl bg-gradient-to-br from-danger/10 to-danger/5 border-2 border-danger/20 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-danger" />
                <span className="text-sm font-medium text-danger">
                  El Susto del Paciente
                </span>
              </div>

              <motion.div layout className="danger-display">
                {formatCurrency(amount)}
              </motion.div>

              <p className="mt-4 text-danger/80 font-medium">
                "Lo voy a pensar..."
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              layout
              className="p-8 rounded-2xl bg-gradient-to-br from-success/10 to-welli-yellow/10 border-2 border-success/30 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-success" />
                <span className="text-sm font-medium text-success">
                  La Solución Welli
                </span>
              </div>

              <motion.div layout className="success-display">
                {formatCurrency(calculations.monthlyPayment)}
              </motion.div>

              <p className="mt-2 text-lg font-medium text-success">
                al mes por {months} meses
              </p>

              <p className="mt-4 text-success font-bold">
                "¡Sí, hagámoslo!"
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Insight */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-secondary/10 border-2 border-welli-yellow/30 text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-welli-yellow" />
            <span className="font-bold">El Secreto del Cierre</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No vendas el tratamiento de{" "}
            <span className="text-danger font-bold">
              {formatCurrency(amount)}
            </span>.
            Vende la{" "}
            <span className="font-bold text-welli-yellow">
              Cuota Fija de Bienestar
            </span>{" "}
            de{" "}
            <span className="text-success font-bold">
              {formatCurrency(calculations.monthlyPayment)}/mes
            </span>.
          </p>
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

export default CalculatorProModule;