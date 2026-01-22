import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Link2, Download, ArrowRight, CheckCircle2, Sparkles, ExternalLink, Copy, Check } from "lucide-react";

interface Module5Props {
  onComplete: () => void;
}

const Module5DigitalKit = ({ onComplete }: Module5Props) => {
  const [linkGenerated, setLinkGenerated] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleGenerateLink = () => {
    setLinkGenerated(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://welli.co/pre-aprobacion/dr-martinez-ABC123");
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloadStarted(true);
    // Simulate download
    setTimeout(() => {
      setDownloadStarted(false);
    }, 2000);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">El Kit Digital</span>
          </div>
          <h2 className="section-title">Tus herramientas de cierre</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Todo lo que necesitas para convertir consultas en tratamientos.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Welli Check Generator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card-elevated p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Link2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Welli-Check
                </h3>
                <p className="text-sm text-muted-foreground">
                  Link de pre-aprobación instantánea
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Genera un link personalizado para que tu paciente conozca su cuota 
              antes de salir del consultorio.
            </p>

            {!linkGenerated ? (
              <motion.button
                onClick={handleGenerateLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-success"
              >
                Generar Welli-Check
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-success mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">¡Link generado!</span>
                </div>
                
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Tu link personalizado:</p>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-sm text-foreground truncate">
                      welli.co/pre-aprobacion/dr-martinez-ABC123
                    </code>
                    <motion.button
                      onClick={handleCopyLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-accent/10 text-accent"
                    >
                      {linkCopied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5" />
                  <p className="text-sm text-foreground/80">
                    <span className="font-medium">Pro tip:</span> Envía este link por WhatsApp 
                    mientras el paciente aún está en tu consultorio.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Financial Recipe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card-elevated p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Receta Financiera
                </h3>
                <p className="text-sm text-muted-foreground">
                  El documento que cierra ventas
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 mb-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tratamiento:</span>
                  <span className="font-medium">Ortodoncia Invisible</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Valor total:</span>
                  <span className="font-medium">$12.000.000 COP</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cuota mensual Welli:</span>
                  <span className="font-display font-bold text-2xl text-success">
                    $500.000
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Plazo:</span>
                  <span className="font-medium">24 meses</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Una receta médica + financiera que el paciente puede llevar a casa.
            </p>

            <a 
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-sm font-medium">Ver ejemplo completo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Manual Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="card-elevated p-8 bg-gradient-to-r from-primary to-primary/90"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-2xl bg-primary-foreground/10">
              <Download className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-display font-bold text-2xl text-primary-foreground mb-2">
                Manual de Objeciones
              </h3>
              <p className="text-primary-foreground/80">
                Guía completa con 20+ respuestas probadas para las objeciones más comunes. 
                Incluye scripts y ejemplos reales.
              </p>
            </div>
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={downloadStarted}
              className="btn-neon whitespace-nowrap"
            >
              {downloadStarted ? (
                <>
                  <span className="animate-pulse">Descargando...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2 inline" />
                  Descargar PDF
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 p-6 rounded-xl bg-secondary/50 border border-border"
        >
          <h4 className="font-display font-bold text-lg mb-4">
            ✅ Checklist antes de tu próxima consulta:
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Tener el calculador Welli abierto en tu tablet",
              "Link de pre-aprobación listo para generar",
              "Manual de objeciones descargado",
              "Receta financiera impresa o digital",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={onComplete}
            className="btn-success group inline-flex items-center gap-3 text-lg"
          >
            <span>Ir al examen de certificación</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Module5DigitalKit;
