import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, TrendingUp, Shield, Users, Zap, CheckCircle2 } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const HunterModule1WhatIsWelli = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header - Pitch Deck Style */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          ✨ Bienvenido a Welli
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          Recupere el <span className="text-welli-orange">65%</span> de pacientes
          <br />que hoy se le escapan
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Somos su aliado financiero que convierte tratamientos costosos en <strong className="text-welli-yellow">Cuotas de Bienestar</strong>
        </p>
      </motion.div>

      {/* Main Value Proposition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-indigo-950 to-indigo-900 text-white border-0 overflow-hidden">
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
                <p className="text-white/80">Riesgo para usted</p>
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

      {/* The Problem We Solve */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-indigo-950 text-center">¿Le suena familiar?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
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
                  <span>Reciba el 95% del valor en 72 horas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Cero riesgo: nosotros asumimos todo</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Social Proof Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-welli-yellow/20 border-2 border-welli-yellow/50 rounded-2xl p-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-indigo-950">+1,800</p>
            <p className="text-sm text-indigo-800">Clínicas aliadas</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-950">+180k</p>
            <p className="text-sm text-indigo-800">Aplicaciones</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-950">$60k M</p>
            <p className="text-sm text-indigo-800">Desembolsados</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-950">3 min</p>
            <p className="text-sm text-indigo-800">Aprobación</p>
          </div>
        </div>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
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
