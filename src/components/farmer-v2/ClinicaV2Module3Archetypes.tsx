import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, Crown, Sparkles } from "lucide-react";
import { useV2Analytics } from "@/hooks/useV2Analytics";

interface ModuleProps { onComplete: () => void; }

const archetypes = [
  {
    id: "fallen",
    icon: TrendingDown,
    title: "Presupuestos Caídos",
    color: "border-destructive/40 bg-destructive/5",
    pillColor: "bg-destructive/20 text-destructive",
    signals: "Cartera roja, agenda con huecos, menciona pacientes perdidos.",
    pain: "Financiero. Está dejando plata sobre la mesa.",
    speech: "Recupere su agenda. Estos pacientes sí querían tratarse.",
    opener: "Doctor, lo que usted describe es agenda perdida. Welli fue diseñada exactamente para eso.",
  },
  {
    id: "premium",
    icon: Crown,
    title: "Premium sin Presupuestos Visibles",
    color: "border-welli-yellow/40 bg-welli-yellow/10",
    pillColor: "bg-welli-yellow/30 text-indigo-950",
    signals: "Clínica reconocida, dice 'yo no necesito esto', el paciente que lo admira no se atreve a hablar de plata.",
    pain: "Social/identitario. El paciente NO le dice que necesita financiación por pena o admiración.",
    speech: "NO vendas financiación. Vende ACCESO. El doctor no se vuelve vendedor — le da una herramienta DISCRETA a su paciente.",
    opener: "Doctor, su paciente sí quiere tratarse con usted. Lo que no tiene es la confianza de decirle que le falta dinero. Welli resuelve eso sin que usted tenga que preguntar.",
  },
  {
    id: "curious",
    icon: Sparkles,
    title: "Sin Aliados (Curioso)",
    color: "border-secondary/40 bg-secondary/10",
    pillColor: "bg-secondary/20 text-secondary",
    signals: "Conoció Welli en evento, primera herramienta financiera, no tiene historia.",
    pain: "Latente, no consciente. No sabe lo que se está perdiendo.",
    speech: "Crea conciencia del dolor antes de vender. Muestra agenda con/sin Welli.",
    opener: "Doctor, antes de mostrarle cómo funciona: en clínicas como la suya, el 65% de pacientes que se van sin tratarse, se van por precio. No porque no lo necesiten.",
  },
];

const ClinicaV2Module3Archetypes = ({ onComplete }: ModuleProps) => {
  const { markComplete } = useV2Analytics(3, "Los 3 Arquetipos");
  const [selected, setSelected] = useState(0);
  const a = archetypes[selected];

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Los 3 <span className="text-welli-yellow">arquetipos</span> de doctor
          </h1>
          <p className="text-indigo-800">No todos los doctores tienen el mismo dolor. Identifícalo en los primeros 5 minutos y adapta tu pitch.</p>
        </motion.div>

        {/* Toggle */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
          {archetypes.map((arc, i) => (
            <button
              key={arc.id}
              onClick={() => setSelected(i)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${selected === i ? arc.color + ' scale-[1.02]' : 'border-border bg-card hover:border-welli-yellow/40'}`}
            >
              <arc.icon className="w-6 h-6 text-indigo-950 mb-2" />
              <p className="text-xs font-bold text-indigo-950/60 uppercase">Arquetipo {i + 1}</p>
              <p className="font-bold text-indigo-950 text-sm">{arc.title}</p>
            </button>
          ))}
        </div>

        {/* Details */}
        <motion.div key={a.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`rounded-2xl border-2 ${a.color} p-6 mb-8`}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs font-bold text-indigo-950/70 uppercase mb-1">Señales</p>
              <p className="text-sm text-indigo-950">{a.signals}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-indigo-950/70 uppercase mb-1">Dolor real</p>
              <p className="text-sm text-indigo-950">{a.pain}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xs font-bold text-indigo-950/70 uppercase mb-1">Speech</p>
            <p className="text-sm text-indigo-950">{a.speech}</p>
          </div>
          <div className="p-4 rounded-xl bg-background border border-border">
            <p className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-2 ${a.pillColor}`}>Frase de apertura</p>
            <p className="text-sm text-indigo-950 italic">"{a.opener}"</p>
          </div>
        </motion.div>

        <div className="text-center">
          <button onClick={() => { markComplete(); onComplete(); }} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:scale-105 transition-all shadow-lg">
            Continuar <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicaV2Module3Archetypes;
