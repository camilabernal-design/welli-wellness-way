import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSession } from "../SessionContext";

interface Props { onComplete: () => void; }

const finalByArchetype = {
  caidos: "Empecemos por los pacientes que ya valoró esta semana. Ellos ya quieren tratarse — solo necesitan la última pieza.",
  premium: "En su clínica todo está bien. Welli simplemente le da a sus pacientes una forma silenciosa de poder decir que sí.",
  'sin-aliados': "Su consulta ya tiene lo más valioso: usted y su trabajo. Welli completa lo que le faltaba.",
};

const Module2DoubleReframe = ({ onComplete }: Props) => {
  const { archetype } = useSession();
  const finalLine = archetype ? finalByArchetype[archetype] : finalByArchetype.caidos;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[70vh] bg-indigo-950 rounded-3xl p-8 md:p-16 flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-2xl md:text-4xl font-bold text-welli-yellow leading-tight"
        >
          "El paciente no se fue porque no quería tratarse con usted."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.8 }}
          className="font-display text-2xl md:text-4xl font-bold text-welli-yellow leading-tight"
        >
          "Se fue porque no tenía cómo decirle que sí."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.3, duration: 0.8 }}
          className="text-base md:text-lg text-white/85 leading-relaxed"
        >
          Usted ya hace lo difícil: diagnosticar, explicar, generar confianza. Welli completa la última pieza:
          que su paciente pueda pagarle sin que eso lo aleje.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6.5, duration: 0.8 }}
          className="font-display text-xl md:text-2xl text-white"
        >
          Welli no le enseña a vender, doctor. Le permite que sus pacientes puedan decirle que sí.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.5, duration: 0.8 }}
          className="text-sm md:text-base text-welli-yellow/90 italic max-w-2xl mx-auto pt-2"
        >
          {finalLine}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.6 }}
          className="pt-4"
        >
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Mostrarme cómo <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Module2DoubleReframe;
