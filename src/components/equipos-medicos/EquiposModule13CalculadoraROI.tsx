import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Info, Target } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const fmt = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(
    Math.round(n),
  );

const EquiposModule13CalculadoraROI = ({ onComplete }: Props) => {
  const [valorEquipo, setValorEquipo] = useState(150_000_000);
  const [cobertura, setCobertura] = useState(70);
  const [plazo, setPlazo] = useState(36);
  const [tasaEA, setTasaEA] = useState(25);
  const [precioProc, setPrecioProc] = useState(900_000);
  const [costoProc, setCostoProc] = useState(250_000);
  const [procMes, setProcMes] = useState(12);

  const r = useMemo(() => {
    const monto = Math.min((valorEquipo * cobertura) / 100, 250_000_000);
    const im = Math.pow(1 + tasaEA / 100, 1 / 12) - 1;
    const cuota = monto > 0 ? (monto * im) / (1 - Math.pow(1 + im, -plazo)) : 0;
    const margenUnitario = Math.max(precioProc - costoProc, 0);
    const utilidadMes = margenUnitario * procMes;
    const flujoNeto = utilidadMes - cuota;
    const puntoEquilibrio = margenUnitario > 0 ? Math.ceil(cuota / margenUnitario) : 0;
    const utilidadPlazo = utilidadMes * plazo;
    const costoTotal = cuota * plazo + (valorEquipo - monto);
    const roi = costoTotal > 0 ? ((utilidadPlazo - costoTotal) / costoTotal) * 100 : 0;
    const mesesRecuperar = utilidadMes > 0 ? costoTotal / utilidadMes : 0;
    return { cuota, margenUnitario, utilidadMes, flujoNeto, puntoEquilibrio, roi, mesesRecuperar, costoTotal, utilidadPlazo };
  }, [valorEquipo, cobertura, plazo, tasaEA, precioProc, costoProc, procMes]);

  const viable = r.flujoNeto >= 0;

  const sliders = [
    { label: "Valor del equipo", value: valorEquipo, set: setValorEquipo, min: 20_000_000, max: 350_000_000, step: 5_000_000, format: fmt },
    { label: "% financiado por WELLI", value: cobertura, set: setCobertura, min: 30, max: 70, step: 5, format: (v: number) => `${v}%` },
    { label: "Plazo", value: plazo, set: setPlazo, min: 6, max: 36, step: 6, format: (v: number) => `${v} meses` },
    { label: "Tasa efectiva anual", value: tasaEA, set: setTasaEA, min: 18, max: 30, step: 1, format: (v: number) => `${v}% E.A.` },
    { label: "Precio al paciente por procedimiento", value: precioProc, set: setPrecioProc, min: 100_000, max: 5_000_000, step: 50_000, format: fmt },
    { label: "Costo variable por procedimiento", value: costoProc, set: setCostoProc, min: 0, max: 2_000_000, step: 25_000, format: fmt },
    { label: "Procedimientos al mes", value: procMes, set: setProcMes, min: 1, max: 100, step: 1, format: (v: number) => `${v} / mes` },
  ];

  return (
    <EquiposShell
      phase={2}
      eyebrow="Herramienta"
      icon={TrendingUp}
      title="Calculadora de retorno del equipo"
      subtitle="La pregunta que realmente le importa al médico no es cuánto cuesta la máquina, sino cuántos procedimientos al mes necesita para que se pague sola."
      onComplete={onComplete}
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-welli-yellow/40 bg-card p-6 md:p-8 shadow-sm space-y-6"
        >
          {sliders.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between mb-2 gap-4">
                <label className="text-sm font-bold text-indigo-950">{s.label}</label>
                <span className="text-sm font-bold text-primary whitespace-nowrap">
                  {s.format(s.value)}
                </span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={s.value}
                onChange={(e) => s.set(Number(e.target.value))}
                className="w-full accent-welli-yellow"
              />
            </div>
          ))}
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-indigo-950 p-8 text-white shadow-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-welli-yellow" />
              <p className="text-sm text-white/70 uppercase tracking-wider font-bold">
                Punto de equilibrio
              </p>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-welli-yellow">
              {r.puntoEquilibrio} procedimientos / mes
            </p>
            <p className="text-sm text-white/80 mt-2">
              Es lo mínimo que necesita hacer al mes para cubrir la cuota de {fmt(r.cuota)}.
            </p>

            <div className="space-y-3 mt-6">
              {[
                ["Margen por procedimiento", fmt(r.margenUnitario)],
                ["Utilidad mensual proyectada", fmt(r.utilidadMes)],
                ["Cuota mensual WELLI", fmt(r.cuota)],
                ["Flujo neto mensual", fmt(r.flujoNeto)],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between bg-white/10 rounded-xl px-4 py-3">
                  <span className="text-sm text-white/80">{k}</span>
                  <span className="text-sm font-bold">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-3xl border-2 p-6 ${
              viable
                ? "bg-green-500/10 border-green-500/50"
                : "bg-red-500/10 border-red-500/50"
            }`}
          >
            <p className="font-bold text-indigo-950 mb-2">
              {viable
                ? "El equipo se paga solo con la operación proyectada"
                : "Con estos números la cuota supera la utilidad del equipo"}
            </p>
            <p className="text-sm text-indigo-950/80">
              {viable
                ? `Después de pagar la cuota, al médico le quedan ${fmt(r.flujoNeto)} libres cada mes. Recupera la inversión total en ${r.mesesRecuperar.toFixed(1)} meses y el retorno sobre la inversión en el plazo es de ${r.roi.toFixed(0)}%.`
                : `Le faltan ${Math.max(r.puntoEquilibrio - procMes, 0)} procedimientos al mes para cubrir la cuota. Ajusta el plazo, el porcentaje financiado o revisa el volumen esperado antes de presentar la propuesta.`}
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-welli-yellow/15 border border-welli-yellow/40 p-6 flex items-start gap-3"
      >
        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm text-indigo-950/85">
          Usa siempre los números reales del médico: su precio, su costo y su volumen actual. Un
          escenario inflado destruye la confianza. Esta calculadora es una ayuda comercial estimada y
          no constituye una proyección financiera garantizada ni una oferta de crédito.
        </p>
      </motion.div>
    </EquiposShell>
  );
};

export default EquiposModule13CalculadoraROI;
