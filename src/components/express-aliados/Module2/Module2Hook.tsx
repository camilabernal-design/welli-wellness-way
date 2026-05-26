import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSession } from "../SessionContext";

interface Props { onNext: () => void; }

const Module2Hook = ({ onNext }: Props) => {
  const { allyName } = useSession();
  const name = allyName?.trim() || "doctor";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[60vh] bg-gradient-to-br from-welli-yellow/10 via-welli-yellow/5 to-transparent rounded-3xl flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-indigo-950 leading-tight">
          Hablemos de su agenda.
        </h1>
        <p className="text-lg md:text-xl text-indigo-800 leading-relaxed italic">
          "Doctor <span className="font-bold not-italic text-indigo-950">{name}</span>, con lo que me
          acaba de contar, le quiero mostrar algo que probablemente le va a sonar familiar."
        </p>
        <button
          onClick={onNext}
          className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
        >
          Pensemos juntos <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default Module2Hook;
