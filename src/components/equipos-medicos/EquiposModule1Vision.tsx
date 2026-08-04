import { motion } from "framer-motion";
import { Compass, HeartPulse, Building2, Users, Quote } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const pillars = [
  {
    icon: HeartPulse,
    title: "Especialistas en salud",
    text: "No somos un banco generalista. Financiamos exclusivamente el sector salud: pacientes, clínicas y tecnología médica.",
  },
  {
    icon: Building2,
    title: "Socio financiero preferido",
    text: "Queremos ser el aliado financiero de clínicas, médicos y proveedores de tecnología médica en Latinoamérica.",
  },
  {
    icon: Users,
    title: "Acceso para todos",
    text: "Que más latinoamericanos accedan a servicios de salud y bienestar de calidad, sin descapitalizarse.",
  },
];

const EquiposModule1Vision = ({ onComplete }: Props) => (
  <EquiposShell
    phase={1}
    eyebrow="Nivel directivo"
    icon={Compass}
    title="Bienvenido a WELLI"
    subtitle={
      <>
        Esta sesión está diseñada para que el equipo directivo de tu compañía entienda{" "}
        <span className="font-bold text-indigo-950">qué es WELLI</span>, cómo funciona la alianza y
        qué gana tu negocio al ofrecer financiación de equipos médicos.
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
      <Quote className="w-8 h-8 text-welli-yellow mb-4" />
      <p className="text-xl md:text-2xl font-semibold leading-relaxed">
        En WELLI construimos soluciones financieras especializadas para el sector salud, para que
        clínicas y médicos crezcan sin frenar su liquidez.
      </p>
      <p className="mt-4 text-white/80">
        Financiamos tratamientos a pacientes y también la tecnología médica que tú vendes. Esa doble
        experiencia es lo que nos permite entender el flujo de caja real de un consultorio.
      </p>
    </motion.section>

    <div className="grid md:grid-cols-3 gap-6">
      {pillars.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="rounded-2xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm"
        >
          <div className="w-11 h-11 rounded-xl bg-welli-yellow/25 flex items-center justify-center mb-4">
            <p.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-indigo-950 mb-2">{p.title}</h3>
          <p className="text-sm text-indigo-950/80">{p.text}</p>
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
        Agenda de hoy · <span className="font-bold">Fase 1</span> para el nivel directivo: modelo,
        condiciones y economía de la alianza. <span className="font-bold">Fase 2</span> para tu
        fuerza comercial: cómo vender con WELLI en campo, paso a paso.
      </p>
    </motion.div>
  </EquiposShell>
);

export default EquiposModule1Vision;
