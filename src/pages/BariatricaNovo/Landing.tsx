import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WelliLogoFull from "@/components/WelliLogoFull";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <header className="px-6 py-4 border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-950 font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al Training Hub
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="flex flex-col items-center mb-12">
          <WelliLogoFull size="lg" />
          <p className="mt-6 text-sm uppercase tracking-widest text-slate-500">
            En colaboración con
          </p>
          <p className="text-lg font-bold text-indigo-950 mt-1">
            Novo Nordisk Colombia
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-indigo-950 text-center tracking-tight max-w-4xl">
          Clínica de Alta Conversión y Adherencia
        </h1>
        <p className="mt-6 text-2xl text-slate-600 text-center max-w-2xl">
          Programa de capacitación especializada
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {[
            {
              to: "/bariatrica-novo/sesion-1",
              title: "Sesión 1",
              subtitle: "Mentalidad y método",
              duration: "55 min",
            },
            {
              to: "/bariatrica-novo/sesion-2",
              title: "Sesión 2",
              subtitle: "Aplicación en su consulta",
              duration: "90–120 min",
            },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-welli-yellow p-10 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 uppercase tracking-wider">
                <Clock className="h-4 w-4" /> {c.duration}
              </div>
              <h2 className="mt-4 text-3xl font-bold text-indigo-950">
                {c.title} — {c.subtitle}
              </h2>
              <Button className="mt-8 bg-welli-yellow text-indigo-950 hover:bg-welli-yellow/90 text-lg font-semibold h-12 px-8 gap-2">
                Entrar <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-6 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Welli — Financia tu Bienestar
      </footer>
    </div>
  );
};

export default Landing;
