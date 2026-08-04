import { motion } from "framer-motion";
import { Handshake, FileSignature, Percent, RotateCcw, GraduationCap } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const steps = [
  {
    icon: FileSignature,
    title: "Convenio de colaboración",
    text: "WELLI y el distribuidor firman el convenio que habilita la financiación para sus clientes.",
  },
  {
    icon: Percent,
    title: "Comisión al desembolso",
    text: "Por los servicios prestados (mayor aprobación, pago rápido, plataforma tecnológica e incentivos comerciales), WELLI participa con un 5% al momento del desembolso.",
  },
  {
    icon: RotateCcw,
    title: "Política de retoma",
    text: "Se define la política de retoma del equipo en caso de incumplimiento del cliente.",
  },
  {
    icon: GraduationCap,
    title: "Entrenamiento de 45 minutos",
    text: "WELLI agenda la sesión con tu fuerza comercial y da de alta los usuarios en el sistema. Desde ese momento pueden financiar clientes de inmediato.",
  },
];

const plan = [
  { opcion: "Opción 1", dias: "5 días", comision: "5,00%" },
  { opcion: "Opción 2", dias: "30 días", comision: "2,00%" },
  { opcion: "Opción 3", dias: "60 días", comision: "0,00%" },
];

const EquiposModule5Alianza = ({ onComplete }: Props) => (
  <EquiposShell
    phase={1}
    eyebrow="Modelo de negocio"
    icon={Handshake}
    title="Cómo funciona la alianza"
    subtitle="Cuatro pasos para quedar habilitado y la estructura económica que hace viable el modelo para ambas partes."
    onComplete={onComplete}
  >
    <div className="grid md:grid-cols-2 gap-6">
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="rounded-2xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm flex gap-4"
        >
          <div className="w-11 h-11 shrink-0 rounded-xl bg-welli-yellow/25 flex items-center justify-center">
            <s.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-bold text-primary mb-1">Paso {i + 1}</p>
            <h3 className="font-bold text-indigo-950 mb-2">{s.title}</h3>
            <p className="text-sm text-indigo-950/80">{s.text}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-indigo-950 rounded-3xl p-8 text-white shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-2">Plan de pagos preferencial</h3>
      <p className="text-white/80 mb-6">
        Tú eliges qué tan rápido quieres recibir el desembolso. Entre más pronto el pago, mayor la
        comisión; si puedes esperar, la comisión llega a 0%.
      </p>
      <div className="overflow-hidden rounded-2xl border border-white/15">
        <table className="w-full text-left">
          <thead className="bg-white/10">
            <tr>
              <th className="px-4 py-3 text-sm font-bold">Opción</th>
              <th className="px-4 py-3 text-sm font-bold">Tiempo de pago</th>
              <th className="px-4 py-3 text-sm font-bold">Comisión</th>
            </tr>
          </thead>
          <tbody>
            {plan.map((p) => (
              <tr key={p.opcion} className="border-t border-white/10">
                <td className="px-4 py-3 text-sm text-white/90">{p.opcion}</td>
                <td className="px-4 py-3 text-sm text-white/90">{p.dias}</td>
                <td className="px-4 py-3 text-sm font-bold text-welli-yellow">{p.comision}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-white/70 mt-4">
        Existen opciones sin comisión tanto a 30 como a 60 días de plazo. Las condiciones finales se
        formalizan en el convenio de cada distribuidor.
      </p>
    </motion.section>
  </EquiposShell>
);

export default EquiposModule5Alianza;
