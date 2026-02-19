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
import pop1 from "@/assets/pop/pop1.jpeg";
import pop2 from "@/assets/pop/pop2.jpeg";
import pop3 from "@/assets/pop/pop3.jpeg";
import pop4 from "@/assets/pop/pop4.jpeg";
import pop5 from "@/assets/pop/pop5.jpeg";

interface ModuleProps {
  onComplete: () => void;
}

const popItems = [
  { src: hablador, alt: "Hablador Welli", title: "Hablador de Mesa" },
  { src: rompetrafico, alt: "Rompetrafico Welli", title: "Rompetrafico" },
  { src: saltarin, alt: "Saltarin Welli", title: "Saltarín" },
  { src: stickerMesa, alt: "Sticker de Mesa Welli", title: "Sticker de Mesa" },
  { src: pop1, alt: "POP Welli 1", title: "Material POP" },
];

const clinicExamples = [
  { src: ejemplo1, alt: "Ejemplo POP en clínica 1" },
  { src: ejemplo3, alt: "Ejemplo POP en clínica 3" },
  { src: ejemplo4, alt: "Ejemplo POP en clínica 4" },
  { src: pop2, alt: "POP Welli 2" },
  { src: pop3, alt: "POP Welli 3" },
  { src: pop4, alt: "POP Welli 4" },
  { src: pop5, alt: "POP Welli 5" },
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