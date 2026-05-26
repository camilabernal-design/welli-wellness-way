import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, MessageCircle, Wrench, Target } from "lucide-react";
import { useV2Analytics } from "@/hooks/useV2Analytics";

interface ModuleProps { onComplete: () => void; }

const principles = [
  { icon: MessageCircle, title: "Indagar más, hablar menos", text: "El doctor habla. Tú adaptas." },
  { icon: Wrench, title: "Usar antes de vender", text: "Plataforma primero. Objeciones después." },
  { icon: Target, title: "Cerrar con activación cerrada", text: "Toda capacitación termina con día y hora para una aplicación real." },
];

const ClinicaV2Module1Welcome = ({ onComplete }: ModuleProps) => {
  const { markComplete } = useV2Analytics(1, "Bienvenida y Filosofía");

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 text-foreground mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold">Clínica 2.0 · Piloto</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-indigo-950 mb-4 leading-tight">
            El doctor no compró una capacitación.
            <br />
            <span className="text-welli-yellow">Compró una herramienta.</span>
          </h1>
          <p className="text-lg text-indigo-800 max-w-2xl mx-auto">
            Primero le enseñamos a <strong>usarla</strong>, después a <strong>venderla</strong>.
          </p>
        </motion.div>

        {/* Before / After */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6">
            <p className="text-xs font-bold text-destructive uppercase mb-2">Antes</p>
            <p className="font-display text-xl font-bold text-indigo-950 mb-2">45 min · 22 módulos</p>
            <p className="text-sm text-indigo-800">Objeciones primero. El doctor se desconecta y no aplica.</p>
          </div>
          <div className="rounded-2xl border-2 border-secondary/40 bg-secondary/10 p-6">
            <p className="text-xs font-bold text-secondary uppercase mb-2">Ahora</p>
            <p className="font-display text-xl font-bold text-indigo-950 mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5" /> 25 min · 9 módulos
            </p>
            <p className="text-sm text-indigo-800">Herramienta primero. Cierre con día y hora.</p>
          </div>
        </motion.div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-6"
            >
              <p.icon className="w-8 h-8 text-welli-yellow mb-3" />
              <h3 className="font-bold text-indigo-950 mb-1">{p.title}</h3>
              <p className="text-sm text-indigo-800">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => { markComplete(); onComplete(); }}
            className="group inline-flex items-center gap-3 text-lg px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Empezar la nueva clínica
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicaV2Module1Welcome;
