import { 
  Armchair, 
  TrendingUp, 
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
  Zap
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
  { id: 1, title: "Bienvenida", icon: Armchair },
  { id: 2, title: "Señales del Paciente", icon: Target },
  { id: 3, title: "Dashboard de Resultados", icon: TrendingUp },
  { id: 4, title: "Cotizador Pro", icon: Calculator },
  { id: 5, title: "¿Afecta el Score?", icon: ShieldQuestion },
  { id: 6, title: "Video: Proceso", icon: PlayCircle },
  { id: 7, title: "Welli Check", icon: Smartphone },
  { id: 8, title: "Zona de Prueba", icon: LayoutDashboard },
  { id: 9, title: "Práctica de Objeciones", icon: MessageSquare },
  { id: 10, title: "Completaste Fase 1", icon: GraduationCap },
];

const phase2Modules = [
  { id: 11, title: "Resumen Fase 1", icon: LayoutDashboard },
  { id: 12, title: "Elegibilidad", icon: Zap },
  { id: 13, title: "Aliados en Redes", icon: Instagram },
  { id: 14, title: "Material POP", icon: Image },
  { id: 15, title: "Referidos", icon: Gift },
  { id: 16, title: "Videos Operativos", icon: Video },
  { id: 17, title: "Registro de Clínica", icon: Building2 },
  { id: 18, title: "Herramientas", icon: FileText },
  { id: 19, title: "Checklist Final", icon: CheckSquare },
];

const AppSidebar = ({ currentModule, onModuleChange }: AppSidebarProps) => {
  const isPhase1Complete = currentModule > 10;

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          {/* Full Welli Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-welli-yellow to-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div className="ml-2">
              <h2 className="font-bold text-lg text-sidebar-foreground">Welli</h2>
              <p className="text-[10px] text-welli-yellow font-medium -mt-1">Sales Clinic</p>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Phase 1 */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-welli-yellow text-welli-yellow-foreground flex items-center justify-center text-xs font-bold">1</span>
            Fase 1: Fundamentos
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
            Fase 2: Crecimiento
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {phase2Modules.map((module) => {
                const isActive = currentModule === module.id;
                const isCompleted = currentModule > module.id;
                const isLocked = !isPhase1Complete && module.id > 10;
                
                return (
                  <SidebarMenuItem key={module.id}>
                    <SidebarMenuButton
                      onClick={() => onModuleChange(module.id)}
                      isActive={isActive}
                      className={`group transition-all ${
                        isLocked ? "opacity-50" : ""
                      } ${isCompleted ? "text-sidebar-foreground/80" : ""}`}
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
