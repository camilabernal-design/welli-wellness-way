import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, Crown, Sparkles, Armchair } from "lucide-react";
import AgendaAllyModule from "@/components/modules/AgendaAllyModule";

interface Props { onComplete: () => void; }

const presentations = [
  {
    icon: TrendingDown,
    title: "Arquetipo A · Presupuestos Caídos",
    text: "Doctor, mire estos huecos rojos. Cada uno es un paciente que sí quería tratarse con usted.",
    color: "border-destructive/40 bg-destructive/5",
    pill: "Habla de plata directo. La agenda es la evidencia.",
  },
  {
    icon: Crown,
    title: "Arquetipo B · Premium",
    text: "Doctor, esto no aplica tanto a su caso porque su clínica está llena. Pero mire: el 30% de sus valoraciones que no cierran, son pacientes que no se atrevieron a pedirle facilidades.",
    color: "border-welli-yellow/40 bg-welli-yellow/10",
    pill: "Reconoce su éxito antes de proponer. No lo posiciones como necesitado.",
  },
  {
    icon: Sparkles,
    title: "Arquetipo C · Sin aliados",
    text: "Esto es lo que pasa en consultorios similares al suyo. Veamos cómo evitarlo desde el inicio.",
    color: "border-secondary/40 bg-secondary/10",
    pill: "Crea conciencia. La agenda es educación, no presión.",
  },
];

const MaestriaEquipoModule4bAgendaApproach = ({ onComplete }: Props) => (
  <div>
    <AgendaAllyModule onComplete={() => { /* swallow */ }} />

    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
            <Armchair className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold text-indigo-950">Adaptación por Arquetipo</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Cómo presentar la agenda según el arquetipo del aliado
          </h1>
          <p className="text-indigo-800 max-w-2xl mx-auto">El mismo módulo, tres formas de presentarlo. Internaliza cuál usar en cada caso antes de entrar a la sesión.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {presentations.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border-2 ${p.color} p-5 flex flex-col`}
            >
              <p.icon className="w-6 h-6 text-indigo-950 mb-2" />
              <p className="font-bold text-indigo-950 mb-3 text-sm">{p.title}</p>
              <p className="text-sm text-indigo-950 italic mb-4">"{p.text}"</p>
              <div className="mt-auto pt-3 border-t border-indigo-950/10">
                <p className="text-xs font-bold text-indigo-950/70 uppercase mb-1">Cómo dirigirlo</p>
                <p className="text-xs text-indigo-800">{p.pill}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={onComplete} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:scale-105 transition-all shadow-lg">
            Continuar a la plataforma <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default MaestriaEquipoModule4bAgendaApproach;
