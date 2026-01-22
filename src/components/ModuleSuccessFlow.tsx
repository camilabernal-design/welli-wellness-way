import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, QrCode, FileSignature, Users, CheckCircle, AlertTriangle } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const steps = [
  {
    step: 1,
    title: "Presenta el valor en cuotas",
    description: "En lugar del monto total, muestra cómo queda en cuotas Welli. Hazlo más accesible desde el primer momento.",
    icon: DollarSign,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    step: 2,
    title: "Escaneo QR desde el celular",
    description: "El paciente escanea el código QR y completa sus datos directamente desde su teléfono. Sin papeles, sin complicaciones.",
    icon: QrCode,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    step: 3,
    title: "Aprobación y firma digital",
    description: "En minutos recibe la respuesta. Si es aprobado, firma digitalmente y el tratamiento comienza de inmediato.",
    icon: FileSignature,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    step: 4,
    title: "Plan B: Familiar aplica",
    description: "Si hay rechazo, no se pierde la venta. Un familiar puede aplicar por el paciente y cubrir el tratamiento.",
    icon: Users,
    color: "text-warning",
    bgColor: "bg-warning/10",
    isPlanB: true,
  },
];

const ModuleSuccessFlow = ({ onComplete }: ModuleProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  const allComplete = completedSteps.length === steps.length;

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success mb-6">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">El Flujo del Éxito</span>
          </div>
          <h2 className="section-title">4 pasos para cerrar con Welli</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Explora cada paso del proceso. Toca cada tarjeta para conocer los detalles.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isCompleted = completedSteps.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => handleStepClick(index)}
                className={`relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 ${
                  isActive
                    ? `${step.bgColor} border-current ${step.color} shadow-lg scale-105`
                    : isCompleted
                    ? "bg-card border-success/30"
                    : "bg-card border-border hover:border-muted-foreground/50"
                }`}
              >
                {/* Step Number Badge */}
                <div
                  className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step.isPlanB
                      ? "bg-warning text-warning-foreground"
                      : isCompleted
                      ? "bg-success text-success-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {step.isPlanB ? "B" : step.step}
                </div>

                {/* Completed Checkmark */}
                {isCompleted && (
                  <div className="absolute -top-2 -right-2">
                    <CheckCircle className="w-6 h-6 text-success fill-success/20" />
                  </div>
                )}

                <div className={`p-3 rounded-xl ${step.bgColor} ${step.color} w-fit mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-foreground mb-2">
                  {step.title}
                </h3>

                {step.isPlanB && (
                  <div className="inline-flex items-center gap-1 text-xs text-warning mb-2">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Plan alternativo</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Detail Panel */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevated p-8 mb-10"
        >
          <div className="flex items-start gap-6">
            <div className={`p-4 rounded-2xl ${steps[activeStep].bgColor}`}>
              {(() => {
                const Icon = steps[activeStep].icon;
                return <Icon className={`w-10 h-10 ${steps[activeStep].color}`} />;
              })()}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {steps[activeStep].isPlanB ? "Plan B" : `Paso ${steps[activeStep].step}`}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {steps[activeStep].description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground">
            Pasos explorados: <span className="font-bold text-accent">{completedSteps.length}</span> / {steps.length}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: allComplete ? 1 : 0.5, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            disabled={!allComplete}
            className="btn-success group inline-flex items-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{allComplete ? "Continuar al Manejo de Objeciones" : "Explora todos los pasos"}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModuleSuccessFlow;
