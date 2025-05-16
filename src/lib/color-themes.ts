
// Color theme utility for clinical animations
// Provides consistent, subtle color schemes across different clinical workflows

export const clinicalColorThemes = {
  // Patient Engagement - Subtle soft blue theme
  patientEngagement: {
    background: "bg-gradient-to-br from-blue-50/40 to-sky-50/30",
    accent: "bg-blue-100/50",
    border: "border-blue-200/20",
    shadow: "shadow-[0_0_8px_rgba(224,242,254,0.5)]",
    highlight: "bg-blue-50",
    text: "text-slate-700",
    icon: "text-blue-700/60"
  },
  
  // AI Medical Scribe - Subtle soft purple theme
  aiMedicalScribe: {
    background: "bg-gradient-to-br from-purple-50/40 to-fuchsia-50/30",
    accent: "bg-purple-100/50",
    border: "border-purple-200/20",
    shadow: "shadow-[0_0_8px_rgba(237,233,254,0.5)]",
    highlight: "bg-purple-50",
    text: "text-slate-700",
    icon: "text-purple-700/60"
  },
  
  // Admin Tasks - Subtle soft amber theme
  adminTasks: {
    background: "bg-gradient-to-br from-amber-50/40 to-yellow-50/30",
    accent: "bg-amber-100/50",
    border: "border-amber-200/20",
    shadow: "shadow-[0_0_8px_rgba(254,243,199,0.5)]",
    highlight: "bg-amber-50",
    text: "text-slate-700",
    icon: "text-amber-700/60"
  },
  
  // Post-Visit Support - Subtle soft pink theme (as requested)
  postVisitSupport: {
    background: "bg-gradient-to-br from-pink-50/40 to-rose-50/30",
    accent: "bg-pink-100/50",
    border: "border-pink-200/20", 
    shadow: "shadow-[0_0_8px_rgba(252,231,243,0.5)]",
    highlight: "bg-pink-50",
    text: "text-slate-700",
    icon: "text-pink-700/60"
  }
};
