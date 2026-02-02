import { motion } from "framer-motion";
import { Image, ArrowRight, Palette, ExternalLink } from "lucide-react";

// Import POP images
import bolsa from "@/assets/pop/bolsa.png";
import ejemplo1 from "@/assets/pop/ejemplo-1.png";
import ejemplo3 from "@/assets/pop/ejemplo-3.png";
import ejemplo4 from "@/assets/pop/ejemplo-4.png";
import rompetrafico from "@/assets/pop/rompetrafico.png";
import saltarin from "@/assets/pop/saltarin.png";
import stickerMesa from "@/assets/pop/sticker-mesa.png";
import hablador from "@/assets/pop/hablador.png";

interface ModuleProps {
  onComplete: () => void;
}

const popItems = [
  { src: hablador, alt: "Hablador Welli", title: "Hablador de Mesa" },
  { src: rompetrafico, alt: "Rompetrafico Welli", title: "Rompetrafico" },
  { src: saltarin, alt: "Saltarin Welli", title: "Saltarín" },
  { src: stickerMesa, alt: "Sticker de Mesa Welli", title: "Sticker de Mesa" },
  { src: bolsa, alt: "Bolsa Welli", title: "Bolsa Ecológica" },
];

const clinicExamples = [
  { src: ejemplo1, alt: "Ejemplo POP en clínica 1" },
  { src: ejemplo3, alt: "Ejemplo POP en clínica 3" },
  { src: ejemplo4, alt: "Ejemplo POP en clínica 4" },
];

const ModulePOPGallery = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Image className="w-4 h-4" />
            <span className="text-sm font-medium">Material POP</span>
          </div>
          <h2 className="section-title">Así se ve Welli en tu consultorio</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Material profesional para que tus pacientes sepan que ofreces financiación con Welli
          </p>
        </motion.div>

        {/* POP Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="font-bold text-xl mb-6">Material Disponible</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="pop-gallery-item group"
              >
                <div className="aspect-square relative overflow-hidden rounded-xl bg-muted">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-center text-muted-foreground">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clinic Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="font-bold text-xl mb-6">Así luce en clínicas reales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {clinicExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="pop-gallery-item"
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl bg-muted">
                  <img
                    src={example.src}
                    alt={example.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="card-elevated p-8 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Palette className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-xl mb-2">Cuéntale a todos que ahora ofreces Welli</h3>
              <p className="text-muted-foreground mb-4">
                Te ayudamos a diseñar tus redes. Diligencia el formulario y generamos tus piezas con tu marca y Welli.
              </p>
              <a
                href="https://forms.gle/pg2UDJAqHSyhpmFM9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Palette className="w-5 h-5" />
                <span>Diseña tus piezas para redes sociales</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Videos de Aliados Exitosos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="font-bold text-xl mb-6">Historias de éxito de aliados</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="card-elevated overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-welli-yellow/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">▶️</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Video {video}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm">Testimonio de aliado #{video}</p>
                  <p className="text-xs text-muted-foreground">Próximamente</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
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

export default ModulePOPGallery;