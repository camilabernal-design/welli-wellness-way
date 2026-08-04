import { motion } from "framer-motion";
import { ShieldCheck, Building2, Users } from "lucide-react";
import EquiposShell from "./EquiposShell";

interface Props {
  onComplete: () => void;
}

const founders = [
  {
    name: "Felipe Gómez Herrera",
    role: "Co-fundador y CEO",
    background: ["Cornell University", "Harvard Business School", "Harvard Kennedy School", "McKinsey & Company"],
  },
  {
    name: "Felipe Jaramillo López",
    role: "Co-fundador y COO",
    background: ["Universidad de los Andes", "NYU Stern", "Acciones & Valores", "Western Union", "Kearney"],
  },
];

const board = [
  { name: "Jorge Gómez MD", role: "Presidente, Sociedad de Cirugía de Bogotá" },
  { name: "Luis Eduardo Cavelier MD", role: "Gerente, Clínica de Marly" },
  { name: "Pablo Gómez MD", role: "Gerente, PMA" },
  { name: "Daniel Posse Espinosa", role: "Partner, Upside Consulting" },
];

const clients = [
  "Clínica Imbanaco",
  "IQ InterQuirófanos",
  "Quirófanos El Tesoro",
  "Grupo UroGine",
  "Profamilia",
  "Fundación Santa Fe",
  "Clínicas Sonría",
  "Dentix",
  "inSer",
  "Reprotec",
  "PMA",
  "Moons",
  "Fundonal",
  "Movet",
  "Petplus",
  "Gaes Audífonos",
];

const EquiposModule6Respaldo = ({ onComplete }: Props) => (
  <EquiposShell
    phase={1}
    eyebrow="Confianza"
    icon={ShieldCheck}
    title="Quién está detrás de WELLI"
    subtitle="Un equipo directivo probado, una junta con líderes del sector salud y una red de clínicas que ya opera con nosotros."
    onComplete={onComplete}
  >
    <div className="grid md:grid-cols-2 gap-6">
      {founders.map((f, i) => (
        <motion.div
          key={f.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="rounded-2xl border-2 border-welli-yellow/40 bg-card p-6 shadow-sm"
        >
          <h3 className="font-bold text-indigo-950 text-lg">{f.name}</h3>
          <p className="text-sm text-primary font-medium mb-4">{f.role}</p>
          <div className="flex flex-wrap gap-2">
            {f.background.map((b) => (
              <span
                key={b}
                className="text-xs px-3 py-1 rounded-full bg-welli-yellow/20 text-indigo-950 font-medium"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border-2 border-primary/25 bg-primary/5 p-8"
    >
      <div className="flex items-center gap-2 mb-5">
        <Users className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-bold text-indigo-950">Junta directiva e inversionistas</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {board.map((b) => (
          <div key={b.name} className="rounded-xl bg-card border border-indigo-950/10 px-4 py-3">
            <p className="font-bold text-indigo-950 text-sm">{b.name}</p>
            <p className="text-xs text-indigo-950/70">{b.role}</p>
          </div>
        ))}
      </div>
    </motion.section>

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-indigo-950 rounded-3xl p-8 text-white shadow-xl"
    >
      <div className="flex items-center gap-2 mb-5">
        <Building2 className="w-5 h-5 text-welli-yellow" />
        <h3 className="text-2xl font-bold">Clínicas y grupos que confían en WELLI</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {clients.map((c) => (
          <span key={c} className="text-sm px-4 py-2 rounded-full bg-white/10 text-white/90">
            {c}
          </span>
        ))}
      </div>
      <p className="text-sm text-white/70 mt-6">
        Cuando tu vendedor menciona WELLI frente a un médico, no está presentando a un desconocido:
        está presentando al aliado financiero de las instituciones más reconocidas del país.
      </p>
    </motion.section>
  </EquiposShell>
);

export default EquiposModule6Respaldo;
