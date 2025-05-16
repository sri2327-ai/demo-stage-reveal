
// Color theme utility for clinical animations
// Provides consistent, subtle color schemes across different clinical workflows

export const clinicalColorThemes = {
  // Patient Engagement - Soft blue theme with slightly more color
  patientEngagement: {
    background: "bg-gradient-to-br from-blue-50 to-sky-50",
    accent: "bg-blue-100",
    border: "border-blue-200/40",
    shadow: "shadow-[0_0_12px_rgba(224,242,254,0.7)]",
    highlight: "bg-blue-50/80",
    text: "text-blue-900",
    icon: "text-blue-600"
  },
  
  // AI Medical Scribe - Soft purple theme with slightly more color
  aiMedicalScribe: {
    background: "bg-gradient-to-br from-purple-50 to-fuchsia-50",
    accent: "bg-purple-100",
    border: "border-purple-200/40",
    shadow: "shadow-[0_0_12px_rgba(237,233,254,0.7)]",
    highlight: "bg-purple-50/80",
    text: "text-purple-900",
    icon: "text-purple-600"
  },
  
  // Admin Tasks - Soft amber theme with slightly more color
  adminTasks: {
    background: "bg-gradient-to-br from-amber-50 to-yellow-50",
    accent: "bg-amber-100",
    border: "border-amber-200/40",
    shadow: "shadow-[0_0_12px_rgba(254,243,199,0.7)]",
    highlight: "bg-amber-50/80",
    text: "text-amber-900",
    icon: "text-amber-600"
  },
  
  // Post-Visit Support - Soft pink theme with slightly more color
  postVisitSupport: {
    background: "bg-gradient-to-br from-pink-50 to-rose-50",
    accent: "bg-pink-100",
    border: "border-pink-200/40", 
    shadow: "shadow-[0_0_12px_rgba(252,231,243,0.7)]",
    highlight: "bg-pink-50/80",
    text: "text-pink-900",
    icon: "text-pink-600"
  }
};
