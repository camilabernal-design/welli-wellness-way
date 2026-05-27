import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { HighlightBox } from "@/components/BariatricaNovo/HighlightBox";

const PATTERNS = [
  {
    n: 1,
    title: "El paciente entraba por un tratamiento específico y se iba sin volver.",
  },
  { n: 2, title: "Ticket alto cuando ocurría pero no recurrente." },
  { n: 3, title: "Muchos pacientes calificaban pero no podían pagar." },
];

function feedback(sel: number[]) {
  if (sel.length === 0)
    return "Su práctica está en una situación distinta. Igual vale la pena ver el método — puede prevenir que estos patrones aparezcan más adelante.";
  if (sel.length === 1)
    return `Identificó el Patrón ${sel[0]}. Es lo más común al inicio. Hoy vamos a ver cómo se ataca.`;
  if (sel.length === 2)
    return "Está viviendo varios frentes a la vez. Lo bueno: los 3 movimientos que veremos atacan todos al mismo tiempo.";
  return "Está justo donde estaban ellos hace 7 meses. La buena noticia: el cambio puede ser igual de rápido.";
}

export default function PatternsChecklist({
  onComplete,
}: {
  onComplete: (sel: number[]) => void;
}) {
  const [sel, setSel] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);

  const toggle = (n: number) =>
    setSel((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));

  return (
    <div className="space-y-4">
      <p className="text-lg text-slate-700">
        Toque cada patrón que también le pasa en su consulta.
      </p>
      {PATTERNS.map((p) => {
        const active = sel.includes(p.n);
        return (
          <motion.button
            key={p.n}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => toggle(p.n)}
            className={`w-full text-left rounded-xl border-2 p-6 transition-all flex gap-4 items-start ${
              active
                ? "bg-welli-yellow/20 border-welli-yellow"
                : "bg-white border-slate-300 hover:border-welli-yellow"
            }`}
          >
            <div
              className={`flex-shrink-0 h-7 w-7 rounded-md border-2 flex items-center justify-center ${
                active ? "bg-welli-yellow border-welli-yellow" : "border-slate-400"
              }`}
            >
              {active && <Check className="h-5 w-5 text-indigo-950" />}
            </div>
            <div>
              <p className="text-sm font-semibold text-indigo-950 uppercase tracking-wider">
                Patrón {p.n}
              </p>
              <p className="text-lg text-indigo-950 mt-1">{p.title}</p>
            </div>
          </motion.button>
        );
      })}

      <button
        onClick={() => {
          setRevealed(true);
          onComplete(sel);
        }}
        className="mt-4 bg-welli-yellow text-indigo-950 font-semibold px-6 py-3 rounded-xl disabled:opacity-50"
      >
        Ver mi diagnóstico
      </button>

      <AnimatePresence>
        {revealed && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <HighlightBox className="mt-4">
              <p className="text-lg text-indigo-950 leading-relaxed">{feedback(sel)}</p>
            </HighlightBox>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
