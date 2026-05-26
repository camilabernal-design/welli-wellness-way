import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Archetype = 'caidos' | 'premium' | 'sin-aliados';

export interface PainCalculation {
  patientsPerMonth: number;
  lossPercent: number;
  averageTicket: number;
  monthlyLoss: number;
  annualLoss: number;
}

export interface ScheduledFollowup {
  date: string;
  time: string;
  patientName: string | null;
  patientStatus: 'has-name' | 'will-review' | 'flexible';
}

export interface SessionData {
  allyName: string;
  allySpecialty: string;
  archetype: Archetype | null;
  configured: boolean;
  sessionStartTime: number | null;
  painCalculation: PainCalculation | null;
  scheduledFollowup: ScheduledFollowup | null;
}

interface SessionContextType extends SessionData {
  setSessionData: (data: Partial<SessionData>) => void;
  resetSession: () => void;
}

const DEFAULT: SessionData = {
  allyName: "",
  allySpecialty: "",
  archetype: null,
  configured: false,
  sessionStartTime: null,
  painCalculation: null,
  scheduledFollowup: null,
};

const STORAGE_KEY = "express_aliados_session";

const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<SessionData>(() => {
    if (typeof window === "undefined") return DEFAULT;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...DEFAULT, ...JSON.parse(stored) } : DEFAULT;
    } catch {
      return DEFAULT;
    }
  });

  const persist = (next: SessionData) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  };

  const setSessionData = useCallback((patch: Partial<SessionData>) => {
    setData((prev) => {
      const next = { ...prev, ...patch };
      persist(next);
      return next;
    });
  }, []);

  const resetSession = useCallback(() => {
    setData(DEFAULT);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  return (
    <SessionContext.Provider value={{ ...data, setSessionData, resetSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
};

export const archetypeLabel = (a: Archetype | null) => {
  switch (a) {
    case 'caidos': return 'Clínica con presupuestos caídos';
    case 'premium': return 'Clínica premium sin dolor visible';
    case 'sin-aliados': return 'Clínica sin aliados financieros previos';
    default: return 'Sin perfil';
  }
};
