import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Download, BarChart3 } from "lucide-react";

interface Props { onComplete: () => void; }

const competencies = [
  'Aplicar los 3 principios rectores en cada sesión',
  'Hacer las 3 preguntas diagnósticas obligatorias',
  'Identificar arquetipos A, B y C en menos de 5 min',
  'Encadenar preguntas de profundidad',
  'Distribuir tiempo según estructura de 25 min',
  'Decodificar respuestas Tipo 1 y Tipo 2',
  'Cerrar con activación específica (día + hora)',
  'Acompañar segunda sesión de aplicación en vivo',
];

const metrics = [
  { label: 'Duración promedio de tus sesiones', target: '~25 min' },
  { label: 'Tasa de activación cerrada', target: '≥ 70%' },
  { label: 'Cumplimiento de segundas sesiones agendadas', target: '≥ 60%' },
  { label: 'Tiempo hasta primera aplicación post-capacitación', target: '< 7 días' },
];

const MaestriaEquipoModule9Certification = ({ onComplete }: Props) => {
  const [name, setName] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (!name.trim()) return;
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>Certificado Welli</title>
      <style>
        body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#FFCE00;margin:0}
        .cert{background:white;border:8px solid #1e1b4b;border-radius:24px;padding:64px;text-align:center;max-width:720px}
        h1{color:#1e1b4b;font-size:48px;margin:0 0 8px}
        .sub{color:#1e1b4b;opacity:.7;letter-spacing:.2em;font-size:12px;margin-bottom:32px}
        .name{font-size:36px;color:#1e1b4b;font-weight:bold;margin:24px 0;border-bottom:2px solid #FFCE00;padding-bottom:8px;display:inline-block}
        .body{color:#1e1b4b;opacity:.8;line-height:1.6}
        .footer{margin-top:48px;display:flex;justify-content:space-between;color:#1e1b4b;font-size:12px}
      </style></head>
      <body><div class="cert">
        <div class="sub">WELLI · MAESTRÍA EN CAPACITACIÓN</div>
        <h1>Certificado de Maestría</h1>
        <div class="body">Se otorga a</div>
        <div class="name">${name}</div>
        <div class="body">por completar exitosamente la Maestría en Capacitación Comercial Welli — Metodología actualizada de 25 minutos.</div>
        <div class="footer"><span>${new Date().toLocaleDateString('es-CO')}</span><span>welli.com.co</span></div>
      </div></body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `certificado-maestria-${name.replace(/\s+/g, '-')}.html`;
    a.click(); URL.revokeObjectURL(url);
    setDownloaded(true);
    try {
      localStorage.setItem('maestria_equipo_cert', JSON.stringify({ name, date: new Date().toISOString() }));
    } catch {}
  };

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold text-indigo-950">Módulo 9 · Certificación</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Completaste la Maestría
          </h1>
        </motion.div>

        <div className="bg-card rounded-2xl border-2 border-secondary/30 p-6 mb-6">
          <h2 className="font-bold text-indigo-950 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-secondary" />
            Competencias adquiridas
          </h2>
          <div className="grid md:grid-cols-2 gap-2">
            {competencies.map((c, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-welli-yellow/5">
                <CheckCircle2 className="w-4 h-4 text-welli-yellow mt-0.5 flex-shrink-0" />
                <span className="text-sm text-indigo-800">{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-welli-yellow/10 rounded-2xl border-2 border-welli-yellow/40 p-6 mb-6">
          <h2 className="font-bold text-indigo-950 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-welli-yellow" />
            Métricas que empezarás a registrar
          </h2>
          <div className="space-y-2">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/60">
                <span className="text-sm text-indigo-800">{m.label}</span>
                <span className="text-xs font-bold text-welli-yellow bg-indigo-950 px-2 py-1 rounded-full">{m.target}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl border-2 border-secondary/30 p-6 mb-6">
          <label className="block text-sm font-bold text-indigo-950 mb-2">Tu nombre completo</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como aparecerá en el certificado"
            className="w-full px-4 py-3 rounded-xl border-2 border-welli-yellow/30 bg-white text-indigo-950 focus:outline-none focus:border-welli-yellow mb-4"
          />
          <button
            onClick={handleDownload}
            disabled={!name.trim()}
            className={`w-full inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-bold transition-all ${
              name.trim()
                ? 'bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90'
                : 'bg-welli-yellow/30 text-indigo-950/50 cursor-not-allowed'
            }`}
          >
            <Download className="w-5 h-5" />
            {downloaded ? 'Descargado ✓' : 'Descargar certificado'}
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-secondary text-white hover:bg-secondary/90 transition-all shadow-lg"
          >
            Volver al Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaestriaEquipoModule9Certification;
