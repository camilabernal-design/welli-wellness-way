import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, User, TrendingUp, Shield, Zap, Wallet, Clock, CheckCircle2, Banknote } from "lucide-react";

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
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          💰 Propuesta de Valor
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          Gane más, sin riesgos
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Welli beneficia a su clínica <strong>y</strong> a sus pacientes
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
              <h2 className="text-2xl font-bold">Para Su Clínica</h2>
              <p className="text-white/90">Beneficios inmediatos</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-welli-yellow/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-welli-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">+40% Facturación</h4>
                  <p className="text-sm text-indigo-800">
                    Recupere pacientes que hoy se van por falta de opciones
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Riesgo Cero</h4>
                  <p className="text-sm text-indigo-800">
                    Nosotros asumimos el riesgo financiero. Si el paciente no paga, no le afecta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-welli-orange/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-welli-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Liquidez Inmediata</h4>
                  <p className="text-sm text-indigo-800">
                    Desembolso en 72 horas. Pagamos Martes y Jueves sin falta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Banknote className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">95% Para Usted</h4>
                  <p className="text-sm text-indigo-800">
                    Solo cobramos 5% de comisión. El resto es suyo.
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
              <h2 className="text-2xl font-bold">Para Sus Pacientes</h2>
              <p className="text-white/90">Acceso real a la salud</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Sin Ahorros Previos</h4>
                  <p className="text-sm text-indigo-800">
                    No necesitan el dinero completo. Cuotas desde $100k COP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-welli-yellow/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-welli-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Aprobación en 3 Minutos</h4>
                  <p className="text-sm text-indigo-800">
                    Sin papeleo. Sin esperar días. Respuesta instantánea.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-welli-orange/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-welli-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Tasa Ética</h4>
                  <p className="text-sm text-indigo-800">
                    20-25% E.A. vs +40% de otras fintechs y tarjetas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Alta Aprobación</h4>
                  <p className="text-sm text-indigo-800">
                    ~25% de aprobación vs ~10% en bancos tradicionales
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Key Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-indigo-950 to-indigo-900 rounded-2xl p-8 text-white"
      >
        <h3 className="text-center font-bold text-xl mb-6">El Resultado Para Su Negocio</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-welli-yellow">95%</p>
            <p className="text-sm text-slate-300">Para el Aliado</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-welli-yellow">+40%</p>
            <p className="text-sm text-slate-300">Aumento Facturación</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-welli-yellow">72h</p>
            <p className="text-sm text-slate-300">Desembolso Máx.</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-welli-yellow">0%</p>
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
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
        >
          Ver Cómo Funciona
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule2ValueProposition;
