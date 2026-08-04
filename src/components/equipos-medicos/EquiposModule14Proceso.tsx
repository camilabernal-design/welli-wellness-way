import { useState } from "react";
import { motion } from "framer-motion";
import { FileCheck, Clock, AlertCircle } from "lucide-react";
import EquiposShell from "./EquiposShell";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface Props {
  onComplete: () => void;
}

const steps = [
  {
    emoji: "📱",
    title: "Contacto inicial",
    short: "Datos de la persona a cargo del trámite.",
    detail:
      "Recolectas nombre, teléfono y correo de quien originará la solicitud. Esa persona será el punto de contacto para todas las notificaciones de avance. Una misma persona puede radicar varias solicitudes.",
  },
  {
    emoji: "👤",
    title: "Tipo de entidad",
    short: "Persona natural o persona jurídica.",
    detail:
      "Define si el deudor es un médico independiente o una sociedad médica. Esto cambia radicalmente la documentación legal y financiera que pedirá el comité.",
  },
  {
    emoji: "🏢",
    title: "Identificación legal",
    short: "Datos de la clínica y del representante legal.",
    detail:
      "NIT o cédula, razón social, dirección y vinculación del representante legal con su documento de identidad.",
  },
  {
    emoji: "💰",
    title: "Estado financiero",
    short: "Reporte simplificado de ingresos y egresos.",
    detail:
      "Con esta información estructuramos la viabilidad inicial y la capacidad de pago que soportará la cuota.",
  },
  {
    emoji: "🩺",
    title: "Equipo y monto",
    short: "Qué se financia y por cuánto.",
    detail:
      "Defines el tipo de equipo médico a financiar y el monto solicitado. Recuerda: hasta el 70% del valor y máximo $250M COP.",
  },
  {
    emoji: "🔐",
    title: "Autorización en centrales",
    short: "Correo al representante legal.",
    detail:
      "Se envía un correo directo al representante legal para que autorice la consulta en centrales de riesgo. Sin esta autorización el proceso se detiene: haz seguimiento el mismo día.",
  },
  {
    emoji: "🚀",
    title: "Preaprobado y documentos",
    short: "Respuesta en minutos.",
    detail:
      "Se verifica el preaprobado en tiempo real y se habilita el cargue de documentos soporte. Este es el momento de mayor energía de la venta: aprovéchalo.",
  },
  {
    emoji: "🔍",
    title: "Revisión WELLI (hasta 72h)",
    short: "Comité de crédito.",
    detail:
      "El comité analiza la documentación adjunta. Tiempo estimado máximo: 72 horas. Si falta un documento, el reloj se reinicia; por eso conviene cargar todo completo desde el inicio.",
  },
  {
    emoji: "🤝",
    title: "Decisión y firma",
    short: "Condiciones finales y firma electrónica.",
    detail:
      "El cliente selecciona monto y plazo definitivos, se liquidan las cuotas y se firman electrónicamente los pagarés. Tras la entrega del equipo, WELLI desembolsa directamente al distribuidor.",
  },
];

const EquiposModule14Proceso = ({ onComplete }: Props) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <EquiposShell
      phase={2}
      eyebrow="Proceso operativo"
      icon={FileCheck}
      title="Cómo radicar una solicitud, paso a paso"
      subtitle="Los 9 pasos del roadmap de financiación, desde el primer contacto hasta la firma. Toca cada paso para ver el detalle."
      onComplete={onComplete}
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h3 className="text-xl font-bold text-indigo-950 text-center">
          Video paso a paso: cómo solicitar financiación para un equipo médico
        </h3>
        <YouTubeEmbed
          videoId="KkqpUHhp_c8"
          title="Paso a paso de la solicitud de financiación WELLI"
          borderColor="welli-yellow"
        />
      </motion.section>

      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <motion.button
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            onClick={() => setOpen(open === i ? null : i)}
            className={`text-left rounded-2xl border-2 p-5 transition-all ${
              open === i
                ? "bg-welli-yellow/25 border-welli-yellow shadow-md"
                : "bg-card border-welli-yellow/35 hover:border-welli-yellow"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-full bg-indigo-950 text-welli-yellow text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-xl">{s.emoji}</span>
            </div>
            <h3 className="font-bold text-indigo-950 text-sm mb-1">{s.title}</h3>
            <p className="text-xs text-indigo-950/70">{s.short}</p>
            {open === i && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-xs text-indigo-950/85 mt-3 pt-3 border-t border-indigo-950/10"
              >
                {s.detail}
              </motion.p>
            )}
          </motion.button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-indigo-950 p-8 text-white shadow-xl"
        >
          <Clock className="w-6 h-6 text-welli-yellow mb-3" />
          <h3 className="text-xl font-bold mb-3">Los tiempos que debes prometer</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li>· Preaprobado: minutos.</li>
            <li>· Estudio completo: 48 a 72 horas con documentos completos.</li>
            <li>· Desembolso: directo al distribuidor contra entrega del equipo.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-primary/30 bg-primary/5 p-8"
        >
          <AlertCircle className="w-6 h-6 text-primary mb-3" />
          <h3 className="text-xl font-bold text-indigo-950 mb-3">Los 3 errores que frenan el caso</h3>
          <ul className="space-y-2 text-sm text-indigo-950/85">
            <li>1. No hacer seguimiento a la autorización de centrales el mismo día.</li>
            <li>2. Cargar documentos incompletos o ilegibles: reinicia el reloj de las 72 horas.</li>
            <li>3. Prometer tasa, plazo o monto sin que estén aprobados.</li>
          </ul>
        </motion.div>
      </div>
    </EquiposShell>
  );
};

export default EquiposModule14Proceso;
