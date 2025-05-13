
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FigmaPatientEngagementIllustration } from './FigmaPatientEngagementIllustration';
import { FigmaAIMedicalScribeInteractive } from './FigmaAIMedicalScribeInteractive';
import { FigmaAdminTasksInteractive } from './FigmaAdminTasksInteractive';
import { FigmaPostVisitSupportInteractive } from './FigmaPostVisitSupportInteractive';
import { MouseTrackerProvider } from './ui/cursor';
import type { DemoSceneProps } from '../types/demo';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { motion as framerMotion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

// Labels for each section
const patientEngagementLabels: Record<number, string> = {
  0: "AI agent seamlessly handles patient calls and messages while preserving your clinical tone and practice branding",
  1: "AI agent integrates directly with your existing scheduling system to reduce no-shows by 35%",
  2: "Smart intake forms adjust based on visit type, pre-populating from your EHR to save patient time",
  3: "Customized confirmations match your clinic's communication style and reduce cancellations by 27%",
  4: "AI agent makes personalized confirmation calls with natural conversation flow and automatic EHR updates"
};

const medicalScribeLabels: Record<number, string> = {
  0: "Secure authentication that meets healthcare compliance standards including HIPAA and HITRUST",
  1: "Saves 10+ minutes per patient by automatically importing schedule data from any popular EHR",
  2: "Specialty-specific templates include proper medical terminology and coding guidelines",
  3: "99.2% accurate multilingual transcription trained on 500,000+ hours of medical conversations",
  4: "Generates complete clinical notes with EHR-ready formatting and proper medical coding",
  5: "One-click synchronization with your preferred EHR system, preserving all custom field mappings"
};

const adminTasksLabels: Record<number, string> = {
  0: "Reduces prescription processing time by 87% while maintaining complete regulatory compliance",
  1: "Ensures patients receive standardized clinical summaries with personalized care instructions",
  2: "Reduces insurance-related delays by 65% through continuous automated verification processes"
};

const postVisitLabels: Record<number, string> = {
  0: "AI agent increases medication adherence by 40% through personalized reminder scheduling",
  1: "Enables early intervention by AI agent monitoring patient-reported outcomes between visits",
  2: "AI-powered responses to routine questions, verified by clinical research and best practices",
  3: "Reduces readmissions by 32% through automated AI monitoring and threshold alerts",
  4: "AI agent collects and analyzes patient feedback to help improve practice operations and clinical outcomes"
};

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, stages }) => {
  const [subStep, setSubStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transcriptionActive, setTranscriptionActive] = useState(false);
  const [noteGeneration, setNoteGeneration] = useState(false);
  const [activeLabel, setActiveLabel] = useState('');
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  // Reset states when stage changes
  useEffect(() => {
    setSubStep(0);
    setTranscriptionActive(false);
    setNoteGeneration(false);
    
    // Auto-show first label after stage change
    if (currentStage === 0) {
      setActiveLabel(patientEngagementLabels[0]);
    } else if (currentStage === 1) {
      setActiveLabel(medicalScribeLabels[0]);
    } else if (currentStage === 2) {
      setActiveLabel(adminTasksLabels[0]);
    } else if (currentStage === 3) {
      setActiveLabel(postVisitLabels[0]);
    }
    
    // Clear any existing autoplay interval
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
    
    // Reset isPaused
    setIsPaused(false);
    
    console.log("DemoScene - Stage changed to:", currentStage);
  }, [currentStage]);
  
  // Auto-show label based on current subStep
  useEffect(() => {
    if (currentStage === 0) {
      setActiveLabel(patientEngagementLabels[subStep]);
    } else if (currentStage === 1) {
      setActiveLabel(medicalScribeLabels[subStep]);
    } else if (currentStage === 2) {
      setActiveLabel(adminTasksLabels[subStep]);
    } else if (currentStage === 3) {
      setActiveLabel(postVisitLabels[subStep]);
    }
    
    console.log("DemoScene - SubStep changed to:", subStep);
  }, [subStep, currentStage]);

  // Direct navigation to specific step when icon is clicked
  const handleElementClick = (step: number) => {
    console.log(`DemoScene - Element clicked for stage ${currentStage}, step ${step}`);
    
    // Pause auto-advance when user interacts - for much longer to give time to explore
    setIsPaused(true);
    setSubStep(step);
    
    // For AI Medical Scribe demo, handle special states
    if (currentStage === 1) {
      // Step 3 is recording/transcription
      if (step === 3) {
        setTranscriptionActive(true);
        setNoteGeneration(false);
      }
      // Step 4 is note generation
      else if (step === 4) {
        setNoteGeneration(true);
        setTranscriptionActive(false);
      }
      // Step 5 is EHR integration
      else if (step === 5) {
        setNoteGeneration(false);
        setTranscriptionActive(false);
      }
      else {
        // Reset these states for other steps
        setTranscriptionActive(false);
        setNoteGeneration(false);
      }
    }
  };

  // Auto-advance substeps unless paused
  useEffect(() => {
    // Clean up any existing interval
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
    
    // Only set auto-advance if not paused
    if (!isPaused) {
      autoPlayIntervalRef.current = setInterval(() => {
        if (currentStage === 0) { // For Patient Engagement
          setSubStep((prev) => (prev >= 4 ? 0 : prev + 1));
        } else if (currentStage === 1) { // For AI Medical Scribe
          setSubStep((prev) => {
            const nextStep = prev >= 5 ? 0 : prev + 1;
            
            // Update transcription and note generation states based on step
            if (nextStep === 3) {
              setTranscriptionActive(true);
              setNoteGeneration(false);
            } else if (nextStep === 4) {
              setNoteGeneration(true);
              setTranscriptionActive(false);
            } else if (nextStep === 5) {
              setNoteGeneration(false);
              setTranscriptionActive(false);
            } else {
              setTranscriptionActive(false);
              setNoteGeneration(false);
            }
            
            return nextStep;
          });
        } else if (currentStage === 2) { // For Admin Tasks
          setSubStep((prev) => (prev >= 2 ? 0 : prev + 1));
        } else if (currentStage === 3) { // For Post-Visit Support
          setSubStep((prev) => (prev >= 4 ? 0 : prev + 1));
        }
      }, isMobile ? 8000 : 6000); // Adjusted timing
    }
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [currentStage, isPaused, isMobile]);

  // Helper function to handle hovering over patient engagement steps
  const handlePatientEngagementHover = (step: number | null) => {
    if (step !== null && patientEngagementLabels[step]) {
      setActiveLabel(patientEngagementLabels[step]);
      // Pause auto-advance during hover
      setIsPaused(true);
    }
  };

  // Helper function to determine what to render based on stage
  const renderStageContent = () => {
    switch (currentStage) {
      case 0: // Patient Engagement
        return (
          <MouseTrackerProvider disableCursor={false}>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full flex-1 flex items-center justify-center">
                <div className="transform-none">
                  <FigmaPatientEngagementIllustration
                    subStep={subStep}
                    cursorPosition={{ x: 0, y: 0 }}
                    isProcessingCall={false}
                    onElementClick={handleElementClick}
                    isInteractive={true}
                    onHover={handlePatientEngagementHover}
                    hideTitle={true}
                  />
                </div>
              </div>
              
              {/* Enhanced descriptive label for patient engagement - now matching other sections */}
              <AnimatePresence mode="wait">
                <framerMotion.div 
                  key={patientEngagementLabels[subStep]}
                  className="absolute bottom-12 left-0 right-0 w-full z-30 px-4 sm:px-6"
                  initial={clinicalAnimations.cardAppear.initial}
                  animate={clinicalAnimations.cardAppear.animate}
                  exit={clinicalAnimations.cardAppear.exit}
                  transition={{ duration: accessibilityHelpers.getDuration(0.5) }}
                >
                  <framerMotion.div 
                    className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4 rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl border border-white/20"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <framerMotion.span 
                        className="inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-400"
                        animate={{ 
                          opacity: [1, 0.5, 1],
                          scale: [1, 1.1, 1] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatDelay: 0.5
                        }}
                      />
                      <h3 className="font-bold text-sm sm:text-base md:text-lg">
                        {subStep === 0 ? "Patient Messaging" : 
                         subStep === 1 ? "Appointment Scheduling" : 
                         subStep === 2 ? "Smart Intake Forms" : 
                         subStep === 3 ? "Automated Reminders" :
                         "AI Appointment Calls"}
                      </h3>
                    </div>
                    
                    <div className="mt-1.5 text-xs sm:text-sm md:text-base text-white/90 line-clamp-3 sm:line-clamp-2">
                      {patientEngagementLabels[subStep]}
                    </div>
                    
                    <div className="mt-2 text-xs text-white/80 flex items-center">
                      <Info size={isMobile ? 12 : 14} className="mr-1.5 text-white/70" />
                      <span className="line-clamp-1">
                        {isMobile 
                          ? "Tap icons to explore features" 
                          : "Click icons to explore each feature"}
                      </span>
                    </div>
                    
                    {/* Step indicator */}
                    <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        {[0, 1, 2, 3, 4].map(step => (
                          <framerMotion.button
                            key={step}
                            className={`w-2 h-2 rounded-full ${subStep === step ? 'bg-white' : 'bg-white/40'}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleElementClick(step);
                            }}
                            aria-label={`Go to ${["Patient Messaging", "Appointment Scheduling", "Smart Intake Forms", "Automated Reminders", "AI Appointment Calls"][step]}`}
                          />
                        ))}
                      </div>
                    </div>
                  </framerMotion.div>
                </framerMotion.div>
              </AnimatePresence>
            </div>
          </MouseTrackerProvider>
        );
        
      case 1: // AI Medical Scribe - Our flagship product
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            <FigmaAIMedicalScribeInteractive
              subStep={subStep}
              transcriptionActive={transcriptionActive}
              noteGeneration={noteGeneration}
              onElementClick={handleElementClick}
              isInteractive={true}
              hideTitle={false}
            />
          </div>
        );
        
      case 2: // Admin Tasks
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            <FigmaAdminTasksInteractive
              subStep={subStep}
              onElementClick={handleElementClick}
              isInteractive={true}
              hideTitle={false}
            />
          </div>
        );
        
      case 3: // Post-Visit Support
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            <FigmaPostVisitSupportInteractive
              subStep={subStep}
              onElementClick={handleElementClick}
              isInteractive={true}
              hideTitle={false}
            />
          </div>
        );

      default:
        return <div>Unknown stage</div>;
    }
  };
  
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* SVG gradient definition for cursor */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#143151" />
            <stop offset="100%" stopColor="#387E89" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="w-full h-full flex flex-col items-center justify-center">
        {renderStageContent()}
      </div>
    </div>
  );
};
