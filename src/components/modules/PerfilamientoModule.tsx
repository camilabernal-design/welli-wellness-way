import { motion } from "framer-motion";
import { Target, ArrowRight, UserCheck, MessageCircle, Camera, Clock, ShieldCheck, Users, AlertCircle } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const PerfilamientoModule = ({ onComplete }: ModuleProps) => {
  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-foreground mb-6">
            <Target className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Perfilamiento Proactivo</span>
          </div>
          <h2 className="section-title">¿Quién puede aplicar a Welli?</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            No existe una forma 100% segura de predecir si una solicitud será aprobada, pero el proceso es tan <span className="font-bold text-foreground">rápido y sencillo</span> que vale la pena intentarlo siempre.
          </p>
        </motion.div>

        {/* Único requisito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-welli-yellow/30 to-welli-yellow/10 border-2 border-welli-yellow/40 mb-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-welli-yellow/30 mb-4">
            <UserCheck className="w-8 h-8 text-foreground" />
          </div>
          <h3 className="font-bold text-xl mb-2">Único requisito</h3>
          <p className="text-lg text-foreground">
            El paciente debe tener entre <span className="font-bold text-foreground">18 y 69 años con 364 días</span>
          </p>
        </motion.div>

        {/* Proceso Welli Check - Infografía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="font-bold text-lg text-center mb-6">¿Cómo funciona Welli Check?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Paso 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-5 rounded-2xl bg-card border border-border text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/20 mb-3">
                <MessageCircle className="w-6 h-6 text-success" />
              </div>
              <div className="text-xs font-bold text-muted-foreground mb-1">PASO 1</div>
              <h4 className="font-bold text-foreground mb-2">Abre WhatsApp</h4>
              <p className="text-sm text-muted-foreground">El paciente inicia el proceso directamente desde WhatsApp, sin descargar apps.</p>
            </motion.div>

            {/* Paso 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-5 rounded-2xl bg-card border border-border text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-3">
                <Camera className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-xs font-bold text-muted-foreground mb-1">PASO 2</div>
              <h4 className="font-bold text-foreground mb-2">Foto de la cédula</h4>
              <p className="text-sm text-muted-foreground">Solo necesita tomar una foto de su cédula y responder un par de preguntas básicas.</p>
            </motion.div>

            {/* Paso 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-5 rounded-2xl bg-card border border-border text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-welli-yellow/30 mb-3">
                <Clock className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-xs font-bold text-muted-foreground mb-1">PASO 3</div>
              <h4 className="font-bold text-foreground mb-2">Resultado en segundos</h4>
              <p className="text-sm text-muted-foreground">En menos de 3 minutos sabrás si el paciente tiene un preaprobado disponible.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Ventaja clave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-5 rounded-2xl bg-success/10 border border-success/20 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-success" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-1">¿Por qué no temer al rechazo?</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Al ser un proceso tan rápido y fácil (solo una foto y unas preguntas por WhatsApp), <span className="font-bold">no genera fricción si el paciente es rechazado</span>. Es como consultar disponibilidad: si no aplica, simplemente se exploran otras opciones sin que el paciente sienta que perdió tiempo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Plan B */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="p-5 rounded-2xl bg-secondary/10 border border-secondary/20 mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-1">¿Y si es rechazado?</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Siempre tienes un <span className="font-bold">Plan B</span>: un familiar del paciente puede realizar el proceso en su lugar. También puedes ofrecer otros medios de pago como alternativa complementaria.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="p-4 rounded-xl bg-welli-yellow/20 border border-welli-yellow/30 text-center mb-10 flex items-center justify-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-foreground flex-shrink-0" />
          <p className="text-foreground text-sm">
            <span className="font-bold">Recuerda:</span> Ofrece Welli Check a todos tus pacientes. Es mejor intentar y saber en segundos, que perder un tratamiento por no preguntar.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
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

export default PerfilamientoModule;
