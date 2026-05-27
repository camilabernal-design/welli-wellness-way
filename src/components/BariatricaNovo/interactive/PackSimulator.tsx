import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

type Patient = {
  name: string;
  age: number;
  details: string[];
  correct: 1 | 2 | 3;
  whyCorrect: string;
  whyOthers: { pack: 1 | 2 | 3; why: string }[];
};

const PATIENTS: Patient[] = [
  {
    name: "María, 52 años",
    age: 52,
    details: [
      "IMC 38",
      "Hipertensión + dislipidemia",
      "Hija de paciente diabético",
      "Pidió cita por presión familiar",
      "Sin tratamientos formales previos",
    ],
    correct: 3,
    whyCorrect:
      "María tiene comorbilidades y motivación familiar. El Pack 3 le da seguimiento mes a mes y aborda salud integral, no solo peso.",
    whyOthers: [
      { pack: 1, why: "Sería invasivo de más para su perfil clínico." },
      { pack: 2, why: "Se quedaría corto frente a sus comorbilidades." },
    ],
  },
  {
    name: "Andrés, 38 años",
    age: 38,
    details: [
      "IMC 42",
      "Sin comorbilidades graves",
      "Intentos previos sin éxito",
      "Busca cambio sostenido",
    ],
    correct: 1,
    whyCorrect:
      "IMC 42 lo hace candidato quirúrgico claro, con post-quirúrgico farmacológico para asegurar el resultado.",
    whyOthers: [
      { pack: 2, why: "Insuficiente para su nivel de obesidad." },
      { pack: 3, why: "Le falta el componente quirúrgico que su caso necesita." },
    ],
  },
  {
    name: "Laura, 34 años",
    age: 34,
    details: ["IMC 32", "Sin comorbilidades", "Etapa temprana", "Activa físicamente"],
    correct: 2,
    whyCorrect:
      "Etapa temprana sin comorbilidades. El Pack 2 evita exposición innecesaria y aborda lo justo.",
    whyOthers: [
      { pack: 1, why: "Cirugía está fuera de criterio para este IMC." },
      { pack: 3, why: "Sobre-recomendaría seguimiento que su caso no requiere." },
    ],
  },
  {
    name: "Roberto, 45 años",
    age: 45,
    details: ["IMC 35", "Prediabetes", "Sedentario", "Estrés laboral alto"],
    correct: 3,
    whyCorrect:
      "Prediabetes hace ideal el Pack 3 con seguimiento metabólico estructurado mes a mes.",
    whyOthers: [
      { pack: 1, why: "No es candidato quirúrgico todavía." },
      {
        pack: 2,
        why: "Válido como mínimo, pero pierde el seguimiento metabólico que evita progresión a diabetes.",
      },
    ],
  },
];

export default function PackSimulator({ onComplete }: { onComplete: () => void }) {
  const [idx, setIdx] = useState(0);
  const [choice, setChoice] = useState<1 | 2 | 3 | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const p = PATIENTS[idx];

  const pick = (n: 1 | 2 | 3) => {
    setChoice(n);
    if (n === p.correct) setCorrectCount((c) => c + 1);
  };

  const advance = () => {
    if (idx === PATIENTS.length - 1) {
      setFinished(true);
      onComplete();
    } else {
      setIdx(idx + 1);
      setChoice(null);
    }
  };

  if (finished) {
    return (
      <HighlightBox>
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-950">
          Resumen
        </p>
        <p className="text-3xl font-bold text-indigo-950 mt-3">
          Acertó {correctCount} de {PATIENTS.length}
        </p>
        <p className="text-lg text-indigo-950 mt-4 leading-relaxed">
          Los packs no son fórmula — son guía. Su criterio clínico siempre decide.
        </p>
      </HighlightBox>
    );
  }

  const correct = choice === p.correct;

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-500">
        Paciente {idx + 1} de {PATIENTS.length}
      </p>
      <SoftBox>
        <p className="text-2xl font-bold text-indigo-950">{p.name}</p>
        <ul className="mt-4 space-y-1 text-lg text-indigo-950">
          {p.details.map((d) => (
            <li key={d}>· {d}</li>
          ))}
        </ul>
      </SoftBox>

      {!choice && (
        <div>
          <p className="text-xl font-semibold text-indigo-950 mb-3">
            ¿Cuál pack le recomienda?
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { n: 1, label: "Pack 1: Quirúrgico" },
              { n: 2, label: "Pack 2: Preventivo" },
              { n: 3, label: "Pack 3: Metabólico Integral" },
            ].map((o) => (
              <motion.button
                key={o.n}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => pick(o.n as 1 | 2 | 3)}
                className="px-5 py-4 rounded-xl border-2 border-slate-300 bg-white text-indigo-950 font-semibold hover:border-welli-yellow"
              >
                {o.label}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {choice && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={
              correct
                ? "rounded-2xl border-2 border-accent bg-accent/10 p-6"
                : "rounded-2xl border-2 border-welli-coral bg-welli-coral/10 p-6"
            }
          >
            <div className="flex items-center gap-2 text-indigo-950 font-semibold">
              {correct ? (
                <Check className="h-5 w-5 text-accent" />
              ) : (
                <X className="h-5 w-5 text-welli-coral" />
              )}
              {correct
                ? `Buena elección — Pack ${p.correct}.`
                : `El más recomendado era Pack ${p.correct}.`}
            </div>
            <p className="text-lg text-indigo-950 mt-3 leading-relaxed">
              {p.whyCorrect}
            </p>
            <ul className="mt-3 space-y-1 text-base text-indigo-950/80">
              {p.whyOthers.map((w) => (
                <li key={w.pack}>· Pack {w.pack}: {w.why}</li>
              ))}
            </ul>
            <button
              onClick={advance}
              className="mt-5 bg-welli-yellow text-indigo-950 font-semibold px-5 py-2.5 rounded-lg"
            >
              {idx === PATIENTS.length - 1 ? "Ver resumen" : "Siguiente paciente"} →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
