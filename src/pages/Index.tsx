import { useState, forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import WelliLogoFull from "@/components/WelliLogoFull";
import { Calculator } from "lucide-react";
import { TrainingRoute } from "@/types/training";

// Hub
import TrainingHub from "@/pages/TrainingHub";

// Hunter Modules (9)
import HunterModule1WhatIsWelli from "@/components/hunter/HunterModule1WhatIsWelli";
import HunterModule2ValueProposition from "@/components/hunter/HunterModule2ValueProposition";
import HunterModule3AllianceVideos from "@/components/hunter/HunterModule3AllianceVideos";
import HunterModule4Comparison from "@/components/hunter/HunterModule4Comparison";
import HunterModule5TreasureMap from "@/components/hunter/HunterModule5TreasureMap";
import HunterModule6Ecosystem from "@/components/hunter/HunterModule6Ecosystem";
import HunterModule7Validation from "@/components/hunter/HunterModule7Validation";
import HunterModule8Press from "@/components/hunter/HunterModule8Press";
import HunterModule9Quiz from "@/components/hunter/HunterModule9Quiz";

// Aliado Modules (5)
import AliadoModule1WelliCheck from "@/components/aliado/AliadoModule1WelliCheck";
import AliadoModule2Desembolso from "@/components/aliado/AliadoModule2Desembolso";
import AliadoModule3Cuotas from "@/components/aliado/AliadoModule3Cuotas";
import AliadoModule4MaterialPOP from "@/components/aliado/AliadoModule4MaterialPOP";
import AliadoModule5Summary from "@/components/aliado/AliadoModule5Summary";

// Farmer/CS Phase 1 Modules (11)
import Phase1Welcome from "@/components/modules/Phase1Welcome";
import ModulePatientSignals from "@/components/ModulePatientSignals";
import CalculatorProModule from "@/components/modules/CalculatorProModule";
import VideoProcessModule from "@/components/modules/VideoProcessModule";
import ModuleObjectionHandling from "@/components/ModuleObjectionHandling";
import PerfilamientoModule from "@/components/modules/PerfilamientoModule";
import WelliCheckPhase1 from "@/components/modules/WelliCheckPhase1";
import ScoreMythModule from "@/components/modules/ScoreMythModule";
import PracticeSpaceModule from "@/components/modules/PracticeSpaceModule";
import Module4RolePlay from "@/components/Module4RolePlay";
import Phase1Complete from "@/components/modules/Phase1Complete";

// Farmer/CS Phase 2 Modules (11)
import Phase2Summary from "@/components/modules/Phase2Summary";
import DisbursementWarningModule from "@/components/modules/DisbursementWarningModule";
import SocialAlliesModule from "@/components/modules/SocialAlliesModule";
import TestimonialsModule from "@/components/modules/TestimonialsModule";
import ModuleReferrals from "@/components/ModuleReferrals";
import ModulePOPGallery from "@/components/ModulePOPGallery";
import OperationalVideosModule from "@/components/modules/OperationalVideosModule";
import DesistimientoModule from "@/components/modules/DesistimientoModule";
import ModuleTeamRegistration from "@/components/ModuleTeamRegistration";
import FinalQuizModule from "@/components/modules/FinalQuizModule";
import FinalChecklist from "@/components/modules/FinalChecklist";

const ROUTE_MODULES = {
  hunter: 9,
  farmer: 22,
  aliado: 5,
};

const Index = forwardRef<HTMLDivElement>((_, ref) => {
  const [currentRoute, setCurrentRoute] = useState<TrainingRoute>('hub');
  const [currentModule, setCurrentModule] = useState(1);

  const handleSelectRoute = (route: TrainingRoute) => {
    setCurrentRoute(route);
    setCurrentModule(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoToHub = () => {
    setCurrentRoute('hub');
    setCurrentModule(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleModuleComplete = () => {
    const totalModules = ROUTE_MODULES[currentRoute as keyof typeof ROUTE_MODULES] || 1;
    if (currentModule < totalModules) {
      setCurrentModule(currentModule + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleModuleChange = (moduleId: number) => {
    setCurrentModule(moduleId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToCalculator = () => {
    if (currentRoute === 'farmer') {
      setCurrentModule(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Render Hub
  if (currentRoute === 'hub') {
    return <TrainingHub onSelectRoute={handleSelectRoute} />;
  }

  // Render Hunter route
  const renderHunterModule = () => {
    switch (currentModule) {
      case 1: return <HunterModule1WhatIsWelli onComplete={handleModuleComplete} />;
      case 2: return <HunterModule2ValueProposition onComplete={handleModuleComplete} />;
      case 3: return <HunterModule3AllianceVideos onComplete={handleModuleComplete} />;
      case 4: return <HunterModule4Comparison onComplete={handleModuleComplete} />;
      case 5: return <HunterModule5TreasureMap onComplete={handleModuleComplete} />;
      case 6: return <HunterModule6Ecosystem onComplete={handleModuleComplete} />;
      case 7: return <HunterModule7Validation onComplete={handleModuleComplete} />;
      case 8: return <HunterModule8Press onComplete={handleModuleComplete} />;
      case 9: return <HunterModule9Quiz onComplete={handleGoToHub} />;
      default: return <HunterModule1WhatIsWelli onComplete={handleModuleComplete} />;
    }
  };

  // Render Aliado route
  const renderAliadoModule = () => {
    switch (currentModule) {
      case 1: return <AliadoModule1WelliCheck onComplete={handleModuleComplete} />;
      case 2: return <AliadoModule2Desembolso onComplete={handleModuleComplete} />;
      case 3: return <AliadoModule3Cuotas onComplete={handleModuleComplete} />;
      case 4: return <AliadoModule4MaterialPOP onComplete={handleModuleComplete} />;
      case 5: return <AliadoModule5Summary onComplete={() => setCurrentModule(1)} onGoToHub={handleGoToHub} />;
      default: return <AliadoModule1WelliCheck onComplete={handleModuleComplete} />;
    }
  };

  // Render Farmer/CS route (existing 22 modules)
  const renderFarmerModule = () => {
    switch (currentModule) {
      // Phase 1
      case 1: return <Phase1Welcome onComplete={handleModuleComplete} />;
      case 2: return <ModulePatientSignals onComplete={handleModuleComplete} />;
      case 3: return <CalculatorProModule onComplete={handleModuleComplete} />;
      case 4: return <VideoProcessModule onComplete={handleModuleComplete} />;
      case 5: return <ModuleObjectionHandling onComplete={handleModuleComplete} />;
      case 6: return <PerfilamientoModule onComplete={handleModuleComplete} />;
      case 7: return <WelliCheckPhase1 onComplete={handleModuleComplete} />;
      case 8: return <ScoreMythModule onComplete={handleModuleComplete} />;
      case 9: return <PracticeSpaceModule onComplete={handleModuleComplete} />;
      case 10: return <Module4RolePlay onComplete={handleModuleComplete} />;
      case 11: return <Phase1Complete onComplete={handleModuleComplete} />;
      // Phase 2
      case 12: return <Phase2Summary onComplete={handleModuleComplete} />;
      case 13: return <DisbursementWarningModule onComplete={handleModuleComplete} />;
      case 14: return <SocialAlliesModule onComplete={handleModuleComplete} />;
      case 15: return <TestimonialsModule onComplete={handleModuleComplete} />;
      case 16: return <ModuleReferrals onComplete={handleModuleComplete} />;
      case 17: return <ModulePOPGallery onComplete={handleModuleComplete} />;
      case 18: return <OperationalVideosModule onComplete={handleModuleComplete} />;
      case 19: return <DesistimientoModule onComplete={handleModuleComplete} />;
      case 20: return <ModuleTeamRegistration onComplete={handleModuleComplete} />;
      case 21: return <FinalQuizModule onComplete={handleModuleComplete} />;
      case 22: return <FinalChecklist onComplete={() => setCurrentModule(1)} />;
      default: return <Phase1Welcome onComplete={handleModuleComplete} />;
    }
  };

  const renderModule = () => {
    switch (currentRoute) {
      case 'hunter': return renderHunterModule();
      case 'aliado': return renderAliadoModule();
      case 'farmer': return renderFarmerModule();
      default: return null;
    }
  };

  const getRouteInfo = () => {
    switch (currentRoute) {
      case 'hunter':
        return { title: 'Hunter', subtitle: 'Conquista Clínicas', color: 'welli-orange', total: 9 };
      case 'farmer':
        return { 
          title: currentModule <= 11 ? 'Fase 1: Fundamentos' : 'Fase 2: Cierre', 
          subtitle: 'Farmer / CS', 
          color: currentModule <= 11 ? 'welli-yellow' : 'secondary',
          total: 22 
        };
      case 'aliado':
        return { title: 'Aliado Médico', subtitle: 'Guía Rápida', color: 'welli-yellow', total: 5 };
      default:
        return { title: '', subtitle: '', color: 'primary', total: 1 };
    }
  };

  const routeInfo = getRouteInfo();

  return (
    <SidebarProvider>
      <div ref={ref} className="min-h-screen flex w-full bg-background">
        <AppSidebar 
          currentModule={currentModule} 
          onModuleChange={handleModuleChange}
          currentRoute={currentRoute}
          onGoToHub={handleGoToHub}
        />
        
        <SidebarInset className="flex-1">
          {/* Top Header Bar */}
          <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur px-4 md:px-6">
            <SidebarTrigger className="md:hidden" />
            
            <div className="flex items-center gap-3">
              <WelliLogoFull size="sm" />
              <div className="hidden md:block">
                <h1 className="font-bold text-foreground">Welli Training Hub</h1>
              </div>
            </div>

            <div className="flex-1" />

            {/* Route indicator */}
            <div className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              currentRoute === 'hunter' 
                ? "bg-welli-orange/20 text-foreground border border-welli-orange/50"
                : currentRoute === 'aliado'
                ? "bg-welli-yellow/30 text-foreground border border-welli-yellow/50"
                : currentModule <= 11 
                ? "bg-welli-yellow/30 text-foreground border border-welli-yellow/50" 
                : "bg-secondary/20 text-foreground border border-secondary/30"
            }`}>
              {routeInfo.title}
            </div>

            {/* Progress */}
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{currentModule}</span>
              <span>/</span>
              <span>{routeInfo.total}</span>
            </div>
          </header>

          {/* Floating Calculator Button (only for Farmer route) */}
          {currentRoute === 'farmer' && currentModule !== 3 && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToCalculator}
              className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-welli-yellow text-welli-yellow-foreground shadow-lg hover:shadow-xl transition-shadow"
              title="Ir al Cotizador"
            >
              <Calculator className="w-6 h-6" />
            </motion.button>
          )}

          {/* Main Content */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentRoute}-${currentModule}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {renderModule()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Footer */}
          <footer className="py-6 border-t border-border">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Welli — Financia tu Bienestar
              </p>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
});

Index.displayName = "Index";

export default Index;
