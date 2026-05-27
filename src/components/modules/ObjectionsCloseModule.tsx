import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle, ArrowRight, ChevronLeft, ChevronRight,
  HelpCircle, Key, CheckCircle2, AlertCircle, Sparkles,
} from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const conversations = [
  {
    phrase: "Necesito pensarlo / Hablar con mi familia",
    preguntaLlave:
      "¿Hay algo del plan de tratamiento con lo que no esté de acuerdo, doctor [paciente]?",
    accion:
      'Si responde "No, todo bien" → es excusa social. La razón real suele ser plata: ofrezca Welli como solución concreta. Si responde "Sí, esto me preocupa" → es razón real clínica. Resuelva esa duda primero, después hable de Welli.',
  },
  {
    phrase: "Yo tengo tarjeta de crédito",
    preguntaLlave:
      "¿Sabe cuánto le quedaría pagando al mes con su tarjeta vs. con un crédito de salud específico como Welli?",
    accion:
      "Educa con cifras concretas: con tarjeta paga cuota mínima durante muchos meses (tasa variable). Con Welli, cuota fija de $Y durante 24 meses, sin tocar su cupo de tarjeta para emergencias. Números concretos cambian la decisión más que argumentos.",
  },
  {
    phrase: "¿Puedo pagarles mensualmente mientras vengo a citas?",
    preguntaLlave:
      "Doctor [paciente], ¿prefiere terminar el tratamiento en 2 meses o en 6 meses?",
    accion:
      'Si dice "2 meses" → "Perfecto, Welli le permite eso. Usted paga las cuotas mientras yo le hago todo el tratamiento de una vez, sin alargar el proceso. Es mejor para su salud y para su bolsillo." Welli desacopla pago de cronograma clínico.',
  },
  {
    phrase: "No quiero productos financieros",
    preguntaLlave:
      "¿Ha tenido alguna mala experiencia con bancos o financieras antes?",
    accion:
      'Casi siempre responde "Sí". Reframe: "Welli no es un banco. Es un crédito exclusivo de salud — sin fiador, sin papeleos, con tasa fija. La diferencia es que está regulado por el Banco de la República. Muchos pacientes que decían lo mismo cambian de opinión cuando lo escuchan."',
  },
  {
    phrase: "Mi historial es malo",
    preguntaLlave:
      "¿Lo dice porque ha intentado y no le han aprobado antes, o por una preocupación general?",
    accion:
      'Si nunca ha intentado → "La consulta toma 30 segundos y no afecta su historial. ¿Lo intentamos?". Si fue rechazado antes → "Welli tiene criterios distintos, vale la pena verificar. Y si no aplica usted, existe Plan B: un familiar puede aplicar por usted".',
  },
  {
    phrase: "No quiero pagar intereses",
    preguntaLlave:
      "¿Su preocupación es por los intereses en sí, o porque no quiere pagar más de lo que vale el tratamiento?",
    accion:
      'Casi siempre dirá lo segundo. "Le entiendo. Lo que sí puedo decirle es que las tasas de Welli están ajustadas a la regulación del Banco de la República — no hay sorpresas. Y comparado con su tarjeta o un préstamo bancario, sale más conveniente. Le muestro los números."',
  },
  {
    phrase: "Welli rechazó al paciente",
    preguntaLlave:
      "Antes de despedirlo, ¿podríamos intentar con un familiar como Plan B?",
    accion:
      "Esta es operativa, no del paciente. Activa Plan B: pareja, hijos, padres pueden aplicar por el paciente. Muchos tratamientos se cierran así. Si tampoco aplica el Plan B → invita a volver en 3-6 meses cuando mejore su perfil crediticio.",
  },
  {
    phrase: "En otra clínica es más barato",
    preguntaLlave:
      "¿Le ofrecieron en esa otra clínica el mismo plan integral que le propuse, o algo más limitado?",
    accion:
      'Casi siempre la respuesta revela que NO es el mismo plan. "Mi trabajo refleja años de experiencia. Lo que sí podemos hacer es darle una forma de pagarlo cómodamente — cuotas fijas que sí caben en su presupuesto." NUNCA negocies tu punto de vista clínico. Aumenta viabilidad del pago, no rebajes el precio.',
  },
  {
    phrase: "Pensé que mi prepagada cubría más",
    preguntaLlave:
      "Si su prepagada no cubre este tratamiento, ¿le gustaría una alternativa para no posponerlo?",
    accion:
      'Si dice "Sí" → "Welli es esa alternativa. Cuota fija mensual, tratamiento empieza hoy, no tiene que esperar a que su prepagada decida algo distinto el próximo año".',
  },
];

const ObjectionsCloseModule = ({ onComplete }: ModuleProps) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [revealedLayer, setRevealedLayer] = useState(1); // 1, 2, or 3
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));

  const card = conversations[currentCard];

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= conversations.length) return;
    setCurrentCard(idx);
    setRevealedLayer(1);
    setVisited((prev) => new Set(prev).add(idx));
  };

  const advanceLayer = () => {
    if (revealedLayer < 3) setRevealedLayer(revealedLayer + 1);
  };

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 text-indigo-950 mb-6">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Clínica de Ventas</span>
          </div>
          <h2 className="section-title text-indigo-950">
            Cómo manejar las respuestas de sus pacientes
          </h2>
        </motion.div>

        {/* Educational intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl p-6 mb-8 bg-gradient-to-r from-welli-yellow/15 to-welli-yellow/5 border border-welli-yellow/30"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-welli-yellow/30 shrink-0">
              <Sparkles className="w-6 h-6 text-indigo-950" />
            </div>
            <div className="space-y-3 text-indigo-950">
              <p className="font-display font-bold text-lg">
                Lo más importante: ninguna de estas frases es un "no" automático.
              </p>
              <p className="text-indigo-900">
                Cada respuesta puede ser una de dos cosas:
              </p>
              <ul className="space-y-1.5 text-indigo-900">
                <li>
                  <span className="font-bold">Excusa social</span> — respuesta
                  automática que NO es la razón real.
                </li>
                <li>
                  <span className="font-bold">Razón real</span> — preocupación
                  verdadera que requiere otra respuesta.
                </li>
              </ul>
              <p className="text-indigo-900">
                La <span className="font-bold">pregunta-llave</span> descubre
                cuál es cuál. NO des tu mejor argumento antes de hacer la
                pregunta.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card navigator */}
        <div className="relative mb-6">
          <button
            onClick={() => goTo(currentCard - 1)}
            disabled={currentCard === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-10 p-3 rounded-full bg-card border border-border shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-welli-yellow/20 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-indigo-950" />
          </button>
          <button
            onClick={() => goTo(currentCard + 1)}
            disabled={currentCard === conversations.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-10 p-3 rounded-full bg-card border border-border shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-welli-yellow/20 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-indigo-950" />
          </button>

          <motion.div
            key={currentCard}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-border bg-card shadow-lg overflow-hidden"
          >
            <div className="px-6 py-3 bg-indigo-950 text-white flex items-center justify-between text-xs font-medium">
              <span>
                Conversación {currentCard + 1} de {conversations.length}
              </span>
              <span className="opacity-80">
                Capa {revealedLayer} de 3
              </span>
            </div>

            {/* Layer 1 — Phrase */}
            <div className="p-6 md:p-8 bg-muted/40 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-muted shrink-0">
                  <HelpCircle className="w-5 h-5 text-indigo-950" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-indigo-900/70 mb-2">
                    Lo que dice el paciente
                  </p>
                  <p className="font-display text-xl md:text-2xl font-bold text-indigo-950 italic">
                    "{card.phrase}"
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 2 — Pregunta-llave */}
            <AnimatePresence initial={false}>
              {revealedLayer >= 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="bg-welli-yellow/15 border-b border-welli-yellow/40"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-welli-yellow/40 shrink-0">
                        <Key className="w-5 h-5 text-indigo-950" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold uppercase tracking-wide text-indigo-950 mb-2">
                          Pregunta-llave
                        </p>
                        <p className="text-lg md:text-xl font-display font-semibold text-indigo-950">
                          {card.preguntaLlave}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Layer 3 — Acción */}
            <AnimatePresence initial={false}>
              {revealedLayer >= 3 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="bg-success/10"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-success/20 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold uppercase tracking-wide text-success mb-2">
                          Qué hacer según la respuesta
                        </p>
                        <p className="text-base md:text-lg text-indigo-950 leading-relaxed">
                          {card.accion}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Layer control */}
            <div className="p-5 bg-card border-t border-border flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    onClick={() => setRevealedLayer(n)}
                    className={`w-8 h-2 rounded-full transition-all ${
                      n <= revealedLayer
                        ? "bg-welli-yellow"
                        : "bg-muted hover:bg-muted-foreground/30"
                    }`}
                    aria-label={`Capa ${n}`}
                  />
                ))}
              </div>
              {revealedLayer < 3 ? (
                <button
                  onClick={advanceLayer}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all"
                >
                  {revealedLayer === 1 ? "Ver pregunta-llave" : "Ver qué hacer"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => goTo(currentCard + 1)}
                  disabled={currentCard === conversations.length - 1}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-indigo-950 text-white hover:bg-indigo-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Siguiente conversación
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {conversations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentCard
                  ? "bg-welli-yellow w-8"
                  : visited.has(idx)
                  ? "bg-success/60 w-2.5"
                  : "bg-muted-foreground/30 w-2.5 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir a conversación ${idx + 1}`}
            />
          ))}
        </div>

        {/* Reminder */}
        <div className="rounded-2xl p-5 mb-8 bg-muted/50 border border-border flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-indigo-950 mt-0.5 shrink-0" />
          <p className="text-sm text-indigo-900">
            Recuerda: primero la <span className="font-bold">pregunta-llave</span>, después la
            acción. El orden no es opcional — es lo que diferencia una conversación que cierra de
            una que se pierde.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectionsCloseModule;
