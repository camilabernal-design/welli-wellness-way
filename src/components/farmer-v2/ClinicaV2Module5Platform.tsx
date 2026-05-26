import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Zap, LayoutDashboard, UserCheck, CheckCircle2 } from "lucide-react";
import VideoProcessModule from "@/components/modules/VideoProcessModule";
import WelliCheckPhase1 from "@/components/modules/WelliCheckPhase1";
import { useV2Analytics } from "@/hooks/useV2Analytics";

interface ModuleProps { onComplete: () => void; }

const tabs = [
  { id: "flow", label: "Flujo Normal", icon: PlayCircle, time: "2 min" },
  { id: "id", label: "Validación ID", icon: ShieldCheck, time: "1.5 min" },
  { id: "check", label: "Welli Check", icon: Zap, time: "2 min" },
  { id: "portal", label: "Portal & Desembolso", icon: LayoutDashboard, time: "1.5 min" },
  { id: "perfil", label: "Perfilamiento", icon: UserCheck, time: "1 min" },
];

const idStates = [
  { color: "bg-success", label: "🟢 Verde", desc: "Validación exitosa, puede empezar tratamiento." },
  { color: "bg-welli-yellow", label: "🟡 Dato adicional", desc: "Pedimos info al doctor y llamamos al paciente." },
  { color: "bg-destructive", label: "🔴 Rojo", desc: "Repetir fotos con recomendaciones." },
];

const portalStates = [
  { title: "Aprobado, no firmado", action: "El paciente debe completar." },
  { title: "Crédito tomado, pendiente desembolso", action: "AQUÍ usted pide desembolso." },
  { title: "Desembolsado", action: "Listo, atienda al paciente." },
  { title: "Desistir", action: "Si el paciente cambia de opinión EN LA CONSULTA." },
];

const ClinicaV2Module5Platform = ({ onComplete }: ModuleProps) => {
  const { markComplete } = useV2Analytics(5, "Cómo Funciona la Plataforma");
  const [tab, setTab] = useState("flow");

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-3">EL MÓDULO MÁS IMPORTANTE</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
            Cómo funciona <span className="text-welli-yellow">la plataforma</span>
          </h1>
          <p className="text-indigo-800">Lo que el doctor REALMENTE compró. Esto va PRIMERO, no las objeciones.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${tab === t.id ? 'bg-welli-yellow border-welli-yellow text-indigo-950' : 'bg-card border-border text-indigo-950 hover:border-welli-yellow/50'}`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
              <span className="text-xs opacity-60">· {t.time}</span>
            </button>
          ))}
        </div>

        <div className="bg-card border-2 border-border rounded-2xl p-6 mb-6 min-h-[400px]">
          {tab === "flow" && (
            <div>
              <h3 className="font-display text-xl font-bold text-indigo-950 mb-2">5.1 Flujo Normal de Solicitud</h3>
              <p className="text-sm text-indigo-800 mb-4">Pregunta global al final del video. <strong>No interrumpas con preguntas pequeñas.</strong></p>
              <VideoProcessModule onComplete={() => {}} />
            </div>
          )}

          {tab === "id" && (
            <div>
              <h3 className="font-display text-xl font-bold text-indigo-950 mb-4">5.2 Validación de Identidad</h3>
              <div className="space-y-3">
                {idStates.map(s => (
                  <div key={s.label} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                    <div className={`w-3 h-3 rounded-full ${s.color} mt-1.5 flex-shrink-0`} />
                    <div>
                      <p className="font-bold text-indigo-950">{s.label}</p>
                      <p className="text-sm text-indigo-800">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "check" && (
            <div>
              <h3 className="font-display text-xl font-bold text-indigo-950 mb-2">5.3 Welli Check</h3>
              <p className="text-sm text-indigo-800 mb-2"><strong>Pregunta clave:</strong> ¿Lo hace el doctor o el paciente? → <em>El paciente, desde su móvil.</em></p>
              <div className="p-3 rounded-xl bg-welli-yellow/10 border border-welli-yellow/30 mb-4 text-sm text-indigo-950">
                💡 Preaprobación EN SEGUNDOS — quita la barrera psicológica del doctor.
              </div>
              <WelliCheckPhase1 onComplete={() => {}} />
            </div>
          )}

          {tab === "portal" && (
            <div>
              <h3 className="font-display text-xl font-bold text-indigo-950 mb-4">5.4 Portal Aliados y Desembolso</h3>
              <p className="text-sm text-indigo-800 mb-4">Los 4 estados clave (no los 8). Desembolso: <strong>martes y jueves, 72h hábiles.</strong></p>
              <div className="grid sm:grid-cols-2 gap-3">
                {portalStates.map(s => (
                  <div key={s.title} className="p-4 rounded-xl bg-background border border-border">
                    <p className="font-bold text-indigo-950 text-sm mb-1">{s.title}</p>
                    <p className="text-xs text-indigo-800">{s.action}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "perfil" && (
            <div>
              <h3 className="font-display text-xl font-bold text-indigo-950 mb-2">5.5 Perfilamiento — SOLO 3 criterios</h3>
              <div className="space-y-2 mb-4">
                {["18 a 75 años", "No reportado en Data Crédito", "6 meses de continuidad laboral"].map(c => (
                  <div key={c} className="flex items-center gap-3 p-3 rounded-xl bg-welli-yellow/10 border border-welli-yellow/30">
                    <CheckCircle2 className="w-5 h-5 text-welli-yellow" />
                    <span className="font-medium text-indigo-950">{c}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-secondary/10 border-2 border-secondary/30 text-sm text-indigo-950">
                Estos son criterios <strong>MÍNIMOS</strong>. Los detalles (seguridad social, pensionados, tipos de cédula, historial crediticio) NO se mencionan en la primera capacitación. El doctor solo necesita cultura general. Los detalles se enseñan en el día a día.
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <button onClick={() => { markComplete(); onComplete(); }} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:scale-105 transition-all shadow-lg">
            Ahora sí, objeciones <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicaV2Module5Platform;
