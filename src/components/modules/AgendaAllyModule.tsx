import { motion } from "framer-motion";
import { ArrowRight, CalendarX, CalendarCheck, TrendingUp, Sparkles } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const emptySlots = [
  { time: "8:00 AM", status: "empty" },
  { time: "9:00 AM", status: "filled" },
  { time: "10:00 AM", status: "empty" },
  { time: "11:00 AM", status: "empty" },
  { time: "12:00 PM", status: "filled" },
  { time: "2:00 PM", status: "empty" },
  { time: "3:00 PM", status: "empty" },
  { time: "4:00 PM", status: "filled" },
];

const fullSlots = [
  { time: "8:00 AM", status: "filled" },
  { time: "9:00 AM", status: "filled" },
  { time: "10:00 AM", status: "filled" },
  { time: "11:00 AM", status: "filled" },
  { time: "12:00 PM", status: "filled" },
  { time: "2:00 PM", status: "filled" },
  { time: "3:00 PM", status: "filled" },
  { time: "4:00 PM", status: "filled" },
];

const AgendaAllyModule = ({ onComplete }: ModuleProps) => {
  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 text-foreground mb-6">
            <Sparkles className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-medium">Jobs to be Done</span>
          </div>
          <h2 className="section-title">Welli: Tu aliado en la agenda</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Welli no es un crédito. Es el aliado que convierte los espacios vacíos de tu agenda en tratamientos realizados.
          </p>
        </motion.div>

        {/* Contrast Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Without Welli */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border-2 border-danger/30 bg-gradient-to-br from-danger/5 to-danger/10 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-danger/20">
                <CalendarX className="w-6 h-6 text-danger" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-danger">Sin Welli</h3>
                <p className="text-sm text-muted-foreground">Agenda con huecos = Dinero perdido</p>
              </div>
            </div>

            <div className="space-y-2">
              {emptySlots.map((slot, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    slot.status === "empty"
                      ? "bg-danger/10 border border-danger/20"
                      : "bg-card border border-border"
                  }`}
                >
                  <span className="text-xs font-mono text-muted-foreground w-16">{slot.time}</span>
                  {slot.status === "empty" ? (
                    <span className="text-sm text-danger font-medium">💸 Espacio vacío — paciente no pudo pagar</span>
                  ) : (
                    <span className="text-sm text-muted-foreground">✓ Paciente atendido</span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-danger/10 text-center">
              <p className="text-2xl font-bold text-danger">5 de 8 vacíos</p>
              <p className="text-sm text-danger/80">≈ $2.850.000/día perdidos</p>
            </div>
          </motion.div>

          {/* With Welli */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border-2 border-success/30 bg-gradient-to-br from-success/5 to-welli-yellow/10 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-success/20">
                <CalendarCheck className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-success">Con Welli</h3>
                <p className="text-sm text-muted-foreground">Agenda llena = Crecimiento</p>
              </div>
            </div>

            <div className="space-y-2">
              {fullSlots.map((slot, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-success/10 border border-success/20"
                >
                  <span className="text-xs font-mono text-muted-foreground w-16">{slot.time}</span>
                  <span className="text-sm text-success font-medium">✅ Paciente financiado con Welli</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-success/10 text-center">
              <p className="text-2xl font-bold text-success">8 de 8 llenos</p>
              <p className="text-sm text-success/80">+65% de pacientes recuperados</p>
            </div>
          </motion.div>
        </div>

        {/* JTBD Reframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-secondary/10 border-2 border-welli-yellow/30 text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-welli-yellow" />
            <span className="font-bold text-lg">El verdadero trabajo de Welli</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El paciente no quiere un crédito. Quiere{" "}
            <span className="font-bold text-foreground">hacerse el tratamiento hoy</span>.
            Tu clínica no quiere un intermediario. Quiere{" "}
            <span className="font-bold text-foreground">llenar la agenda</span>.
            Welli resuelve ambos trabajos.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Ir al Simulador de Cuotas</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgendaAllyModule;
