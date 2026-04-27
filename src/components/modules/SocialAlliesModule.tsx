import { motion } from "framer-motion";
import { Instagram, ArrowRight, ExternalLink, Sparkles, Play, CheckCircle2, FolderOpen, Megaphone, Target, Video, MessageSquare, Camera, Send, Upload } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import pieza1 from "@/assets/welli-pieza-1.png";
import pieza2 from "@/assets/welli-pieza-2.png";
import pieza3 from "@/assets/welli-pieza-3.png";
import pieza4 from "@/assets/welli-pieza-4.png";

interface ModuleProps {
  onComplete: () => void;
}

const youtubeShorts = [
  {
    id: 1,
    videoId: "t9-Gqjj6l4I",
    title: "Clínica Ejemplo #1",
    description: "Mira cómo este aliado promociona Welli en sus redes",
  },
  {
    id: 2,
    videoId: "REKXh6TeKG8",
    title: "Clínica Ejemplo #2",
    description: "Una forma innovadora de comunicar financiación",
  },
  {
    id: 3,
    videoId: "IcUWtYu2HyY",
    title: "Clínica Ejemplo #3",
    description: "Contenido que conecta con los pacientes de las clínicas.",
  },
  {
    id: 4,
    videoId: "bRjdjbZkzzk",
    title: "Clínica Ejemplo #4",
    description: "Otro gran ejemplo de comunicación con Welli",
  },
];

const checklistSections = [
  {
    icon: Target,
    title: "1. Objetivo del video",
    items: [
      "Visibilizar a nuestros médicos aliados y mostrar cómo los pacientes pueden financiar sus tratamientos con Welli.",
      "El video se publicará en los canales digitales de Welli (puede ser en formato colaboración con la clínica).",
    ],
  },
  {
    icon: Video,
    title: "2. Formato",
    items: [
      "Duración ideal: máximo 1 minuto y medio.",
      "Formato vertical (9:16) para Reels, TikTok y Shorts.",
    ],
  },
  {
    icon: MessageSquare,
    title: "3. ¿Qué decir? (preguntas guía)",
    items: [
      "¿Cuál es tu nombre, especialidad médica y trayectoria?",
      "¿Qué es lo que más te apasiona de tu práctica?",
      "¿Qué mito desmentirías sobre tu especialidad?",
      "¿Cómo ha facilitado Welli el acceso de tus pacientes a tus tratamientos?",
      "¿Qué ventajas has encontrado al ofrecer Welli como opción de financiamiento?",
      "¿Recomendarías Welli a otros colegas? ¿Por qué?",
      "¿Dónde está ubicado tu consultorio?",
      "No es obligatorio responder todas: elige o propone las que mejor se adapten a ti.",
    ],
  },
  {
    icon: Camera,
    title: "4. Calidad: video y audio",
    items: [
      "Estabilidad: sin temblores (usa trípode o estabilizador).",
      "Iluminación: buena luz natural o aro de luz, sin sombras excesivas.",
      "Audio claro y entendible, sin ruido de fondo (idealmente con micrófono externo).",
      "Sin música añadida, sin textos o subtítulos incrustados.",
      "Sin logos, efectos, transiciones ni marcas de agua de editores.",
    ],
  },
  {
    icon: Send,
    title: "5. Envío y publicación",
    items: [
      "Envíanos el video por correo, WeTransfer, Google Drive o Dropbox (no por WhatsApp/Telegram, pierde calidad).",
      "Welli se encarga de la edición y publicación final.",
      "Solo haremos ajustes si afectan la claridad, duración o veracidad de la información sobre Welli.",
    ],
  },
];

const piezas = [
  { src: pieza1, alt: "Pieza Welli - No esperes más por tu tratamiento" },
  { src: pieza2, alt: "Pieza Welli - Tratamientos personalizados" },
  { src: pieza3, alt: "Pieza Welli - Financiamos tu tratamiento" },
  { src: pieza4, alt: "Pieza Welli - Tu salud no debería esperar" },
];

const SocialAlliesModule = ({ onComplete }: ModuleProps) => {
  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-foreground mb-6">
            <Instagram className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-bold">Nuestros Aliados en Redes</span>
          </div>
          <h2 className="section-title">Nuestros aliados en redes</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Mira cómo otras clínicas nos muestran en su Instagram:
          </p>
        </motion.div>

        {/* Highlight banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 via-secondary/10 to-primary/20 border-2 border-welli-yellow/30"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-welli-yellow/30 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-welli-yellow" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">
                La prueba social vende
              </h3>
              <p className="text-muted-foreground">
                Cuando un paciente ve que otros confían en Welli, su decisión se vuelve más fácil.
              </p>
            </div>
          </div>
        </motion.div>

        {/* YouTube Shorts Row - 4 in a single row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {youtubeShorts.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="card-elevated p-3 flex flex-col"
            >
              <div className="mb-2 min-h-[64px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Play className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="font-bold text-xs text-foreground truncate">{video.title}</h3>
                </div>
                <p className="text-[11px] text-muted-foreground line-clamp-2">{video.description}</p>
              </div>
              <div className="rounded-xl overflow-hidden border-2 border-secondary shadow-md bg-black w-full" style={{ aspectRatio: "9 / 16" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                  title={video.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full block"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checklist - Cómo hacer un buen video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10 p-6 rounded-2xl bg-card border-2 border-secondary/20"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground">Checklist de video — Alianzas con Welli</h3>
              <p className="text-sm text-muted-foreground">Guía oficial con los puntos clave antes de grabar.</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Gracias por participar en esta colaboración. Para que todo fluya sin contratiempos, ten en cuenta los siguientes puntos:
          </p>
          <div className="space-y-5">
            {checklistSections.map((section, sIndex) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + sIndex * 0.08 }}
                  className="rounded-xl border border-border bg-background/50 p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-secondary" />
                    </div>
                    <h4 className="font-bold text-sm text-foreground">{section.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Cuéntale a tus pacientes la alianza con Welli! */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-10"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-secondary/10 to-welli-yellow/10 border border-secondary/20">
            <h3 className="font-bold text-xl text-foreground mb-2 text-center">
              ¡Cuéntale a tus pacientes la alianza con Welli!
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              Estas son algunas piezas de ejemplo que se generan con tu link personalizado:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {piezas.map((p, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.08 }}
                  className="rounded-xl overflow-hidden border-2 border-border bg-card shadow-md"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href="https://forms.gle/pg2UDJAqHSyhpmFM9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-welli inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Genera tus piezas personalizadas con Welli</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Drive Recursos Gráficos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-secondary/10 border-2 border-welli-yellow/30 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-welli-yellow/30 flex items-center justify-center flex-shrink-0">
                <FolderOpen className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Recursos gráficos de Welli</h3>
                <p className="text-muted-foreground text-sm">
                  Accede a los recursos gráficos de Welli para que grabes tus propios videos o diseñes piezas con tu equipo de Marketing.
                </p>
              </div>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1EYnS0Rti0ylNW3twwbkKTkMz8W6GBcNt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-welli whitespace-nowrap inline-flex items-center gap-2"
            >
              <span>Acceder al Drive</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialAlliesModule;
