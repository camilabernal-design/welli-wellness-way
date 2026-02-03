import { motion } from "framer-motion";
import { PlayCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const steps = [
  "Presenta el valor en cuotas Welli",
  "El paciente escanea el QR desde su celular",
  "Aprobación y firma digital en minutos",
  "Plan B: Si hay rechazo, un familiar puede aplicar",
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
            <span className="text-sm font-medium">Proceso de Venta</span>
          </div>
          <h2 className="section-title">El Proceso Welli: De la Consulta al Cierre</h2>
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
            videoId="EN7ao47-Is8" 
            title="El Proceso Welli: De la Consulta al Cierre"
            borderColor="secondary"
          />
        </motion.div>

        {/* Steps Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`p-4 rounded-xl border-2 ${
                index === 3 
                  ? "bg-welli-yellow/20 border-welli-yellow/40" 
                  : "bg-card border-border"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  index === 3 ? "bg-welli-yellow/30" : "bg-secondary/20"
                }`}>
                  {index === 3 ? (
                    <span className="text-sm font-bold text-welli-yellow">B</span>
                  ) : (
                    <span className="text-sm font-bold text-secondary">{index + 1}</span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">{step}</p>
                  {index === 3 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      La entidad no pudo aprobar hoy, pero podemos revisar si un familiar aplica por ti.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-success/10 to-welli-yellow/10 border border-success/20 text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <span className="font-bold text-foreground">Pro Tip</span>
          </div>
          <p className="text-muted-foreground">
            Siempre ten el Plan B listo. Si el paciente es rechazado, ofrece que un familiar aplique. 
            <span className="font-medium text-foreground"> Muchos tratamientos se cierran así.</span>
          </p>
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
