import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Building2, Banknote } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const impactStats = [
  {
    value: '+180,000',
    label: 'Aplicaciones Procesadas',
    sublabel: 'por un valor de más de $500 mil millones',
    icon: TrendingUp,
    color: 'text-welli-orange',
  },
  {
    value: '+$60,000M',
    label: 'Desembolsados',
    sublabel: 'para +18,000 colombianos',
    icon: Banknote,
    color: 'text-green-600',
  },
  {
    value: '+1,800',
    label: 'Aliados Médicos',
    sublabel: 'confían en nosotros',
    icon: Building2,
    color: 'text-secondary',
  },
  {
    value: '$300,000M',
    label: 'Líneas de Fondeo',
    sublabel: 'para expandir nuestra misión',
    icon: Users,
    color: 'text-welli-yellow',
  },
];

const allyLogos = [
  { name: 'Quirofanos del Tesoro', category: 'Cirugía' },
  { name: 'Instituto Fertilidad Humana', category: 'Fertilidad' },
  { name: 'Moons', category: 'Ortodoncia' },
  { name: 'DentiSalud', category: 'Odontología' },
  { name: 'Clínica Imbanaco', category: 'Multiservicio' },
  { name: 'Grupo Quironsalud', category: 'Hospitales' },
  { name: 'InterQuirófanos', category: 'Cirugía' },
  { name: 'Profamilia', category: 'Salud Sexual' },
  { name: 'Sonría', category: 'Odontología' },
  { name: 'Bogotá Laser', category: 'Oftalmología' },
  { name: 'Movet', category: 'Veterinaria' },
  { name: 'PetPlus', category: 'Veterinaria' },
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
        <span className="inline-block px-4 py-1 rounded-full bg-welli-orange/20 text-welli-orange font-medium text-sm">
          Módulo 7 · Prueba Social
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Validación y Cifras
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            <Card className="h-full text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <p className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="font-medium text-sm mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Ally Logos Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Algunos de Nuestros Aliados Médicos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {allyLogos.map((ally, index) => (
            <motion.div
              key={ally.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="bg-white border border-border rounded-lg p-3 text-center hover:border-welli-orange/50 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-slate-500" />
              </div>
              <p className="text-xs font-medium leading-tight">{ally.name}</p>
              <p className="text-[10px] text-muted-foreground">{ally.category}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-welli-orange/10 via-secondary/10 to-welli-yellow/10 rounded-2xl p-6"
      >
        <h3 className="font-bold text-lg mb-4 text-center">Especialidades que Confían en Welli</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['🦷 Odontología', '💉 Estética', '🐾 Veterinaria', '👶 Fertilidad', '👁️ Oftalmología', '🏥 Cirugía'].map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 bg-white rounded-full border border-border text-sm font-medium shadow-sm"
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
        transition={{ delay: 0.8 }}
        className="bg-slate-900 text-white rounded-2xl p-8 text-center"
      >
        <h3 className="text-xl font-bold mb-2">Incremento Real de Revenue</h3>
        <p className="text-5xl font-bold text-welli-yellow my-4">+40%</p>
        <p className="text-slate-300">
          Promedio de aumento en facturación de nuestros aliados activos
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-center pt-6"
      >
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-orange hover:bg-welli-orange/90 text-white gap-2"
        >
          Siguiente: Welli en el Mundo
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule7Validation;
