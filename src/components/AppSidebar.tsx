import { 
  Armchair, 
  Brain,
  Calculator, 
  ShieldQuestion, 
  PlayCircle, 
  Smartphone, 
  Target, 
  MessageSquare, 
  GraduationCap,
  LayoutDashboard,
  Image,
  Gift,
  Video,
  Building2,
  FileText,
  CheckSquare,
  ChevronRight,
  Instagram,
  Zap,
  TrendingUp,
  Sparkles,
  Home,
  Lightbulb,
  Users,
  Map,
  Monitor,
  BarChart3,
  Newspaper,
  HelpCircle,
  Stethoscope,
  Heart,
  Download
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import WelliLogoFull from "@/components/WelliLogoFull";
import { TrainingRoute } from "@/types/training";

interface AppSidebarProps {
  currentModule: number;
  onModuleChange: (module: number) => void;
  currentRoute: TrainingRoute;
  onGoToHub: () => void;
}

// Hunter modules (9)
const hunterModules = [
  { id: 1, title: "¿Qué es Welli?", icon: Lightbulb },
  { id: 2, title: "Propuesta de Valor", icon: Target },
  { id: 3, title: "Videos por Alianza", icon: PlayCircle },
  { id: 4, title: "Welli vs Competencia", icon: BarChart3 },
  { id: 5, title: "Mapa del Tesoro", icon: Map },
  { id: 6, title: "Ecosistema Digital", icon: Monitor },
  { id: 7, title: "Validación y Cifras", icon: TrendingUp },
  { id: 8, title: "Welli en el Mundo", icon: Newspaper },
  { id: 9, title: "Quiz Final", icon: CheckSquare },
];

// Farmer/CS modules - Phase 1 (11)
const farmerPhase1Modules = [
  { id: 1, title: "El Secreto de la Agenda", icon: Armchair },
  { id: 2, title: "Señales del Paciente", icon: Brain },
  { id: 3, title: "Simulador de Cuotas", icon: Calculator },
  { id: 4, title: "¿Cómo Funciona?", icon: PlayCircle },
  { id: 5, title: "Objeciones Comunes", icon: MessageSquare },
  { id: 6, title: "Perfilamiento (Video)", icon: Target },
  { id: 7, title: "Welli Check", icon: Zap },
  { id: 8, title: "¿Afecta el Score?", icon: ShieldQuestion },
  { id: 9, title: "Zona de Prueba", icon: LayoutDashboard },
  { id: 10, title: "Role-Play (5 Escenarios)", icon: MessageSquare },
  { id: 11, title: "Fin Fase 1", icon: GraduationCap },
];

// Farmer/CS modules - Phase 2 (11)
const farmerPhase2Modules = [
  { id: 12, title: "Bienvenida Maestría", icon: Sparkles },
  { id: 13, title: "⚠️ Error del Desembolso", icon: TrendingUp },
  { id: 14, title: "Aliados en Redes", icon: Instagram },
  { id: 15, title: "Testimonios", icon: Video },
  { id: 16, title: "Referidos", icon: Gift },
  { id: 17, title: "Material POP", icon: Image },
  { id: 18, title: "Desembolso (72h)", icon: Video },
  { id: 19, title: "Desistimientos", icon: FileText },
  { id: 20, title: "Registro Clínica", icon: Building2 },
  { id: 21, title: "Quiz Final", icon: CheckSquare },
  { id: 22, title: "Checklist del Éxito", icon: CheckSquare },
];

// Aliado modules (5)
const aliadoModules = [
  { id: 1, title: "Welli Check", icon: Smartphone },
  { id: 2, title: "Cómo Pedir Desembolso", icon: Building2 },
  { id: 3, title: "Cuotas de Bienestar", icon: Heart },
  { id: 4, title: "Material POP", icon: Download },
  { id: 5, title: "Resumen Final", icon: CheckSquare },
];

const getRouteConfig = (route: TrainingRoute) => {
  switch (route) {
    case 'hunter':
      return { title: 'Hunter', subtitle: 'Conquista Clínicas', color: 'welli-orange' };
    case 'farmer':
      return { title: 'Farmer / CS', subtitle: 'Maestría en Ventas', color: 'secondary' };
    case 'aliado':
      return { title: 'Aliado Médico', subtitle: 'Guía Rápida', color: 'welli-yellow' };
    default:
      return { title: 'Training Hub', subtitle: '', color: 'primary' };
  }
};

const AppSidebar = ({ currentModule, onModuleChange, currentRoute, onGoToHub }: AppSidebarProps) => {
  const routeConfig = getRouteConfig(currentRoute);

  const renderHunterModules = () => (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sidebar-foreground/70 flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-welli-orange text-white flex items-center justify-center text-xs font-bold">🎯</span>
        Ruta Hunter
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {hunterModules.map((module) => {
            const isActive = currentModule === module.id;
            const isCompleted = currentModule > module.id;
            
            return (
              <SidebarMenuItem key={module.id}>
                <SidebarMenuButton
                  onClick={() => onModuleChange(module.id)}
                  isActive={isActive}
                  className={`group transition-all ${isCompleted ? "text-sidebar-foreground/80" : ""}`}
                >
                  <module.icon className={`w-4 h-4 ${isActive ? "text-welli-orange" : isCompleted ? "text-green-500" : ""}`} />
                  <span className="truncate text-sm">{module.title}</span>
                  {isActive && <ChevronRight className="ml-auto w-4 h-4 text-welli-orange" />}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  const renderFarmerModules = () => (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="text-sidebar-foreground/70 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-welli-yellow text-welli-yellow-foreground flex items-center justify-center text-xs font-bold">1</span>
          Fase 1: El Método del "Sí"
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {farmerPhase1Modules.map((module) => {
              const isActive = currentModule === module.id;
              const isCompleted = currentModule > module.id;
              
              return (
                <SidebarMenuItem key={module.id}>
                  <SidebarMenuButton
                    onClick={() => onModuleChange(module.id)}
                    isActive={isActive}
                    className={`group transition-all ${isCompleted ? "text-sidebar-foreground/80" : ""}`}
                  >
                    <module.icon className={`w-4 h-4 ${isActive ? "text-welli-yellow" : isCompleted ? "text-green-500" : ""}`} />
                    <span className="truncate text-sm">{module.title}</span>
                    {isActive && <ChevronRight className="ml-auto w-4 h-4 text-welli-yellow" />}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup className="mt-4">
        <SidebarGroupLabel className="text-sidebar-foreground/70 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">2</span>
          Fase 2: Herramientas de Cierre
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {farmerPhase2Modules.map((module) => {
              const isActive = currentModule === module.id;
              const isCompleted = currentModule > module.id;
              
              return (
                <SidebarMenuItem key={module.id}>
                  <SidebarMenuButton
                    onClick={() => onModuleChange(module.id)}
                    isActive={isActive}
                    className={`group transition-all ${isCompleted ? "text-sidebar-foreground/80" : ""}`}
                  >
                    <module.icon className={`w-4 h-4 ${isActive ? "text-secondary" : isCompleted ? "text-green-500" : ""}`} />
                    <span className="truncate text-sm">{module.title}</span>
                    {isActive && <ChevronRight className="ml-auto w-4 h-4 text-secondary" />}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );

  const renderAliadoModules = () => (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sidebar-foreground/70 flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-welli-yellow text-welli-yellow-foreground flex items-center justify-center text-xs font-bold">⚕️</span>
        Guía Rápida
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {aliadoModules.map((module) => {
            const isActive = currentModule === module.id;
            const isCompleted = currentModule > module.id;
            
            return (
              <SidebarMenuItem key={module.id}>
                <SidebarMenuButton
                  onClick={() => onModuleChange(module.id)}
                  isActive={isActive}
                  className={`group transition-all ${isCompleted ? "text-sidebar-foreground/80" : ""}`}
                >
                  <module.icon className={`w-4 h-4 ${isActive ? "text-welli-yellow" : isCompleted ? "text-green-500" : ""}`} />
                  <span className="truncate text-sm">{module.title}</span>
                  {isActive && <ChevronRight className="ml-auto w-4 h-4 text-welli-yellow" />}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <WelliLogoFull size="md" />
          <div>
            <h2 className="font-bold text-lg text-sidebar-foreground">{routeConfig.title}</h2>
            <p className="text-[10px] text-welli-yellow font-medium -mt-1">{routeConfig.subtitle}</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Back to Hub Button */}
      <div className="p-3 border-b border-sidebar-border">
        <Button
          onClick={onGoToHub}
          variant="outline"
          size="sm"
          className="w-full gap-2 text-xs"
        >
          <Home className="w-4 h-4" />
          Volver al Hub
        </Button>
      </div>

      <SidebarContent className="px-2">
        {currentRoute === 'hunter' && renderHunterModules()}
        {currentRoute === 'farmer' && renderFarmerModules()}
        {currentRoute === 'aliado' && renderAliadoModules()}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="text-center">
          <p className="text-xs text-sidebar-foreground/60">
            © {new Date().getFullYear()} Welli
          </p>
          <a
            href="https://www.welli.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-welli-yellow hover:underline"
          >
            welli.com.co
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
