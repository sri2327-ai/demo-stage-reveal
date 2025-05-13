
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Info } from 'lucide-react';

interface FigmaAIMedicalScribeInteractiveProps {
  subStep: number;
  transcriptionActive: boolean;
  noteGeneration: boolean;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

// Enhanced clinical descriptions with detailed information optimized for clinicians
const labelDescriptions: Record<string, string> = {
  "Authentication": "Secure HIPAA-compliant login with biometric options and SSO integration that saves 45 seconds per session. Compatible with hospital credential systems and 2FA.",
  "Patient Schedule": "Direct EHR integration displays patient demographics, visit context, and flags high-priority clinical information. Color-coded urgency indicators help prioritize care.",
  "Templates": "Specialty-specific templates with CPT/ICD-10 coding support and personalized sections aligned with your clinical workflow. Includes departmental protocols and billing requirements.",
  "Recording": "Multi-speaker clinical transcription with 98.7% accuracy that captures medical terminology, preserves context, and distinguishes between provider and patient voices.",
  "Generate Documentation": "Creates complete SOAP notes with automatically suggested billing codes based on medical decision-making complexity, saving 8-12 minutes per patient encounter.",
  "EHR Integration": "Bi-directional synchronization with major EHR systems including Epic, Cerner, and Athena with field mapping preservation and custom template support."
};

export const FigmaAIMedicalScribeInteractive: React.FC<FigmaAIMedicalScribeInteractiveProps> = ({
  subStep,
  transcriptionActive,
  noteGeneration,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(0);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto-show label for current subStep
  useEffect(() => {
    const stepLabels = ["Authentication", "Patient Schedule", "Templates", "Recording", "Generate Documentation", "EHR Integration"];
    if (subStep >= 0 && subStep < stepLabels.length) {
      setActiveLabel(stepLabels[subStep]);
    }
    
    console.log("MedicalScribe - Current step changed to:", subStep);
  }, [subStep]);
  
  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInteractive || !onElementClick) return;
      
      // Update last interaction time to pause autoplay
      setLastInteraction(Date.now());
      
      // Arrow key navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        onElementClick((subStep + 1) % 6);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        onElementClick((subStep - 1 + 6) % 6);
        e.preventDefault();
      } else if (e.key >= '1' && e.key <= '6') {
        // Number keys 1-6 for direct navigation
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
    const stepLabels = ["Authentication", "Patient Schedule", "Templates", "Recording", "Generate Documentation", "EHR Integration"];
    const currentStepLabel = stepLabels[subStep];
    return {
      title: currentStepLabel,
      description: labelDescriptions[currentStepLabel]
    };
  };

  // Handle click on specific UI elements (icons) with better event tracking
  const handleIconClick = (step: number) => {
    console.log("MedicalScribe - Icon clicked for step:", step);
    if (onElementClick) {
      // Track interaction time for autoplay management
      setLastInteraction(Date.now());
      // Directly navigate to clicked step
      onElementClick(step);
      
      // Provide haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(40);
      }
    }
  };
  
  // Handle click on the illustration area with better feedback
  const handleIllustrationClick = () => {
    if (onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 6;
      console.log("MedicalScribe - Illustration area clicked, moving to step:", nextStep);
      setLastInteraction(Date.now());
      onElementClick(nextStep);
      
      // Provide minimal haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(20);
      }
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto h-full" 
      role="region" 
      aria-label="AI Medical Scribe Interactive Demo"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1}
    >
      {isInteractive ? (
        <MouseTrackerProvider disableCursor={false}>
          <div className="relative h-full flex flex-col items-center justify-center py-8"> 
            <div 
              className="relative w-full h-full flex-1 flex items-center justify-center cursor-pointer" 
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
              <div className="w-full h-full flex items-center justify-center scale-100 sm:scale-105 md:scale-110 lg:scale-115">
                <FigmaAIMedicalScribeIllustration
                  subStep={subStep}
                  transcriptionActive={transcriptionActive}
                  noteGeneration={noteGeneration}
                  hideTitle={true}
                  onElementClick={handleIconClick}
                  isInteractive={true}
                />
              </div>
            </div>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center py-8"> 
          <div className="relative w-full h-full flex-1 flex items-center justify-center">
            <div className="scale-100 sm:scale-105 md:scale-110 lg:scale-115">
              <FigmaAIMedicalScribeIllustration
                subStep={subStep}
                transcriptionActive={transcriptionActive}
                noteGeneration={noteGeneration}
                hideTitle={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
