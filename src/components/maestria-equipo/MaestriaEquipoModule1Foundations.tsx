import { motion } from "framer-motion";
import { ArrowRight, Search, Wrench, Target, Clock, Brain } from "lucide-react";

interface Props { onComplete: () => void; }

const principles = [
  { icon: Search, title: "Indagar antes de presentar", text: "Primero entiende el dolor real. Después adaptas el contenido. Indagación consultiva > guion genérico." },
  { icon: Wrench, title: "Enseñar a usar la herramienta antes de manejar objeciones", text: "El doctor compra una herramienta, no un curso de ventas. Carga cognitiva: una cosa a la vez." },
  { icon: Target, title: "Cerrar con compromiso específico", text: "Nunca despedida abierta. Siempre día y hora. Psicología del compromiso: lo agendado se cumple." },
];

const MaestriaEquipoModule1Foundations = ({ onComplete }: Props) => (
  <div className="module-container">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-6">
          <Brain className="w-4 h-4 text-secondary" />
          <span className="text-xs font-bold text-indigo-950">Módulo 1 · Fundamentos</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-indigo-950 mb-4 leading-tight">
          Tres principios. <br />
          <span className="text-welli-yellow">Una sola metodología.</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 gap-4 mb-10"
      >
        <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6">
          <p className="text-xs font-bold text-destructive uppercase mb-2">Metodología anterior</p>
          <p className="font-display text-2xl font-bold text-indigo-950 mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5" /> 45 min
          </p>
          <p className="text-sm text-indigo-800">Objeciones primero. El doctor se desconecta antes del cierre.</p>
        </div>
        <div className="rounded-2xl border-2 border-secondary/40 bg-secondary/10 p-6">
          <p className="text-xs font-bold text-secondary uppercase mb-2">Metodología nueva</p>
          <p className="font-display text-2xl font-bold text-indigo-950 mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5" /> 25 min
          </p>
          <p className="text-sm text-indigo-800">Herramienta primero. Cierre con activación específica.</p>
        </div>
      </motion.div>

      <div className="space-y-4 mb-10">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.15 }}
            className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-6 flex gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-welli-yellow flex items-center justify-center flex-shrink-0">
              <p.icon className="w-6 h-6 text-indigo-950" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-welli-yellow bg-indigo-950 px-2 py-0.5 rounded-full">{i + 1}</span>
                <h3 className="font-bold text-indigo-950">{p.title}</h3>
              </div>
              <p className="text-sm text-indigo-800">{p.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onComplete}
          className="group inline-flex items-center gap-3 text-lg px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Continuar
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default MaestriaEquipoModule1Foundations;
