import { motion } from "framer-motion";
import { Video, ArrowRight, ExternalLink } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const OperationalVideosModule = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-foreground mb-6">
            <Video className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Videos Operativos</span>
          </div>
          <h2 className="section-title">Manual del Éxito: Tutoriales Esenciales</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Aprende las operaciones clave que realizarás en tu día a día con Welli.
          </p>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Video 1: Cómo desembolsar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated p-6"
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💰</span>
                <h3 className="font-bold text-lg text-foreground">Cómo Desembolsar</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                El paso más importante: recibir tu dinero es así de sencillo
              </p>
            </div>
            <YouTubeEmbed 
              videoId="0pem5PNZkSA" 
              title="Manual del Éxito: Cómo Desembolsar"
              borderColor="primary"
            />
          </motion.div>

          {/* Video 2: Cómo gestionar desistimiento */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card-elevated p-6"
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🔄</span>
                <h3 className="font-bold text-lg text-foreground">Cómo Gestionar un Desistimiento</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Qué hacer cuando un paciente decide cancelar el proceso
              </p>
            </div>
            {/* Placeholder for second video */}
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-secondary/10 to-welli-yellow/10 border-4 border-secondary flex items-center justify-center">
              <div className="text-center p-6">
                <Video className="w-12 h-12 text-secondary/50 mx-auto mb-3" />
                <p className="text-muted-foreground">Video próximamente</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-secondary/10 border-2 border-welli-yellow/30 mb-10"
        >
          <h3 className="font-bold text-lg mb-4">¿Necesitas más tutoriales?</h3>
          <p className="text-muted-foreground mb-4">
            Accede a nuestra biblioteca completa de videos de capacitación.
          </p>
          <a
            href="https://welli-ally-learn.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Ir a la plataforma de capacitación
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
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

export default OperationalVideosModule;
