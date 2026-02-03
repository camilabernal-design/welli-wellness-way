import { motion } from "framer-motion";
import { Armchair, ArrowRight, Sparkles, TrendingDown, Wallet } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const Phase1Welcome = ({ onComplete }: ModuleProps) => {
  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Welli Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-welli-yellow/30 border-2 border-welli-yellow/50 text-foreground mb-8"
          >
            <Sparkles className="w-5 h-5 text-welli-yellow" />
            <span className="text-sm font-bold">Welli Sales Clinic • Fase 1</span>
          </motion.div>

          {/* Main Hook - El Costo del Silencio */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            ¿Cuántos tratamientos se enfrían
            <br />
            <span className="text-danger">porque el precio intimida?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Cada silla vacía representa <span className="font-bold text-foreground">ingresos perdidos</span> y 
            <span className="font-bold text-danger"> pacientes sin salud</span>.
          </motion.p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Chair illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative mb-6">
              {/* Room background with yellow/purple gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-welli-yellow/40 via-secondary/20 to-welli-yellow/10 border-2 border-welli-yellow/30" />
              
              {/* Empty chair illustration */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <Armchair className="w-32 h-32 md:w-40 md:h-40 text-secondary" strokeWidth={1.5} />
                  <div className="absolute inset-0 blur-2xl bg-welli-yellow/30 -z-10" />
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-muted-foreground italic"
            >
              "Cada 'lo voy a pensar' es una agenda que no se llena"
            </motion.p>
          </motion.div>

          {/* Data cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Data card 1 */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="p-6 rounded-2xl bg-gradient-to-r from-warning/20 to-welli-yellow/30 border-2 border-welli-yellow/40"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-welli-yellow/30">
                  <Wallet className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Los datos no mienten</p>
                  <span className="text-3xl md:text-4xl font-extrabold text-foreground">
                    16.8%
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    El gasto de bolsillo en salud en Colombia <span className="font-bold text-danger">subió</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Data card 2 */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="p-6 rounded-2xl bg-gradient-to-r from-danger/10 to-danger/20 border-2 border-danger/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-danger/20">
                  <TrendingDown className="w-6 h-6 text-danger" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pacientes que se pierden</p>
                  <span className="text-3xl md:text-4xl font-extrabold text-danger">
                    65%
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Se van por el <span className="font-bold">monto total</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Key insight banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-secondary/20 to-welli-yellow/20 border-2 border-secondary/30 mb-10"
        >
          <p className="text-center text-lg">
            <span className="font-bold text-foreground">El secreto:</span>{" "}
            Welli es el puente para ese 65% que antes se iba.{" "}
            <span className="text-welli-yellow font-bold">No vendas el total, vende la viabilidad.</span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Identificar al Paciente Ideal</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-6 text-sm text-muted-foreground">
            Fase 1 • El Método del "Sí" • 11 módulos
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Phase1Welcome;
