import { motion } from "framer-motion";
import { Instagram, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const instagramPosts = [
  {
    id: 1,
    url: "https://www.instagram.com/p/DUHUaJpDmfu/",
    title: "Ejemplo creativo #1",
    description: "Mira cómo este aliado promociona Welli en sus redes",
    thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    url: "https://www.instagram.com/p/DTTISDfjiwW/",
    title: "Ejemplo creativo #2",
    description: "Una forma innovadora de comunicar financiación",
    thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    url: "https://www.instagram.com/p/DT3BWf2jhqi/",
    title: "Ejemplo creativo #3",
    description: "Contenido que conecta con los pacientes",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop",
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
            <span className="text-sm font-medium">Nuestros Aliados en Redes</span>
          </div>
          <h2 className="section-title">Inspírate con el éxito de otros</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Algunos de nuestros aliados han sido muy creativos...
            <span className="font-medium text-foreground"> ¡mira estos ejemplos!</span>
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

        {/* Instagram Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group block"
            >
              <div className="card-elevated overflow-hidden">
                {/* Thumbnail */}
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <Instagram className="w-5 h-5" />
                      <span>Ver en Instagram</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                  {/* Instagram icon badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {post.description}
                  </p>
                </div>
              </div>
            </motion.a>
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
