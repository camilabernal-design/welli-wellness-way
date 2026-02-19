import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, ArrowRight, ExternalLink, CheckCircle2, Play, Monitor, Smartphone, AlertTriangle } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const practiceSteps = [
  {
    id: 1,
    title: "Crear una Solicitud",
    description: "Simula el proceso que hará tu paciente",
    icon: "📱",
    action: "Crear Solicitud",
    url: "https://app.welli.com.co/create_account",
  },
  {
    id: 2,
    title: "Ver la Verificación",
    description: "Entiende cómo Welli valida la información",
    icon: "✅",
    action: "Explorar",
    url: null,
  },
  {
    id: 3,
    title: "Acceso al Portal Admin",
    description: "Conoce tu panel donde verás todo",
    icon: "📊",
    action: "Ir al Portal",
    url: "https://stg.admin.welli.com.co/admin/login/?next=/admin/",
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
            <span className="text-sm font-bold">ZONA DE PRUEBA</span>
          </div>
          <h2 className="section-title">¡Manos a la obra!</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            No te vayas de esta sesión sin haber <span className="font-bold text-foreground">"tocado"</span> la plataforma. 
            Esto reduce la fricción de tu primera solicitud real.
          </p>
        </motion.div>

        {/* Critical Warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-welli-yellow/30 to-primary/20 border-2 border-welli-yellow/50"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-welli-yellow" />
            <div>
              <p className="font-bold text-lg text-foreground">
                ⚠️ SECCIÓN CRÍTICA
              </p>
              <p className="text-muted-foreground">
                Es vital que explores estas 3 áreas antes de terminar la Fase 1
              </p>
            </div>
          </div>
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
                Tutorial: Crea una solicitud
              </h3>
              <p className="text-sm text-muted-foreground">
                Mira el video mientras practicas
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

                    {step.url ? (
                      <a
                        href={step.url}
                        target="_blank"
                        rel="noopener noreferrer"
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
                            <ExternalLink className="w-4 h-4" />
                            {step.action}
                          </>
                        )}
                      </a>
                    ) : (
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
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Admin Panel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-elevated p-6 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <Monitor className="w-8 h-8 text-secondary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg text-foreground mb-1">Panel de Administración</h3>
              <p className="text-muted-foreground">
                Aquí verás todas tus solicitudes, estados de aprobación y desembolsos.
              </p>
            </div>
            <a
              href="https://stg.admin.welli.com.co/admin/login/?next=/admin/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>Ir al Portal Admin</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Plan B: Familiar o Amigo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="p-5 rounded-2xl bg-gradient-to-r from-secondary/20 to-welli-yellow/20 border-2 border-secondary/30 mb-8"
        >
          <h3 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
            🔄 El Plan B: ¿Qué pasa si no aprueban al paciente?
          </h3>
          <p className="text-muted-foreground">
            <span className="font-bold text-foreground">No es el fin del proceso.</span> Un familiar o un <span className="font-bold text-welli-yellow">AMIGO</span> puede aplicar por el paciente para que el tratamiento inicie hoy mismo.
          </p>
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

        {/* CTA - Always enabled */}
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
            <span>Continuar a Role-Play</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PracticeSpaceModule;
