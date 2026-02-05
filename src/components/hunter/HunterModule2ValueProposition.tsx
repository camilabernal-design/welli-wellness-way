import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, User, TrendingUp, Shield, Zap, Wallet, Clock, CheckCircle2 } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const HunterModule2ValueProposition = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-welli-orange/20 text-welli-orange font-medium text-sm">
          Módulo 2 · Propuesta de Valor
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Propuesta de Valor Dual
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Welli beneficia a ambos lados: Clínica y Paciente
        </p>
      </motion.div>

      {/* Dual Value Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* For Clinics */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full border-2 border-secondary overflow-hidden">
            <div className="bg-gradient-to-r from-secondary to-secondary/80 p-6 text-white">
              <Building2 className="w-10 h-10 mb-3" />
              <h2 className="text-2xl font-bold">Para la Clínica</h2>
              <p className="text-white/80">Ventajas competitivas</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">+Revenue</h4>
                  <p className="text-sm text-muted-foreground">
                    Incremento de facturación hasta +40% al recuperar pacientes perdidos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Riesgo Cero</h4>
                  <p className="text-sm text-muted-foreground">
                    El riesgo financiero lo asume Welli. Si el paciente no paga, no afecta a la clínica
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-welli-yellow/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-welli-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold">Liquidez Inmediata</h4>
                  <p className="text-sm text-muted-foreground">
                    Desembolso al aliado en 72 horas. Martes y Jueves sin falta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Cero Carga Operativa</h4>
                  <p className="text-sm text-muted-foreground">
                    Sin discusión financiera con el paciente. Welli maneja todo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* For Patients */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full border-2 border-welli-orange overflow-hidden">
            <div className="bg-gradient-to-r from-welli-orange to-welli-orange/80 p-6 text-white">
              <User className="w-10 h-10 mb-3" />
              <h2 className="text-2xl font-bold">Para el Paciente</h2>
              <p className="text-white/80">Acceso real a la salud</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Acceso Sin Ahorros</h4>
                  <p className="text-sm text-muted-foreground">
                    No necesita tener el dinero completo. Cuotas desde $100k COP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-welli-orange/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-welli-orange" />
                </div>
                <div>
                  <h4 className="font-semibold">Aprobación en 3 Minutos</h4>
                  <p className="text-sm text-muted-foreground">
                    Sin papeleo. Sin esperar días. Respuesta instantánea.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Cuotas Fijas</h4>
                  <p className="text-sm text-muted-foreground">
                    Tasa ética del 20-25% E.A. vs +40% de otras fintechs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Alta Tasa de Aprobación</h4>
                  <p className="text-sm text-muted-foreground">
                    ~20-30% de aprobación vs ~10% en bancos tradicionales
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Key Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
      >
        <h3 className="text-center font-bold text-xl mb-6">El Resultado Neto</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-welli-yellow">95%</p>
            <p className="text-sm text-slate-300">Para el Aliado</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-welli-orange">+40%</p>
            <p className="text-sm text-slate-300">Aumento Facturación</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-400">72h</p>
            <p className="text-sm text-slate-300">Desembolso Máx.</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary">0%</p>
            <p className="text-sm text-slate-300">Riesgo Clínica</p>
          </div>
        </div>
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
          className="bg-welli-orange hover:bg-welli-orange/90 text-white gap-2"
        >
          Siguiente: Videos por Alianza
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule2ValueProposition;
