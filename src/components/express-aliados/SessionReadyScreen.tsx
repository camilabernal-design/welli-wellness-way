import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Monitor } from "lucide-react";

interface Props {
  onStart: () => void;
  onBack: () => void;
}

const checklistItems = [
  "Está en la videollamada con el aliado",
  "Cerró otras pestañas y aplicaciones",
  "Está listo para compartir pantalla",
];

const SessionReadyScreen = ({ onStart, onBack }: Props) => {
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const allChecked = checked.every(Boolean);

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12 flex items-center">
      <div className="max-w-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm text-center space-y-8"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950">
            Todo listo para empezar
          </h1>

          <p className="text-sm text-slate-600">Antes de hacer click, verifique:</p>

          <div className="space-y-3 text-left">
            {checklistItems.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => toggle(i)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                  checked[i] ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 ${
                  checked[i] ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300'
                }`}>
                  {checked[i] && <span className="text-white text-sm font-bold">✓</span>}
                </div>
                <span className={`text-sm font-medium ${checked[i] ? 'text-emerald-900' : 'text-indigo-950'}`}>
                  {item}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={onStart}
            disabled={!allChecked}
            className={`w-full inline-flex items-center justify-center gap-3 text-base px-6 py-4 rounded-xl font-bold transition-all ${
              allChecked
                ? 'bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 shadow-lg hover:shadow-xl'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Monitor className="w-5 h-5" />
            Compartir pantalla y empezar
          </button>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a editar configuración
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SessionReadyScreen;
