import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Monitor, Smartphone, BarChart3, CreditCard, FileText, Bell, ExternalLink } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const HunterModule6Ecosystem = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          🖥️ Tecnología
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          Control Total en Sus Manos
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Dos portales que dan autonomía a su clínica y a sus pacientes
        </p>
      </motion.div>

      {/* Two Portals */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ally Portal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full border-2 border-secondary overflow-hidden">
            <div className="bg-gradient-to-r from-secondary to-secondary/80 p-6 text-white">
              <Monitor className="w-10 h-10 mb-3" />
              <h2 className="text-2xl font-bold">Portal de Aliados</h2>
              <p className="text-white/90">Control total de su operación</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <Monitor className="w-16 h-16 text-secondary mx-auto mb-2" />
                  <p className="text-sm text-indigo-800">Panel administrativo</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Historial de Aplicaciones</p>
                    <p className="text-xs text-indigo-800">Vea todas las solicitudes en tiempo real</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <CreditCard className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Gestión de Créditos</p>
                    <p className="text-xs text-indigo-800">Estado y seguimiento de cada caso</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <FileText className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Solicitar Desembolso</p>
                    <p className="text-xs text-indigo-800">Un clic para activar su pago</p>
                  </div>
                </div>
              </div>

              <a
                href="https://stg.admin.welli.com.co/admin/login/?next=/admin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-welli-yellow text-indigo-950 font-bold rounded-lg hover:bg-welli-yellow/90 transition-colors"
              >
                Ver Portal Admin
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </motion.div>

        {/* Patient Portal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full border-2 border-welli-orange overflow-hidden">
            <div className="bg-gradient-to-r from-welli-orange to-welli-orange/80 p-6 text-white">
              <Smartphone className="w-10 h-10 mb-3" />
              <h2 className="text-2xl font-bold">Portal de Pacientes</h2>
              <p className="text-white/90">Autogestión completa</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 text-welli-orange mx-auto mb-2" />
                  <p className="text-sm text-indigo-800">Portal de pagos</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-welli-orange/10 rounded-lg">
                  <CreditCard className="w-5 h-5 text-welli-orange" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Estado de Cuenta</p>
                    <p className="text-xs text-indigo-800">Saldo, cuotas y fechas de pago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-welli-orange/10 rounded-lg">
                  <Bell className="w-5 h-5 text-welli-orange" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Pagar Cuota</p>
                    <p className="text-xs text-indigo-800">Múltiples métodos de pago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-welli-orange/10 rounded-lg">
                  <FileText className="w-5 h-5 text-welli-orange" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Extractos</p>
                    <p className="text-xs text-indigo-800">Descargue su historial completo</p>
                  </div>
                </div>
              </div>

              <a
                href="https://app.welli.com.co/public-payment/form"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-welli-yellow text-indigo-950 font-bold rounded-lg hover:bg-welli-yellow/90 transition-colors"
              >
                Ver Portal Paciente
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Key Benefit */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-indigo-950 to-indigo-900 text-white rounded-2xl p-8 text-center"
      >
        <h3 className="text-xl font-bold mb-4">Sin Llamadas, Sin WhatsApps, Sin Estrés</h3>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Tanto usted como sus pacientes pueden consultar todo desde su celular o computador. 
          Welli maneja la relación financiera para que usted se enfoque en la salud.
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
          Ver Nuestro Impacto
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule6Ecosystem;
