
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhyS10AI from "./pages/WhyS10AI";
import HealthSystems from "./pages/HealthSystems";
import PrivatePractice from "./pages/PrivatePractice";
import Diagnoses from "./pages/Diagnoses";
import DiagnosisDetail from "./pages/DiagnosisDetail";
import Templates from "./pages/Templates";
import ICD10Codes from "./pages/ICD10Codes";
import ICD10CodeRange from "./pages/ICD10CodeRange";
import Presentation from "./pages/Presentation";
import MedicalAbbreviations from "./pages/MedicalAbbreviations";
import MedicalAbbreviationDetail from "./pages/MedicalAbbreviationDetail";
import MaintainEyeContact from "./pages/MaintainEyeContact";
import MinimizeEHRTime from "./pages/MinimizeEHRTime";
import ReduceBurnout from "./pages/ReduceBurnout";
import PatientCenteredCare from "./pages/PatientCenteredCare";
import IncreaseProfitability from "./pages/IncreaseProfitability";
import { WelcomeForm } from "./components/WelcomeForm";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
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
            <Route path="/icd10-codes" element={<ICD10Codes />} />
            <Route path="/icd10-codes/:range" element={<ICD10CodeRange />} />
            <Route path="/medical-abbreviations" element={<MedicalAbbreviations />} />
            <Route path="/medical-abbreviations/:code" element={<MedicalAbbreviationDetail />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/maintain-eye-contact" element={<MaintainEyeContact />} />
            <Route path="/minimize-ehr-time" element={<MinimizeEHRTime />} />
            <Route path="/reduce-burnout" element={<ReduceBurnout />} />
            <Route path="/patient-centered-care" element={<PatientCenteredCare />} />
            <Route path="/increase-profitability" element={<IncreaseProfitability />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
