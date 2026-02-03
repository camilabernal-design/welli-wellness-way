import { motion } from "framer-motion";
import { Target, ArrowRight, CheckCircle2, Video } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const perfilSteps = [
  "Identificar la necesidad real del paciente antes de dar el precio",
  "Preguntar sobre sus expectativas de pago",
  "Mencionar la opción de cuotas desde el inicio",
  "Usar Welli Check para validar elegibilidad temprano",
];

const PerfilamientoModule = ({ onComplete }: ModuleProps) => {
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
            <Target className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Perfilamiento Proactivo</span>
          </div>
          <h2 className="section-title">Prevenir la frustración antes de que ocurra</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            El mejor momento para hablar de Welli es <span className="font-bold text-foreground">antes</span> de que el paciente se asuste con el precio.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10"
        >
          <div className="mb-4 text-center">
            <h3 className="font-bold text-lg text-foreground flex items-center justify-center gap-2">
              <Video className="w-5 h-5 text-secondary" />
              Checklist de Perfilamiento
            </h3>
            <p className="text-sm text-muted-foreground">
              Mira cómo identificar oportunidades tempranamente
            </p>
          </div>
          <YouTubeEmbed 
            videoId="LuynQ4k1DQQ" 
            title="Perfilamiento Proactivo"
            borderColor="secondary"
          />
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-secondary/10 border-2 border-welli-yellow/30 mb-10"
        >
          <h3 className="font-bold text-lg mb-4">Checklist del Perfilador Pro:</h3>
          <div className="space-y-3">
            {perfilSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="p-4 rounded-xl bg-success/10 border border-success/20 text-center mb-10"
        >
          <p className="text-foreground">
            <span className="font-bold">💡 Pro Tip:</span> No esperes a que el paciente pregunte el precio. 
            Adelántate y ofrece la opción de cuotas desde que mencionas el tratamiento.
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

export default PerfilamientoModule;
