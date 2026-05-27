import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
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
              <Route path="/" element={<Index />} />
              <Route path="/bariatrica-novo" element={<BariatricaLanding />} />
              <Route path="/bariatrica-novo/sesion-1" element={<BariatricaSesion1 />} />
              <Route path="/bariatrica-novo/sesion-2" element={<BariatricaSesion2 />} />
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
