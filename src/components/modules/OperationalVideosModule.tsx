import { motion } from "framer-motion";
import { Video, ArrowRight, Play, ExternalLink } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const videos = [
  {
    id: 1,
    title: "Cómo hacer un desembolso",
    description: "Paso a paso del proceso de desembolso desde el panel admin",
    icon: "💰",
    duration: "5 min",
  },
  {
    id: 2,
    title: "Cómo gestionar un desistimiento",
    description: "Qué hacer cuando un paciente decide cancelar el proceso",
    icon: "🔄",
    duration: "3 min",
  },
];

const OperationalVideosModule = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-foreground mb-6">
            <Video className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Videos Operativos</span>
          </div>
          <h2 className="section-title">Tutoriales esenciales</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Aprende las operaciones clave que realizarás en tu día a día con Welli.
          </p>
        </motion.div>

        {/* Video Cards */}
        <div className="space-y-6 mb-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="card-elevated p-6"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-welli-yellow/20 flex items-center justify-center text-3xl flex-shrink-0">
                  {video.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-foreground">{video.title}</h3>
                    <span className="text-sm text-muted-foreground">{video.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{video.description}</p>
                  
                  {/* Video Placeholder */}
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center cursor-pointer group hover:from-secondary/10 hover:to-welli-yellow/10 transition-all">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-secondary/10 to-welli-yellow/10 border border-secondary/20 mb-10"
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

export default OperationalVideosModule;
