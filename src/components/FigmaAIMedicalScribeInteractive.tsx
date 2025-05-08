
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';
import { MouseTrackerProvider, Pointer } from './ui/cursor';
import { MousePointer2, Sparkles } from 'lucide-react';

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
  "Generate Documentation": "Creates structured clinical notes with proper ICD-10/CPT/E&M codes based on medical decision making, with full EHR integration"
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
  const [interactionActive, setInteractionActive] = useState(false);
  const [hoverStep, setHoverStep] = useState<number | null>(null);
  
  // Auto-show label for current subStep
  useEffect(() => {
    if (subStep === 0) setActiveLabel("Authentication");
    else if (subStep === 1) setActiveLabel("Patient Schedule");
    else if (subStep === 2) setActiveLabel("Templates");
    else if (subStep === 3) setActiveLabel("Recording");
    else if (subStep === 4) setActiveLabel("Generate Documentation");
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
    const stepLabels = ["Authentication", "Patient Schedule", "Templates", "Recording", "Generate Documentation"];
    const currentStepLabel = stepLabels[subStep];
    return {
      title: currentStepLabel,
      description: labelDescriptions[currentStepLabel]
    };
  };

  // Handle mouse enter for interactivity
  const handleAreaMouseEnter = (name: string, step: number) => {
    setActiveLabel(name);
    setInteractionActive(true);
    setHoverStep(step);
  };

  // Handle mouse leave for interactivity
  const handleAreaMouseLeave = () => {
    // Only clear if we're not on a forced state from subStep
    const stepLabels = ["Authentication", "Patient Schedule", "Templates", "Recording", "Generate Documentation"];
    setActiveLabel(stepLabels[subStep]);
    setInteractionActive(false);
    setHoverStep(null);
  };
  
  const stepAreas = [
    { name: "Authentication", position: "top-[15%] left-[15%] w-[25%] h-[20%]" },
    { name: "Patient Schedule", position: "top-[15%] right-[15%] w-[25%] h-[20%]" },
    { name: "Templates", position: "top-[40%] left-[25%] w-[50%] h-[15%]" },
    { name: "Recording", position: "bottom-[25%] left-[20%] w-[25%] h-[20%]" },
    { name: "Generate Documentation", position: "bottom-[25%] right-[20%] w-[25%] h-[20%]", displayName: "Documentation" }
  ];
  
  return (
    <div className="relative w-full max-w-5xl mx-auto h-full">
      {isInteractive ? (
        <MouseTrackerProvider>
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-[100%] h-[100%] scale-125">
              <FigmaAIMedicalScribeIllustration
                subStep={subStep}
                transcriptionActive={transcriptionActive}
                noteGeneration={noteGeneration}
                hideTitle={hideTitle}
              />
            
              {/* Interactive elements with improved clickability, without visible borders */}
              <div className="absolute inset-0 pointer-events-auto">
                {stepAreas.map((area, index) => (
                  <motion.div 
                    key={area.name}
                    className={`absolute ${area.position} z-20 flex items-center justify-center cursor-pointer rounded-lg`}
                    onClick={() => onElementClick && onElementClick(index)}
                    onMouseEnter={() => handleAreaMouseEnter(area.name, index)}
                    onMouseLeave={handleAreaMouseLeave}
                    aria-label={`${area.name} area`}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(56, 126, 137, 0.08)",
                    }}
                    animate={subStep === index || hoverStep === index ? {
                      scale: 1.08,
                      backgroundColor: "rgba(56, 126, 137, 0.05)",
                    } : {
                      scale: 1,
                      backgroundColor: "rgba(56, 126, 137, 0)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {/* Icon indicator for interactive elements */}
                    {(subStep === index || hoverStep === index) && (
                      <motion.div
                        className="absolute top-2 right-2 text-[#387E89]"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Sparkles size={18} />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced cursor styling with larger, more visible cursor */}
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
                        <filter id="cursor-glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <MousePointer2 size={40} className="stroke-white stroke-[1.5]" style={{
                        fill: "url(#cursor-gradient)"
                      }} filter="url(#cursor-glow)" />
                    </svg>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-[#387E89] mt-1 whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-sm"
                  >
                    Interactive
                  </motion.span>
                </div>
              </Pointer>
            </div>
            
            {/* Clinical context enhanced label positioned to avoid overlap */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={getCurrentLabel().title}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-xl"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: interactionActive ? 1.05 : 1
                }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-xl shadow-xl backdrop-blur-sm mx-4 border border-white/10"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="font-bold text-2xl">{getCurrentLabel().title}</div>
                  <div className="mt-2 text-base">{getCurrentLabel().description}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative scale-125 w-[100%] h-[100%]">
            <FigmaAIMedicalScribeIllustration
              subStep={subStep}
              transcriptionActive={transcriptionActive}
              noteGeneration={noteGeneration}
              hideTitle={hideTitle}
            />
          </div>
          
          {/* Fixed label display for non-interactive mode with consistent styling */}
          {!hideTitle && (
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-xl shadow-xl backdrop-blur-sm mx-4 border border-white/10">
                <div className="font-bold text-2xl">{getCurrentLabel().title}</div>
                <div className="mt-2 text-base">{getCurrentLabel().description}</div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
