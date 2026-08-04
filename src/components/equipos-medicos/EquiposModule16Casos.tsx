import { useState } from "react";
import { motion } from "framer-motion";
import { Video } from "lucide-react";
import EquiposShell from "./EquiposShell";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface Props {
  onComplete: () => void;
}

const videos = [
  { id: "TTkV4EBML5E", label: "Alianza WELLI y CityDent", note: "Cómo una red odontológica integró la financiación en su operación." },
  { id: "86HvCZeIhLM", label: "Alianza WELLI y Medycare", note: "La mirada de un aliado del sector de tecnología y servicios médicos." },
  { id: "TKeeNP3E2uo", label: "Alianza WELLI · Dr. Diego Lozano", note: "La perspectiva del especialista que financió con WELLI." },
  { id: "BkO48v-HGpc", label: "Testimonio Bettsy", note: "El impacto en la vida de quien accede al tratamiento." },
];

const EquiposModule16Casos = ({ onComplete }: Props) => {
  const [active, setActive] = useState(0);
  const current = videos[active];

  return (
    <EquiposShell
      phase={2}
      eyebrow="Prueba social"
      icon={Video}
      title="Casos de éxito"
      subtitle="Cuando el médico duda, el mejor argumento no eres tú: es otro médico. Ten estos videos listos en el celular para la visita."
      onComplete={onComplete}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {videos.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
              active === i
                ? "bg-welli-yellow text-indigo-950 border-welli-yellow"
                : "bg-card text-indigo-950/70 border-indigo-950/15 hover:border-welli-yellow"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-3"
      >
        <YouTubeEmbed videoId={current.id} title={current.label} borderColor="welli-yellow" />
        <p className="text-center text-sm text-indigo-950/75">{current.note}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-indigo-950 rounded-3xl p-8 text-white shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-4">Cómo usar un caso de éxito en la visita</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            "No lo pongas de entrada: úsalo cuando aparezca la duda de confianza.",
            "Elige el caso más parecido a la especialidad de tu cliente.",
            "Después del video, haz una sola pregunta: ¿te gustaría revisar tus números?",
          ].map((t, i) => (
            <div key={t} className="bg-white/10 rounded-xl px-4 py-3">
              <span className="text-welli-yellow font-bold text-sm">{i + 1}</span>
              <p className="text-sm text-white/90 mt-1">{t}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </EquiposShell>
  );
};

export default EquiposModule16Casos;
