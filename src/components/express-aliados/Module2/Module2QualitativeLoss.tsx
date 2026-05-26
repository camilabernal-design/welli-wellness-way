import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSession } from "../SessionContext";

interface Props { onNext: () => void; }

const formatCOP = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

const baseCards = [
  { emoji: "🦷", title: "Pacientes que necesitaban ese tratamiento", subtitle: "— y no lo recibieron" },
  { emoji: "💼", title: "El valor diferencial de su clínica", subtitle: "— no comunicado" },
  { emoji: "🩺", title: "La urgencia clínica de actuar ahora", subtitle: "— no transmitida" },
  { emoji: "⏳", title: "Pacientes que postergaron", subtitle: "— y empeoraron su condición" },
  { emoji: "🤝", title: "La oportunidad de relación a largo plazo", subtitle: "— perdida" },
  { emoji: "🏥", title: "Pacientes que terminaron en otra clínica", subtitle: "— con peor calidad" },
];

const premiumCard = {
  emoji: "👑",
  title: "Pacientes que admiran su clínica",
  subtitle: "— pero no se atrevieron a pedir facilidades",
};

const sinAliadosCard = {
  emoji: "🚪",
  title: "Pacientes que se fueron",
  subtitle: "— a clínicas que sí ofrecen financiación",
};

const closingByArchetype = {
  caidos: '"Cada paciente que se fue de su consulta sin tratarse, no solo perdió usted plata. Perdió la oportunidad de ayudarlo a entender el valor de lo que usted hace."',
  premium: '"Doctor, su clínica es excelente. Pero la excelencia clínica no se traduce automáticamente en pacientes tratándose. A veces la falta de una herramienta de pago es lo único que separa una valoración brillante de un tratamiento empezado. Sus pacientes no le piden financiación — no porque no la necesiten, sino porque no se atreven."',
  'sin-aliados': '"Cada paciente que se fue sin opción de financiación es una oportunidad que otra clínica sí tomó. La buena noticia: cambiar eso empieza esta semana."',
};

const Module2QualitativeLoss = ({ onNext }: Props) => {
  const { archetype, painCalculation } = useSession();
  const monthlyLoss = painCalculation?.monthlyLoss || 0;
  const lostPatients = painCalculation
    ? Math.round((painCalculation.patientsPerMonth * painCalculation.lossPercent) / 100)
    : 0;

  const cards = (() => {
    if (archetype === "premium") return [premiumCard, ...baseCards];
    if (archetype === "sin-aliados") return [...baseCards, sinAliadosCard];
    return baseCards;
  })();

  const closing = archetype ? closingByArchetype[archetype] : closingByArchetype.caidos;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      {/* Pill con cifra */}
      <div className="flex justify-end">
        <div className="px-4 py-2 rounded-full bg-indigo-950 text-welli-yellow text-sm font-bold">
          {formatCOP(monthlyLoss)} / mes
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-indigo-950">
          Pero los {formatCOP(monthlyLoss)} no son lo único que se le va.
        </h2>
        <p className="text-lg text-indigo-800 max-w-3xl mx-auto leading-relaxed">
          Son <strong className="text-indigo-950">{lostPatients} pacientes al mes</strong> que valoró usted con su
          tiempo, su experiencia, su conocimiento clínico — y se fueron sin entender por qué su propuesta valía la pena.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="rounded-2xl border-2 border-welli-yellow/30 bg-card p-5"
          >
            <div className="text-3xl mb-2">{c.emoji}</div>
            <p className="font-bold text-indigo-950 text-sm leading-snug">{c.title}</p>
            <p className="text-xs text-indigo-800 mt-1">{c.subtitle}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: cards.length * 0.2 + 0.3 }}
        className="bg-indigo-950 rounded-3xl p-8 text-center"
      >
        <p className="font-display text-xl md:text-2xl text-welli-yellow leading-relaxed italic">
          {closing}
        </p>
      </motion.div>

      <div className="text-center">
        <button
          onClick={onNext}
          className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
        >
          Continuar <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default Module2QualitativeLoss;
