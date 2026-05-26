import { motion } from "framer-motion";
import { ArrowRight, Play, MonitorSmartphone, PartyPopper, Gift, PhoneCall } from "lucide-react";
import { useV2Analytics } from "@/hooks/useV2Analytics";

interface ModuleProps { onComplete: () => void; }

const steps = [
  { icon: Play, time: "1 min", title: "Apertura", text: '"Doctor, ¿qué presupuesto tiene a la mano para que lo hagamos juntos?"' },
  { icon: MonitorSmartphone, time: "8 min", title: "Aplicación en vivo", text: "Doctor o asistente conectado. Mariana acompaña paso a paso. Solicitud REAL con paciente REAL." },
  { icon: PartyPopper, time: "3 min", title: "Resultado", text: "Aprobado → festejar + pedir el segundo presupuesto. Rechazado → plan B (familiar/amigo). No es fracaso, es aprendizaje." },
  { icon: Gift, time: "2 min", title: "Welli Points + Referidos", text: "AQUÍ sí se introducen los incentivos. El doctor ya sintió la herramienta — hay confianza." },
  { icon: PhoneCall, time: "1 min", title: "Cierre con próximo paso", text: '"El viernes a las 10 AM lo llamo a ver cómo va con los siguientes 2."' },
];

const ClinicaV2Module8SecondSession = ({ onComplete }: ModuleProps) => {
  const { markComplete } = useV2Analytics(8, "Segunda Sesión - Activación Real");

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            La segunda sesión: <span className="text-welli-yellow">activación real</span>
          </h1>
          <p className="text-indigo-800">No es más capacitación. Es acompañamiento en el primer cierre real (15 min).</p>
        </motion.div>

        <div className="relative space-y-4 mb-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-5 rounded-2xl border-2 border-welli-yellow/30 bg-card"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-welli-yellow/20 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-welli-yellow" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-xs font-bold text-welli-yellow uppercase">Paso {i + 1} · {s.time}</p>
                </div>
                <p className="font-display text-lg font-bold text-indigo-950 mb-1">{s.title}</p>
                <p className="text-sm text-indigo-800">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-5 rounded-2xl bg-secondary/10 border-2 border-secondary/30 mb-8 text-sm text-indigo-950">
          💡 <strong>Por qué funciona:</strong> la barrera psicológica del doctor no se rompe con teoría. Se rompe haciendo el primer cierre con acompañamiento. Aprendizaje vicario (Bandura) — el doctor ve que se puede, lo siente, lo hace.
        </div>

        <div className="text-center">
          <button onClick={() => { markComplete(); onComplete(); }} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:scale-105 transition-all shadow-lg">
            Cerrar la clínica <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicaV2Module8SecondSession;
