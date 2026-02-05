import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, DollarSign, MessageCircle, ThumbsUp } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const AliadoModule3Cuotas = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-welli-yellow/20 text-welli-yellow font-medium text-sm">
          Módulo 3 · Comunicación
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Manejo de la Cuota de Bienestar
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          El lenguaje correcto para presentar el financiamiento
        </p>
      </motion.div>

      {/* Key Concept */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-welli-orange to-welli-orange/90 text-white border-0">
          <CardContent className="p-8 text-center">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No vendas el total. Vende la viabilidad.</h2>
            <p className="text-white/90 text-lg">
              Presenta <span className="font-bold text-welli-yellow">"Cuotas de Bienestar"</span>, 
              no "créditos" ni "financiamiento".
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Do's and Don'ts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <Card className="border-2 border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsUp className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-lg text-green-700">Así SÍ</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                "Tu tratamiento completo en cómodas cuotas de bienestar"
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                "Puedes empezar hoy sin tener todo el dinero"
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                "La aprobación es en 3 minutos, sin papeleo"
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                "Tu salud no puede esperar, nosotros te ayudamos"
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-destructive" />
              <h3 className="font-bold text-lg text-destructive">Así NO</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                "¿Te interesa un crédito?"
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                "Te puedo financiar con intereses"
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                "Es una deuda pero es fácil de pagar"
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                "Te prestan dinero para el tratamiento"
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sample Script */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-secondary/10 rounded-xl p-6 border-l-4 border-secondary"
      >
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          📝 Script de Ejemplo
        </h3>
        <p className="text-muted-foreground italic">
          "Entiendo que el tratamiento completo puede parecer una inversión grande. 
          Pero déjame mostrarte cómo lo puedes hacer en <span className="text-welli-orange font-semibold">cuotas de bienestar</span>. 
          En 3 minutos sabemos si calificas, y puedes empezar hoy mismo tu camino hacia una mejor sonrisa."
        </p>
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
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-welli-yellow-foreground gap-2"
        >
          Siguiente: Material POP
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default AliadoModule3Cuotas;
