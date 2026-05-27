import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HighlightBox,
  SoftBox,
  WarningBox,
} from "@/components/BariatricaNovo/HighlightBox";

const DATA = [
  { m: "M1", v: 1 },
  { m: "M2", v: 2 },
  { m: "M3", v: 0 },
  { m: "M4", v: 1 },
  { m: "M5", v: 0 },
];

export default function MonthlyDeclineChart({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [showThoughts, setShowThoughts] = useState(false);
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowThoughts(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const pick = (a: "yes" | "no") => {
    setAnswer(a);
    onComplete();
  };

  return (
    <div className="space-y-8">
      <SoftBox>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6">
          Movimiento mensual de la clínica
        </p>
        <div className="flex items-end justify-around h-48 gap-2">
          {DATA.map((d, i) => (
            <div key={d.m} className="flex flex-col items-center flex-1 h-full justify-end">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: i * 0.4, ease: "easeOut" }}
                style={{ transformOrigin: "bottom" }}
                className="w-full max-w-[60px] bg-welli-coral rounded-t-md"
                // height proportional: max v=2 → 100%
              >
                <div style={{ height: `${(d.v / 2) * 160 + 8}px` }} />
              </motion.div>
              <p className="text-sm text-slate-500 mt-2">{d.m}</p>
              <p className="text-xl font-bold text-indigo-950">{d.v}</p>
            </div>
          ))}
        </div>
      </SoftBox>

      <AnimatePresence>
        {showThoughts && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <WarningBox>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-950 mb-3">
                Pensamiento del equipo en ese momento
              </p>
              <ul className="space-y-2 text-lg text-indigo-950 italic">
                <li>"Tal vez Welli no es para nuestra clínica..."</li>
                <li>"Tal vez nuestros pacientes no son de financiación..."</li>
                <li>"Tal vez nuestro modelo es diferente..."</li>
              </ul>
            </WarningBox>
          </motion.div>
        )}
      </AnimatePresence>

      {showThoughts && !answer && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xl font-semibold text-indigo-950 mb-4">
            ¿Alguno de estos pensamientos le suena familiar?
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => pick("yes")}
              className="px-6 py-3 rounded-xl border-2 border-slate-300 bg-white text-indigo-950 font-semibold hover:border-welli-yellow"
            >
              Sí, alguno me ha pasado
            </button>
            <button
              onClick={() => pick("no")}
              className="px-6 py-3 rounded-xl border-2 border-slate-300 bg-white text-indigo-950 font-semibold hover:border-welli-yellow"
            >
              No, no me ha pasado
            </button>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {answer && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <HighlightBox className="bg-accent/10 border-accent">
              <p className="text-lg text-indigo-950">
                {answer === "yes"
                  ? "Es exactamente lo que ellos pensaron. Veamos qué descubrieron."
                  : "Mejor para usted. Igual vale la pena ver el método."}
              </p>
            </HighlightBox>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
