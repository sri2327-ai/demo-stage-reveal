
// Color theme utility for clinical animations
// Provides consistent, subtle color schemes across different clinical workflows

export const clinicalColorThemes = {
  // Patient Engagement - Soft blue gradient theme
  patientEngagement: {
    background: "bg-gradient-to-br from-blue-50 to-sky-50",
    accent: "bg-gradient-to-r from-blue-100 to-sky-100",
    border: "border-blue-200/40",
    shadow: "shadow-[0_0_12px_rgba(224,242,254,0.7)]",
    highlight: "bg-blue-50/80",
    text: "text-blue-900",
    icon: "text-blue-600",
    buttonGradient: "bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#143151]/90 hover:to-[#387E89]/90"
  },
  
  // AI Medical Scribe - Soft blue gradient theme
  aiMedicalScribe: {
    background: "bg-gradient-to-br from-blue-50 to-sky-50",
    accent: "bg-gradient-to-r from-blue-100 to-sky-100",
    border: "border-blue-200/40",
    shadow: "shadow-[0_0_12px_rgba(224,242,254,0.7)]",
    highlight: "bg-blue-50/80",
    text: "text-blue-900",
    icon: "text-blue-600",
    buttonGradient: "bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#143151]/90 hover:to-[#387E89]/90"
  },
  
  // Admin Tasks - Soft blue gradient theme
  adminTasks: {
    background: "bg-gradient-to-br from-blue-50 to-sky-50",
    accent: "bg-gradient-to-r from-blue-100 to-sky-100",
    border: "border-blue-200/40",
    shadow: "shadow-[0_0_12px_rgba(224,242,254,0.7)]",
    highlight: "bg-blue-50/80",
    text: "text-blue-900",
    icon: "text-blue-600",
    buttonGradient: "bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#143151]/90 hover:to-[#387E89]/90"
  },
  
  // Post-Visit Support - Soft blue gradient theme
  postVisitSupport: {
    background: "bg-gradient-to-br from-blue-50 to-sky-50",
    accent: "bg-gradient-to-r from-blue-100 to-sky-100", 
    border: "border-blue-200/40", 
    shadow: "shadow-[0_0_12px_rgba(224,242,254,0.7)]",
    highlight: "bg-blue-50/80",
    text: "text-blue-900",
    icon: "text-blue-600",
    buttonGradient: "bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#143151]/90 hover:to-[#387E89]/90"
  },
  
  // Mobile gradients for buttons and backgrounds
  mobileGradients: {
    primaryButton: "bg-gradient-to-r from-[#143151] to-[#387E89]",
    secondaryButton: "bg-gradient-to-r from-[#ffffff] to-[#f7fafb] border border-[#387E89]/30",
    activeTab: "bg-gradient-to-r from-[#143151] to-[#387E89] text-white",
    inactiveTab: "bg-gradient-to-r from-[#ffffff] to-[#f7fafb] text-[#143151]",
    card: "bg-gradient-to-br from-white to-[#f7fafb]",
    highlight: "bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10"
  }
};
