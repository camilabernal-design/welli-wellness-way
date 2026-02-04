import { motion } from "framer-motion";
import { MessageSquareQuote, ArrowRight, Star, Play } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const testimonials = [
  {
    id: 1,
    videoId: "TTkV4EBML5E",
    title: "Testimonio de Especialista",
    description: "Cómo Welli transformó su práctica",
  },
  {
    id: 2,
    videoId: "BkO48v-HGpc",
    title: "Experiencia Real",
    description: "Un doctor comparte su experiencia con Welli",
  },
];

const TestimonialsModule = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 border border-welli-yellow/40 text-foreground mb-6">
            <MessageSquareQuote className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-bold">Prueba Social</span>
          </div>
          <h2 className="section-title">Lo que dicen los especialistas</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Escucha directamente de doctores que ya trabajan con Welli.
            <span className="font-medium text-foreground"> Experiencias reales, resultados reales.</span>
          </p>
        </motion.div>

        {/* Stars decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-1 mb-10"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-8 h-8 text-welli-yellow fill-welli-yellow"
            />
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="card-elevated p-6"
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-welli-yellow/20 flex items-center justify-center">
                    <Play className="w-5 h-5 text-welli-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{testimonial.title}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.description}</p>
                  </div>
                </div>
              </div>
              <YouTubeEmbed
                videoId={testimonial.videoId}
                title={testimonial.title}
                isShort={true}
                borderColor="welli-yellow"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 via-primary/10 to-secondary/20 border-2 border-welli-yellow/30 mb-10"
        >
          <div className="text-center">
            <p className="text-lg font-medium text-foreground mb-2">
              Más de <span className="text-welli-yellow font-bold">500+ clínicas</span> ya confían en Welli
            </p>
            <p className="text-muted-foreground">
              Únete a la red de aliados que están transformando la forma de cerrar tratamientos
            </p>
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

export default TestimonialsModule;
