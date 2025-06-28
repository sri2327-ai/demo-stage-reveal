
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhyS10AI from "./pages/WhyS10AI";
import HealthSystems from "./pages/HealthSystems";
import PrivatePractice from "./pages/PrivatePractice";
import Diagnoses from "./pages/Diagnoses";
import DiagnosisDetail from "./pages/DiagnosisDetail";
import Templates from "./pages/Templates";
import { WelcomeForm } from "./components/WelcomeForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/demo" replace />} />
          <Route path="/welcome" element={<WelcomeForm />} />
          <Route path="/demo" element={<Index />} />
          <Route path="/why-s10ai" element={<WhyS10AI />} />
          <Route path="/health-systems" element={<HealthSystems />} />
          <Route path="/private-practice" element={<PrivatePractice />} />
          <Route path="/diagnoses" element={<Diagnoses />} />
          <Route path="/diagnoses/:id" element={<DiagnosisDetail />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
