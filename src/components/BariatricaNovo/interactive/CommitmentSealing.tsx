import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { HighlightBox, PracticeBox } from "@/components/BariatricaNovo/HighlightBox";

const COMMITMENTS = [
  {
    n: 1,
    title: "Cotizar siempre en cuotas mensuales fijas, junto con el monto total.",
  },
  {
    n: 2,
    title:
      "Integrar manejo farmacológico en al menos 2 de mis 3 packs principales.",
  },
  {
    n: 3,
    title: "Usar Welli Check con el 100% de los pacientes que no pagan de contado.",
  },
];

export default function CommitmentSealing({
  onComplete,
}: {
  onComplete: (d: { name: string; clinic: string; date: string }) => void;
}) {
  const [accepted, setAccepted] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [clinic, setClinic] = useState("");
  const [sealed, setSealed] = useState(false);

  const allAccepted = accepted.length === COMMITMENTS.length;

  const seal = () => {
    if (!name || !clinic) return;
    setSealed(true);
    const date = new Date().toLocaleDateString("es-CO", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    onComplete({ name, clinic, date });
    toast.success("Compromiso sellado");
  };

  return (
    <div className="space-y-5">
      <p className="text-lg text-slate-700">
        Toque cada compromiso para activarlo.
      </p>
      {COMMITMENTS.map((c) => {
        const on = accepted.includes(c.n);
        return (
          <motion.button
            key={c.n}
            whileTap={{ scale: 0.99 }}
            onClick={() =>
              setAccepted((s) => (s.includes(c.n) ? s : [...s, c.n]))
            }
            className={`w-full text-left rounded-2xl border-2 p-6 transition-all ${
              on
                ? "bg-welli-yellow/20 border-welli-yellow"
                : "bg-white border-slate-300 hover:border-welli-yellow"
            }`}
          >
            <div className="flex gap-4 items-start">
              <div
                className={`h-7 w-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  on ? "bg-welli-yellow border-welli-yellow" : "border-slate-400"
                }`}
              >
                {on && <Check className="h-5 w-5 text-indigo-950" />}
              </div>
              <div>
                <p className="text-sm font-semibold text-indigo-950 uppercase tracking-wider">
                  Compromiso {c.n} {on && "— Aceptado"}
                </p>
                <p className="text-lg text-indigo-950 mt-1">{c.title}</p>
              </div>
            </div>
          </motion.button>
        );
      })}

      <AnimatePresence>
        {allAccepted && !sealed && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <HighlightBox className="space-y-4">
              <p className="text-2xl font-bold text-indigo-950">Firme su compromiso</p>
              <div>
                <label className="text-sm font-semibold uppercase tracking-wider text-indigo-950">
                  Nombre completo
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 mt-1 bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-semibold uppercase tracking-wider text-indigo-950">
                  Clínica
                </label>
                <Input
                  value={clinic}
                  onChange={(e) => setClinic(e.target.value)}
                  className="h-12 mt-1 bg-white"
                />
              </div>
              <button
                onClick={seal}
                disabled={!name || !clinic}
                className="bg-welli-yellow text-indigo-950 font-semibold px-6 py-3 rounded-xl disabled:opacity-40"
              >
                Sellar mi compromiso
              </button>
            </HighlightBox>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sealed && (
          <motion.div
            initial={{ rotateY: 0, opacity: 0 }}
            animate={{ rotateY: 360, opacity: 1 }}
            transition={{ duration: 1.1 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <PracticeBox>
              <div className="flex items-center gap-3">
                <Check className="h-8 w-8 text-accent" />
                <p className="text-2xl font-bold text-indigo-950">
                  COMPROMISO SELLADO
                </p>
              </div>
              <div className="mt-5 space-y-1 text-lg text-indigo-950">
                <p>
                  <span className="font-semibold">Dr.</span> {name}
                </p>
                <p>
                  <span className="font-semibold">Clínica:</span> {clinic}
                </p>
                <p>
                  <span className="font-semibold">Fecha:</span>{" "}
                  {new Date().toLocaleDateString("es-CO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="mt-5 flex gap-3 flex-wrap">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-lg bg-indigo-950 text-white text-sm font-semibold"
                >
                  Descargar / Imprimir
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Mi compromiso Welli + Novo Nordisk:\nDr. ${name} — ${clinic}\n\n1. ${COMMITMENTS[0].title}\n2. ${COMMITMENTS[1].title}\n3. ${COMMITMENTS[2].title}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold"
                >
                  Enviar por WhatsApp
                </a>
              </div>
            </PracticeBox>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
