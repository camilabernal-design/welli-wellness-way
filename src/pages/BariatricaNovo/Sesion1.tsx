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
  SoftBox,
} from "@/components/BariatricaNovo/HighlightBox";
import { useBariatricaState } from "@/hooks/useBariatricaState";
import TeamVoteOverlay from "@/components/BariatricaNovo/interactive/TeamVoteOverlay";
import DiagnosticoIndagacion from "@/components/BariatricaNovo/interactive/DiagnosticoIndagacion";
import ValuePerceptionSlider from "@/components/BariatricaNovo/interactive/ValuePerceptionSlider";
import MonthlyDeclineChart from "@/components/BariatricaNovo/interactive/MonthlyDeclineChart";
import PatternsChecklist from "@/components/BariatricaNovo/interactive/PatternsChecklist";
import MetricsRevealed from "@/components/BariatricaNovo/interactive/MetricsRevealed";
import ValueTriangleDiagnostic from "@/components/BariatricaNovo/interactive/ValueTriangleDiagnostic";
import ClosingPhraseBuilder from "@/components/BariatricaNovo/interactive/ClosingPhraseBuilder";

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
const Body = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-xl md:text-2xl text-slate-700 leading-relaxed ${className}`}>{children}</p>
);
const Anchor = ({ children }: { children: React.ReactNode }) => (
  <p className="text-2xl md:text-3xl italic text-indigo-950 leading-relaxed font-medium">
    {children}
  </p>
);

/* ============ PANTALLAS ============ */

// 1.1 Bienvenida
const S01 = ({ onNext }: ScreenProps) => (
  <ScreenShell center>
    <div className="flex flex-col items-center text-center gap-10">
      <WelliLogoFull size="lg" />
      <div className="space-y-6">
        <H1>
          Clínica de Alta Conversión
          <br />y Adherencia
        </H1>
        <Body className="max-w-3xl mx-auto">
          Una sesión diseñada para entender qué está pasando con sus pacientes y ver qué están haciendo las clínicas que más están creciendo.
        </Body>
      </div>
      <div className="text-slate-500 text-sm">
        En colaboración con <span className="font-bold text-indigo-950">Novo Nordisk Colombia</span>
      </div>
      <Button
        onClick={onNext}
        className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 text-xl font-semibold h-16 px-12"
      >
        Empezar la sesión
      </Button>
    </div>
  </ScreenShell>
);

// 1.2 La pregunta honesta
const S02 = ({ onNext, onBack }: ScreenProps) => {
  const { state, update } = useBariatricaState();
  const [selected, setSelected] = useState<string | null>(state.pacientesQueFirman ?? null);
  const messages: Record<string, string> = {
    "1-3": "Está dejando ir muchísimo potencial. Vamos a ver cómo recuperarlo.",
    "4-6": "Está en el promedio del mercado. Vamos a ver cómo subir.",
    "7-9": "Buena base. Vamos a ver qué piezas finas le faltan.",
    "10": "Excelente. ¿Está midiendo solo los que firman, o también los que vienen a valoración?",
  };

  const handlePick = (v: string) => {
    setSelected(v);
    update({ pacientesQueFirman: v as any });
  };

  return (
    <ScreenShell center>
      <div className="text-center space-y-10">
        <H2>Antes de empezar, una pregunta honesta:</H2>
        <Body className="max-w-3xl mx-auto">
          De cada 10 pacientes que usted valora para manejo de obesidad...
          <br />
          <span className="font-semibold text-indigo-950">¿Cuántos terminan tratándose con usted?</span>
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
              <p className="text-xl md:text-2xl text-indigo-950 leading-relaxed">{messages[selected]}</p>
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

// 1.3 Indagación interactiva
const S03 = ({ onNext, onBack }: ScreenProps) => {
  const [done, setDone] = useState(false);
  return (
    <ScreenShell>
      <H2>Cuéntenos cómo trabaja hoy</H2>
      <DiagnosticoIndagacion onComplete={() => setDone(true)} />
      <NavigationButtons onBack={onBack} onNext={onNext} nextDisabled={!done} />
    </ScreenShell>
  );
};

// 1.4 Conversación con su equipo
const S04 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell center>
    <div className="text-center space-y-10">
      <Eyebrow>Pregunta para todos en la sala</Eyebrow>
      <H1>
        Cuando un paciente sale de la consulta
        <br />
        <span className="text-indigo-950">SIN agendar el tratamiento...</span>
      </H1>
      <Anchor>¿Qué creen que pasó?</Anchor>
      <p className="text-slate-500 italic">Discusión libre durante 2-3 minutos</p>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar cuando estén listos" />
    </div>
  </ScreenShell>
);

// 1.5 Reframe central
const S05 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell center>
    <div className="space-y-12 text-center">
      <Anchor>
        Los pacientes no se van por el precio.
        <br />
        <br />
        Se van porque <span className="font-bold not-italic text-indigo-950">NO ENTENDIERON EL VALOR</span> de lo que usted les propuso.
      </Anchor>
      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        <SoftBox className="text-center">
          <Eyebrow>Precio</Eyebrow>
          <p className="text-4xl font-bold text-indigo-950 mt-4">$XX</p>
          <p className="text-slate-500 mt-2">cifra</p>
        </SoftBox>
        <HighlightBox className="text-center">
          <Eyebrow>Valor</Eyebrow>
          <ul className="mt-4 space-y-1 text-xl text-indigo-950 font-medium">
            <li>Resultado</li>
            <li>Salud</li>
            <li>Vida</li>
            <li>Recurrencia</li>
          </ul>
        </HighlightBox>
      </div>
      <Body className="max-w-3xl mx-auto">
        Cuando el paciente sale con el monto en la cabeza pero sin entender el cambio profundo que va a vivir... ya perdió la decisión.
      </Body>
      <NavigationButtons onBack={onBack} onNext={onNext} />
    </div>
  </ScreenShell>
);

// 1.6 Transición al Módulo 2
const S06 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell center>
    <div className="space-y-8 text-center">
      <Body className="max-w-3xl mx-auto leading-loose">
        Le voy a contar algo que hemos visto en una clínica aliada de Welli.
        <br />
        <br />
        Una clínica con 4 sedes en Colombia.
        <br />
        <br />
        Hace 7 meses estaba donde probablemente usted está hoy.
        <br />
        <br />
        Lo que descubrieron cambió completamente su consulta y sus resultados.
        <br />
        <br />
        <span className="font-semibold text-indigo-950">Vale la pena que lo conozca.</span>
      </Body>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar al Módulo 2" />
    </div>
  </ScreenShell>
);

// 2.1 Quiénes son
const S07 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Módulo 2</Eyebrow>
    <H1>Una clínica aliada</H1>
    <HighlightBox className="mt-10 text-center">
      <p className="text-5xl md:text-6xl font-bold text-indigo-950">4 sedes</p>
      <p className="text-2xl text-indigo-950 mt-3">en Colombia</p>
    </HighlightBox>
    <div className="mt-10 space-y-6">
      <Body>Cirujanos bariátricos + manejo médico de obesidad.</Body>
      <Body>Profesionales sólidos. Buena reputación clínica. Pacientes satisfechos.</Body>
      <Body className="font-semibold text-indigo-950">
        Pero algo no estaba terminando de funcionar comercialmente.
      </Body>
    </div>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 2.2 Inicio tímido
const S08 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>El inicio</Eyebrow>
    <H2 >Cuando empezaron con Welli, los números eran modestos:</H2>
    <HighlightBox className="mt-10 text-center">
      <p className="text-5xl font-bold text-indigo-950">1–2 créditos</p>
      <p className="text-2xl text-indigo-950 mt-3">por sede al mes</p>
    </HighlightBox>
    <div className="mt-10 space-y-4">
      <Body>4-8 créditos totales mensuales en la red.</Body>
      <Body>Un comienzo razonable. Pero claramente debajo de su potencial.</Body>
    </div>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 2.3 Estancamiento
const S09 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <H1>Y entonces...</H1>
    <Body className="mt-6">Vinieron varios meses con muy poco o ningún movimiento.</Body>
    <SoftBox className="mt-8">
      <div className="grid grid-cols-5 gap-4 text-center">
        {[
          ["Mes 1", "1"],
          ["Mes 2", "2"],
          ["Mes 3", "0"],
          ["Mes 4", "1"],
          ["Mes 5", "0"],
        ].map(([m, v]) => (
          <div key={m}>
            <p className="text-sm text-slate-500">{m}</p>
            <p className="text-4xl font-bold text-indigo-950 mt-2">{v}</p>
          </div>
        ))}
      </div>
    </SoftBox>
    <div className="mt-10 space-y-6">
      <Body>Llegaron a pensar que tal vez Welli no era para su clínica.</Body>
      <Body>Que tal vez sus pacientes "no eran de financiación".</Body>
      <Body>Que tal vez su modelo de negocio era diferente.</Body>
    </div>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 2.4 Quiebre — 3 patrones
const S10 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>El diagnóstico</Eyebrow>
    <H2>Cuando finalmente revisaron qué estaba pasando honestamente, encontraron 3 patrones:</H2>
    <ul className="mt-10 space-y-8">
      {[
        "El paciente entraba por un tratamiento específico y se iba con eso. Sin volver.",
        "El ticket era alto cuando ocurría, pero no recurrente. Cobrar bien una vez no es cobrar bien muchas veces.",
        "Muchos pacientes calificaban clínicamente para tratamiento, pero no podían pagar. Y se iban. Sin tratarse en ningún lado.",
      ].map((t, i) => (
        <li key={i} className="flex gap-5 text-xl text-slate-700 leading-relaxed">
          <span className="text-welli-yellow text-3xl leading-none">▸</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
    <Anchor>
      <span className="block mt-12">¿Alguno de estos tres patrones le suena?</span>
    </Anchor>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 2.5 La idea
const S11 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell center>
    <div className="space-y-10 text-center">
      <Eyebrow>El descubrimiento</Eyebrow>
      <Anchor>
        El problema no era clínico.
        <br />
        <br />
        Ellos hacían un trabajo médico excelente. La cirugía era buena. El criterio clínico era sólido.
      </Anchor>
      <HighlightBox className="max-w-3xl mx-auto">
        <p className="text-2xl md:text-3xl text-indigo-950 font-semibold">
          El problema era cómo presentaban el tratamiento al paciente.
        </p>
      </HighlightBox>
      <Body>Cambiaron 3 cosas concretas. Y todo cambió en los siguientes 7 meses.</Body>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Ver los 3 movimientos" />
    </div>
  </ScreenShell>
);

// 2.6 Movimiento 1
const S12 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Movimiento 1</Eyebrow>
    <H1>Paquetizaron en niveles</H1>
    <Body className="mt-8">
      En vez de vender procedimientos sueltos (cirugía, consulta, nutrición, farmacología por separado), crearon 3 paquetes integrales:
    </Body>
    <div className="mt-8 space-y-5">
      {[
        ["Pack quirúrgico", "Para pacientes candidatos a cirugía"],
        ["Pack preventivo", "Para manejo médico sin cirugía"],
        ["Pack metabólico integral", "Para pacientes con comorbilidades"],
      ].map(([t, d]) => (
        <div key={t} className="flex gap-5 items-start">
          <span className="text-welli-yellow text-3xl leading-none">▸</span>
          <div>
            <p className="text-2xl font-bold text-indigo-950">{t}</p>
            <p className="text-lg text-slate-600">{d}</p>
          </div>
        </div>
      ))}
    </div>
    <HighlightBox className="mt-10">
      <p className="text-xl text-indigo-950">
        El precio de cada componente individual no cambió.
        <br />
        <span className="font-bold">Solo cambió la forma de presentarlo.</span>
      </p>
    </HighlightBox>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 2.7 Movimiento 2 — CON LOGO NOVO
const S13 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell withNovo>
    <Eyebrow>Movimiento 2</Eyebrow>
    <H1>Integraron Wegovy / Saxenda</H1>
    <Body className="mt-8">
      En la mayoría de sus paquetes incorporaron Wegovy o Saxenda — no como producto adicional, sino como parte estructural del tratamiento.
    </Body>
    <p className="text-2xl font-semibold text-indigo-950 mt-10">Lo que vieron:</p>
    <ul className="mt-4 space-y-5">
      {[
        "El paciente vuelve mes a mes por su tratamiento farmacológico.",
        "Cada visita es un punto de seguimiento, confianza y potencial nuevo cierre.",
        "Mayor adherencia, menor abandono, mejores resultados sostenibles a 12+ meses.",
      ].map((t, i) => (
        <li key={i} className="flex gap-4 text-xl text-slate-700">
          <span className="text-welli-yellow text-3xl leading-none">▸</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
    <HighlightBox className="mt-10">
      <p className="text-2xl text-indigo-950 font-semibold">
        El paciente pasó de evento único a relación continua.
      </p>
    </HighlightBox>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 2.8 Movimiento 3
const S14 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Movimiento 3</Eyebrow>
    <H1>Welli como herramienta de cierre</H1>
    <div className="mt-8 space-y-6">
      <Body>
        Antes: cuando el paciente decía "no tengo el dinero" o "lo voy a pensar", se perdía.
      </Body>
      <Body>
        Después: ofrecen Welli en CADA conversación, no solo cuando el paciente pregunta.
      </Body>
    </div>
    <p className="text-2xl font-semibold text-indigo-950 mt-10">Cambio clave en el lenguaje:</p>
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      <SoftBox>
        <Eyebrow>Antes</Eyebrow>
        <p className="text-xl text-indigo-950 mt-4 italic">"El tratamiento cuesta $X."</p>
      </SoftBox>
      <HighlightBox>
        <Eyebrow>Después</Eyebrow>
        <p className="text-xl text-indigo-950 mt-4 italic">
          "El tratamiento cuesta $X, y se puede pagar en cuotas fijas mensuales de $Y. ¿Vemos si aplica?"
        </p>
      </HighlightBox>
    </div>
    <Body className="mt-10 font-semibold text-indigo-950">
      La conversación de plata dejó de ser una barrera. Se convirtió en un puente.
    </Body>
    <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Ver los resultados" />
  </ScreenShell>
);

// 2.9 Cifras
const S15 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Los resultados</Eyebrow>
    <H2>7 meses después de aplicar los 3 movimientos</H2>
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <SoftBox>
        <Eyebrow>Antes (estancados)</Eyebrow>
        <p className="text-4xl font-bold text-indigo-950 mt-4">1–2 créditos</p>
        <p className="text-lg text-slate-600 mt-2">por sede / mes</p>
      </SoftBox>
      <HighlightBox>
        <Eyebrow>Ahora (mayo 2026)</Eyebrow>
        <p className="text-4xl font-bold text-indigo-950 mt-4">23+ créditos</p>
        <p className="text-lg text-indigo-950/70 mt-2">en lo que va del mes</p>
      </HighlightBox>
    </div>
    <HighlightBox className="mt-8 text-center">
      <Eyebrow>Acumulado 7 meses</Eyebrow>
      <p className="text-5xl md:text-6xl font-bold text-indigo-950 mt-4">192 créditos</p>
      <p className="text-3xl text-indigo-950 font-semibold mt-3">$1.645 millones COP</p>
      <p className="text-xl text-indigo-950/70 mt-2">Ticket promedio: $8.5M</p>
    </HighlightBox>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 2.10 Testimoniales
const S16 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <H2>Pero las cifras son solo la superficie</H2>
    <Body className="mt-6">
      Detrás de cada uno de esos 192 créditos hay un paciente que está viviendo una transformación.
    </Body>
    <div className="mt-10 space-y-6">
      {[1, 2, 3].map((i) => (
        <SoftBox key={i}>
          <p className="text-xl italic text-indigo-950">"[Frase del paciente — placeholder]"</p>
          <div className="mt-4 text-base text-slate-600 space-y-1">
            <p>Paciente, [edad], [contexto breve]</p>
            <p>Tratamiento: [pack / Wegovy / cirugía]</p>
            <p>Financiado con Welli, [duración]</p>
          </div>
        </SoftBox>
      ))}
    </div>
    <Anchor>
      <span className="block mt-12 text-center">
        Cada paciente que vuelve sonriendo es la verdadera medida del éxito.
      </span>
    </Anchor>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 2.11 La pregunta para el doctor
const S17 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell center>
    <div className="text-center space-y-10">
      <Anchor>
        Si esos mismos 3 movimientos funcionaran en su consulta...
      </Anchor>
      <H1>¿Qué cambiaría para usted?</H1>
      <p className="text-slate-500 italic">Discusión libre durante 1-2 minutos.</p>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar al Módulo 3" />
    </div>
  </ScreenShell>
);

// 3.1 Dos trabajos distintos
const S18 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Módulo 3 — Construcción de valor</Eyebrow>
    <H2>En cada consulta, el doctor hace dos trabajos al tiempo:</H2>
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <SoftBox className="text-center">
        <Eyebrow>Cuidar al paciente</Eyebrow>
        <p className="text-2xl font-bold text-indigo-950 mt-4">Su trabajo clínico</p>
      </SoftBox>
      <HighlightBox className="text-center">
        <Eyebrow>Comunicar el valor</Eyebrow>
        <p className="text-2xl font-bold text-indigo-950 mt-4">Su trabajo comercial</p>
      </HighlightBox>
    </div>
    <div className="mt-10 space-y-6">
      <Body>El primero, usted lo domina. El segundo es donde podemos sumar.</Body>
      <Body>
        Welli no es asesor médico. No vamos a hablar de qué recetar ni cuándo. Eso lo decide usted.
      </Body>
      <Body className="font-semibold text-indigo-950">
        Vamos a hablar de cómo presentar su decisión clínica para que el paciente la entienda y la acepte.
      </Body>
    </div>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 3.2 Triángulo del valor
const S19 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <H2>El triángulo del valor</H2>
    <p className="text-lg text-slate-500 mt-2 italic">
      3 elementos que siempre deben estar en su conversación de cierre
    </p>
    <div className="mt-12 flex flex-col items-center gap-6">
      <HighlightBox className="text-center w-full max-w-sm">
        <Eyebrow>Resultado</Eyebrow>
        <p className="text-2xl font-bold text-indigo-950 mt-2">qué va a vivir</p>
      </HighlightBox>
      <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
        <HighlightBox className="text-center">
          <Eyebrow>Tiempo</Eyebrow>
          <p className="text-2xl font-bold text-indigo-950 mt-2">cuándo lo va a ver</p>
        </HighlightBox>
        <HighlightBox className="text-center">
          <Eyebrow>Acompañamiento</Eyebrow>
          <p className="text-2xl font-bold text-indigo-950 mt-2">no estará solo</p>
        </HighlightBox>
      </div>
    </div>
    <Anchor>
      <span className="block mt-12 text-center">
        Si uno de los tres falta, el paciente no compra.
      </span>
    </Anchor>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 3.3 Aplicación en conversación real
const S20 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <H2>Cómo se ve en una conversación real</H2>
    <Body className="mt-6">
      Ejemplo: paciente con sobrepeso significativo, recomendación del doctor: pack integral con manejo farmacológico.
    </Body>
    <div className="mt-10 space-y-5">
      {[
        [
          "Resultado",
          "En 6 meses va a sentir que su ropa le queda diferente. Va a tener más energía. Sus exámenes van a empezar a mejorar.",
        ],
        [
          "Tiempo",
          "Los primeros cambios los va a sentir en las primeras 4-6 semanas. Los cambios visibles, hacia el mes 3. El resultado completo, a los 12 meses.",
        ],
        [
          "Acompañamiento",
          "No va a estar solo. Cada mes nos vemos para revisar cómo va, ajustar el tratamiento si es necesario, y estar pendientes de su progreso.",
        ],
      ].map(([t, d]) => (
        <HighlightBox key={t}>
          <Eyebrow>{t}</Eyebrow>
          <p className="text-xl italic text-indigo-950 mt-3">"{d}"</p>
        </HighlightBox>
      ))}
    </div>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 3.4 Manejo farmacológico — CON LOGO NOVO
const S21 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell withNovo>
    <Eyebrow>Acompañamiento</Eyebrow>
    <H2>El manejo farmacológico: su mejor aliado de acompañamiento</H2>
    <Body className="mt-8">Lo que vimos en la clínica del caso:</Body>
    <Body className="mt-4">
      Cuando el tratamiento incluye manejo farmacológico (medicamentos como los de Novo Nordisk: Wegovy, Ozempic, Saxenda), el paciente vuelve cada mes naturalmente.
    </Body>
    <p className="text-2xl font-semibold text-indigo-950 mt-10">Cada visita es:</p>
    <ul className="mt-4 space-y-4">
      {[
        "Punto de seguimiento",
        "Momento de ajuste",
        "Oportunidad para sumar otro elemento al pack",
        "Construcción de relación a largo plazo",
      ].map((t) => (
        <li key={t} className="flex gap-4 text-xl text-slate-700">
          <span className="text-welli-yellow text-3xl leading-none">▸</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
    <Body className="mt-10">
      No vamos a opinar sobre qué medicamento usar ni cuándo. Eso es decisión suya.
    </Body>
    <Body className="mt-4 font-semibold text-indigo-950">
      Pero comercialmente, integrar el manejo farmacológico en sus paquetes cambia un "paciente que llegó una vez" por un "paciente que está con usted los próximos 12 meses".
    </Body>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// 3.5 Regla del módulo
const S22 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell center>
    <div className="space-y-10 text-center">
      <Eyebrow>La regla del módulo</Eyebrow>
      <HighlightBox className="max-w-3xl mx-auto">
        <p className="text-5xl md:text-6xl font-bold text-indigo-950 leading-tight">
          Usted explica.
          <br />
          Welli organiza.
        </p>
        <p className="text-xl text-indigo-950 mt-8 leading-relaxed">
          Su trabajo clínico es de usted.
          <br />
          La estructura comercial es lo que venimos a aportar.
        </p>
      </HighlightBox>
      <Body className="max-w-3xl mx-auto">
        En el siguiente módulo veremos cómo organizar todo esto en 3 paquetes concretos que cierran solos.
      </Body>
      <NavigationButtons onBack={onBack} onNext={onNext} nextLabel="Continuar al cierre de Sesión 1" />
    </div>
  </ScreenShell>
);

// C1.1 Reflexión semana
const S23 = ({ onNext, onBack }: ScreenProps) => (
  <ScreenShell>
    <Eyebrow>Cierre de Sesión 1 — Para los próximos 7 días</Eyebrow>
    <H2>Un solo compromiso para esta semana. No operativo. De observación.</H2>
    <HighlightBox className="mt-10">
      <p className="text-xl text-indigo-950 leading-relaxed">
        Cuando un paciente salga de su consulta SIN agendar tratamiento, tome 30 segundos antes de pasar al siguiente y anote:
      </p>
      <div className="mt-6 space-y-4">
        <p className="text-2xl font-semibold text-indigo-950">¿Qué dijo exactamente?</p>
        <p className="text-2xl font-semibold text-indigo-950">
          ¿Fue una excusa social o una razón real?
        </p>
      </div>
      <p className="text-lg text-indigo-950/70 mt-6 italic">
        Una línea por paciente. Eso es todo.
      </p>
    </HighlightBox>
    <Body className="mt-10">
      En la Sesión 2 vamos a revisar esos casos juntos. Y para cada uno, vamos a ver:
    </Body>
    <ul className="mt-6 space-y-4">
      {[
        "Qué pack le habría correspondido",
        "Qué pregunta-llave habría destrabado la conversación",
        "Cómo se habría podido cerrar",
      ].map((t) => (
        <li key={t} className="flex gap-4 text-xl text-slate-700">
          <span className="text-welli-yellow text-3xl leading-none">▸</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
    <NavigationButtons onBack={onBack} onNext={onNext} />
  </ScreenShell>
);

// C1.2 Próxima sesión + cierre humano
const S24 = ({ onNext, onBack }: ScreenProps) => {
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
      <Eyebrow>Sesión 2 — Su práctica en aplicación</Eyebrow>
      <H2>En 7-10 días nos vemos otra vez.</H2>
      <Body className="mt-6">Vamos a aterrizar todo en su consulta real:</Body>
      <ul className="mt-6 space-y-3 text-xl text-slate-700">
        {["Sus 3 packs específicos", "Cómo conversar con su paciente", "Cómo usar Welli operativamente", "Su comisión preferencial 4%"].map((t) => (
          <li key={t} className="flex gap-4">
            <span className="text-welli-yellow text-3xl leading-none">▸</span>
            <span>{t}</span>
          </li>
        ))}
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
              "Con un paciente real de su agenda",
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
      <Anchor>
        <span className="block mt-10 text-center">
          Gracias por su tiempo, Doctor. Nos vemos pronto.
        </span>
      </Anchor>
      <div className="flex items-center justify-between mt-12 gap-4">
        <Button variant="ghost" size="lg" onClick={onBack} className="text-indigo-950 text-lg h-14 px-6">
          Atrás
        </Button>
        <Button
          size="lg"
          onClick={handleClose}
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 text-lg font-semibold h-14 px-10"
        >
          Cerrar sesión
        </Button>
      </div>
    </ScreenShell>
  );
};

/* ============ CONTROLADOR ============ */

const SCREENS = [S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20, S21, S22, S23, S24];

const Sesion1 = () => {
  const [idx, setIdx] = useState(0);
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
            <ProgressBar current={idx + 1} total={total} label="Sesión 1 — Mentalidad y método" />
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
