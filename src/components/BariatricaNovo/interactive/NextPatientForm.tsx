import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

const COMORB = [
  "Diabetes / Prediabetes",
  "Hipertensión",
  "Dislipidemia",
  "Apnea del sueño",
  "Ninguna",
];

const REASONS = [
  "Recomendación de otro especialista",
  "Frustración con dietas/intentos previos",
  "Comorbilidad descontrolada",
  "Razón estética/de imagen",
  "Otro",
];

function suggest(bmi: number, comorb: string[]) {
  if (bmi >= 40) return { pack: 1, why: "IMC ≥ 40 — candidato quirúrgico." };
  if (bmi < 30)
    return {
      pack: 0,
      why: "Su caso podría no ser candidato bariátrico — consulte criterios clínicos antes.",
    };
  const real = comorb.filter((c) => c !== "Ninguna");
  if (real.length >= 1)
    return {
      pack: 3,
      why: `IMC ${bmi} + ${real.length} comorbilidad(es) — Pack metabólico integral.`,
    };
  return { pack: 2, why: `IMC ${bmi} sin comorbilidades — Pack preventivo.` };
}

export default function NextPatientForm({ onComplete }: { onComplete: () => void }) {
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState("");
  const [com, setCom] = useState<string[]>([]);
  const [reason, setReason] = useState("");
  const [result, setResult] = useState<{ pack: number; why: string } | null>(null);

  const ready = age && bmi && reason;
  const toggle = (c: string) =>
    setCom((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  const submit = () => {
    const r = suggest(parseFloat(bmi), com);
    setResult(r);
    onComplete();
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-indigo-950 uppercase tracking-wider">
            Edad aproximada
          </label>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="h-12 mt-2 bg-white"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-indigo-950 uppercase tracking-wider">
            IMC estimado
          </label>
          <Input
            type="number"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
            className="h-12 mt-2 bg-white"
          />
        </div>
      </div>

      <SoftBox>
        <p className="text-sm font-semibold text-indigo-950 uppercase tracking-wider mb-3">
          Comorbilidades
        </p>
        <div className="grid md:grid-cols-2 gap-2">
          {COMORB.map((c) => (
            <label
              key={c}
              className="flex items-center gap-3 cursor-pointer text-indigo-950"
            >
              <Checkbox checked={com.includes(c)} onCheckedChange={() => toggle(c)} />
              {c}
            </label>
          ))}
        </div>
      </SoftBox>

      <SoftBox>
        <p className="text-sm font-semibold text-indigo-950 uppercase tracking-wider mb-3">
          Motivo principal de consulta
        </p>
        <div className="space-y-2">
          {REASONS.map((r) => (
            <button
              key={r}
              onClick={() => setReason(r)}
              className={`w-full text-left px-4 py-2.5 rounded-lg border-2 text-base ${
                reason === r
                  ? "bg-welli-yellow border-welli-yellow text-indigo-950 font-semibold"
                  : "bg-white border-slate-300 text-indigo-950 hover:border-welli-yellow"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </SoftBox>

      <button
        onClick={submit}
        disabled={!ready}
        className="bg-welli-yellow text-indigo-950 font-semibold px-6 py-3 rounded-xl disabled:opacity-40"
      >
        Ver sugerencia de pack
      </button>

      {result && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <HighlightBox>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-950">
              Sugerencia
            </p>
            <p className="text-3xl font-bold text-indigo-950 mt-2">
              {result.pack === 0 ? "Revisar criterio clínico" : `Pack ${result.pack}`}
            </p>
            <p className="text-lg text-indigo-950 mt-3">{result.why}</p>
            {result.pack > 0 && (
              <div className="mt-5 p-4 rounded-xl bg-white border border-welli-yellow/50">
                <p className="text-sm text-slate-600 uppercase tracking-wider font-semibold">
                  Frase sugerida para abrir
                </p>
                <p className="text-lg italic text-indigo-950 mt-2">
                  "Lo que veo en su caso es que hay varios factores trabajando al
                  tiempo, y mi recomendación clínica es el Pack {result.pack}."
                </p>
              </div>
            )}
          </HighlightBox>
        </motion.div>
      )}
    </div>
  );
}
