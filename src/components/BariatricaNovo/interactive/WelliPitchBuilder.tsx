import { useState } from "react";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import { HighlightBox, SoftBox } from "@/components/BariatricaNovo/HighlightBox";

const COLS = [
  {
    key: "costo",
    label: "CÓMO ANUNCIA EL COSTO",
    opts: [
      "El tratamiento son $4 millones",
      "La inversión en el programa completo es $4 millones",
      "El paquete tiene un valor de $4 millones",
    ],
  },
  {
    key: "cuota",
    label: "CÓMO PRESENTA LA CUOTA",
    opts: [
      "y se puede pagar en cuotas de $150k al mes",
      "y aquí trabajamos con cuota fija mensual desde $150k",
      "y le doy una opción de pago a 24 cuotas",
    ],
  },
  {
    key: "invitacion",
    label: "CÓMO INVITA A DAR EL PASO",
    opts: [
      "¿Le interesa?",
      "¿Vemos si aplica? Toma 30 segundos.",
      "¿Cuándo quiere empezar?",
    ],
  },
] as const;

export default function WelliPitchBuilder({
  onComplete,
}: {
  onComplete: (s: string) => void;
}) {
  const [sel, setSel] = useState<Record<string, string>>({});
  const ready = Object.keys(sel).length === 3;
  const phrase = ready ? `${sel.costo}, ${sel.cuota}. ${sel.invitacion}` : "";

  const pick = (k: string, v: string) => {
    const next = { ...sel, [k]: v };
    setSel(next);
    if (Object.keys(next).length === 3) onComplete(phrase);
  };

  return (
    <div className="space-y-5">
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
                className={`w-full text-left px-4 py-3 rounded-lg border-2 ${
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
      {ready && (
        <HighlightBox>
          <p className="text-sm font-semibold text-indigo-950 uppercase tracking-wider mb-3">
            Su frase
          </p>
          <p className="text-xl italic text-indigo-950 leading-relaxed">"{phrase}"</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(phrase);
              toast.success("Frase copiada");
            }}
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-950 text-white text-sm font-semibold"
          >
            <Copy className="h-4 w-4" /> Copiar frase
          </button>
        </HighlightBox>
      )}
    </div>
  );
}
