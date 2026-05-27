import { useEffect, useState } from "react";

export default function AnimatedCounter({
  to,
  duration = 1500,
  delay = 0,
  prefix = "",
  suffix = "",
  format,
}: {
  to: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      const t = Math.max(0, Math.min(1, (now - start) / duration));
      setN(Math.round(t * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, delay]);
  return (
    <span>
      {prefix}
      {format ? format(n) : n.toLocaleString("es-CO")}
      {suffix}
    </span>
  );
}
