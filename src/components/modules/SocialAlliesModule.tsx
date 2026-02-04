import { motion } from "framer-motion";
import { Instagram, ArrowRight, ExternalLink, Sparkles, Play } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const youtubeShorts = [
  {
    id: 1,
    videoId: "t9-Gqjj6l4I",
    title: "Clínica Ejemplo #1",
    description: "Mira cómo este aliado promociona Welli en sus redes",
  },
  {
    id: 2,
    videoId: "REKXh6TeKG8",
    title: "Clínica Ejemplo #2",
    description: "Una forma innovadora de comunicar financiación",
  },
  {
    id: 3,
    videoId: "IcUWtYu2HyY",
    title: "Clínica Ejemplo #3",
    description: "Contenido que conecta con los pacientes",
  },
];

const SocialAlliesModule = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-foreground mb-6">
            <Instagram className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-bold">Nuestros Aliados en Redes</span>
          </div>
          <h2 className="section-title">Nuestros aliados en redes</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Mira cómo otras clínicas nos muestran en su Instagram:
          </p>
        </motion.div>

        {/* Highlight banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 via-secondary/10 to-primary/20 border-2 border-welli-yellow/30"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-welli-yellow/30 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-welli-yellow" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">
                La prueba social vende
              </h3>
              <p className="text-muted-foreground">
                Cuando un paciente ve que otros confían en Welli, su decisión se vuelve más fácil.
              </p>
            </div>
          </div>
        </motion.div>

        {/* YouTube Shorts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {youtubeShorts.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="card-elevated p-4"
            >
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground">{video.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{video.description}</p>
              </div>
              <YouTubeEmbed
                videoId={video.videoId}
                title={video.title}
                isShort={true}
                borderColor="secondary"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA to design pieces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-secondary/10 to-welli-yellow/10 border border-secondary/20 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg text-foreground">
                ¿Quieres piezas como estas?
              </h3>
              <p className="text-muted-foreground">
                Te ayudamos a diseñar tus redes con tu marca y Welli.
              </p>
            </div>
            <a
              href="https://forms.gle/pg2UDJAqHSyhpmFM9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-welli whitespace-nowrap inline-flex items-center gap-2"
            >
              <span>Diseña tus piezas</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
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

export default SocialAlliesModule;
