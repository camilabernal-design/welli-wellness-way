import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wallet, Lock, MessageCircle } from "lucide-react";
import { useSession } from "./SessionContext";

interface Props { onComplete: () => void; }

const pillars = [
  {
    icon: Wallet,
    title: "El pago llega a USTED",
    text: "Directo a la cuenta de su clínica. 72 horas hábiles desde su solicitud. Martes y jueves.",
  },
  {
    icon: Lock,
    title: "Tasa transparente, ajustada al Banco de la República",
    text: "Lo que su paciente firma es lo que paga durante todo el crédito. Tasa fija para él, desde el día uno. La tasa de oferta de Welli se ajusta a la tasa regulada por el Banco de la República — siempre dentro de los límites legales.",
  },
  {
    icon: MessageCircle,
    title: "No es un call center",
    text: "Tiene un asesor dedicado que conoce su clínica. WhatsApp directo. Sin tickets, sin filas.",
  },
];

const useCounter = (target: number, run: boolean, duration = 1500) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setV(Math.round(target * t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return v;
};

const ExpressAliadosModule5Trust = ({ onComplete }: Props) => {
  const { archetype } = useSession();
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const clinics = useCounter(2800, statsVisible);
  const apps = useCounter(300000, statsVisible);
  const disbursed = useCounter(140, statsVisible);

  const archetypeNote = archetype === "premium"
    ? "Especialmente importante para usted, doctor: la relación con su paciente queda intacta. Las conversaciones de pago las maneja Welli, no su clínica."
    : archetype === "sin-aliados"
    ? "Es probablemente la diferencia más grande con otros aliados financieros que existen en el mercado: aquí su clínica no asume el riesgo crediticio."
    : null;

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Momento 1 — Pilares */}
        <div>
          <div className="text-center mb-8 space-y-2">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950">
              Tres cosas que necesita saber sobre cómo opera Welli con su clínica
            </h1>
            <p className="text-indigo-800 italic">Esto es lo que más nos preguntan los aliados nuevos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="rounded-3xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-6 text-center space-y-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-welli-yellow mx-auto flex items-center justify-center">
                  <p.icon className="w-7 h-7 text-indigo-950" />
                </div>
                <p className="text-xs font-bold text-welli-yellow">PILAR {i + 1}</p>
                <h3 className="font-display text-lg font-bold text-indigo-950">{p.title}</h3>
                <p className="text-sm text-indigo-800 leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Momento 2 — Pregunta del riesgo */}
        <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-welli-yellow/10 p-8 md:p-12 space-y-6">
          <p className="text-indigo-800 text-center">
            La pregunta que todo aliado se hace pero nadie pregunta:
          </p>
          <p className="font-display text-2xl md:text-3xl font-bold text-indigo-950 text-center italic">
            "¿Y si el paciente deja de pagar?"
          </p>
          <p className="font-display text-3xl md:text-4xl font-bold text-welli-yellow text-center">
            Eso es problema nuestro. No suyo.
          </p>
          <div className="rounded-2xl bg-white border-2 border-welli-yellow/30 p-6 space-y-3 text-indigo-950">
            <p>Una vez que usted recibe el desembolso, ese dinero es suyo. Punto.</p>
            <p>
              Si después el paciente atrasa cuotas o deja de pagar, Welli gestiona el cobro. Usted nunca se ve afectado.
            </p>
            <p>Sin retroactivos. Sin penalizaciones a su clínica. Sin que su paciente le reclame a usted.</p>
            {archetypeNote && (
              <p className="text-sm italic text-indigo-800 pt-2 border-t border-welli-yellow/20">{archetypeNote}</p>
            )}
          </div>
        </div>

        {/* Momento 3 — Cifras */}
        <div className="text-center space-y-6">
          <p className="font-display text-2xl md:text-3xl font-bold text-indigo-950">No estamos empezando.</p>
          <div className="grid grid-cols-3 gap-4 rounded-3xl bg-indigo-950 p-8">
            <div>
              <p className="font-display text-2xl md:text-4xl font-bold text-welli-yellow">
                {clinics.toLocaleString("es-CO")}+
              </p>
              <p className="text-xs md:text-sm text-white/80 mt-1">Clínicas aliadas</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-4xl font-bold text-welli-yellow">
                {apps.toLocaleString("es-CO")}+
              </p>
              <p className="text-xs md:text-sm text-white/80 mt-1">Aplicaciones procesadas</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-4xl font-bold text-welli-yellow">
                ${disbursed.toLocaleString("es-CO")}.000M
              </p>
              <p className="text-xs md:text-sm text-white/80 mt-1">Desembolsados</p>
            </div>
          </div>
          <p className="text-indigo-800">Welli lleva 4 años operando en Colombia. Esto no es un experimento.</p>
        </div>

        <div className="text-center">
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Hablemos de su primera activación <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule5Trust;
