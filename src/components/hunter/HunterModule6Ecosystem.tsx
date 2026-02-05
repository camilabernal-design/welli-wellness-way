import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Monitor, Smartphone, BarChart3, CreditCard, FileText, Bell } from "lucide-react";

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
        <span className="inline-block px-4 py-1 rounded-full bg-welli-orange/20 text-welli-orange font-medium text-sm">
          Módulo 6 · Tecnología
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          El Ecosistema Digital
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Dos portales que dan control total a aliados y pacientes
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
              <p className="text-white/80">Control total de tu operación</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <Monitor className="w-16 h-16 text-secondary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Vista previa del portal</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm">Historial de Aplicaciones</p>
                    <p className="text-xs text-muted-foreground">Ve todas las solicitudes en tiempo real</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <CreditCard className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm">Gestión de Créditos</p>
                    <p className="text-xs text-muted-foreground">Estado y seguimiento de cada caso</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <FileText className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm">Solicitar Desembolso</p>
                    <p className="text-xs text-muted-foreground">Un clic para activar tu pago</p>
                  </div>
                </div>
              </div>
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
              <p className="text-white/80">Autogestión completa</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 text-welli-orange mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Vista previa del portal</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-welli-orange/10 rounded-lg">
                  <CreditCard className="w-5 h-5 text-welli-orange" />
                  <div>
                    <p className="font-medium text-sm">Estado de Cuenta</p>
                    <p className="text-xs text-muted-foreground">Saldo, cuotas y fechas de pago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-welli-orange/10 rounded-lg">
                  <Bell className="w-5 h-5 text-welli-orange" />
                  <div>
                    <p className="font-medium text-sm">Pagar Cuota</p>
                    <p className="text-xs text-muted-foreground">Múltiples métodos de pago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-welli-orange/10 rounded-lg">
                  <FileText className="w-5 h-5 text-welli-orange" />
                  <div>
                    <p className="font-medium text-sm">Extractos</p>
                    <p className="text-xs text-muted-foreground">Descarga tu historial completo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Key Benefit */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-slate-900 text-white rounded-2xl p-8 text-center"
      >
        <h3 className="text-xl font-bold mb-4">Sin Llamadas, Sin WhatsApps, Sin Estrés</h3>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Tanto el aliado como el paciente pueden consultar todo desde su celular o computador. 
          Welli maneja la relación financiera para que tú te enfoques en la salud.
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
          Siguiente: Validación y Cifras
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule6Ecosystem;
