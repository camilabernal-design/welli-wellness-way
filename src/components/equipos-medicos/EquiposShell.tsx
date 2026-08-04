import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface EquiposShellProps {
  phase: 1 | 2;
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  onComplete: () => void;
  ctaLabel?: string;
}

const EquiposShell = ({
  phase,
  eyebrow,
  icon: Icon,
  title,
  subtitle,
  children,
  onComplete,
  ctaLabel = "Continuar",
}: EquiposShellProps) => (
  <div className="module-container">
    <div className="max-w-5xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 border border-welli-yellow/40 text-indigo-950 mb-6">
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold">
            Fase {phase} · {eyebrow}
          </span>
        </div>
        <h2 className="section-title">{title}</h2>
        {subtitle && (
          <p className="section-subtitle max-w-3xl mx-auto mt-4 text-indigo-950/80">{subtitle}</p>
        )}
      </motion.div>

      {children}

      <div className="flex justify-center pt-4">
        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 bg-welli-yellow text-indigo-950 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
        >
          {ctaLabel}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default EquiposShell;
