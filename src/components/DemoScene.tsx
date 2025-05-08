
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { 
  MessageCircle, 
  Calendar, 
  FileText, 
  BellRing, 
  PhoneCall, 
  CheckCircle, 
  Clock, 
  User, 
  Database, 
  Shield, 
  ClipboardCheck, 
  ArrowRight,
  Settings, 
  CalendarDays, 
  ClipboardList, 
  Mic, 
  Stethoscope, 
  Server
} from 'lucide-react';
import type { DemoStage } from '../types/demo';

interface DemoSceneProps {
  currentStage: number;
  stages: DemoStage[];
}

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, stages }) => {
  console.log("DemoScene rendering with currentStage:", currentStage);
  
  const isMobile = useIsMobile();
  const [subStep, setSubStep] = useState(0);
  const [aiAction, setAiAction] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 20, y: 20 });
  const [userInteracting, setUserInteracting] = useState(false);
  const [targetedArea, setTargetedArea] = useState<string | null>(null);
  const [isProcessingCall, setIsProcessingCall] = useState(false);
  const [transcriptionActive, setTranscriptionActive] = useState(false);
  const [noteGeneration, setNoteGeneration] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Reset substep when stage changes
  useEffect(() => {
    setSubStep(0);
    setTranscriptionActive(false);
    setNoteGeneration(false);
    setTargetedArea(null);
  }, [currentStage]);

  // Animation for the Patient Engagement and AI Medical Scribe illustrations
  // Automatically advance steps without requiring user interaction
  useEffect(() => {
    console.log("DemoScene effect running with currentStage:", currentStage);
    
    // For Patient Engagement
    if (currentStage === 0) {
      const interval = setInterval(() => {
        setSubStep((prev) => (prev + 1) % 4);
        
        // Randomly simulate call processing
        if (Math.random() > 0.7) {
          setIsProcessingCall(true);
          setTimeout(() => setIsProcessingCall(false), 3000);
        }
      }, 3500);
      return () => clearInterval(interval);
    } 
    // For AI Medical Scribe
    else if (currentStage === 1) {
      const interval = setInterval(() => {
        setSubStep((prev) => {
          const nextStep = (prev + 1) % 5;
          
          // Auto-activate transcription and note generation at appropriate steps
          if (nextStep === 3) {
            setTranscriptionActive(true);
          } else if (nextStep === 4) {
            setNoteGeneration(true);
          }
          
          return nextStep;
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentStage]);

  // Set AI actions based on the current step
  useEffect(() => {
    if (currentStage === 0) {
      const actions = [
        "AI Assistant Processing Messages",
        "AI Checking Calendar Availability",
        "AI Automating Patient Intake",
        "AI Sending Appointment Reminders"
      ];
      setAiAction(actions[subStep]);
    } else if (currentStage === 1) {
      const actions = [
        "AI Authenticating User",
        "AI Syncing Patient Schedule",
        "AI Loading Preferred Templates",
        "AI Transcribing Encounter",
        "AI Generating EHR Documentation"
      ];
      setAiAction(actions[subStep]);
    } else {
      setAiAction(null);
    }
  }, [currentStage, subStep]);

  // Handle simulated mouse movement - for visual effect only
  useEffect(() => {
    if (currentStage === 0 || currentStage === 1) {
      const interval = setInterval(() => {
        const areas = currentStage === 0 
          ? ["Chat", "Calendar", "Intake", "Reminders"] 
          : ["Login", "Patient", "Templates", "StartEncounter", "GenerateNotes"];
        
        // Target the area corresponding to the current substep
        const targetArea = areas[subStep >= areas.length ? 0 : subStep];
        setTargetedArea(targetArea);
        
        // Simulate mouse movement to the targeted area
        const newX = 300 + (Math.random() * 100);
        const newY = 200 + (Math.random() * 100);
        setMousePosition({ x: newX, y: newY });
        
        // Simulate clicks
        setUserInteracting(true);
        setTimeout(() => setUserInteracting(false), 300);
        
      }, 4000); // Move mouse every 4 seconds
      
      return () => clearInterval(interval);
    }
  }, [currentStage, subStep]);

  console.log("Current stage in DemoScene:", currentStage);

  // Choose the appropriate content to display based on currentStage
  const renderStageContent = () => {
    if (currentStage === 0) {
      return (
        <FigmaPatientEngagementIllustration 
          subStep={subStep} 
          cursorPosition={mousePosition}
          isProcessingCall={isProcessingCall} 
        />
      );
    } 
    else if (currentStage === 1) {
      return (
        <FigmaAIMedicalScribeIllustration
          subStep={subStep}
          transcriptionActive={transcriptionActive}
          noteGeneration={noteGeneration}
        />
      );
    }
    // For other stages, show SVG illustrations
    else {
      const stage = stages[currentStage];
      return (
        <motion.div
          key={stage.id}
          className="w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ 
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{ 
            duration: 0.7, 
            ease: "easeOut",
          }}
        >
          <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 overflow-hidden flex items-center justify-center shadow-lg">
            <img 
              src={`/demo/${stage.id}.svg`} 
              alt={stage.title} 
              className="w-full h-full object-contain p-4"
              onError={(e) => {
                console.error(`Error loading image for stage: ${stage.id}`);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
            
            {/* Animated highlight ring */}
            <motion.div
              className="absolute inset-0 border-2 rounded-xl border-blue-400/0"
              animate={{
                borderColor: ["rgba(59,130,246,0)", "rgba(59,130,246,0.3)", "rgba(59,130,246,0)"],
                boxShadow: [
                  "0 0 0px rgba(59,130,246,0)",
                  "0 0 15px rgba(59,130,246,0.3)",
                  "0 0 0px rgba(59,130,246,0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      );
    }
  };

  return (
    <div 
      className="w-full h-full relative bg-white"
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),rgba(255,255,255,0))]" />
      
      {/* Dynamic grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-1/4"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent top-2/4"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-3/4"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent left-1/4"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent left-2/4"
          animate={{ y: ["100%", "-100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent left-3/4"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Central Display Area */}
      <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
        {renderStageContent()}
      </div>
      
      {/* AI agent action label */}
      {(currentStage === 0 || currentStage === 1) && aiAction && (
        <motion.div 
          className="absolute left-8 top-16 md:left-12 md:top-24 z-50 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          key={aiAction} // Force re-render on action change
        >
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-2">
              <div className="text-xs">AI</div>
            </div>
            <span>{aiAction}</span>
          </div>
          <motion.div 
            className="absolute -bottom-1 left-3 w-3 h-3 bg-blue-500 rotate-45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </motion.div>
      )}
      
      {/* Call processing overlay */}
      {isProcessingCall && (
        <motion.div 
          className="absolute top-16 right-16 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mr-2">
              <PhoneCall className="h-3 w-3 text-white" />
            </div>
            <span>AI Answering Patient Call</span>
            <motion.div 
              className="ml-2 h-2 w-2 rounded-full bg-white"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>
        </motion.div>
      )}
      
      {/* Animated UI elements for other stages */}
      {currentStage === 1 && transcriptionActive && (
        <motion.div 
          className="absolute right-4 bottom-4 md:right-1/4 md:bottom-1/4 bg-white p-4 rounded-lg border border-blue-200 text-sm text-gray-800 max-w-xs z-20 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span>Voice Recognition Active</span>
            <span className="flex items-center">
              <motion.span 
                className="h-2 w-2 rounded-full bg-green-500 mr-1"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}  
              />
              Recording
            </span>
          </div>
          <div className="font-mono text-xs text-blue-600 mb-2">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              style={{ display: "inline-block", whiteSpace: "nowrap", overflow: "hidden" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              "Patient reports headache that started three days ago..."
            </motion.span>
          </div>
          <div className="bg-blue-50 p-2 rounded border border-blue-100">
            <p className="text-xs text-blue-700">Generating SOAP Note...</p>
            <div className="h-1 w-full bg-blue-100 rounded-full mt-1 overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }} 
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
