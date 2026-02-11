import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Building2, Stethoscope } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ModuleProps {
  onComplete: () => void;
}

const HunterModule3AllianceVideos = ({ onComplete }: ModuleProps) => {
  const [isDentalink, setIsDentalink] = useState(false);

  const currentVideo = isDentalink 
    ? { id: 'ah71UndxWq4', title: 'Proceso Dentalink', isShort: false }
    : { id: 'XsU_GECGb5M', title: 'Proceso General Welli', isShort: true };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          ▶️ Proceso en Acción
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          Así de Fácil Funciona
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Ve el proceso completo de aplicación y aprobación
        </p>
      </motion.div>

      {/* Discrete Video Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center gap-4 p-4 bg-slate-100 rounded-xl"
      >
        <div className={`flex items-center gap-2 transition-opacity ${!isDentalink ? 'opacity-100' : 'opacity-50'}`}>
          <Stethoscope className="w-5 h-5 text-welli-orange" />
          <Label htmlFor="video-toggle" className="text-indigo-950 font-medium cursor-pointer">
            Proceso General
          </Label>
        </div>
        
        <Switch
          id="video-toggle"
          checked={isDentalink}
          onCheckedChange={setIsDentalink}
          className="data-[state=checked]:bg-secondary"
        />
        
        <div className={`flex items-center gap-2 transition-opacity ${isDentalink ? 'opacity-100' : 'opacity-50'}`}>
          <Building2 className="w-5 h-5 text-secondary" />
          <Label htmlFor="video-toggle" className="text-indigo-950 font-medium cursor-pointer">
            Aliados Dentalink
          </Label>
        </div>
      </motion.div>

      {/* Video Display */}
      <motion.div
        key={currentVideo.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <Card className="overflow-hidden border-2 border-welli-yellow/50">
          <div className="bg-gradient-to-r from-welli-yellow to-welli-yellow/80 p-4 text-indigo-950 flex items-center gap-3">
            <Play className="w-6 h-6" />
            <div>
              <h3 className="font-bold text-lg">{currentVideo.title}</h3>
              <p className="text-sm text-indigo-800">
                {isDentalink 
                  ? 'Proceso integrado con sistema Dentalink' 
                  : 'Flujo de aplicación estándar para pacientes'}
              </p>
            </div>
          </div>
          <CardContent className="p-6">
            <YouTubeEmbed 
              videoId={currentVideo.id} 
              title={currentVideo.title}
              isShort={currentVideo.isShort}
              borderColor="welli-yellow"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Process Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-slate-50 rounded-xl p-6 border border-slate-200"
      >
        <h3 className="font-bold text-lg mb-4 text-indigo-950">El Proceso es Así de Simple:</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: 1, text: 'El paciente aplica desde su celular en 3 minutos' },
            { step: 2, text: 'Welli aprueba automáticamente con respuesta inmediata' },
            { step: 3, text: 'Tú realizas el procedimiento con tranquilidad' },
            { step: 4, text: 'Recibes el 95% en tu cuenta en máximo 72 horas' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-welli-yellow text-indigo-950 flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <p className="text-sm text-indigo-800">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Key Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-6 text-center"
      >
        <p className="text-2xl font-bold text-indigo-950">
          🎯 Desembolsamos <span className="text-welli-yellow">Martes y Jueves</span>
        </p>
        <p className="text-indigo-800 mt-2">
          Si el paciente aplica hoy, el jueves tú ya tienes tu dinero.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center pt-6"
      >
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
        >
          Ver Por Qué Somos Mejores
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule3AllianceVideos;
