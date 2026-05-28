import { useState } from "react";
import { toast } from "sonner";
import { Copy, RefreshCw } from "lucide-react";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

const COLS = [
  {
    key: "result",
    label: "RESULTADO",
    opts: [
      "Va a sentir que su ropa le queda diferente, va a tener más energía, sus exámenes van a mejorar.",
      "Va a bajar peso de forma sostenida y va a evitar las comorbilidades.",
      "Va a recuperar control sobre su cuerpo y su alimentación.",
    ],
  },
  {
    key: "time",
    label: "TIEMPO",
    opts: [
      "Los primeros cambios los va a sentir en las primeras 4-6 semanas. Los cambios visibles hacia el mes 3. Resultado completo a los 12 meses.",
      "En 3 meses va a notar diferencia. En 6 meses los demás van a notarla.",
      "Es un proceso de 12 meses para resultados sostenibles.",
    ],
  },
  {
    key: "accomp",
    label: "ACOMPAÑAMIENTO",
    opts: [
      "No va a estar solo. Cada mes nos vemos para revisar cómo va y ajustar el tratamiento si es necesario.",
      "Vamos a seguir su evolución de cerca con seguimiento mensual.",
      "Su familia puede acompañarlo en las citas si quiere apoyo cercano.",
    ],
  },
] as const;

export default function ClosingPhraseBuilder({
  onComplete,
}: {
  onComplete: (s: string) => void;
}) {
  const [sel, setSel] = useState<Record<string, string>>({});

  const ready = Object.keys(sel).length === 3;
  const phrase = ready
    ? `${sel.result} ${sel.time} ${sel.accomp}`
    : "";

  const pick = (k: string, v: string) => {
    const next = { ...sel, [k]: v };
    setSel(next);
    if (Object.keys(next).length === 3) onComplete(`${next.result} ${next.time} ${next.accomp}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {COLS.map((c) => (
          <SoftBox key={c.key}>
            <p className="text-sm font-semibold text-indigo-950 uppercase tracking-wider mb-3">
              {c.label}
            </p>
            <div className="space-y-2">
              {c.opts.map((o) => (
                <button
                  key={o}
                  onClick={() => pick(c.key, o)}
                  className={`w-full text-left px-3 py-3 rounded-lg border text-sm leading-relaxed transition-all ${
                    sel[c.key] === o
                      ? "bg-welli-yellow border-welli-yellow text-indigo-950 font-semibold"
                      : "bg-white border-slate-300 text-indigo-950 hover:border-welli-yellow"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </SoftBox>
        ))}
      </div>

      {ready && (
        <HighlightBox>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-950 mb-3">
            Su frase de cierre
          </p>
          <p className="text-xl italic text-indigo-950 leading-relaxed">"{phrase}"</p>
          <div className="flex gap-3 mt-5 flex-wrap">
            <button
              onClick={() => {
                navigator.clipboard.writeText(phrase);
                toast.success("Frase copiada");
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-950 text-white text-sm font-semibold"
            >
              <Copy className="h-4 w-4" /> Copiar frase
            </button>
            <button
              onClick={() => setSel({})}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-slate-300 text-indigo-950 text-sm font-semibold"
            >
              <RefreshCw className="h-4 w-4" /> Probar otra combinación
            </button>
          </div>
        </HighlightBox>
      )}
    </div>
  );
}
