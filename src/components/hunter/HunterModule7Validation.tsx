import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Building2, Banknote, Star } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const impactStats = [
  {
    value: '+300.000',
    label: 'Aplicaciones crediticias procesadas',
    sublabel: 'por más de $500 mil millones de pesos',
    icon: TrendingUp,
    color: 'text-welli-yellow',
  },
  {
    value: 'COP $140.000 MM',
    label: 'Desembolsados',
    sublabel: 'para que más de 35 mil colombianos tengan acceso a la salud',
    icon: Banknote,
    color: 'text-welli-yellow',
  },
  {
    value: '+2.800',
    label: 'Aliados médicos',
    sublabel: 'confían en nosotros',
    icon: Building2,
    color: 'text-welli-yellow',
  },
  {
    value: 'COP $300.000 MM',
    label: 'En líneas de fondeo',
    sublabel: 'para seguir expandiendo nuestra misión',
    icon: Users,
    color: 'text-welli-yellow',
  },
];

const HunterModule7Validation = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          📊 Resultados reales
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          +2.800 clínicas ya confían en nosotros
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Nuestro impacto en los primeros dos años de operaciones
        </p>
      </motion.div>

      {/* Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {impactStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-shadow border-2 border-welli-yellow/30">
              <CardContent className="p-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <p className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="font-medium text-sm mt-1 text-indigo-950">{stat.label}</p>
                <p className="text-xs text-indigo-800 mt-1">{stat.sublabel}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-welli-yellow/20 via-welli-orange/10 to-secondary/10 rounded-2xl p-6 border border-welli-yellow/30"
      >
        <h3 className="font-bold text-lg mb-4 text-center text-indigo-950">Especialidades que trabajan con Welli</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['🦷 Odontología', '💉 Estética', '🐾 Veterinaria', '👶 Fertilidad', '👁️ Oftalmología', '🏥 Cirugía'].map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 bg-white rounded-full border border-welli-yellow/50 text-sm font-medium text-indigo-950 shadow-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Revenue Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-[#3B8BF6] via-[#7B5CF6] to-[#B55A9C] text-white rounded-2xl p-8 text-center"
      >
        <h3 className="text-xl font-bold mb-2">Incremento real de facturación</h3>
        <p className="text-6xl font-bold text-welli-yellow my-4">+40%</p>
        <p className="text-slate-300">
          Promedio de aumento en facturación de nuestros aliados activos
        </p>
        <div className="flex items-center justify-center gap-1 mt-4">
          {[1,2,3,4,5].map((star) => (
            <Star key={star} className="w-6 h-6 text-welli-yellow fill-welli-yellow" />
          ))}
        </div>
        <p className="text-sm text-slate-400 mt-2">Calificación promedio de nuestros aliados</p>
      </motion.div>

      {/* Testimonial Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white border-2 border-welli-yellow/50 rounded-xl p-6"
      >
        <blockquote className="text-center">
          <p className="text-xl text-indigo-950 italic mb-4">
            "Desde que empezamos con Welli, cerramos más tratamientos porque el paciente ya no dice 'lo pienso'. Ahora dice '¿cuánto es la cuota?'"
          </p>
          <footer className="text-indigo-800">
            <strong>— Aliado Activo desde 2023</strong>
          </footer>
        </blockquote>
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
          Conocer al equipo Welli
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule7Validation;
