import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

const THOUGHTS = [
  { max: 25, t: "Es mucha plata. No sé si tengo. Voy a pensarlo." },
  { max: 50, t: "Es caro, pero entiendo que es serio. ¿Cómo lo pago?" },
  { max: 75, t: "Vale la pena. Tengo que ver cómo hacerlo viable." },
  { max: 101, t: "Esto cambia mi vida. Encuentro la forma." },
];

export default function ValuePerceptionSlider({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [v, setV] = useState(0);
  const thought = THOUGHTS.find((x) => v < x.max)!.t;
  const valor = v;
  const precio = 100 - v;

  useEffect(() => {
    if (v >= 75) onComplete();
  }, [v, onComplete]);

  return (
    <div className="space-y-8">
      <SoftBox>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Lo que piensa el paciente
        </p>
        <AnimatePresence mode="wait">
          <motion.p
            key={thought}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-2xl md:text-3xl italic text-indigo-950 mt-4 leading-relaxed"
          >
            "{thought}"
          </motion.p>
        </AnimatePresence>
      </SoftBox>

      <div className="px-2">
        <Slider
          value={[v]}
          onValueChange={(x) => setV(x[0])}
          min={0}
          max={100}
          step={1}
        />
        <div className="flex justify-between mt-3 text-sm font-semibold text-indigo-950">
          <span>PRECIO</span>
          <span>VALOR</span>
        </div>
        <p className="text-center text-slate-600 mt-4">
          Su paciente ahora está percibiendo:{" "}
          <span className="font-semibold text-indigo-950">PRECIO {precio}%</span>{" "}
          ·{" "}
          <span className="font-semibold text-indigo-950">VALOR {valor}%</span>
        </p>
      </div>

      <AnimatePresence>
        {v >= 75 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <HighlightBox>
              <p className="text-xl text-indigo-950 leading-relaxed">
                Exacto. Ese mismo paciente, con la misma plata en el bolsillo, decide
                distinto según cómo se le presentó el tratamiento. Eso es lo que vamos
                a aprender hoy.
              </p>
            </HighlightBox>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
