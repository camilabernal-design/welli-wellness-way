import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Seo from "./components/Seo";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BariatricaLanding from "./pages/BariatricaNovo/Landing";
import BariatricaSesion1 from "./pages/BariatricaNovo/Sesion1";
import BariatricaSesion2 from "./pages/BariatricaNovo/Sesion2";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already authenticated on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('wellness-auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('wellness-auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('wellness-auth');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ProtectedRoute isAuthenticated={isAuthenticated} onLogin={handleLogin}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Seo
                      title="Clínica de Ventas Welli | Entrenamiento para Aliados"
                      description="Entrenamiento interactivo Welli: aprende a vender cuotas de bienestar en lugar de precios totales y activa más pacientes en tu clínica."
                      path="/"
                    />
                    <Index />
                  </>
                }
              />
              <Route
                path="/bariatrica-novo"
                element={
                  <>
                    <Seo
                      title="Welli + Novo Nordisk: Clínica Bariátrica | Welli"
                      description="Programa de capacitación Welli y Novo Nordisk para clínicas bariátricas: dos sesiones guiadas de alta conversión y adherencia."
                      path="/bariatrica-novo"
                    />
                    <BariatricaLanding />
                  </>
                }
              />
              <Route
                path="/bariatrica-novo/sesion-1"
                element={
                  <>
                    <Seo
                      title="Sesión 1: Corta consultiva | Clínica Bariátrica Welli"
                      description="Sesión 1 de la clínica bariátrica Welli + Novo Nordisk: mentalidad consultiva, diagnóstico del paciente y conversación de valor en 25 minutos."
                      path="/bariatrica-novo/sesion-1"
                    />
                    <BariatricaSesion1 />
                  </>
                }
              />
              <Route
                path="/bariatrica-novo/sesion-2"
                element={
                  <>
                    <Seo
                      title="Sesión 2: Método completo | Clínica Bariátrica Welli"
                      description="Sesión 2 de la clínica bariátrica Welli + Novo Nordisk: método completo de conversión, simulador de cuota y práctica con perfiles reales."
                      path="/bariatrica-novo/sesion-2"
                    />
                    <BariatricaSesion2 />
                  </>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProtectedRoute>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
