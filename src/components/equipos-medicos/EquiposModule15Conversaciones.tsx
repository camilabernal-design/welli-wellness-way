import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const cards = [
  {
    objection: "La tasa es muy alta",
    key: "¿Con qué la estás comparando: con otro crédito o con pagarlo de contado?",
    answer:
      "Entiendo la preocupación por la tasa. Lo que hemos visto en el sector salud es que lo determinante no es la tasa sino el flujo de caja: la idea es que el equipo se pague con los procedimientos que vas a realizar. Además, WELLI no funciona como un banco tradicional; la banca local suele ser rígida y no entiende cómo opera realmente el sector salud. Nosotros llevamos años financiando médicos y procedimientos.",
    dart: "WELLI entiende el negocio del médico.",
  },
  {
    objection: "Prefiero pedir un crédito en el banco",
    key: "¿Ya lo radicaste? ¿Qué tiempo de respuesta te dieron?",
    answer:
      "Es totalmente válido. Sin embargo, la banca tradicional evalúa a los médicos con criterios muy generales y no siempre entiende la dinámica del sector. En WELLI hemos financiado procedimientos y equipos médicos durante mucho tiempo, por lo que conocemos el flujo de ingresos que generan los consultorios y las clínicas.",
    dart: "Especialización en salud.",
  },
  {
    objection: "No quiero endeudarme",
    key: "¿Es que no quieres deuda, o que no quieres comprometer tu caja este año?",
    answer:
      "Muchos médicos que trabajan con WELLI sí tienen el capital para comprar de contado, pero prefieren financiar para no descapitalizarse. Así pueden usar su liquidez en marketing, expansión del consultorio o contratación de personal, mientras el equipo se paga con los procedimientos.",
    dart: "El crédito como herramienta de crecimiento.",
  },
  {
    objection: "¿Quién es WELLI?",
    key: "¿Qué necesitarías conocer de un aliado financiero para sentirte tranquilo?",
    answer:
      "WELLI es un aliado financiero especializado en el sector salud. Acompañamos el crecimiento de médicos y clínicas facilitando el acceso a tecnología. Y no es solo financiación: entras a una red de contactos con profesionales del sector que están creciendo y expandiendo sus servicios.",
    dart: "WELLI es ecosistema, no solo crédito.",
  },
  {
    objection: "No sé si el equipo se va a pagar solo",
    key: "¿Cuántos procedimientos de este tipo estás haciendo hoy al mes?",
    answer:
      "Justamente uno de nuestros acompañamientos es ayudarte a calcular el punto de equilibrio del equipo. Antes de decidir podemos revisar juntos cuántos procedimientos necesitarías al mes para cubrir la cuota. Eso te da mucha más claridad financiera.",
    dart: "WELLI ayuda a tomar decisiones financieras inteligentes.",
  },
  {
    objection: "No quiero hacer muchos trámites",
    key: "¿Qué proceso te desgastó la última vez que pediste financiación?",
    answer:
      "Uno de los objetivos de WELLI es que el proceso sea lo más simple posible. Sabemos que los médicos no tienen tiempo para procesos largos como los de la banca tradicional: el preaprobado sale en minutos y todo el trámite es digital, incluida la firma.",
    dart: "Proceso simple y ágil.",
  },
  {
    objection: "Voy a pensarlo",
    key: "Claro. ¿Qué es lo que quieres terminar de resolver: los números o el momento?",
    answer:
      "Tiene todo el sentido analizarlo bien. Lo que solemos hacer con nuestros clientes es revisar el punto de equilibrio del equipo para entender cuántos procedimientos al mes necesitarían para cubrir la inversión. ¿Te parece si lo revisamos ahora mismo y decides con el número en la mano?",
    dart: "Decisión basada en números.",
  },
];

const EquiposModule15Conversaciones = ({ onComplete }: Props) => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <EquiposShell
      phase={2}
      eyebrow="Clínica de ventas"
      icon={MessageSquare}
      title="Manejo de conversaciones difíciles"
      subtitle="Antes de responder, pregunta. La pregunta-llave te dice si lo que escuchaste es una excusa social o la razón real. Toca cada tarjeta para ver la respuesta."
      onComplete={onComplete}
    >
      <div className="grid md:grid-cols-2 gap-5">
        {cards.map((c, i) => (
          <motion.button
            key={c.objection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setFlipped(flipped === i ? null : i)}
            className={`text-left rounded-3xl border-2 p-6 transition-all ${
              flipped === i
                ? "bg-indigo-950 border-indigo-950 text-white shadow-xl"
                : "bg-card border-welli-yellow/40 hover:border-welli-yellow shadow-sm"
            }`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                flipped === i ? "text-welli-yellow" : "text-primary"
              }`}
            >
              Lo que dice el médico
            </p>
            <h3
              className={`font-bold text-lg mb-3 ${
                flipped === i ? "text-white" : "text-indigo-950"
              }`}
            >
              "{c.objection}"
            </h3>

            <div
              className={`rounded-xl px-4 py-3 text-sm ${
                flipped === i ? "bg-white/10 text-white/90" : "bg-welli-yellow/20 text-indigo-950/90"
              }`}
            >
              <span className="font-bold">Pregunta-llave: </span>
              {c.key}
            </div>

            {flipped === i ? (
              <div className="mt-4 space-y-3">
                <p className="text-sm text-white/90 leading-relaxed">{c.answer}</p>
                <div className="flex items-start gap-2 bg-welli-yellow/20 rounded-xl px-4 py-3">
                  <Sparkles className="w-4 h-4 text-welli-yellow shrink-0 mt-0.5" />
                  <p className="text-sm text-white">
                    <span className="font-bold">Mensaje clave: </span>
                    {c.dart}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-xs text-indigo-950/50 mt-3">Toca para ver la respuesta</p>
            )}
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-welli-yellow/15 border border-welli-yellow/40 p-6 text-center"
      >
        <p className="text-indigo-950 font-medium">
          El objetivo no es vender un crédito. El objetivo es mostrarle al médico cómo crecer{" "}
          <span className="font-bold">sin descapitalizarse</span>.
        </p>
      </motion.div>
    </EquiposShell>
  );
};

export default EquiposModule15Conversaciones;
