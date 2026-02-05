import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Monitor, Smartphone, BarChart3, CreditCard, FileText, Bell, ExternalLink } from "lucide-react";
import portalAliados from "@/assets/portal-aliados.png";
import portalPagos from "@/assets/portal-pagos.png";

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
          Control total en tus manos
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Dos portales que dan autonomía a tu clínica y a tus pacientes
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
              <h2 className="text-2xl font-bold">Portal de aliados</h2>
              <p className="text-white/90">Control total de tu operación</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-4">
                <img 
                  src={portalAliados} 
                  alt="Portal de aliados Welli" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Historial de aplicaciones</p>
                    <p className="text-xs text-indigo-800">Ve todas las solicitudes en tiempo real</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <CreditCard className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Gestión de créditos</p>
                    <p className="text-xs text-indigo-800">Estado y seguimiento de cada caso</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <FileText className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Solicitar desembolso</p>
                    <p className="text-xs text-indigo-800">Un clic para activar tu pago</p>
                  </div>
                </div>
              </div>

              <a
                href="https://stg.admin.welli.com.co/admin/login/?next=/admin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-welli-yellow text-indigo-950 font-bold rounded-lg hover:bg-welli-yellow/90 transition-colors"
              >
                Ver portal admin
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
          <Card className="h-full border-2 border-welli-yellow overflow-hidden">
            <div className="bg-welli-yellow p-6">
              <Smartphone className="w-10 h-10 mb-3 text-indigo-950" />
              <h2 className="text-2xl font-bold text-indigo-950">Portal de pacientes</h2>
              <p className="text-indigo-800">Autogestión completa</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-4">
                <img 
                  src={portalPagos} 
                  alt="Portal de pagos Welli" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-welli-yellow/20 rounded-lg">
                  <CreditCard className="w-5 h-5 text-welli-orange" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Estado de cuenta</p>
                    <p className="text-xs text-indigo-800">Saldo, cuotas y fechas de pago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-welli-yellow/20 rounded-lg">
                  <Bell className="w-5 h-5 text-welli-orange" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Pagar cuota</p>
                    <p className="text-xs text-indigo-800">Múltiples métodos de pago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-welli-yellow/20 rounded-lg">
                  <FileText className="w-5 h-5 text-welli-orange" />
                  <div>
                    <p className="font-medium text-sm text-indigo-950">Extractos</p>
                    <p className="text-xs text-indigo-800">Descarga tu historial completo</p>
                  </div>
                </div>
              </div>

              <a
                href="https://app.welli.com.co/public-payment/form"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-welli-yellow text-indigo-950 font-bold rounded-lg hover:bg-welli-yellow/90 transition-colors"
              >
                Ver portal paciente
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
        <h3 className="text-xl font-bold mb-4">Sin llamadas, sin WhatsApps, sin estrés</h3>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Tanto tú como tus pacientes pueden consultar todo desde su celular o computador. 
          Welli maneja la relación financiera para que te enfoques en la salud.
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
          Ver nuestro impacto
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule6Ecosystem;
