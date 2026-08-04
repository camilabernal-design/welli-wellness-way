import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import welliCharacterStanding from "@/assets/welli-character-standing.png";
import { ArrowRight, Building2, User, TrendingUp, Shield, Zap, Wallet, Clock, CheckCircle2, Banknote, Trophy, Ticket, ShieldCheck, Headset } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
  onGoToFarmerModule?: (moduleId: number) => void;
}

const HunterModule2ValueProposition = ({ onComplete, onGoToFarmerModule }: ModuleProps) => {
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
        <h3 className="text-center font-bold text-xl mb-6">El resultado para tu clínica</h3>
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

      {/* Por qué WELLI es diferente */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="space-y-6"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950">
            Por qué WELLI es diferente
          </h2>
          <p className="text-indigo-800">
            No solo financiamos: te damos herramientas y acompañamiento para vender más.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Welli Points */}
          <Card className="border-2 border-welli-yellow/60">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-welli-yellow flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-indigo-950" />
                </div>
                <h3 className="text-xl font-bold text-indigo-950">Welli Points</h3>
              </div>
              <p className="text-sm text-indigo-800">
                Programa de lealtad que premia a tu equipo: cada aplicación y cada desembolso suma
                puntos que se convierten en bonos y beneficios para la clínica.
              </p>
              <YouTubeEmbed
                videoId="Wz5MPJ6QG_M"
                title="Welli Points: cómo funciona en 60 segundos"
                borderColor="welli-yellow"
              />
              <Button
                onClick={() => onGoToFarmerModule?.(17)}
                className="w-full bg-welli-orange hover:bg-welli-orange/90 text-white font-bold gap-2"
              >
                Más información
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Welli Cupones */}
          <Card className="border-2 border-welli-yellow/60">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-welli-yellow flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-indigo-950" />
                </div>
                <h3 className="text-xl font-bold text-indigo-950">Welli Cupones</h3>
              </div>
              <p className="text-sm text-indigo-800">
                Desde tu portal creas cupones con tasa preferencial, incluso 0% de interés, para
                armar campañas y hacer que la cuota le quede viable a tu paciente.
              </p>
              <YouTubeEmbed
                videoId="deJKMlfQX1U"
                title="Welli Cupones: cómo crear un cupón"
                borderColor="welli-yellow"
              />
              <Button
                onClick={() => onGoToFarmerModule?.(18)}
                className="w-full bg-welli-orange hover:bg-welli-orange/90 text-white font-bold gap-2"
              >
                Más información
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Welli Check */}
          <Card className="border-2 border-welli-yellow/60">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-welli-yellow flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-indigo-950" />
                </div>
                <h3 className="text-xl font-bold text-indigo-950">Welli Check</h3>
              </div>
              <p className="text-sm text-indigo-800">
                Valida en segundos y sin afectar el historial si tu paciente tiene cupo aprobado,
                para que sepas de entrada con cuánto cuenta y cierres el tratamiento más rápido.
              </p>
              <YouTubeEmbed
                videoId="EN7ao47-Is8"
                title="Welli Check: cómo funciona"
                borderColor="welli-yellow"
              />
              <Button
                onClick={() => onGoToFarmerModule?.(8)}
                className="w-full bg-welli-orange hover:bg-welli-orange/90 text-white font-bold gap-2"
              >
                Más información
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Clínica de ventas */}
          <Card className="border-2 border-secondary/50 bg-indigo-950">
            <CardContent className="p-6 space-y-4 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-welli-yellow flex items-center justify-center">
                  <Headset className="w-5 h-5 text-indigo-950" />
                </div>
                <div className="w-11 h-11 rounded-xl bg-welli-yellow/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-welli-yellow" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-welli-yellow">Clínica de ventas con Customer Success</h3>
              <p className="text-sm text-white/85">
                Recibirás una clínica de ventas con nuestro equipo de Customer Success, donde te
                acompañarán hasta que hagas tu primer desembolso y profundizarán cómo WELLI puede
                hacer crecer tu clínica e iniciar más tratamientos.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>


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
