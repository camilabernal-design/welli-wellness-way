import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Gift, Film, Rocket, Trophy, Star } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const treasureStops = [
  {
    id: 1,
    title: '1ra Aplicación',
    reward: 'Bono de Activación',
    description: 'La primera solicitud activa todos los beneficios del aliado',
    icon: MapPin,
    color: 'bg-blue-500',
    bonus: '$50k',
  },
  {
    id: 2,
    title: '2da Aplicación',
    reward: 'Bono de Cine',
    description: 'Boletas de cine para todo el equipo de la clínica',
    icon: Film,
    color: 'bg-purple-500',
    bonus: '🎬 x4',
  },
  {
    id: 3,
    title: '3 Aplicaciones',
    reward: 'Tracción Total',
    description: 'El aliado demuestra compromiso y activa beneficios premium',
    icon: Rocket,
    color: 'bg-welli-orange',
    bonus: 'VIP',
  },
  {
    id: 4,
    title: '1er Desembolso',
    reward: '¡Tesoro Desbloqueado!',
    description: 'El primer dinero en la cuenta. El ciclo está completo.',
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
        <span className="inline-block px-4 py-1 rounded-full bg-welli-orange/20 text-welli-orange font-medium text-sm">
          Módulo 5 · Gamificación
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          El Mapa del Tesoro 🗺️
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Muéstrale al doctor que el primer mes es un juego con recompensas reales
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
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 via-welli-orange to-welli-yellow rounded-full transform -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {treasureStops.map((stop, index) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              <Card className={`h-full border-2 hover:scale-105 transition-transform ${
                stop.id === 4 ? 'border-welli-yellow bg-welli-yellow/10' : 'border-border'
              }`}>
                <CardContent className="p-6 text-center">
                  {/* Stop Number */}
                  <div className={`w-16 h-16 ${stop.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stop.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Bonus Badge */}
                  <div className="inline-block px-3 py-1 bg-slate-900 text-white text-sm font-bold rounded-full mb-3">
                    {stop.bonus}
                  </div>

                  <h3 className="font-bold text-lg mb-1">{stop.title}</h3>
                  <p className="text-welli-orange font-medium text-sm mb-2">{stop.reward}</p>
                  <p className="text-xs text-muted-foreground">{stop.description}</p>
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
        className="bg-gradient-to-br from-welli-orange to-welli-orange/90 rounded-2xl p-8 text-white"
      >
        <h3 className="text-xl font-bold mb-6 text-center">
          Premiamos la fidelidad de nuestros aliados y su personal
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Gift className="w-10 h-10 mx-auto mb-3" />
            <h4 className="font-bold">Bonos en Efectivo</h4>
            <p className="text-sm text-white/80">Por cada meta alcanzada</p>
          </div>
          <div className="text-center">
            <Film className="w-10 h-10 mx-auto mb-3" />
            <h4 className="font-bold">Experiencias</h4>
            <p className="text-sm text-white/80">Cine, restaurantes, eventos</p>
          </div>
          <div className="text-center">
            <Star className="w-10 h-10 mx-auto mb-3" />
            <h4 className="font-bold">Estatus VIP</h4>
            <p className="text-sm text-white/80">Acceso prioritario y soporte</p>
          </div>
        </div>
      </motion.div>

      {/* Hunter Script */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-secondary/10 rounded-xl p-6 border-l-4 border-secondary"
      >
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          🎯 El Gancho del Tesoro
        </h3>
        <p className="text-muted-foreground italic">
          "Doctor, si en su primer mes hacemos solo 3 aplicaciones, su equipo ya tiene 
          <span className="text-welli-orange font-semibold"> boletos de cine y un bono en efectivo</span>. 
          Yo lo acompaño en este mapa del tesoro."
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
          className="bg-welli-orange hover:bg-welli-orange/90 text-white gap-2"
        >
          Siguiente: Ecosistema Digital
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule5TreasureMap;
