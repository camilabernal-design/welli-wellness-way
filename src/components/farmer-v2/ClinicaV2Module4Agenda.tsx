import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, Crown, Sparkles } from "lucide-react";
import AgendaAllyModule from "@/components/modules/AgendaAllyModule";
import { useV2Analytics } from "@/hooks/useV2Analytics";

interface ModuleProps { onComplete: () => void; }

const presentations = [
  { icon: TrendingDown, title: "Presupuestos Caídos", text: "Doctor, mire estos huecos rojos. Cada uno es un paciente que sí quería tratarse con usted.", color: "border-destructive/40 bg-destructive/5" },
  { icon: Crown, title: "Premium", text: "Doctor, esto no aplica tanto a su caso porque su clínica está llena. Pero mire: el 30% de sus valoraciones que no cierran, son pacientes que no se atrevieron a pedirle facilidades.", color: "border-welli-yellow/40 bg-welli-yellow/10" },
  { icon: Sparkles, title: "Curioso", text: "Esto es lo que pasa en consultorios similares al suyo. Veamos cómo evitarlo desde el inicio.", color: "border-secondary/40 bg-secondary/10" },
];

const ClinicaV2Module4Agenda = ({ onComplete }: ModuleProps) => {
  const { markComplete } = useV2Analytics(4, "La Agenda Como Solución");

  return (
    <div>
      <AgendaAllyModule onComplete={() => { /* swallow */ }} />

      <div className="module-container">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h2 className="font-display text-2xl font-bold text-indigo-950 mb-2">Cómo presentar la agenda según el arquetipo</h2>
            <p className="text-indigo-800 text-sm">El mismo módulo, tres formas de presentarlo.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {presentations.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border-2 ${p.color} p-5`}
              >
                <p.icon className="w-6 h-6 text-indigo-950 mb-2" />
                <p className="text-xs font-bold text-indigo-950/70 uppercase mb-1">Arquetipo {i + 1}</p>
                <p className="font-bold text-indigo-950 mb-2">{p.title}</p>
                <p className="text-sm text-indigo-950 italic">"{p.text}"</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={() => { markComplete(); onComplete(); }} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:scale-105 transition-all shadow-lg">
              Continuar a la plataforma <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicaV2Module4Agenda;
