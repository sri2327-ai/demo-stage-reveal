
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
      boxShadow: "0px 4px 12px rgba(56, 126, 137, 0.35)",
      backgroundColor: "rgba(255,255,255,0.95)" 
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
        "0px 0px 15px rgba(56, 126, 137, 0.4)",
        "0px 0px 0px rgba(56, 126, 137, 0.0)"
      ]
    },
    transition: { 
      duration: 2.5, 
      repeat: Infinity,
      repeatDelay: 1
    }
  },
  
  // Animated gradient background
  gradientShift: {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse"
    },
    style: {
      backgroundSize: '200% 200%'
    }
  },
  
  // Floating animation for elements
  floatingElement: {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  },
  
  // Shimmer effect for loading states or highlights
  shimmer: {
    animate: {
      backgroundPosition: ['-200%', '200%'],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "linear"
      }
    },
    style: {
      backgroundSize: '200% 100%',
      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
      maskImage: 'linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
      maskSize: '100% 100%'
    }
  },
  
  // Clinical Icon animation
  clinicalIconAnimate: {
    animate: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8]
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse"
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
  }),
  
  // Get proper color for specific clinical context
  getClinicalContextColor: (context: string) => {
    const colorMap: Record<string, string> = {
      'alert': '#EF4444',
      'warning': '#F59E0B',
      'success': '#10B981',
      'info': '#3B82F6',
      'neutral': '#6B7280',
      'patient': '#8B5CF6',
      'medication': '#EC4899',
      'lab': '#06B6D4',
      'vitals': '#10B981',
      'billing': '#F97316',
      'scheduling': '#8B5CF6'
    };
    
    return colorMap[context.toLowerCase()] || colorMap.neutral;
  }
};
