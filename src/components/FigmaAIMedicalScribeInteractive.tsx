
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';

interface FigmaAIMedicalScribeInteractiveProps {
  subStep: number;
  transcriptionActive: boolean;
  noteGeneration: boolean;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

// Enhanced clinical descriptions with more specific benefits for clinicians
const labelDescriptions: Record<string, string> = {
  "Authentication": "HIPAA-compliant login with SSO integration and biometric options, reduces time spent on credentials by 45 seconds per session",
  "Patient Schedule": "Direct EHR integration shows patient demographics, visit context, and flags high-priority clinical information at a glance",
  "Templates": "Specialty-specific templates with CPT/ICD-10 coding support and custom sections for your unique clinical workflow",
  "Recording": "Multi-speaker clinical transcription with 98.7% accuracy for medical terminology, eliminating the need for manual note-taking",
  "Generate Documentation": "Creates complete SOAP notes with proper billing codes based on medical decision-making complexity, saving 8-12 minutes per patient",
  "EHR Integration": "Seamless synchronization with all major EHR systems including Epic, Cerner, Athena, and AllScripts with field mapping preservation"
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
  const isMobile = useIsMobile();
  
  // Auto-show label for current subStep
  useEffect(() => {
    if (subStep === 0) setActiveLabel("Authentication");
    else if (subStep === 1) setActiveLabel("Patient Schedule");
    else if (subStep === 2) setActiveLabel("Templates");
    else if (subStep === 3) setActiveLabel("Recording");
    else if (subStep === 4) setActiveLabel("Generate Documentation");
    else if (subStep === 5) setActiveLabel("EHR Integration");
    
    console.log("MedicalScribe - Current step changed to:", subStep);
  }, [subStep]);
  
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

  // Handle click on specific UI elements (icons)
  // Go directly to the chosen step rather than cycling through steps
  const handleIconClick = (step: number) => {
    console.log("MedicalScribe - Icon clicked for step:", step);
    if (onElementClick) {
      onElementClick(step);
    }
  };
  
  // Handle click on the illustration area - for areas not covered by icons
  const handleIllustrationClick = () => {
    if (onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 6;
      console.log("MedicalScribe - Illustration area clicked, moving to step:", nextStep);
      onElementClick(nextStep);
    }
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto h-full" 
         role="region" 
         aria-label="AI Medical Scribe Interactive Demo">
      {isInteractive ? (
        <MouseTrackerProvider disableCursor={false}>
          <div className="relative h-full flex flex-col items-center justify-center pt-12 pb-16"> 
            <div 
              className="relative w-full flex-1 flex items-center justify-center cursor-pointer scale-110" 
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
              <FigmaAIMedicalScribeIllustration
                subStep={subStep}
                transcriptionActive={transcriptionActive}
                noteGeneration={noteGeneration}
                hideTitle={true}
                onElementClick={handleIconClick}
                isInteractive={true}
              />
            </div>
            
            {/* Redesigned floating label with improved typography and accessibility */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={getCurrentLabel().title}
                className="absolute bottom-8 left-0 right-0 w-full z-30 px-4 sm:px-6" 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-5 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6 rounded-lg sm:rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-xl border border-white/20"
                  whileHover={{ scale: isMobile ? 1 : 1.02, y: isMobile ? 0 : -2 }}
                >
                  <div className="font-bold text-base sm:text-xl md:text-2xl">{getCurrentLabel().title}</div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">{getCurrentLabel().description}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center pt-12 pb-16"> 
          <div className="relative w-full flex-1 scale-105">
            <FigmaAIMedicalScribeIllustration
              subStep={subStep}
              transcriptionActive={transcriptionActive}
              noteGeneration={noteGeneration}
              hideTitle={true}
            />
          </div>
          
          {/* Only show title tooltip if not hidden - positioned consistently */}
          {!hideTitle && (
            <motion.div 
              className="absolute bottom-4 left-0 right-0 w-full z-30 px-4 sm:px-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-lg sm:rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-xl border border-white/20">
                <div className="font-bold text-base sm:text-xl md:text-2xl">{getCurrentLabel().title}</div>
                <div className="mt-2 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">{getCurrentLabel().description}</div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
