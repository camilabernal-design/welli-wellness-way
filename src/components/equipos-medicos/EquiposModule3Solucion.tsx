import { motion } from "framer-motion";
import { Zap, Percent, Wallet, CalendarClock, ShieldCheck, Banknote, Rocket } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const conditions = [
  {
    icon: Rocket,
    title: "Agilidad comercial",
    value: "Preaprobado en minutos",
    text: "Estudio de crédito completo en 48 a 72 horas una vez estén los documentos básicos.",
  },
  {
    icon: Wallet,
    title: "Alta cobertura",
    value: "Hasta el 70%",
    text: "Financiamos hasta el 70% del costo total del equipo cotizado.",
  },
  {
    icon: Banknote,
    title: "Montos escalables",
    value: "Hasta $250M COP",
    text: "Ideal para equipos con un costo total de hasta ~$350M COP.",
  },
  {
    icon: Percent,
    title: "Tasa competitiva",
    value: "≈ 25% E.A.",
    text: "Tasa según perfil de riesgo del cliente. Siempre confirma la tasa vigente antes de prometerla.",
  },
  {
    icon: CalendarClock,
    title: "Plazos flexibles",
    value: "6 a 36 meses",
    text: "El plazo se ajusta a la capacidad de pago del médico o de la clínica.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad WELLI",
    value: "FNG + seguro de vida",
    text: "Garantía FNG variable según perfil de riesgo, complementada con seguro de vida.",
  },
];

const EquiposModule3Solucion = ({ onComplete }: Props) => (
  <EquiposShell
    phase={1}
    eyebrow="La solución"
    icon={Zap}
    title="Cómo funciona el crédito para equipos médicos"
    subtitle="Un crédito diseñado exclusivamente para que tus clientes adquieran tu tecnología de forma rápida y sin fricciones."
    onComplete={onComplete}
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {conditions.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="rounded-2xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm"
        >
          <div className="w-11 h-11 rounded-xl bg-welli-yellow/25 flex items-center justify-center mb-4">
            <c.icon className="w-5 h-5 text-primary" />
          </div>
          <p className="text-xs font-bold tracking-wider text-indigo-950/60 uppercase">{c.title}</p>
          <p className="text-2xl font-bold text-indigo-950 mt-1 mb-2">{c.value}</p>
          <p className="text-sm text-indigo-950/80">{c.text}</p>
        </motion.div>
      ))}
    </div>

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-indigo-950 rounded-3xl p-8 text-white shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-4">Desembolso directo al distribuidor</h3>
      <p className="text-white/85">
        La máxima seguridad para ti: WELLI desembolsa el dinero directamente a nombre del
        distribuidor contra la entrega del equipo. Tú no financias, no asumes el riesgo de cartera y
        no persigues el pago. Ese riesgo lo asume WELLI.
      </p>
      <div className="grid sm:grid-cols-3 gap-3 mt-6">
        {["Tú entregas el equipo", "WELLI te paga a ti", "El médico le paga a WELLI"].map((s, i) => (
          <div key={s} className="bg-white/10 rounded-xl px-4 py-3">
            <span className="text-welli-yellow font-bold text-sm">Paso {i + 1}</span>
            <p className="text-sm text-white/90 mt-1">{s}</p>
          </div>
        ))}
      </div>
    </motion.section>
  </EquiposShell>
);

export default EquiposModule3Solucion;
