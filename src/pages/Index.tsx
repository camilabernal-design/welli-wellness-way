import { useState, forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import WelliLogoFull from "@/components/WelliLogoFull";
import { Calculator } from "lucide-react";
import { TrainingRoute } from "@/types/training";

// Hub
import TrainingHub from "@/pages/TrainingHub";

// Hunter Modules (10)
import HunterModule1WhatIsWelli from "@/components/hunter/HunterModule1WhatIsWelli";
import HunterModule2ValueProposition from "@/components/hunter/HunterModule2ValueProposition";
import HunterModule3AllianceVideos from "@/components/hunter/HunterModule3AllianceVideos";
import HunterModule4Comparison from "@/components/hunter/HunterModule4Comparison";
import HunterModule5TreasureMap from "@/components/hunter/HunterModule5TreasureMap";
import HunterModule6Ecosystem from "@/components/hunter/HunterModule6Ecosystem";
import HunterModule7Validation from "@/components/hunter/HunterModule7Validation";
import HunterModule8Press from "@/components/hunter/HunterModule8Press";
import HunterModule9Quiz from "@/components/hunter/HunterModule9Quiz";
import HunterModule10NextSteps from "@/components/hunter/HunterModule10NextSteps";

// Aliado Modules (5)
import AliadoModule1WelliCheck from "@/components/aliado/AliadoModule1WelliCheck";
import AliadoModule2Desembolso from "@/components/aliado/AliadoModule2Desembolso";
import AliadoModule3Cuotas from "@/components/aliado/AliadoModule3Cuotas";
import AliadoModule4MaterialPOP from "@/components/aliado/AliadoModule4MaterialPOP";
import AliadoModule5Summary from "@/components/aliado/AliadoModule5Summary";

// Farmer/CS Phase 1 Modules (11)
import Phase1Welcome from "@/components/modules/Phase1Welcome";
import AgendaAllyModule from "@/components/modules/AgendaAllyModule";
import CalculatorProModule from "@/components/modules/CalculatorProModule";
import VideoProcessModule from "@/components/modules/VideoProcessModule";
import ObjectionsCloseModule from "@/components/modules/ObjectionsCloseModule";
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
import WelliPointsModule from "@/components/modules/WelliPointsModule";
import ModuleReferrals from "@/components/ModuleReferrals";
import ModulePOPGallery from "@/components/ModulePOPGallery";
import DesistimientoModule from "@/components/modules/DesistimientoModule";
import ModuleTeamRegistration from "@/components/ModuleTeamRegistration";
import FinalQuizModule from "@/components/modules/FinalQuizModule";
import FinalChecklist from "@/components/modules/FinalChecklist";

// Maestría Equipo Modules (11)
import MaestriaEquipoModule1Foundations from "@/components/maestria-equipo/MaestriaEquipoModule1Foundations";
import MaestriaEquipoModule2Discovery from "@/components/maestria-equipo/MaestriaEquipoModule2Discovery";
import MaestriaEquipoModule3Archetypes from "@/components/maestria-equipo/MaestriaEquipoModule3Archetypes";
import MaestriaEquipoModule4DeepInquiry from "@/components/maestria-equipo/MaestriaEquipoModule4DeepInquiry";
import MaestriaEquipoModule4bAgendaApproach from "@/components/maestria-equipo/MaestriaEquipoModule4bAgendaApproach";
import MaestriaEquipoModule5SessionStructure from "@/components/maestria-equipo/MaestriaEquipoModule5SessionStructure";
import MaestriaEquipoModule5bPlatform from "@/components/maestria-equipo/MaestriaEquipoModule5bPlatform";
import MaestriaEquipoModule6CommonResponses from "@/components/maestria-equipo/MaestriaEquipoModule6CommonResponses";
import MaestriaEquipoModule7ClosedActivation from "@/components/maestria-equipo/MaestriaEquipoModule7ClosedActivation";
import MaestriaEquipoModule8FollowUpSession from "@/components/maestria-equipo/MaestriaEquipoModule8FollowUpSession";
import MaestriaEquipoModule9Certification from "@/components/maestria-equipo/MaestriaEquipoModule9Certification";

// Express Aliados Modules (9)
import { SessionProvider } from "@/components/express-aliados/SessionContext";
import SessionPreparationScreen from "@/components/express-aliados/SessionPreparationScreen";
import SessionReadyScreen from "@/components/express-aliados/SessionReadyScreen";
import ExpressAliadosModule1Welcome from "@/components/express-aliados/ExpressAliadosModule1Welcome";
import ExpressAliadosModule2Discovery from "@/components/express-aliados/ExpressAliadosModule2Discovery";
import ExpressAliadosModule2Impact from "@/components/express-aliados/ExpressAliadosModule2Impact";
import ExpressAliadosModule3HowItWorks from "@/components/express-aliados/ExpressAliadosModule3HowItWorks";
import ExpressAliadosModule4PatientResponses from "@/components/express-aliados/ExpressAliadosModule4PatientResponses";
import ExpressAliadosModule5Trust from "@/components/express-aliados/ExpressAliadosModule5Trust";
import ExpressAliadosModule6FirstActivation from "@/components/express-aliados/ExpressAliadosModule6FirstActivation";
import ExpressAliadosModule7NextSteps from "@/components/express-aliados/ExpressAliadosModule7NextSteps";

type ExpressPhase = 'preparation' | 'ready' | 'presentation';

const ROUTE_MODULES = {
  hunter: 10,
  farmer: 22,
  aliado: 5,
  'maestria-equipo': 11,
  'express-aliados': 9,
};

const Index = forwardRef<HTMLDivElement>((_, ref) => {
  const [currentRoute, setCurrentRoute] = useState<TrainingRoute>('hub');
  const [currentModule, setCurrentModule] = useState(1);
  const [hunterSelectedVideo, setHunterSelectedVideo] = useState('general');
  const [expressPhase, setExpressPhase] = useState<ExpressPhase>('preparation');

  const handleSelectRoute = (route: TrainingRoute) => {
    setCurrentRoute(route);
    setCurrentModule(1);
    if (route === 'express-aliados') setExpressPhase('preparation');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoToHub = () => {
    setCurrentRoute('hub');
    setCurrentModule(1);
    setExpressPhase('preparation');
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

  if (currentRoute === 'hub') {
    return <TrainingHub onSelectRoute={handleSelectRoute} />;
  }

  const renderHunterModule = () => {
    switch (currentModule) {
      case 1: return <HunterModule1WhatIsWelli onComplete={handleModuleComplete} />;
      case 2: return <HunterModule3AllianceVideos onComplete={handleModuleComplete} selectedVideo={hunterSelectedVideo} onVideoChange={setHunterSelectedVideo} />;
      case 3: return <HunterModule4Comparison onComplete={handleModuleComplete} />;
      case 4: return <HunterModule5TreasureMap onComplete={handleModuleComplete} />;
      case 5: return <HunterModule6Ecosystem onComplete={handleModuleComplete} />;
      case 6: return <HunterModule7Validation onComplete={handleModuleComplete} />;
      case 7: return <HunterModule8Press onComplete={handleModuleComplete} />;
      case 8: return <HunterModule2ValueProposition onComplete={handleModuleComplete} />;
      case 9: return <HunterModule9Quiz onComplete={handleModuleComplete} />;
      case 10: return <HunterModule10NextSteps onComplete={handleGoToHub} />;
      default: return <HunterModule1WhatIsWelli onComplete={handleModuleComplete} />;
    }
  };

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

  const renderFarmerModule = () => {
    switch (currentModule) {
      case 1: return <Phase1Welcome onComplete={handleModuleComplete} />;
      case 2: return <AgendaAllyModule onComplete={handleModuleComplete} />;
      case 3: return <CalculatorProModule onComplete={handleModuleComplete} />;
      case 4: return <ObjectionsCloseModule onComplete={handleModuleComplete} />;
      case 5: return <ScoreMythModule onComplete={handleModuleComplete} />;
      case 6: return <VideoProcessModule onComplete={handleModuleComplete} />;
      case 7: return <PerfilamientoModule onComplete={handleModuleComplete} />;
      case 8: return <WelliCheckPhase1 onComplete={handleModuleComplete} />;
      case 9: return <PracticeSpaceModule onComplete={handleModuleComplete} />;
      case 10: return <Module4RolePlay onComplete={handleModuleComplete} />;
      case 11: return <Phase1Complete onComplete={handleModuleComplete} />;
      case 12: return <Phase2Summary onComplete={handleModuleComplete} />;
      case 13: return <DisbursementWarningModule onComplete={handleModuleComplete} />;
      case 14: return <DesistimientoModule onComplete={handleModuleComplete} />;
      case 15: return <SocialAlliesModule onComplete={handleModuleComplete} />;
      case 16: return <TestimonialsModule onComplete={handleModuleComplete} />;
      case 17: return <WelliPointsModule onComplete={handleModuleComplete} />;
      case 18: return <ModuleReferrals onComplete={handleModuleComplete} />;
      case 19: return <ModulePOPGallery onComplete={handleModuleComplete} />;
      case 20: return <ModuleTeamRegistration onComplete={handleModuleComplete} />;
      case 21: return <FinalQuizModule onComplete={handleModuleComplete} />;
      case 22: return <FinalChecklist onComplete={() => setCurrentModule(1)} />;
      default: return <Phase1Welcome onComplete={handleModuleComplete} />;
    }
  };

  const renderMaestriaEquipoModule = () => {
    switch (currentModule) {
      case 1: return <MaestriaEquipoModule1Foundations onComplete={handleModuleComplete} />;
      case 2: return <MaestriaEquipoModule2Discovery onComplete={handleModuleComplete} />;
      case 3: return <MaestriaEquipoModule3Archetypes onComplete={handleModuleComplete} />;
      case 4: return <MaestriaEquipoModule4DeepInquiry onComplete={handleModuleComplete} />;
      case 5: return <MaestriaEquipoModule4bAgendaApproach onComplete={handleModuleComplete} />;
      case 6: return <MaestriaEquipoModule5SessionStructure onComplete={handleModuleComplete} />;
      case 7: return <MaestriaEquipoModule5bPlatform onComplete={handleModuleComplete} />;
      case 8: return <MaestriaEquipoModule6CommonResponses onComplete={handleModuleComplete} />;
      case 9: return <MaestriaEquipoModule7ClosedActivation onComplete={handleModuleComplete} />;
      case 10: return <MaestriaEquipoModule8FollowUpSession onComplete={handleModuleComplete} />;
      case 11: return <MaestriaEquipoModule9Certification onComplete={handleGoToHub} />;
      default: return <MaestriaEquipoModule1Foundations onComplete={handleModuleComplete} />;
    }
  };

  const renderExpressAliadosModule = () => {
    switch (currentModule) {
      case 1: return <ExpressAliadosModule1Welcome onComplete={handleModuleComplete} />;
      case 2: return <ExpressAliadosModule2Discovery onComplete={handleModuleComplete} />;
      case 3: return <ExpressAliadosModule2Impact onComplete={handleModuleComplete} />;
      case 4: return <ExpressAliadosModule3HowItWorks onComplete={handleModuleComplete} />;
      case 5: return <ExpressAliadosModule4PatientResponses onComplete={handleModuleComplete} />;
      case 6: return <ExpressAliadosModule5Trust onComplete={handleModuleComplete} />;
      case 7: return <ExpressAliadosModule6FirstActivation onComplete={handleModuleComplete} />;
      case 8: return <WelliPointsModule onComplete={handleModuleComplete} />;
      case 9: return <ExpressAliadosModule7NextSteps onComplete={handleGoToHub} />;
      default: return <ExpressAliadosModule1Welcome onComplete={handleModuleComplete} />;
    }
  };

  const renderModule = () => {
    switch (currentRoute) {
      case 'hunter': return renderHunterModule();
      case 'aliado': return renderAliadoModule();
      case 'farmer': return renderFarmerModule();
      
      case 'maestria-equipo': return renderMaestriaEquipoModule();
      case 'express-aliados': return renderExpressAliadosModule();
      default: return null;
    }
  };

  const getRouteInfo = () => {
    switch (currentRoute) {
      case 'hunter':
        return { title: 'Hunter', subtitle: 'Conquista Clínicas', color: 'welli-orange', total: 10 };
      case 'farmer':
        return {
          title: currentModule <= 11 ? 'Fase 1: Fundamentos' : 'Fase 2: Cierre',
          subtitle: 'Farmer / CS',
          color: currentModule <= 11 ? 'welli-yellow' : 'secondary',
          total: 21,
        };
      case 'aliado':
        return { title: 'Aliado Médico', subtitle: 'Guía Rápida', color: 'welli-yellow', total: 5 };
      case 'maestria-equipo':
        return { title: 'Maestría en Capacitación', subtitle: 'Metodología comercial', color: 'secondary', total: 11 };
      case 'express-aliados':
        return { title: 'Capacitación Express', subtitle: 'Onboarding aliado', color: 'welli-yellow', total: 9 };
      default:
        return { title: '', subtitle: '', color: 'primary', total: 1 };
    }
  };

  const routeInfo = getRouteInfo();

  const content = (
    <SidebarProvider>
      <div ref={ref} className="min-h-screen flex w-full bg-background">
        <AppSidebar
          currentModule={currentModule}
          onModuleChange={handleModuleChange}
          currentRoute={currentRoute}
          onGoToHub={handleGoToHub}
        />

        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur px-4 md:px-6">
            <SidebarTrigger className="md:hidden" />

            <div className="flex items-center gap-3">
              <WelliLogoFull size="sm" />
              <div className="hidden md:block">
                <h1 className="font-bold text-foreground">Welli Training Hub</h1>
              </div>
            </div>

            <div className="flex-1" />

            <div className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              currentRoute === 'hunter'
                ? "bg-welli-orange/20 text-foreground border border-welli-orange/50"
                : currentRoute === 'aliado' || currentRoute === 'express-aliados'
                ? "bg-welli-yellow/30 text-foreground border border-welli-yellow/50"
                : currentRoute === 'farmer' && currentModule <= 11
                ? "bg-welli-yellow/30 text-foreground border border-welli-yellow/50"
                : "bg-secondary/20 text-foreground border border-secondary/30"
            }`}>
              {routeInfo.title}
            </div>

            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{currentModule}</span>
              <span>/</span>
              <span>{routeInfo.total}</span>
            </div>
          </header>

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

  if (currentRoute === 'express-aliados') {
    return (
      <SessionProvider>
        {expressPhase === 'preparation' && (
          <SessionPreparationScreen onReady={() => setExpressPhase('ready')} />
        )}
        {expressPhase === 'ready' && (
          <SessionReadyScreen
            onStart={() => setExpressPhase('presentation')}
            onBack={() => setExpressPhase('preparation')}
          />
        )}
        {expressPhase === 'presentation' && content}
      </SessionProvider>
    );
  }

  return content;
});

Index.displayName = "Index";

export default Index;
