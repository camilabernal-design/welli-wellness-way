import { motion } from "framer-motion";
import { Target, Sprout, Stethoscope, ArrowRight } from "lucide-react";
import WelliLogoFull from "@/components/WelliLogoFull";
import { TrainingRoute } from "@/types/training";

interface TrainingHubProps {
  onSelectRoute: (route: TrainingRoute) => void;
}

const routes = [
  {
    id: 'hunter' as TrainingRoute,
    title: 'Hunter',
    subtitle: 'Pitch para clínicas',
    description: 'Material de presentación para conquistar nuevas clínicas aliadas',
    icon: Target,
    color: 'from-welli-yellow to-welli-yellow/80',
    borderColor: 'border-welli-yellow',
    bgColor: 'bg-welli-yellow/20',
    duration: '~15 min',
    modules: 9,
  },
  {
    id: 'farmer' as TrainingRoute,
    title: 'Farmer / CS',
    subtitle: 'Maestría en Ventas',
    description: 'Domina la Clínica de Ventas completa con 22 módulos de entrenamiento',
    icon: Sprout,
    color: 'from-secondary to-secondary/80',
    borderColor: 'border-secondary',
    bgColor: 'bg-secondary/10',
    duration: '~45 min',
    modules: 22,
  },
  {
    id: 'aliado' as TrainingRoute,
    title: 'Aliado Médico',
    subtitle: 'Guía Rápida',
    description: 'Versión resumida para doctores y secretarias: lo esencial del día a día',
    icon: Stethoscope,
    color: 'from-welli-yellow to-welli-yellow/80',
    borderColor: 'border-welli-yellow',
    bgColor: 'bg-welli-yellow/10',
    duration: '~10 min',
    modules: 5,
  },
];

const TrainingHub = ({ onSelectRoute }: TrainingHubProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-background to-slate-100">
      {/* Header */}
      <header className="py-6 px-4 border-b border-border/50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
          <WelliLogoFull size="lg" />
          <div className="hidden md:block">
            <h1 className="font-bold text-xl text-indigo-950">Training Hub</h1>
            <p className="text-xs text-welli-yellow font-medium">Centro de Entrenamiento</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
            Tu camino comienza aquí...
          </h1>
          <p className="text-lg text-indigo-800 max-w-2xl mx-auto">
            Lo que debes saber sobre Welli y cómo hará crecer tu negocio. 
            Selecciona tu perfil para comenzar.
          </p>
        </motion.div>

        {/* Route Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => onSelectRoute(route.id)}
              className={`relative cursor-pointer group rounded-2xl border-2 ${route.borderColor} bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-br ${route.color} p-6 text-white`}>
                <route.icon className="w-12 h-12 mb-4" />
                <h2 className="text-2xl font-bold">{route.title}</h2>
                <p className="text-white/90 font-medium">{route.subtitle}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-indigo-800 mb-4">{route.description}</p>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className={`${route.bgColor} px-3 py-1 rounded-full font-medium text-indigo-950`}>
                    {route.modules} módulos
                  </span>
                  <span className="text-indigo-800">{route.duration}</span>
                </div>

                <div className="flex items-center justify-center gap-2 py-3 rounded-lg bg-welli-yellow text-indigo-950 font-bold group-hover:bg-welli-yellow/90 transition-all">
                  Comenzar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className={`absolute -top-8 -right-8 w-16 h-16 ${route.bgColor} rotate-45`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { value: '+180k', label: 'Aplicaciones' },
            { value: '+1,800', label: 'Aliados Médicos' },
            { value: '$50k M', label: 'Desembolsados' },
            { value: '3 min', label: 'Aprobación' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/80 rounded-xl p-4 border border-welli-yellow/30">
              <p className="text-2xl font-bold text-welli-yellow">{stat.value}</p>
              <p className="text-sm text-indigo-800">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border/50 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-indigo-800">
            © {new Date().getFullYear()} Welli — Financia tu Bienestar
          </p>
          <a
            href="https://www.welli.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-welli-yellow hover:underline"
          >
            welli.com.co
          </a>
        </div>
      </footer>
    </div>
  );
};

export default TrainingHub;
