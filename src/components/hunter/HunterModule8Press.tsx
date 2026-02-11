import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Newspaper, Linkedin, GraduationCap, Building2 } from "lucide-react";
import welliCharacterThinking from "@/assets/welli-character-thinking.png";
import noticiaForbes from "@/assets/news/noticia-forbes.png";
import noticiaEspectador from "@/assets/news/noticia-espectador.png";
import noticiaPulzo from "@/assets/news/noticia-pulzo.png";
import noticiaValora from "@/assets/news/noticia-valora.png";
import noticiaPortafolio from "@/assets/news/noticia-portafolio.png";
import felipeGomezImg from "@/assets/team/felipe-gomez.png";
import felipeJaramilloImg from "@/assets/team/felipe-jaramillo.png";
import aliadoImbanaco from "@/assets/aliados/imbanaco.png";
import aliadoDentisalud from "@/assets/aliados/dentisalud.png";
import aliadoProfamilia from "@/assets/aliados/profamilia.png";
import aliadoSonria from "@/assets/aliados/sonria.png";
import aliadoOdontoFamily from "@/assets/aliados/odonto-family.png";
import aliadoMovet from "@/assets/aliados/movet.png";
import aliadoPetplus from "@/assets/aliados/petplus.png";
import aliadoPma from "@/assets/aliados/pma.png";

interface ModuleProps {
  onComplete: () => void;
}

const pressArticles = [
  { source: 'Forbes Colombia', image: noticiaForbes },
  { source: 'El Espectador', image: noticiaEspectador },
  { source: 'Pulzo', image: noticiaPulzo },
  { source: 'Valora Analítik', image: noticiaValora },
  { source: 'Portafolio', image: noticiaPortafolio },
];

const leadership = [
  {
    name: 'Felipe Gómez Herrera',
    role: 'Co-fundador y CEO',
    education: ['Harvard', 'Cornell University'],
    experience: ['McKinsey & Company'],
    image: felipeGomezImg,
  },
  {
    name: 'Felipe Jaramillo López',
    role: 'Co-fundador y COO',
    education: ['NYU Stern', 'Universidad de los Andes'],
    experience: ['Western Union'],
    image: felipeJaramilloImg,
  },
];

const aliadoLogos = [
  { name: 'Clínica Imbanaco', image: aliadoImbanaco },
  { name: 'DentiSalud', image: aliadoDentisalud },
  { name: 'Profamilia Fertilidad', image: aliadoProfamilia },
  { name: 'Sonría', image: aliadoSonria },
  { name: 'Odonto Family', image: aliadoOdontoFamily },
  { name: 'Clínica Movet', image: aliadoMovet },
  { name: 'Petplus', image: aliadoPetplus },
  { name: 'PMA', image: aliadoPma },
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
          Respaldo de los mejores
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Reconocidos por los medios. Liderados por expertos.
        </p>
      </motion.div>

      {/* Press Coverage - Image Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-950">
          <Newspaper className="w-5 h-5" /> Welli en los medios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pressArticles.map((article, index) => (
            <motion.div
              key={article.source}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden border-2 border-welli-yellow/30 hover:border-welli-yellow">
                <CardContent className="p-0">
                  <img 
                    src={article.image} 
                    alt={`Welli en ${article.source}`}
                    className="w-full h-auto object-cover"
                  />
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
        <h2 className="text-xl font-bold text-indigo-950">Equipo directivo TOP</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((leader) => (
            <Card key={leader.name} className="border-2 border-welli-yellow/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img src={leader.image} alt={leader.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
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
        <h3 className="font-bold text-lg mb-4">Junta directiva e inversionistas</h3>
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
        className="bg-gradient-to-r from-welli-yellow to-welli-yellow/80 rounded-xl p-6 text-center relative overflow-hidden"
      >
        <img 
          src={welliCharacterThinking} 
          alt="Welli character" 
          className="absolute -left-4 -bottom-4 w-28 h-28 object-contain opacity-30 md:opacity-50"
        />
        <p className="text-lg font-medium text-indigo-950">Respaldados con</p>
        <p className="text-5xl font-bold my-2 text-indigo-950">US$25 millones</p>
        <p className="text-sm text-indigo-800">en capital y deuda para expandir nuestra misión</p>
      </motion.div>

      {/* Allied Medical Partners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-950">
          <Building2 className="w-5 h-5" /> Algunos de nuestros aliados médicos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {aliadoLogos.map((aliado, index) => (
            <motion.div
              key={aliado.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.05 }}
            >
              <Card className="hover:shadow-lg transition-shadow border-2 border-welli-yellow/20 hover:border-welli-yellow">
                <CardContent className="p-4 flex items-center justify-center h-28">
                  <img
                    src={aliado.image}
                    alt={aliado.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

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
          Ir a validación final
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule8Press;
