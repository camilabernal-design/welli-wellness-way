import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

type Option = { label: string; correct: boolean; why: string };
type Conv = { label: string; patient: string; options: Option[] };

const CONVS: Conv[] = [
  {
    label: "1. Lo voy a pensar",
    patient: "Doctor, déjeme pensarlo y le aviso.",
    options: [
      {
        label: "Listo doctora, cuando lo decida vuelve.",
        correct: false,
        why: "Pierde al paciente. No exploró qué hay detrás del 'pensar'.",
      },
      {
        label:
          "Antes de que se vaya: ¿hay algo del plan con lo que no esté del todo de acuerdo?",
        correct: true,
        why: "Pregunta-llave que abre la verdadera razón sin presionar.",
      },
      {
        label: "Mire que esto no se piensa, hay que decidir ya.",
        correct: false,
        why: "Presión que cierra al paciente y desgasta su autoridad.",
      },
    ],
  },
  {
    label: "2. No tengo dinero",
    patient: "Doctor, la verdad es que ahora no tengo el dinero para empezar.",
    options: [
      {
        label: "Entiendo, cuando lo tenga vuelva.",
        correct: false,
        why: "Pierde el paciente. La realidad rara vez cambia sin un puente concreto.",
      },
      {
        label: "Aquí trabajamos con Welli, ¿quiere ver si aplica?",
        correct: false,
        why: "Válida pero genérica — no abre la conversación con una cifra concreta.",
      },
      {
        label:
          "Le entiendo. Una pregunta — si pudiera hacerlo en cuota fija de $150 mil al mes, ¿lo empezaría hoy?",
        correct: true,
        why: "Convierte el obstáculo en hipótesis concreta. La cifra hace real la posibilidad.",
      },
    ],
  },
  {
    label: "3. Hablar con mi esposo",
    patient: "Voy a hablarlo con mi esposo y le aviso.",
    options: [
      {
        label: "Perfecto, esperamos su llamada.",
        correct: false,
        why: "Se pierde el momento. Pocos pacientes vuelven con el dato concreto.",
      },
      {
        label:
          "Por supuesto. Si su esposo está de acuerdo mañana, ¿usted ya está decidida a empezar?",
        correct: true,
        why: "Distingue si la objeción es real o social, sin presionar.",
      },
      {
        label: "¿Por qué no decide usted sola?",
        correct: false,
        why: "Confronta la dinámica familiar — desgasta confianza.",
      },
    ],
  },
  {
    label: "4. Ozempic más barato",
    patient: "Vi Ozempic más barato en otro lugar.",
    options: [
      {
        label: "Aquí cobramos lo justo, allá no sé qué venden.",
        correct: false,
        why: "Defensivo. No diferencia el programa del producto suelto.",
      },
      {
        label:
          "¿Le ofrecieron también seguimiento médico mensual, ajuste de dosis y acompañamiento?",
        correct: true,
        why: "Distingue medicamento suelto de programa integral, sin descalificar.",
      },
      {
        label: "Si quiere se lo igualo en precio.",
        correct: false,
        why: "Convierte el programa en commodity. Pierde el valor.",
      },
    ],
  },
  {
    label: "5. Solo el medicamento",
    patient: "Doctor, ¿no me puede recetar solo el medicamento?",
    options: [
      {
        label: "Sí claro, le receto solo eso.",
        correct: false,
        why: "60% abandona a los 3 meses sin seguimiento — el paciente pierde y la clínica también.",
      },
      {
        label: "No, sin programa no le recetamos nada.",
        correct: false,
        why: "Cierra la conversación sin explicar el riesgo clínico real.",
      },
      {
        label:
          "Si después de 3 meses no ve resultados esperados, ¿qué haría? El programa completo es lo que asegura que el medicamento funcione.",
        correct: true,
        why: "Hace ver el riesgo desde el paciente, no como imposición.",
      },
    ],
  },
];

export default function ConversationsQuiz({ onComplete }: { onComplete: () => void }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const c = CONVS[i];

  const next = () => {
    if (i === CONVS.length - 1) {
      onComplete();
    } else {
      setI(i + 1);
      setPicked(null);
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-500">
        Conversación {i + 1} de {CONVS.length}: {c.label}
      </p>
      <SoftBox>
        <p className="text-sm text-slate-500 uppercase tracking-wider">
          Su paciente dice
        </p>
        <p className="text-2xl italic text-indigo-950 mt-3">"{c.patient}"</p>
      </SoftBox>

      <p className="text-xl font-semibold text-indigo-950">¿Qué le responde?</p>
      <div className="space-y-3">
        {c.options.map((o, idx) => {
          const isPicked = picked === idx;
          const reveal = picked !== null;
          return (
            <motion.button
              key={idx}
              whileHover={!reveal ? { scale: 1.01 } : {}}
              onClick={() => picked === null && setPicked(idx)}
              disabled={reveal}
              className={`w-full text-left rounded-xl border-2 p-5 transition-all ${
                reveal
                  ? o.correct
                    ? "border-accent bg-accent/10"
                    : isPicked
                      ? "border-welli-coral bg-welli-coral/10"
                      : "border-slate-200 bg-white opacity-60"
                  : "border-slate-300 bg-white hover:border-welli-yellow"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="font-bold text-indigo-950">
                  {String.fromCharCode(65 + idx)})
                </span>
                <div className="flex-1">
                  <p className="text-indigo-950">{o.label}</p>
                  {reveal && (
                    <p className="text-sm text-indigo-950/80 mt-2 italic">
                      {o.correct ? "Mejor respuesta — " : "Es válida pero… "}
                      {o.why}
                    </p>
                  )}
                </div>
                {reveal && o.correct && <Check className="h-5 w-5 text-accent" />}
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {picked !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <button
              onClick={next}
              className="bg-welli-yellow text-indigo-950 font-semibold px-5 py-2.5 rounded-lg"
            >
              {i === CONVS.length - 1 ? "Terminar" : "Siguiente conversación"} →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
