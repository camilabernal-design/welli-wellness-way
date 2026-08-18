import { motion } from "framer-motion";

const W = 400;
const H = 520;

// Silueta aproximada de Colombia
const COLOMBIA =
  "M300 38 C316 44 330 58 328 74 C326 90 306 96 288 100 C262 106 236 104 214 96 C196 90 178 100 162 114 C148 126 136 142 126 160 C118 174 122 188 116 198 C110 208 98 210 92 202 C86 194 78 196 74 208 C68 226 66 248 62 272 C58 298 66 322 74 346 C82 370 94 396 106 424 C114 444 118 462 126 472 C136 484 156 480 172 478 C186 476 194 492 206 500 C220 509 240 508 254 496 C268 484 282 470 296 456 C312 440 330 424 340 402 C350 380 352 354 348 330 C344 306 334 286 324 268 C314 250 300 238 298 224 C296 208 310 198 314 184 C318 168 308 152 300 136 C292 120 288 100 292 80 C294 64 292 48 300 38 Z";

const SEDES = [
  { x: 196, y: 112, name: "Barranquilla" },
  { x: 158, y: 268, name: "Medellín" },
  { x: 214, y: 318, name: "Bogotá" },
  { x: 132, y: 362, name: "Cali" },
];

export default function MapaCuatroSedes() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[300px] md:w-[380px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
          <defs>
            <linearGradient id="mapaCol" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--muted))" />
              <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <motion.path
            d={COLOMBIA}
            fill="url(#mapaCol)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.path
            d={COLOMBIA}
            fill="none"
            stroke="#312E81"
            strokeWidth="3"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </svg>

        {SEDES.map((s, i) => (
          <div
            key={s.name}
            className="absolute"
            style={{ left: `${(s.x / W) * 100}%`, top: `${(s.y / H) * 100}%` }}
          >
            <motion.div
              initial={{ scale: 0, y: -18, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                delay: 1.4 + i * 0.35,
                type: "spring",
                stiffness: 320,
                damping: 16,
              }}
              className="relative -translate-x-1/2 -translate-y-full flex flex-col items-center"
            >
              <div className="flex items-center gap-1.5 rounded-full bg-white border border-indigo-950/15 shadow-sm px-2.5 py-1 mb-1">
                <span className="text-[11px] md:text-xs font-semibold text-indigo-950 whitespace-nowrap">
                  {s.name}
                </span>
              </div>
              <span className="relative flex h-4 w-4">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-welli-yellow"
                  animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: 1.6 + i * 0.35,
                  }}
                />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-welli-yellow border-2 border-indigo-950" />
              </span>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.9 }}
        className="mt-6 text-lg text-slate-600 text-center"
      >
        4 sedes activas en Colombia
      </motion.p>
    </div>
  );
}
