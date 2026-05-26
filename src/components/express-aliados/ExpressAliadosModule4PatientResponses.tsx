import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useSession } from "./SessionContext";

interface Props { onComplete: () => void; }

interface Card { phrase: string; reply: string; }

const baseCards: Card[] = [
  { phrase: 'Lo voy a pensar', reply: 'Casi siempre significa "no sé cómo pagarlo". Pregunte: "¿Es por el tratamiento o por el monto?"' },
  { phrase: 'Prefiero pagar con mi tarjeta de crédito', reply: 'Tasa fija (no variable). No le toca el cupo disponible. Sin cuotas de manejo.' },
  { phrase: 'En otra clínica es más barato', reply: 'No objeta el valor clínico. Pide ayuda para pagar. No baje precio, aumente viabilidad con cuota fija.' },
  { phrase: 'No quiero productos financieros', reply: 'Welli no es banco ni tarjeta. Es un crédito exclusivo de salud sin fiador.' },
  { phrase: '¿Y si no me aprueban?', reply: 'Plan B: un familiar o pareja puede aplicar. También hay aprobaciones parciales.' },
  { phrase: 'No tengo el dinero ahorita', reply: 'Es la conversación más común. Cuota fija mensual, tratamiento hoy, pago gradual.' },
];

const premiumExtra: Card = {
  phrase: 'Mis pacientes no me piden financiación',
  reply: 'No le piden porque no se atreven, no porque no lo necesiten. Welli es para que no tengan que pedírselo.',
};

const ExpressAliadosModule4PatientResponses = ({ onComplete }: Props) => {
  const { archetype } = useSession();
  const cards = archetype === 'premium' ? [premiumExtra, ...baseCards] : baseCards;
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  return (
    <div className="module-container">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <MessageSquare className="w-12 h-12 mx-auto text-welli-yellow mb-4" />
          <h1 className="font-display text-3xl md:text-5xl font-bold text-indigo-950 mb-3">
            Lo que escuchará de sus pacientes
          </h1>
          <p className="text-lg text-indigo-800">Toca cada tarjeta para ver cómo responder.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {cards.map((c, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setFlipped({ ...flipped, [i]: !flipped[i] })}
              className={`text-left p-6 rounded-2xl border-2 transition-all min-h-[180px] ${
                flipped[i]
                  ? 'border-welli-yellow bg-welli-yellow/20'
                  : 'border-welli-yellow/30 bg-white hover:border-welli-yellow/60'
              }`}
            >
              {!flipped[i] ? (
                <>
                  <p className="text-xs font-bold text-welli-yellow uppercase mb-2">Pacientes dicen</p>
                  <p className="font-display text-xl font-bold text-indigo-950 mb-3">"{c.phrase}"</p>
                  <p className="text-xs text-indigo-800/70 italic">Toca para ver respuesta →</p>
                </>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-xs font-bold text-indigo-950 uppercase mb-2">Cómo responder</p>
                  <p className="text-base text-indigo-950">{c.reply}</p>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="bg-indigo-950 rounded-3xl p-8 text-center mb-8"
        >
          <p className="font-display text-xl md:text-2xl text-welli-yellow leading-tight">
            "Ninguna de estas respuestas es un 'no' definitivo. Son señales de que su paciente quiere tratarse y necesita una ruta de pago."
          </p>
        </motion.div>

        <div className="text-center">
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Continuar <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule4PatientResponses;
