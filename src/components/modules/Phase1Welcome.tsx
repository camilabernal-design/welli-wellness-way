import { motion } from "framer-motion";
import { Armchair, MessageCircleQuestion, ArrowRight, Sparkles, Play } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const Phase1Welcome = ({ onComplete }: ModuleProps) => {
  // Dynamic data - could be fetched from API
  const lostRevenuePerPatient = "$2,500,000";

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
          {/* Welli Badge - More yellow emphasis */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-welli-yellow/30 border-2 border-welli-yellow/50 text-foreground mb-8"
          >
            <Sparkles className="w-5 h-5 text-welli-yellow" />
            <span className="text-sm font-bold">Welli Sales Clinic • Fase 1</span>
          </motion.div>

          {/* Main question */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            ¿Cuántos pacientes se fueron hoy
            <br />
            <span className="text-danger">diciendo: "Lo voy a pensar"?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            La frustración del "No" es real. Mira este video y prepárate para cambiar la historia.
          </motion.p>
        </motion.div>

        {/* Two column layout: Video + Chair illustration */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Video: La Frustración del "No" */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="mb-4">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <Play className="w-5 h-5 text-secondary" />
                La Frustración del "No"
              </h3>
              <p className="text-sm text-muted-foreground">
                Identifícate con la realidad que viven muchos aliados
              </p>
            </div>
            <YouTubeEmbed 
              videoId="LuynQ4k1DQQ" 
              title="La Frustración del No"
              borderColor="secondary"
            />
          </motion.div>

          {/* Chair illustration with data */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-64 h-64 relative mb-6">
              {/* Room background with yellow/purple gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-welli-yellow/40 via-secondary/20 to-welli-yellow/10 border-2 border-welli-yellow/30" />
              
              {/* Empty chair illustration */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <Armchair className="w-28 h-28 text-secondary" strokeWidth={1.5} />
                  <div className="absolute inset-0 blur-2xl bg-welli-yellow/30 -z-10" />
                </div>
              </motion.div>
              
              {/* Floating question marks */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageCircleQuestion className="w-7 h-7 text-danger/60" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-8 left-4"
                animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <MessageCircleQuestion className="w-5 h-5 text-welli-yellow" />
              </motion.div>
            </div>

            {/* Lost revenue card */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="text-center p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/30 to-secondary/20 border-2 border-welli-yellow/40"
            >
              <p className="text-sm text-muted-foreground mb-2">
                Cada espacio de agenda vacía representa
              </p>
              <span className="text-3xl md:text-4xl font-extrabold text-foreground">
                {lostRevenuePerPatient}
              </span>
              <span className="block text-sm text-muted-foreground mt-1">
                en ingresos potenciales perdidos
              </span>
            </motion.div>
          </motion.div>
        </div>

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
            <span>Descubrir el costo del silencio</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-6 text-sm text-muted-foreground">
            Fase 1 • Tiempo estimado: 15 minutos
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Phase1Welcome;
