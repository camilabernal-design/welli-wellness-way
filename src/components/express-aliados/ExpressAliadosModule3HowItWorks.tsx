import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Smartphone, Zap, Building2, MessageCircle, FileImage, Wallet, Clock, FileCheck,
  CheckCircle2, AlertTriangle, RotateCcw, Calendar, Users,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import VideoProcessModule from "@/components/modules/VideoProcessModule";
import { VIDEO_IDS } from "@/lib/videoIds";
import { useSession } from "./SessionContext";

interface Props { onComplete: () => void; }

const ResumenTab = () => (
  <div className="space-y-6">
    <h2 className="font-display text-3xl font-bold text-indigo-950 text-center">Welli, en 3 pasos.</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { icon: Smartphone, n: 1, t: "Su paciente aplica desde el celular", d: "3 minutos" },
        { icon: Zap, n: 2, t: "Aprobación en segundos", d: "30 segundos" },
        { icon: Building2, n: 3, t: "Usted recibe el desembolso", d: "72 horas hábiles" },
      ].map((s, i) => (
        <motion.div
          key={s.n}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className="rounded-3xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-8 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-welli-yellow mx-auto mb-4 flex items-center justify-center">
            <s.icon className="w-8 h-8 text-indigo-950" />
          </div>
          <p className="text-xs font-bold text-welli-yellow mb-1">PASO {s.n}</p>
          <h3 className="font-display text-lg font-bold text-indigo-950 mb-2">{s.t}</h3>
          <p className="text-sm text-indigo-800 font-bold">{s.d}</p>
        </motion.div>
      ))}
    </div>
    <p className="text-center text-indigo-800 italic">Eso es todo. Ahora le muestro cada paso por dentro.</p>
  </div>
);

const AplicacionTab = () => {
  const { allySpecialty } = useSession();
  const initialVideo = useMemo(() => {
    const s = (allySpecialty || "").toLowerCase();
    if (s.includes("dental") || s.includes("odonto")) return "dentalink";
    if (s.includes("vet")) return "okvet";
    return "general";
  }, [allySpecialty]);
  return <VideoProcessModule onComplete={() => {}} initialVideo={initialVideo} hideCTA />;
};

const WelliCheckTab = () => {
  const { archetype } = useSession();
  const archetypeNote = archetype === "premium"
    ? "Especialmente útil para usted, doctor. Su paciente consulta sin que usted tenga que iniciar la conversación de plata."
    : archetype === "caidos"
    ? "Útil sobre todo para los pacientes que se le iban sin tratarse."
    : archetype === "sin-aliados"
    ? "Una funcionalidad que probablemente no existe en su consulta hoy."
    : null;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-indigo-950">
          Paso 2 — Welli Check: sepa antes de hablar
        </h2>
        <p className="text-indigo-800 italic">
          La mayor herramienta para usted: consultar en 30 segundos si su paciente tiene cupo, sin generar fricción.
        </p>
      </div>

      <YouTubeEmbed videoId={VIDEO_IDS.welliCheck} title="Cómo funciona Welli Check" borderColor="welli-yellow" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: MessageCircle, t: "Entra por WhatsApp" },
          { icon: FileImage, t: "Foto cédula + ocupación" },
          { icon: Zap, t: "Resultado en segundos" },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl bg-welli-yellow/10 border-2 border-welli-yellow/40 p-6 text-center">
            <s.icon className="w-10 h-10 mx-auto text-welli-yellow mb-2" />
            <p className="font-bold text-indigo-950 text-sm">{s.t}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-indigo-950 p-6 space-y-3">
        <p className="text-welli-yellow font-bold text-sm tracking-widest">CÓMO USARLO CON SU PACIENTE</p>
        <p className="text-white/85">Cuando entregue un presupuesto, dígale:</p>
        <p className="font-display text-lg text-welli-yellow italic">
          "Acá tenemos un link rápido por WhatsApp que en 30 segundos le dice si califica para financiación. ¿Lo intentamos?"
        </p>
        {archetypeNote && <p className="text-sm text-white/70 italic pt-2 border-t border-white/10">{archetypeNote}</p>}
      </div>
    </div>
  );
};

const PortalTab = () => (
  <div className="space-y-6">
    <h2 className="font-display text-2xl md:text-3xl font-bold text-indigo-950 text-center">
      Paso 3 — Su portal: donde usted opera
    </h2>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        { icon: Clock, t: "Aprobado, pendiente firma", d: "El paciente firma cuando esté listo." },
        { icon: CheckCircle2, t: "Crédito tomado pendiente", d: "Aquí usted pide el desembolso." },
        { icon: Wallet, t: "Desembolsado", d: "La plata está en su cuenta." },
        { icon: RotateCcw, t: "Desistir", d: "Si el paciente cambia de opinión en consulta." },
      ].map((s, i) => (
        <div key={i} className="rounded-2xl border-2 border-welli-yellow/30 bg-white p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-welli-yellow flex items-center justify-center flex-shrink-0">
            <s.icon className="w-5 h-5 text-indigo-950" />
          </div>
          <div>
            <p className="font-bold text-indigo-950">{s.t}</p>
            <p className="text-sm text-indigo-800">{s.d}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="space-y-3">
      <h3 className="font-display text-xl font-bold text-indigo-950 text-center">
        Las 2 acciones que va a hacer todos los días
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <YouTubeEmbed videoId={VIDEO_IDS.disbursement} title="Cómo desembolsar" borderColor="welli-yellow" />
          <div className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/5 p-4 text-sm text-indigo-800">
            <p className="font-bold text-indigo-950 mb-2">Pedir desembolso — 4 pasos</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Entra al portal</li>
              <li>Busca el paciente en "Crédito tomado pendiente"</li>
              <li>Solicita desembolso</li>
              <li>Recibe en 72 horas hábiles</li>
            </ol>
          </div>
        </div>
        <div className="space-y-3">
          <YouTubeEmbed videoId={VIDEO_IDS.withdrawal} title="Cómo desistir" borderColor="welli-yellow" />
          <div className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/5 p-4 text-sm text-indigo-800">
            <p className="font-bold text-indigo-950 mb-2">Desistir — 4 pasos</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Entra al portal</li>
              <li>Busca el paciente</li>
              <li>Opción "Desistir"</li>
              <li>Confirma y se libera el cupo</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-2xl bg-welli-yellow/20 border-2 border-welli-yellow/40 p-5 flex items-center gap-3">
      <Calendar className="w-6 h-6 text-welli-yellow flex-shrink-0" />
      <p className="text-sm text-indigo-950">
        <strong>Días de desembolso:</strong> Martes y Jueves · <strong>Tiempo:</strong> 72 horas hábiles
      </p>
    </div>

    <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 p-5 flex items-start gap-3">
      <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
      <div className="text-sm text-amber-900">
        <p className="font-bold mb-1">Importante sobre Desistir</p>
        <p>
          El "Desistir" se usa SOLO si el paciente cambia de opinión antes de que usted pida el desembolso. Después
          del desembolso, ya no se puede revertir desde el portal — eso es otro proceso.
        </p>
      </div>
    </div>
  </div>
);

const QuienAplicaTab = () => (
  <div className="space-y-6">
    <h2 className="font-display text-2xl md:text-3xl font-bold text-indigo-950 text-center">
      Una última cosa: ¿quién puede aplicar?
    </h2>
    <div className="grid md:grid-cols-3 gap-4">
      {[
        { icon: Users, t: "Entre 18 y 75 años" },
        { icon: FileCheck, t: "Sin reportes negativos en Data Crédito" },
        { icon: Building2, t: "6 meses de continuidad laboral" },
      ].map((s, i) => (
        <div key={i} className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-6 text-center">
          <s.icon className="w-12 h-12 mx-auto text-welli-yellow mb-3" />
          <p className="font-bold text-indigo-950">{s.t}</p>
        </div>
      ))}
    </div>

    <div className="rounded-2xl bg-indigo-950 p-6 text-white/85 space-y-3">
      <p className="font-bold text-welli-yellow">Esto son criterios mínimos.</p>
      <p className="text-sm">
        Hay más detalles (seguridad social, tipos de ocupación, historial) — pero ESOS los vemos en el día a día,
        caso por caso.
      </p>
      <p className="text-sm">No necesita memorizar todo hoy.</p>
    </div>

    <div className="rounded-2xl border-2 border-welli-yellow/40 bg-welli-yellow/10 p-5">
      <p className="font-bold text-indigo-950 mb-1">Si su paciente no califica:</p>
      <p className="text-sm text-indigo-800">
        <strong>Plan B →</strong> un familiar o pareja puede aplicar por él. Muchos tratamientos se cierran así.
      </p>
    </div>
  </div>
);

const tabs = [
  { id: "resumen", label: "Resumen", Component: ResumenTab },
  { id: "aplicacion", label: "Aplicación", Component: AplicacionTab },
  { id: "welli-check", label: "Welli Check", Component: WelliCheckTab },
  { id: "portal", label: "Su Portal", Component: PortalTab },
  { id: "quien-aplica", label: "¿Quién aplica?", Component: QuienAplicaTab },
];

const ExpressAliadosModule3HowItWorks = ({ onComplete }: Props) => {
  const [active, setActive] = useState(tabs[0].id);
  const isLast = active === tabs[tabs.length - 1].id;

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <p className="text-xs font-bold text-welli-yellow tracking-widest mb-2">MÓDULO 3 · CÓMO FUNCIONA WELLI</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950">
            Le muestro cómo funciona, por dentro.
          </h1>
        </motion.div>

        <Tabs value={active} onValueChange={setActive} className="w-full">
          <TabsList className="grid grid-cols-5 mb-8 h-auto bg-welli-yellow/10 p-1">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.id}
                value={t.id}
                className="text-xs md:text-sm data-[state=active]:bg-welli-yellow data-[state=active]:text-indigo-950 py-2"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map(({ id, Component }) => (
            <TabsContent key={id} value={id} className="mt-0">
              <Component />
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-end mt-10">
          {isLast ? (
            <button
              onClick={onComplete}
              className="inline-flex items-center gap-3 text-lg px-8 py-4 rounded-2xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-xl hover:scale-105"
            >
              Veamos las conversaciones con sus pacientes <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                const idx = tabs.findIndex((t) => t.id === active);
                setActive(tabs[idx + 1].id);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg"
            >
              Siguiente <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpressAliadosModule3HowItWorks;
