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
      <Eyebrow>Sesión 2 — Tu práctica en aplicación</Eyebrow>
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
      <Anchor>Hoy aterrizamos todo en tu consulta.</Anchor>
      <NavigationButtons onBack={onBack} onNext={onNext} />
    </div>
  </ScreenShell>
);

/* === MÓDULO 5 === */

// 5.1 Clasificador excusa social vs razón real
const M5_1 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>Módulo 5 — Conversaciones con tu paciente</Eyebrow>
      <H2>Clasifica: ¿excusa social o razón real?</H2>
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
      Cada objeción tiene su propia pregunta-llave. Veamos las 5 más comunes en tus pacientes.
    </Body>
    <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Ver las 5 conversaciones" />
  </ScreenShell>
);


// 5.3 Quiz de las 5 conversaciones
const M5_3 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>Las 5 conversaciones más comunes</Eyebrow>
      <H2>Elige la mejor respuesta en cada caso</H2>
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
          Nunca aceptes un "no" sin haber hecho UNA pregunta más.
        </p>
      </HighlightBox>
      <Body className="max-w-3xl mx-auto">
        No es presionar. Es no abandonar al paciente con un "lo voy a pensar" que sabemos que no es verdad.
      </Body>
      <Body className="max-w-3xl mx-auto">La pregunta-llave es esa "pregunta más".</Body>
      <Body className="max-w-3xl mx-auto font-semibold text-indigo-950">
        Si después de la pregunta-llave el paciente sigue diciendo no, respeta su decisión. Pero nunca aceptes el primer "no" sin antes haber explorado qué hay detrás.
      </Body>
      <NavigationButtons onBack={onBack} onNext={onNext} />
    </div>
  </ScreenShell>
);

// 5.5 Transición
/* === MÓDULO 6 === */

// 6.1
const M6_1 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Módulo 6 — Welli en tu práctica</Eyebrow>
    <H2>La cuota fija de bienestar</H2>
    <Body className="mt-8">
      El concepto que cambia la conversación de plata con tus pacientes:
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
      <H2>Arma tu frase para presentar Welli</H2>
      <Body className="mt-4">Elige una opción por bloque y ve cómo se construye una frase completa de presentación.</Body>
      <div className="mt-8">
        <WelliPitchBuilder onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// 6.4 Simulación Plan B
const M6_4 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <Eyebrow>Cuando el crédito no se aprueba</Eyebrow>
      <H2>Practica el Plan B en una simulación</H2>

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
            Tu tono importa MÁS que las palabras. Tranquilo, profesional, como si dijera la hora.
          </Body>
        </div>
        <WarningBox>
          <p className="text-lg font-semibold text-indigo-950 uppercase tracking-wider">Lo que NUNCA se hace</p>
          <p className="text-xl text-indigo-950 mt-3">
            Decir "uy", decir "le negaron", decir "no sé por qué".
          </p>
        </WarningBox>
      </div>

      <Body className="mt-10">3 momentos ramificados. Elige cómo respondes y ve la consecuencia.</Body>
      <div className="mt-6">
        <PlanBSimulation onComplete={() => setDone(true)} />
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

/* === MÓDULO 7 === */

// 7.1 Bifurcación
const M7_1 = ({ onNext, onBack, setBranch }: ScreenProps) => (
  <ScreenShell center>
    <div className="text-center space-y-10">
      <Eyebrow>Módulo 7 — Aplicación práctica en vivo</Eyebrow>
      <H1>Hasta ahora vimos el método. Ahora lo aplicamos.</H1>
      <Body>Tú ya decidiste cómo prefieres esta práctica:</Body>
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
        Ambos caminos tienen el mismo objetivo: que tú veas funcionar el método con tus propios ojos y manos.
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
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Qué sabes del paciente? (edad, motivo de consulta, antecedentes)</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Qué pack inicial estás considerando?</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Hay algo que te preocupe especialmente en esta consulta?</li>
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
    <Body className="mt-8">Tu presentación de Welli al paciente:</Body>
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
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>Lleva la consulta normal.</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>Welli toma notas en silencio.</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>En el momento de presentar inversión, activa Welli Check.</li>
    </ul>
    <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Empezar la consulta" />
  </ScreenShell>
);

// 7.2B
const PERFILES = [
  {
    nombre: "Diana",
    datos: ["31 años", "IMC 31 kg/m²", "Sin ninguna condición de salud relevante"],
    contexto: "[Personalidad y contexto — pendiente de confirmación de Novo]",
  },
  {
    nombre: "Paola",
    datos: ["34 años", "IMC 28 kg/m²"],
    contexto: "[Contexto — pendiente de confirmación de Novo]",
  },
  {
    nombre: "Tatiana",
    datos: ["27 años", "IMC ~29 kg/m² (por confirmar con Novo)"],
    contexto: "[Contexto — pendiente de confirmación de Novo]",
  },
];

const M7_2B = ({ onNext, onBack }: ScreenProps) => {
  const { state, update } = useBariatricaState();
  const sel = state.rolePlayPerfil ?? "";
  return (
    <ScreenShell>
      <Eyebrow>Rama B · Role play</Eyebrow>
      <H2>Preparación del role play</H2>
      <Body className="mt-8">
        Welli va a actuar como uno de estos 3 pacientes del programa Vive Ligero.
      </Body>
      <Body className="mt-2 font-semibold text-indigo-950">Elige con cuál quieres practicar:</Body>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {PERFILES.map((p) => {
          const on = sel === p.nombre;
          return (
            <button
              key={p.nombre}
              onClick={() => update({ rolePlayPerfil: p.nombre })}
              className={`text-left rounded-2xl border-2 p-6 transition-all ${
                on
                  ? "bg-welli-yellow border-welli-yellow"
                  : "bg-white border-slate-300 hover:border-welli-yellow"
              }`}
            >
              <p className="text-2xl font-bold text-indigo-950 uppercase tracking-wide">{p.nombre}</p>
              <ul className="mt-4 space-y-1 text-base text-indigo-950">
                {p.datos.map((d) => (
                  <li key={d}>· {d}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-indigo-950/70">{p.contexto}</p>
            </button>
          );
        })}
      </div>
      <div className="mt-10 space-y-4">
        <Body>Al seleccionar un perfil, Welli entra en personaje según ese perfil.</Body>
        <Body>Tú llevas la consulta como real.</Body>
        <Body>En cualquier momento puedes pausar y preguntar algo "fuera de personaje".</Body>
      </div>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Empezar role play" nextDisabled={!sel} />
    </ScreenShell>
  );
};


// 7.3B
const M7_3B = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Rama B · Role play</Eyebrow>
    <H2>Debrief del role play</H2>
    <Body className="mt-8">Análisis honesto de lo que acabamos de ver:</Body>
    <ul className="mt-6 space-y-4 text-xl text-slate-700">
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Qué sentiste que hiciste bien?</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿En qué momento te sentiste incómodo?</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Identificaste alguna excusa social vs razón real?</li>
      <li className="flex gap-4"><span className="text-welli-yellow text-3xl leading-none">▸</span>¿Hubo un momento donde sentiste que "perdí al paciente"? ¿Cuál?</li>
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
      <Eyebrow>Módulo 8 — Tus 3 compromisos</Eyebrow>
      <H2>3 cosas concretas que cambian tu consulta desde mañana</H2>
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
      <H2>Tu compromiso personal</H2>
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
      <Eyebrow>Tus próximos pasos</Eyebrow>
      <H2>Acompañamiento</H2>
      <ul className="mt-10 space-y-6 text-xl text-slate-700">
        <li>
          <p className="font-semibold text-indigo-950 uppercase tracking-wider text-base">Esta semana</p>
          <p className="mt-2">Implementa los 3 compromisos con tus próximos pacientes.</p>
        </li>
        <li>
          <p className="font-semibold text-indigo-950 uppercase tracking-wider text-base">Próximas 4 semanas</p>
          <p className="mt-2">Welli hace seguimiento semanal por WhatsApp y revisa métricas contigo.</p>
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
          Gracias por tu tiempo, Doctor. Empezamos a transformar tu consulta desde mañana.
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

/* === WELLI CHECK VIABILIDAD === */

const WelliCheckViabilidad = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Welli Check para viabilidad</Eyebrow>
    <H2>Antes de presentar la inversión, valida viabilidad en 30 segundos</H2>
    <Body className="mt-6">
      Welli Check no es solo una herramienta de cierre. Es una herramienta de{" "}
      <span className="font-semibold text-indigo-950">calificación temprana</span>.
    </Body>
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <SoftBox>
        <Eyebrow>Sin Welli Check</Eyebrow>
        <p className="text-lg text-indigo-950 mt-3">
          Tienes la conversación completa. Presentas el precio. El paciente dice "no puedo". Perdiste 45 minutos.
        </p>
      </SoftBox>
      <HighlightBox>
        <Eyebrow>Con Welli Check al inicio</Eyebrow>
        <p className="text-lg text-indigo-950 mt-3">
          En 30 segundos sabes si el paciente tiene cupo. Enfocas la conversación en valor, no en si puede pagar.
        </p>
      </HighlightBox>
    </div>
    <HighlightBox className="mt-10">
      <Eyebrow>Frase para introducirlo al paciente</Eyebrow>
      <p className="text-lg italic text-indigo-950 mt-3 leading-relaxed">
        "Antes de mostrarle el plan, tengo una herramienta que en 30 segundos le dice si le aprobamos. Sin afectar su historial. Le envío el link ahora y cuando termine la evaluación clínica ya sabemos por dónde va."
      </p>
    </HighlightBox>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

/* === CONTROLADOR === */

const LINEAR_BEFORE_BRANCH = [
  A1,
  M5_1, M5_2, M5_3, M5_4,
  M6_1, M6_2, M6_4,
  WelliCheckViabilidad,
  M7_1,
];
const BRANCH_A = [M7_2A, M7_3A];
const BRANCH_B = [M7_2B, M7_3B];
const MODULO_8 = [M8_1, M8_2, M8_3];

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
            <ProgressBar current={idx + 1} total={total} label="Sesión 2 — Aplicación y objeciones" />
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
