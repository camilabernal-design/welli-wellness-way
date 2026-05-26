import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X, Check, Calendar } from "lucide-react";
import { useV2Analytics } from "@/hooks/useV2Analytics";

interface ModuleProps { onComplete: () => void; }

const scenarios = [
  { resp: "No tengo tiempo mañana", reply: "Perfecto, ¿el jueves? ¿AM o PM?" },
  { resp: "Mejor la próxima semana", reply: "Entiendo. Le agendo el lunes 9 AM. Le confirmo el viernes." },
  { resp: "No estoy seguro de tener pacientes", reply: "Doctor, justo por eso lo hacemos. Yo le ayudo a identificar al menos uno antes." },
];

const ClinicaV2Module7CloseActivation = ({ onComplete }: ModuleProps) => {
  const { markComplete } = useV2Analytics(7, "Cierre con Activación Cerrada");
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-3">NUEVO</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Cierre con <span className="text-welli-yellow">activación cerrada</span>
          </h1>
          <p className="text-indigo-800">Esto cambia TODO. Ninguna capacitación termina con "cualquier cosa me avisa".</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl border-2 border-destructive/40 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 mb-3">
              <X className="w-5 h-5 text-destructive" />
              <p className="font-bold text-destructive">Mal cierre</p>
            </div>
            <p className="italic text-indigo-950 text-sm mb-4">"Doctor, cualquier cosa me avisa. Estaré pendiente. Hablamos pronto."</p>
            <p className="text-xs text-indigo-800"><strong>Resultado:</strong> 70% nunca aplica. Aliados muertos.</p>
          </div>

          <div className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-5 h-5 text-welli-yellow" />
              <p className="font-bold text-indigo-950">Buen cierre</p>
            </div>
            <p className="italic text-indigo-950 text-sm mb-3">
              "Doctor, perfecto. En los próximos 2 días tenemos una segunda sesión de 15 min. Usted me trae uno de los presupuestos que mencionó. Lo hacemos en línea — yo lo acompaño paso a paso."
            </p>
            <p className="italic font-bold text-indigo-950 text-sm">"¿Le sirve mejor mañana en la mañana o en la tarde?"</p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-secondary/40 bg-secondary/5 p-5 mb-8 text-center">
          <p className="font-display text-lg font-bold text-indigo-950">Negociación CERRADA, no abierta.</p>
          <p className="text-sm text-indigo-800">Día y hora antes de colgar.</p>
        </div>

        {/* Simulator */}
        <section className="mb-8">
          <h2 className="font-display text-xl font-bold text-indigo-950 mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-welli-yellow" /> Simulador de cierre
          </h2>
          <p className="text-sm text-indigo-800 mb-4">El doctor responde. Practica tu réplica.</p>
          <div className="space-y-2 mb-4">
            {scenarios.map((s, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selected === i ? 'border-welli-yellow bg-welli-yellow/10' : 'border-border bg-card hover:border-welli-yellow/40'}`}
              >
                <p className="text-sm text-indigo-950">El doctor dice: <em>"{s.resp}"</em></p>
                {selected === i && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-bold text-welli-yellow mt-2">
                    Tú: "{s.reply}"
                  </motion.p>
                )}
              </button>
            ))}
          </div>
        </section>

        <div className="p-4 rounded-xl bg-welli-yellow/10 border border-welli-yellow/30 mb-8 text-sm text-indigo-950">
          💡 <strong>Por qué funciona:</strong> el compromiso público y específico tiene 10x más probabilidad de cumplirse que el vago. Psicología del compromiso (Cialdini).
        </div>

        <div className="text-center">
          <button onClick={() => { markComplete(); onComplete(); }} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:scale-105 transition-all shadow-lg">
            Ver la segunda sesión <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicaV2Module7CloseActivation;
