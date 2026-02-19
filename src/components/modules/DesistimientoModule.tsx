import { motion } from "framer-motion";
import { RotateCcw, ArrowRight, CheckCircle2, Info, Download, AlertTriangle, Clock, FileText, Video } from "lucide-react";
import { toast } from "sonner";

interface ModuleProps {
  onComplete: () => void;
}

const DesistimientoModule = ({ onComplete }: ModuleProps) => {
  const handleDownloadPolicy = () => {
    // Simulate PDF download - in production, this would be a real file
    toast.info("Descargando Política de Desistimiento...", {
      description: "El documento se descargará en breve",
    });
    // Simulate download delay
    setTimeout(() => {
      toast.success("¡Descarga completada!", {
        description: "Revisa tu carpeta de descargas",
      });
    }, 1500);
  };

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
            Si el paciente se arrepiente, gestionamos un desistimiento en el portal.
            <span className="font-bold text-foreground"> Es un proceso transparente.</span>
          </p>
        </motion.div>

        {/* Video Placeholder */}
        {/* Video Tutorial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-lg">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/pqNvnA2PvpY"
                title="Tutorial Proceso de Desistimiento"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-3">
            🎥 Tutorial paso a paso del proceso de desistimiento
          </p>
        </motion.div>


        {/* Download Policy Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <button
            onClick={handleDownloadPolicy}
            className="w-full p-5 rounded-2xl bg-gradient-to-r from-secondary/20 to-primary/20 border-2 border-secondary/40 hover:border-secondary/60 transition-all flex items-center justify-center gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/30 flex items-center justify-center">
              <FileText className="w-7 h-7 text-secondary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg text-foreground">Descargar Política de Desistimiento (PDF)</p>
              <p className="text-sm text-muted-foreground">Documento oficial del proceso de retracto</p>
            </div>
            <Download className="w-6 h-6 text-secondary ml-auto" />
          </button>
        </motion.div>

        {/* CS Script */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-8 p-5 rounded-xl bg-secondary/10 border border-secondary/20"
        >
          <p className="text-sm text-muted-foreground mb-2">💡 Guion para el Customer Success:</p>
          <p className="text-foreground italic">
            "Si un paciente se arrepiente, tiene <span className="font-bold text-secondary">20 días</span> para decirnos cuánto le devolvemos. 
            Si no responde, el sistema asume que devuelve todo. Es vital estar pendiente del portal admin."
          </p>
        </motion.div>

        {/* Main Process Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="card-elevated p-8 mb-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-2">Pasos Reales del Desistimiento</h3>
              <p className="text-muted-foreground">
                El proceso oficial cuando un paciente solicita cancelación:
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-4">
            {[
              { step: 1, text: "El paciente solicita el desistimiento", icon: "📋" },
              { step: 2, text: "El aliado tiene 20 días calendario para responder", detail: "(Aceptación total, parcial o negación justificada)", icon: "📅" },
              { step: 3, text: "Si el aliado no responde en 20 días = Aceptación Total automática", detail: "(Silencio administrativo)", icon: "⚠️" },
              { step: 4, text: "Reembolso vía Cruce de cuentas con futuros desembolsos", detail: "O Giro directo a Welli", icon: "💰" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-foreground font-medium">{item.text}</span>
                  {item.detail && (
                    <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-5 rounded-2xl bg-danger/10 border-2 border-danger/30 mb-10"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-danger flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-foreground mb-1">Nota Importante</p>
              <p className="text-muted-foreground">
                El crédito <span className="font-bold text-danger">sigue activo</span> y el paciente 
                debe <span className="font-bold">seguir pagando</span> hasta que el aliado reembolse a Welli.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          <div className="p-5 rounded-2xl bg-success/10 border-2 border-success/30">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-bold text-foreground">Lo bueno</span>
            </div>
            <p className="text-muted-foreground text-sm">
              El proceso es transparente y no afecta tu relación con Welli.
            </p>
          </div>
          
          <div className="p-5 rounded-2xl bg-welli-yellow/10 border-2 border-welli-yellow/30">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-welli-yellow" />
              <span className="font-bold text-foreground">20 días clave</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Revisa tu portal diariamente para no perder el plazo de respuesta.
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
