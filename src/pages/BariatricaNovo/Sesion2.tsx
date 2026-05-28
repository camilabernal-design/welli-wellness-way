import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WelliLogoFull from "@/components/WelliLogoFull";
import { ArrowLeft } from "lucide-react";
import ScreenShell from "@/components/BariatricaNovo/ScreenShell";
import NavigationButtons from "@/components/BariatricaNovo/NavigationButtons";
import ProgressBar from "@/components/BariatricaNovo/ProgressBar";
import {
  HighlightBox,
  WarningBox,
  PracticeBox,
  SoftBox,
} from "@/components/BariatricaNovo/HighlightBox";
import { useBariatricaState } from "@/hooks/useBariatricaState";
import PackSimulator from "@/components/BariatricaNovo/interactive/PackSimulator";
import NextPatientForm from "@/components/BariatricaNovo/interactive/NextPatientForm";
import ExcuseClassifier from "@/components/BariatricaNovo/interactive/ExcuseClassifier";
import ConversationsQuiz from "@/components/BariatricaNovo/interactive/ConversationsQuiz";
import WelliPitchBuilder from "@/components/BariatricaNovo/interactive/WelliPitchBuilder";
import PlanBSimulation from "@/components/BariatricaNovo/interactive/PlanBSimulation";
import CommitmentSealing from "@/components/BariatricaNovo/interactive/CommitmentSealing";

type ScreenProps = {
  onNext: () => void;
  onBack?: () => void;
  branch?: "A" | "B" | null;
  setBranch?: (b: "A" | "B") => void;
};

const H1 = ({ children }: any) => (
  <h1 className="text-4xl md:text-5xl font-bold text-indigo-950 tracking-tight leading-tight">{children}</h1>
);
const H2 = ({ children }: any) => (
  <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 tracking-tight">{children}</h2>
);
const Eyebrow = ({ children }: any) => (
  <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-welli-yellow-foreground/80">{children}</p>
);
const Body = ({ children, className = "" }: any) => (
  <p className={`text-xl md:text-2xl text-slate-700 leading-relaxed ${className}`}>{children}</p>
);
const Anchor = ({ children }: any) => (
  <p className="text-2xl md:text-3xl italic text-indigo-950 leading-relaxed font-medium">{children}</p>
);
const Bullet = ({ items }: { items: string[] }) => (
  <ul className="space-y-4">
    {items.map((t, i) => (
      <li key={i} className="flex gap-4 text-xl text-slate-700 leading-relaxed">
        <span className="text-welli-yellow text-3xl leading-none">▸</span>
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

/* === APERTURA === */

// 2.0.1
const A1 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell center>
    <div className="text-center space-y-10">
      <WelliLogoFull size="lg" />
      <Eyebrow>Sesión 2 — Su práctica en aplicación</Eyebrow>
      <H1>Bienvenido de vuelta, Doctor.</H1>
      <Body className="max-w-3xl mx-auto">La semana pasada vimos:</Body>
      <div className="max-w-2xl mx-auto text-left">
        <Bullet
          items={[
            "Cómo los pacientes se pierden por valor, no por precio",
            "La clínica con 4 sedes que pasó del estancamiento a $1.645M en 7 meses",
            "El triángulo del valor (resultado + tiempo + acompañamiento)",
          ]}
        />
      </div>
      <Anchor>Hoy aterrizamos todo en su consulta.</Anchor>
      <NavigationButtons onBack={onBack} onNext={onNext} />
    </div>
  </ScreenShell>
);

// 2.0.2
const A2 = ({ onNext, onBack }: ScreenProps) => {
  const { state, update } = useBariatricaState();
  const [val, setVal] = useState(state.reconexionSesion2 ?? "");
  const opts = [
    "Sí, tengo varios casos",
    "Sí, pero pocos",
    "Lo intenté pero no logré",
    "No tuve tiempo",
  ];
  const handle = (o: string) => {
    setVal(o);
    update({ reconexionSesion2: o });
  };
  return (
    <ScreenShell>
      <H2>¿Cómo le fue esta semana observando?</H2>
      <Body className="mt-8">El compromiso fue:</Body>
      <HighlightBox className="mt-4">
        <p className="text-xl italic text-indigo-950">
          "Cuando un paciente salga sin agendar tratamiento, anote qué dijo y si fue excusa social o razón real."
        </p>
      </HighlightBox>
      <p className="text-2xl font-semibold text-indigo-950 mt-10">¿Pudo hacerlo?</p>
      <div className="mt-6 space-y-3">
        {opts.map((o) => (
          <button
            key={o}
            onClick={() => handle(o)}
            className={`w-full text-left px-6 py-4 rounded-xl border-2 text-lg transition-all ${
              val === o
                ? "bg-welli-yellow border-welli-yellow text-indigo-950 font-semibold"
                : "bg-white border-slate-300 text-indigo-950 hover:border-welli-yellow"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
      <Body className="mt-10 italic">Sea cual sea su respuesta, hoy seguimos.</Body>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar al Módulo 4" />
    </ScreenShell>
  );
};

/* === MÓDULO 4 === */

// 4.1
const M4_1 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Módulo 4 — Sus 3 packs</Eyebrow>
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
        Recuerde: el precio de cada componente individual no cambia. Solo cambia la forma de presentarlo.
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
  onNext,
  onBack,
}: any) => (
  <ScreenShell withNovo>
    <Eyebrow>Pack {num}</Eyebrow>
    <H1>{title}</H1>
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

const M4_2 = (p: ScreenProps) => (
  <PackScreen
    {...p}
    num="1 · Quirúrgico"
    title="Pack quirúrgico"
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
      <H1 >NUNCA presente las 3 opciones sin recomendar una.</H1>
      <Body className="mt-6">
        Eso le pasa la decisión al paciente. Y el paciente sin guía dice "lo voy a pensar" — que casi siempre significa "no me lo trato".
      </Body>
      <Body className="mt-4">
        Si el caso es mixto, recomiende el más integral. La sobre-recomendación inteligente es preferible a la sub-recomendación tímida.
      </Body>
      <div className="mt-12"><H2>Practique: ¿cuál pack para cada paciente?</H2></div>
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
      <H2>Piense en su próximo paciente real de esta semana</H2>
      <div className="mt-8">
        <NextPatientForm onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar al Módulo 5" nextDisabled={!done} />
    </ScreenShell>
  );
};

/* === MÓDULO 5 === */

// 5.1 Clasificador excusa social vs razón real
const M5_1 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>Módulo 5 — Conversaciones con su paciente</Eyebrow>
      <H2>Clasifique: ¿excusa social o razón real?</H2>
      <Body className="mt-4">Aparecen frases reales de pacientes. Decida cómo clasificaría cada una.</Body>
      <div className="mt-8">
        <ExcuseClassifier onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// 5.2
const M5_2 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>La pregunta-llave</Eyebrow>
    <Body className="mt-6">
      La forma de descubrir si una objeción es excusa social o razón real no es asumir, no es presionar, no es responder más fuerte.
    </Body>
    <Body className="mt-4 font-semibold text-indigo-950">
      Es hacer UNA pregunta específica antes de despedirse del paciente.
    </Body>
    <HighlightBox className="mt-10">
      <p className="text-xl font-semibold text-indigo-950 mb-4">Estructura de la pregunta-llave:</p>
      <Bullet
        items={[
          "No es argumentativa",
          "No defiende su posición",
          "Es exploratoria",
          "Invita al paciente a profundizar",
          "Específica a la objeción",
        ]}
      />
    </HighlightBox>
    <Body className="mt-10">
      La llamamos "pregunta-llave" porque, como una llave, abre la verdadera razón detrás de la objeción.
    </Body>
    <Body className="mt-4">
      Cada objeción tiene su propia pregunta-llave. Veamos las 5 más comunes en pacientes bariátricos.
    </Body>
    <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Ver las 5 conversaciones" />
  </ScreenShell>
);

// 5.3 Tabs
type Conversacion = {
  label: string;
  intro: string;
  pregunta: string;
  ramaSi: { trigger: string; respuesta: string };
  ramaNo: { trigger: string; respuesta: string };
};
const CONVS: Conversacion[] = [
  {
    label: "1. Lo voy a pensar",
    intro:
      'La objeción más frecuente. Casi siempre es excusa social. Casi siempre, lo que el paciente está pensando es: "no sé cómo voy a pagar esto".',
    pregunta:
      "Doctor [paciente], antes de que se vaya: ¿hay algo del plan de tratamiento con lo que no esté del todo de acuerdo?",
    ramaSi: {
      trigger: `Si responde "No, todo bien, solo lo voy a pensar" → es excusa social. Razón real = plata.`,
      respuesta:
        "Si es el tema económico, justo para eso tenemos una cuota fija que probablemente le sirve. ¿Lo revisamos antes de que se vaya? Toma 30 segundos.",
    },
    ramaNo: {
      trigger: `Si responde "Sí, esto sí me preocupa..." → es razón real clínica. Resuélvala primero.`,
      respuesta: "",
    },
  },
  {
    label: "2. No tengo dinero",
    intro:
      "La respuesta más honesta. El paciente le está diciendo el obstáculo directamente. No necesita pregunta-llave compleja — necesita ver la salida.",
    pregunta:
      "Si tuviera una forma de pagarlo en cuotas mensuales fijas y cómodas, ¿podría empezar el tratamiento esta semana?",
    ramaSi: {
      trigger: `Si responde "Sí, claro" → ya tiene el camino.`,
      respuesta:
        "Justo para eso tenemos Welli. Le costaría aproximadamente $X al mes durante Y meses. ¿Hacemos la consulta de 30 segundos por WhatsApp y vemos si le aprueban?",
    },
    ramaNo: {
      trigger: `Si responde "Pues... primero quiero ver si me alcanza" → necesita números antes.`,
      respuesta:
        "Use el cotizador. Muéstrele cifras específicas. Los números concretos disipan el miedo abstracto.",
    },
  },
  {
    label: "3. Hablar con mi esposo",
    intro:
      'Excusa social común. Rara vez se trata realmente de consultar la decisión. Casi siempre es: "necesito tiempo para procesar esto sin ustedes mirándome".',
    pregunta:
      "¿Qué cree que su esposo/esposa diría cuando le explique la importancia clínica de esto?",
    ramaSi: {
      trigger: `Si responde "Pues seguro me apoya" → la decisión es realmente suya. Es excusa.`,
      respuesta:
        "Entonces avancemos con la pre-aprobación de Welli ahora. Usted habla con su pareja después con el dato concreto de la cuota mensual, que es más útil que solo el monto total.",
    },
    ramaNo: {
      trigger: `Si responde "No estoy seguro, él decide los temas grandes" → sí necesita consultar.`,
      respuesta:
        "No lo deje ir sin agenda concreta: Hablen hoy en la noche. Mañana a las 9 hago seguimiento por WhatsApp.",
    },
  },
  {
    label: "4. Ozempic más barato",
    intro:
      "Específica de pacientes bariátricos hoy. El paciente comparó precio de medicamento suelto vs su plan integral.",
    pregunta:
      "¿Le ofrecieron en ese otro lado el seguimiento médico mensual, la evaluación de ajustes, y el acompañamiento profesional?",
    ramaSi: {
      trigger: "La respuesta casi siempre es no. El paciente no estaba comparando lo mismo.",
      respuesta:
        "El medicamento suelto sin supervisión es riesgoso — efectos secundarios, ajustes de dosis, abandono prematuro. Lo que ofrecemos es programa con su salud cuidada profesionalmente. Pagarlo cómodo con Welli vuelve viable el plan completo.",
    },
    ramaNo: { trigger: "", respuesta: "" },
  },
  {
    label: "5. Solo el medicamento",
    intro:
      "Específica de bariátrica con manejo farmacológico. El paciente quiere comprar solo la pieza visible (medicamento) y se ahorra el resto.",
    pregunta:
      "¿Qué pasaría si después de 3 meses no ve los resultados esperados, qué haría?",
    ramaSi: {
      trigger:
        "Esta pregunta lleva al paciente a imaginar el riesgo de tratamiento sin seguimiento. Casi siempre responde algo como \"pues no sé, dejarlo\".",
      respuesta:
        "Exacto. Y eso es lo que pasa con el 60% de pacientes que toman el medicamento sin seguimiento — abandonan a los 3 meses sin resultados visibles. El programa completo no es un extra, es lo que asegura que el medicamento funcione. Con Welli usted lo paga todo en cuotas sin que le pese.",
    },
    ramaNo: { trigger: "", respuesta: "" },
  },
];

// 5.3 Quiz de las 5 conversaciones
const M5_3 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>Las 5 conversaciones bariátricas</Eyebrow>
      <H2>Elija la mejor respuesta en cada caso</H2>
      <div className="mt-8">
        <ConversationsQuiz onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// 5.4
const M5_4 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell center>
    <div className="space-y-10 text-center">
      <Eyebrow>La regla absoluta</Eyebrow>
      <HighlightBox className="max-w-3xl mx-auto">
        <p className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight">
          Nunca acepte un "no" sin haber hecho UNA pregunta más.
        </p>
      </HighlightBox>
      <Body className="max-w-3xl mx-auto">
        No es presionar. Es no abandonar al paciente con un "lo voy a pensar" que sabemos que no es verdad.
      </Body>
      <Body className="max-w-3xl mx-auto">La pregunta-llave es esa "pregunta más".</Body>
      <Body className="max-w-3xl mx-auto font-semibold text-indigo-950">
        Si después de la pregunta-llave el paciente sigue diciendo no, respete su decisión. Pero nunca acepte el primer "no" sin antes haber explorado qué hay detrás.
      </Body>
      <NavigationButtons onBack={onBack} onNext={onNext} />
    </div>
  </ScreenShell>
);

// 5.5 Transición
const M5_5 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell center>
    <div className="space-y-8 text-center">
      <Body>Ya tiene los packs. Ya sabe cómo conversar con su paciente.</Body>
      <Body className="font-semibold text-indigo-950">
        Falta ver la herramienta concreta que hace todo esto viable comercialmente.
      </Body>
      <Body>Veamos cómo Welli encaja en su consulta:</Body>
      <div className="max-w-xl mx-auto text-left">
        <Bullet
          items={[
            "Cuota fija de bienestar",
            "Welli Check en 30 segundos",
            "Qué hacer cuando no se aprueba",
            "Su comisión preferencial 4% (Novo)",
          ]}
        />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar al Módulo 6" />
    </div>
  </ScreenShell>
);

/* === MÓDULO 6 === */

// 6.1
const M6_1 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Módulo 6 — Welli en su práctica</Eyebrow>
    <H2>La cuota fija de bienestar</H2>
    <Body className="mt-8">
      El concepto que cambia la conversación de plata con sus pacientes:
    </Body>
    <HighlightBox className="mt-8 text-center">
      <p className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight">
        No es "crédito".
        <br />
        Es "cuota fija de bienestar".
      </p>
    </HighlightBox>
    <p className="text-2xl font-semibold text-indigo-950 mt-10">¿Por qué importa el lenguaje?</p>
    <ul className="mt-6 space-y-5 text-xl text-slate-700">
      <li className="flex gap-4">
        <span className="text-welli-yellow text-3xl leading-none">▸</span>
        <span><span className="font-semibold text-indigo-950">"Crédito"</span> activa: deuda, miedo, banco, intereses, papeleo.</span>
      </li>
      <li className="flex gap-4">
        <span className="text-welli-yellow text-3xl leading-none">▸</span>
        <span><span className="font-semibold text-indigo-950">"Cuota fija de bienestar"</span> activa: pago mensual cómodo, sin sorpresas, parte del plan de salud.</span>
      </li>
    </ul>
    <Anchor>
      <span className="block mt-10">
        El paciente que escucha "cuota fija" no tiene que decidir entre "lo hago o no lo hago".
        <br />
        Decide "cómo lo empiezo hoy".
      </span>
    </Anchor>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 6.2 Constructor de frase Welli
const M6_2 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <H2>Arme su frase para presentar Welli</H2>
      <Body className="mt-4">Elija una opción por bloque y vea cómo se construye una frase completa de presentación.</Body>
      <div className="mt-8">
        <WelliPitchBuilder onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// 6.3
const M6_3 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Welli Check</Eyebrow>
    <H2>La consulta de 30 segundos</H2>
    <p className="text-2xl font-semibold text-indigo-950 mt-10">¿Qué es?</p>
    <Body className="mt-3">
      Una pre-aprobación rápida que el paciente hace desde su celular por WhatsApp. Solo necesita cédula y datos básicos. El sistema le dice si tiene cupo aprobado, y por cuánto.
    </Body>
    <p className="text-2xl font-semibold text-indigo-950 mt-10">¿Por qué cambia su consulta?</p>
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      <SoftBox>
        <Eyebrow>Antes</Eyebrow>
        <p className="text-lg text-indigo-950 mt-3">
          Tiene la conversación completa sin saber si el paciente puede pagar. Si al final no aplica, perdió 45 min de valoración.
        </p>
      </SoftBox>
      <HighlightBox>
        <Eyebrow>Después</Eyebrow>
        <p className="text-lg text-indigo-950 mt-3">
          Sabe desde el inicio si el paciente tiene cupo. Si lo tiene, la conversación se enfoca en valor. Si no lo tiene, sabe que necesita Plan B.
        </p>
      </HighlightBox>
    </div>
    <HighlightBox className="mt-10">
      <Eyebrow>Frase para presentárselo al paciente</Eyebrow>
      <p className="text-lg md:text-xl italic text-indigo-950 mt-4 leading-relaxed">
        "Tenemos una herramienta que en 30 segundos le dice si califica, sin afectar su historial crediticio. Le envío el link por WhatsApp ahora, lo hace mientras yo termino con esta paciente, y cuando salga le confirmamos. Así no le pierdo el tiempo si no aplica."
      </p>
    </HighlightBox>
    <Body className="mt-6">
      La última frase es clave: <span className="font-semibold text-indigo-950">"no le pierdo el tiempo"</span>. Comunica respeto profesional.
    </Body>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 6.4 Simulación Plan B
const M6_4 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>Cuando el crédito no se aprueba</Eyebrow>
      <H2>Practique el Plan B en una simulación</H2>

      <div className="mt-8 space-y-6">
        <div>
          <Eyebrow>Lo que va a pasar</Eyebrow>
          <Body className="mt-3">
            Aproximadamente 30-40% de los pacientes que aplican no se ajustan en primera instancia. Es normal. NO es un fracaso. Es parte del proceso.
          </Body>
        </div>
        <div>
          <Eyebrow>Los primeros 5 segundos</Eyebrow>
          <Body className="mt-3">
            Su tono importa MÁS que las palabras. Tranquilo, profesional, como si dijera la hora.
          </Body>
        </div>
        <WarningBox>
          <p className="text-lg font-semibold text-indigo-950 uppercase tracking-wider">Lo que NUNCA se hace</p>
          <p className="text-xl text-indigo-950 mt-3">
            Decir "uy", decir "le negaron", decir "no sé por qué".
          </p>
        </WarningBox>
      </div>

      <Body className="mt-10">3 momentos ramificados. Elija cómo responde y vea la consecuencia.</Body>
      <div className="mt-6">
        <PlanBSimulation onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// 6.5 — CON LOGO NOVO
const M6_5 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell withNovo>
    <Eyebrow>Su comisión preferencial</Eyebrow>
    <H2>Por la alianza con Novo Nordisk</H2>
    <Body className="mt-8">
      Por entrar a este programa a través del convenio con Novo Nordisk, su comisión Welli es preferencial:
    </Body>
    <HighlightBox className="mt-10 text-center">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Eyebrow>Comisión estándar Welli</Eyebrow>
          <p className="text-5xl font-bold text-indigo-950 mt-4">5%</p>
        </div>
        <div>
          <Eyebrow>Su comisión preferencial</Eyebrow>
          <p className="text-5xl font-bold text-indigo-950 mt-4">4%</p>
        </div>
      </div>
      <p className="text-lg text-indigo-950 mt-6 font-semibold">Beneficio por la alianza con Novo</p>
    </HighlightBox>
    <Body className="mt-10">1 punto porcentual sobre cada desembolso.</Body>
    <Body className="mt-4 font-semibold text-indigo-950">
      En $1.000 millones desembolsados al año, son $10 millones adicionales para su clínica.
    </Body>
    <Body className="mt-4">Esta condición se mantiene mientras la clínica esté activa en el programa.</Body>
    <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar al Módulo 7" />
  </ScreenShell>
);

/* === MÓDULO 7 === */

// 7.1 Bifurcación
const M7_1 = ({ onNext, onBack, setBranch }: ScreenProps) => (
  <ScreenShell center>
    <div className="text-center space-y-10">
      <Eyebrow>Módulo 7 — Aplicación práctica en vivo</Eyebrow>
      <H1>Hasta ahora vimos el método. Ahora lo aplicamos.</H1>
      <Body>Usted ya decidió cómo prefiere esta práctica:</Body>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <button
          onClick={() => {
            setBranch?.("A");
            onNext();
          }}
          className="bg-white border-2 border-slate-300 hover:border-welli-yellow rounded-2xl p-10 text-xl font-semibold text-indigo-950 transition-all"
        >
          Continuar con paciente real
        </button>
        <button
          onClick={() => {
            setBranch?.("B");
            onNext();
          }}
          className="bg-white border-2 border-slate-300 hover:border-welli-yellow rounded-2xl p-10 text-xl font-semibold text-indigo-950 transition-all"
        >
          Continuar con role play
        </button>
      </div>
      <Body className="max-w-3xl mx-auto">
        Ambos caminos tienen el mismo objetivo: que usted vea funcionar el método con sus propios ojos y manos.
      </Body>
      {onBack && (
        <div className="flex justify-start">
          <Button variant="ghost" size="lg" onClick={onBack} className="text-indigo-950 text-lg h-14 px-6">
            Atrás
          </Button>
        </div>
      )}
    </div>
  </ScreenShell>
);

// 7.2A
const M7_2A = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Rama A · Paciente real</Eyebrow>
    <H2>Briefing: paciente real en vivo</H2>
    <Body className="mt-8">Antes de que llegue, alineemos:</Body>
    <ul className="mt-6 space-y-4 text-xl text-slate-700">
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Qué sabe del paciente? (edad, motivo de consulta, antecedentes)</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Qué pack inicial está considerando?</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Hay algo que le preocupe especialmente en esta consulta?</li>
    </ul>
    <div className="my-10 border-t border-slate-200" />
    <HighlightBox>
      <Eyebrow>Protocolo en la consulta</Eyebrow>
      <ul className="mt-4 space-y-3 text-lg text-indigo-950">
        <li className="flex gap-4"><span className="text-welli-yellow text-2xl leading-none">▸</span>Welli observa, no interrumpe.</li>
        <li className="flex gap-4"><span className="text-welli-yellow text-2xl leading-none">▸</span>Si surge una oportunidad importante, coordinamos con una seña discreta.</li>
        <li className="flex gap-4"><span className="text-welli-yellow text-2xl leading-none">▸</span>El paciente sabrá que Welli es una colega que está hoy observando para apoyar a la clínica.</li>
        <li className="flex gap-4"><span className="text-welli-yellow text-2xl leading-none">▸</span>Welli Check lo activamos juntos en el momento adecuado.</li>
      </ul>
    </HighlightBox>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 7.3A
const M7_3A = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Rama A · Paciente real</Eyebrow>
    <H2>Cuando llegue el paciente</H2>
    <Body className="mt-8">Su presentación de Welli al paciente:</Body>
    <HighlightBox className="mt-6">
      <Eyebrow>Frase sugerida</Eyebrow>
      <p className="text-lg md:text-xl italic text-indigo-950 mt-4 leading-relaxed">
        "Doctor [paciente], permítame presentarle a [Mariana/nombre]. Es una colega que está hoy con nosotros observando cómo trabajamos para apoyar a la clínica. Si está cómodo con eso, procedemos."
      </p>
    </HighlightBox>
    <Body className="mt-6">
      El paciente casi siempre acepta. Si rechaza, Welli sale de la consulta sin problema y regresa al final.
    </Body>
    <div className="my-10 border-t border-slate-200" />
    <p className="text-2xl font-semibold text-indigo-950">Después de presentar a Welli:</p>
    <ul className="mt-6 space-y-4 text-xl text-slate-700">
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>Lleve la consulta normal.</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>Welli toma notas en silencio.</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>En el momento de presentar inversión, active Welli Check.</li>
    </ul>
    <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Empezar la consulta" />
  </ScreenShell>
);

// 7.2B
const M7_2B = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Rama B · Role play</Eyebrow>
    <H2>Preparación del role play</H2>
    <Body className="mt-8">Welli va a actuar como un paciente bariátrico real.</Body>
    <HighlightBox className="mt-8">
      <Eyebrow>El perfil que Welli interpreta</Eyebrow>
      <div className="mt-4 space-y-2 text-lg text-indigo-950">
        <p><span className="font-semibold">Nombre:</span> María (45 años)</p>
        <p><span className="font-semibold">Motivo:</span> viene por sobrepeso significativo</p>
        <p><span className="font-semibold">IMC:</span> 36</p>
        <p><span className="font-semibold">Comorbilidades:</span> prediabetes</p>
        <p><span className="font-semibold">Trabajo:</span> profesional independiente</p>
        <p><span className="font-semibold">Antecedentes:</span> ha intentado dietas varias veces sin éxito</p>
      </div>
      <p className="text-lg text-indigo-950 mt-5">
        <span className="font-semibold">Personalidad:</span> amable pero escéptica. Tendencia a decir "lo voy a pensar" cuando le presentan precios.
      </p>
    </HighlightBox>
    <div className="mt-10 space-y-4">
      <Body>Usted lleva la consulta como real.</Body>
      <Body>Welli responde como respondería este paciente.</Body>
      <Body>En cualquier momento puede pausar y preguntar algo "fuera de personaje".</Body>
    </div>
    <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Empezar role play" />
  </ScreenShell>
);

// 7.3B
const M7_3B = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Rama B · Role play</Eyebrow>
    <H2>Debrief del role play</H2>
    <Body className="mt-8">Análisis honesto de lo que acabamos de ver:</Body>
    <ul className="mt-6 space-y-4 text-xl text-slate-700">
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Qué sintió que hizo bien?</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿En qué momento se sintió incómodo?</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Identificó alguna excusa social vs razón real?</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Hubo un momento donde sintió que "perdí al paciente"? ¿Cuál?</li>
    </ul>
    <div className="my-10 border-t border-slate-200" />
    <SoftBox>
      <Eyebrow>Estructura de feedback</Eyebrow>
      <ul className="mt-4 space-y-3 text-lg text-indigo-950">
        <li className="flex gap-4"><span className="text-welli-yellow text-2xl leading-none">▸</span>Algo que hizo muy bien (refuerzo)</li>
        <li className="flex gap-4"><span className="text-welli-yellow text-2xl leading-none">▸</span>Un momento clave que se puede mejorar</li>
        <li className="flex gap-4"><span className="text-welli-yellow text-2xl leading-none">▸</span>Una sugerencia concreta para la próxima conversación real</li>
      </ul>
    </SoftBox>
    <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar al cierre" />
  </ScreenShell>
);

/* === MÓDULO 8 === */

// 8.1 Compromisos con firma digital
const M8_1 = ({ onNext, onBack }: ScreenProps) => {
  const { update } = useBariatricaState();
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>Módulo 8 — Sus 3 compromisos</Eyebrow>
      <H2>3 cosas concretas que cambian su consulta desde mañana</H2>
      <div className="mt-8">
        <CommitmentSealing
          onComplete={(d) => {
            update({ compromisoNombre: d.name, compromisoFecha: d.date });
            setDone(true);
          }}
        />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar" nextDisabled={!done} />
    </ScreenShell>
  );
};

// 8.2 Firma
const M8_2 = ({ onNext, onBack }: ScreenProps) => {
  const { state, update } = useBariatricaState();
  const [nombre, setNombre] = useState(state.compromisoNombre ?? "");
  const [fecha, setFecha] = useState(state.compromisoFecha ?? "");
  const [firma, setFirma] = useState("");
  const ready = nombre && fecha;

  const handle = () => {
    update({ compromisoNombre: nombre, compromisoFecha: fecha });
    onNext();
  };

  return (
    <ScreenShell>
      <Eyebrow>Firma de compromiso</Eyebrow>
      <H2>Su compromiso personal</H2>
      <HighlightBox className="mt-10 space-y-6">
        <div className="text-xl text-indigo-950 leading-relaxed">
          Yo,{" "}
          <Input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="nombre del doctor"
            className="inline-block w-auto min-w-[280px] h-12 text-lg bg-white mx-2"
          />
          , me comprometo a aplicar estos 3 movimientos en mi consulta a partir de{" "}
          <Input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="inline-block w-auto h-12 text-lg bg-white mx-2"
          />
          .
        </div>
        <div>
          <label className="text-sm font-semibold uppercase tracking-wider text-indigo-950 block mb-2">
            Firma
          </label>
          <Input
            value={firma}
            onChange={(e) => setFirma(e.target.value)}
            placeholder="Firma (texto)"
            className="h-14 text-lg bg-white italic"
          />
        </div>
      </HighlightBox>
      <NavigationButtons onBack={onBack} onNext={handle} nextLabel="Confirmar y continuar" nextDisabled={!ready} />
    </ScreenShell>
  );
};

// 8.3 Próximos pasos
const M8_3 = ({ onBack }: ScreenProps) => {
  const navigate = useNavigate();
  const { state, update } = useBariatricaState();
  const [dia, setDia] = useState(state.seguimientoDia ?? "");

  const close = () => {
    update({ seguimientoDia: dia });
    navigate("/bariatrica-novo");
  };

  return (
    <ScreenShell>
      <Eyebrow>Sus próximos pasos</Eyebrow>
      <H2>Acompañamiento</H2>
      <ul className="mt-10 space-y-6 text-xl text-slate-700">
        <li>
          <p className="font-semibold text-indigo-950 uppercase tracking-wider text-base">Esta semana</p>
          <p className="mt-2">Implementa los 3 compromisos con sus próximos pacientes.</p>
        </li>
        <li>
          <p className="font-semibold text-indigo-950 uppercase tracking-wider text-base">Próximas 4 semanas</p>
          <p className="mt-2">Welli hace seguimiento semanal por WhatsApp y revisa métricas con usted.</p>
        </li>
        <li>
          <p className="font-semibold text-indigo-950 uppercase tracking-wider text-base">Siguientes 2 meses</p>
          <p className="mt-2">Acompañamiento mensual presencial con métricas y ajustes según resultados.</p>
        </li>
      </ul>
      <HighlightBox className="mt-10">
        <label className="text-sm font-semibold uppercase tracking-wider text-indigo-950 block mb-2">
          Próximo seguimiento por WhatsApp
        </label>
        <Input
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          placeholder="día de la semana preferido"
          className="h-14 text-lg bg-white"
        />
      </HighlightBox>
      <Anchor>
        <span className="block mt-10 text-center">
          Gracias por su tiempo, Doctor. Empezamos a transformar su consulta desde mañana.
        </span>
      </Anchor>
      <div className="flex items-center justify-between mt-12 gap-4">
        <Button variant="ghost" size="lg" onClick={onBack} className="text-indigo-950 text-lg h-14 px-6">
          Atrás
        </Button>
        <Button
          size="lg"
          onClick={close}
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 text-lg font-semibold h-14 px-10"
        >
          Cerrar sesión
        </Button>
      </div>
    </ScreenShell>
  );
};

/* === CONTROLADOR === */

// Primero los módulos lineales (índice 0..14):
// 0:A1, 1:A2, 2:M4_1, 3:M4_2, 4:M4_3, 5:M4_4, 6:M4_5, 7:M4_6,
// 8:M5_1, 9:M5_2, 10:M5_3, 11:M5_4, 12:M5_5,
// 13:M6_1, 14:M6_2, 15:M6_3, 16:M6_4, 17:M6_5,
// 18:M7_1 (bifurcación)
// 19,20: rama (7.2X, 7.3X)
// 21:M8_1, 22:M8_2, 23:M8_3

const LINEAR_BEFORE_BRANCH = [
  A1, A2,
  M4_1, M4_2, M4_3, M4_4, M4_5, M4_6,
  M5_1, M5_2, M5_3, M5_4, M5_5,
  M6_1, M6_2, M6_3, M6_4, M6_5,
  M7_1,
];
const BRANCH_A = [M7_2A, M7_3A];
const BRANCH_B = [M7_2B, M7_3B];
const MODULO_8 = [M8_1, M8_2, M8_3];

const TOTAL = LINEAR_BEFORE_BRANCH.length + 2 + MODULO_8.length; // 19 + 2 + 3 = 24, spec dice 21; usaremos según corresponda

const Sesion2 = () => {
  const [idx, setIdx] = useState(0);
  const [branch, setBranch] = useState<"A" | "B" | null>(null);

  const screens = (() => {
    if (!branch) return [...LINEAR_BEFORE_BRANCH, ...MODULO_8]; // placeholder
    return [...LINEAR_BEFORE_BRANCH, ...(branch === "A" ? BRANCH_A : BRANCH_B), ...MODULO_8];
  })();
  const total = screens.length;

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

  const Current = screens[idx];

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
            <ProgressBar current={idx + 1} total={total} label="Sesión 2 — Aplicación en su consulta" />
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <div key={`${branch}-${idx}`}>
          <Current onNext={next} onBack={idx === 0 ? undefined : back} branch={branch} setBranch={setBranch} />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sesion2;
