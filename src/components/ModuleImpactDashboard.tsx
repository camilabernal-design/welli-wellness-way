import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Tooltip } from "recharts";

interface ModuleProps {
  onComplete: () => void;
}

const revenueData = [
  { month: "Ene", sinWelli: 15, conWelli: 20 },
  { month: "Feb", sinWelli: 18, conWelli: 25 },
  { month: "Mar", sinWelli: 14, conWelli: 22 },
  { month: "Abr", sinWelli: 16, conWelli: 28 },
  { month: "May", sinWelli: 19, conWelli: 32 },
  { month: "Jun", sinWelli: 17, conWelli: 35 },
];

const pensarData = [
  { name: "Sin Welli", value: 65, color: "hsl(var(--danger))" },
  { name: "Con Welli", value: 35, color: "hsl(var(--success))" },
];

const comisionData = [
  { concepto: "Venta Perdida", valor: 0, fill: "hsl(var(--danger))" },
  { concepto: "Ingreso Neto\ncon Comisión", valor: 95, fill: "hsl(var(--success))" },
];

const ModuleImpactDashboard = ({ onComplete }: ModuleProps) => {
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
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium">Dashboard de Impacto</span>
          </div>
          <h2 className="section-title">Resultados proyectados con Welli</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Estos datos reflejan el impacto real que tiene Welli en consultorios similares al tuyo.
          </p>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          <div className="card-elevated p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-success/20">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Aumento Facturación</span>
            </div>
            <div className="text-4xl font-display font-bold text-success mb-2">+35%</div>
            <p className="text-sm text-muted-foreground">Proyectado en 6 meses</p>
          </div>

          <div className="card-elevated p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-accent/20">
                <TrendingDown className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Reducción "Lo voy a pensar"</span>
            </div>
            <div className="text-4xl font-display font-bold text-accent mb-2">-50%</div>
            <p className="text-sm text-muted-foreground">Menos pacientes indecisos</p>
          </div>

          <div className="card-elevated p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Ticket Promedio</span>
            </div>
            <div className="text-4xl font-display font-bold text-primary mb-2">+28%</div>
            <p className="text-sm text-muted-foreground">Mayor valor por paciente</p>
          </div>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Revenue Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="card-elevated p-6"
          >
            <h3 className="font-display font-bold text-lg mb-6">Facturación Mensual (millones COP)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="sinWelli" name="Sin Welli" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="conWelli" name="Con Welli" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                <span className="text-sm text-muted-foreground">Sin Welli</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="text-sm text-muted-foreground">Con Welli</span>
              </div>
            </div>
          </motion.div>

          {/* "Lo voy a pensar" Reduction Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="card-elevated p-6"
          >
            <h3 className="font-display font-bold text-lg mb-6">Tasa de "Lo voy a pensar"</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pensarData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    dataKey="value"
                    paddingAngle={5}
                  >
                    {pensarData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-danger"></div>
                <span className="text-sm text-muted-foreground">Sin Welli (65%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="text-sm text-muted-foreground">Con Welli (35%)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Commission Myth Buster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-elevated p-8 mb-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-success/10">
              <Sparkles className="w-6 h-6 text-success" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2">Desmitificando la Comisión</h3>
              <p className="text-muted-foreground">
                La comisión de Welli es una inversión, no un costo. Mira la comparación real:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-danger/10 border border-danger/30 text-center">
              <p className="text-sm font-medium text-danger mb-2">SIN FINANCIACIÓN</p>
              <p className="text-4xl font-display font-bold text-danger mb-2">$0</p>
              <p className="text-sm text-muted-foreground">Venta perdida = Ingreso perdido</p>
            </div>
            <div className="p-6 rounded-xl bg-success/10 border border-success/30 text-center">
              <p className="text-sm font-medium text-success mb-2">CON WELLI (después de comisión)</p>
              <p className="text-4xl font-display font-bold text-success mb-2">95%</p>
              <p className="text-sm text-muted-foreground">Del valor del tratamiento en tu bolsillo</p>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-6">
            <span className="font-bold text-foreground">El 95% de algo</span> siempre será mejor que{" "}
            <span className="font-bold text-danger">el 100% de nada</span>.
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
            className="btn-success group inline-flex items-center gap-3 text-lg"
          >
            <span>Continuar con la Calculadora</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModuleImpactDashboard;
