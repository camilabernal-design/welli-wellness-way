import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Copy, CheckCircle2, Smartphone, Building2, UserCheck, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ModuleProps {
  onComplete: () => void;
}

const scripts = [
  {
    id: 1,
    title: "WhatsApp al Agendar",
    icon: Smartphone,
    context: "Cuando el paciente agenda su cita",
    script: `¡Hola! 👋 Te confirmamos tu cita para el [FECHA]. 

💡 Dato importante: En nuestra clínica trabajamos con Welli para que puedas acceder a tu tratamiento en cuotas cómodas (hasta 36 meses). 

Si quieres saber si aplicas en 30 segundos, responde "Welli" y te enviamos el enlace 📲`,
    color: "bg-success/10 border-success/30",
    iconColor: "text-success",
  },
  {
    id: 2,
    title: "Recepción (Check-in)",
    icon: Building2,
    context: "Cuando el paciente llega a la cita",
    script: `"Bienvenido/a a [CLÍNICA]. Antes de pasar a consulta, te cuento que trabajamos con un sistema de financiación llamado Welli. Si al final del presupuesto te interesa pagarlo en cuotas, solo me avisas y te explico cómo funciona. Es súper rápido."`,
    color: "bg-secondary/10 border-secondary/30",
    iconColor: "text-secondary",
  },
  {
    id: 3,
    title: "Durante la Consulta",
    icon: UserCheck,
    context: "Cuando el doctor presenta el tratamiento",
    script: `"El tratamiento que necesitas tiene un valor de $[MONTO]. Pero tranquilo/a, trabajamos con Welli y esto se puede dividir en cuotas de $[CUOTA] al mes. 

¿Quieres que veamos si aplicas? Solo tomo una foto de tu cédula y en 30 segundos tenemos respuesta."`,
    color: "bg-welli-yellow/10 border-welli-yellow/30",
    iconColor: "text-welli-yellow",
  },
  {
    id: 4,
    title: "En Caja (Cierre)",
    icon: CreditCard,
    context: "Al momento del pago",
    script: `"¿Cómo te gustaría pagar hoy? Tenemos efectivo, tarjeta, o si prefieres dividirlo en cuotas sin usar tu tarjeta, podemos usar Welli. Te aprueba en minutos y empiezas el tratamiento hoy."`,
    color: "bg-primary/10 border-primary/30",
    iconColor: "text-primary",
  },
];

const PowerScriptsModule = ({ onComplete }: ModuleProps) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast({
      title: "¡Copiado!",
      description: "El guión está listo para pegar en tu app de mensajes",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-foreground mb-6">
            <MessageSquare className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Guiones de Poder</span>
          </div>
          <h2 className="section-title">Textos listos para copiar y pegar</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Guiones probados para cada momento del journey del paciente. Solo copia y adapta.
          </p>
        </motion.div>

        {/* Scripts Grid */}
        <div className="space-y-6 mb-10">
          {scripts.map((script, index) => {
            const Icon = script.icon;
            const isCopied = copiedId === script.id;

            return (
              <motion.div
                key={script.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`p-6 rounded-2xl border-2 ${script.color}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-card`}>
                    <Icon className={`w-6 h-6 ${script.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground">{script.title}</h3>
                    <p className="text-sm text-muted-foreground">{script.context}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(script.script, script.id)}
                    className={`px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2 transition-all ${
                      isCopied
                        ? "bg-success text-success-foreground"
                        : "bg-card border border-border hover:border-primary"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copiar
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-card/80 border border-border">
                  <pre className="whitespace-pre-wrap text-sm text-foreground font-sans">
                    {script.script}
                  </pre>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pro Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/20 to-secondary/10 border-2 border-welli-yellow/30 text-center mb-10"
        >
          <p className="text-foreground">
            <span className="font-bold">💡 Pro Tip:</span> Adapta los guiones con el nombre de tu clínica y los montos reales. 
            La personalización aumenta la conversión en un 40%.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PowerScriptsModule;
