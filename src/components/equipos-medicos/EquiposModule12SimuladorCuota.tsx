import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Info } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const fmt = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(
    Math.round(n),
  );

const EquiposModule12SimuladorCuota = ({ onComplete }: Props) => {
  const [valorEquipo, setValorEquipo] = useState(150_000_000);
  const [cobertura, setCobertura] = useState(70);
  const [plazo, setPlazo] = useState(36);
  const [tasaEA, setTasaEA] = useState(25);

  const { montoFinanciado, cuotaInicial, cuota, totalPagado, intereses } = useMemo(() => {
    const monto = Math.min((valorEquipo * cobertura) / 100, 250_000_000);
    const inicial = valorEquipo - monto;
    const im = Math.pow(1 + tasaEA / 100, 1 / 12) - 1;
    const c = monto > 0 ? (monto * im) / (1 - Math.pow(1 + im, -plazo)) : 0;
    return {
      montoFinanciado: monto,
      cuotaInicial: inicial,
      cuota: c,
      totalPagado: c * plazo,
      intereses: c * plazo - monto,
    };
  }, [valorEquipo, cobertura, plazo, tasaEA]);

  const topeAplicado = (valorEquipo * cobertura) / 100 > 250_000_000;

  return (
    <EquiposShell
      phase={2}
      eyebrow="Herramienta"
      icon={Calculator}
      title="Simulador de cuota"
      subtitle="Muéstrale al médico su cuota mensual estimada en vivo. Es la forma más rápida de pasar de 'cuánto cuesta' a 'cuánto me vale al mes'."
      onComplete={onComplete}
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-welli-yellow/40 bg-card p-6 md:p-8 shadow-sm space-y-7"
        >
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-indigo-950">Valor del equipo</label>
              <span className="text-sm font-bold text-primary">{fmt(valorEquipo)}</span>
            </div>
            <input
              type="range"
              min={20_000_000}
              max={350_000_000}
              step={5_000_000}
              value={valorEquipo}
              onChange={(e) => setValorEquipo(Number(e.target.value))}
              className="w-full accent-welli-yellow"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-indigo-950">% financiado por WELLI</label>
              <span className="text-sm font-bold text-primary">{cobertura}%</span>
            </div>
            <input
              type="range"
              min={30}
              max={70}
              step={5}
              value={cobertura}
              onChange={(e) => setCobertura(Number(e.target.value))}
              className="w-full accent-welli-yellow"
            />
            <p className="text-xs text-indigo-950/60 mt-1">Máximo 70% del valor del equipo.</p>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-indigo-950">Plazo</label>
              <span className="text-sm font-bold text-primary">{plazo} meses</span>
            </div>
            <input
              type="range"
              min={6}
              max={36}
              step={6}
              value={plazo}
              onChange={(e) => setPlazo(Number(e.target.value))}
              className="w-full accent-welli-yellow"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-indigo-950">Tasa efectiva anual</label>
              <span className="text-sm font-bold text-primary">{tasaEA}% E.A.</span>
            </div>
            <input
              type="range"
              min={18}
              max={30}
              step={1}
              value={tasaEA}
              onChange={(e) => setTasaEA(Number(e.target.value))}
              className="w-full accent-welli-yellow"
            />
            <p className="text-xs text-indigo-950/60 mt-1">
              La tasa final depende del perfil de riesgo aprobado por WELLI.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-indigo-950 p-8 text-white shadow-xl flex flex-col justify-center"
        >
          <p className="text-sm text-white/70 uppercase tracking-wider font-bold">Cuota mensual estimada</p>
          <p className="text-4xl md:text-5xl font-bold text-welli-yellow mt-2 mb-6">{fmt(cuota)}</p>

          <div className="space-y-3">
            {[
              ["Monto financiado por WELLI", fmt(montoFinanciado)],
              ["Cuota inicial del cliente", fmt(cuotaInicial)],
              ["Total pagado en el plazo", fmt(totalPagado)],
              ["Costo financiero estimado", fmt(intereses)],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between bg-white/10 rounded-xl px-4 py-3">
                <span className="text-sm text-white/80">{k}</span>
                <span className="text-sm font-bold">{v}</span>
              </div>
            ))}
          </div>

          {topeAplicado && (
            <p className="text-xs text-welli-yellow mt-4">
              Se aplicó el tope máximo de financiación de $250M COP.
            </p>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-welli-yellow/15 border border-welli-yellow/40 p-6 flex items-start gap-3"
      >
        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm text-indigo-950/85">
          Esta simulación es <span className="font-bold">estimada y educativa</span>: no incluye
          garantía FNG, seguro de vida ni otros costos asociados, y no constituye una oferta de
          crédito. La cuota definitiva se liquida en la plataforma al momento de la aprobación.
        </p>
      </motion.div>
    </EquiposShell>
  );
};

export default EquiposModule12SimuladorCuota;
