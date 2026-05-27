import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const HighlightBox = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("rounded-2xl bg-welli-yellow/30 border-2 border-welli-yellow p-8 md:p-10 text-indigo-950", className)}>
    {children}
  </div>
);

export const WarningBox = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("rounded-2xl bg-red-50 border-2 border-red-300 p-8 md:p-10 text-indigo-950", className)}>
    {children}
  </div>
);

export const PracticeBox = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("rounded-2xl bg-emerald-50 border-2 border-emerald-400 p-8 md:p-10 text-indigo-950", className)}>
    {children}
  </div>
);

export const SoftBox = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("rounded-2xl bg-slate-50 border border-slate-200 p-8 md:p-10 text-indigo-950", className)}>
    {children}
  </div>
);
