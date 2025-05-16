
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaPostVisitSupportIllustration } from './FigmaPostVisitSupportIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Info, ArrowRight, Activity, Heart, Bell } from 'lucide-react';

interface FigmaPostVisitSupportInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

// Enhanced clinical descriptions with specific outcomes, metrics and benefits for clinicians
const labelDescriptions: Record<string, string> = {
  "Treatment Adherence": "AI agent sends personalized medication reminders with dosage instructions via patient portal or SMS, improving adherence rates by 40%. Includes side effect monitoring and alerts for missed doses.",
  "Care Plan Monitoring": "Digital care plans with patient-reported outcomes tracking allow early intervention, reducing complications by 32% and hospital readmissions. Collects data between visits on symptoms, vitals, and recovery milestones.",
  "Patient Questions": "24/7 AI-powered responses to FAQs with clinician oversight, reducing call volume by 67% while maintaining high satisfaction. Includes medication guidance, post-procedure instructions, and symptom assessment.",
  "Recovery Tracking": "Automated remote monitoring with threshold alerts enables early intervention, providing real-time vitals and symptom data with clinical decision support algorithms.",
  "Patient Feedback": "AI agent automatically collects and analyzes patient satisfaction data, helping improve clinical outcomes and operational efficiency with structured reporting by service area."
};

export const FigmaPostVisitSupportInteractive: React.FC<FigmaPostVisitSupportInteractiveProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Only hide title on mobile, or if explicitly needed for a specific layout
  const shouldHideTitle = isMobile ? hideTitle : false;
  
  // Always ensure label is displayed based on current step
  useEffect(() => {
    const stepLabels = ["Treatment Adherence", "Care Plan Monitoring", "Patient Questions", "Recovery Tracking", "Patient Feedback"];
    if (subStep >= 0 && subStep < stepLabels.length) {
      setActiveLabel(stepLabels[subStep]);
    }
    console.log("PostVisit - Current step updated to:", subStep);
  }, [subStep]);
  
  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInteractive || !onElementClick) return;
      
      // Update last interaction time to pause autoplay
      setLastInteraction(Date.now());
      
      // Arrow key navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        onElementClick((subStep + 1) % 5);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        onElementClick((subStep - 1 + 5) % 5);
        e.preventDefault();
      } else if (e.key >= '1' && e.key <= '5') {
        // Number keys 1-5 for direct navigation
        onElementClick(parseInt(e.key) - 1);
        e.preventDefault();
      }
    };
    
    if (isInteractive) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInteractive, onElementClick, subStep]);
  
  // Get the current label for either hover state or active step
  const getCurrentLabel = () => {
    if (activeLabel) {
      return {
        title: activeLabel,
        description: labelDescriptions[activeLabel]
      };
    }
    
    // Fallback to current substep
    const stepLabels = ["Treatment Adherence", "Care Plan Monitoring", "Patient Questions", "Recovery Tracking", "Patient Feedback"];
    const currentStepLabel = stepLabels[subStep];
    return {
      title: currentStepLabel,
      description: labelDescriptions[currentStepLabel]
    };
  };

  // Direct navigation to specific step when icon is clicked - enhanced with feedback
  const handleIconClick = (step: number) => {
    console.log("PostVisit - Icon clicked for step:", step);
    if (onElementClick) {
      // Track interaction time for autoplay management
      setLastInteraction(Date.now());
      onElementClick(step);
      
      // Provide haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(40);
      }
    }
  };
  
  // Handle click on the illustration area - for areas not covered by icons
  const handleIllustrationClick = () => {
    if (onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 5;
      console.log("PostVisit - Illustration clicked, moving to step:", nextStep);
      setLastInteraction(Date.now());
      onElementClick(nextStep);
      
      // Provide minimal haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(20);
      }
    }
  };

  // Get theme color based on the current substep
  const getThemeColor = () => {
    const colors = [
      'from-[#0EA5E9] to-[#38BDF8]', // Treatment Adherence - Blue
      'from-[#8B5CF6] to-[#A78BFA]', // Care Plan Monitoring - Purple
      'from-[#F97316] to-[#FB923C]', // Patient Questions - Orange
      'from-[#10B981] to-[#34D399]', // Recovery Tracking - Green
      'from-[#EC4899] to-[#F472B6]'  // Patient Feedback - Pink
    ];
    return colors[subStep] || colors[0];
  };

  // Get icon for the current substep
  const getCurrentIcon = () => {
    switch (subStep) {
      case 0: return <Heart className="text-white" size={18} />;
      case 1: return <Activity className="text-white" size={18} />;
      case 2: return <Info className="text-white" size={18} />;
      case 3: return <Bell className="text-white" size={18} />;
      case 4: return <ArrowRight className="text-white" size={18} />;
      default: return <Info className="text-white" size={18} />;
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center overflow-hidden" 
      role="region"
      aria-label="Post-Visit Support Interactive Demo"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1}
    >
      {isInteractive ? (
        <MouseTrackerProvider disableCursor={false}>
          <div className="w-full h-full flex flex-col items-center justify-center relative"> 
            <div 
              className="w-full h-full flex items-center justify-center" 
              onClick={handleIllustrationClick}
              role="button"
              aria-label="Navigate to next feature"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleIllustrationClick();
                }
              }}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Dynamic gradient background based on current step */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br opacity-20 ${getThemeColor()}`}
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                />
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className={`absolute rounded-full bg-gradient-to-r ${getThemeColor()} opacity-70`}
                      style={{
                        width: Math.random() * 10 + 5,
                        height: Math.random() * 10 + 5,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        filter: 'blur(1px)'
                      }}
                      animate={{
                        y: [Math.random() * 20, -Math.random() * 20],
                        x: [Math.random() * 20, -Math.random() * 20],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </div>
                
                {/* Clinical symbol subtle animations */}
                <motion.div 
                  className="absolute right-[5%] bottom-[10%] text-4xl opacity-10 font-bold"
                  animate={{ 
                    opacity: [0.05, 0.1, 0.05],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                  {subStep === 0 ? '+' : subStep === 1 ? '♡' : subStep === 2 ? '?' : subStep === 3 ? '!' : '✓'}
                </motion.div>
              </div>

              {/* Main illustration with drop shadow for better depth */}
              <div className="relative z-10 scale-100 sm:scale-105 md:scale-110 shadow-2xl rounded-xl overflow-hidden">
                <FigmaPostVisitSupportIllustration
                  subStep={subStep}
                  isInteractive={true}
                  hideTitle={shouldHideTitle}
                  onElementClick={handleIconClick}
                />
                
                {/* Animated highlight overlay for current feature */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${getThemeColor()} mix-blend-soft-light`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              </div>
              
              {/* Feature indicator badge */}
              <motion.div 
                className={`absolute top-2 right-2 bg-gradient-to-r ${getThemeColor()} px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 z-20`}
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-white/30">
                  {getCurrentIcon()}
                </div>
                <span className="text-white text-xs font-medium">Step {subStep + 1}/5</span>
              </motion.div>
            </div>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="w-full h-full flex items-center justify-center relative"> 
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dynamic gradient background for non-interactive mode too */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br opacity-20 ${getThemeColor()}`}
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Reduced number of particles for non-interactive mode */}
            <div className="absolute inset-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className={`absolute rounded-full bg-gradient-to-r ${getThemeColor()} opacity-70`}
                  style={{
                    width: Math.random() * 8 + 4,
                    height: Math.random() * 8 + 4,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: 'blur(1px)'
                  }}
                  animate={{
                    y: [Math.random() * 15, -Math.random() * 15],
                    x: [Math.random() * 15, -Math.random() * 15],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: Math.random() * 10 + 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="relative z-10 scale-100 sm:scale-105 md:scale-110 shadow-xl rounded-xl overflow-hidden">
            <FigmaPostVisitSupportIllustration
              subStep={subStep}
              isInteractive={false}
              hideTitle={shouldHideTitle}
            />
            
            {/* Subtle highlight overlay */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-r ${getThemeColor()} mix-blend-soft-light`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
          
          {/* Only show label if hideTitle is false and we're not in the DemoScene component */}
          {!hideTitle && (
            <motion.div 
              className="absolute bottom-10 left-0 right-0 w-full z-30 px-4 sm:px-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: accessibilityHelpers.getDuration(0.5), delay: 0.3 }}
            >
              <div className={`bg-gradient-to-r ${getThemeColor()} text-white px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3 rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-lg border border-white/20`}>
                <div className="font-bold text-sm sm:text-base md:text-lg truncate">{getCurrentLabel().title}</div>
                <div className="mt-1 text-xs sm:text-sm md:text-base text-white/90 line-clamp-2">{getCurrentLabel().description}</div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

