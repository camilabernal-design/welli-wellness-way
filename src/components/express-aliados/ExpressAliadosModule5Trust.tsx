import { motion } from "framer-motion";
import { ArrowRight, Banknote, ShieldCheck, HeartHandshake, Shield } from "lucide-react";

interface Props { onComplete: () => void; }

const pillars = [
  { icon: Banknote, title: 'Pagos directos al aliado', text: '72 horas hábiles. Martes y jueves. Sin intermediarios.' },
  { icon: ShieldCheck, title: 'Tasa fija y transparente', text: 'Sin sorpresas. Riesgos crediticios gestionados por Welli. Pago completo al aliado.' },
  { icon: HeartHandshake, title: 'Acompañamiento profesional', text: 'Asesor dedicado por aliado. Apoyo en cierre, no centro de llamadas.' },
];

const stats = [
  { v: '+2.800', l: 'clínicas aliadas' },
  { v: '$140.000M', l: 'desembolsados' },
  { v: '+300.000', l: 'aplicaciones procesadas' },
];

const ExpressAliadosModule5Trust = ({ onComplete }: Props) => (
  <div className="module-container">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <Shield className="w-12 h-12 mx-auto text-welli-yellow mb-4" />
        <h1 className="font-display text-3xl md:text-5xl font-bold text-indigo-950 mb-3">
          Garantías para su clínica
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="rounded-3xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-8 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-welli-yellow flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-8 h-8 text-indigo-950" />
            </div>
            <p className="text-xs font-bold text-welli-yellow mb-2">PILAR {i + 1}</p>
            <h3 className="font-display text-xl font-bold text-indigo-950 mb-3">{p.title}</h3>
            <p className="text-sm text-indigo-800">{p.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="bg-indigo-950 rounded-3xl p-8 grid grid-cols-3 gap-4 mb-10"
      >
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-display text-2xl md:text-4xl font-bold text-welli-yellow">{s.v}</p>
            <p className="text-xs md:text-sm text-white/80 mt-1">{s.l}</p>
          </div>
        ))}
      </motion.div>

      <div className="text-center">
        <button
          onClick={onComplete}
          className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
        >
          Continuar <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
);

export default ExpressAliadosModule5Trust;
