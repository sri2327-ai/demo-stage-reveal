
// Animation utility for consistent transitions across clinical UI components
export const clinicalAnimations = {
  // For card and tooltip animations - smooth and professional
  cardAppear: {
    initial: { opacity: 0, y: 20, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.96 },
    transition: { duration: 0.4, ease: "easeOut" }
  },
  
  // Fast micro-interactions for buttons and clickable elements
  microInteraction: {
    whileHover: { scale: 1.04, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, type: "spring", stiffness: 400 }
  },
  
  // Icon highlight for better navigation visibility
  iconHighlight: {
    initial: { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
    whileHover: { 
      scale: 1.08, 
      boxShadow: "0px 4px 12px rgba(56, 126, 137, 0.25)",
      backgroundColor: "rgba(255,255,255,0.9)" 
    },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  },
  
  // Page transition animation for main sections
  pageTransition: {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.92 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  // Content reveal for sequential information display
  contentReveal: {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { staggerChildren: 0.1 }
  },
  
  // Attention-grabbing pulse for important clinical data
  clinicalPulse: {
    animate: {
      scale: [1, 1.03, 1],
      boxShadow: [
        "0px 0px 0px rgba(56, 126, 137, 0.0)",
        "0px 0px 15px rgba(56, 126, 137, 0.3)",
        "0px 0px 0px rgba(56, 126, 137, 0.0)"
      ]
    },
    transition: { 
      duration: 2.5, 
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

// Helper functions for accessibility and timing
export const accessibilityHelpers = {
  // Check for reduced motion preference
  prefersReducedMotion: typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false,
    
  // Get adjusted animation duration based on motion preferences
  getDuration: (standardDuration: number) => {
    if (typeof window !== 'undefined' && 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return Math.min(standardDuration, 0.1); // Much faster for reduced motion
    }
    return standardDuration;
  },
  
  // Utility for transitioning focus states accessibly
  getFocusAnimationProps: (isFocused: boolean) => ({
    animate: {
      outline: isFocused ? "2px solid rgba(56, 126, 137, 0.6)" : "none",
      boxShadow: isFocused 
        ? "0px 0px 0px 2px rgba(56, 126, 137, 0.3)" 
        : "0px 0px 0px rgba(0,0,0,0)"
    },
    transition: { duration: 0.2 }
  })
};
