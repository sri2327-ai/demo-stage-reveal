
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileAnimationProps } from '../types/demo';
import { ChevronUp, ChevronDown, Circle } from 'lucide-react';
import { clinicalColorThemes } from '../lib/color-themes';

export const MobileStageAnimation: React.FC<MobileAnimationProps> = ({
  currentStage,
  subStep,
  maxSteps,
  onStepChange,
  onStageChange,
  labels,
  labelTitles
}) => {
  // Get the appropriate color theme based on current stage
  const getColorTheme = () => {
    switch (currentStage) {
      case 0: return clinicalColorThemes.patientEngagement;
      case 1: return clinicalColorThemes.aiMedicalScribe;
      case 2: return clinicalColorThemes.adminTasks;
      case 3: return clinicalColorThemes.postVisitSupport;
      default: return clinicalColorThemes.aiMedicalScribe;
    }
  };

  const colorTheme = getColorTheme();
  const currentTitle = labelTitles[subStep] || `Step ${subStep + 1}`;
  const currentDescription = labels[subStep] || "Description not available";

  // Get stage title
  const getStageTitle = () => {
    switch (currentStage) {
      case 0: return "Patient Engagement";
      case 1: return "AI Medical Scribe";
      case 2: return "Admin Tasks";
      case 3: return "Post-Visit Support";
      default: return "Clinical Workflow";
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Stage Title */}
      <motion.div 
        className={`w-full px-4 py-3 ${colorTheme.background} rounded-t-xl border-b ${colorTheme.border} shadow-sm`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-center text-[#143151]">
          {getStageTitle()}
        </h3>
      </motion.div>

      {/* Main Animation Container */}
      <div className={`flex-1 w-full overflow-hidden ${colorTheme.accent} flex flex-col items-center justify-center p-4`}>
        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentStage}-${subStep}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            {/* Step Icon and Number */}
            <div className="mb-6 relative">
              <motion.div 
                className={`w-16 h-16 rounded-full flex items-center justify-center ${colorTheme.highlight} shadow-md border ${colorTheme.border}`}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: ["0px 0px 0px rgba(20, 49, 81, 0.1)", "0px 0px 15px rgba(20, 49, 81, 0.3)", "0px 0px 0px rgba(20, 49, 81, 0.1)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <span className="text-2xl font-bold text-[#143151]">{subStep + 1}</span>
              </motion.div>
              
              {/* Step Navigation Buttons */}
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                <motion.button
                  className={`p-2 rounded-full bg-white shadow-md text-[#143151] border ${colorTheme.border}`}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onStepChange((subStep - 1 + maxSteps) % maxSteps)}
                  aria-label="Previous step"
                >
                  <ChevronUp size={20} />
                </motion.button>
              </div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                <motion.button
                  className={`p-2 rounded-full bg-white shadow-md text-[#143151] border ${colorTheme.border}`}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onStepChange((subStep + 1) % maxSteps)}
                  aria-label="Next step"
                >
                  <ChevronDown size={20} />
                </motion.button>
              </div>
            </div>

            {/* Step Title */}
            <h4 className="text-xl font-semibold text-[#143151] mb-3 text-center">
              {currentTitle}
            </h4>

            {/* Step Description */}
            <p className="text-sm text-center text-gray-700 max-w-xs px-2 mb-8">
              {currentDescription}
            </p>

            {/* Step Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-auto">
              {Array.from({ length: maxSteps }, (_, i) => (
                <motion.button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${subStep === i ? colorTheme.background : 'bg-gray-300'}`}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => onStepChange(i)}
                  aria-label={`Go to step ${i + 1}`}
                  animate={subStep === i ? { scale: [1, 1.2, 1] } : {}}
                  transition={subStep === i ? { duration: 1.5, repeat: Infinity } : {}}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stage Navigation */}
      <div className={`w-full px-4 py-3 ${colorTheme.background} rounded-b-xl border-t ${colorTheme.border} shadow-sm`}>
        <div className="flex items-center justify-between">
          <motion.button
            className="px-4 py-1.5 rounded-full bg-white shadow-sm text-sm font-medium text-[#143151] border border-gray-200"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onStageChange((currentStage - 1 + 4) % 4);
              onStepChange(0);
            }}
            aria-label="Previous workflow"
          >
            Previous
          </motion.button>
          
          <div className="flex gap-1.5">
            {Array.from({ length: 4 }, (_, i) => (
              <motion.button
                key={i}
                className={`w-2 h-2 rounded-full ${currentStage === i ? colorTheme.background : 'bg-gray-300'}`}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  onStageChange(i);
                  onStepChange(0);
                }}
                aria-label={`Go to workflow ${i + 1}`}
              />
            ))}
          </div>
          
          <motion.button
            className="px-4 py-1.5 rounded-full bg-white shadow-sm text-sm font-medium text-[#143151] border border-gray-200"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onStageChange((currentStage + 1) % 4);
              onStepChange(0);
            }}
            aria-label="Next workflow"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};
