
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';
import { MouseTrackerProvider, Pointer } from './ui/cursor';
import { MousePointer2 } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface FigmaAIMedicalScribeInteractiveProps {
  subStep: number;
  transcriptionActive: boolean;
  noteGeneration: boolean;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

// Enhanced clinical descriptions for each step
const labelDescriptions: Record<string, string> = {
  "Authentication": "Secure clinical login with SSO integration and biometric options, compliant with healthcare security standards",
  "Patient Schedule": "Automatically syncs with your EHR, displaying patient demographics, visit reason, and relevant clinical history",
  "Templates": "Specialty-specific templates pre-configured for your clinical workflow with customizable sections",
  "Recording": "Multi-speaker transcription with medical terminology accuracy exceeding 98%, capturing provider-patient conversations naturally",
  "Generate Documentation": "Creates structured clinical notes with proper ICD-10/CPT/E&M codes based on medical decision making, with full EHR integration",
  "EHR Integration": "One-click synchronization with your preferred EHR system, automatically mapping fields and maintaining workflow continuity"
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

  // Handle click on the illustration area - now the entire area is clickable
  const handleIllustrationClick = () => {
    if (onElementClick) {
      // Cycle through steps on click - now include the new step
      const nextStep = (subStep + 1) % 6;
      onElementClick(nextStep);
    }
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto h-full">
      {isInteractive ? (
        <MouseTrackerProvider>
          <div className="relative h-full flex flex-col items-center justify-center">
            <div 
              className="relative w-full flex-1 flex items-center justify-center cursor-pointer" 
              onClick={handleIllustrationClick}
            >
              <FigmaAIMedicalScribeIllustration
                subStep={subStep}
                transcriptionActive={transcriptionActive}
                noteGeneration={noteGeneration}
                hideTitle={true}
              />
              
              {/* Enhanced cursor styling */}
              <Pointer>
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" className="filter drop-shadow-lg">
                      <defs>
                        <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#143151" />
                          <stop offset="100%" stopColor="#387E89" />
                        </linearGradient>
                      </defs>
                      <MousePointer2 size={40} className="stroke-white stroke-[1.5]" style={{
                        fill: "url(#cursor-gradient)"
                      }} />
                    </svg>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-[#387E89] mt-1 whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-sm"
                  >
                    Click to Explore
                  </motion.span>
                </div>
              </Pointer>
            </div>
            
            {/* Redesigned floating label with enhanced design - now positioned consistently for both desktop and mobile */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={getCurrentLabel().title}
                className="w-full z-30 mt-4 px-4"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-xl mx-auto max-w-xl border border-white/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="font-bold text-xl md:text-2xl">{getCurrentLabel().title}</div>
                  <div className="mt-2 text-sm md:text-base text-white/90">{getCurrentLabel().description}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="relative w-full flex-1">
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
              className="w-full z-30 mt-4 px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-xl mx-auto max-w-xl border border-white/20">
                <div className="font-bold text-xl md:text-2xl">{getCurrentLabel().title}</div>
                <div className="mt-2 text-sm md:text-base text-white/90">{getCurrentLabel().description}</div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
