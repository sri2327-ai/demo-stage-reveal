
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileAnimationProps } from '../types/demo';
import { ChevronUp, ChevronDown, Circle, Check } from 'lucide-react';
import { clinicalColorThemes } from '../lib/color-themes';
import { clinicalAnimations } from '../lib/animation-utils';

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

  // Get animation icon based on stage and step
  const getAnimationIcon = () => {
    switch (currentStage) {
      case 0: // Patient Engagement
        switch (subStep) {
          case 0: return <motion.div className="text-blue-500" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></motion.div>;
          case 1: return <motion.div className="text-green-500" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg></motion.div>;
          case 2: return <motion.div className="text-purple-500" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg></motion.div>;
          case 3: return <motion.div className="text-orange-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></motion.div>;
          case 4: return <motion.div className="text-cyan-500" animate={{ rotateY: [0, 180, 360] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></motion.div>;
          default: return <Circle size={40} />;
        }
      case 1: // AI Medical Scribe
        switch (subStep) {
          case 0: return <motion.div className="text-indigo-500" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></motion.div>;
          case 1: return <motion.div className="text-blue-600" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M12 17v-6"/><path d="M9 14h6"/></svg></motion.div>;
          case 2: return <motion.div className="text-green-600" animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 9.5 12 6.5l-3.5 3"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 6.5v8"/></svg></motion.div>;
          case 3: return <motion.div className="text-teal-500" animate={{ scale: [1, 0.9, 1] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg></motion.div>;
          case 4: return <motion.div className="text-purple-600" animate={{ rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M10 2v20"/><path d="m17 12-5-4v8l5-4Z"/></svg></motion.div>;
          case 5: return <motion.div className="text-rose-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M12 12 8.5 8.5"/><path d="M16 16 9 9"/></svg></motion.div>;
          default: return <Circle size={40} />;
        }
      case 2: // Admin Tasks
        switch (subStep) {
          case 0: return <motion.div className="text-red-500" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><path d="m12 8 1 3.5h6"/><path d="m12 8-1 3.5H5"/><path d="m16 16-2-1.5"/><path d="m8 16 2-1.5"/></svg></motion.div>;
          case 1: return <motion.div className="text-amber-500" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg></motion.div>;
          case 2: return <motion.div className="text-emerald-500" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12"/><path d="M4 14h9"/><path d="M17 14h3"/><path d="M17 10h3"/><rect width="18" height="12" x="3" y="6" rx="2"/></svg></motion.div>;
          default: return <Circle size={40} />;
        }
      case 3: // Post-Visit Support
        switch (subStep) {
          case 0: return <motion.div className="text-lime-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.9l4.2 4.2L19 2"/><path d="M17 17H5"/><path d="M17 12H5"/></svg></motion.div>;
          case 1: return <motion.div className="text-sky-500" animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.26c-.87.62-1.92 1-3.04 1.03-3.86.12-7.01-3.92-7.01-3.92s-3.18-4.41.09-8.29C11.12 1.95 16.21 2 16.21 2"/><path d="M17.3 3.1c.19.07.76.36 1.22.9.46.54.87 1.27.97 2.3.12 1.19-.03 2.85-2.24 4.76-1.23 1.06-2.28 1.47-3.09 1.62a5.33 5.33 0 0 1-2.94-.35c-1.06-.5-1.74-1.27-2.21-2.02a6.59 6.59 0 0 1-.73-1.61c-.25-.85-.2-1.2-.19-1.24l.06-.24"/><path d="M6 20c0-1.66 1.43-3 3.2-3h5.6c1.77 0 3.2 1.34 3.2 3v1H6Z"/></svg></motion.div>;
          case 2: return <motion.div className="text-cyan-600" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v4l4-4h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/><circle cx="12" cy="11" r="1"/><circle cx="17" cy="11" r="1"/><circle cx="7" cy="11" r="1"/></svg></motion.div>;
          case 3: return <motion.div className="text-indigo-600" animate={{ scale: [1, 0.9, 1] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.29 7 12 12l8.71-5"/><path d="M12 22V12"/></svg></motion.div>;
          case 4: return <motion.div className="text-violet-500" animate={{ rotate: [0, 15, 0] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></motion.div>;
          default: return <Circle size={40} />;
        }
      default:
        return <Circle size={40} />;
    }
  };

  // Log component rendering and props for debugging
  console.log("MobileStageAnimation rendering:", { currentStage, subStep, maxSteps, labels, labelTitles });

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
                {getAnimationIcon()}
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

            {/* Step Title with animation */}
            <motion.h4 
              className="text-xl font-semibold text-[#143151] mb-3 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {currentTitle}
            </motion.h4>

            {/* Step Description with animation */}
            <motion.p 
              className="text-sm text-center text-gray-700 max-w-xs px-2 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {currentDescription}
            </motion.p>

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
