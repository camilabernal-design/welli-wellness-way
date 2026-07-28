import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const PLAZOS = [6, 12, 18, 24, 30, 36];
const MIN = 300000;
const MAX = 25000000;
const TASA = 0.02;

const cop = (n: number) =>
  "$" + Math.round(n).toLocaleString("es-CO", { maximumFractionDigits: 0 });

export default function SimuladorCuota({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [monto, setMonto] = useState(8500000);
  const [plazo, setPlazo] = useState(24);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) onComplete?.();
  }, [touched, onComplete]);

  const cuota = useMemo(() => {
    const i = TASA;
    const n = plazo;
    return (monto * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
  }, [monto, plazo]);

  const desembolso = monto * 0.96;

  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 md:p-8">
        <label className="text-sm font-semibold uppercase tracking-wider text-indigo-950">
          Monto del tratamiento
        </label>
        <p className="text-4xl font-bold text-indigo-950 mt-2">{cop(monto)}</p>
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={100000}
          value={monto}
          onChange={(e) => {
            setMonto(Number(e.target.value));
            setTouched(true);
          }}
          className="w-full mt-4 accent-welli-yellow h-2"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>{cop(MIN)}</span>
          <span>{cop(MAX)}</span>
        </div>

        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-950 mt-8">
          Plazo
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {PLAZOS.map((p) => (
            <button
              key={p}
              onClick={() => {
                setPlazo(p);
                setTouched(true);
              }}
              className={`px-5 py-3 rounded-xl border-2 text-lg font-semibold transition-all ${
                plazo === p
                  ? "bg-welli-yellow border-welli-yellow text-indigo-950"
                  : "bg-white border-slate-300 text-indigo-950 hover:border-welli-yellow"
              }`}
            >
              {p} meses
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4">Tasa 2% M.V.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border-2 p-8 border-[#DC2626] bg-[#DC2626]/5">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#DC2626]">
            El susto del paciente
          </p>
          <p className="text-4xl md:text-5xl font-bold text-[#DC2626] mt-4">
            {cop(monto)}
          </p>
          <p className="text-lg text-indigo-950 mt-3">Precio total del tratamiento</p>
        </div>
        <motion.div
          key={`${monto}-${plazo}`}
          initial={{ scale: 0.97, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border-2 p-8 border-[#22C55E] bg-[#22C55E]/10"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16A34A]">
            La solución Welli
          </p>
          <p className="text-4xl md:text-5xl font-bold text-indigo-950 mt-4">
            {cop(cuota)}
          </p>
          <p className="text-lg text-indigo-950 mt-3">
            al mes durante {plazo} meses
          </p>
        </motion.div>
      </div>

      <div className="rounded-2xl p-8 bg-[#EDE9FB] border border-[#C9BEF0]">
        <p className="text-lg text-indigo-950">
          Monto solicitado por el paciente:{" "}
          <span className="font-bold">{cop(monto)}</span>
        </p>
        <p className="text-lg text-indigo-950 mt-2">
          Valor a desembolsar a la clínica:{" "}
          <span className="font-bold">{cop(desembolso)}</span> (96%)
        </p>
        <p className="text-base text-indigo-950/80 mt-4">
          Welli solo cobra 4% por el servicio de financiación más exitoso del
          mercado, por alianza con Novo Nordisk.
        </p>
      </div>
    </div>
  );
}
