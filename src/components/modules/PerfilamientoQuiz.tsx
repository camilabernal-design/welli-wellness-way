import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, RotateCcw, Gamepad2, Trophy } from "lucide-react";

type Verdict = "aprueba" | "rechaza";

interface Case {
  id: string;
  criterio: string;
  paciente: string;
  answer: Verdict;
  reveal: string;
}

const CASES: Case[] = [
  {
    id: "edad",
    criterio: "Criterio 1 · Edad (18 a 65 años)",
    paciente:
      "Paciente de 17 años. Lleva 1 año trabajando, contrato estable y buen sueldo. Quiere financiar su tratamiento.",
    answer: "rechaza",
    reveal:
      "Se rechaza. La edad es un filtro de entrada: fuera de 18–65 años no se sigue evaluando nada más, por bueno que sea el perfil.",
  },
  {
    id: "monto",
    criterio: "Criterio 2 · Monto ($300.000 a $25.000.000)",
    paciente:
      "Paciente de 42 años, ingresos estables, sin reportes. El tratamiento cuesta $32.000.000 y quiere financiarlo todo con Welli.",
    answer: "rechaza",
    reveal:
      "Se rechaza por monto. Welli financia entre $300.000 y $25.000.000. Tip: ajusta el plan o combina con otro medio de pago para quedar dentro del rango.",
  },
  {
    id: "tarjeta",
    criterio: "Criterio 3 · Capacidad de pago",
    paciente:
      "Juanito, 35 años, tiene una tarjeta de crédito activa que usa todos los meses y la paga al día.",
    answer: "aprueba",
    reveal:
      "Tener deuda no es lo mismo que no tener capacidad de pago. Lo que se mira es el ingreso disponible después de sus obligaciones frente a la cuota nueva. Una tarjeta activa, por sí sola, no descalifica.",
  },
  {
    id: "reporte",
    criterio: "Reportes en centrales de riesgo",
    paciente:
      "Juanito se entera en medio del estudio de que está reportado por $300 pesos de una portabilidad de celular.",
    answer: "aprueba",
    reveal:
      "No todos los reportes son causal de rechazo. Un reporte por un valor insignificante o por portabilidad normalmente no frena el estudio. Importa el tipo y el tamaño del reporte.",
  },
  {
    id: "capacidad",
    criterio: "Criterio 3 · Capacidad de pago",
    paciente:
      "Paciente de 50 años, al día en todo, pero ya tiene 4 créditos activos y sus cuotas se llevan casi todo su ingreso mensual.",
    answer: "rechaza",
    reveal:
      "Aquí sí hay riesgo alto de rechazo: no queda margen para asumir una cuota nueva. No es el historial, es el ingreso disponible.",
  },
];

const PerfilamientoQuiz = () => {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<Verdict | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = CASES[index];
  const isCorrect = picked === current?.answer;

  const choose = (v: Verdict) => {
    if (picked) return;
    setPicked(v);
    if (v === CASES[index].answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index === CASES.length - 1) setDone(true);
    else {
      setIndex((i) => i + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-8 rounded-2xl border-2 border-welli-yellow/40 bg-card p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-welli-yellow/30">
          <Gamepad2 className="w-5 h-5 text-indigo-950" />
        </span>
        <div>
          <h3 className="font-bold text-lg text-indigo-950">¿Apruebas o rechazas?</h3>
          <p className="text-sm text-indigo-950/70">
            Clínica de perfilamiento: 5 casos reales para entrenar tu ojo antes de radicar.
          </p>
        </div>
      </div>

      {!done ? (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-950/60">
              {current.criterio}
            </p>
            <span className="text-xs font-semibold text-indigo-950/60">
              Caso {index + 1} de {CASES.length}
            </span>
          </div>

          <div className="rounded-xl bg-welli-yellow/10 border border-welli-yellow/30 p-5 mb-5">
            <p className="text-indigo-950">{current.paciente}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {(["aprueba", "rechaza"] as Verdict[]).map((v) => {
              const chosen = picked === v;
              const correct = current.answer === v;
              const label =
                v === "aprueba"
                  ? "Alta probabilidad de aprobación"
                  : "Baja probabilidad de aprobación";
              const Icon = v === "aprueba" ? Check : X;
              return (
                <button
                  key={v}
                  onClick={() => choose(v)}
                  disabled={picked !== null}
                  className={`rounded-xl border-2 px-4 py-4 font-bold transition-all flex items-center justify-center gap-2 ${
                    picked === null
                      ? "border-slate-300 bg-white text-indigo-950 hover:border-welli-yellow"
                      : correct
                        ? "border-emerald-500 bg-emerald-50 text-indigo-950"
                        : chosen
                          ? "border-red-400 bg-red-50 text-indigo-950"
                          : "border-slate-200 bg-white text-indigo-950/50"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      picked === null
                        ? v === "aprueba"
                          ? "text-emerald-500"
                          : "text-red-500"
                        : correct
                          ? "text-emerald-600"
                          : chosen
                            ? "text-red-500"
                            : "text-slate-300"
                    }`}
                  />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {picked && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5"
              >
                <div
                  className={`rounded-xl p-5 border-2 ${
                    isCorrect
                      ? "bg-emerald-50 border-emerald-300"
                      : "bg-welli-yellow/20 border-welli-yellow"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 font-bold text-indigo-950">
                    {isCorrect ? (
                      <Check className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                    {isCorrect ? "¡Correcto!" : "Ojo con este"}
                  </div>
                  <p className="text-sm text-indigo-950 leading-relaxed">{current.reveal}</p>
                </div>
                <button
                  onClick={next}
                  className="mt-4 bg-welli-yellow text-indigo-950 font-semibold px-5 py-2.5 rounded-lg"
                >
                  {index === CASES.length - 1 ? "Ver resultado" : "Siguiente caso"} →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 rounded-xl bg-welli-yellow/20 border-2 border-welli-yellow p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="w-6 h-6 text-indigo-950" />
            <p className="text-xl font-bold text-indigo-950">
              {score} de {CASES.length} casos acertados
            </p>
          </div>
          <ul className="text-sm text-indigo-950 space-y-1.5 mb-4">
            <li>• Edad: 18 a 65 años. Fuera de rango, no se estudia.</li>
            <li>• Monto: entre $300.000 y $25.000.000 COP.</li>
            <li>• Capacidad de pago: importa el ingreso disponible, no si tiene deudas.</li>
            <li>• Un reporte en centrales no es automáticamente un “no”.</li>
          </ul>
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-950 underline"
          >
            <RotateCcw className="w-4 h-4" />
            Jugar de nuevo
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PerfilamientoQuiz;
