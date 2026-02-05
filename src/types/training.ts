export type TrainingRoute = 'hub' | 'hunter' | 'farmer' | 'aliado';

export interface RouteConfig {
  id: TrainingRoute;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  totalModules: number;
}

export const ROUTE_CONFIGS: Record<Exclude<TrainingRoute, 'hub'>, RouteConfig> = {
  hunter: {
    id: 'hunter',
    title: 'Hunter',
    subtitle: 'Conquista Clínicas',
    icon: '🎯',
    color: 'welli-orange',
    totalModules: 9,
  },
  farmer: {
    id: 'farmer',
    title: 'Farmer / CS',
    subtitle: 'Maestría en Ventas',
    icon: '🌱',
    color: 'secondary',
    totalModules: 22,
  },
  aliado: {
    id: 'aliado',
    title: 'Aliado Médico',
    subtitle: 'Guía Rápida',
    icon: '⚕️',
    color: 'welli-yellow',
    totalModules: 5,
  },
};
