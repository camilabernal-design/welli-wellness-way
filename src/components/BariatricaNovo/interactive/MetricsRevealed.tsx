import { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

export default function MetricsRevealed({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3500);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div className="space-y-8">
      <SoftBox>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          Movimiento mensual por sede
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-slate-500 mb-1">Antes (1-2 créditos)</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "15%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-6 bg-slate-300 rounded"
            />
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Hoy (5-8 créditos)</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.2, delay: 1 }}
              className="h-6 bg-welli-yellow rounded"
            />
          </div>
        </div>
      </SoftBox>

      <div className="grid md:grid-cols-2 gap-4">
        <SoftBox className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Antes
          </p>
          <p className="text-lg font-semibold text-indigo-950 mt-1">Estancados</p>
        </SoftBox>
        <div className="rounded-xl border-2 border-welli-yellow bg-welli-yellow/20 p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-950/70">
            Ahora
          </p>
          <p className="text-lg font-semibold text-indigo-950 mt-1">Mayo 2026</p>
        </div>
      </div>

      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
        Acumulado 7 meses
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { to: 192, label: "desembolsos", prefix: "", suffix: "", delay: 0 },
          {
            to: 1645,
            label: "millones COP",
            prefix: "$",
            suffix: "M",
            delay: 600,
          },
          { to: 8.5, label: "ticket promedio", prefix: "$", suffix: "M", delay: 1200 },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: c.delay / 1000 }}
            className="bg-white border-2 border-welli-yellow rounded-2xl p-6 text-center"
          >
            <p className="text-4xl md:text-5xl font-bold text-indigo-950">
              <AnimatedCounter
                to={c.to}
                delay={c.delay}
                prefix={c.prefix}
                suffix={c.suffix}
                format={c.to === 8.5 ? (n) => (n / 10 + 0).toFixed(0) : undefined}
              />
            </p>
            <p className="text-sm text-slate-600 mt-2 uppercase tracking-wider">
              {c.label}
            </p>
          </motion.div>
        ))}
      </div>

      <HighlightBox>
        <p className="text-lg text-indigo-950 leading-relaxed">
          Eso son aproximadamente $235M desembolsados cada mes. $58M por sede. Y
          ticket de $8.5M — paquetes integrales, no procedimientos sueltos.
        </p>
      </HighlightBox>
    </div>
  );
}
