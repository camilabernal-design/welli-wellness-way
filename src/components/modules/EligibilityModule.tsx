import { motion } from "framer-motion";
import { Smartphone, ArrowRight, CheckCircle2, Zap } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const EligibilityModule = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/30 border border-welli-yellow/50 text-foreground mb-6">
            <Zap className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-bold">Elegibilidad en Segundos</span>
          </div>
          <h2 className="section-title">Solo con cédula y WhatsApp</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Tu paciente puede saber si es elegible{" "}
            <span className="font-bold text-welli-yellow">en 30 segundos, sin apps adicionales</span>.
          </p>
        </motion.div>

        {/* Main Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="card-elevated p-8 mb-10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Phone mockup */}
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative"
              >
                <div className="w-64 h-[500px] rounded-[3rem] bg-gradient-to-br from-secondary to-secondary/80 p-3 shadow-2xl">
                  <div className="w-full h-full rounded-[2.5rem] bg-card flex flex-col items-center justify-center p-6">
                    <Smartphone className="w-16 h-16 text-secondary mb-6" />
                    <div className="text-center">
                      <p className="font-bold text-lg mb-2">WhatsApp</p>
                      <p className="text-sm text-muted-foreground mb-4">Envía foto de cédula</p>
                      <div className="w-32 h-20 rounded-lg bg-muted flex items-center justify-center mb-4">
                        <span className="text-3xl">🪪</span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, repeat: Infinity, repeatDelay: 3 }}
                        className="p-3 rounded-xl bg-success/20 border border-success/40"
                      >
                        <p className="text-sm font-medium text-success">✓ Preaprobado</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Steps */}
            <div className="space-y-6">
              <h3 className="font-bold text-2xl text-foreground mb-6">
                3 pasos simples
              </h3>
              
              {[
                { step: 1, icon: "📱", text: "Paciente abre WhatsApp", time: "5 seg" },
                { step: 2, icon: "📸", text: "Toma foto de su cédula", time: "10 seg" },
                { step: 3, icon: "✅", text: "Recibe resultado de elegibilidad", time: "15 seg" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <div className="w-12 h-12 rounded-full bg-welli-yellow/20 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.text}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{item.time}</span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="p-4 rounded-xl bg-gradient-to-r from-welli-yellow/20 to-primary/20 border border-welli-yellow/30"
              >
                <p className="font-bold text-foreground text-center text-lg">
                  Total: <span className="text-welli-yellow">30 segundos</span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {[
            { icon: "🚫", title: "Sin apps", desc: "Solo necesita WhatsApp" },
            { icon: "⚡", title: "Inmediato", desc: "Respuesta en tiempo real" },
            { icon: "🔒", title: "Seguro", desc: "Datos encriptados" },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="welli-card text-center"
            >
              <span className="text-3xl mb-3 block">{benefit.icon}</span>
              <h4 className="font-bold text-foreground">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </motion.div>
          ))}
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

export default EligibilityModule;
