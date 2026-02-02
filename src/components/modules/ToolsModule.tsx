import { motion } from "framer-motion";
import { FileText, ArrowRight, Download, ExternalLink, FileDown } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const tools = [
  {
    id: 1,
    title: "Brochure de Uso",
    description: "Guía completa con todo lo que necesitas saber sobre Welli",
    icon: "📄",
    action: "Descargar PDF",
    type: "download",
  },
  {
    id: 2,
    title: "Manual de Objeciones",
    description: "Respuestas listas para las preguntas más comunes de pacientes",
    icon: "💬",
    action: "Descargar PDF",
    type: "download",
  },
  {
    id: 3,
    title: "Calculadora de Cuotas",
    description: "Herramienta online para calcular cuotas con tus pacientes",
    icon: "🧮",
    action: "Abrir calculadora",
    type: "link",
  },
];

const ToolsModule = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground mb-6">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Herramientas</span>
          </div>
          <h2 className="section-title">Tu kit de recursos</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Descarga los materiales que te ayudarán a cerrar más tratamientos con Welli.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="card-elevated p-6 text-center group hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-welli-yellow/10 flex items-center justify-center text-3xl mx-auto mb-4">
                {tool.icon}
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{tool.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                {tool.type === "download" ? (
                  <Download className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                {tool.action}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Main CTA - Brochure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-welli-yellow/10 to-secondary/10 border-2 border-primary/20 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
              <FileDown className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-xl text-foreground mb-2">
                Descargar Brochure de Uso
              </h3>
              <p className="text-muted-foreground">
                Documento diseñado con la identidad Welli. Incluye todo lo que tu equipo necesita saber.
              </p>
            </div>
            <button className="btn-welli inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Descargar PDF
            </button>
          </div>
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
            <span>Continuar al Checklist Final</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsModule;
