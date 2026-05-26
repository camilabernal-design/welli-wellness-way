import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { useSession, Archetype } from "./SessionContext";

interface Props { onReady: () => void; }

const archetypes: { id: Archetype; label: string; hint: string }[] = [
  {
    id: 'caidos',
    label: 'Clínica con presupuestos caídos',
    hint: 'Mencionó pacientes que no terminan el tratamiento o cartera con valoraciones no cobradas.',
  },
  {
    id: 'premium',
    label: 'Clínica premium',
    hint: 'Reconocida en su nicho. Dice "mi consulta no tiene este problema". Pacientes admiran pero no preguntan por financiación.',
  },
  {
    id: 'sin-aliados',
    label: 'Clínica sin aliados financieros',
    hint: 'No tiene experiencia previa con financiación. Llegó por evento o referido.',
  },
];

const SessionPreparationScreen = ({ onReady }: Props) => {
  const { setSessionData, allyName, allySpecialty, archetype } = useSession();
  const [name, setName] = useState(allyName);
  const [specialty, setSpecialty] = useState(allySpecialty);

  const canStart = name.trim() && specialty.trim();

  const handleStart = () => {
    if (!canStart) return;
    setSessionData({
      allyName: name.trim(),
      allySpecialty: specialty.trim(),
      configured: true,
    });
    onReady();
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header privado destacado */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border-2 border-red-400 bg-red-50 p-5 mb-8 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <Lock className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-black tracking-widest text-red-700 mb-1">
                PREPARACIÓN DE LA SESIÓN — NO COMPARTIR
              </p>
              <p className="text-sm text-red-900">
                Configura los datos antes de iniciar la videollamada con el aliado.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6"
        >
          <div>
            <label className="block text-sm font-bold text-indigo-950 mb-2">Nombre del aliado</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dra. María Pérez"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-indigo-950 focus:outline-none focus:border-indigo-400 text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-indigo-950 mb-2">Especialidad</label>
            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              placeholder="Odontología estética"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-indigo-950 focus:outline-none focus:border-indigo-400 text-base"
            />
          </div>


          <button
            onClick={handleStart}
            disabled={!canStart}
            className={`w-full inline-flex items-center justify-center gap-3 text-base px-6 py-4 rounded-xl font-bold transition-all ${
              canStart
                ? 'bg-indigo-950 text-white hover:bg-indigo-900 shadow-md'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            ✓ Configuración lista — Continuar
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-slate-500 text-center italic">
            Esta es una pantalla privada. La pantalla siguiente le permitirá verificar que está listo
            antes de compartir pantalla.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SessionPreparationScreen;
