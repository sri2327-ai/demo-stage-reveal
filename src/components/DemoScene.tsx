import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FigmaPatientEngagementInteractive } from './FigmaPatientEngagementInteractive';
import { FigmaAIMedicalScribeInteractive } from './FigmaAIMedicalScribeInteractive';
import { FigmaAdminTasksInteractive } from './FigmaAdminTasksInteractive';
import { FigmaPostVisitSupportInteractive } from './FigmaPostVisitSupportInteractive';
import { MouseTrackerProvider } from './ui/cursor';
import { AnimationDescription } from './AnimationDescription';
import type { DemoSceneProps } from '../types/demo';
import { useIsMobile } from '../hooks/use-mobile';

// Labels for each section
const patientEngagementLabels: Record<number, string> = {
  0: "AI agent seamlessly handles patient calls and messages while preserving your clinical tone and practice branding",
  1: "AI agent integrates directly with your existing scheduling system to reduce no-shows by 35%",
  2: "Smart intake forms adjust based on visit type, pre-populating from your EHR to save patient time",
  3: "Customized confirmations match your clinic's communication style and reduce cancellations by 27%",
  4: "AI agent makes personalized confirmation calls with natural conversation flow and automatic EHR updates"
};

const patientEngagementTitles: Record<number, string> = {
  0: "Patient Messaging",
  1: "Appointment Scheduling",
  2: "Smart Intake Forms",
  3: "Automated Reminders",
  4: "AI Appointment Calls"
};

const medicalScribeLabels: Record<number, string> = {
  0: "Secure authentication that meets healthcare compliance standards including HIPAA and HITRUST",
  1: "Saves 10+ minutes per patient by automatically importing schedule data from any popular EHR",
  2: "Specialty-specific templates include proper medical terminology and coding guidelines",
  3: "99.2% accurate multilingual transcription trained on 500,000+ hours of medical conversations",
  4: "Generates complete clinical notes with EHR-ready formatting and proper medical coding",
  5: "One-click synchronization with your preferred EHR system, preserving all custom field mappings"
};

const medicalScribeTitles: Record<number, string> = {
  0: "Secure Authentication",
  1: "EHR Integration",
  2: "Specialty Templates",
  3: "Medical Transcription",
  4: "Note Generation",
  5: "EHR Synchronization"
};

const adminTasksLabels: Record<number, string> = {
  0: "Reduces prescription processing time by 87% while maintaining complete regulatory compliance",
  1: "Ensures patients receive standardized clinical summaries with personalized care instructions",
  2: "Reduces insurance-related delays by 65% through continuous automated verification processes"
};

const adminTasksTitles: Record<number, string> = {
  0: "Prescription Management",
  1: "Clinical Summaries",
  2: "Insurance Verification"
};

const postVisitLabels: Record<number, string> = {
  0: "AI agent increases medication adherence by 40% through personalized reminder scheduling",
  1: "Enables early intervention by AI agent monitoring patient-reported outcomes between visits",
  2: "AI-powered responses to routine questions, verified by clinical research and best practices",
  3: "Reduces readmissions by 32% through automated AI monitoring and threshold alerts",
  4: "AI agent collects and analyzes patient feedback to help improve practice operations and clinical outcomes"
};

const postVisitTitles: Record<number, string> = {
  0: "Medication Management",
  1: "Patient Monitoring",
  2: "AI Support",
  3: "Readmission Prevention",
  4: "Feedback Analysis"
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

  // Helper function to get max steps for current stage
  const getMaxStepsForStage = () => {
    switch (currentStage) {
      case 0: return 5; // Patient Engagement
      case 1: return 6; // AI Medical Scribe
      case 2: return 3; // Admin Tasks
      case 3: return 5; // Post-Visit Support
      default: return 5;
    }
  };

  // Helper function to get labels for current stage
  const getCurrentStageLabels = () => {
    switch (currentStage) {
      case 0: return patientEngagementLabels;
      case 1: return medicalScribeLabels;
      case 2: return adminTasksLabels;
      case 3: return postVisitLabels;
      default: return patientEngagementLabels;
    }
  };

  // Helper function to get title labels for current stage
  const getCurrentStageTitles = () => {
    switch (currentStage) {
      case 0: return patientEngagementTitles;
      case 1: return medicalScribeTitles;
      case 2: return adminTasksTitles;
      case 3: return postVisitTitles;
      default: return patientEngagementTitles;
    }
  };

  // Helper function to determine what to render based on stage
  const renderStageContent = () => {
    switch (currentStage) {
      case 0: // Patient Engagement
        return (
          <div className="w-full h-full flex items-center justify-center">
            <FigmaPatientEngagementInteractive
              subStep={subStep}
              onElementClick={handleElementClick}
              isInteractive={true}
              hideTitle={false}
            />
          </div>
        );
        
      case 1: // AI Medical Scribe - Our flagship product
        return (
          <div className="w-full h-full flex items-center justify-center">
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
          <div className="w-full h-full flex items-center justify-center">
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
          <div className="w-full h-full flex items-center justify-center">
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
    <div className="relative w-full h-full flex flex-col">
      {/* SVG gradient definition for cursor */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#143151" />
            <stop offset="100%" stopColor="#387E89" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Animation content - takes up most of the available space */}
      <div className="flex-1 w-full h-full overflow-hidden flex items-center">
        <MouseTrackerProvider disableCursor={false}>
          {renderStageContent()}
        </MouseTrackerProvider>
      </div>
      
      {/* Description panel - fixed height at bottom */}
      <div className="w-full h-[80px] mt-auto">
        <AnimationDescription 
          currentStage={currentStage}
          subStep={subStep}
          labels={getCurrentStageLabels()}
          labelTitles={getCurrentStageTitles()}
          maxSteps={getMaxStepsForStage()}
          onElementClick={handleElementClick}
        />
      </div>
    </div>
  );
};
