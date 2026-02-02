import { motion } from "framer-motion";
import { Armchair, MessageCircleQuestion, ArrowRight, Sparkles } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const Phase1Welcome = ({ onComplete }: ModuleProps) => {
  // Dynamic data - could be fetched from API
  const lostRevenuePerPatient = "$2,500,000";

  return (
    <div className="module-container flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Welli Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 text-foreground mb-8"
        >
          <Sparkles className="w-4 h-4 text-welli-yellow" />
          <span className="text-sm font-semibold">Welli Sales Clinic</span>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mb-12"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
            {/* Room background with yellow/purple gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-welli-yellow/30 via-secondary/20 to-primary/10" />
            
            {/* Empty chair illustration */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <Armchair className="w-32 h-32 md:w-40 md:h-40 text-secondary" strokeWidth={1.5} />
                {/* Yellow glow effect */}
                <div className="absolute inset-0 blur-2xl bg-welli-yellow/20 -z-10" />
              </div>
            </motion.div>
            
            {/* Floating question marks */}
            <motion.div
              className="absolute top-8 right-8"
              animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <MessageCircleQuestion className="w-8 h-8 text-danger/60" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-12 left-8"
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <MessageCircleQuestion className="w-6 h-6 text-welli-yellow/80" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main question */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
        >
          ¿Cuántos pacientes se fueron hoy
          <br />
          <span className="text-danger">diciendo: "Lo voy a pensar"?</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-6">
            Cada espacio de agenda vacía representa
          </p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-secondary/20 border-2 border-welli-yellow/30"
          >
            <span className="text-3xl md:text-4xl font-extrabold text-foreground">
              {lostRevenuePerPatient}
            </span>
            <span className="block text-sm text-muted-foreground mt-1">en ingresos potenciales perdidos</span>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onComplete}
          className="btn-primary group inline-flex items-center gap-3 text-lg"
        >
          <span>Descubrir el costo del silencio</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.button>

        {/* Subtle hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Fase 1 • Tiempo estimado: 15 minutos
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Phase1Welcome;
