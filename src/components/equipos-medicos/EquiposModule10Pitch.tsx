import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Sparkles } from "lucide-react";
import EquiposShell from "./EquiposShell";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface Props {
  onComplete: () => void;
}

const pitches = [
  {
    id: "corto",
    label: "Versión 1 — Pitch corto",
    tag: "El más poderoso (abre la conversación)",
    text: "Además de ayudarte con el equipo, trabajamos con WELLI, un aliado financiero especializado en el sector salud. A diferencia de la banca tradicional, que suele ser rígida y no entiende muy bien el flujo de los consultorios, WELLI conoce el negocio de los médicos porque también financia procedimientos a pacientes. La idea es que puedas adquirir tecnología sin descapitalizarte y que el equipo se pague con los procedimientos que vas realizando.",
  },
  {
    id: "valor",
    label: "Versión 2 — Valor estratégico",
    tag: "Genera confianza financiera",
    text: "Nosotros trabajamos con WELLI, una plataforma financiera enfocada en médicos y clínicas. Ellos entienden muy bien cómo funciona el flujo de caja de los consultorios porque también financian pacientes. Lo interesante es que no solo te ayudan con la financiación del equipo, sino que también te apoyan a revisar el punto de equilibrio para entender cuántos procedimientos necesitas al mes para que la inversión se pague sola.",
  },
  {
    id: "aspiracional",
    label: "Versión 3 — Aspiracional",
    tag: "Posiciona a WELLI como ecosistema",
    text: "Trabajamos con WELLI, que es mucho más que un crédito: es un ecosistema de médicos y clínicas que están creciendo. Cuando entras con WELLI no solo financias el equipo, también entras a una red de profesionales del sector salud que están expandiendo sus servicios, y tienes acompañamiento para revisar los números de tu inversión.",
  },
];

const keys = [
  "Nunca abras con la tasa. Abre con el flujo: cómo se paga el equipo mes a mes.",
  "Usa el lenguaje del médico: procedimientos, agenda, capacidad instalada.",
  "El crédito es una herramienta de crecimiento, no una deuda de emergencia.",
  "Si no sabes un dato exacto (tasa, plazo, cobertura), no lo inventes: confírmalo con WELLI.",
];

const EquiposModule10Pitch = ({ onComplete }: Props) => {
  const [active, setActive] = useState(pitches[0].id);
  const current = pitches.find((p) => p.id === active)!;

  return (
    <EquiposShell
      phase={2}
      eyebrow="Discurso comercial"
      icon={Mic}
      title="WELLI en 2 minutos"
      subtitle="Tres versiones del pitch de 30 segundos. Elige la que mejor se adapte al estilo y al nivel de confianza que tengas con el médico."
      onComplete={onComplete}
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h3 className="text-xl font-bold text-indigo-950 text-center">
          Video: cómo solicitar financiación para un equipo médico
        </h3>
        <YouTubeEmbed
          videoId="KkqpUHhp_c8"
          title="Cómo solicitar financiación para un equipo médico"
          borderColor="welli-yellow"
        />
        <p className="text-sm text-indigo-950/70 text-center">
          Míralo completo ahora en modo panorámico; en el módulo de proceso operativo lo vamos a
          desglosar paso a paso.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="flex flex-wrap justify-center gap-2">
          {pitches.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                active === p.id
                  ? "bg-welli-yellow text-indigo-950 border-welli-yellow"
                  : "bg-card text-indigo-950/70 border-indigo-950/15 hover:border-welli-yellow"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border-2 border-welli-yellow/50 bg-card p-8 shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
            {current.tag}
          </p>
          <p className="text-lg text-indigo-950/90 leading-relaxed italic">"{current.text}"</p>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-indigo-950 rounded-3xl p-8 text-white shadow-xl"
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-welli-yellow" />
          <h3 className="text-2xl font-bold">Cuatro reglas del discurso</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {keys.map((k) => (
            <div key={k} className="bg-white/10 rounded-xl px-4 py-3 text-sm text-white/90">
              {k}
            </div>
          ))}
        </div>
      </motion.section>
    </EquiposShell>
  );
};

export default EquiposModule10Pitch;
