import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Newspaper, ExternalLink, Linkedin, GraduationCap } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const pressArticles = [
  {
    source: 'Forbes Colombia',
    title: 'Welli, la fintech que ayuda a financiar tratamientos de salud en Colombia',
    excerpt: 'Esta fintech financia más de 2,000 procedimientos médicos al mes y ya ha levantado más de US$25 millones.',
    date: 'Julio 2025',
    color: 'bg-red-600',
  },
  {
    source: 'El Espectador',
    title: 'Fintech Welli apuesta por financiar tratamientos médicos en solo 5 minutos',
    excerpt: 'La startup anuncia que obtuvo US$25 millones en rondas de inversión. Ya ha otorgado más de $50,000 millones en créditos médicos.',
    date: 'Julio 2025',
    color: 'bg-blue-600',
  },
  {
    source: 'Pulzo',
    title: 'En dos años de operación, Welli ya prestó más de $50,000 millones',
    excerpt: 'Espera abrir operaciones fuera del país y crear planes de ahorro en el mediano plazo.',
    date: 'Julio 2025',
    color: 'bg-purple-600',
  },
];

const leadership = [
  {
    name: 'Felipe Gómez Herrera',
    role: 'Co-fundador y CEO',
    education: ['Harvard', 'Cornell University'],
    experience: ['McKinsey & Company'],
  },
  {
    name: 'Felipe Jaramillo López',
    role: 'Co-fundador y COO',
    education: ['NYU Stern', 'Universidad de los Andes'],
    experience: ['Western Union'],
  },
];

const boardMembers = [
  { name: 'Jorge Gómez MD', role: 'Presidente, Sociedad de Cirugía de Bogotá' },
  { name: 'Luis Eduardo Cavelier MD', role: 'Gerente, Clínica de Marly' },
  { name: 'Pablo Gómez MD', role: 'Gerente, PMA' },
  { name: 'Daniel Posse Espinosa', role: 'Partner, Upside Consulting' },
];

const HunterModule8Press = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          🏆 Credibilidad
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          Respaldo de los Mejores
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Reconocidos por los medios. Liderados por expertos.
        </p>
      </motion.div>

      {/* Press Coverage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-950">
          <Newspaper className="w-5 h-5" /> Welli en los Medios
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {pressArticles.map((article, index) => (
            <motion.div
              key={article.source}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-0">
                  <div className={`${article.color} p-4 text-white`}>
                    <p className="font-bold">{article.source}</p>
                    <p className="text-xs text-white/80">{article.date}</p>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2 group-hover:text-welli-orange transition-colors text-indigo-950">
                      {article.title}
                    </h4>
                    <p className="text-xs text-indigo-800">{article.excerpt}</p>
                    <div className="flex items-center gap-1 mt-3 text-welli-orange text-xs font-medium">
                      Leer más <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leadership */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-bold text-indigo-950">Equipo Directivo TOP</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((leader) => (
            <Card key={leader.name} className="border-2 border-welli-yellow/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-welli-yellow to-welli-orange flex items-center justify-center text-indigo-950 text-2xl font-bold">
                    {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-indigo-950">{leader.name}</h3>
                    <p className="text-welli-orange font-medium text-sm">{leader.role}</p>
                    
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <GraduationCap className="w-4 h-4 text-secondary" />
                        <span className="text-indigo-800">{leader.education.join(' • ')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                        <span className="text-indigo-800">{leader.experience.join(' • ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Board */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-indigo-950 to-indigo-900 text-white rounded-2xl p-6"
      >
        <h3 className="font-bold text-lg mb-4">Junta Directiva e Inversionistas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {boardMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center text-lg mb-2">
                {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <p className="font-medium text-sm">{member.name}</p>
              <p className="text-xs text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Investment Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-welli-yellow to-welli-yellow/80 rounded-xl p-6 text-center"
      >
        <p className="text-lg font-medium text-indigo-950">Respaldados con</p>
        <p className="text-5xl font-bold my-2 text-indigo-950">US$25 Millones</p>
        <p className="text-sm text-indigo-800">en capital y deuda para expandir nuestra misión</p>
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
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
        >
          Ir a Validación Final
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule8Press;
