import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, ExternalLink, Award, Home } from "lucide-react";
import { useV2Analytics } from "@/hooks/useV2Analytics";

interface ModuleProps { onComplete: () => void; }

const checklist = [
  "Las 3 preguntas de indagación",
  "Identificar los 3 arquetipos",
  "Presentar la plataforma (flujo normal, Welli Check, portal)",
  "Los 3 criterios mínimos de perfilamiento",
  "Manejo de objeciones del paciente",
  "Manejo de objeciones del doctor",
  "Cierre con activación cerrada",
  "Estructura de la segunda sesión",
];

const ClinicaV2Module9Certification = ({ onComplete }: ModuleProps) => {
  const { markComplete } = useV2Analytics(9, "Checklist y Certificación");
  const [name, setName] = useState("");

  const downloadCert = () => {
    const today = new Date().toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Certificado Welli Clínica 2.0</title>
<style>body{font-family:Inter,sans-serif;padding:60px;background:#FFFBE6;color:#1e1b4b;text-align:center}
.cert{border:8px solid #FFCE00;padding:60px;border-radius:24px;background:white;max-width:800px;margin:auto}
h1{font-size:42px;margin:0}h2{color:#FFCE00;font-size:28px}p{font-size:18px}.name{font-size:36px;font-weight:bold;margin:30px 0;border-bottom:2px solid #FFCE00;display:inline-block;padding:8px 24px}</style>
</head><body><div class="cert"><h2>WELLI</h2><h1>Certificado de finalización</h1><p>Otorgado a</p>
<div class="name">${name || "Mariana"}</div><p>por completar la</p><h2>Clínica de Ventas 2.0 — Piloto</h2>
<p>${today}</p></div></body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Certificado-Welli-Clinica-2.0-${name || "Mariana"}.html`;
    a.click();
    URL.revokeObjectURL(url);
    markComplete();
  };

  return (
    <div className="module-container">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-8">
          <Award className="w-16 h-16 text-welli-yellow mx-auto mb-3" />
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            ¡Lo lograste! <span className="text-welli-yellow">Clínica 2.0</span> completa
          </h1>
          <p className="text-indigo-800">Esto es todo lo que ya dominas:</p>
        </motion.div>

        <div className="bg-card border-2 border-welli-yellow/40 rounded-2xl p-6 mb-6">
          {checklist.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 py-2 border-b border-border last:border-0"
            >
              <CheckCircle2 className="w-5 h-5 text-welli-yellow flex-shrink-0" />
              <span className="text-indigo-950">{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="bg-welli-yellow/10 border-2 border-welli-yellow/40 rounded-2xl p-6 mb-6">
          <label className="block text-sm font-bold text-indigo-950 mb-2">Tu nombre para el certificado</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Mariana Pérez"
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-indigo-950 mb-4 focus:outline-none focus:border-welli-yellow"
          />
          <button
            onClick={downloadCert}
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:scale-[1.02] transition-all shadow-lg"
          >
            <Download className="w-5 h-5" /> Descargar certificado
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <a
            href="https://docs.google.com/forms"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-secondary bg-secondary/10 text-indigo-950 font-bold hover:bg-secondary/20 transition-all"
          >
            <ExternalLink className="w-4 h-4" /> Probar en mi próxima capacitación
          </a>
          <button
            onClick={() => { markComplete(); onComplete(); }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-border bg-card text-indigo-950 font-bold hover:bg-muted transition-all"
          >
            <Home className="w-4 h-4" /> Volver al Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicaV2Module9Certification;
