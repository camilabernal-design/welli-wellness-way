import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, CheckCircle2, Calendar, Smartphone, Heart, Download, ExternalLink } from "lucide-react";
import { TrainingRoute } from "@/types/training";

interface ModuleProps {
  onComplete: () => void;
  onGoToHub?: () => void;
}

const AliadoModule5Summary = ({ onComplete, onGoToHub }: ModuleProps) => {
  const keyPoints = [
    { icon: Smartphone, title: 'Welli Check', description: 'Solicitud de crédito en 3 minutos desde el consultorio' },
    { icon: Calendar, title: 'Desembolso', description: 'Solicitar manualmente. Pagos Martes y Jueves (72h máx)' },
    { icon: Heart, title: 'Cuotas de Bienestar', description: 'El lenguaje correcto para presentar el financiamiento' },
    { icon: Download, title: 'Material POP', description: 'Habladores, stickers y bolsas para tu consultorio' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-welli-yellow/20 text-welli-yellow font-medium text-sm">
          Módulo 5 · Resumen
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          ¡Listo para Empezar! 🎉
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ya tienes todo lo esencial para usar Welli en tu día a día
        </p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-4"
      >
        {keyPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="h-full border-2 border-welli-yellow/30 hover:border-welli-yellow transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-welli-yellow/20 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-welli-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    {point.title}
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-slate-900 text-white rounded-2xl p-6"
      >
        <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://stg.admin.welli.com.co/admin/login/?next=/admin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <div>
              <p className="font-medium">Portal Admin</p>
              <p className="text-xs text-slate-400">Gestiona desembolsos</p>
            </div>
          </a>
          <a
            href="https://www.welli.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <div>
              <p className="font-medium">Sitio Web Welli</p>
              <p className="text-xs text-slate-400">Información general</p>
            </div>
          </a>
        </div>
      </motion.div>

      {/* Completion Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-welli-yellow to-welli-orange rounded-2xl p-8 text-center text-white"
      >
        <div className="text-5xl mb-4">🏆</div>
        <h2 className="text-2xl font-bold mb-2">¡Guía Completada!</h2>
        <p className="text-white/90">
          Ya conoces lo esencial. Para entrenamiento avanzado, explora la ruta Farmer/CS.
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row gap-4 justify-center pt-6"
      >
        <Button
          onClick={onGoToHub}
          variant="outline"
          size="lg"
          className="gap-2"
        >
          <Home className="w-5 h-5" />
          Volver al Hub
        </Button>
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-welli-yellow-foreground gap-2"
        >
          Reiniciar Guía
        </Button>
      </motion.div>
    </div>
  );
};

export default AliadoModule5Summary;
