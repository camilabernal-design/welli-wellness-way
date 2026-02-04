import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import WelliLogoFull from "@/components/WelliLogoFull";
import { Calculator } from "lucide-react";

// Phase 1 Modules - El Método del "Sí"
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

// Phase 2 Modules - Herramientas de Cierre
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

const TOTAL_MODULES = 22;

const Index = () => {
  const [currentModule, setCurrentModule] = useState(1);

  const handleModuleComplete = () => {
    if (currentModule < TOTAL_MODULES) {
      setCurrentModule(currentModule + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleModuleChange = (moduleId: number) => {
    setCurrentModule(moduleId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToCalculator = () => {
    setCurrentModule(3); // Calculator is module 3
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderModule = () => {
    switch (currentModule) {
      // Phase 1: El Método del "Sí" (11 modules)
      case 1:
        return <Phase1Welcome onComplete={handleModuleComplete} />;
      case 2:
        return <ModulePatientSignals onComplete={handleModuleComplete} />;
      case 3:
        return <CalculatorProModule onComplete={handleModuleComplete} />;
      case 4:
        return <VideoProcessModule onComplete={handleModuleComplete} />;
      case 5:
        return <ModuleObjectionHandling onComplete={handleModuleComplete} />;
      case 6:
        return <PerfilamientoModule onComplete={handleModuleComplete} />;
      case 7:
        return <WelliCheckPhase1 onComplete={handleModuleComplete} />;
      case 8:
        return <ScoreMythModule onComplete={handleModuleComplete} />;
      case 9:
        return <PracticeSpaceModule onComplete={handleModuleComplete} />;
      case 10:
        return <Module4RolePlay onComplete={handleModuleComplete} />;
      case 11:
        return <Phase1Complete onComplete={handleModuleComplete} />;
      
      // Phase 2: Maestría Operativa (11 modules: 12-22)
      case 12:
        return <Phase2Summary onComplete={handleModuleComplete} />;
      case 13:
        return <DisbursementWarningModule onComplete={handleModuleComplete} />;
      case 14:
        return <SocialAlliesModule onComplete={handleModuleComplete} />;
      case 15:
        return <TestimonialsModule onComplete={handleModuleComplete} />;
      case 16:
        return <ModuleReferrals onComplete={handleModuleComplete} />;
      case 17:
        return <ModulePOPGallery onComplete={handleModuleComplete} />;
      case 18:
        return <OperationalVideosModule onComplete={handleModuleComplete} />;
      case 19:
        return <DesistimientoModule onComplete={handleModuleComplete} />;
      case 20:
        return <ModuleTeamRegistration onComplete={handleModuleComplete} />;
      case 21:
        return <FinalQuizModule onComplete={handleModuleComplete} />;
      case 22:
        return <FinalChecklist onComplete={() => setCurrentModule(1)} />;
      
      default:
        return <Phase1Welcome onComplete={handleModuleComplete} />;
    }
  };

  const getPhaseInfo = () => {
    if (currentModule <= 11) {
      return { phase: 1, name: "Fundamentos", color: "welli-yellow" };
    }
    return { phase: 2, name: "Cierre", color: "secondary" };
  };

  const phaseInfo = getPhaseInfo();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar 
          currentModule={currentModule} 
          onModuleChange={handleModuleChange} 
        />
        
        <SidebarInset className="flex-1">
          {/* Top Header Bar */}
          <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur px-4 md:px-6">
            <SidebarTrigger className="md:hidden" />
            
            <div className="flex items-center gap-3">
              <WelliLogoFull size="sm" />
              <div className="hidden md:block">
                <h1 className="font-bold text-foreground">Welli Sales Clinic</h1>
              </div>
            </div>

            <div className="flex-1" />

            {/* Phase indicator */}
            <div className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              phaseInfo.phase === 1 
                ? "bg-welli-yellow/30 text-foreground border border-welli-yellow/50" 
                : "bg-secondary/20 text-foreground border border-secondary/30"
            }`}>
              Fase {phaseInfo.phase}: {phaseInfo.name}
            </div>

            {/* Progress */}
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{currentModule}</span>
              <span>/</span>
              <span>{TOTAL_MODULES}</span>
            </div>
          </header>

          {/* Floating Calculator Button */}
          {currentModule !== 3 && (
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
                key={currentModule}
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
};

export default Index;
