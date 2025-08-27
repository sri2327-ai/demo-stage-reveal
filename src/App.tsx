
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhyS10AI from "./pages/WhyS10AI";
import HealthSystems from "./pages/HealthSystems";
import PrivatePractice from "./pages/PrivatePractice";
import Diagnoses from "./pages/Diagnoses";
import DiagnosisDetail from "./pages/DiagnosisDetail";
import ChartsTimelines from "./pages/ChartsTimelines";
import ChartTimelineDetail from "./pages/ChartTimelineDetail";
import MedicalPhrases from "./pages/MedicalPhrases";
import MedicalPhraseDetail from "./pages/MedicalPhraseDetail";
import Templates from "./pages/Templates";
import ICD10Codes from "./pages/ICD10Codes";
import ICD10CodeRange from "./pages/ICD10CodeRange";
import Presentation from "./pages/Presentation";
import MedicalAbbreviations from "./pages/MedicalAbbreviations";
import MedicalAbbreviationDetail from "./pages/MedicalAbbreviationDetail";
import MedicalPrefixes from "./pages/MedicalPrefixes";
import MedicalPrefixDetail from "./pages/MedicalPrefixDetail";
import MedicalSuffixes from "./pages/MedicalSuffixes";
import MedicalSuffixDetail from "./pages/MedicalSuffixDetail";
import MedicalRoots from "./pages/MedicalRoots";
import MedicalRootDetail from "./pages/MedicalRootDetail";
import MedicalTerminology from "./pages/MedicalTerminology";
import LabTests from "./pages/LabTests";
import LabTestDetail from "./pages/LabTestDetail";
import MaintainEyeContact from "./pages/MaintainEyeContact";
import CutAdminTasks from "./pages/CutAdminTasks";
import MinimizeEHRTime from "./pages/MinimizeEHRTime";
import ReduceBurnout from "./pages/ReduceBurnout";
import TranscribeAndDictate from "./pages/TranscribeAndDictate";
import PatientCenteredCare from "./pages/PatientCenteredCare";
import IncreaseProfitability from "./pages/IncreaseProfitability";
import { WelcomeForm } from "./components/WelcomeForm";
import SpecialtyHub from "./pages/SpecialtyHub";
import SpecialtyBlogList from "./pages/SpecialtyBlogList";
import SpecialtyBlogPost from "./pages/SpecialtyBlogPost";
import ProductWalkthrough from "./pages/ProductWalkthrough";
import { specialties } from "@/data/specialties";

const RedirectSpecialty = () => {
  const { slug } = useParams();
  return <Navigate to={`/${slug}`} replace />;
};

const RedirectPost = () => {
  const { slug, postSlug } = useParams();
  return <Navigate to={`/${slug}/${postSlug}`} replace />;
};

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
            <Route path="/charts-timelines" element={<ChartsTimelines />} />
            <Route path="/charts-timelines/:id" element={<ChartTimelineDetail />} />
            <Route path="/medical-phrases" element={<MedicalPhrases />} />
            <Route path="/medical-phrases/:id" element={<MedicalPhraseDetail />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/icd10-codes" element={<ICD10Codes />} />
            <Route path="/icd10-codes/:range" element={<ICD10CodeRange />} />
            <Route path="/medical-terminology" element={<MedicalTerminology />} />
            <Route path="/medical-abbreviations" element={<MedicalAbbreviations />} />
            <Route path="/medical-abbreviations/:code" element={<MedicalAbbreviationDetail />} />
            <Route path="/medical-prefixes" element={<MedicalPrefixes />} />
            <Route path="/medical-prefixes/:id" element={<MedicalPrefixDetail />} />
            <Route path="/medical-suffixes" element={<MedicalSuffixes />} />
            <Route path="/medical-suffixes/:id" element={<MedicalSuffixDetail />} />
            <Route path="/medical-roots" element={<MedicalRoots />} />
            <Route path="/medical-roots/:id" element={<MedicalRootDetail />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/lab-tests/:slug" element={<LabTestDetail />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/scribeai" element={<ProductWalkthrough />} />
            <Route path="/maintain-eye-contact" element={<MaintainEyeContact />} />
            <Route path="/cut-admin-tasks" element={<CutAdminTasks />} />
            <Route path="/minimize-ehr-time" element={<MinimizeEHRTime />} />
            <Route path="/reduce-burnout" element={<ReduceBurnout />} />
            <Route path="/transcribe-and-dictate" element={<TranscribeAndDictate />} />
            <Route path="/patient-centered-care" element={<PatientCenteredCare />} />
            <Route path="/increase-profitability" element={<IncreaseProfitability />} />
            <Route path="/specialties" element={<SpecialtyHub />} />
            <Route path="/specialties/:slug" element={<RedirectSpecialty />} />
            <Route path="/specialties/:slug/:postSlug" element={<RedirectPost />} />
            {specialties.map((s) => (
              <Route key={`top-${s.slug}`} path={`/${s.slug}`} element={<SpecialtyBlogList slug={s.slug} />} />
            ))}
            {specialties.flatMap((s) =>
              s.posts.map((p) => (
                <Route
                  key={`top-${s.slug}-${p.slug}`}
                  path={`/${s.slug}/${p.slug}`}
                  element={<SpecialtyBlogPost slug={s.slug} postSlug={p.slug} />}
                />
              ))
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
