import { motion } from "framer-motion";
import { ArrowRight, Sparkles, DollarSign, X } from "lucide-react";
import { useState, useEffect } from "react";

interface ModuleProps {
  onComplete: () => void;
}

const Phase1Welcome = ({ onComplete }: ModuleProps) => {
  const [lostAmount, setLostAmount] = useState(0);
  const targetAmount = 2850000; // Example lost revenue per day
  
  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetAmount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetAmount) {
        setLostAmount(targetAmount);
        clearInterval(timer);
      } else {
        setLostAmount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calendar slots - some are "lost" (empty with crossed money)
  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'];
  const timeSlots = ['9:00', '10:00', '11:00', '12:00', '3:00', '4:00'];
  
  // Mark some slots as "lost" (true = lost opportunity)
  const lostSlots = [
    [false, true, false, false, true],
    [true, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, true],
    [true, false, false, true, false],
    [false, false, true, false, false],
  ];

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          {/* Welli Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-welli-yellow/30 border-2 border-welli-yellow/50 text-foreground mb-6"
          >
            <Sparkles className="w-5 h-5 text-welli-yellow" />
            <span className="text-sm font-bold">Welli Sales Clinic • Fase 1</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
          >
            El Secreto: Welli es el puente para ese
            <br />
            <span className="text-welli-yellow">65% que antes se iba</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            No vendas el total, vende la viabilidad. <span className="font-bold text-welli-yellow">Presenta Cuotas de Bienestar.</span>
          </motion.p>
        </motion.div>

        {/* Lost Agenda Monitor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg">
            {/* Monitor Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-danger animate-pulse" />
                <span className="text-sm font-semibold text-muted-foreground">Monitor de Agenda Perdida</span>
              </div>
              <span className="text-xs text-muted-foreground">Esta semana</span>
            </div>

            {/* Calendar Grid */}
            <div className="overflow-x-auto">
              <div className="min-w-[400px]">
                {/* Days Header */}
                <div className="grid grid-cols-6 gap-2 mb-2">
                  <div className="text-xs text-muted-foreground font-medium"></div>
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-xs font-bold text-foreground">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Time Slots Grid */}
                {timeSlots.map((time, rowIdx) => (
                  <div key={time} className="grid grid-cols-6 gap-2 mb-2">
                    <div className="text-xs text-muted-foreground font-medium flex items-center">
                      {time}
                    </div>
                    {weekDays.map((day, colIdx) => {
                      const isLost = lostSlots[rowIdx][colIdx];
                      return (
                        <motion.div
                          key={`${day}-${time}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + (rowIdx * 0.05) + (colIdx * 0.03) }}
                          className={`aspect-square rounded-lg flex items-center justify-center relative ${
                            isLost 
                              ? 'bg-danger/10 border-2 border-danger/30' 
                              : 'bg-success/10 border border-success/20'
                          }`}
                        >
                          {isLost ? (
                            <div className="relative">
                              <DollarSign className="w-4 h-4 text-danger/60" />
                              <X className="w-6 h-6 text-danger absolute -top-1 -left-1" strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-success/50" />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-danger/60" />
                  <X className="w-5 h-5 text-danger absolute -top-0.5 -left-0.5" strokeWidth={3} />
                </div>
                <span className="text-xs text-muted-foreground">Oportunidad perdida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success/50" />
                <span className="text-xs text-muted-foreground">Cita confirmada</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Impact Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-danger/10 via-danger/20 to-danger/10 border-2 border-danger/30 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Este espacio en la agenda le costó hoy a tu clínica
            </p>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="text-4xl md:text-5xl font-extrabold text-danger"
            >
              {formatCurrency(lostAmount)}
            </motion.div>
            <p className="text-xs text-muted-foreground mt-2">
              *Promedio basado en tratamientos no cerrados por precio
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="group inline-flex items-center gap-3 text-lg px-8 py-4 rounded-xl font-bold bg-welli-yellow text-welli-yellow-foreground hover:bg-welli-yellow/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Recuperar mi Agenda</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-6 text-sm text-muted-foreground">
            Fase 1 • El Método del "Sí" • 11 módulos
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Phase1Welcome;
