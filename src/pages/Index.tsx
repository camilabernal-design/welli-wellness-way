import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import Module1EmptyChair from "@/components/Module1EmptyChair";
import ModulePatientSignals from "@/components/ModulePatientSignals";
import Module2RealityCheck from "@/components/Module2RealityCheck";
import ModuleImpactDashboard from "@/components/ModuleImpactDashboard";
import Module3Calculator from "@/components/Module3Calculator";
import ModuleMythsReality from "@/components/ModuleMythsReality";
import ModuleSuccessFlow from "@/components/ModuleSuccessFlow";
import ModuleObjectionHandling from "@/components/ModuleObjectionHandling";
import Module4RolePlay from "@/components/Module4RolePlay";
import ModuleWelliCheck from "@/components/ModuleWelliCheck";
import ModuleReferrals from "@/components/ModuleReferrals";
import ModulePOPGallery from "@/components/ModulePOPGallery";
import ModuleEquipmentFinancing from "@/components/ModuleEquipmentFinancing";
import ModuleTeamRegistration from "@/components/ModuleTeamRegistration";
import Module5DigitalKit from "@/components/Module5DigitalKit";
import ModuleSuccessChecklist from "@/components/ModuleSuccessChecklist";
import Module6Certification from "@/components/Module6Certification";
import { Calculator } from "lucide-react";

const moduleNames = [
  "La Silla Vacía",
  "Señales del Paciente",
  "Reality Check",
  "Dashboard de Impacto",
  "Simulador de Crédito",
  "Mitos vs Realidad",
  "Flujo del Éxito",
  "Manejo de Objeciones",
  "Role-Play Arena",
  "Welli Check",
  "Referidos",
  "Material POP",
  "Equipos Médicos",
  "Registro de Equipo",
  "Kit Digital",
  "Checklist de Éxito",
  "Certificación",
];

const TOTAL_MODULES = 17;

const Index = () => {
  const [currentModule, setCurrentModule] = useState(1);

  const handleModuleComplete = () => {
    if (currentModule < TOTAL_MODULES) {
      setCurrentModule(currentModule + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToCalculator = () => {
    setCurrentModule(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return <Module1EmptyChair onComplete={handleModuleComplete} />;
      case 2:
        return <ModulePatientSignals onComplete={handleModuleComplete} />;
      case 3:
        return <Module2RealityCheck onComplete={handleModuleComplete} />;
      case 4:
        return <ModuleImpactDashboard onComplete={handleModuleComplete} />;
      case 5:
        return <Module3Calculator onComplete={handleModuleComplete} />;
      case 6:
        return <ModuleMythsReality onComplete={handleModuleComplete} />;
      case 7:
        return <ModuleSuccessFlow onComplete={handleModuleComplete} />;
      case 8:
        return <ModuleObjectionHandling onComplete={handleModuleComplete} />;
      case 9:
        return <Module4RolePlay onComplete={handleModuleComplete} />;
      case 10:
        return <ModuleWelliCheck onComplete={handleModuleComplete} />;
      case 11:
        return <ModuleReferrals onComplete={handleModuleComplete} />;
      case 12:
        return <ModulePOPGallery onComplete={handleModuleComplete} />;
      case 13:
        return <ModuleEquipmentFinancing onComplete={handleModuleComplete} />;
      case 14:
        return <ModuleTeamRegistration onComplete={handleModuleComplete} />;
      case 15:
        return <Module5DigitalKit onComplete={handleModuleComplete} />;
      case 16:
        return <ModuleSuccessChecklist onComplete={handleModuleComplete} />;
      case 17:
        return <Module6Certification onComplete={() => setCurrentModule(1)} />;
      default:
        return <Module1EmptyChair onComplete={handleModuleComplete} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar
        currentModule={currentModule}
        totalModules={TOTAL_MODULES}
        moduleNames={moduleNames}
      />

      {/* Floating Calculator Button */}
      {currentModule !== 5 && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToCalculator}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
          title="Ir al Simulador"
        >
          <Calculator className="w-6 h-6" />
        </motion.button>
      )}

      {/* Main Content with top padding for fixed header */}
      <div className="pt-24 md:pt-28">
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
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Welli — Financia tu Bienestar
          </p>
          <a
            href="https://www.welli.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline mt-2 inline-block"
          >
            welli.com.co
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;