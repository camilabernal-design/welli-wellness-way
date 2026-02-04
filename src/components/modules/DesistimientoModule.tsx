import { motion } from "framer-motion";
import { RotateCcw, ArrowRight, CheckCircle2, Info } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const DesistimientoModule = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50 text-foreground mb-6">
            <RotateCcw className="w-4 h-4 text-secondary" />
            <span className="text-sm font-bold">Proceso Transparente</span>
          </div>
          <h2 className="section-title">¿Cómo manejar un Desistimiento?</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Si el paciente se arrepiente, <span className="font-bold text-foreground">no es un drama</span>. Es un proceso transparente.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card-elevated p-8 mb-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-2">¿Qué es un desistimiento?</h3>
              <p className="text-muted-foreground">
                Cuando un paciente que fue aprobado y desembolsado decide no continuar con el tratamiento, 
                se puede gestionar una devolución del dinero a través del portal.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Pasos para gestionar un desistimiento:</h4>
            
            {[
              { step: 1, text: "El paciente comunica que no continuará con el tratamiento" },
              { step: 2, text: "Ingresas al Portal de Administración de Welli" },
              { step: 3, text: "Ubicas la solicitud del paciente en tu lista" },
              { step: 4, text: "Seleccionas la opción de 'Desistimiento'" },
              { step: 5, text: "Welli gestiona la devolución con la entidad financiera" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-sm font-bold text-secondary">
                  {item.step}
                </div>
                <span className="text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          <div className="p-5 rounded-2xl bg-success/10 border-2 border-success/30">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-bold text-foreground">Lo bueno</span>
            </div>
            <p className="text-muted-foreground text-sm">
              El proceso es rápido y no afecta tu relación con Welli ni con el paciente.
            </p>
          </div>
          
          <div className="p-5 rounded-2xl bg-welli-yellow/10 border-2 border-welli-yellow/30">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-welli-yellow" />
              <span className="font-bold text-foreground">Importante</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Intenta entender por qué el paciente desistió para mejorar tu proceso de venta.
            </p>
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

export default DesistimientoModule;
