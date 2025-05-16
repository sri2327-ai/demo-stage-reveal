
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaPostVisitSupportIllustration } from './FigmaPostVisitSupportIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { clinicalColorThemes } from '../lib/color-themes';
import { Info, ArrowRight } from 'lucide-react';

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

  // Direct navigation to specific step when icon is clicked - enhanced with validation
  const handleIconClick = (step: number) => {
    console.log("PostVisit - Icon clicked for step:", step);
    if (onElementClick && step >= 0 && step < 5) {
      // Validate step is within bounds
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

  // Get theme colors for post-visit support
  const colorTheme = clinicalColorThemes.postVisitSupport;
  
  return (
    <div 
      ref={containerRef}
      className={`w-full h-full flex items-center justify-center ${colorTheme.background} rounded-xl ${colorTheme.border} ${colorTheme.shadow} p-3`}
      role="region"
      aria-label="Post-Visit Support Interactive Demo"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1}
    >
      {isInteractive ? (
        <MouseTrackerProvider disableCursor={false}>
          <div className="w-full h-full flex items-center justify-center"> 
            <div 
              className={`w-full h-full flex items-center justify-center ${colorTheme.highlight} rounded-lg`}
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
              <FigmaPostVisitSupportIllustration
                subStep={subStep}
                isInteractive={true}
                hideTitle={shouldHideTitle}
                onElementClick={handleIconClick}
              />
            </div>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="w-full h-full flex items-center justify-center"> 
          <div className={`w-full h-full flex items-center justify-center ${colorTheme.highlight} rounded-lg`}>
            <FigmaPostVisitSupportIllustration
              subStep={subStep}
              isInteractive={false}
              hideTitle={shouldHideTitle}
            />
          </div>
        </div>
      )}
    </div>
  );
};
