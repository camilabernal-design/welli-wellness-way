export type TrainingRoute = 'hub' | 'hunter' | 'farmer' | 'farmer-v2' | 'aliado';

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
  'farmer-v2': {
    id: 'farmer-v2',
    title: 'Clínica 2.0',
    subtitle: 'Versión Piloto - Express',
    icon: '⚡',
    color: 'secondary',
    totalModules: 9,
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
};
