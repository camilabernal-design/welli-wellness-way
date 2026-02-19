import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const AliadoModule2Desembolso = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-welli-yellow/20 text-welli-yellow font-medium text-sm">
          Módulo 2 · Operación
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Cómo Pedir el Desembolso
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Recuerda: Aprobación ≠ Desembolso. Debes solicitarlo manualmente.
        </p>
      </motion.div>

      {/* Warning Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-destructive/10 border-2 border-destructive">
          <CardContent className="p-6 flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-destructive">¡Importante!</h3>
              <p className="text-muted-foreground">
                Cuando el crédito sale <strong>APROBADO</strong>, el proceso NO termina. 
                Debes entrar al Portal Admin y solicitar el <strong>DESEMBOLSO</strong> manualmente.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment Days */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <Card className="border-2 border-secondary">
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="font-bold text-xl mb-2">Días de Pago</h3>
            <div className="flex justify-center gap-4">
              <span className="px-4 py-2 bg-secondary/20 rounded-lg font-bold text-secondary">Martes</span>
              <span className="px-4 py-2 bg-secondary/20 rounded-lg font-bold text-secondary">Jueves</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-welli-orange">
          <CardContent className="p-6 text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-welli-orange" />
            <h3 className="font-bold text-xl mb-2">Tiempo Máximo</h3>
            <p className="text-4xl font-bold text-welli-orange">72h</p>
            <p className="text-sm text-muted-foreground">horas hábiles</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Process Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h3 className="font-bold text-lg">Proceso de Desembolso</h3>
        <div className="space-y-3">
          {[
            { step: 1, text: 'Ingresa al Portal Admin de Welli' },
            { step: 2, text: 'Busca el crédito TOMADO' },
            { step: 3, text: 'Haz clic en "Solicitar Desembolso"' },
            { step: 4, text: 'Confirma los datos bancarios' },
            { step: 5, text: 'Espera máximo 72h hábiles' },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-4 p-3 bg-accent rounded-lg">
              <div className="w-8 h-8 rounded-full bg-welli-yellow text-welli-yellow-foreground flex items-center justify-center font-bold">
                {item.step}
              </div>
              <p className="font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Portal Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <a
          href="https://stg.admin.welli.com.co/admin/login/?next=/admin/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
        >
          Ir al Portal Admin
          <ArrowRight className="w-4 h-4" />
        </a>
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
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-welli-yellow-foreground gap-2"
        >
          Siguiente: Cuotas de Bienestar
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default AliadoModule2Desembolso;
