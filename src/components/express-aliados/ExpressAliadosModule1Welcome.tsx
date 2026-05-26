import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WelliLogoFull from "@/components/WelliLogoFull";
import { useSession } from "./SessionContext";
import SessionSetupScreen from "./SessionSetupScreen";

interface Props { onComplete: () => void; }

const promises = [
  "Verá cómo Welli funciona en su consulta — paso a paso",
  "Sabrá exactamente cómo responder a sus pacientes",
  "Saldrá con su primer caso real agendado para esta semana",
];

const ExpressAliadosModule1Welcome = ({ onComplete }: Props) => {
  const { configured, setSessionData } = useSession();
  const [ready, setReady] = useState(configured);

  if (!ready) return <SessionSetupScreen onReady={() => setReady(true)} />;

  const handleStart = () => {
    setSessionData({ sessionStartTime: Date.now() });
    onComplete();
  };

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto text-center py-12 space-y-16">
        {/* Momento 1 — Saludo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex justify-center">
            <WelliLogoFull size="lg" />
          </div>
          <p className="text-welli-yellow font-bold text-sm tracking-widest">
            FINANCIA TU BIENESTAR
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-indigo-950">
            Bienvenido a Welli
          </h1>
        </motion.div>

        {/* Momento 2 — Promesa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-indigo-950 mb-8">
            En los próximos 25 minutos:
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {promises.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + i * 1.5, duration: 0.6 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-welli-yellow/15 border-2 border-welli-yellow/40 text-left"
              >
                <div className="w-10 h-10 rounded-full bg-welli-yellow flex items-center justify-center flex-shrink-0 font-display font-bold text-xl text-indigo-950">
                  {i + 1}
                </div>
                <p className="text-base md:text-lg text-indigo-950 font-medium">{p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Momento 3 — Arranque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="font-display text-3xl md:text-4xl font-bold text-indigo-950">
            ¿Empezamos?
          </p>
          <button
            onClick={handleStart}
            className="group inline-flex items-center gap-3 text-xl px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Sí, comencemos
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule1Welcome;
