import { useEffect, useState } from "react";

export interface BariatricaState {
  pacientesQueFirman?: "1-3" | "4-6" | "7-9" | "10";
  opcionesManejo?: string;
  usaFarmacos?: string;
  respuestaPacientes?: string;
  reconexionSesion2?: string;
  fechaSesion2?: string;
  formatoSesion2?: string;
  compromisoNombre?: string;
  compromisoFecha?: string;
  seguimientoDia?: string;
}

const KEY = "bariatrica-novo-state";

export function useBariatricaState() {
  const [state, setState] = useState<BariatricaState>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const update = (patch: Partial<BariatricaState>) =>
    setState((s) => ({ ...s, ...patch }));

  return { state, update, setState };
}
