import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const alliances = [
  {
    id: 'dt-dental',
    name: 'DT Dental',
    description: 'Especializado en odontología de alto nivel',
    videoId: 'hgavNjo_aus',
    color: 'bg-blue-500',
    icon: '🦷',
  },
  {
    id: 'ok-vet',
    name: 'OK Vet',
    description: 'Red veterinaria con presencia nacional',
    videoId: '41bS6Wtk6GU',
    color: 'bg-green-500',
    icon: '🐾',
  },
  {
    id: 'welli-directo',
    name: 'Welli Directo',
    description: 'Modelo directo para clínicas independientes',
    videoId: null,
    color: 'bg-welli-orange',
    icon: '🏥',
  },
];

const HunterModule3AllianceVideos = ({ onComplete }: ModuleProps) => {
  const [selectedAlliance, setSelectedAlliance] = useState(alliances[0]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-welli-orange/20 text-welli-orange font-medium text-sm">
          Módulo 3 · Operativa por Alianza
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Videos Dinámicos por Alianza
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Cada alianza tiene su propio flujo. Selecciona el tipo de clínica para ver el video correcto.
        </p>
      </motion.div>

      {/* Alliance Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {alliances.map((alliance) => (
          <button
            key={alliance.id}
            onClick={() => setSelectedAlliance(alliance)}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
              selectedAlliance.id === alliance.id
                ? 'border-welli-orange bg-welli-orange/10 scale-105 shadow-lg'
                : 'border-border hover:border-welli-orange/50 hover:bg-accent'
            }`}
          >
            <span className="text-3xl">{alliance.icon}</span>
            <div className="text-left">
              <p className="font-bold">{alliance.name}</p>
              <p className="text-xs text-muted-foreground">{alliance.description}</p>
            </div>
          </button>
        ))}
      </motion.div>

      {/* Video Display */}
      <motion.div
        key={selectedAlliance.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <Card className="overflow-hidden border-2 border-welli-orange/30">
          <div className={`${selectedAlliance.color} p-4 text-white flex items-center gap-3`}>
            <span className="text-2xl">{selectedAlliance.icon}</span>
            <div>
              <h3 className="font-bold text-lg">{selectedAlliance.name}</h3>
              <p className="text-sm text-white/80">{selectedAlliance.description}</p>
            </div>
          </div>
          <CardContent className="p-6">
            {selectedAlliance.videoId ? (
              <YouTubeEmbed 
                videoId={selectedAlliance.videoId} 
                title={`Video ${selectedAlliance.name}`}
                borderColor="welli-yellow"
              />
            ) : (
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-welli-orange/20 flex items-center justify-center mb-4">
                  <Play className="w-10 h-10 text-welli-orange" />
                </div>
                <p className="text-lg font-medium text-foreground">Video General Próximamente</p>
                <p className="text-sm text-muted-foreground">
                  El video para clínicas directas estará disponible pronto
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Alliance Flow Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-secondary/10 rounded-xl p-6"
      >
        <h3 className="font-bold text-lg mb-4">¿Cómo funciona la alianza?</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: 1, text: 'Welli y la institución firman convenio de colaboración' },
            { step: 2, text: 'Welli cobra comisión del 5% al momento del desembolso' },
            { step: 3, text: 'Sesión de entrenamiento (45 min) con el equipo clave' },
            { step: 4, text: '¡Comienza a financiar pacientes inmediatamente!' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-welli-orange text-white flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center pt-6"
      >
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-orange hover:bg-welli-orange/90 text-white gap-2"
        >
          Siguiente: Welli vs Competencia
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule3AllianceVideos;
