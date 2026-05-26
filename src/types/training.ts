export type TrainingRoute =
  | 'hub'
  | 'hunter'
  | 'farmer'
  | 'aliado'
  | 'maestria-equipo'
  | 'express-aliados';

export type RouteCategory = 'equipo' | 'aliados';

export interface RouteConfig {
  id: TrainingRoute;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  totalModules: number;
  category?: RouteCategory;
}

export const ROUTE_CONFIGS: Record<Exclude<TrainingRoute, 'hub'>, RouteConfig> = {
  hunter: {
    id: 'hunter',
    title: 'Hunter',
    subtitle: 'Conquista Clínicas',
    icon: '🎯',
    color: 'welli-orange',
    totalModules: 9,
    category: 'aliados',
  },
  farmer: {
    id: 'farmer',
    title: 'Farmer / CS',
    subtitle: 'Maestría en Ventas',
    icon: '🌱',
    color: 'secondary',
    totalModules: 22,
    category: 'aliados',
  },
  aliado: {
    id: 'aliado',
    title: 'Aliado Médico',
    subtitle: 'Guía Rápida',
    icon: '⚕️',
    color: 'welli-yellow',
    totalModules: 5,
    category: 'aliados',
  },
  'maestria-equipo': {
    id: 'maestria-equipo',
    title: 'Maestría en Capacitación',
    subtitle: 'Metodología comercial Welli',
    icon: '🧠',
    color: 'secondary',
    totalModules: 11,
    category: 'equipo',
  },
  'express-aliados': {
    id: 'express-aliados',
    title: 'Capacitación Express',
    subtitle: 'Onboarding optimizado para aliados',
    icon: '⚡',
    color: 'welli-yellow',
    totalModules: 7,
    category: 'aliados',
  },
};
