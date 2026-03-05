import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, PenTool, Headphones, Home, CheckCircle2 } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const steps = [
  {
    icon: FileText,
    title: "Enviar documentación",
    description: "Reúne y envía la documentación requerida para iniciar el proceso de vinculación.",
  },
  {
    icon: Search,
    title: "Proceso de estudio interno",
    description: "Nuestro equipo evaluará la información para validar la alianza.",
  },
  {
    icon: PenTool,
    title: "Firmar el contrato",
    description: "Una vez aprobado, se procede con la firma del contrato de alianza comercial.",
  },
  {
    icon: Headphones,
    title: "Capacitación de Customer Success",
    description: "Tu equipo recibirá una capacitación completa para operar con Welli desde el primer día.",
  },
];

const HunterModule10NextSteps = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          🚀 Próximos Pasos
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          ¿Qué sigue?
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Estos son los pasos para activar tu alianza con Welli
        </p>
      </motion.div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * index }}
          >
            <Card className="border-2 border-slate-200 hover:border-welli-yellow transition-colors">
              <CardContent className="p-6 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-welli-yellow/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-indigo-950">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <step.icon className="w-5 h-5 text-welli-orange" />
                    <h3 className="font-bold text-lg text-indigo-950">{step.title}</h3>
                  </div>
                  <p className="text-indigo-800">{step.description}</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-slate-300 flex-shrink-0 mt-1" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center pt-6"
      >
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
        >
          <Home className="w-5 h-5" />
          Volver al Hub
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule10NextSteps;
