import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, User, Stethoscope, RotateCw } from "lucide-react";
import { useV2Analytics } from "@/hooks/useV2Analytics";

interface ModuleProps { onComplete: () => void; }

type Card = { objection: string; response: string };

const patientObjections: Card[] = [
  { objection: "No tengo el dinero ahorita", response: "Reframe a cuota fija mensual: '¿$180.000 al mes le funcionan?' Vende viabilidad, no precio total." },
  { objection: "Lo voy a pensar", response: "Decodifica: casi siempre significa 'no tengo plata'. Ofrece Welli Check en segundos sin compromiso." },
  { objection: "Prefiero pagar con tarjeta", response: "No toca el cupo, tasa fija, no afecta capacidad de endeudamiento bancario." },
  { objection: "En otra clínica es más barato", response: "🎯 El reframe maestro: NO baje su precio, AUMENTE la viabilidad. La cuota mensual gana al precio total." },
];

const doctorObjections: Card[] = [
  { objection: "Mi paciente no me pide financiación", response: "Le da pena pedírsela. Welli es la herramienta para que NO TENGA que pedirla — usted la ofrece." },
  { objection: "Mi clínica es premium, no necesito esto", response: "No es para usted, es para SU PACIENTE. Acceso discreto sin que el doctor se vuelva vendedor." },
  { objection: "Ya tengo otro aliado", response: "Diferenciadores: velocidad de desembolso, sin papeleo, sin fiador, 100% digital." },
  { objection: "Los pacientes desconfían de financieras", response: "Welli no es banco. Es crédito de salud exclusivo, regulado, con tasa transparente." },
];

const FlipCard = ({ card }: { card: Card }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped(f => !f)}
      className="relative w-full text-left rounded-2xl border-2 border-border bg-card p-5 min-h-[160px] hover:border-welli-yellow/50 transition-all group"
    >
      <div className="absolute top-3 right-3 opacity-40 group-hover:opacity-100 transition-opacity">
        <RotateCw className="w-4 h-4 text-indigo-950" />
      </div>
      {!flipped ? (
        <>
          <p className="text-xs font-bold text-indigo-950/60 uppercase mb-2">Objeción</p>
          <p className="font-display text-lg font-bold text-indigo-950">"{card.objection}"</p>
          <p className="text-xs text-indigo-800 mt-3">Toca para ver la respuesta →</p>
        </>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xs font-bold text-welli-yellow uppercase mb-2">Respuesta</p>
          <p className="text-sm text-indigo-950">{card.response}</p>
        </motion.div>
      )}
    </button>
  );
};

const ClinicaV2Module6Objections = ({ onComplete }: ModuleProps) => {
  const { markComplete } = useV2Analytics(6, "Manejo de Objeciones");

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Manejo de <span className="text-welli-yellow">objeciones</span>
          </h1>
          <p className="text-indigo-800">Ahora que el doctor sabe USAR la herramienta, puede aprender a manejar objeciones de pacientes.</p>
        </motion.div>

        <div className="p-4 rounded-xl bg-welli-yellow/10 border-2 border-welli-yellow/30 mb-8 text-sm text-indigo-950">
          💡 <strong>Antes de dar respuestas pre-hechas, enseña a PREGUNTAR:</strong> "Doctor, sáquele al paciente sus propias objeciones. Pregúntele: '¿Por qué cree que no podemos cerrar esto hoy?'"
        </div>

        {/* Patient */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
              <User className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-indigo-950">6.1 Paciente → Doctor</h2>
              <p className="text-sm text-indigo-800">Lo que el doctor escucha en consultorio.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {patientObjections.map((c, i) => <FlipCard key={i} card={c} />)}
          </div>
        </section>

        {/* Doctor */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-welli-yellow/30 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-indigo-950" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-indigo-950">6.2 Doctor → Welli</h2>
              <p className="text-sm text-indigo-800">Lo que Mariana escucha en la capacitación.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {doctorObjections.map((c, i) => <FlipCard key={i} card={c} />)}
          </div>
        </section>

        <div className="text-center">
          <button onClick={() => { markComplete(); onComplete(); }} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:scale-105 transition-all shadow-lg">
            Continuar al cierre <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicaV2Module6Objections;
