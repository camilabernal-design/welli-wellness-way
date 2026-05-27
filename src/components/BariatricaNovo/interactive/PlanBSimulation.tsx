import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, AlertTriangle, RefreshCw } from "lucide-react";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

type Outcome = "good" | "bad" | "warn";
type Option = { label: string; outcome: Outcome; feedback: string };
type Moment = { title: string; situation: string; options: Option[] };

const MOMENTS: Moment[] = [
  {
    title: "Momento 1 — Apertura",
    situation:
      "Acaba de recibir la notificación: el Welli Check de su paciente NO se aprobó. El paciente está sentado frente a usted, esperando su respuesta.",
    options: [
      {
        label: "Ay, le negaron el crédito, no sé por qué.",
        outcome: "bad",
        feedback:
          "El paciente se cierra. Activó vergüenza y siente que falló él. La consulta termina mal.",
      },
      {
        label: "Hubo un tema con el sistema, no fue posible.",
        outcome: "warn",
        feedback:
          "El paciente queda confundido. Suena evasivo y poco profesional. Se va con dudas.",
      },
      {
        label: "Bueno, no se ajustó en esta primera consulta.",
        outcome: "good",
        feedback:
          "Tono profesional, sin culpa, sin drama. El paciente se queda abierto a escuchar el Plan B.",
      },
    ],
  },
  {
    title: "Momento 2 — Plan B",
    situation: "El paciente lo mira esperando una salida.",
    options: [
      {
        label:
          "Vamos a tener que postponer hasta que se ajusten sus papeles.",
        outcome: "bad",
        feedback: "Lo despide. El paciente rara vez regresa.",
      },
      {
        label:
          "¿Tiene algún familiar cercano que pueda firmar con usted? A veces funciona mejor desde otro perfil.",
        outcome: "good",
        feedback:
          "Ofrece alternativa concreta en el momento. Mantiene la conversación abierta sin presionar.",
      },
      {
        label: "Necesita mejorar su perfil crediticio. Vuelva en 6 meses.",
        outcome: "warn",
        feedback: "Demasiado lejano. El momento de motivación se pierde.",
      },
    ],
  },
  {
    title: "Momento 3 — Cierre",
    situation:
      "El paciente dice: 'Sí, mi hija podría firmar conmigo.' ¿Qué hace ahora?",
    options: [
      {
        label: "Dígale que llame mañana cuando tenga tiempo.",
        outcome: "bad",
        feedback: "Vuelve a perder el momento. Quien sale sin firmar rara vez vuelve.",
      },
      {
        label:
          "Llamémosla ahora si está disponible. En 30 segundos sabemos si se ajusta.",
        outcome: "good",
        feedback:
          "Aprovecha la motivación presente. El 'ahora' convierte; el 'después' pierde casos.",
      },
      {
        label: "Le envío el link y que ella decida cuándo aplicar.",
        outcome: "warn",
        feedback:
          "Pasivo. Sin acompañamiento, la solicitud se pospone indefinidamente.",
      },
    ],
  },
];

const ICON: Record<Outcome, JSX.Element> = {
  good: <Check className="h-5 w-5 text-accent" />,
  warn: <AlertTriangle className="h-5 w-5 text-welli-yellow-foreground" />,
  bad: <X className="h-5 w-5 text-welli-coral" />,
};

export default function PlanBSimulation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const m = MOMENTS[step];

  const next = () => {
    if (step === MOMENTS.length - 1) onComplete();
    else {
      setStep(step + 1);
      setPicked(null);
    }
  };

  const retry = () => setPicked(null);

  if (step >= MOMENTS.length)
    return (
      <HighlightBox>
        <p className="text-2xl font-bold text-indigo-950">Manejó bien el Plan B.</p>
        <p className="text-lg text-indigo-950 mt-3">
          La clave fue: tono profesional, ofrecer alternativa concreta en el momento, no
          enviar al paciente a 'volver después'.
        </p>
      </HighlightBox>
    );

  const sel = picked !== null ? m.options[picked] : null;

  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
        {m.title}
      </p>
      <SoftBox>
        <p className="text-lg text-indigo-950">{m.situation}</p>
      </SoftBox>
      <div className="space-y-3">
        {m.options.map((o, i) => {
          const isPicked = picked === i;
          return (
            <motion.button
              key={i}
              whileHover={picked === null ? { scale: 1.01 } : {}}
              onClick={() => picked === null && setPicked(i)}
              disabled={picked !== null}
              className={`w-full text-left rounded-xl border-2 p-5 ${
                picked === null
                  ? "border-slate-300 bg-white hover:border-welli-yellow"
                  : isPicked
                    ? o.outcome === "good"
                      ? "border-accent bg-accent/10"
                      : o.outcome === "warn"
                        ? "border-welli-yellow bg-welli-yellow/10"
                        : "border-welli-coral bg-welli-coral/10"
                    : "border-slate-200 bg-white opacity-50"
              }`}
            >
              <div className="flex items-start gap-3">
                {isPicked && ICON[o.outcome]}
                <p className="text-indigo-950">{o.label}</p>
              </div>
              {isPicked && (
                <p className="text-sm text-indigo-950/80 mt-2 italic">{o.feedback}</p>
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {sel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            {sel.outcome === "good" ? (
              <button
                onClick={next}
                className="bg-welli-yellow text-indigo-950 font-semibold px-5 py-2.5 rounded-lg"
              >
                {step === MOMENTS.length - 1 ? "Ver resumen" : "Siguiente momento"} →
              </button>
            ) : (
              <button
                onClick={retry}
                className="flex items-center gap-2 bg-white border-2 border-slate-300 text-indigo-950 font-semibold px-5 py-2.5 rounded-lg"
              >
                <RefreshCw className="h-4 w-4" /> Probar de nuevo
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
