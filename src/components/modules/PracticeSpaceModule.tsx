import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, ArrowRight, ExternalLink, CheckCircle2, Play, Monitor, Smartphone } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const practiceSteps = [
  {
    id: 1,
    title: "Simular una Solicitud",
    description: "Aprende cómo se ve el proceso desde el lado del paciente",
    icon: "📱",
    action: "Ver demo",
    completed: false,
  },
  {
    id: 2,
    title: "Entender el Desembolso",
    description: "Mira cómo la clínica recibe el 95% del monto aprobado",
    icon: "💰",
    action: "Ver proceso",
    completed: false,
  },
  {
    id: 3,
    title: "Panel de Administración",
    description: "Conoce tu dashboard donde verás todas las solicitudes",
    icon: "📊",
    action: "Explorar panel",
    completed: false,
  },
];

const PracticeSpaceModule = ({ onComplete }: ModuleProps) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const allCompleted = completedSteps.length === practiceSteps.length;

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/30 border border-welli-yellow/50 text-foreground mb-6">
            <LayoutDashboard className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-bold">Zona de Prueba</span>
          </div>
          <h2 className="section-title">¡Es hora de practicar!</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Antes de terminar la Fase 1, es vital que "toques" la plataforma. 
            <span className="font-medium text-foreground"> Esto reduce la fricción de tu primera solicitud real.</span>
          </p>
        </motion.div>

        {/* Critical Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-welli-yellow/30 to-primary/20 border-2 border-welli-yellow/50 text-center"
        >
          <p className="font-bold text-lg text-foreground">
            ⚠️ SECCIÓN CRÍTICA
          </p>
          <p className="text-muted-foreground mt-1">
            No te vayas de esta sesión sin haber explorado estas 3 áreas
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Video Tutorial Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-4">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-welli-yellow" />
                ¿Cómo crear una solicitud en segundos?
              </h3>
              <p className="text-sm text-muted-foreground">
                Mira este tutorial mientras practicas
              </p>
            </div>
            <YouTubeEmbed 
              videoId="Y8YTex0JCyg" 
              title="Cómo crear una solicitud en segundos"
              isShort={true}
              borderColor="welli-yellow"
            />
          </motion.div>

          {/* Practice Steps Column */}
          <div className="space-y-4">
            {practiceSteps.map((step, index) => {
              const isCompleted = completedSteps.includes(step.id);
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`p-5 rounded-2xl border-2 transition-all ${
                    isCompleted
                      ? "bg-success/10 border-success/40"
                      : "bg-card border-welli-yellow/30 hover:border-welli-yellow/60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      isCompleted ? "bg-success/20" : "bg-welli-yellow/20"
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-7 h-7 text-success" /> : step.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>

                    <button
                      onClick={() => toggleStep(step.id)}
                      className={`px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2 transition-all ${
                        isCompleted
                          ? "bg-success text-success-foreground"
                          : "bg-welli-yellow text-welli-yellow-foreground hover:opacity-90"
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Listo
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          {step.action}
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Admin Panel Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-elevated p-6 mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="w-5 h-5 text-secondary" />
            <h3 className="font-bold text-lg">Vista previa del Panel Admin</h3>
          </div>
          <div className="aspect-video rounded-xl bg-gradient-to-br from-secondary/10 to-welli-yellow/10 border-2 border-dashed border-secondary/30 flex items-center justify-center">
            <div className="text-center">
              <Monitor className="w-16 h-16 text-secondary/50 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Aquí verás tu panel de administración con todas las solicitudes
              </p>
              <a
                href="https://admin.welli.com.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:underline font-medium"
              >
                Ir al panel real
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-muted-foreground">
            Pasos completados: <span className="font-bold text-success">{completedSteps.length}</span> / {practiceSteps.length}
          </p>
        </motion.div>

        {/* CTA - Always enabled for free exploration */}
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
          {!allCompleted && (
            <p className="text-xs text-muted-foreground mt-3">
              Puedes continuar, pero te recomendamos completar todos los pasos
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PracticeSpaceModule;
