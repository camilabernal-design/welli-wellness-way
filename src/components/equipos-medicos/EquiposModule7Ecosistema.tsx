import { motion } from "framer-motion";
import { Monitor, Smartphone, Trophy, ExternalLink, GraduationCap, Wrench } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const pieces = [
  {
    icon: Monitor,
    title: "Portal de aliados WELLI",
    text: "Ves el historial detallado de las aplicaciones a estudio de crédito de tus clientes y gestionas el estado de cada solicitud.",
  },
  {
    icon: Smartphone,
    title: "Portal de instituciones y médicos",
    text: "Tu cliente consulta su estado de cuenta, paga la cuota y descarga sus extractos sin llamar a nadie.",
  },
  {
    icon: Trophy,
    title: "Incentivos y beneficios",
    text: "Premiamos la fidelidad de nuestros aliados y de su fuerza comercial con programas de incentivos.",
  },
];

const portals = [
  {
    icon: GraduationCap,
    title: "WELLI Academy",
    text: "El espacio de formación para distribuidores: perfilamiento, proceso operativo y manejo de conversaciones.",
    url: "https://distribuidores.welli.com.co/academy",
  },
  {
    icon: Wrench,
    title: "WELLI Sales Tool",
    text: "El asistente de campo frente al médico: simulaciones de cuota y retorno de inversión en tiempo real.",
    url: "https://distribuidores.welli.com.co/sales-tool",
  },
];

const EquiposModule7Ecosistema = ({ onComplete }: Props) => (
  <EquiposShell
    phase={1}
    eyebrow="Tecnología"
    icon={Monitor}
    title="El ecosistema WELLI"
    subtitle="Toda la alianza vive en plataforma: originación, seguimiento, pagos y formación. Cero carga operativa para tu equipo administrativo."
    onComplete={onComplete}
  >
    <div className="grid md:grid-cols-3 gap-6">
      {pieces.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="rounded-2xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm"
        >
          <div className="w-11 h-11 rounded-xl bg-welli-yellow/25 flex items-center justify-center mb-4">
            <p.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-indigo-950 mb-2">{p.title}</h3>
          <p className="text-sm text-indigo-950/80">{p.text}</p>
        </motion.div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {portals.map((p) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-indigo-950 p-8 text-white shadow-xl"
        >
          <p.icon className="w-8 h-8 text-welli-yellow mb-4" />
          <h3 className="text-xl font-bold mb-2">{p.title}</h3>
          <p className="text-white/80 text-sm mb-5">{p.text}</p>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-welli-yellow text-indigo-950 font-bold px-5 py-2.5 rounded-full text-sm hover:scale-105 transition-transform"
          >
            Ingresar al portal
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      ))}
    </div>
  </EquiposShell>
);

export default EquiposModule7Ecosistema;
