import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ProgressBarProps {
  currentModule: number;
  totalModules: number;
  moduleNames: string[];
}

const ProgressBar = ({ currentModule, totalModules, moduleNames }: ProgressBarProps) => {
  const progress = (currentModule / totalModules) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border px-4 py-3 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">W</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-foreground text-sm md:text-base">
                Clínica de Ventas Welli
              </h1>
              <p className="text-xs text-muted-foreground hidden md:block">
                {moduleNames[currentModule - 1] || "Bienvenido"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              {currentModule}/{totalModules}
            </span>
            <CheckCircle2 className="w-5 h-5 text-primary" />
          </div>
        </div>
        
        <div className="progress-bar-container">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Simplified progress indicators for many modules */}
        <div className="hidden lg:flex justify-between mt-3 gap-1">
          {moduleNames.map((name, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className={`w-2 h-2 rounded-full transition-colors ${
                  index + 1 <= currentModule
                    ? "bg-primary"
                    : "bg-border"
                }`}
                animate={index + 1 === currentModule ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.5, repeat: index + 1 === currentModule ? Infinity : 0, repeatDelay: 1 }}
              />
            </div>
          ))}
        </div>

        {/* Mobile compact view */}
        <div className="flex lg:hidden justify-center mt-2 gap-1">
          {Array.from({ length: Math.min(totalModules, 10) }).map((_, index) => {
            const actualIndex = Math.floor((index / 10) * totalModules);
            const isActive = currentModule > actualIndex;
            const isCurrent = Math.floor(((currentModule - 1) / totalModules) * 10) === index;
            
            return (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  isActive || isCurrent ? "bg-primary" : "bg-border"
                } ${isCurrent ? "ring-2 ring-primary/30" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;