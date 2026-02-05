import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Send, CheckCircle2, Clock } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const AliadoModule1WelliCheck = ({ onComplete }: ModuleProps) => {
  const steps = [
    { step: 1, title: 'Paciente en consulta', description: 'Cuando el paciente necesita financiamiento, accede al link de Welli Check' },
    { step: 2, title: 'Ingresa datos básicos', description: 'Cédula, celular y monto del tratamiento' },
    { step: 3, title: 'Aprobación en 3 minutos', description: 'El sistema evalúa y responde inmediatamente' },
    { step: 4, title: 'Paciente acepta términos', description: 'Firma digital y confirmación del crédito' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-welli-yellow/20 text-welli-yellow font-medium text-sm">
          Módulo 1 · Lo Esencial
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Cómo hacer el Welli Check
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          El proceso de solicitud de crédito en 4 simples pasos
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="h-full border-2 border-welli-yellow/30 hover:border-welli-yellow transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-welli-yellow flex items-center justify-center text-welli-yellow-foreground font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-welli-yellow/10 rounded-xl p-6 border-l-4 border-welli-yellow"
      >
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          💡 Tips Rápidos
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Ten el link de Welli Check guardado en favoritos
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Verifica que el celular del paciente esté activo para OTP
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Si sale pre-aprobado, procede con el tratamiento
          </li>
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center pt-6"
      >
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-welli-yellow-foreground gap-2"
        >
          Siguiente: Cómo Pedir Desembolso
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default AliadoModule1WelliCheck;
