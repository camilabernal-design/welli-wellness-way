import { motion } from "framer-motion";
import { Award, TrendingUp, Timer, Banknote, ShieldCheck, Feather, CheckCircle2 } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const advantages = [
  {
    icon: TrendingUp,
    title: "Incrementa venta y conversión",
    text: "Cotizaciones que hoy se caen por precio se convierten cuando la conversación pasa a cuota mensual.",
  },
  {
    icon: Timer,
    title: "Preaprobado en menos de 10 minutos",
    text: "Ahorras semanas de espera bancaria y mantienes la venta caliente.",
  },
  {
    icon: Banknote,
    title: "Desembolso directo al distribuidor",
    text: "Recibes el pago a tu nombre contra la entrega del equipo.",
  },
  {
    icon: ShieldCheck,
    title: "El riesgo financiero lo asume WELLI",
    text: "No prestas tu propio capital ni gestionas cartera vencida.",
  },
  {
    icon: Feather,
    title: "Baja carga operativa",
    text: "Tu vendedor solo origina la solicitud; el estudio, la firma y el recaudo los hace WELLI.",
  },
  {
    icon: Award,
    title: "Incentivos para tu fuerza comercial",
    text: "Premiamos la fidelidad de nuestros aliados y de los vendedores que más originan.",
  },
];

const EquiposModule4Ventajas = ({ onComplete }: Props) => (
  <EquiposShell
    phase={1}
    eyebrow="Propuesta de valor"
    icon={Award}
    title="Ventajas para tu compañía"
    subtitle="Qué gana concretamente un distribuidor de tecnología médica al ofrecer WELLI en cada cotización."
    onComplete={onComplete}
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {advantages.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="rounded-2xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm"
        >
          <div className="w-11 h-11 rounded-xl bg-welli-yellow/25 flex items-center justify-center mb-4">
            <a.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-indigo-950 mb-2">{a.title}</h3>
          <p className="text-sm text-indigo-950/80">{a.text}</p>
        </motion.div>
      ))}
    </div>

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border-2 border-primary/30 bg-primary/5 p-8"
    >
      <h3 className="text-xl font-bold text-indigo-950 mb-4">El cambio de conversación</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-card border border-indigo-950/10 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-950/50 mb-2">Antes</p>
          <p className="text-indigo-950/85">
            "El equipo cuesta $180 millones." → El médico compara contra su caja disponible y aplaza
            la decisión.
          </p>
        </div>
        <div className="rounded-2xl bg-welli-yellow/20 border border-welli-yellow/50 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-950/50 mb-2">Con WELLI</p>
          <p className="text-indigo-950/85">
            "El equipo se puede pagar desde una cuota mensual, y con los procedimientos que ya haces
            se cubre solo." → El médico compara contra su flujo, no contra su caja.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2 mt-5">
        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
        <p className="text-sm text-indigo-950/80">
          Regla de oro: WELLI no es un descuento. Es viabilidad. El precio no baja, la barrera de
          entrada sí.
        </p>
      </div>
    </motion.section>
  </EquiposShell>
);

export default EquiposModule4Ventajas;
