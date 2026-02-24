import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const welliPointsTiers = [
  {
    id: 1,
    tier: 'Bronce',
    emoji: '🥉',
    points: '10',
    reward: '$20.000',
  },
  {
    id: 2,
    tier: 'Plata',
    emoji: '🥈',
    points: '25',
    reward: '$50.000',
  },
  {
    id: 3,
    tier: 'Oro',
    emoji: '🥇',
    points: '50',
    reward: '$100.000',
  },
  {
    id: 4,
    tier: 'Diamante',
    emoji: '💎',
    points: '100',
    reward: '$200.000',
    isMax: true,
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
          🏆 Welli Points
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          Gana Welli Points por usar Welli
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Welli Points es un programa pensado para reconocer el uso de Welli en tu clínica y convertirlo en un bono de hasta $200.000.
        </p>
      </motion.div>

      {/* How to earn */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-6 border-2 border-welli-yellow/50"
      >
        <p className="text-lg text-indigo-950">
          La idea es simple: si haces aplicaciones o desembolsos ganarás Welli Points:
        </p>
        <div className="mt-4 space-y-2">
          <p className="text-lg text-indigo-950">✅ 1 aplicación = <span className="font-bold text-welli-orange">1 Welli Point</span></p>
          <p className="text-lg text-indigo-950">✅ 1 desembolso = <span className="font-bold text-welli-orange">10 Welli Points</span></p>
        </div>
      </motion.div>

      {/* Tiers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {welliPointsTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className={`h-full border-2 hover:scale-105 transition-transform relative ${
                tier.isMax ? 'border-welli-yellow bg-welli-yellow/10' : 'border-slate-200'
              }`}>
                {tier.isMax && (
                  <div className="absolute -top-2 -right-2 bg-welli-yellow text-indigo-950 text-xs font-bold px-2 py-1 rounded">
                    MAX
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">{tier.emoji}</div>
                  <h3 className="font-bold text-sm uppercase tracking-wide text-indigo-800 mb-2">{tier.tier}</h3>
                  <p className="text-3xl font-bold text-indigo-950">{tier.points}</p>
                  <p className="text-xs text-indigo-800 mb-2">pts</p>
                  <p className="text-lg font-bold text-welli-orange">{tier.reward}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Welli Points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <a
          href="https://racha-welli.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
          >
            Conoce más de Welli Points
            <ExternalLink className="w-5 h-5" />
          </Button>
        </a>
      </motion.div>

      {/* Next module CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center pt-2"
      >
        <Button
          onClick={onComplete}
          size="lg"
          variant="outline"
          className="border-indigo-950 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
        >
          Ver herramientas digitales
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule5TreasureMap;
