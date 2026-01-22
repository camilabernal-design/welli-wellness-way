import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import Module1EmptyChair from "@/components/Module1EmptyChair";
import Module2RealityCheck from "@/components/Module2RealityCheck";
import Module3Calculator from "@/components/Module3Calculator";
import Module4RolePlay from "@/components/Module4RolePlay";
import Module5DigitalKit from "@/components/Module5DigitalKit";
import Module6Certification from "@/components/Module6Certification";

const moduleNames = [
  "La Silla Vacía",
  "Reality Check",
  "Traductor de Salud",
  "Role-Play Arena",
  "Kit Digital",
  "Certificación",
];

const Index = () => {
  const [currentModule, setCurrentModule] = useState(1);

  const handleModuleComplete = () => {
    if (currentModule < 6) {
      setCurrentModule(currentModule + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return <Module1EmptyChair onComplete={handleModuleComplete} />;
      case 2:
        return <Module2RealityCheck onComplete={handleModuleComplete} />;
      case 3:
        return <Module3Calculator onComplete={handleModuleComplete} />;
      case 4:
        return <Module4RolePlay onComplete={handleModuleComplete} />;
      case 5:
        return <Module5DigitalKit onComplete={handleModuleComplete} />;
      case 6:
        return <Module6Certification onComplete={() => setCurrentModule(1)} />;
      default:
        return <Module1EmptyChair onComplete={handleModuleComplete} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar
        currentModule={currentModule}
        totalModules={6}
        moduleNames={moduleNames}
      />

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
            © {new Date().getFullYear()} Welli — Financiación que transforma la salud
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
