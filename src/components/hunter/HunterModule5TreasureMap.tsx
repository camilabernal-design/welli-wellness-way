import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Gift, Film, Rocket, Trophy, Star } from "lucide-react";
import welliCharacterStanding from "@/assets/welli-character-standing.png";

interface ModuleProps {
  onComplete: () => void;
}

const treasureStops = [
  {
    id: 1,
    title: '1ra aplicación',
    reward: 'Bono de activación',
    description: 'La primera solicitud activa todos los beneficios del aliado',
    icon: MapPin,
    color: 'bg-secondary',
    bonus: '$50k',
  },
  {
    id: 2,
    title: '2da aplicación',
    reward: 'Bono de cine',
    description: 'Boletas de cine para todo el equipo de la clínica',
    icon: Film,
    color: 'bg-welli-orange',
    bonus: '🎬 x4',
  },
  {
    id: 3,
    title: '3 aplicaciones',
    reward: 'Tracción total',
    description: 'El aliado demuestra compromiso y activa beneficios premium',
    icon: Rocket,
    color: 'bg-welli-orange',
    bonus: 'VIP',
  },
  {
    id: 4,
    title: '1er desembolso',
    reward: '¡Tesoro desbloqueado!',
    description: 'El primer dinero en tu cuenta. El ciclo está completo.',
    icon: Trophy,
    color: 'bg-welli-yellow',
    bonus: '💰',
  },
];

const HunterModule5TreasureMap = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          🗺️ Beneficios del primer mes
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          Tu camino al éxito con Welli
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Premiamos tu confianza desde el día uno
        </p>
      </motion.div>

      {/* Treasure Map Visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        {/* Path Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-secondary via-welli-orange to-welli-yellow rounded-full transform -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {treasureStops.map((stop, index) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              <Card className={`h-full border-2 hover:scale-105 transition-transform ${
                stop.id === 4 ? 'border-welli-yellow bg-welli-yellow/10' : 'border-slate-200'
              }`}>
                <CardContent className="p-6 text-center">
                  {/* Stop Number */}
                  <div className={`w-16 h-16 ${stop.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stop.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Bonus Badge */}
                  <div className="inline-block px-3 py-1 bg-indigo-950 text-white text-sm font-bold rounded-full mb-3">
                    {stop.bonus}
                  </div>

                  <h3 className="font-bold text-lg mb-1 text-indigo-950">{stop.title}</h3>
                  <p className="text-welli-orange font-medium text-sm mb-2">{stop.reward}</p>
                  <p className="text-xs text-indigo-800">{stop.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-welli-yellow to-welli-yellow/80 rounded-2xl p-8 relative overflow-hidden"
      >
        <img 
          src={welliCharacterStanding} 
          alt="Welli character" 
          className="absolute -right-4 -bottom-4 w-32 h-32 object-contain opacity-30 md:opacity-60"
        />
        <h3 className="text-xl font-bold mb-6 text-center text-indigo-950">
          Premiamos la fidelidad de tu clínica y tu personal
        </h3>
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          <div className="text-center">
            <Gift className="w-10 h-10 mx-auto mb-3 text-indigo-950" />
            <h4 className="font-bold text-indigo-950">Bonos en efectivo</h4>
            <p className="text-sm text-indigo-800">Por cada meta alcanzada</p>
          </div>
          <div className="text-center">
            <Film className="w-10 h-10 mx-auto mb-3 text-indigo-950" />
            <h4 className="font-bold text-indigo-950">Experiencias</h4>
            <p className="text-sm text-indigo-800">Cine, restaurantes, eventos</p>
          </div>
          <div className="text-center">
            <Star className="w-10 h-10 mx-auto mb-3 text-indigo-950" />
            <h4 className="font-bold text-indigo-950">Estatus VIP</h4>
            <p className="text-sm text-indigo-800">Acceso prioritario y soporte</p>
          </div>
        </div>
      </motion.div>

      {/* Key Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-xl p-6 border-2 border-welli-yellow/50"
      >
        <p className="text-xl text-center text-indigo-950">
          <span className="font-bold">🎯 En resumen:</span> Con solo 3 aplicaciones en tu primer mes, 
          tu equipo ya tiene <span className="text-welli-yellow font-bold">boletos de cine y bonos en efectivo</span>.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center pt-6"
      >
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
        >
          Ver herramientas digitales
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule5TreasureMap;
