import { motion } from "framer-motion";
import { Video, ArrowRight, ExternalLink, DollarSign, RotateCcw } from "lucide-react";
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 text-foreground mb-6">
            <Video className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-medium">El Momento del Dinero</span>
          </div>
          <h2 className="section-title">Lo que todos los doctores quieren saber</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            ¿Cómo recibo mi pago? Aquí están los tutoriales operativos esenciales.
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
                <div className="w-10 h-10 rounded-xl bg-welli-yellow/20 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-welli-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Cómo Desembolsar</h3>
                  <p className="text-sm text-muted-foreground">
                    El paso más importante: recibir tu dinero
                  </p>
                </div>
              </div>
            </div>
            <YouTubeEmbed 
              videoId="0pem5PNZkSA" 
              title="Manual del Éxito: Cómo Desembolsar"
              borderColor="welli-yellow"
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
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Gestionar un Desistimiento</h3>
                  <p className="text-sm text-muted-foreground">
                    Qué hacer cuando un paciente cancela
                  </p>
                </div>
              </div>
            </div>
            <YouTubeEmbed 
              videoId="LuynQ4k1DQQ" 
              title="Cómo gestionar un desistimiento"
              borderColor="secondary"
            />
          </motion.div>
        </div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-success/10 border-2 border-welli-yellow/30 mb-10"
        >
          <h3 className="font-bold text-lg mb-4">Puntos clave del desembolso:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "El 95% del monto aprobado se desembolsa en 48-72 horas hábiles",
              "El dinero llega directamente a la cuenta registrada de la clínica",
              "Puedes ver el estado de cada solicitud en tu Panel de Admin",
              "Si hay desistimiento, el proceso es igual de sencillo",
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-welli-yellow" />
                <span className="text-foreground text-sm">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 mb-10"
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
