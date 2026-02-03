import { motion } from "framer-motion";
import { PlayCircle, ArrowRight, CheckCircle2, Smartphone, QrCode, FileCheck, Pencil } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const steps = [
  {
    icon: Smartphone,
    title: "Presenta el valor en cuotas",
    description: "El paciente ve la cuota mensual, no el total aterrador",
  },
  {
    icon: QrCode,
    title: "Escaneo del QR",
    description: "El paciente escanea desde su celular",
  },
  {
    icon: FileCheck,
    title: "Aprobación en minutos",
    description: "Respuesta inmediata sin papeleos",
  },
  {
    icon: Pencil,
    title: "Firma digital",
    description: "Todo el proceso 100% digital",
  },
];

const VideoProcessModule = ({ onComplete }: ModuleProps) => {
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
            <PlayCircle className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">¿Cómo Funciona Welli?</span>
          </div>
          <h2 className="section-title">De la consulta al desembolso en minutos</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Mira cómo es el proceso de financiación paso a paso. 100% digital, sin papeles.
          </p>
        </motion.div>

        {/* YouTube Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10"
        >
          <YouTubeEmbed 
            videoId="Y8YTex0JCyg" 
            title="Cómo crear una solicitud"
            isShort={true}
            borderColor="secondary"
            className="mx-auto"
          />
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-4 rounded-xl border-2 bg-card border-border hover:border-secondary/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-secondary">Paso {index + 1}</span>
                    </div>
                    <p className="font-medium text-foreground">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Plan B Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-primary/10 border-2 border-welli-yellow/40 mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-welli-yellow/30 flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-welli-yellow">B</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-1">Plan B: El As Bajo la Manga</h3>
              <p className="text-muted-foreground mb-2">
                Si el paciente es rechazado, no es el fin:
              </p>
              <p className="text-foreground font-medium italic">
                "La entidad no pudo aprobar hoy, pero ¿qué tal si aplicamos con un familiar?"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Muchos tratamientos se cierran así. Un hijo, hermano o pareja puede tener mejor historial.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
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

export default VideoProcessModule;
