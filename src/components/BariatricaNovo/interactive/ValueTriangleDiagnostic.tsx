import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

const AXES = [
  { key: "result", label: "RESULTADO", sub: "qué va a vivir" },
  { key: "time", label: "TIEMPO", sub: "cuándo lo va a ver" },
  { key: "accomp", label: "ACOMPAÑAMIENTO", sub: "no estará solo" },
] as const;

type Scores = { result: number; time: number; accomp: number };

function profile(s: Scores) {
  const entries = Object.entries(s) as [keyof Scores, number][];
  const max = entries.reduce((a, b) => (b[1] > a[1] ? b : a));
  const low = entries.filter(([, v]) => v <= 5).map(([k]) => k);
  const labelMap: Record<keyof Scores, string> = {
    result: "RESULTADO",
    time: "TIEMPO",
    accomp: "ACOMPAÑAMIENTO",
  };
  if (entries.every(([, v]) => v >= 8))
    return {
      title: "Patrón sólido",
      body: "Hoy buscamos refinamiento, no transformación.",
    };
  if (entries.every(([, v]) => v <= 4))
    return {
      title: "Mayor oportunidad de impacto",
      body: "Cada vértice que suba mueve cifras.",
    };
  return {
    title: `Fuerte en: ${labelMap[max[0]]}`,
    body: `A reforzar: ${low.map((k) => labelMap[k]).join(", ") || "ninguno"}. El 60% de doctores tiene este mismo patrón. Es lo que vamos a corregir en su próxima consulta.`,
  };
}

export default function ValueTriangleDiagnostic({
  onComplete,
}: {
  onComplete: (s: Scores) => void;
}) {
  const [s, setS] = useState<Scores>({ result: 5, time: 5, accomp: 5 });
  const [done, setDone] = useState(false);

  // Triangle SVG. Center 100,100. Each axis points at angle.
  const cx = 100,
    cy = 100;
  const angles = [-90, 30, 150]; // result top, time bottom-right, accomp bottom-left
  const pts = [s.result, s.time, s.accomp].map((v, i) => {
    const r = 30 + (v / 10) * 60;
    const a = (angles[i] * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  const poly = pts.map((p) => p.join(",")).join(" ");

  const handleChange = (k: keyof Scores, v: number) =>
    setS((p) => ({ ...p, [k]: v }));

  const finalize = () => {
    setDone(true);
    onComplete(s);
  };

  const meta = profile(s);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          {AXES.map((a) => (
            <div key={a.key}>
              <div className="flex justify-between text-sm font-semibold text-indigo-950">
                <span>
                  {a.label}{" "}
                  <span className="text-slate-500 font-normal">({a.sub})</span>
                </span>
                <span className="text-welli-yellow-foreground bg-welli-yellow px-2 rounded">
                  {s[a.key]}
                </span>
              </div>
              <Slider
                value={[s[a.key]]}
                min={1}
                max={10}
                step={1}
                onValueChange={(x) => handleChange(a.key, x[0])}
                className="mt-2"
              />
            </div>
          ))}
          <button
            onClick={finalize}
            className="mt-2 bg-welli-yellow text-indigo-950 font-semibold px-6 py-3 rounded-xl"
          >
            Ver mi perfil
          </button>
        </div>
        <SoftBox className="flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-full max-w-[260px]">
            <polygon
              points="100,10 178,150 22,150"
              fill="none"
              stroke="#cbd5e1"
              strokeDasharray="4 4"
            />
            <motion.polygon
              points={poly}
              fill="hsl(48 100% 50% / 0.35)"
              stroke="hsl(48 100% 50%)"
              strokeWidth="2"
              animate={{ points: poly }}
              transition={{ duration: 0.3 }}
            />
            {AXES.map((a, i) => {
              const ang = (angles[i] * Math.PI) / 180;
              return (
                <text
                  key={a.key}
                  x={cx + 92 * Math.cos(ang)}
                  y={cy + 92 * Math.sin(ang)}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#1e1b4b"
                  fontWeight="bold"
                >
                  {a.label}
                </text>
              );
            })}
          </svg>
        </SoftBox>
      </div>

      {done && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <HighlightBox>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-950">
              Su perfil
            </p>
            <p className="text-2xl font-bold text-indigo-950 mt-2">{meta.title}</p>
            <p className="text-lg text-indigo-950 mt-3 leading-relaxed">{meta.body}</p>
          </HighlightBox>
        </motion.div>
      )}
    </div>
  );
}
