import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import welliCharacterStanding from "@/assets/welli-character-standing.png";
import { ArrowRight, Check, Building2, Trophy, Ticket, ShieldCheck, Headset } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
  onGoToFarmerModule?: (moduleId: number) => void;
}


const comparisonData = [
  { feature: 'Tasa de Interés', welli: ['20% E.A. créditos normales', 'Hasta 40% E.A. en créditos de bajos montos*'], banks: '25% E.A.', fintech: '40-45%+ E.A.', welliWins: true },
  { feature: 'Tasa de Aprobación', welli: '~20-30%', banks: '~10%', fintech: '~10%', welliWins: true },
  { feature: 'Desembolso', welli: 'Al aliado en 72h', banks: 'Al paciente', fintech: 'Aliado 30+ días', welliWins: true },
  { feature: 'Montos', welli: '$300k – $30M', banks: '$500k – $20M', fintech: '$200k – $10M', welliWins: true },
  { feature: 'Cuotas', welli: '3-36 meses', banks: '6-48 meses', fintech: '3-24 meses', welliWins: false },
  { feature: 'Tiempo Aprobación', welli: '3 minutos', banks: '5+ días', fintech: 'Varía', welliWins: true },
  { feature: 'Papeleo', welli: 'No', banks: 'Sí', fintech: 'No', welliWins: true },
  { feature: 'Riesgo para Clínica', welli: '0%', banks: 'Variable', fintech: 'Variable', welliWins: true },
];

const HunterModule4Comparison = ({ onComplete, onGoToFarmerModule }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          ⚔️ Comparativa Ganadora
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950">
          ¿Por Qué Welli y No Otros?
        </h1>
        <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
          Datos claros para cerrar cualquier objeción de "ya tenemos banco"
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="overflow-x-auto"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left bg-slate-100 rounded-tl-xl text-indigo-950">Característica</th>
              <th className="p-4 text-center bg-welli-yellow text-indigo-950">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">🏆</span>
                  <span className="font-bold">Welli</span>
                </div>
              </th>
              <th className="p-4 text-center bg-slate-200">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">🏦</span>
                  <span className="font-bold text-indigo-950">Bancos</span>
                </div>
              </th>
              <th className="p-4 text-center bg-slate-100 rounded-tr-xl">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">📱</span>
                  <span className="font-bold text-indigo-950">Otras Fintech</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <motion.tr
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-slate-100`}
              >
                <td className="p-4 font-medium text-indigo-950">{row.feature}</td>
                <td className={`p-4 text-center font-semibold ${row.welliWins ? 'bg-green-50 text-green-700' : 'bg-welli-yellow/10 text-indigo-950'}`}>
                  <div className="flex items-center justify-center gap-2">
                    {row.welliWins && <Check className="w-4 h-4 text-green-600 shrink-0" />}
                    {Array.isArray(row.welli) ? (
                      <div className="flex flex-col gap-1 text-sm leading-tight">
                        {row.welli.map((line, i) => (
                          <span key={i}>{line}</span>
                        ))}
                      </div>
                    ) : (
                      row.welli
                    )}
                  </div>
                </td>
                <td className="p-4 text-center text-indigo-800">{row.banks}</td>
                <td className="p-4 text-center text-indigo-800">{row.fintech}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-indigo-800/80 mt-3 italic leading-relaxed">
          * Un crédito de bajo monto tiene una tasa diferencial de hasta el 2.84% M.V. o hasta 40% E.A., conforme a lo estipulado en el Decreto 222 de 2020. (Esta tasa puede variar dentro de los rangos establecidos por el decreto)
        </p>
      </motion.div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <div className="bg-welli-yellow/20 border-2 border-welli-yellow rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">⚡</div>
          <h4 className="font-bold text-indigo-950">3 minutos</h4>
          <p className="text-sm text-indigo-800">vs 5+ días en bancos</p>
        </div>
        <div className="bg-welli-yellow/20 border-2 border-welli-yellow rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">📊</div>
          <h4 className="font-bold text-indigo-950">3x más aprobación</h4>
          <p className="text-sm text-indigo-800">que bancos tradicionales</p>
        </div>
        <div className="bg-welli-yellow/20 border-2 border-welli-yellow rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">💰</div>
          <h4 className="font-bold text-indigo-950">-50% en tasa</h4>
          <p className="text-sm text-indigo-800">vs otras fintechs</p>
        </div>
      </motion.div>

      {/* Desembolso Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-6 text-center"
      >
        <p className="text-2xl font-bold text-indigo-950">
          🎯 Desembolsamos <span className="text-welli-yellow">Martes y Jueves</span>
        </p>
        <p className="text-indigo-800 mt-2">
          Si el paciente aplica hoy, el jueves tú ya tienes tu dinero.
        </p>
      </motion.div>

      {/* Por qué WELLI es diferente */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-6"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950">
            Por qué WELLI es diferente
          </h2>
          <p className="text-indigo-800">
            No solo financiamos: te damos herramientas y acompañamiento para vender más.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Welli Points */}
          <Card className="border-2 border-welli-yellow/60">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-welli-yellow flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-indigo-950" />
                </div>
                <h3 className="text-xl font-bold text-indigo-950">Welli Points</h3>
              </div>
              <p className="text-sm text-indigo-800">
                Programa de lealtad que premia a tu equipo: cada aplicación y cada desembolso suma
                puntos que se convierten en bonos y beneficios para la clínica.
              </p>
              <YouTubeEmbed
                videoId="Wz5MPJ6QG_M"
                title="Welli Points: cómo funciona en 60 segundos"
                borderColor="welli-yellow"
              />
              <Button
                onClick={() => onGoToFarmerModule?.(17)}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold gap-2 mt-2"
              >
                Más información
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Welli Cupones */}
          <Card className="border-2 border-welli-yellow/60">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-welli-yellow flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-indigo-950" />
                </div>
                <h3 className="text-xl font-bold text-indigo-950">Welli Cupones</h3>
              </div>
              <p className="text-sm text-indigo-800">
                Desde tu portal creas cupones con tasa preferencial, incluso 0% de interés, para
                armar campañas y hacer que la cuota le quede viable a tu paciente.
              </p>
              <YouTubeEmbed
                videoId="deJKMlfQX1U"
                title="Welli Cupones: cómo crear un cupón"
                borderColor="welli-yellow"
              />
              <Button
                onClick={() => onGoToFarmerModule?.(18)}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold gap-2 mt-2"
              >
                Más información
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Welli Check */}
          <Card className="border-2 border-welli-yellow/60">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-welli-yellow flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-indigo-950" />
                </div>
                <h3 className="text-xl font-bold text-indigo-950">Welli Check</h3>
              </div>
              <p className="text-sm text-indigo-800">
                Valida en segundos y sin afectar el historial si tu paciente tiene cupo aprobado,
                para que sepas de entrada con cuánto cuenta y cierres el tratamiento más rápido.
              </p>
              <YouTubeEmbed
                videoId="EN7ao47-Is8"
                title="Welli Check: cómo funciona"
                borderColor="welli-yellow"
              />
              <Button
                onClick={() => onGoToFarmerModule?.(8)}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold gap-2 mt-2"
              >
                Más información
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Clínica de ventas */}
          <Card className="border-2 border-secondary/50 bg-indigo-950 overflow-hidden">
            <CardContent className="p-6 space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-welli-yellow flex items-center justify-center">
                    <Headset className="w-5 h-5 text-indigo-950" />
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-welli-yellow/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-welli-yellow" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-welli-yellow">Clínica de ventas con Customer Success</h3>
                <p className="text-sm text-white/85">
                  Recibirás una clínica de ventas con nuestro equipo de Customer Success, donde te
                  acompañarán hasta que hagas tu primer desembolso y profundizarán cómo WELLI puede
                  hacer crecer tu clínica e iniciar más tratamientos.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={welliCharacterStanding}
                  alt="Muñeco de WELLI"
                  className="h-32 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center pt-6"
      >
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
        >
          Continuar
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule4Comparison;
