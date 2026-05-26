import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useSession } from "./SessionContext";

interface Props { onComplete: () => void; }

const variationNote: Record<string, string> = {
  premium: 'Más del 60% de los pacientes que admiran a su clínica no se atreven a pedir facilidades. Se van en silencio.',
  'sin-aliados': 'Es una tendencia del sector: las clínicas que ofrecen financiamiento se vuelven primera opción.',
  caidos: 'Cada presupuesto perdido representa entre $2M y $8M en ingresos no realizados.',
};

const ExpressAliadosModule2Impact = ({ onComplete }: Props) => {
  const { archetype } = useSession();
  const note = archetype ? variationNote[archetype] : '';

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Calendar className="w-12 h-12 mx-auto text-welli-yellow mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-indigo-950">
            El impacto en su agenda
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="rounded-3xl border-2 border-destructive/30 bg-destructive/5 p-8"
          >
            <p className="text-xs font-bold text-destructive uppercase tracking-wider mb-4">Sin Welli</p>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`aspect-square rounded-lg ${i < 5 ? 'bg-destructive/30' : 'bg-welli-yellow/40'}`} />
              ))}
            </div>
            <p className="text-sm text-indigo-800 mb-2"><strong>5 de 8 espacios:</strong> pacientes que valoraron y no volvieron</p>
            <p className="font-display text-2xl font-bold text-destructive">~ $12M perdidos / mes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            className="rounded-3xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-8"
          >
            <p className="text-xs font-bold text-welli-yellow uppercase tracking-wider mb-4">Con Welli</p>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-welli-yellow" />
              ))}
            </div>
            <p className="text-sm text-indigo-800 mb-2"><strong>8 de 8 espacios:</strong> pacientes financiados y tratados</p>
            <p className="font-display text-2xl font-bold text-welli-yellow">+ 35% ingresos promedio</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="bg-indigo-950 rounded-3xl p-8 md:p-10 text-center mb-8"
        >
          <p className="font-display text-2xl md:text-3xl font-bold text-welli-yellow leading-tight">
            "El paciente no se fue porque no quería tratarse con usted.
            <br />Se fue porque no sabía cómo pagarle."
          </p>
          {note && <p className="text-sm text-white/70 mt-4 italic">{note}</p>}
        </motion.div>

        <div className="text-center">
          <button
            onClick={onComplete}
            className="group inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Continuar
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule2Impact;
