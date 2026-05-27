import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

type Profile = "pro-farmaco" | "neutro" | "esceptico" | "explorador";

const Q = [
  {
    title: "¿Qué opciones usa hoy para manejar obesidad?",
    options: [
      "Solo nutrición y ejercicio",
      "Manejo médico (medicamentos)",
      "Cirugía bariátrica",
      "Combinación según el caso",
    ],
  },
  {
    title: "¿Ha trabajado con Wegovy, Ozempic, Saxenda?",
    options: [
      "Los uso regularmente",
      "Los conozco pero no los receto mucho",
      "Tengo dudas o reservas",
      "Es nuevo para mí",
    ],
  },
  {
    title: "¿Cómo ha sido la respuesta de sus pacientes?",
    options: [
      "Muy buena, alta adherencia",
      "Mixta, depende del paciente",
      "Difícil, abandonan rápido",
      "No tengo suficiente experiencia",
    ],
  },
];

function profileOf(a2: string, a3: string): Profile {
  if (a2 === "Es nuevo para mí") return "explorador";
  if (
    a2 === "Los conozco pero no los receto mucho" ||
    a2 === "Tengo dudas o reservas"
  )
    return "esceptico";
  if (a2 === "Los uso regularmente" && a3 === "Muy buena, alta adherencia")
    return "pro-farmaco";
  return "neutro";
}

const LABELS: Record<Profile, { title: string; desc: string }> = {
  "pro-farmaco": {
    title: "PRO-fármaco",
    desc: "Maneja con confianza el componente farmacológico. Hoy refinamos cómo lo articula con el paquete completo.",
  },
  neutro: {
    title: "NEUTRO",
    desc: "Tiene experiencia mixta. Hoy ajustamos cómo presentar el manejo farmacológico para que se vea como parte del programa, no como añadido.",
  },
  esceptico: {
    title: "ESCÉPTICO",
    desc: "Tiene reservas legítimas. Hoy enfocamos cómo posicionar el medicamento como herramienta de adherencia, no como protagonista.",
  },
  explorador: {
    title: "EXPLORADOR",
    desc: "Está empezando. Hoy le damos el marco completo para integrarlo desde el día uno.",
  },
};

export default function DiagnosticoIndagacion({
  onComplete,
}: {
  onComplete: (p: Profile) => void;
}) {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<string[]>([]);

  const pick = (o: string) => {
    const next = [...ans, o];
    setAns(next);
    if (step < Q.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      const p = profileOf(next[1], next[2]);
      setTimeout(() => onComplete(p), 400);
    }
  };

  if (ans.length === Q.length) {
    const p = profileOf(ans[1], ans[2]);
    const meta = LABELS[p];
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8"
      >
        <HighlightBox className="bg-secondary/10 border-secondary">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Su perfil
          </p>
          <p className="text-3xl font-bold text-indigo-950 mt-2">{meta.title}</p>
          <p className="text-lg text-indigo-950 mt-4 leading-relaxed">{meta.desc}</p>
          <p className="text-sm text-indigo-950/70 mt-4 italic">
            Hoy ajustamos el resto de la sesión a este perfil.
          </p>
        </HighlightBox>
      </motion.div>
    );
  }

  const cur = Q[step];
  return (
    <div className="mt-8">
      <p className="text-sm text-slate-500 mb-2">
        Pregunta {step + 1} de {Q.length}
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <SoftBox>
            <p className="text-2xl font-semibold text-indigo-950">{cur.title}</p>
            <div className="mt-6 grid md:grid-cols-2 gap-3">
              {cur.options.map((o) => (
                <motion.button
                  key={o}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => pick(o)}
                  className="text-left px-5 py-4 rounded-xl border-2 border-slate-300 bg-white text-lg text-indigo-950 hover:border-welli-yellow"
                >
                  {o}
                </motion.button>
              ))}
            </div>
          </SoftBox>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
