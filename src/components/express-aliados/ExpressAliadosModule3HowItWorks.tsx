import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Smartphone, CheckCircle2, AlertTriangle, XCircle, MessageCircle, FileImage, Zap, Building2, Calendar, Users } from "lucide-react";

interface Props { onComplete: () => void; }

const subSections = [
  { id: '3.1', title: 'Resumen en 3 pasos' },
  { id: '3.2', title: 'Flujo de solicitud' },
  { id: '3.3', title: 'Validación de identidad' },
  { id: '3.4', title: 'Consulta de elegibilidad (Welli Check)' },
  { id: '3.5', title: 'Portal del aliado' },
  { id: '3.6', title: '¿Quién puede aplicar?' },
];

const renderSub = (idx: number) => {
  switch (idx) {
    case 0:
      return (
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Smartphone, n: 1, t: 'Aplica en 3 min', d: 'Desde el celular del paciente.' },
            { icon: Zap, n: 2, t: 'Aprobación en segundos', d: 'Respuesta inmediata sin papeles.' },
            { icon: Building2, n: 3, t: 'Desembolso en 72h', d: 'Directo a la cuenta del aliado.' },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-welli-yellow flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-8 h-8 text-indigo-950" />
              </div>
              <p className="text-xs font-bold text-welli-yellow mb-1">PASO {s.n}</p>
              <h3 className="font-display text-xl font-bold text-indigo-950 mb-2">{s.t}</h3>
              <p className="text-sm text-indigo-800">{s.d}</p>
            </div>
          ))}
        </div>
      );
    case 1:
      return (
        <div className="text-center py-12">
          <div className="aspect-video max-w-2xl mx-auto bg-indigo-950 rounded-2xl flex items-center justify-center mb-6">
            <Smartphone className="w-20 h-20 text-welli-yellow" />
          </div>
          <p className="text-lg text-indigo-800">Video del proceso de solicitud completo, de 2 minutos.</p>
          <p className="text-sm text-indigo-800/70 mt-2 italic">Sin interrupciones. Una sola pregunta al final.</p>
        </div>
      );
    case 2:
      return (
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: CheckCircle2, c: 'border-green-500/40 bg-green-50', tc: 'text-green-600', t: 'Aprobado', d: 'Validación inmediata. Continúa el flujo.' },
            { icon: AlertTriangle, c: 'border-yellow-500/40 bg-yellow-50', tc: 'text-yellow-600', t: 'Requiere dato adicional', d: 'Falta un campo, completa y reintenta.' },
            { icon: XCircle, c: 'border-destructive/40 bg-red-50', tc: 'text-destructive', t: 'Repetir fotos', d: 'Mejor luz, cédula completa, sin reflejos.' },
          ].map((s, i) => (
            <div key={i} className={`rounded-3xl border-2 ${s.c} p-6 text-center`}>
              <s.icon className={`w-12 h-12 mx-auto mb-3 ${s.tc}`} />
              <h3 className="font-bold text-indigo-950 mb-2">{s.t}</h3>
              <p className="text-sm text-indigo-800">{s.d}</p>
            </div>
          ))}
        </div>
      );
    case 3:
      return (
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[{ icon: MessageCircle, t: 'WhatsApp' }, { icon: FileImage, t: 'Foto de cédula' }, { icon: Zap, t: 'Resultado al instante' }].map((s, i) => (
              <div key={i} className="rounded-2xl bg-welli-yellow/10 border-2 border-welli-yellow/40 p-6 text-center">
                <s.icon className="w-10 h-10 mx-auto text-welli-yellow mb-2" />
                <p className="font-bold text-indigo-950 text-sm">{s.t}</p>
              </div>
            ))}
          </div>
          <div className="bg-indigo-950 rounded-2xl p-6 text-center">
            <p className="font-display text-xl text-welli-yellow">"Antes de hablar de dinero con su paciente, sepa si tiene un cupo aprobado. Sin fricción."</p>
          </div>
        </div>
      );
    case 4:
      return (
        <div>
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            {[
              { t: 'Pendiente de firma', d: 'El paciente debe firmar electrónicamente.' },
              { t: 'Crédito tomado', d: 'Aquí solicitas el desembolso.' },
              { t: 'Desembolsado', d: 'Plata en tu cuenta.' },
              { t: 'Opción de desistir', d: 'Si el paciente no se trata, se libera.' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border-2 border-welli-yellow/30 bg-white p-4 flex gap-3">
                <div className="w-8 h-8 rounded-full bg-welli-yellow flex items-center justify-center flex-shrink-0 font-bold text-indigo-950 text-sm">{i + 1}</div>
                <div>
                  <p className="font-bold text-indigo-950 text-sm">{s.t}</p>
                  <p className="text-xs text-indigo-800">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-welli-yellow/20 border-2 border-welli-yellow/40 p-4 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-welli-yellow flex-shrink-0" />
            <p className="text-sm text-indigo-800"><strong>Días de desembolso:</strong> martes y jueves hábiles.</p>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-8 mb-6">
            <Users className="w-12 h-12 text-welli-yellow mb-4" />
            <h3 className="font-display text-2xl font-bold text-indigo-950 mb-4">Criterios mínimos</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-welli-yellow" /><span className="text-indigo-800">Pacientes entre 18 y 75 años</span></li>
              <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-welli-yellow" /><span className="text-indigo-800">Sin reportes negativos en Data Crédito</span></li>
              <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-welli-yellow" /><span className="text-indigo-800">Mínimo 6 meses de continuidad laboral</span></li>
            </ul>
          </div>
          <p className="text-sm text-indigo-800/70 italic text-center">Los detalles adicionales los revisamos en el día a día.</p>
        </div>
      );
    default:
      return null;
  }
};

const ExpressAliadosModule3HowItWorks = ({ onComplete }: Props) => {
  const [sub, setSub] = useState(0);
  const isLast = sub === subSections.length - 1;

  const next = () => {
    if (isLast) onComplete();
    else setSub(sub + 1);
  };

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <p className="text-xs font-bold text-welli-yellow tracking-widest mb-2">MÓDULO 3 · CÓMO FUNCIONA</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-indigo-950">
            {subSections[sub].id} · {subSections[sub].title}
          </h1>
        </motion.div>

        <div className="flex justify-center gap-1 mb-8">
          {subSections.map((_, i) => (
            <div key={i} className={`h-1.5 w-10 rounded-full ${i <= sub ? 'bg-welli-yellow' : 'bg-welli-yellow/20'}`} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={sub}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mb-10"
          >
            {renderSub(sub)}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center max-w-md mx-auto">
          <button
            onClick={() => setSub(Math.max(0, sub - 1))}
            disabled={sub === 0}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
              sub === 0 ? 'opacity-30 cursor-not-allowed' : 'bg-white border-2 border-welli-yellow/40 text-indigo-950 hover:bg-welli-yellow/10'
            }`}
          >
            <ArrowLeft className="w-5 h-5" /> Anterior
          </button>
          <button
            onClick={next}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg"
          >
            {isLast ? 'Continuar al siguiente módulo' : 'Siguiente'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule3HowItWorks;
