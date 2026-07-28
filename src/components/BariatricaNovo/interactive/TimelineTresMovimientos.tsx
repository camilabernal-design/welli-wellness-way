import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Boxes, Pill, Handshake } from "lucide-react";

const PASOS = [
  {
    n: 1,
    title: "Paquetización",
    icon: Boxes,
    desc: "Dejaron de vender procedimientos sueltos y empezaron a vender programas completos.",
    frase:
      "\"No le estoy vendiendo una cirugía. Le estoy proponiendo un programa de 12 meses.\"",
    novo: false,
  },
  {
    n: 2,
    title: "Wegovy",
    icon: Pill,
    desc: "Integraron el manejo farmacológico dentro del programa, no como un extra.",
    frase:
      "\"El acompañamiento farmacológico hace que el resultado se sostenga en el tiempo.\"",
    novo: true,
  },
  {
    n: 3,
    title: "Welli como cierre",
    icon: Handshake,
    desc: "Presentaron la inversión siempre en cuota fija mensual, en la misma respiración.",
    frase:
      "\"Esto se puede manejar en una cuota fija mensual. ¿Quiere que veamos en 30 segundos si califica?\"",
    novo: false,
  },
];

export default function TimelineTresMovimientos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6 mt-4">
      {PASOS.map((p, i) => {
        const Icon = p.icon;
        return (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.45, duration: 0.5 }}
            onMouseEnter={() => setHover(p.n)}
            onMouseLeave={() => setHover(null)}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl border-2 border-slate-200 bg-white p-8 hover:border-welli-yellow transition-colors"
          >
            {p.novo && (
              <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold text-slate-500 border border-slate-300 rounded-full px-2 py-0.5">
                novo nordisk
              </span>
            )}
            <div className="w-12 h-12 rounded-xl bg-welli-yellow flex items-center justify-center">
              <Icon className="h-6 w-6 text-indigo-950" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Paso {p.n}
            </p>
            <p className="text-2xl font-bold text-indigo-950 mt-1">{p.title}</p>
            <p className="text-lg text-slate-700 mt-4 leading-relaxed">{p.desc}</p>
            {hover === p.n && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-xl bg-welli-yellow/25 border border-welli-yellow p-4"
              >
                <p className="text-base italic text-indigo-950">{p.frase}</p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
