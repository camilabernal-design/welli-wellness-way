import { motion } from "framer-motion";
import { Users, Gift, ArrowRight, ExternalLink } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const ModuleReferrals = ({ onComplete }: ModuleProps) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/30 border border-welli-yellow/50 text-foreground mb-6">
            <Gift className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-bold">Campaña de Referidos</span>
          </div>
          <h2 className="section-title">Trae un Colega y Gana $200.000</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Si tu colega hace un desembolso en los primeros 3 meses, tú ganas.
          </p>
        </motion.div>

        {/* Referral Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="referral-banner mb-10 relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 mb-4">
                  <Gift className="w-4 h-4" />
                  <span className="text-sm font-medium">¡Gana dinero extra!</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Tienes un colega en mente?
                </h3>
                <p className="text-xl mb-2">
                  Recibe hasta <span className="text-welli-yellow font-extrabold text-3xl">$200.000</span>
                </p>
                <p className="text-lg opacity-90 mb-6">
                  si hace un desembolso en los primeros 3 meses.
                </p>
                <p className="text-sm opacity-75 mb-6">*Aplican T&C</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://u0pdd.share.hsforms.com/2TkQAv3XnTIi1Fd34oIn8Hg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-welli inline-flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    <span>Referir a un colega</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://50421361.fs1.hubspotusercontent-na1.net/hubfs/50421361/T%C3%89RMINOS%20Y%20CONDICIONES%20%E2%80%94%20CAMPA%C3%91A%20DE%20REFERIDOS%20%E2%80%9CTRAE%20UN%20COLEGA%E2%80%9D%20(1).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white underline text-sm"
                  >
                    Ver Términos y Condiciones
                  </a>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-40 h-40 bg-welli-yellow rounded-full flex items-center justify-center"
                >
                  <span className="text-7xl">💰</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="card-elevated p-8 mb-10"
        >
          <h3 className="font-bold text-xl mb-6 text-center">¿Cómo funciona?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Refiere", desc: "Comparte el link de registro con tu colega" },
              { step: "2", title: "Se registra", desc: "Tu colega se une a la red Welli" },
              { step: "3", title: "Ganas", desc: "Cuando haga su primer desembolso, recibes $200.000" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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

export default ModuleReferrals;