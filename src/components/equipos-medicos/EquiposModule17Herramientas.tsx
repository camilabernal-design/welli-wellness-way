import { motion } from "framer-motion";
import { Wrench, ExternalLink, GraduationCap, Calculator, Image, FileText, Video } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const tools = [
  {
    icon: Calculator,
    title: "Herramientas financieras",
    text: "Simulador de cuota y calculadora de retorno de inversión para usar en vivo frente al médico. Puedes enviar la simulación al correo del cliente.",
    url: "https://distribuidores.welli.com.co/herramientas",
    cta: "Abrir herramientas",
  },
  {
    icon: GraduationCap,
    title: "WELLI Academy",
    text: "Perfilamiento, proceso operativo, manejo de conversaciones y presentación corporativa, siempre actualizados.",
    url: "https://distribuidores.welli.com.co/academy",
    cta: "Ir a Academy",
  },
  {
    icon: Video,
    title: "WELLI Sales Tool",
    text: "Tu asistente de campo: pitch de ventas, casos de éxito y material de apoyo listo para mostrar.",
    url: "https://distribuidores.welli.com.co/sales-tool",
    cta: "Ir a Sales Tool",
  },
  {
    icon: Image,
    title: "Material POP",
    text: "Folletos, manuales y piezas de mercadeo para dejar en la clínica después de la visita.",
    url: "https://distribuidores.welli.com.co/sales-tool/material-pop",
    cta: "Descargar material",
  },
  {
    icon: FileText,
    title: "Presentación corporativa",
    text: "Métricas, propósito y condiciones estructurales del modelo, listas para proyectar en una reunión.",
    url: "https://distribuidores.welli.com.co/presentacion",
    cta: "Ver presentación",
  },
];

const EquiposModule17Herramientas = ({ onComplete }: Props) => (
  <EquiposShell
    phase={2}
    eyebrow="Kit de campo"
    icon={Wrench}
    title="Tus herramientas del día a día"
    subtitle="Todo lo que necesitas para una visita está en el portal de distribuidores. Guarda estos enlaces en tu celular hoy mismo."
    onComplete={onComplete}
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((t, i) => (
        <motion.div
          key={t.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="rounded-2xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm flex flex-col"
        >
          <div className="w-11 h-11 rounded-xl bg-welli-yellow/25 flex items-center justify-center mb-4">
            <t.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-indigo-950 mb-2">{t.title}</h3>
          <p className="text-sm text-indigo-950/80 flex-1">{t.text}</p>
          <a
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            {t.cta}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-indigo-950 rounded-3xl p-8 text-white text-center shadow-xl"
    >
      <p className="text-lg font-semibold">
        Regla del kit: nunca salgas a una visita sin poder mostrar una cuota y un punto de equilibrio
        en menos de dos minutos.
      </p>
    </motion.div>
  </EquiposShell>
);

export default EquiposModule17Herramientas;
