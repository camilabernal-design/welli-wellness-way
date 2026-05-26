import { useEffect, useRef } from "react";

/**
 * Tracks time spent on a Clínica 2.0 module in localStorage.
 * Records start time, completion status, total seconds, and timestamp of abandonment.
 */
export function useV2Analytics(moduleId: number, moduleName: string) {
  const startRef = useRef<number>(Date.now());
  const completedRef = useRef(false);

  useEffect(() => {
    startRef.current = Date.now();
    const key = `clinicaV2_metrics`;
    const existing = JSON.parse(localStorage.getItem(key) || "{}");
    existing[moduleId] = {
      ...(existing[moduleId] || {}),
      name: moduleName,
      lastVisited: new Date().toISOString(),
      visits: ((existing[moduleId]?.visits) || 0) + 1,
    };
    localStorage.setItem(key, JSON.stringify(existing));

    return () => {
      const elapsed = Math.round((Date.now() - startRef.current) / 1000);
      const data = JSON.parse(localStorage.getItem(key) || "{}");
      data[moduleId] = {
        ...(data[moduleId] || {}),
        name: moduleName,
        totalSeconds: ((data[moduleId]?.totalSeconds) || 0) + elapsed,
        completed: completedRef.current || data[moduleId]?.completed || false,
        abandonedAt: completedRef.current ? null : new Date().toISOString(),
      };
      localStorage.setItem(key, JSON.stringify(data));
    };
  }, [moduleId, moduleName]);

  return {
    markComplete: () => {
      completedRef.current = true;
      const key = `clinicaV2_metrics`;
      const data = JSON.parse(localStorage.getItem(key) || "{}");
      data[moduleId] = {
        ...(data[moduleId] || {}),
        completed: true,
        completedAt: new Date().toISOString(),
      };
      localStorage.setItem(key, JSON.stringify(data));
    },
  };
}
