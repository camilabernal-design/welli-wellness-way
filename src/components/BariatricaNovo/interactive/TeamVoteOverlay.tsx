import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

const RANGES = ["1-3", "4-6", "7-9", "10"];

export default function TeamVoteOverlay({ doctorPick }: { doctorPick: string }) {
  const [votes, setVotes] = useState<string[]>([]);
  const counts = RANGES.map((r) => ({ r, n: votes.filter((v) => v === r).length }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="mt-8"
    >
      <SoftBox>
        <p className="text-lg text-indigo-950 leading-relaxed">
          Si tiene equipo en la sala, pídales que voten también — ven cosas que usted
          no ve desde su silla.
        </p>
        <div className="mt-6 grid grid-cols-4 gap-3">
          {RANGES.map((r) => (
            <motion.button
              key={r}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVotes((v) => [...v, r])}
              className="h-16 rounded-lg border-2 border-slate-300 bg-white text-xl font-bold text-indigo-950 hover:border-welli-yellow"
            >
              {r}
            </motion.button>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          {votes.length} voto{votes.length === 1 ? "" : "s"} registrado
          {votes.length === 1 ? "" : "s"}
        </p>
        <AnimatePresence>
          {votes.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {counts
                .filter((c) => c.n > 0)
                .map((c) => (
                  <motion.span
                    key={c.r}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-3 py-1 rounded-full bg-welli-yellow text-indigo-950 text-sm font-semibold"
                  >
                    {c.n}× ({c.r})
                  </motion.span>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </SoftBox>
      {votes.length >= 2 && (
        <HighlightBox className="mt-4">
          <p className="text-indigo-950">
            Su percepción: <span className="font-bold">{doctorPick}</span>. Su equipo
            ya registró {votes.length} voto{votes.length === 1 ? "" : "s"}. Si hay
            diferencia con su percepción, vale explorar por qué.
          </p>
        </HighlightBox>
      )}
    </motion.div>
  );
}
