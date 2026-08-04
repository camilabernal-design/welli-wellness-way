import { motion } from "framer-motion";
import { Rocket, Target, Calculator, FileCheck, MessageSquare } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const agenda = [
  { icon: Target, title: "Perfilar en 3 minutos", text: "El semáforo que te dice si vale la pena radicar." },
  { icon: Calculator, title: "Simular cuota y retorno", text: "Las dos herramientas que cambian la conversación." },
  { icon: FileCheck, title: "Radicar paso a paso", text: "Los 9 pasos del proceso, con video real de la plataforma." },
  { icon: MessageSquare, title: "Manejar la conversación", text: "Qué responder cuando aparecen las dudas típicas." },
];

const EquiposModule9BienvenidaComercial = ({ onComplete }: Props) => (
  <EquiposShell
    phase={2}
    eyebrow="Fuerza comercial"
    icon={Rocket}
    title="Ahora sí: vender con WELLI"
    subtitle={
      <>
        Esta fase es 100% operativa. Al terminar vas a poder perfilar a un médico, mostrarle su cuota
        y su retorno, y dejar radicada la solicitud{" "}
        <span className="font-bold text-indigo-950">en la misma visita</span>.
      </>
    }
    onComplete={onComplete}
  >
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-indigo-950 rounded-3xl p-8 md:p-10 text-white shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-3">Tu nuevo rol frente al médico</h3>
      <p className="text-white/85">
        Dejas de ser solo quien cotiza un equipo y pasas a ser quien le ayuda a{" "}
        <span className="text-welli-yellow font-bold">tomar la decisión de inversión</span>. No
        vendes un crédito: le muestras cómo crecer sin descapitalizarse y en cuántos procedimientos
        al mes se paga la máquina.
      </p>
    </motion.section>

    <div className="grid md:grid-cols-2 gap-6">
      {agenda.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="rounded-2xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm flex gap-4"
        >
          <div className="w-11 h-11 shrink-0 rounded-xl bg-welli-yellow/25 flex items-center justify-center">
            <a.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-indigo-950 mb-1">{a.title}</h3>
            <p className="text-sm text-indigo-950/80">{a.text}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-welli-yellow/15 border border-welli-yellow/40 p-6 text-center"
    >
      <p className="text-indigo-950 font-medium">
        Recuerda las condiciones base: hasta el <span className="font-bold">70%</span> del equipo,
        máximo <span className="font-bold">$250M COP</span>, plazos de{" "}
        <span className="font-bold">6 a 36 meses</span> y desembolso directo al distribuidor.
      </p>
    </motion.div>
  </EquiposShell>
);

export default EquiposModule9BienvenidaComercial;
