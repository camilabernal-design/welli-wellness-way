import { motion } from "framer-motion";
import { Video, ArrowRight, ExternalLink, DollarSign, Calendar, Clock } from "lucide-react";
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
            <span className="text-sm font-bold">El Momento del Dinero</span>
          </div>
          <h2 className="section-title">Operación de Desembolso</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            ¿Cómo y cuándo recibes tu pago? Aquí está el proceso completo.
          </p>
        </motion.div>

        {/* Critical Info Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/30 to-success/20 border-2 border-welli-yellow/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-welli-yellow" />
              <div>
                <p className="text-sm text-muted-foreground">Tiempo máximo</p>
                <p className="text-2xl font-extrabold text-foreground">72 horas hábiles</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Días de pago</p>
                <p className="text-2xl font-extrabold text-success">Martes y Jueves</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CS Script */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 p-5 rounded-xl bg-secondary/10 border border-secondary/20"
        >
          <p className="text-sm text-muted-foreground mb-2">💡 Guion para el Customer Success:</p>
          <p className="text-foreground italic">
            "Doctor, para su flujo de caja: desembolsamos <span className="font-bold text-welli-yellow">martes y jueves</span>. 
            Si usted solicita su pago un lunes, el martes ya estamos procesando para que en máximo 
            <span className="font-bold text-success"> 72 horas</span> esté en su cuenta."
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-elevated p-6 mb-10"
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

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-card border-2 border-border mb-10"
        >
          <h3 className="font-bold text-lg mb-4">Puntos clave del desembolso:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "El desembolso se realiza en máximo 72 horas hábiles",
              "Los pagos se ejecutan todos los Martes y Jueves",
              "El 95% del monto aprobado llega directo a la clínica",
              "Puedes ver el estado de cada solicitud en tu Portal Admin",
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-welli-yellow flex-shrink-0" />
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
