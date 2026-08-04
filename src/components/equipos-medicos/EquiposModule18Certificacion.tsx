import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

interface Question {
  q: string;
  options: string[];
  correct: number;
  explain: string;
}

const questions: Question[] = [
  {
    q: "¿Hasta qué porcentaje del valor del equipo financia WELLI?",
    options: ["El 100%", "Hasta el 70%", "Hasta el 50%", "Depende del distribuidor"],
    correct: 1,
    explain: "WELLI apalanca hasta el 70% del costo total del equipo cotizado.",
  },
  {
    q: "¿Cuál es el monto máximo a financiar?",
    options: ["$100M COP", "$250M COP", "$350M COP", "Sin tope"],
    correct: 1,
    explain: "Máximo $250M COP, ideal para equipos de hasta ~$350M COP de costo total.",
  },
  {
    q: "¿A quién se le desembolsa el dinero?",
    options: [
      "Al médico, que luego te paga a ti",
      "Directamente al distribuidor contra la entrega del equipo",
      "A una fiducia",
      "Se reparte 50/50",
    ],
    correct: 1,
    explain: "El desembolso es directo al distribuidor: esa es tu principal garantía.",
  },
  {
    q: "¿Cuánto tarda el estudio de crédito completo con documentos completos?",
    options: ["24 horas", "48 a 72 horas", "1 semana", "15 días hábiles"],
    correct: 1,
    explain: "Preaprobado en minutos y estudio completo entre 48 y 72 horas.",
  },
  {
    q: "El médico dice 'la tasa es muy alta'. ¿Qué haces primero?",
    options: [
      "Ofreces un descuento sobre el equipo",
      "Le preguntas con qué la está comparando",
      "Le dices que es la más baja del mercado",
      "Cambias de tema",
    ],
    correct: 1,
    explain:
      "Primero indagas con la pregunta-llave; solo así sabes si es una excusa social o la razón real.",
  },
  {
    q: "¿Qué mide el punto de equilibrio del equipo?",
    options: [
      "Cuántos meses dura la garantía",
      "Cuántos procedimientos al mes se necesitan para cubrir la cuota",
      "La utilidad del distribuidor",
      "El cupo de crédito aprobado",
    ],
    correct: 1,
    explain:
      "Es el número mínimo de procedimientos mensuales que cubre la cuota. Es tu argumento más fuerte.",
  },
  {
    q: "En el plan de pagos preferencial, ¿qué comisión aplica a 60 días?",
    options: ["5%", "2%", "0%", "7%"],
    correct: 2,
    explain: "A 5 días la comisión es 5%, a 30 días 2% y a 60 días 0%.",
  },
  {
    q: "¿Quién asume el riesgo financiero del crédito?",
    options: ["El distribuidor", "El médico y el distribuidor", "WELLI", "El banco del cliente"],
    correct: 2,
    explain: "El riesgo lo asume WELLI. Tú vendes y cobras; nosotros gestionamos el crédito.",
  },
];

const checklist = [
  "Tengo mi usuario activo en el portal de aliados WELLI.",
  "Guardé en el celular el simulador de cuota y la calculadora de retorno.",
  "Sé hacer las 3 preguntas del semáforo de perfilamiento.",
  "Puedo explicar el proceso de 9 pasos sin leerlo.",
  "Tengo listo mi pitch de 30 segundos en la versión que más me suena.",
  "Identifiqué 5 cotizaciones abiertas para reactivar con WELLI esta semana.",
];

const EquiposModule18Certificacion = ({ onComplete }: Props) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<number[]>([]);

  const answered = Object.keys(answers).length;
  const correct = Object.entries(answers).filter(
    ([i, a]) => questions[Number(i)].correct === a,
  ).length;
  const finished = answered === questions.length;

  return (
    <EquiposShell
      phase={2}
      eyebrow="Certificación"
      icon={GraduationCap}
      title="Quiz final y checklist de arranque"
      subtitle="Ocho preguntas para confirmar que dominas el modelo, y un checklist para salir hoy mismo a vender con WELLI."
      onComplete={onComplete}
      ctaLabel="Terminar capacitación"
    >
      <div className="space-y-5">
        {questions.map((q, i) => {
          const selected = answers[i];
          const isAnswered = selected !== undefined;
          return (
            <motion.div
              key={q.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm"
            >
              <p className="font-bold text-indigo-950 mb-4">
                {i + 1}. {q.q}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {q.options.map((o, oi) => {
                  const isCorrect = oi === q.correct;
                  const isPicked = selected === oi;
                  let cls =
                    "bg-welli-yellow/5 border-welli-yellow/25 text-indigo-950/80 hover:bg-welli-yellow/15";
                  if (isAnswered && isCorrect)
                    cls = "bg-green-500/15 border-green-500/60 text-indigo-950 font-semibold";
                  else if (isAnswered && isPicked)
                    cls = "bg-red-500/10 border-red-500/50 text-indigo-950";
                  return (
                    <button
                      key={o}
                      disabled={isAnswered}
                      onClick={() => setAnswers((p) => ({ ...p, [i]: oi }))}
                      className={`text-left text-sm px-4 py-3 rounded-xl border transition-all flex items-start gap-2 ${cls}`}
                    >
                      {isAnswered && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isPicked && !isCorrect && (
                        <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      )}
                      <span>{o}</span>
                    </button>
                  );
                })}
              </div>
              {isAnswered && (
                <p className="text-sm text-indigo-950/75 mt-3 bg-welli-yellow/15 rounded-xl px-4 py-3">
                  {q.explain}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

      {finished && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl bg-indigo-950 p-8 text-white text-center shadow-xl"
        >
          <Trophy className="w-10 h-10 text-welli-yellow mx-auto mb-3" />
          <p className="text-3xl font-bold text-welli-yellow">
            {correct}/{questions.length}
          </p>
          <p className="text-white/85 mt-2">
            {correct >= 7
              ? "Excelente. Ya puedes presentar WELLI en campo con seguridad."
              : correct >= 5
                ? "Vas bien. Repasa las condiciones del crédito y el proceso operativo."
                : "Repasa la Fase 2 completa antes de tu primera visita con WELLI."}
          </p>
          <button
            onClick={() => setAnswers({})}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-welli-yellow underline"
          >
            <RotateCcw className="w-4 h-4" />
            Repetir quiz
          </button>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border-2 border-welli-yellow/50 bg-card p-6 md:p-8 shadow-sm"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-indigo-950">Checklist de arranque</h3>
          <span className="text-sm font-bold text-primary">
            {checked.length}/{checklist.length}
          </span>
        </div>
        <div className="space-y-3">
          {checklist.map((c, i) => {
            const active = checked.includes(i);
            return (
              <button
                key={c}
                onClick={() =>
                  setChecked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]))
                }
                className={`w-full text-left flex items-start gap-3 rounded-xl px-4 py-3 border transition-all ${
                  active
                    ? "bg-welli-yellow/25 border-welli-yellow"
                    : "bg-welli-yellow/5 border-welli-yellow/30 hover:bg-welli-yellow/15"
                }`}
              >
                <CheckCircle2
                  className={`w-5 h-5 shrink-0 mt-0.5 ${active ? "text-primary" : "text-indigo-950/25"}`}
                />
                <span className="text-sm text-indigo-950/90">{c}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </EquiposShell>
  );
};

export default EquiposModule18Certificacion;
