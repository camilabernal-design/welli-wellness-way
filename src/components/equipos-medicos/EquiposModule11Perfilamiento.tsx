import { useState } from "react";
import { motion } from "framer-motion";
import { Target, RotateCcw } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

type Score = "verde" | "amarillo" | "rojo";

interface Option {
  label: string;
  score: Score;
}

interface Question {
  id: string;
  title: string;
  question: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: "monto",
    title: "Filtro financiero y de liquidez",
    question: "¿Cuál es el valor total del equipo médico a cotizar?",
    options: [
      { label: "Entre $20M y $350M COP", score: "verde" },
      { label: "Menos de $20M COP", score: "amarillo" },
      { label: "Más de $350M COP", score: "rojo" },
    ],
  },
  {
    id: "credito",
    title: "Filtro de perfil crediticio",
    question:
      "Doctor, para asegurar la mejor tasa necesitamos revisar el comportamiento financiero. ¿Cómo está tu historial crediticio hoy?",
    options: [
      { label: "Excelente (créditos al día, nunca me atraso)", score: "verde" },
      { label: "Bueno (sin reportes negativos recientes)", score: "verde" },
      { label: "No tengo historial (nunca he tenido créditos)", score: "amarillo" },
      { label: "Regular / malo (reportes o embargos recientes)", score: "rojo" },
    ],
  },
  {
    id: "estabilidad",
    title: "Filtro de estabilidad",
    question: "¿Cuánto tiempo llevas ejerciendo tu especialidad u operando la clínica?",
    options: [
      { label: "Más de 2 años", score: "verde" },
      { label: "Entre 1 y 2 años", score: "amarillo" },
      { label: "Menos de 1 año (nueva)", score: "rojo" },
    ],
  },
];

const results: Record<Score, { title: string; text: string; classes: string }> = {
  verde: {
    title: "Verde · Radica hoy mismo",
    text: "Perfil apto. Simula la cuota y el retorno frente al médico y deja la solicitud radicada en esta misma visita. El preaprobado sale en minutos.",
    classes: "bg-green-500/10 border-green-500/50 text-green-700",
  },
  amarillo: {
    title: "Amarillo · Radica con soporte adicional",
    text: "Perfil viable pero con un punto a fortalecer. Radica igual, pero prepara desde ya soportes financieros sólidos (extractos, declaración de renta) o evalúa un codeudor o mayor cuota inicial.",
    classes: "bg-welli-yellow/20 border-welli-yellow text-indigo-950",
  },
  rojo: {
    title: "Rojo · Revisa antes de radicar",
    text: "Hay un factor que probablemente frene el estudio. No quemes la relación: consulta el caso con tu contacto WELLI antes de prometer algo o replantea el monto y el equipo a financiar.",
    classes: "bg-red-500/10 border-red-500/50 text-red-700",
  },
};

const EquiposModule11Perfilamiento = ({ onComplete }: Props) => {
  const [answers, setAnswers] = useState<Record<string, { score: Score; label: string }>>({});

  const complete = Object.keys(answers).length === questions.length;
  const values = Object.values(answers).map((a) => a.score);
  const final: Score = values.includes("rojo")
    ? "rojo"
    : values.includes("amarillo")
      ? "amarillo"
      : "verde";

  return (
    <EquiposShell
      phase={2}
      eyebrow="Perfilamiento"
      icon={Target}
      title="Semáforo de perfilamiento"
      subtitle="Tres preguntas que puedes hacer en la visita para saber, en menos de 3 minutos, si vale la pena radicar la solicitud."
      onComplete={onComplete}
    >
      <div className="space-y-6">
        {questions.map((q, i) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-3xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-950/60">
                {q.title}
              </p>
            </div>
            <p className="text-indigo-950 font-semibold mb-4">{q.question}</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {q.options.map((o) => {
                const isChosen = answers[q.id]?.label === o.label;
                return (
                  <button
                    key={o.label}
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: { score: o.score, label: o.label } }))
                    }
                    className={`text-left text-sm px-4 py-3 rounded-xl border transition-all ${
                      isChosen
                        ? "bg-welli-yellow/25 border-welli-yellow font-semibold text-indigo-950"
                        : "bg-welli-yellow/5 border-welli-yellow/25 text-indigo-950/80 hover:bg-welli-yellow/15"
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {complete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-3xl border-2 p-8 ${results[final].classes}`}
        >
          <h3 className="text-2xl font-bold mb-2">{results[final].title}</h3>
          <p className="text-sm md:text-base">{results[final].text}</p>
          <button
            onClick={() => setAnswers({})}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline"
          >
            <RotateCcw className="w-4 h-4" />
            Perfilar otro médico
          </button>
        </motion.div>
      )}

      <div className="rounded-2xl bg-indigo-950 p-6 text-white">
        <p className="text-sm text-white/85">
          El semáforo no reemplaza el estudio de crédito: es tu filtro comercial para priorizar
          esfuerzo. La decisión final siempre la toma el comité de crédito de WELLI.
        </p>
      </div>
    </EquiposShell>
  );
};

export default EquiposModule11Perfilamiento;
