import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Building2, Stethoscope, Globe } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const HunterModule1WhatIsWelli = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-welli-orange/20 text-welli-orange font-medium text-sm">
          Módulo 1 · Elevator Pitch
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          ¿Qué es Welli?
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tu pitch de 30 segundos para conquistar cualquier clínica
        </p>
      </motion.div>

      {/* Main Pitch Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-welli-orange to-welli-orange/90 text-white border-0 overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="text-5xl mb-4">💡</div>
            <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed">
              "Somos el aliado financiero que convierte tratamientos costosos 
              en <span className="text-welli-yellow font-bold">Cuotas de Bienestar</span>."
            </blockquote>
            <p className="mt-4 text-white/80">
              Memoriza esta frase. Es tu llave de entrada.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <Card className="border-2 border-secondary/30 bg-secondary/5">
          <CardContent className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <Globe className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-bold text-xl">Nuestra Visión</h3>
            <p className="text-muted-foreground">
              Ser el <strong>socio financiero preferido</strong> de pacientes y profesionales de la salud 
              en Latinoamérica.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-welli-yellow/30 bg-welli-yellow/5">
          <CardContent className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-welli-yellow/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-welli-yellow" />
            </div>
            <h3 className="font-bold text-xl">Nuestra Misión</h3>
            <p className="text-muted-foreground">
              Que <strong>todos los latinoamericanos</strong> tengan acceso a servicios de 
              salud y bienestar de calidad.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Problem We Solve */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">El Problema que Resolvemos</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Clinics Problem */}
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-destructive" />
                <h3 className="font-bold text-lg">Clínicas y Doctores</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Pierden 25-35% de pacientes por falta de opciones de pago
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Reciben pago meses después de la consulta
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Sin socios financieros con productos relevantes
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Patients Problem */}
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="w-6 h-6 text-destructive" />
                <h3 className="font-bold text-lg">Pacientes</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Sin acceso a procedimientos de calidad
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Proceso largo y dispendioso para créditos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Tasas altísimas (+40% E.A.) y condiciones poco claras
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Script Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-secondary/10 rounded-xl p-6 border-l-4 border-secondary"
      >
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          📝 Tu Apertura de Pitch
        </h3>
        <p className="text-muted-foreground italic">
          "Doctor, no le vengo a vender un software. Le vengo a mostrar cómo 
          <span className="text-welli-orange font-semibold"> recuperar el 65% de los pacientes</span> 
          que hoy se le van por falta de dinero."
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
          className="bg-welli-orange hover:bg-welli-orange/90 text-white gap-2"
        >
          Siguiente: Propuesta de Valor
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule1WhatIsWelli;
