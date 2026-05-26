import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface Props { onNext: () => void; }

type Phase = "valoradas" | "perdidas" | "ganadas";

const lostFrases = ["Lo voy a pensar", "Está muy caro, doc", "Buscaré más opciones", "Nunca volvió"];
const wonFrases = ["Cuota fija aprobada", "Tratamiento iniciado", "Eligió a usted", "Cliente recurrente"];
const LOST_INDICES = [2, 5, 7, 10]; // 12 spaces -> 4 transform

const Module2AgendaReveal = ({ onNext }: Props) => {
  const [phase, setPhase] = useState<Phase>("valoradas");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("perdidas"), 2000);
    const t2 = setTimeout(() => setPhase("ganadas"), 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const cards = Array.from({ length: 12 }, (_, i) => {
    const lostIdx = LOST_INDICES.indexOf(i);
    const isAffected = lostIdx >= 0;
    if (phase === "valoradas" || !isAffected) {
      return {
        color: "bg-blue-50 border-blue-200",
        icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />,
        text: "",
      };
    }
    if (phase === "perdidas") {
      return {
        color: "bg-red-100 border-red-300",
        icon: null,
        text: lostFrases[lostIdx],
      };
    }
    return {
      color: "bg-green-500 border-green-600 text-white",
      icon: <Sparkles className="w-5 h-5 text-white" />,
      text: wonFrases[lostIdx],
    };
  });

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 text-center">
        Esta es su próxima semana, doctor.
      </h2>

      <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-3xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={`${phase}-${i}`}
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className={`min-h-[140px] rounded-2xl border-2 p-3 flex flex-col items-center justify-center text-center ${c.color}`}
          >
            {c.icon}
            {c.text && (
              <p className={`text-xs md:text-sm font-bold mt-2 leading-tight ${
                phase === "ganadas" ? "text-white" : "text-red-700"
              }`}>
                "{c.text}"
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {phase === "perdidas" && (
          <motion.p
            key="perdidas-text"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className="text-center text-lg italic text-indigo-800"
          >
            Cuatro pacientes. Cuatro razones. La misma realidad.
          </motion.p>
        )}
        {phase === "ganadas" && (
          <motion.p
            key="ganadas-text"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center font-display text-xl font-bold text-indigo-950"
          >
            Los mismos cuatro pacientes. Otra historia.
          </motion.p>
        )}
      </AnimatePresence>

      {phase === "ganadas" && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-center"
        >
          <button
            onClick={onNext}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Continuar <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Module2AgendaReveal;
