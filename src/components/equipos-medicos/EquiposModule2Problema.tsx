import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, Lock, Stethoscope, Truck } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const distribuidor = [
  { icon: TrendingDown, text: "Pierdes ventas porque tu cliente no tiene cómo pagar el equipo hoy." },
  { icon: Clock, text: "Ciclos de venta largos que dependen de aprobaciones bancarias lentas." },
  { icon: Lock, text: "Capital propio atrapado financiando equipos en lugar de inventario y crecimiento." },
];

const medico = [
  "Crédito tradicional rígido, con altos requisitos y garantías.",
  "Procesos largos que retrasan decisiones de inversión.",
  "Capital propio atrapado en la compra del equipo.",
  "Oportunidades de crecimiento postergadas por falta de liquidez.",
];

const EquiposModule2Problema = ({ onComplete }: Props) => (
  <EquiposShell
    phase={1}
    eyebrow="Diagnóstico"
    icon={AlertTriangle}
    title="El problema del mercado"
    subtitle="La venta de tecnología médica no se cae por precio: se cae por falta de una alternativa de pago que el médico pueda asumir sin descapitalizarse."
    onComplete={onComplete}
  >
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border-2 border-primary/40 bg-card p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-5">
          <Truck className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-indigo-950 text-lg">Distribuidores de equipos médicos</h3>
        </div>
        <div className="space-y-3">
          {distribuidor.map((d) => (
            <div key={d.text} className="flex items-start gap-3 rounded-xl bg-primary/5 px-4 py-3">
              <d.icon className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span className="text-sm text-indigo-950/85">{d.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border-2 border-welli-yellow/50 bg-card p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-5">
          <Stethoscope className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-indigo-950 text-lg">Instituciones médicas y médicos</h3>
        </div>
        <ul className="space-y-3">
          {medico.map((m) => (
            <li key={m} className="flex items-start gap-3 rounded-xl bg-welli-yellow/15 px-4 py-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-indigo-950/85">{m}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-indigo-950 rounded-3xl p-8 text-white text-center shadow-xl"
    >
      <p className="text-lg md:text-xl font-semibold">
        Cada cotización que se queda esperando "el crédito del banco" es una venta que se enfría.
      </p>
      <p className="mt-3 text-white/80">
        WELLI existe para que esa conversación se resuelva en minutos, no en meses.
      </p>
    </motion.div>
  </EquiposShell>
);

export default EquiposModule2Problema;
