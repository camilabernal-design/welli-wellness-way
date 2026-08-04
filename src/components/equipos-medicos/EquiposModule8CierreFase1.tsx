import { useState } from "react";
import { motion } from "framer-motion";
import { Flag, CheckCircle2, Circle } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const checklist = [
  "Firmar el convenio de colaboración con WELLI.",
  "Definir la opción del plan de pagos preferencial (5, 30 o 60 días).",
  "Acordar la política de retoma del equipo en caso de incumplimiento.",
  "Designar al líder comercial responsable de la alianza dentro de tu compañía.",
  "Enviar el listado de vendedores para crear sus usuarios en el portal.",
  "Agendar la sesión de entrenamiento de 45 minutos (Fase 2) con la fuerza comercial.",
];

const EquiposModule8CierreFase1 = ({ onComplete }: Props) => {
  const [done, setDone] = useState<number[]>([]);

  const toggle = (i: number) =>
    setDone((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <EquiposShell
      phase={1}
      eyebrow="Cierre directivo"
      icon={Flag}
      title="Ruta de vinculación"
      subtitle="Estos son los acuerdos que dejamos cerrados hoy para que tu fuerza comercial pueda empezar a financiar clientes de inmediato."
      onComplete={onComplete}
      ctaLabel="Pasar a la Fase 2"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border-2 border-welli-yellow/50 bg-card p-6 md:p-8 shadow-sm"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-indigo-950">Checklist de vinculación</h3>
          <span className="text-sm font-bold text-primary">
            {done.length}/{checklist.length}
          </span>
        </div>
        <div className="space-y-3">
          {checklist.map((c, i) => {
            const active = done.includes(i);
            return (
              <button
                key={c}
                onClick={() => toggle(i)}
                className={`w-full text-left flex items-start gap-3 rounded-xl px-4 py-3 border transition-all ${
                  active
                    ? "bg-welli-yellow/25 border-welli-yellow"
                    : "bg-welli-yellow/5 border-welli-yellow/30 hover:bg-welli-yellow/15"
                }`}
              >
                {active ? (
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-indigo-950/30 shrink-0 mt-0.5" />
                )}
                <span className="text-sm text-indigo-950/90">{c}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-4 h-2 rounded-full bg-indigo-950/10 overflow-hidden">
          <motion.div
            className="h-full bg-welli-yellow"
            animate={{ width: `${(done.length / checklist.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-indigo-950 rounded-3xl p-8 text-white text-center shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-3">Fin de la Fase 1</h3>
        <p className="text-white/85 max-w-2xl mx-auto">
          Ya tienes el modelo completo: el problema, la solución, la economía de la alianza y el
          respaldo. La Fase 2 es operativa y está dirigida a tu fuerza comercial: cómo perfilar, cómo
          simular la cuota y el retorno, cómo radicar la solicitud y cómo manejar las conversaciones
          difíciles.
        </p>
      </motion.div>
    </EquiposShell>
  );
};

export default EquiposModule8CierreFase1;
