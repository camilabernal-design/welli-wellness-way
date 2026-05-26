import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, HelpCircle, Users } from "lucide-react";
import { useV2Analytics } from "@/hooks/useV2Analytics";

interface ModuleProps { onComplete: () => void; }

const q1Options = [
  { label: "Por un evento / referido", insight: "Doctor curioso, sin dolor claro aún. Crea conciencia del dolor antes de vender." },
  { label: "Mi otra herramienta es lenta o cara", insight: "Doctor con dolor de eficiencia. Vende velocidad de desembolso." },
  { label: "Tengo presupuestos que se me caen", insight: "Doctor con dolor financiero. Vende recuperación de agenda." },
];

const allies = [
  { name: "Existe Crédito", pain: "Lento" },
  { name: "Medipay", pain: "Caro pero rápido" },
  { name: "Sí Crédito", pain: "Burocrático" },
];

const q3Scenarios = [
  { who: "Solo doctor", how: "Speech técnico-comercial." },
  { who: "Solo asistente", how: "Segunda sesión obligatoria con la asistente." },
  { who: "Ambos", how: "Enfoque dual: doctor cierra, asistente opera." },
];

const ClinicaV2Module2Discovery = ({ onComplete }: ModuleProps) => {
  const { markComplete } = useV2Analytics(2, "Las 3 Preguntas de Indagación");
  const [selectedQ1, setSelectedQ1] = useState<number | null>(null);

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Las <span className="text-welli-yellow">3 preguntas</span> de indagación
          </h1>
          <p className="text-indigo-800">Antes de hablar de Welli, el doctor habla de él. Estas 3 preguntas definen toda la capacitación.</p>
        </motion.div>

        {/* Q1 - Simulator */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6 rounded-2xl border-2 border-welli-yellow/40 bg-card p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-welli-yellow text-indigo-950 font-bold flex items-center justify-center flex-shrink-0">1</span>
            <div>
              <p className="font-display text-lg font-bold text-indigo-950">"Doctor, cuénteme, ¿cómo llegó a Welli? ¿Por qué nos está considerando?"</p>
              <p className="text-sm text-indigo-800 mt-1">Esta pregunta evita asumir. No todos llegan por presupuestos caídos.</p>
            </div>
          </div>
          <p className="text-xs font-bold text-indigo-950/70 uppercase mb-2">Simulador: ¿Qué respondió?</p>
          <div className="grid md:grid-cols-3 gap-2 mb-3">
            {q1Options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedQ1(i)}
                className={`text-left p-3 rounded-xl border-2 text-sm transition-all ${selectedQ1 === i ? 'border-welli-yellow bg-welli-yellow/20' : 'border-border bg-background hover:border-welli-yellow/50'}`}
              >
                <span className="text-indigo-950 font-medium">"{opt.label}"</span>
              </button>
            ))}
          </div>
          {selectedQ1 !== null && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-secondary/10 border border-secondary/30">
              <p className="text-xs font-bold text-secondary uppercase mb-1">Camino a tomar</p>
              <p className="text-sm text-indigo-950">{q1Options[selectedQ1].insight}</p>
            </motion.div>
          )}
        </motion.section>

        {/* Q2 */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-6 rounded-2xl border-2 border-welli-yellow/40 bg-card p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-welli-yellow text-indigo-950 font-bold flex items-center justify-center flex-shrink-0">2</span>
            <div>
              <p className="font-display text-lg font-bold text-indigo-950">"¿Ya cuenta con otros aliados financieros en su consulta?"</p>
              <p className="text-sm text-indigo-800 mt-1">Si dice sí: pregunta qué le gusta y qué le falta. Ahí está el dolor real.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            {allies.map(a => (
              <div key={a.name} className="p-3 rounded-xl bg-background border border-border">
                <p className="font-bold text-indigo-950 text-sm">{a.name}</p>
                <p className="text-xs text-indigo-800">Dolor: {a.pain}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Q3 */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-6 rounded-2xl border-2 border-welli-yellow/40 bg-card p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-welli-yellow text-indigo-950 font-bold flex items-center justify-center flex-shrink-0">3</span>
            <div>
              <p className="font-display text-lg font-bold text-indigo-950">"¿Quién va a estar al frente — usted, su asistente, o ambos?"</p>
              <p className="text-sm text-indigo-800 mt-1">Esto define a QUIÉN va dirigida la capacitación realmente.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            {q3Scenarios.map(s => (
              <div key={s.who} className="p-3 rounded-xl bg-background border border-border">
                <Users className="w-5 h-5 text-welli-yellow mb-1" />
                <p className="font-bold text-indigo-950 text-sm">{s.who}</p>
                <p className="text-xs text-indigo-800">{s.how}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Q4 condicional */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-8 rounded-2xl border-2 border-dashed border-secondary/40 bg-secondary/5 p-6">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs font-bold text-secondary uppercase mb-1">Condicional</p>
              <p className="font-display text-base font-bold text-indigo-950">"En la última semana, ¿cuántos presupuestos tiene en mente que se le hayan perdido?"</p>
              <p className="text-sm text-indigo-800 mt-2">
                Para doctores premium: <em>"¿Cuántos pacientes valoró el mes pasado que no terminaron tomando el tratamiento?"</em>
              </p>
            </div>
          </div>
        </motion.section>

        <div className="text-center">
          <button onClick={() => { markComplete(); onComplete(); }} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:scale-105 transition-all shadow-lg">
            Continuar <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicaV2Module2Discovery;
