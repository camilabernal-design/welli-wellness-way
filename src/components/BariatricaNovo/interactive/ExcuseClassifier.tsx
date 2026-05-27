import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

type Phrase = {
  text: string;
  type: "social" | "real";
  feedback: string;
  llave?: string;
};

const PHRASES: Phrase[] = [
  {
    text: "Lo voy a pensar",
    type: "social",
    feedback: "Excusa social clásica. La razón real suele ser plata o falta de convicción.",
    llave:
      "¿Hay algo del plan con lo que no esté del todo de acuerdo? Quiero entenderlo antes de que se vaya.",
  },
  {
    text: "No tengo la plata para empezar este mes",
    type: "real",
    feedback: "Razón real específica. El paciente le está diciendo el obstáculo directamente.",
    llave: "Si pudiera pagarlo en cuota fija mensual de $X, ¿lo empezaría hoy?",
  },
  {
    text: "Voy a hablarlo con mi esposo",
    type: "social",
    feedback: "Excusa social en el 80% de los casos.",
    llave: "Por supuesto. Si su esposo está de acuerdo mañana, ¿usted ya está decidida a empezar?",
  },
  {
    text: "Mi médico de cabecera me dijo que primero intente solo con dieta",
    type: "real",
    feedback: "Razón real clínica. Hay que abordar el motivo, no ofrecer financiación.",
  },
  {
    text: "Está muy caro",
    type: "social",
    feedback: "Casi siempre excusa social. La razón real es 'no veo el valor'.",
    llave: "¿Qué tendría que incluir el tratamiento para que la inversión tenga sentido para usted?",
  },
  {
    text: "Tengo miedo de los efectos secundarios del medicamento",
    type: "real",
    feedback: "Razón real. Necesita información clínica, no argumento comercial.",
  },
  {
    text: "Vuelvo el mes que viene cuando tenga tiempo",
    type: "social",
    feedback: "Excusa social. 'Tiempo' rara vez es el verdadero obstáculo.",
    llave: "¿Qué tendría que pasar en este mes para que el regreso sea distinto a hoy?",
  },
  {
    text: "Estoy lactando, mi pediatra dijo que esperara",
    type: "real",
    feedback: "Razón real clínica clara. Agendar seguimiento futuro, no insistir hoy.",
  },
];

function shuffle<T>(a: T[]) {
  const c = [...a];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}

export default function ExcuseClassifier({ onComplete }: { onComplete: () => void }) {
  const list = useMemo(() => shuffle(PHRASES), []);
  const [i, setI] = useState(0);
  const [choice, setChoice] = useState<"social" | "real" | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const p = list[i];

  const pick = (c: "social" | "real") => {
    setChoice(c);
    if (c === p.type) setScore((s) => s + 1);
  };

  const next = () => {
    if (i === list.length - 1) {
      setDone(true);
      onComplete();
    } else {
      setI(i + 1);
      setChoice(null);
    }
  };

  if (done)
    return (
      <HighlightBox>
        <p className="text-3xl font-bold text-indigo-950">
          Acertó {score} de {list.length}
        </p>
        <p className="text-lg text-indigo-950 mt-3">
          La clave no es el porcentaje — es que ahora tiene un marco para preguntar
          siempre antes de aceptar el primer "no".
        </p>
      </HighlightBox>
    );

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-500">
        Frase {i + 1} de {list.length}
      </p>
      <SoftBox>
        <p className="text-sm text-slate-500 uppercase tracking-wider">
          Lo dijo el paciente
        </p>
        <p className="text-2xl italic text-indigo-950 mt-3">"{p.text}"</p>
      </SoftBox>

      {!choice ? (
        <div>
          <p className="text-xl font-semibold text-indigo-950 mb-3">
            ¿Excusa social o razón real?
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => pick("social")}
              className="px-5 py-4 rounded-xl border-2 border-slate-300 bg-white text-indigo-950 font-semibold hover:border-welli-yellow"
            >
              EXCUSA SOCIAL
            </button>
            <button
              onClick={() => pick("real")}
              className="px-5 py-4 rounded-xl border-2 border-slate-300 bg-white text-indigo-950 font-semibold hover:border-welli-yellow"
            >
              RAZÓN REAL
            </button>
          </div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div
              className={`rounded-2xl border-2 p-6 ${
                choice === p.type
                  ? "border-accent bg-accent/10"
                  : "border-welli-coral bg-welli-coral/10"
              }`}
            >
              <p className="font-semibold text-indigo-950">
                {choice === p.type ? "Correcto." : `Era ${p.type === "social" ? "EXCUSA SOCIAL" : "RAZÓN REAL"}.`}
              </p>
              <p className="text-lg text-indigo-950 mt-3">{p.feedback}</p>
              {p.llave && (
                <div className="mt-4 p-3 rounded-lg bg-white border border-welli-yellow/40">
                  <p className="text-sm font-semibold text-indigo-950 uppercase tracking-wider">
                    Pregunta-llave
                  </p>
                  <p className="text-indigo-950 italic mt-1">"{p.llave}"</p>
                </div>
              )}
              <button
                onClick={next}
                className="mt-5 bg-welli-yellow text-indigo-950 font-semibold px-5 py-2.5 rounded-lg"
              >
                {i === list.length - 1 ? "Ver puntaje" : "Siguiente frase"} →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
