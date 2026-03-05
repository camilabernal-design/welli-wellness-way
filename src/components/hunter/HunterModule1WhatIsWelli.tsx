import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, TrendingUp, Shield, Zap, AlertTriangle, Stethoscope } from "lucide-react";

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
          Una <strong className="text-welli-orange">Fintech 100% colombiana</strong> especializada en crédito para salud.
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

      {/* The Problem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-2 border-red-200 bg-red-50 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-indigo-950">El Problema</h2>
            </div>
            <p className="text-lg text-indigo-800">
              Los médicos pierden hasta <strong className="text-red-600">1 de cada 3 pacientes</strong> por motivos financieros y sufren por <strong className="text-red-600">pagos demorados</strong> de otras plataformas.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Our Solution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="border-2 border-green-300 bg-green-50 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-indigo-950">Nuestra Solución</h2>
            </div>
            <p className="text-lg text-indigo-800">
              Ofrecemos una plataforma <strong className="text-green-700">exclusiva para el sector salud</strong> que asegura que el paciente se atienda y el profesional reciba su pago hasta en <strong className="text-green-700">72 horas hábiles</strong>.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Value Proposition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
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
        transition={{ delay: 0.6 }}
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
