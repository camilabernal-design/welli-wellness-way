import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

interface Props { onComplete: () => void; }

const conversations = [
  {
    phrase: "Lo voy a pensar",
    meaning: 'En realidad casi siempre significa: "No sé cómo voy a pagarlo." El paciente no duda del tratamiento. Duda del costo.',
    action: 'Antes de despedirlo, pregunte: "¿Qué le impediría empezar hoy?" Si la respuesta tiene que ver con plata, Welli es la solución. Cuota fija mensual, tratamiento empieza hoy.',
  },
  {
    phrase: "No tengo el dinero ahorita",
    meaning: 'La respuesta más honesta. Su paciente le está diciendo exactamente cuál es el obstáculo — solo necesita ver la salida.',
    action: 'Aquí Welli brilla. Diga: "Tranquilo, justo para eso tenemos Welli. Le costaría más o menos $X al mes durante Y meses, sin sorpresas." Los números concretos calman al paciente.',
  },
  {
    phrase: "En otra clínica es más barato",
    meaning: 'El paciente no está objetando el valor de su trabajo. Está pidiendo ayuda para poder pagarlo. Bajar el precio sería desvalorizar su experiencia clínica.',
    action: 'No baje su precio. Aumente la viabilidad del pago. Diga: "Doctor [apellido del paciente], mi trabajo refleja años de experiencia. Lo que sí podemos hacer es darle una forma de pagarlo cómodamente — cuotas fijas que sí caben en su presupuesto."',
  },
  {
    phrase: "Prefiero pagar con mi tarjeta de crédito",
    meaning: 'El paciente cree que su tarjeta es la mejor opción porque ya la tiene. No conoce las desventajas reales: tasa variable, ocupa cupo de otros gastos, cuota de manejo.',
    action: 'Hágale ver la diferencia con un ejemplo concreto: "Con su tarjeta paga unos $X al mes durante muchos meses. Con Welli, paga una cuota fija de $Y durante 24 meses, sin tocar su cupo de tarjeta para emergencias." Los pacientes que ven la comparación numérica, suelen elegir Welli.',
  },
  {
    phrase: "¿Y si no me aprueban?",
    meaning: 'Esta es la mejor pregunta que un paciente puede hacer — significa que SÍ quiere tratarse. Solo necesita asegurarse de que vale la pena intentarlo.',
    action: 'Tranquilícelo con tres datos: (1) La consulta toma 30 segundos y no afecta su historial crediticio. (2) Si no le aprueban, un familiar o pareja puede aplicar por él (Plan B). (3) Welli tiene aprobaciones parciales — a veces aprueban el 70% u 80% y eso suma.',
  },
];

type Step = "intro" | "cards" | "closing";

const ExpressAliadosModule4PatientResponses = ({ onComplete }: Props) => {
  const [step, setStep] = useState<Step>("intro");
  const [cardIdx, setCardIdx] = useState(0);
  const [layer, setLayer] = useState(0); // 0 = phrase, 1 = meaning, 2 = action

  if (step === "intro") {
    return (
      <div className="module-container">
        <div className="max-w-3xl mx-auto text-center space-y-8 py-12">
          <MessageSquare className="w-12 h-12 mx-auto text-welli-yellow" />
          <h1 className="font-display text-3xl md:text-5xl font-bold text-indigo-950">
            Lo que escuchará de sus pacientes
          </h1>
          <p className="text-lg text-indigo-800 leading-relaxed italic">
            "Hay 5 frases que va a escuchar repetidamente cuando empiece a ofrecer Welli. Le voy a mostrar las 5, qué
            significan en realidad, y qué hacer con cada una."
          </p>
          <div className="rounded-3xl bg-welli-yellow/20 border-2 border-welli-yellow/40 p-6 md:p-8 text-left">
            <p className="text-xs font-bold text-welli-yellow uppercase tracking-widest mb-2">
              Lo más importante que va a aprender
            </p>
            <p className="text-indigo-950 text-lg leading-relaxed">
              Ninguna de estas frases es un "no". Son señales de que su paciente quiere tratarse. Solo necesita su
              ayuda para encontrar la ruta.
            </p>
          </div>
          <button
            onClick={() => setStep("cards")}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Veamos cada una <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  if (step === "closing") {
    return (
      <div className="module-container">
        <div className="min-h-[70vh] bg-indigo-950 rounded-3xl flex items-center justify-center p-12 max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="font-display text-3xl md:text-4xl font-bold text-welli-yellow italic"
            >
              "Cinco conversaciones."
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}
              className="font-display text-2xl md:text-3xl font-bold text-white italic"
            >
              "Una misma verdad: su paciente quiere tratarse con usted."
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.3 }}
              className="font-display text-2xl md:text-3xl font-bold text-welli-yellow italic"
            >
              "Welli le da la herramienta para no perderlo."
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5 }}
              onClick={onComplete}
              className="inline-flex items-center gap-3 text-lg px-10 py-4 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
            >
              Continuar <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  const card = conversations[cardIdx];
  const isLastCard = cardIdx === conversations.length - 1;

  const handleAdvance = () => {
    if (layer < 2) {
      setLayer(layer + 1);
    } else if (!isLastCard) {
      setCardIdx(cardIdx + 1);
      setLayer(0);
    } else {
      setStep("closing");
    }
  };

  const buttonLabel = layer === 0
    ? "Ver qué significa"
    : layer === 1
    ? "¿Qué hacer?"
    : isLastCard
    ? "Cerrar"
    : "Siguiente conversación";

  return (
    <div className="module-container">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center gap-2 mb-6">
          {conversations.map((_, i) => (
            <div key={i} className={`h-1.5 w-12 rounded-full ${i <= cardIdx ? "bg-welli-yellow" : "bg-welli-yellow/20"}`} />
          ))}
        </div>
        <p className="text-center text-xs font-bold text-welli-yellow tracking-widest mb-4">
          CONVERSACIÓN {cardIdx + 1} DE {conversations.length}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={cardIdx}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border-2 border-welli-yellow/40 bg-card p-8 md:p-10 min-h-[400px] space-y-6"
          >
            <div className="space-y-2">
              <p className="text-xs font-bold text-welli-yellow uppercase tracking-widest">Su paciente dice</p>
              <p className="font-display text-2xl md:text-3xl font-bold text-indigo-950">"{card.phrase}"</p>
            </div>

            <AnimatePresence mode="wait">
              {layer >= 1 && (
                <motion.div
                  key={`meaning-${cardIdx}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                  className="pt-4 border-t border-welli-yellow/20 space-y-2"
                >
                  <p className="text-xs font-bold text-indigo-950 uppercase tracking-widest">Qué significa de verdad</p>
                  <p className="text-indigo-800 leading-relaxed">{card.meaning}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {layer >= 2 && (
                <motion.div
                  key={`action-${cardIdx}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                  className="pt-4 border-t border-welli-yellow/20 space-y-2"
                >
                  <p className="text-xs font-bold text-welli-yellow uppercase tracking-widest">Qué hacer</p>
                  <p className="text-indigo-950 leading-relaxed">{card.action}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleAdvance}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg"
              >
                {buttonLabel} {layer < 2 || !isLastCard ? <ArrowRight className="w-5 h-5" /> : null}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExpressAliadosModule4PatientResponses;
