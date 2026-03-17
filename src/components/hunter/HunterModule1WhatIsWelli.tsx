import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, TrendingUp, Shield, Zap, CheckCircle2 } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const HunterModule1WhatIsWelli = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          ✨ Bienvenido a Welli
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          ¿Qué es Welli?
        </h1>
        <p className="text-xl text-indigo-800 max-w-3xl mx-auto">
          Una <strong className="text-welli-orange">Fintech 100% colombiana</strong> especializada en crédito y exclusiva para el sector de la salud.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 text-indigo-950">
          <Heart className="w-6 h-6 text-welli-orange" />
          <span className="font-bold text-lg">Nuestra Misión</span>
        </div>
        <p className="text-xl text-indigo-800 max-w-3xl mx-auto">
          Que todos los latinoamericanos tengan acceso a servicios de salud y bienestar de calidad
        </p>
      </motion.div>

      {/* Sin Welli vs Con Welli */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <Card className="border-2 border-red-200 bg-red-50">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-indigo-950 mb-4">😔 Sin Welli</h3>
            <ul className="space-y-3 text-indigo-800">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Paciente dice "lo pienso" y nunca vuelve</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Pierde 25-35% de procedimientos por precio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Competencia ofrece financiación y gana</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-300 bg-green-50">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-indigo-950 mb-4">🎉 Con Welli</h3>
            <ul className="space-y-3 text-indigo-800">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Cierre hoy mismo con cuotas accesibles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Recibe el 95% del valor en 72 horas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Cero riesgo: nosotros asumimos todo</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Value Proposition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-gradient-to-r from-[#3B8BF6] via-[#7B5CF6] to-[#B55A9C] text-white border-0 overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-welli-yellow/20 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-welli-yellow" />
                </div>
                <p className="text-3xl font-bold text-welli-yellow">+40%</p>
                <p className="text-white/80">Aumento en facturación</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-welli-yellow/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-welli-yellow" />
                </div>
                <p className="text-3xl font-bold text-welli-yellow">0%</p>
                <p className="text-white/80">Riesgo para ti</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-welli-yellow/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-welli-yellow" />
                </div>
                <p className="text-3xl font-bold text-welli-yellow">72h</p>
                <p className="text-white/80">Desembolso máximo</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center pt-6"
      >
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
        >
          Ver Beneficios Detallados
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule1WhatIsWelli;
