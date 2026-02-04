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
  Copy
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
import WelliLogo from "@/components/WelliLogo";

interface AppSidebarProps {
  currentModule: number;
  onModuleChange: (module: number) => void;
}

const phase1Modules = [
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

const phase2Modules = [
  { id: 12, title: "Bienvenida Maestría", icon: Sparkles },
  { id: 13, title: "⚠️ Error del Desembolso", icon: TrendingUp },
  { id: 14, title: "Videos Operativos", icon: Video },
  { id: 15, title: "Desistimientos", icon: FileText },
  { id: 16, title: "Aliados en Redes", icon: Instagram },
  { id: 17, title: "Referidos", icon: Gift },
  { id: 18, title: "Material POP", icon: Image },
  { id: 19, title: "Registro Clínica", icon: Building2 },
  { id: 20, title: "Quiz Final", icon: CheckSquare },
  { id: 21, title: "Checklist del Éxito", icon: CheckSquare },
];

const AppSidebar = ({ currentModule, onModuleChange }: AppSidebarProps) => {
  const isPhase1Complete = currentModule > 11;

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <WelliLogo size="md" />
          <div>
            <h2 className="font-bold text-lg text-sidebar-foreground">Sales Clinic</h2>
            <p className="text-[10px] text-welli-yellow font-medium -mt-1">Capacitación Welli</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Phase 1 */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-welli-yellow text-welli-yellow-foreground flex items-center justify-center text-xs font-bold">1</span>
            Fase 1: El Método del "Sí"
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {phase1Modules.map((module) => {
                const isActive = currentModule === module.id;
                const isCompleted = currentModule > module.id;
                
                return (
                  <SidebarMenuItem key={module.id}>
                    <SidebarMenuButton
                      onClick={() => onModuleChange(module.id)}
                      isActive={isActive}
                      className={`group transition-all ${
                        isCompleted ? "text-sidebar-foreground/80" : ""
                      }`}
                    >
                      <module.icon className={`w-4 h-4 ${isActive ? "text-welli-yellow" : isCompleted ? "text-success" : ""}`} />
                      <span className="truncate text-sm">{module.title}</span>
                      {isActive && (
                        <ChevronRight className="ml-auto w-4 h-4 text-welli-yellow" />
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Phase 2 */}
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-sidebar-foreground/70 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">2</span>
            Fase 2: Herramientas de Cierre
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {phase2Modules.map((module) => {
                const isActive = currentModule === module.id;
                const isCompleted = currentModule > module.id;
                
                return (
                  <SidebarMenuItem key={module.id}>
                    <SidebarMenuButton
                      onClick={() => onModuleChange(module.id)}
                      isActive={isActive}
                      className={`group transition-all ${
                        isCompleted ? "text-sidebar-foreground/80" : ""
                      }`}
                    >
                      <module.icon className={`w-4 h-4 ${isActive ? "text-secondary" : isCompleted ? "text-success" : ""}`} />
                      <span className="truncate text-sm">{module.title}</span>
                      {isActive && (
                        <ChevronRight className="ml-auto w-4 h-4 text-secondary" />
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
