import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Wallet, ArrowRight, AlertTriangle, Sparkles, DollarSign } from "lucide-react";

interface Module2Props {
  onComplete: () => void;
}

const Module2RealityCheck = ({ onComplete }: Module2Props) => {
  const metrics = [
    {
      icon: TrendingDown,
      iconColor: "text-danger",
      title: "Barrera del Sí",
      value: "65%",
      description: "de las ventas se pierden por el monto total",
      insight: "El precio completo genera miedo y parálisis en el paciente",
      gradient: "from-danger/10 to-danger/5",
      borderColor: "border-danger/20",
    },
    {
      icon: TrendingUp,
      iconColor: "text-accent",
      title: "Potencial VIP",
      value: "+40%",
      description: "más facturan los aliados que usan Welli proactivamente",
      insight: "Ofrecer cuotas = más cierres y pacientes más felices",
      gradient: "from-accent/10 to-accent/5",
      borderColor: "border-accent/20",
    },
    {
      icon: Wallet,
      iconColor: "text-warning",
      title: "El Elefante en la Habitación",
      value: "20%",
      description: "es lo que el paciente promedio tiene disponible hoy",
      insight: "Solo 1 de cada 5 pacientes puede pagar el total en efectivo",
      gradient: "from-warning/10 to-warning/5",
      borderColor: "border-warning/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="module-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Reality Check</span>
          </div>
          <h2 className="section-title">Los números no mienten</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Estos datos revelan por qué tus pacientes dicen "lo voy a pensar" y cómo puedes cambiar el juego.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`metric-card bg-gradient-to-br ${metric.gradient} ${metric.borderColor}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-card ${metric.iconColor}`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="text-4xl md:text-5xl font-display font-bold"
                >
                  {metric.value}
                </motion.div>
              </div>
              
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {metric.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {metric.description}
              </p>
              
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground/80 font-medium">
                    {metric.insight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Insight callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="card-elevated p-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground mb-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-2xl bg-primary-foreground/10">
              <DollarSign className="w-12 h-12" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-display font-bold text-2xl mb-2">
                La verdad incómoda
              </h3>
              <p className="text-primary-foreground/80 text-lg">
                Cuando mencionas el precio total, el paciente no escucha tu tratamiento. 
                Solo escucha: <span className="font-bold">"No puedo pagarlo"</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-success group inline-flex items-center gap-3 text-lg"
          >
            <span>Aprender a traducir precios</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Module2RealityCheck;
