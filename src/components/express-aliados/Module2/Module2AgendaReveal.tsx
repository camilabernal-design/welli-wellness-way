import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSession } from "../SessionContext";

interface Props { onNext: () => void; }

type Phase = "today" | "lost" | "won";

const days = ["Lun", "Mar", "Mié", "Jue", "Vie"];
const hours = ["9:00", "10:00", "11:00", "12:00", "2:00", "3:00", "4:00"];
const lunchHourIndex = 3;

// [hourIndex, dayIndex]
type CellSpec = { hour: number; day: number; red: string; green: string };

const baseCells: CellSpec[] = [
  { hour: 2, day: 0, red: "Está muy caro", green: "Tratamiento iniciado" },
  { hour: 1, day: 1, red: "Lo voy a pensar", green: "Cuota aprobada" },
  { hour: 5, day: 2, red: "Nunca volvió", green: "Cliente recurrente" },
  { hour: 2, day: 3, red: "Buscaré opciones", green: "Eligió a usted" },
];

const premiumCells: CellSpec[] = [
  { hour: 2, day: 0, red: "Voy a pensarlo en familia", green: "Tratamiento iniciado" },
  { hour: 1, day: 1, red: "Lo consultaré con mi pareja", green: "Cuota aprobada" },
  { hour: 5, day: 2, red: "—", green: "Eligió a usted" },
  { hour: 2, day: 3, red: "Me da pena hablar de dinero", green: "Solucionado discreto" },
];

const Module2AgendaReveal = ({ onNext }: Props) => {
  const { archetype } = useSession();
  const cells = archetype === "premium" ? premiumCells : baseCells;
  const [phase, setPhase] = useState<Phase>("today");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("lost"), 3000);
    const t2 = setTimeout(() => setPhase("won"), 8500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const findCell = (h: number, d: number) => cells.findIndex((c) => c.hour === h && c.day === d);

  const cellStyleFor = (h: number, d: number) => {
    if (h === lunchHourIndex)
      return "bg-slate-100 border-slate-200 text-slate-400 italic";
    const idx = findCell(h, d);
    if (idx < 0) return "bg-blue-50 border-blue-100 text-slate-600";
    if (phase === "today") return "bg-blue-50 border-blue-100 text-slate-600";
    if (phase === "lost") return "bg-red-100 border-red-300 text-red-900";
    return "bg-green-100 border-green-400 text-green-900";
  };

  const cellText = (h: number, d: number): { text: string; sub?: string } => {
    if (h === lunchHourIndex) return { text: "Almuerzo" };
    const idx = findCell(h, d);
    if (idx < 0 || phase === "today") return { text: "Cita" };
    const c = cells[idx];
    if (phase === "lost") return { text: c.red === "—" ? "(silencio)" : c.red, sub: "✕" };
    return { text: c.green, sub: "✓" };
  };

  // Subtítulo por arquetipo
  const lostFooter =
    archetype === "premium"
      ? "Cuatro pacientes que admiraban su trabajo. Cuatro silencios. La misma realidad."
      : "Cuatro pacientes. Cuatro razones. La misma realidad.";

  const wonFooter =
    archetype === "sin-aliados"
      ? "Esto pasa en consultas sin aliados financieros. Lo que va a ver ahora es lo que pasa cuando uno entra al juego."
      : "Welli convierte el 'lo voy a pensar' en 'cuota aprobada'. Sin que usted tenga que bajar su precio.";

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-indigo-950">
          {phase === "today"
            ? "Esta es una semana en su consulta."
            : phase === "lost"
            ? "La realidad oculta detrás de esos espacios."
            : "Ahora veamos esa misma semana con Welli."}
        </h2>
        <p className="text-sm text-slate-500">Semana del 27 al 31 de mayo</p>
      </div>

      {/* Calendario */}
      <div className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden shadow-sm">
        {/* Header de días */}
        <div className="grid grid-cols-[60px_repeat(5,1fr)] bg-slate-50 border-b border-slate-200">
          <div />
          {days.map((d) => (
            <div key={d} className="py-3 text-center font-bold text-sm text-indigo-950">
              {d}
            </div>
          ))}
        </div>

        {/* Filas de horas */}
        {hours.map((h, hi) => (
          <div
            key={h}
            className="grid grid-cols-[60px_repeat(5,1fr)] border-b border-slate-100 last:border-b-0"
          >
            <div className="py-2 text-right pr-2 text-xs text-slate-500 font-medium border-r border-slate-100 flex items-start justify-end pt-2">
              {h}
            </div>
            {days.map((_, di) => {
              const style = cellStyleFor(hi, di);
              const content = cellText(hi, di);
              return (
                <motion.div
                  key={`${hi}-${di}-${phase}`}
                  initial={{ opacity: phase === "today" ? 0 : 1, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: phase === "today" ? (hi * 5 + di) * 0.03 : findCell(hi, di) * 0.6,
                  }}
                  className={`border-l border-slate-100 m-0.5 rounded-md p-2 min-h-[50px] flex flex-col items-center justify-center text-center text-xs font-semibold ${style}`}
                >
                  {content.sub && phase !== "today" && findCell(hi, di) >= 0 && (
                    <span className="text-base leading-none mb-1">{content.sub}</span>
                  )}
                  <span className="leading-tight">{content.text}</span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {phase === "lost" && (
          <motion.div
            key="lost-foot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className="text-center space-y-2"
          >
            <p className="font-display text-lg italic text-indigo-800">{lostFooter}</p>
            <p className="text-sm text-slate-500">
              Cuatro espacios que valoró usted con su tiempo, su experiencia, su conocimiento clínico — y se fueron.
            </p>
          </motion.div>
        )}
        {phase === "won" && (
          <motion.div
            key="won-foot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center space-y-2"
          >
            <p className="font-display text-xl font-bold text-indigo-950">
              Los mismos cuatro pacientes. Otra historia.
            </p>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">{wonFooter}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "won" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Continuar <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Module2AgendaReveal;
