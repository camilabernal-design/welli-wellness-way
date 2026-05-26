import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import WelliLogoFull from "@/components/WelliLogoFull";
import { useSession } from "./SessionContext";
import SessionSetupScreen from "./SessionSetupScreen";

interface Props { onComplete: () => void; }

const variations: Record<string, string> = {
  caidos: 'Hoy le mostraremos cómo recuperar pacientes que estaban a un paso del tratamiento.',
  premium: 'Hoy le mostraremos una herramienta discreta para sus pacientes — sin que usted tenga que pedirla.',
  'sin-aliados': 'Hoy le presentaremos una nueva categoría de valor para su consulta.',
};

const ExpressAliadosModule1Welcome = ({ onComplete }: Props) => {
  const { configured, allyName, archetype } = useSession();
  const [ready, setReady] = useState(configured);

  if (!ready) return <SessionSetupScreen onReady={() => setReady(true)} />;

  const personalLine = archetype ? variations[archetype] : 'Hoy le mostraremos cómo Welli hará crecer su consulta.';

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto text-center py-12">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-10">
          <WelliLogoFull size="lg" />
          <p className="text-welli-yellow font-bold text-sm tracking-widest mt-2">FINANCIA TU BIENESTAR</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 border border-welli-yellow/40 mb-6">
            <Sparkles className="w-4 h-4 text-welli-yellow" />
            <span className="text-xs font-bold text-indigo-950">Bienvenido</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-indigo-950 mb-6 leading-tight">
            Hola, <span className="text-welli-yellow">{allyName || 'doctor/a'}</span>
          </h1>

          <p className="text-xl md:text-2xl text-indigo-800 mb-4 leading-relaxed">
            En los próximos <strong className="text-indigo-950">25 minutos</strong> le mostraremos cómo Welli hará crecer su consulta.
          </p>

          <p className="text-base md:text-lg text-indigo-800/80 mb-12 max-w-2xl mx-auto italic">
            {personalLine}
          </p>

          <button
            onClick={onComplete}
            className="group inline-flex items-center gap-3 text-xl px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Comenzar
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule1Welcome;
