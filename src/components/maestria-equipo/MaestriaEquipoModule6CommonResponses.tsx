import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

interface Props { onComplete: () => void; }

interface Card { phrase: string; meaning: string; reply: string; }

const type1: Card[] = [
  { phrase: 'Mi clínica es premium, no necesito esto', meaning: 'Defensa identitaria. Cree que Welli es para clínicas con problemas.', reply: 'Reframe: "Welli es para que su paciente premium no tenga que pedirle a usted. Es discreto."' },
  { phrase: 'Ya tengo otro aliado', meaning: 'No pide que demuestres ser mejor. Pide que demuestres ser distinto.', reply: '"Perfecto. ¿Qué le falta hoy con ese aliado?" — escucha, ahí está el gap.' },
  { phrase: 'Mis pacientes desconfían de financieras', meaning: 'Generalmente es proyección del doctor, no del paciente.', reply: '"Entiendo. ¿Su paciente ya conoce Welli? El 92% lo activa solo." — datos.' },
  { phrase: 'Mi paciente no me pide financiación', meaning: 'No le pide porque no se atreve. No porque no lo necesite.', reply: '"Exacto. Welli es para que no tenga que pedírselo. La pantalla lo ofrece."' },
];

const type2: Card[] = [
  { phrase: 'Lo voy a pensar', meaning: 'Casi siempre = "no sé cómo voy a pagar". Es objeción financiera disfrazada.', reply: 'Enseña al aliado a preguntar: "¿Es por el monto o por el tratamiento?"' },
  { phrase: 'Prefiero pagar con tarjeta', meaning: 'No conoce las desventajas: usa cupo, tasa variable, cuotas de manejo.', reply: 'Comparación visual: cuota fija vs cuota mínima de TC en 12 meses.' },
  { phrase: 'En otra clínica es más barato', meaning: 'No objeta el valor clínico. Pide viabilidad.', reply: 'No bajes precio. Aumenta viabilidad: cuota fija mensual con Welli.' },
  { phrase: 'No tengo el dinero ahorita', meaning: 'La conversación más común. No es un "no", es un "ahora no".', reply: '"Justo para eso es Welli. Empieza hoy, paga en cuotas." Plan de acción.' },
];

const Flipcard = ({ card, color }: { card: Card; color: 'yellow' | 'secondary' }) => {
  const [flipped, setFlipped] = useState(false);
  const colorClasses = color === 'yellow'
    ? 'border-welli-yellow/40 bg-welli-yellow/10'
    : 'border-secondary/40 bg-secondary/10';

  return (
    <button
      onClick={() => setFlipped(!flipped)}
      className={`text-left p-4 rounded-2xl border-2 ${colorClasses} hover:shadow-md transition-all min-h-[150px] w-full`}
    >
      {!flipped ? (
        <>
          <p className="text-xs font-bold text-indigo-800 uppercase mb-1">Frase</p>
          <p className="font-display font-bold text-indigo-950">"{card.phrase}"</p>
          <p className="text-xs text-indigo-800/70 mt-3 italic">Toca para ver decodificación →</p>
        </>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xs font-bold text-indigo-800 uppercase mb-1">Significado real</p>
          <p className="text-sm text-indigo-950 mb-3">{card.meaning}</p>
          <p className="text-xs font-bold text-indigo-800 uppercase mb-1">Respuesta sugerida</p>
          <p className="text-sm text-indigo-950">{card.reply}</p>
        </motion.div>
      )}
    </button>
  );
};

const MaestriaEquipoModule6CommonResponses = ({ onComplete }: Props) => (
  <div className="module-container">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
          <MessageSquare className="w-4 h-4 text-secondary" />
          <span className="text-xs font-bold text-indigo-950">Módulo 6 · Respuestas comunes</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-indigo-950 mb-3">
          Toca cada tarjeta para decodificar
        </h1>
      </motion.div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-welli-yellow text-indigo-950 text-xs font-bold">TIPO 1</span>
          <h2 className="font-bold text-indigo-950">Lo que el aliado dice sobre Welli</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {type1.map((c, i) => <Flipcard key={i} card={c} color="yellow" />)}
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold">TIPO 2</span>
          <h2 className="font-bold text-indigo-950">Lo que el aliado escucha de sus pacientes</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {type2.map((c, i) => <Flipcard key={i} card={c} color="secondary" />)}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onComplete}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 transition-all shadow-lg"
        >
          Continuar
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default MaestriaEquipoModule6CommonResponses;
