import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, AlertCircle, Heart, ArrowRight, Building2, Percent, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface ModuleProps {
  onComplete: () => void;
}

const CalculatorProModule = ({ onComplete }: ModuleProps) => {
  const [amount, setAmount] = useState(5000000);
  const [months, setMonths] = useState(12);

  const monthOptions = [6, 12, 24, 36];
  
  // Rate: 2% M.V. (Monthly Variable)
  const monthlyRate = 0.02;
  
  // Calculations with interest
  const totalWithInterest = amount * Math.pow(1 + monthlyRate, months);
  const monthlyPayment = Math.round(totalWithInterest / months);
  const clinicDisbursement = Math.round(amount * 0.95); // 95% to clinic
  const welliCommission = Math.round(amount * 0.05); // 5% Welli fee

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 text-foreground mb-6">
            <Calculator className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-medium">Simulador de Cuotas de Bienestar</span>
          </div>
          <h2 className="section-title">No vendas el total, vende la viabilidad</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Transforma el susto del precio total en una <span className="font-bold text-welli-yellow">Cuota Fija de Bienestar</span>.
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
            <div className="mb-4">
              <Slider
                value={[amount]}
                onValueChange={(value) => setAmount(value[0])}
                min={300000}
                max={25000000}
                step={100000}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>$300K</span>
              <motion.span
                key={amount}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 p-4 rounded-xl bg-secondary/10 border border-secondary/30 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Tasa aplicada: <span className="font-bold text-secondary">2% M.V.</span> (Mensual Vencida)
            </p>
          </motion.div>

          {/* Clinic Disbursement - Featured in Yellow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/30 to-welli-yellow/10 border-2 border-welli-yellow/50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-welli-yellow" />
                  <span className="text-sm font-medium text-foreground">La clínica recibe</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={clinicDisbursement}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="text-4xl font-extrabold text-welli-yellow"
                  >
                    {formatCurrency(clinicDisbursement)}
                  </motion.p>
                </AnimatePresence>
                <p className="text-sm text-foreground font-bold mt-1">95% del monto ✓</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Percent className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium text-muted-foreground">Comisión Welli</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={welliCommission}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="text-4xl font-extrabold text-secondary"
                  >
                    {formatCurrency(welliCommission)}
                  </motion.p>
                </AnimatePresence>
                <p className="text-sm text-muted-foreground mt-1">Solo 5% por el servicio</p>
              </div>
            </div>
          </motion.div>

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
            </motion.div>

            {/* Welli Solution - Right Side */}
            <motion.div
              layout
              className="p-8 rounded-2xl bg-gradient-to-br from-success/10 to-welli-yellow/10 border-2 border-success/30 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent animate-pulse-soft" />
              
              <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium text-success">La Solución Welli</span>
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
                <p className="mt-2 text-lg font-medium text-success">
                  al mes por {months} meses
                </p>
                <p className="mt-4 text-success font-bold">
                  "¡Sí, hagámoslo!"
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-secondary/10 border-2 border-welli-yellow/30 text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-welli-yellow" />
            <span className="font-bold text-foreground">El Secreto del Cierre</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No vendas el tratamiento de{" "}
            <span className="text-danger font-bold">{formatCurrency(amount)}</span>.
            Vende la <span className="font-bold text-welli-yellow">Cuota Fija de Bienestar</span> de{" "}
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

export default CalculatorProModule;
