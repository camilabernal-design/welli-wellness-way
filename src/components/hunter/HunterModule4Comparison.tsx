import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Minus } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const comparisonData = [
  {
    feature: 'Tasa de Interés',
    welli: '20-25% E.A.',
    banks: '25% E.A.',
    fintech: '40-45%+ E.A.',
    welliWins: true,
  },
  {
    feature: 'Tasa de Aprobación',
    welli: '~20-30%',
    banks: '~10%',
    fintech: '~10%',
    welliWins: true,
  },
  {
    feature: 'Desembolso',
    welli: 'Aliado en 72h',
    banks: 'Al paciente',
    fintech: 'Aliado 30+ días',
    welliWins: true,
  },
  {
    feature: 'Montos',
    welli: '$300k – $25M',
    banks: '$500k – $20M',
    fintech: '$200k – $10M',
    welliWins: true,
  },
  {
    feature: 'Cuotas',
    welli: '3-36 meses',
    banks: '6-48 meses',
    fintech: '3-24 meses',
    welliWins: false,
  },
  {
    feature: 'Tiempo Aprobación',
    welli: '3 minutos',
    banks: '5+ días',
    fintech: 'Varía',
    welliWins: true,
  },
  {
    feature: 'Papeleo',
    welli: 'No',
    banks: 'Sí',
    fintech: 'No',
    welliWins: true,
  },
  {
    feature: 'Riesgo para Clínica',
    welli: '0%',
    banks: 'Variable',
    fintech: 'Variable',
    welliWins: true,
  },
];

const HunterModule4Comparison = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-welli-orange/20 text-welli-orange font-medium text-sm">
          Módulo 4 · Comparativa Ganadora
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Welli vs El Resto
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <th className="p-4 text-left bg-slate-100 rounded-tl-xl">Característica</th>
              <th className="p-4 text-center bg-welli-orange text-white">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">🏆</span>
                  <span className="font-bold">Welli</span>
                </div>
              </th>
              <th className="p-4 text-center bg-slate-200">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">🏦</span>
                  <span className="font-bold">Bancos</span>
                </div>
              </th>
              <th className="p-4 text-center bg-slate-100 rounded-tr-xl">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">📱</span>
                  <span className="font-bold">Otras Fintech</span>
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
                <td className="p-4 font-medium">{row.feature}</td>
                <td className={`p-4 text-center font-semibold ${row.welliWins ? 'bg-green-50 text-green-700' : 'bg-welli-orange/5'}`}>
                  <div className="flex items-center justify-center gap-2">
                    {row.welliWins && <Check className="w-4 h-4 text-green-600" />}
                    {row.welli}
                  </div>
                </td>
                <td className="p-4 text-center text-muted-foreground">{row.banks}</td>
                <td className="p-4 text-center text-muted-foreground">{row.fintech}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">⚡</div>
          <h4 className="font-bold text-green-800">3 minutos</h4>
          <p className="text-sm text-green-700">vs 5+ días en bancos</p>
        </div>
        <div className="bg-welli-orange/10 border-2 border-welli-orange/30 rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">📊</div>
          <h4 className="font-bold text-welli-orange">3x más aprobación</h4>
          <p className="text-sm text-muted-foreground">que bancos tradicionales</p>
        </div>
        <div className="bg-secondary/10 border-2 border-secondary/30 rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">💰</div>
          <h4 className="font-bold text-secondary">-50% en tasa</h4>
          <p className="text-sm text-muted-foreground">vs otras fintechs</p>
        </div>
      </motion.div>

      {/* Script */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-slate-900 text-white rounded-xl p-6"
      >
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          💬 Manejo de Objeción: "Ya tenemos banco"
        </h3>
        <p className="text-slate-300 italic">
          "Entiendo perfectamente. El banco es para el 10% que ya tiene buen historial. 
          Welli es para el <span className="text-welli-yellow font-semibold">65% que el banco rechaza</span> 
          pero que sí puede pagar cuotas. No competimos con el banco. Lo complementamos."
        </p>
      </motion.div>

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
          className="bg-welli-orange hover:bg-welli-orange/90 text-white gap-2"
        >
          Siguiente: Mapa del Tesoro
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HunterModule4Comparison;
