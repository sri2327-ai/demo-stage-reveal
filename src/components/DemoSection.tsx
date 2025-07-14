
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './DemoStage';
import type { DemoStage as DemoStageType } from '../types/demo';
import { useIsMobile } from '../hooks/use-mobile';
import { MousePointerClick, Play, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { clinicalAnimations } from '../lib/animation-utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface DemoSectionProps {
  isInViewport: boolean;
  hasScrolledToDemo: boolean;
  stages: DemoStageType[];
  currentSection: string;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ 
  isInViewport, 
  hasScrolledToDemo,
  stages,
  currentSection
}) => {
  const isMobile = useIsMobile();
  const [currentStage, setCurrentStage] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  
  // Mock data for step descriptions - in real app, this would come from props or context
  const getStepDescription = (stage: number, step: number) => {
    const descriptions = {
      0: {
        0: "Initial patient interaction begins with voice-activated AI greeting",
        1: "Patient provides symptoms and medical history through natural conversation",
        2: "Real-time transcription captures all spoken information accurately",
        3: "AI processes symptoms and suggests preliminary assessments"
      },
      1: {
        0: "Medical scribe AI begins real-time documentation of the encounter", 
        1: "Automated note generation captures clinical observations",
        2: "Structured medical templates populate with relevant data",
        3: "Final review and verification of generated clinical notes"
      },
      2: {
        0: "Administrative task automation begins processing",
        1: "Insurance verification and billing code assignment",
        2: "Appointment scheduling and follow-up coordination", 
        3: "Regulatory compliance checks and documentation"
      },
      3: {
        0: "Post-visit care instructions are automatically generated",
        1: "Patient education materials are customized and delivered",
        2: "Follow-up reminders and medication alerts are scheduled",
        3: "Care coordination with other providers is initiated"
      }
    };
    return descriptions[stage]?.[step] || "Step description not available";
  };

  const getStepTitle = (stage: number, step: number) => {
    const titles = {
      0: {
        0: "Voice Recognition",
        1: "Symptom Collection", 
        2: "Real-time Transcription",
        3: "AI Assessment"
      },
      1: {
        0: "Live Documentation",
        1: "Note Generation",
        2: "Template Population", 
        3: "Review & Verification"
      },
      2: {
        0: "Task Processing",
        1: "Insurance & Billing",
        2: "Scheduling & Coordination",
        3: "Compliance Checks"
      },
      3: {
        0: "Care Instructions",
        1: "Patient Education",
        2: "Follow-up Planning", 
        3: "Provider Coordination"
      }
    };
    return titles[stage]?.[step] || `Stage ${stage + 1} - Step ${step + 1}`;
  };
  
  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#143151] mb-3 sm:mb-4 md:mb-6 px-2 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              How S10.AI Transforms Your Clinical Workflow
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-3 sm:px-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how S10.AI's CRUSH and BRAVO streamline your clinical workflow, reduce documentation time by 75%, and improve patient engagement.
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center mt-4 sm:mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#387E89]/10 border border-[#387E89]/30 rounded-full text-[#143151] shadow-sm"
                {...clinicalAnimations.clinicalPulse}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  delay: 1
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <Play size={16} className="text-[#387E89] flex-shrink-0" />
                </motion.div>
                
                <span className="text-xs sm:text-sm font-medium max-w-[140px] sm:max-w-[200px] truncate">
                  Tap to explore
                </span>
              </motion.div>
            </motion.div>
          </div>
          
          {isInViewport && (
            <div className="flex justify-center w-full">
              <div className="w-full overflow-hidden">
                <DemoStage 
                  stages={stages} 
                  autoPlay={hasScrolledToDemo} 
                  isDemoSection={true}
                  autoPlayInterval={8000}
                />
              </div>
            </div>
          )}
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden lg:block">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl xl:text-4xl font-bold text-[#143151] mb-4">
              How S10.AI Transforms Your Clinical Workflow
            </h2>
            <p className="text-lg xl:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover how S10.AI's CRUSH and BRAVO streamline your clinical workflow, reduce documentation time by 75%, and improve patient engagement.
            </p>
          </motion.div>

          {isInViewport && (
            <motion.div 
              className="flex gap-8 min-h-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInViewport ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Left Sidebar Navigation */}
              <div className="w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#143151] mb-2">Product Tour</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <MousePointerClick size={16} className="text-[#387E89]" />
                    </motion.div>
                    <span>Click sections to explore</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {stages.map((stage, index) => (
                    <motion.div
                      key={stage.id}
                      className={`group cursor-pointer ${currentStage === index ? 'bg-[#387E89]/5' : ''}`}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => {
                        setCurrentStage(index);
                        setCurrentSubStep(0); // Reset to first step when changing stage
                      }}
                    >
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#387E89]/5 transition-colors">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          currentStage === index 
                            ? 'bg-[#387E89] text-white' 
                            : 'bg-[#387E89]/10 text-[#387E89] group-hover:bg-[#387E89] group-hover:text-white'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <h4 className={`font-medium transition-colors ${
                            currentStage === index 
                              ? 'text-[#387E89]' 
                              : 'text-[#143151] group-hover:text-[#387E89]'
                          }`}>
                            {stage.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                
                {/* Current Step Description */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Collapsible open={isDescriptionOpen} onOpenChange={setIsDescriptionOpen}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-[#143151]">
                        {getStepTitle(currentStage, currentSubStep)}
                      </h4>
                      <CollapsibleTrigger asChild>
                        <motion.button
                          className="p-2 rounded-full bg-[#387E89]/10 text-[#143151] hover:bg-[#387E89]/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={isDescriptionOpen ? "Collapse description" : "Expand description"}
                        >
                          {isDescriptionOpen ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </motion.button>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent>
                      <motion.p 
                        className="text-sm text-gray-700 leading-relaxed mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {getStepDescription(currentStage, currentSubStep)}
                      </motion.p>
                      
                      {/* Step Navigation */}
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 4 }, (_, i) => (
                          <motion.button
                            key={i}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors
                                        ${currentSubStep === i
                                ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            onClick={() => setCurrentSubStep(i)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Go to step ${i + 1}`}
                          >
                            {i + 1}
                          </motion.button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="bg-[#387E89]/5 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm text-[#143151] font-medium mb-2">
                      <Info size={16} className="text-[#387E89]" />
                      Interactive Demo
                    </div>
                    <p className="text-xs text-gray-600">
                      Experience real-time AI capabilities and see how S10.AI transforms clinical workflows
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Demo Content */}
              <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <DemoStage 
                  stages={stages} 
                  autoPlay={hasScrolledToDemo} 
                  isDemoSection={true}
                  autoPlayInterval={8000}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
