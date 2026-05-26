import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingDown, DollarSign } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useSession } from "../SessionContext";

interface Props { onNext: () => void; }

const specialtyDefaults: Record<string, { ticket: number; max: number }> = {
  odontologia: { ticket: 2_000_000, max: 15_000_000 },
  estetica: { ticket: 5_000_000, max: 25_000_000 },
  dermatologia: { ticket: 1_500_000, max: 8_000_000 },
  rehabilitacionOral: { ticket: 5_000_000, max: 30_000_000 },
  veterinaria: { ticket: 1_500_000, max: 8_000_000 },
  default: { ticket: 3_000_000, max: 20_000_000 },
};

const detectSpecialty = (raw: string) => {
  const s = (raw || "").toLowerCase();
  if (s.includes("rehab")) return specialtyDefaults.rehabilitacionOral;
  if (s.includes("dental") || s.includes("odonto")) return specialtyDefaults.odontologia;
  if (s.includes("estet")) return specialtyDefaults.estetica;
  if (s.includes("derma")) return specialtyDefaults.dermatologia;
  if (s.includes("vet")) return specialtyDefaults.veterinaria;
  return specialtyDefaults.default;
};

const formatCOP = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

const useCounter = (target: number, duration = 1500) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (target <= 0) { setValue(0); return; }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
};

const Module2PainCalculator = ({ onNext }: Props) => {
  const { allySpecialty, setSessionData } = useSession();
  const preset = useMemo(() => detectSpecialty(allySpecialty), [allySpecialty]);

  const [patients, setPatients] = useState(40);
  const [lossPct, setLossPct] = useState(30);
  const [ticket, setTicket] = useState(preset.ticket);
  const [revealed, setRevealed] = useState(false);

  const lostPatients = Math.round((patients * lossPct) / 100);
  const monthlyLoss = lostPatients * ticket;
  const annualLoss = monthlyLoss * 12;

  const animatedMonthly = useCounter(revealed ? monthlyLoss : 0);
  const animatedAnnual = useCounter(revealed ? annualLoss : 0);

  const handleReveal = () => {
    setSessionData({
      painCalculation: {
        patientsPerMonth: patients,
        lossPercent: lossPct,
        averageTicket: ticket,
        monthlyLoss,
        annualLoss,
      },
    });
    setRevealed(true);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 text-center">
        Hagamos una cuenta rápida
      </h2>

      <div className="space-y-6">
        {/* Pregunta 1 */}
        <div className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/5 p-6">
          <label className="flex items-center gap-2 font-bold text-indigo-950 mb-4">
            <Users className="w-5 h-5 text-welli-yellow" />
            ¿Cuántos pacientes valora usted al mes?
          </label>
          <Slider value={[patients]} onValueChange={(v) => setPatients(v[0])} min={10} max={200} step={5} />
          <p className="text-right font-display text-2xl font-bold text-indigo-950 mt-3">{patients} pacientes</p>
        </div>

        {/* Pregunta 2 */}
        <div className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/5 p-6">
          <label className="flex items-center gap-2 font-bold text-indigo-950 mb-4">
            <TrendingDown className="w-5 h-5 text-welli-yellow" />
            De esos, ¿cuántos no terminan tomando el tratamiento con usted?
          </label>
          <Slider value={[lossPct]} onValueChange={(v) => setLossPct(v[0])} min={10} max={70} step={5} />
          <div className="flex justify-between items-baseline mt-3">
            <span className="text-sm text-indigo-800">{lossPct}%</span>
            <span className="font-display text-xl font-bold text-indigo-950">
              {lostPatients} pacientes al mes no se tratan con usted
            </span>
          </div>
        </div>

        {/* Pregunta 3 */}
        <div className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/5 p-6">
          <label className="flex items-center gap-2 font-bold text-indigo-950 mb-4">
            <DollarSign className="w-5 h-5 text-welli-yellow" />
            ¿Cuál es su ticket promedio?
          </label>
          <Slider
            value={[ticket]}
            onValueChange={(v) => setTicket(v[0])}
            min={500_000}
            max={preset.max}
            step={100_000}
          />
          <p className="text-right font-display text-2xl font-bold text-indigo-950 mt-3">{formatCOP(ticket)}</p>
        </div>
      </div>

      {!revealed ? (
        <div className="text-center">
          <button
            onClick={handleReveal}
            className="inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
          >
            Ver la cuenta
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl bg-indigo-950 p-8 md:p-12 text-center space-y-4"
        >
          <p className="text-white/70 text-sm uppercase tracking-widest font-bold">Lo que se le va</p>
          <p className="font-display text-3xl md:text-5xl font-bold text-welli-yellow">
            {formatCOP(animatedMonthly)} <span className="text-xl md:text-2xl text-white/80">al mes</span>
          </p>
          <p className="font-display text-2xl md:text-3xl font-bold text-white">
            {formatCOP(animatedAnnual)} <span className="text-base md:text-lg text-white/80">al año</span>
          </p>

          <div className="pt-6">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 text-lg px-10 py-4 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
            >
              Continuar <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Module2PainCalculator;
