import { motion } from "framer-motion";
import { Cpu, ArrowRight, Clock, CheckCircle2, Stethoscope, Zap } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const features = [
  {
    icon: Stethoscope,
    title: "Equipos Médicos",
    desc: "Financiación especializada para profesionales de la salud",
  },
  {
    icon: Cpu,
    title: "Última Tecnología",
    desc: "Accede a equipos de punta sin descapitalizarte",
  },
  {
    icon: Zap,
    title: "Proceso Ágil",
    desc: "Aprobación rápida y desembolso directo",
  },
];

const ModuleEquipmentFinancing = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Próximamente</span>
          </div>
          <h2 className="section-title">Financiación de Equipos Médicos</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Próximamente financiaremos tus equipos médicos con tecnología de punta
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="card-elevated p-8 mb-10 relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-6"
              >
                <Cpu className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Welli Créditos a Médicos</h3>
              <p className="text-muted-foreground">
                Financiación especializada para profesionales de la salud en equipos de última tecnología
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Benefits */}
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="font-bold mb-4">Beneficios que tendrás:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Tasas competitivas para profesionales de salud",
                  "Plazos flexibles hasta 60 meses",
                  "Sin garantía hipotecaria",
                  "Proceso 100% digital",
                  "Asesoría especializada",
                  "Seguro de equipos incluido",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Link */}
            <div className="mt-6 text-center">
              <a
                href="https://paginas.welli.com.co/welli-creditos-a-medicos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Conocer más sobre créditos a médicos
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
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

export default ModuleEquipmentFinancing;