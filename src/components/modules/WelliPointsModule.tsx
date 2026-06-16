import { motion } from "framer-motion";
import {
  Sparkles,
  Coins,
  Trophy,
  Zap,
  Gift,
  ExternalLink,
  FileText,
  ArrowRight,
  Medal,
  Award,
  Gem,
  Target,
  DollarSign,
} from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const tiers = [
  { name: "Bronce", range: "0 – 999 WP", icon: Medal, color: "bg-amber-700" },
  { name: "Plata", range: "1.000 – 2.999 WP", icon: Medal, color: "bg-slate-400" },
  { name: "Oro", range: "3.000 – 5.999 WP", icon: Award, color: "bg-welli-yellow" },
  { name: "Diamante", range: "6.000+ WP", icon: Gem, color: "bg-cyan-400" },
];

const disbursementPoints = [
  { range: "Menos de $1M", points: "1 punto" },
  { range: "$1M – $3M", points: "3 puntos" },
  { range: "$3M – $6M", points: "6 puntos" },
  { range: "$6M – $9M", points: "9 puntos" },
  { range: "$10M – $14M", points: "12 puntos" },
  { range: "Más de $15M", points: "15 puntos" },
];

const WelliPointsModule = ({ onComplete }: ModuleProps) => {
  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 border border-welli-yellow/40 text-indigo-950 mb-6">
            <Sparkles className="w-4 h-4 text-welli-orange" />
            <span className="text-sm font-bold">Programa de Lealtad</span>
          </div>
          <h2 className="section-title">Welli Points</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4 text-indigo-950/80">
            Convierte el crecimiento de tu clínica con Welli en{" "}
            <span className="font-bold text-indigo-950">beneficios reales</span>.
          </p>
        </motion.div>

        {/* ¿Qué es? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border-2 border-welli-yellow/40 p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-indigo-950 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-welli-yellow flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-indigo-950" />
            </span>
            ¿Qué es Welli Points?
          </h3>
          <p className="text-indigo-950 text-lg mb-4">
            Un programa donde tu clínica <strong>suma puntos por crecer junto a Welli</strong>.
            Mientras más uses Welli para financiar a tus pacientes, más ganas.
          </p>
          <p className="text-indigo-950/80 mb-2">Tus puntos pueden convertirse en:</p>
          <ul className="space-y-2 text-indigo-950">
            <li className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-welli-orange" /> Bonos Loto canjeables
            </li>
            <li className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-welli-orange" /> Créditos para Ads <span className="text-xs text-indigo-950/60">(Próximamente)</span>
            </li>
          </ul>
        </motion.section>

        {/* Video */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-indigo-950 mb-6">Cómo funciona en 60 segundos</h3>
          <YouTubeEmbed
            videoId="Wz5MPJ6QG_M"
            title="Welli Points en acción"
            isShort
            borderColor="welli-yellow"
          />
        </motion.section>

        {/* ¿Cuánto vale? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-950 to-indigo-900 rounded-3xl p-8 text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Coins className="w-7 h-7 text-welli-yellow" />
            ¿Cuánto vale un Welli Point?
          </h3>
          <div className="bg-welli-yellow text-indigo-950 rounded-2xl p-4 inline-block font-bold text-xl mb-6">
            1 Welli Point = $2.000 COP
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { wp: "25 WP", cop: "$50.000" },
              { wp: "50 WP", cop: "$100.000" },
              { wp: "100 WP", cop: "$200.000" },
            ].map((e) => (
              <div key={e.wp} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
                <div className="text-welli-yellow font-bold text-lg">{e.wp}</div>
                <div className="text-2xl font-bold">{e.cop}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/80 text-sm">
            Tus puntos se <strong>acumulan y redimen al cierre del mes</strong>.
          </p>
        </motion.section>

        {/* ¿Cómo ganas? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border-2 border-welli-yellow/40 p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-indigo-950 mb-6 flex items-center gap-3">
            <Trophy className="w-7 h-7 text-welli-orange" />
            ¿Cómo ganas Welli Points?
          </h3>
          <p className="text-indigo-950 font-semibold mb-4">Tienes 3 formas de acumular:</p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-welli-yellow/10 border border-welli-yellow/40 rounded-2xl p-5">
              <Zap className="w-8 h-8 text-welli-orange mb-2" />
              <h4 className="font-bold text-indigo-950">Concursos Flash</h4>
              <p className="text-sm text-indigo-950/80 mt-1">Retos sorpresa para ganar puntos extra rápido.</p>
            </div>
            <div className="bg-welli-yellow/10 border border-welli-yellow/40 rounded-2xl p-5">
              <Target className="w-8 h-8 text-welli-orange mb-2" />
              <h4 className="font-bold text-indigo-950">Retos del mes</h4>
              <p className="text-sm text-indigo-950/80 mt-1">Algunos meses tendrás actividades especiales en donde participas para ganar puntos extra.</p>
            </div>
            <div className="bg-welli-yellow/10 border border-welli-yellow/40 rounded-2xl p-5">
              <DollarSign className="w-8 h-8 text-welli-orange mb-2" />
              <h4 className="font-bold text-indigo-950">Por desembolsos</h4>
              <p className="text-sm text-indigo-950/80 mt-1">Cada desembolso suma según su monto.</p>
            </div>
          </div>

          <div className="bg-indigo-950 rounded-2xl p-6 text-white">
            <h4 className="font-bold mb-4 text-welli-yellow">Puntos por desembolso</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {disbursementPoints.map((d) => (
                <div key={d.range} className="flex justify-between bg-white/10 rounded-lg px-4 py-2">
                  <span>{d.range}</span>
                  <span className="font-bold text-welli-yellow">→ {d.points}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Niveles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border-2 border-welli-yellow/40 p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-indigo-950 mb-2">También puedes subir de nivel</h3>
          <p className="text-indigo-950/80 mb-6">
            Son 4 niveles que te permitirán acceder a más beneficios futuros. Tu nivel{" "}
            <strong>nunca baja</strong> y depende de tus puntos acumulados históricamente.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-2xl border-2 border-indigo-950/10 p-5 text-center">
                <div className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center mx-auto mb-3`}>
                  <t.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-indigo-950 text-lg">{t.name}</h4>
                <p className="text-sm text-indigo-950/70">{t.range}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Dashboard */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-indigo-950 rounded-3xl p-8 text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Tu dashboard de Welli Points</h3>
          <p className="text-white/80 mb-6">Desde el dashboard podrás ver en tiempo real:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "📊 Puntos acumulados",
              "🏆 Tu nivel actual",
              "🎯 Tu reto del mes",
              "⚡ Concursos activos",
              "💰 Equivalente en pesos",
              "⚽ Tu avance en En la Jugada",
            ].map((item) => (
              <div key={item} className="bg-white/10 rounded-xl px-4 py-3">{item}</div>
            ))}
          </div>
          <a
            href="https://points.welli.com.co/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-welli-yellow text-indigo-950 font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Ingresar al Dashboard
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.section>

        {/* T&C */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-indigo-950/10 rounded-2xl p-5"
        >
          <div className="flex items-center gap-3 text-indigo-950">
            <FileText className="w-5 h-5 text-welli-orange" />
            <span className="text-sm">Consulta los términos y condiciones del programa.</span>
          </div>
          <a
            href="https://welli.welli.com.co/hubfs/T%C3%A9rminos%20y%20Condiciones%20-%20Welli%20Points.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-welli-orange hover:underline inline-flex items-center gap-1"
          >
            Ver T&C <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Continue */}
        <div className="flex justify-center pt-4">
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-2 bg-welli-orange text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Continuar
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelliPointsModule;
