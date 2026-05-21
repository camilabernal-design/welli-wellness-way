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
          💰 Propuesta de valor
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          Gana más, sin riesgos
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Welli beneficia a tu clínica <strong>y</strong> a tus pacientes
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
              <h2 className="text-2xl font-bold">Para tu clínica</h2>
              <p className="text-white/90">Beneficios inmediatos</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-welli-yellow/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-welli-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">+40% facturación</h4>
                  <p className="text-sm text-indigo-800">
                    Recupera pacientes que hoy se van por falta de opciones
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Riesgo cero</h4>
                  <p className="text-sm text-indigo-800">
                    Nosotros asumimos el riesgo financiero. Si el paciente no paga, no te afecta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-welli-orange/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-welli-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Liquidez inmediata</h4>
                  <p className="text-sm text-indigo-800">
                    Desembolso en 72 horas. Pagamos martes y jueves sin falta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Banknote className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">95% para ti</h4>
                  <p className="text-sm text-indigo-800">
                    Solo cobramos 5% de comisión. El resto es tuyo.
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
          <Card className="h-full border-2 border-welli-yellow overflow-hidden">
            <div className="bg-welli-yellow p-6">
              <User className="w-10 h-10 mb-3 text-indigo-950" />
              <h2 className="text-2xl font-bold text-indigo-950">Para tus pacientes</h2>
              <p className="text-indigo-800">Acceso real a la salud</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Sin ahorros previos</h4>
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
                  <h4 className="font-bold text-indigo-950">Aprobación en 3 minutos</h4>
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
                  <h4 className="font-bold text-indigo-950">Tasas competitivas</h4>
                  <p className="text-sm text-indigo-800">
                    Desde 20% hasta 40% E.A. según el perfil de riesgo del paciente
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950">Alta aprobación</h4>
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
        className="bg-gradient-to-r from-[#3B8BF6] via-[#7B5CF6] to-[#B55A9C] rounded-2xl p-8 text-white"
      >
        <h3 className="text-center font-bold text-xl mb-6">El resultado para tu negocio</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-welli-yellow">95%</p>
            <p className="text-sm text-slate-300">Para el aliado</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-welli-yellow">+40%</p>
            <p className="text-sm text-slate-300">Aumento facturación</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-welli-yellow">72h</p>
            <p className="text-sm text-slate-300">Desembolso máx.</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-welli-yellow">0%</p>
            <p className="text-sm text-slate-300">Riesgo clínica</p>
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
          Ver cómo funciona
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule2ValueProposition;
