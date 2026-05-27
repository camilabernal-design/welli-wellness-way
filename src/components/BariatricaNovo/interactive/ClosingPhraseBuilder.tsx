import { useState } from "react";
import { toast } from "sonner";
import { Copy, RefreshCw } from "lucide-react";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

const COLS = [
  {
    key: "result",
    label: "RESULTADO",
    opts: [
      "Bajar 15 kilos",
      "Recuperar energía",
      "Mejorar HbA1c",
      "Reducir 1 talla",
    ],
  },
  {
    key: "time",
    label: "TIEMPO",
    opts: [
      "En 6 meses",
      "En 3 meses",
      "En el primer mes va a sentir",
      "En 12 meses sostenido",
    ],
  },
  {
    key: "accomp",
    label: "ACOMPAÑAMIENTO",
    opts: [
      "Con seguimiento mensual",
      "Con su equipo de salud",
      "Con su familia presente",
      "Con plan personalizado",
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
    ? `Lo que vamos a lograr juntos es que usted ${sel.result.toUpperCase()}. ${sel.time.charAt(0).toUpperCase() + sel.time.slice(1)} va a notar el cambio. Y va a hacerlo ${sel.accomp.toLowerCase()} acompañándolo cada paso.`
    : "";

  const pick = (k: string, v: string) => {
    const next = { ...sel, [k]: v };
    setSel(next);
    if (Object.keys(next).length === 3) onComplete(phrase);
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
                  className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-all ${
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
            Su frase
          </p>
          <p className="text-xl italic text-indigo-950 leading-relaxed">"{phrase}"</p>
          <div className="flex gap-3 mt-5">
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
              <RefreshCw className="h-4 w-4" /> Probar otra combo
            </button>
          </div>
        </HighlightBox>
      )}
    </div>
  );
}
