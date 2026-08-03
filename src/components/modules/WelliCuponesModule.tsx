import { motion } from "framer-motion";
import {
  Ticket,
  Percent,
  Megaphone,
  HeartHandshake,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const benefits = [
  {
    icon: Megaphone,
    title: "Crea campañas comerciales",
    text: "Arma promociones para tu clínica en fechas clave, temporadas bajas o lanzamientos de tratamientos.",
  },
  {
    icon: Percent,
    title: "Tasas preferenciales",
    text: "Ofrece a tus pacientes una tasa de interés más baja, incluso hasta 0% de interés.",
  },
  {
    icon: HeartHandshake,
    title: "Ayuda a más pacientes",
    text: "Dale una mejor alternativa de financiación a quien hoy no alcanza a iniciar su tratamiento.",
  },
];

const steps = [
  "Ingresa a tu portal WELLI con tu usuario de sede.",
  "Entra a la sección de Cupones y crea uno nuevo.",
  "Define la tasa preferencial, el monto y la vigencia del cupón.",
  "Comparte el cupón con tu paciente al momento de la aplicación.",
];

const useCases = [
  "El paciente dice que la cuota le queda alta: bájala con un cupón en vez de perder el tratamiento.",
  "Campañas de temporada: mes de la mujer, aniversario de la clínica, Black Friday.",
  "Reactivar pacientes que quedaron aprobados pero no desembolsaron.",
  "Paquetes de alto valor donde el interés es la principal fricción.",
];

const WelliCuponesModule = ({ onComplete }: ModuleProps) => {
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
            <Ticket className="w-4 h-4 text-welli-orange" />
            <span className="text-sm font-bold">Nueva funcionalidad</span>
          </div>
          <h2 className="section-title">Welli Cupones</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4 text-indigo-950/80">
            Desde tu portal WELLI puedes crear{" "}
            <span className="font-bold text-indigo-950">cupones</span> para ofrecer a tus pacientes
            una <span className="font-bold text-indigo-950">tasa de interés preferencial</span> y
            hacer mucho más fácil que inicien su tratamiento.
          </p>
        </motion.div>

        {/* Video */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-indigo-950 text-center">
            Video instructivo: cómo crear un cupón
          </h3>
          <YouTubeEmbed
            videoId="deJKMlfQX1U"
            title="Welli Cupones — cómo crear un cupón"
            borderColor="welli-yellow"
          />
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-indigo-950 mb-6 text-center">
            Con esta función podrás:
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 border border-indigo-950/10 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-welli-yellow flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-indigo-950" />
                </div>
                <h4 className="font-bold text-indigo-950 mb-2">{b.title}</h4>
                <p className="text-sm text-indigo-950/70">{b.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-welli-yellow/15 border border-welli-yellow/40 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-indigo-950 mb-6">
            Crear un cupón es muy sencillo
          </h3>
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={s} className="flex items-start gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-indigo-950 text-welli-yellow text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-indigo-950">{s}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Use cases */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-indigo-950 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-welli-yellow" />
            <h3 className="text-2xl font-bold">¿Cuándo usarlos en la conversación?</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {useCases.map((u) => (
              <div key={u} className="bg-white/10 rounded-xl px-4 py-3 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-welli-yellow shrink-0 mt-1" />
                <span className="text-sm text-white/90">{u}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/80 text-sm">
            Recuerda: el cupón no es un descuento sobre el tratamiento, es una tasa preferencial que
            hace la cuota más viable para el paciente.
          </p>
        </motion.section>

        {/* Continue */}
        <div className="flex justify-center pt-4">
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-2 bg-welli-yellow text-indigo-950 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Continuar
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelliCuponesModule;
