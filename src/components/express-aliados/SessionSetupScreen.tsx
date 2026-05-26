import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Sparkles } from "lucide-react";
import { useSession, Archetype } from "./SessionContext";

interface Props { onReady: () => void; }

const archetypes: { id: Archetype; label: string; hint: string }[] = [
  { id: 'caidos', label: 'Clínica con presupuestos caídos', hint: 'Dolor financiero claro: agenda con espacios, pacientes que se fueron sin tratarse.' },
  { id: 'premium', label: 'Clínica premium sin dolor visible', hint: 'Reconocida, dice "no necesito esto". Dolor social, paciente no pide.' },
  { id: 'sin-aliados', label: 'Clínica sin aliados financieros previos', hint: 'Primera exposición al financiamiento. Curiosidad sin dolor articulado.' },
];

const SessionSetupScreen = ({ onReady }: Props) => {
  const { setSessionData, allyName, allySpecialty, archetype } = useSession();
  const [name, setName] = useState(allyName);
  const [specialty, setSpecialty] = useState(allySpecialty);
  const [profile, setProfile] = useState<Archetype | null>(archetype);

  const canStart = name.trim() && specialty.trim() && profile;

  const handleStart = () => {
    if (!canStart) return;
    setSessionData({
      allyName: name.trim(),
      allySpecialty: specialty.trim(),
      archetype: profile,
      configured: true,
    });
    onReady();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-welli-yellow/10 via-welli-yellow/5 to-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/30 border border-welli-yellow/50 mb-4">
            <Settings className="w-4 h-4 text-indigo-950" />
            <span className="text-xs font-bold text-indigo-950">Configuración de la sesión</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Antes de comenzar
          </h1>
          <p className="text-indigo-800">
            Completa estos datos contigo y con el aliado para personalizar el contenido.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card rounded-2xl border-2 border-welli-yellow/40 p-6 md:p-8 shadow-lg space-y-6"
        >
          <div>
            <label className="block text-sm font-bold text-indigo-950 mb-2">Nombre del aliado</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dra. María Pérez"
              className="w-full px-4 py-3 rounded-xl border-2 border-welli-yellow/30 bg-white text-indigo-950 focus:outline-none focus:border-welli-yellow text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-indigo-950 mb-2">Especialidad</label>
            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              placeholder="Odontología estética"
              className="w-full px-4 py-3 rounded-xl border-2 border-welli-yellow/30 bg-white text-indigo-950 focus:outline-none focus:border-welli-yellow text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-indigo-950 mb-3">
              Perfil identificado durante la indagación inicial
            </label>
            <div className="space-y-2">
              {archetypes.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setProfile(a.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    profile === a.id
                      ? 'border-welli-yellow bg-welli-yellow/20'
                      : 'border-welli-yellow/20 bg-white hover:border-welli-yellow/40'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      profile === a.id ? 'border-welli-yellow bg-welli-yellow' : 'border-welli-yellow/40'
                    }`}>
                      {profile === a.id && <div className="w-2 h-2 rounded-full bg-indigo-950" />}
                    </div>
                    <div>
                      <p className="font-bold text-indigo-950 text-sm">{a.label}</p>
                      <p className="text-xs text-indigo-800 mt-1">{a.hint}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleStart}
            disabled={!canStart}
            className={`w-full inline-flex items-center justify-center gap-3 text-base px-6 py-4 rounded-xl font-bold transition-all ${
              canStart
                ? 'bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 shadow-lg hover:shadow-xl'
                : 'bg-welli-yellow/30 text-indigo-950/50 cursor-not-allowed'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Iniciar sesión
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SessionSetupScreen;
