import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Target, Sprout, Stethoscope, ArrowRight, Zap, Sparkles, GraduationCap, Brain } from "lucide-react";
import WelliLogoFull from "@/components/WelliLogoFull";
import { TrainingRoute, RouteCategory } from "@/types/training";

interface TrainingHubProps {
  onSelectRoute: (route: TrainingRoute) => void;
}

type AccentColor = 'secondary' | 'welli-yellow';

interface RouteCard {
  id: TrainingRoute;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Target;
  color: string;
  borderColor: string;
  bgColor: string;
  duration: string;
  modules: number;
  badge?: string | null;
  category: RouteCategory;
}

const allRoutes: RouteCard[] = [
  {
    id: 'hunter',
    title: 'Hunter',
    subtitle: 'Pitch para clínicas',
    description: 'Material de presentación para conquistar nuevas clínicas aliadas',
    icon: Target,
    color: 'from-welli-yellow to-welli-yellow/80',
    borderColor: 'border-welli-yellow',
    bgColor: 'bg-welli-yellow/20',
    duration: '~15 min',
    modules: 9,
    badge: null,
    category: 'aliados',
  },
  {
    id: 'farmer',
    title: 'Farmer / CS',
    subtitle: 'Maestría en Ventas',
    description: 'Domina la Clínica de Ventas completa con 22 módulos de entrenamiento',
    icon: Sprout,
    color: 'from-secondary to-secondary/80',
    borderColor: 'border-secondary',
    bgColor: 'bg-secondary/10',
    duration: '~45 min',
    modules: 22,
    badge: null,
    category: 'aliados',
  },
  {
    id: 'farmer-v2',
    title: 'Clínica 2.0',
    subtitle: 'Versión Piloto - Express',
    description: 'Nueva estructura comercial: 25 min, indagación primero, activación cerrada. Piloto Mariana × Alexis.',
    icon: Zap,
    color: 'from-secondary to-welli-yellow',
    borderColor: 'border-secondary',
    bgColor: 'bg-secondary/20',
    duration: '~25 min',
    modules: 9,
    badge: 'PILOTO',
    category: 'aliados',
  },
  {
    id: 'aliado',
    title: 'Aliado Médico',
    subtitle: 'Guía Rápida',
    description: 'Versión resumida para doctores y secretarias: lo esencial del día a día',
    icon: Stethoscope,
    color: 'from-welli-yellow to-welli-yellow/80',
    borderColor: 'border-welli-yellow',
    bgColor: 'bg-welli-yellow/10',
    duration: '~10 min',
    modules: 5,
    badge: null,
    category: 'aliados',
  },
];

const accentClasses: Record<AccentColor, { text: string; bg: string; border: string; line: string }> = {
  secondary: {
    text: 'text-secondary',
    bg: 'bg-secondary',
    border: 'border-secondary',
    line: 'bg-secondary',
  },
  'welli-yellow': {
    text: 'text-welli-yellow',
    bg: 'bg-welli-yellow',
    border: 'border-welli-yellow',
    line: 'bg-welli-yellow',
  },
};

interface CategorySectionProps {
  title: string;
  subtitle: string;
  badge: string;
  accentColor: AccentColor;
  routes: RouteCard[];
  onSelectRoute: (route: TrainingRoute) => void;
}

const CategorySection = ({ title, subtitle, badge, accentColor, routes, onSelectRoute }: CategorySectionProps) => {
  const accent = accentClasses[accentColor];

  return (
    <section className="mb-16">
      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${accent.bg} text-indigo-950`}>
            {badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-950">{title}</h2>
        </div>
        <p className="text-indigo-800 mb-3">{subtitle}</p>
        <div className={`h-1 w-24 rounded-full ${accent.line}`} />
      </div>

      {/* Routes Grid or Placeholder */}
      {routes.length === 0 ? (
        <div className={`rounded-2xl border-2 border-dashed ${accent.border} bg-card/40 p-12 text-center`}>
          <Sparkles className={`w-10 h-10 mx-auto mb-3 ${accent.text}`} />
          <p className="text-indigo-800 italic">Próximamente nuevo contenido</p>
        </div>
      ) : (
        <div className={`grid md:grid-cols-2 ${routes.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => onSelectRoute(route.id)}
              className={`relative cursor-pointer group rounded-2xl border-2 ${route.borderColor} bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Category badge top-right */}
              <div className={`absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider ${accent.bg} text-indigo-950 shadow-sm`}>
                {badge}
              </div>

              {route.badge && (
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-indigo-950 text-welli-yellow text-[10px] font-bold tracking-wider shadow-md">
                  ✨ {route.badge}
                </div>
              )}

              <div className={`bg-gradient-to-br ${route.color} p-6`}>
                <route.icon className="w-12 h-12 mb-4 text-indigo-950" />
                <h3 className="text-2xl font-bold text-indigo-950">{route.title}</h3>
                <p className="text-indigo-800 font-medium">{route.subtitle}</p>
              </div>

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
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

const TrainingHub = forwardRef<HTMLDivElement, TrainingHubProps>(
  ({ onSelectRoute }, ref) => {
    const equipoRoutes = allRoutes.filter(r => r.category === 'equipo');
    const aliadoRoutes = allRoutes.filter(r => r.category === 'aliados');

    return (
      <div ref={ref} className="min-h-screen bg-gradient-to-br from-welli-yellow/10 via-welli-yellow/5 to-white">
        <header className="py-6 px-4 border-b border-welli-yellow/30 bg-welli-yellow/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
            <WelliLogoFull size="lg" />
            <div className="hidden md:block">
              <h1 className="font-bold text-xl text-indigo-950">Training Hub</h1>
              <p className="text-xs text-welli-yellow font-medium">Centro de Entrenamiento</p>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-12">
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

          <CategorySection
            title="Formación del Equipo Welli"
            subtitle="Formación profesional para el equipo Welli"
            badge="EQUIPO"
            accentColor="secondary"
            routes={equipoRoutes}
            onSelectRoute={onSelectRoute}
          />

          <CategorySection
            title="Material para Sesiones con Aliados"
            subtitle="Material guiado para sesiones con clínicas aliadas"
            badge="ALIADOS"
            accentColor="welli-yellow"
            routes={aliadoRoutes}
            onSelectRoute={onSelectRoute}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            {[
              { value: '+300k', label: 'Aplicaciones' },
              { value: '+2.800', label: 'Aliados Médicos' },
              { value: '$140k M', label: 'Desembolsados' },
              { value: '3 min', label: 'Aprobación' },
            ].map((stat, i) => (
              <div key={i} className="bg-welli-yellow/20 rounded-xl p-4 border border-welli-yellow/40">
                <p className="text-2xl font-bold text-welli-yellow">{stat.value}</p>
                <p className="text-sm text-indigo-800">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </main>

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
  }
);

TrainingHub.displayName = "TrainingHub";

export default TrainingHub;
