import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WelliLogoFull from "@/components/WelliLogoFull";
import { ArrowLeft, MessageCircle } from "lucide-react";
import ScreenShell from "@/components/BariatricaNovo/ScreenShell";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import NavigationButtons from "@/components/BariatricaNovo/NavigationButtons";
import ProgressBar from "@/components/BariatricaNovo/ProgressBar";
import {
  HighlightBox,
  SoftBox,
  WarningBox,
} from "@/components/BariatricaNovo/HighlightBox";
import { useBariatricaState } from "@/hooks/useBariatricaState";
import TeamVoteOverlay from "@/components/BariatricaNovo/interactive/TeamVoteOverlay";
import ValuePerceptionSlider from "@/components/BariatricaNovo/interactive/ValuePerceptionSlider";
import WelliPitchBuilder from "@/components/BariatricaNovo/interactive/WelliPitchBuilder";
import SimuladorCuota from "@/components/BariatricaNovo/interactive/SimuladorCuota";
import MapaCuatroSedes from "@/components/BariatricaNovo/interactive/MapaCuatroSedes";
import MonthlyDeclineChart from "@/components/BariatricaNovo/interactive/MonthlyDeclineChart";
import TimelineTresMovimientos from "@/components/BariatricaNovo/interactive/TimelineTresMovimientos";
import MetricsRevealed from "@/components/BariatricaNovo/interactive/MetricsRevealed";
import PackSimulator from "@/components/BariatricaNovo/interactive/PackSimulator";
import NextPatientForm from "@/components/BariatricaNovo/interactive/NextPatientForm";

type ScreenProps = {
  onNext: () => void;
  onBack?: () => void;
};

const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-4xl md:text-5xl font-bold text-indigo-950 tracking-tight leading-tight">
    {children}
  </h1>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 tracking-tight">
    {children}
  </h2>
);
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-welli-yellow-foreground/80">
    {children}
  </p>
);
const Body = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`text-xl md:text-2xl text-slate-700 leading-relaxed ${className}`}>
    {children}
  </p>
);
const Anchor = ({ children }: { children: React.ReactNode }) => (
  <p className="text-2xl md:text-3xl italic text-indigo-950 leading-relaxed font-medium">
    {children}
  </p>
);
const Bullet = ({ items }: { items: string[] }) => (
  <ul className="space-y-4">
    {items.map((t) => (
      <li key={t} className="flex gap-4 text-xl text-slate-700 leading-relaxed">
        <span className="text-welli-yellow text-3xl leading-none">▸</span>
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

/* ============ PANTALLAS ============ */

// S01 · La silla vacía
const S01 = ({ onNext }: ScreenProps) => {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.2, duration: 0.5 },
  });
  return (
    <ScreenShell center>
      <div className="flex flex-col items-center text-center gap-8">
        <motion.svg
          {...stagger(0)}
          viewBox="0 0 200 140"
          className="w-56 md:w-72 text-slate-300"
        >
          <rect x="20" y="118" width="160" height="3" fill="currentColor" />
          <rect x="72" y="40" width="56" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
          <rect x="70" y="88" width="60" height="8" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
          <line x1="78" y1="96" x2="72" y2="118" stroke="currentColor" strokeWidth="3" />
          <line x1="122" y1="96" x2="128" y2="118" stroke="currentColor" strokeWidth="3" />
        </motion.svg>
        <motion.div {...stagger(1)}>
          <WelliLogoFull size="lg" />
        </motion.div>
        <motion.div {...stagger(2)} className="space-y-6">
          <H1>La silla vacía</H1>
          <Anchor>
            ¿Cuántos pacientes salieron hoy diciendo: «Lo voy a pensar»?
          </Anchor>
          <Body className="max-w-3xl mx-auto">
            Hoy vamos a ver cómo dejar de perderlos.
          </Body>
        </motion.div>
        <motion.div {...stagger(3)}>
          <Button
            onClick={onNext}
            className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 text-xl font-semibold h-16 px-12"
          >
            Descubrir el costo del silencio
          </Button>
        </motion.div>
      </div>
    </ScreenShell>
  );
};

// S02 · La pregunta honesta
const S02 = ({ onNext, onBack }: ScreenProps) => {
  const { state, update } = useBariatricaState();
  const [selected, setSelected] = useState<string | null>(
    state.pacientesQueFirman ?? null,
  );
  const messages: Record<string, string> = {
    "1-3": "Estás dejando ir muchísimo potencial. Vamos a ver cómo recuperarlo.",
    "4-6": "Estás en el promedio del mercado. Vamos a ver cómo subir.",
    "7-9": "Buena base. Vamos a ver qué piezas finas le faltan.",
    "10": "Excelente. ¿Estás midiendo solo los que firman, o también los que vienen a valoración?",
  };

  const handlePick = (v: string) => {
    setSelected(v);
    update({ pacientesQueFirman: v as never });
  };

  return (
    <ScreenShell center>
      <div className="text-center space-y-10">
        <H2>Antes de empezar, una pregunta honesta:</H2>
        <Body className="max-w-3xl mx-auto">
          De cada 10 pacientes que valoras para manejo de obesidad...
          <br />
          <span className="font-semibold text-indigo-950">
            ¿Cuántos terminan tratándose contigo o en tu clínica?
          </span>
        </Body>
        <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
          {["1-3", "4-6", "7-9", "10"].map((v) => (
            <button
              key={v}
              onClick={() => handlePick(v)}
              className={`h-24 rounded-xl border-2 text-3xl font-bold transition-all ${
                selected === v
                  ? "bg-welli-yellow border-welli-yellow text-indigo-950 scale-105"
                  : "bg-white border-slate-300 text-indigo-950 hover:border-welli-yellow"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
        {selected && (
          <>
            <HighlightBox className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-indigo-950 leading-relaxed">
                {messages[selected]}
              </p>
            </HighlightBox>
            <div className="max-w-3xl mx-auto text-left">
              <TeamVoteOverlay doctorPick={selected} />
            </div>
          </>
        )}
        <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!selected} />
      </div>
    </ScreenShell>
  );
};

// S03 · Reality check
const S03 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>Reality check</Eyebrow>
      <H1>Los pacientes no se van por el precio.</H1>
      <p className="text-3xl md:text-4xl font-bold text-[hsl(var(--secondary))] tracking-tight mt-6 leading-tight">
        Se van porque no entendieron el valor de lo que les propusiste.
      </p>
      <div className="mt-10">
        <ValuePerceptionSlider onComplete={() => setDone(true)} />
      </div>
      {done && (
        <HighlightBox className="mt-10">
          <p className="text-xl md:text-2xl italic text-indigo-950 leading-relaxed">
            "Cuando el paciente sale con el monto en la cabeza pero sin entender
            el cambio profundo que va a vivir... ya perdió la decisión."
          </p>
        </HighlightBox>
      )}
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// S04 · Así funciona Welli + Welli Check + comisión 4% [Novo]
const S04 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell withNovo>
      <H1>Así funciona Welli</H1>
      <Body className="mt-6">3 cosas que tu clínica necesita saber desde hoy.</Body>

      {/* Bloque A */}
      <div className="mt-12">
        <Eyebrow>Bloque A · ¿Qué es Welli? (90 segundos)</Eyebrow>
        <div className="mt-4">
          <YouTubeEmbed
            videoId="McEsh-llDss"
            title="¿Qué es Welli?"
            borderColor="welli-yellow"
          />
        </div>
        <div className="mt-6">
          <Bullet
            items={[
              "Financiamos tratamientos con cuota fija mensual",
              "Aprobación en 30 segundos por WhatsApp",
              "Desembolso al aliado en 24-48h",
            ]}
          />
        </div>
      </div>

      {/* Bloque B */}
      <div className="mt-14">
        <Eyebrow>Bloque B · Welli Check en 30 segundos</Eyebrow>
        <SoftBox className="mt-4">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-welli-yellow flex items-center justify-center shrink-0">
              <MessageCircle className="h-6 w-6 text-indigo-950" />
            </div>
            <div>
              <p className="text-xl text-indigo-950 leading-relaxed">
                Pre-aprobación instantánea por WhatsApp, sin afectar historial
                crediticio. Envía el link al paciente y en 30 segundos sabes si
                califica.
              </p>
              <p className="mt-4 text-lg font-semibold text-indigo-950 underline underline-offset-4">
                Ver Welli Check en acción
              </p>
            </div>
          </div>
        </SoftBox>
      </div>

      {/* Bloque C */}
      <div className="mt-14">
        <Eyebrow>Bloque C · Tu comisión preferencial</Eyebrow>
        <HighlightBox className="mt-4">
          <div className="grid grid-cols-2 gap-8 text-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-500">
                Comisión estándar Welli
              </p>
              <p className="text-4xl font-bold text-slate-400 line-through mt-3">6%</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-indigo-950">
                Tu comisión preferencial
              </p>
              <p className="text-6xl font-bold text-indigo-950 mt-2">4%</p>
            </div>
          </div>
          <p className="text-lg text-indigo-950 mt-8 leading-relaxed">
            Por convenio con Novo Nordisk, tu comisión Welli es preferencial. Se
            aplica automáticamente en cada crédito bajo el código Vive Ligero.
          </p>
        </HighlightBox>
      </div>

      <div className="mt-14">
        <H2>Practica cómo presentarlo</H2>
        <div className="mt-6">
          <WelliPitchBuilder onComplete={() => setDone(true)} />
        </div>
      </div>

      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
        nextLabel="Ver el simulador"
        nextDisabled={!done}
      />
    </ScreenShell>
  );
};

// S05 · Simulador
const S05 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>El traductor de salud</Eyebrow>
      <H1>La cuota fija de bienestar</H1>
      <Body className="mt-6">
        El paciente no compra un tratamiento. Compra la posibilidad de pagarlo
        cómodo.
      </Body>
      <div className="mt-10">
        <SimuladorCuota onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// S07 · El caso · quiénes son
const S07 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Un caso real</Eyebrow>
    <H1>Le voy a contar una clínica aliada</H1>
    <Body className="mt-6">
      4 sedes en Colombia · programa para pérdida de peso + manejo médico de obesidad.
    </Body>
    <div className="mt-10">
      <MapaCuatroSedes />
    </div>
    <Body className="mt-10">
      Profesionales sólidos. Buena reputación. Pero algo no estaba terminando de
      funcionar comercialmente.
    </Body>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// S08 · El estancamiento
const S08 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <H1>Los primeros meses</H1>
      <Body className="mt-6">
        Cuando empezaron con Welli, los números eran modestos.
      </Body>
      <div className="mt-10">
        <MonthlyDeclineChart onComplete={() => setDone(true)} />
      </div>
      {done && (
        <Anchor>
          <span className="block mt-10 text-center">
            Llegaron a pensar que Welli no era para su clínica.
          </span>
        </Anchor>
      )}
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// S09 · Los 3 movimientos [Novo]
const S09 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell withNovo>
    <Eyebrow>El descubrimiento</Eyebrow>
    <H1>Y entonces cambiaron 3 cosas.</H1>
    <TimelineTresMovimientos />
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// S10 · Las cifras
const S10 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>7 meses después</Eyebrow>
      <H2>Los resultados</H2>
      <div className="mt-10">
        <MetricsRevealed
          onComplete={() => {
            setDone(true);
            confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
          }}
        />
      </div>
      <div className="mt-12">
        <Eyebrow>Detrás de las cifras hay personas</Eyebrow>
        <div className="mt-4">
          <YouTubeEmbed
            videoId="z6OIR8S3MM4"
            title="Testimonio de programa para pérdida de peso"
            borderColor="welli-yellow"
          />
        </div>
      </div>
      {done && (
        <Anchor>
          <span className="block mt-10 text-center">
            Esto es lo que hicimos con ellos. Ahora hablemos de ti.
          </span>
        </Anchor>
      )}
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

export const PACK_OPCIONES = [
  "Programa para pérdida de peso",
  "Manejo médico con farmacológico",
  "Nutrición",
  "Seguimiento estructurado (más de 3 visitas)",
  "Otros procedimientos (aparatología, mesoterapia, etc.)",
];

const M4_1 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Módulo 4 — Tus 3 packs</Eyebrow>
    <H2>¿Por qué vender programas y no procedimientos sueltos?</H2>
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <SoftBox>
        <Eyebrow>Procedimiento suelto</Eyebrow>
        <ul className="mt-4 space-y-2 text-lg text-indigo-950">
          <li>Percibe: <span className="font-bold">costo</span></li>
          <li>Compromiso: bajo</li>
          <li>Recurrencia: nula</li>
          <li>Abandono: frecuente</li>
        </ul>
      </SoftBox>
      <HighlightBox>
        <Eyebrow>Programa integral</Eyebrow>
        <ul className="mt-4 space-y-2 text-lg text-indigo-950">
          <li>Percibe: <span className="font-bold">valor</span></li>
          <li>Compromiso: alto</li>
          <li>Recurrencia: alta</li>
          <li>Abandono: bajo</li>
        </ul>
      </HighlightBox>
    </div>
    <Anchor>
      <span className="block mt-10 text-center">
        Recuerda: el precio de cada componente individual no cambia. Solo cambia la forma de presentarlo.
      </span>
    </Anchor>
    <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Ver los 3 packs" />
  </ScreenShell>
);

const PackScreen = ({
  num,
  title,
  composition,
  paraQuien,
  argumento,
  final,
  warning,
  requiere,
  onNext,
  onBack,
}: any) => {
  const { state } = useBariatricaState();
  const sel = state.packsClinica ?? [];
  const enPortafolio =
    sel.length === 0 || (requiere as string[]).some((r) => sel.includes(r));

  return (
    <ScreenShell withNovo>
      <Eyebrow>Pack {num}</Eyebrow>
      <H1>{title}</H1>
      {!enPortafolio && (
        <WarningBox className="mt-6">
          <p className="text-lg font-semibold text-indigo-950 uppercase tracking-wider">
            Hoy no está en tu portafolio
          </p>
          <p className="text-xl text-indigo-950 mt-3">
            Vamos a ver si vale la pena sumar este pack a tu oferta. Es una oportunidad de crecimiento, no un requisito.
          </p>
        </WarningBox>
      )}
      <HighlightBox className="mt-8">
        <p className="text-2xl font-semibold text-indigo-950">{composition}</p>
      </HighlightBox>
      <div className="mt-10">
        <p className="text-xl font-semibold text-indigo-950 mb-4">¿Para qué paciente?</p>
        <Bullet items={paraQuien} />
      </div>
      <div className="mt-10">
        <p className="text-xl font-semibold text-indigo-950 mb-4">El argumento comercial</p>
        <SoftBox>
          <p className="text-xl italic text-indigo-950">"{argumento}"</p>
        </SoftBox>
      </div>
      {final && <Anchor><span className="block mt-10 text-center">{final}</span></Anchor>}
      {warning && (
        <WarningBox className="mt-8">
          <p className="text-lg font-semibold text-indigo-950 uppercase tracking-wider">Riesgo a evitar:</p>
          <p className="text-xl text-indigo-950 mt-3">{warning}</p>
        </WarningBox>
      )}
      <NavigationButtons onBack={onBack} onNext={onNext} />
    </ScreenShell>
  );
};

const M4_2 = (p: ScreenProps) => (
  <PackScreen
    {...p}
    num="1 · Quirúrgico"
    title="Pack quirúrgico"
    requiere={["Programa para pérdida de peso"]}
    composition="Cirugía + manejo farmacológico post-quirúrgico"
    paraQuien={[
      "Apto clínicamente para cirugía",
      "Con riesgo de recuperación de peso",
      "Que busca resultado sostenido a largo plazo",
    ]}
    argumento="Uno de los mayores riesgos después de una cirugía es recuperar el peso. Por eso lo manejamos como programa completo, no como cirugía suelta."
    final={`No es "cirugía más algo". Es "resultado sostenido".`}
  />
);
const M4_3 = (p: ScreenProps) => (
  <PackScreen
    {...p}
    num="2 · Preventivo"
    title="Pack preventivo"
    requiere={[
      "Manejo médico con farmacológico",
      "Nutrición",
      "Otros procedimientos (aparatología, mesoterapia, etc.)",
    ]}
    composition="Manejo médico (nutrición + farmacológico) sin cirugía"
    paraQuien={[
      "No candidato a cirugía",
      "Etapa temprana de manejo",
      "Busca resultados sin intervención invasiva",
    ]}
    argumento={`Esta no es una opción "más barata". Es la decisión inteligente cuando su caso no necesita un procedimiento mayor. Estamos cuidando su salud sin exponerlo a riesgos innecesarios.`}
    warning={`Que el paciente lo perciba como "el descuento". Posicionarlo siempre como elección acertada.`}
  />
);
const M4_4 = (p: ScreenProps) => (
  <PackScreen
    {...p}
    num="3 · Metabólico Integral"
    title="Pack metabólico integral"
    requiere={["Seguimiento estructurado (más de 3 visitas)"]}
    composition="Evaluación clínica completa + nutrición + manejo farmacológico + seguimiento estructurado"
    paraQuien={[
      "Con comorbilidades asociadas al peso",
      "Que busca salud integral, no solo bajar",
      "Que valora seguimiento profesional cercano",
    ]}
    argumento="Vamos más allá del peso. Estamos trabajando su salud integral, con seguimiento mes a mes, ajustando el tratamiento según su evolución real."
    final="Este pack es el que mejor adherencia genera. El paciente entiende que su salud completa está en juego, no solo el peso. Y vuelve."
  />
);

// 4.5 Simulador de pack
const M4_5 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>La regla absoluta</Eyebrow>
      <H1 >NUNCA presentes las 3 opciones sin recomendar una.</H1>
      <Body className="mt-6">
        Eso le pasa la decisión al paciente. Y el paciente sin guía dice "lo voy a pensar" — que casi siempre significa "no me lo trato".
      </Body>
      <Body className="mt-4">
        Si el caso es mixto, recomienda el más integral. La sobre-recomendación inteligente es preferible a la sub-recomendación tímida.
      </Body>
      <div className="mt-12"><H2>Practica: ¿cuál pack para cada paciente?</H2></div>
      <div className="mt-8">
        <PackSimulator onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// 4.6 Formulario de próximo paciente
const M4_6 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <H2>Piensa en tu próximo paciente real de esta semana</H2>
      <div className="mt-8">
        <NextPatientForm onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar al Módulo 5" nextDisabled={!done} />
    </ScreenShell>
  );
};


/* ============ PANTALLAS NUEVAS ============ */

const QueEsWelli = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell withNovo>
    <Eyebrow>Qué es Welli</Eyebrow>
    <H1>Welli en 90 segundos</H1>
    <div className="mt-8 space-y-4">
      <Body>Financiamos tratamientos con cuota fija mensual.</Body>
      <Body>Aprobación en 30 segundos por WhatsApp, sin afectar historial crediticio.</Body>
      <Body>Desembolso al aliado en 24-48 horas.</Body>
    </div>
    <div className="mt-12 grid md:grid-cols-2 gap-6">
      <HighlightBox>
        <Eyebrow>Welli Check</Eyebrow>
        <p className="text-xl text-indigo-950 mt-3">
          Pre-aprobación en 30 segundos por WhatsApp. El paciente sabe si califica antes de que termines la consulta.
        </p>
      </HighlightBox>
      <HighlightBox>
        <Eyebrow>Tu comisión preferencial 4%</Eyebrow>
        <p className="text-xl text-indigo-950 mt-3">
          Estándar Welli 6% → 4% por convenio Novo. Se aplica automáticamente con el código Vive Ligero.
        </p>
      </HighlightBox>
    </div>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

const MercadoViveLigero = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell withNovo>
    <Eyebrow>Mercado · Vive Ligero</Eyebrow>
    <H1>Tus pacientes ya buscan semaglutida antes de llegar a consulta</H1>
    <div className="mt-10 grid md:grid-cols-3 gap-6">
      <HighlightBox className="text-center">
        <p className="text-5xl font-bold text-indigo-950">+490%</p>
        <p className="text-lg text-indigo-950 mt-3">Búsquedas «pérdida de peso» en 3 años (Colombia/Latam)</p>
      </HighlightBox>
      <HighlightBox className="text-center">
        <p className="text-5xl font-bold text-indigo-950">×10</p>
        <p className="text-lg text-indigo-950 mt-3">Búsquedas de «Semaglutida» en el último año</p>
      </HighlightBox>
      <HighlightBox className="text-center">
        <p className="text-5xl font-bold text-indigo-950">×10</p>
        <p className="text-lg text-indigo-950 mt-3">«Bajar de peso» top búsquedas de salud en Latam</p>
      </HighlightBox>
    </div>
    <div className="mt-10">
      <Eyebrow>¿Qué buscan?</Eyebrow>
      <div className="mt-4 space-y-2 text-lg text-slate-700">
        <p>66% · información sobre una condición específica</p>
        <p>55% · tratamientos o procedimientos médicos</p>
        <p>47% · información sobre médicos y especialistas</p>
      </div>
    </div>
    <p className="mt-8 text-sm italic text-slate-500">
      Fuente: Vive Ligero™ · Weight Management Clinics Program · Novo Nordisk
    </p>
    <Anchor>
      <span className="block mt-8 text-center">Tu paciente ya llegó a Google antes de llegar a tu consulta.</span>
    </Anchor>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

const WegovyAliado = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell withNovo>
    <Eyebrow>Wegovy · aliado del negocio</Eyebrow>
    <H1>No es solo un medicamento. Es una palanca comercial.</H1>
    <div className="mt-10 grid md:grid-cols-3 gap-6">
      <HighlightBox className="text-center">
        <p className="text-5xl font-bold text-indigo-950">+40%</p>
        <p className="text-lg text-indigo-950 mt-3">Aumento promedio del ticket al incluir Wegovy</p>
      </HighlightBox>
      <HighlightBox className="text-center">
        <p className="text-5xl font-bold text-indigo-950">×3</p>
        <p className="text-lg text-indigo-950 mt-3">Mayor retención del paciente a la consulta</p>
      </HighlightBox>
      <HighlightBox className="text-center">
        <p className="text-5xl font-bold text-indigo-950">70%</p>
        <p className="text-lg text-indigo-950 mt-3">Pacientes con sobrepeso u obesidad buscan propuesta integral</p>
      </HighlightBox>
    </div>
    <Anchor>
      <span className="block mt-8 text-center">
        Los pacientes ya lo están pidiendo. La pregunta es cómo capitalizarlo.
      </span>
    </Anchor>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

const IndagacionPacks = ({ onNext, onBack }: ScreenProps) => {
  const { state, update } = useBariatricaState();
  const [selected, setSelected] = useState<string[]>(
    state.packsOfrecidos ?? state.packsClinica ?? [],
  );

  const toggle = (o: string) => {
    const next = selected.includes(o) ? selected.filter((x) => x !== o) : [...selected, o];
    setSelected(next);
    update({ packsOfrecidos: next, packsClinica: next });
  };

  return (
    <ScreenShell>
      <Eyebrow>Antes de hablar de packs</Eyebrow>
      <H2>¿Qué tipos de packs ofreces hoy en tu clínica?</H2>
      <Body className="mt-4">Te vamos a mostrar solo los que aplican a tu modelo.</Body>
      <div className="mt-8 space-y-3">
        {PACK_OPCIONES.map((o) => (
          <button
            key={o}
            onClick={() => toggle(o)}
            className={`w-full text-left px-6 py-4 rounded-xl border-2 text-lg transition-all ${
              selected.includes(o)
                ? "bg-welli-yellow border-welli-yellow text-indigo-950 font-semibold"
                : "bg-white border-slate-300 text-indigo-950 hover:border-welli-yellow"
            }`}
          >
            {selected.includes(o) ? "✓ " : ""}
            {o}
          </button>
        ))}
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={selected.length === 0} />
    </ScreenShell>
  );
};

const CompromisoPuente = ({ onBack }: ScreenProps) => {
  const navigate = useNavigate();
  const { state, update } = useBariatricaState();
  const [fecha, setFecha] = useState(state.fechaSesion2 ?? "");
  const [formato, setFormato] = useState(state.formatoSesion2 ?? "");

  const handleClose = () => {
    update({ fechaSesion2: fecha, formatoSesion2: formato });
    navigate("/bariatrica-novo");
  };

  return (
    <ScreenShell>
      <Eyebrow>Para los próximos 7 días</Eyebrow>
      <H2>Un solo compromiso: observar</H2>
      <HighlightBox className="mt-8">
        <p className="text-xl text-indigo-950 leading-relaxed">
          Cuando un paciente salga de tu consulta SIN agendar tratamiento (o sin comprar el paquete/servicio),
          toma 30 segundos y anota:
        </p>
        <div className="mt-4 space-y-3">
          <p className="text-xl font-semibold text-indigo-950">¿Qué dijo exactamente?</p>
          <p className="text-xl font-semibold text-indigo-950">¿Fue excusa social o razón real?</p>
        </div>
        <p className="mt-6 text-lg italic text-indigo-950/70">Una línea por paciente. Eso es todo.</p>
      </HighlightBox>

      <Body className="mt-10">En la Sesión 2 aterrizamos el método con esos casos reales:</Body>
      <ul className="mt-4 space-y-3 text-lg text-slate-700">
        <li>· Qué pregunta-llave habría destrabado la conversación</li>
        <li>· Cómo se habría podido cerrar</li>
        <li>· Tu comisión 4% aplicada en cada caso</li>
      </ul>

      <HighlightBox className="mt-10 space-y-6">
        <div>
          <label className="text-sm font-semibold uppercase tracking-wider text-indigo-950 block mb-2">
            Fecha Sesión 2
          </label>
          <Input
            type="datetime-local"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="h-14 text-lg bg-white"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-950 mb-3">
            Formato preferido
          </p>
          <div className="space-y-2">
            {[
              "Con un paciente real de tu agenda",
              "Con un role play guiado por Welli",
              "Lo decidimos a último momento",
            ].map((o) => (
              <button
                key={o}
                onClick={() => setFormato(o)}
                className={`w-full text-left px-5 py-3 rounded-lg border-2 text-lg transition-all ${
                  formato === o
                    ? "bg-welli-yellow border-welli-yellow text-indigo-950 font-semibold"
                    : "bg-white border-slate-300 text-indigo-950 hover:border-welli-yellow"
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      </HighlightBox>

      <div className="flex items-center justify-between mt-12 gap-4">
        <Button variant="ghost" size="lg" onClick={onBack} className="text-indigo-950 text-lg h-14 px-6">
          Atrás
        </Button>
        <Button
          size="lg"
          onClick={handleClose}
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 text-lg font-semibold h-14 px-10"
        >
          Cerrar Sesión 1
        </Button>
      </div>
    </ScreenShell>
  );
};

/* ============ CONTROLADOR ============ */

const BASE_SCREENS = [
  S01,
  S02,
  S03,
  QueEsWelli,
  S04,
  S05,
  MercadoViveLigero,
  WegovyAliado,
  S07,
  S08,
  S09,
  S10,
  IndagacionPacks,
  M4_1,
  M4_2,
  M4_3,
  M4_4,
  M4_5,
  M4_6,
  CompromisoPuente,
];

export const OPCION_QUIRURGICA = "Programa para pérdida de peso";

const Sesion1 = () => {
  const [idx, setIdx] = useState(0);
  const { state } = useBariatricaState();
  const allowSurgical = (state.packsOfrecidos ?? state.packsClinica ?? []).includes(
    OPCION_QUIRURGICA,
  );
  const SCREENS = allowSurgical
    ? BASE_SCREENS
    : BASE_SCREENS.filter((s) => s !== M4_2);
  const total = SCREENS.length;

  const next = () => {
    setIdx((i) => Math.min(i + 1, total - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    setIdx((i) => Math.max(i - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const Current = SCREENS[idx];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-950"
          >
            <ArrowLeft className="h-4 w-4" /> Training Hub
          </Link>
          <Link
            to="/bariatrica-novo"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-950"
          >
            Inicio
          </Link>
          <WelliLogoFull size="sm" />
          <div className="flex-1">
            <ProgressBar
              current={idx + 1}
              total={total}
              label="Sesión 1 — Método consultivo"
            />
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <div key={idx}>
          <Current onNext={next} onBack={idx === 0 ? undefined : back} />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sesion1;
