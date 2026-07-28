import { motion } from "framer-motion";

// Coordenadas aproximadas sobre el viewBox del mapa
const PINES = [
  { x: 148, y: 196 },
  { x: 158, y: 188 },
  { x: 140, y: 205 },
  { x: 118, y: 218 },
];

export default function MapaCuatroSedes() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg viewBox="60 60 200 320" className="w-[280px] md:w-[340px]">
          <path
            d="M150 70 C185 78 205 100 214 128 C224 158 250 168 248 192 C246 214 224 220 218 240 C212 262 224 282 210 300 C196 318 176 312 166 330 C158 346 162 366 148 372 C132 378 124 358 116 342 C108 324 92 316 88 296 C84 274 100 258 96 238 C92 216 74 206 78 184 C82 160 106 152 118 130 C130 108 128 80 150 70 Z"
            fill="hsl(var(--muted))"
            stroke="#CBD5E1"
            strokeWidth="2"
          />
        </svg>
        {PINES.map((p, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: 1 }}
            transition={{ delay: i * 0.4, duration: 0.5, ease: "easeOut" }}
            className="absolute"
            style={{
              left: `${((p.x - 60) / 200) * 100}%`,
              top: `${((p.y - 60) / 320) * 100}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="w-5 h-5 rounded-full bg-welli-yellow border-2 border-indigo-950 shadow-md" />
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-6 text-lg text-slate-600 text-center"
      >
        4 sedes activas en Colombia
      </motion.p>
    </div>
  );
}
