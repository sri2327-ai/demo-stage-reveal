
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronDown, ChevronUp, Activity, Heart, MessageSquare, CheckSquare, BarChart } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { demoStages } from '../data/demoStages';

interface FloatingAnimationDescriptionProps {
  currentStage: number;
  subStep: number;
  labels: Record<number, string>;
  labelTitles: Record<number, string>;
  maxSteps: number;
  onElementClick: (step: number) => void;
}

export const FloatingAnimationDescription: React.FC<FloatingAnimationDescriptionProps> = ({
  currentStage,
  subStep,
  labels,
  labelTitles,
  maxSteps,
  onElementClick
}) => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Get gradient colors based on current stage
  const getStageColors = () => {
    if (currentStage >= 0 && currentStage < demoStages.length) {
      return demoStages[currentStage].themeColors?.primary || 'from-[#143151]/85 to-[#387E89]/80';
    }
    return 'from-[#143151]/85 to-[#387E89]/80';
  };

  // Get icon for the current substep
  const getCurrentIcon = () => {
    // First level - by stage
    if (currentStage === 0) { // Patient Engagement
      return <MessageSquare size={20} className="text-[#38BDF8]" />;
    } else if (currentStage === 1) { // AI Medical Scribe
      return <CheckSquare size={20} className="text-[#A78BFA]" />;
    } else if (currentStage === 2) { // Admin Tasks
      return <BarChart size={20} className="text-[#FB923C]" />;
    } else if (currentStage === 3) { // Post-Visit Support
      // Second level - by substep for Post-Visit Support
      switch (subStep) {
        case 0: return <Heart size={20} className="text-[#F472B6]" />;
        case 1: return <Activity size={20} className="text-[#34D399]" />;
        case 2: return <MessageSquare size={20} className="text-[#38BDF8]" />;
        case 3: return <Activity size={20} className="text-[#34D399]" />;
        case 4: return <BarChart size={20} className="text-[#F472B6]" />;
        default: return <Info size={20} className="text-white" />;
      }
    }
    
    return <Info size={20} className="text-white" />;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={`floating-description-${currentStage}-${subStep}`}
        className="w-full rounded-xl overflow-hidden"
        initial={clinicalAnimations.cardAppear.initial}
        animate={clinicalAnimations.cardAppear.animate}
        exit={clinicalAnimations.cardAppear.exit}
        transition={{ duration: accessibilityHelpers.getDuration(0.3) }}
      >
        <Collapsible
          open={!isCollapsed}
          onOpenChange={() => setIsCollapsed(!isCollapsed)}
          className="w-full"
        >
          <motion.div 
            className={`bg-gradient-to-r ${getStageColors()} backdrop-blur-xl text-white 
                      px-4 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6 rounded-xl border border-white/25 
                      shadow-2xl flex flex-col justify-between ${isCollapsed ? 'rounded-b-none' : ''}`}
          >
            {/* Collapse toggle and title row */}
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-white/30"
                  animate={{ 
                    opacity: [1, 0.7, 1],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                >
                  {getCurrentIcon()}
                </motion.div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-white">
                  {labelTitles[subStep]}
                </h3>
              </div>
              
              <CollapsibleTrigger asChild>
                <button 
                  className="rounded-full p-2 hover:bg-white/30 transition-colors" 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label={isCollapsed ? "Expand description" : "Collapse description"}
                >
                  {isCollapsed ? (
                    <ChevronDown size={20} className="text-white" />
                  ) : (
                    <ChevronUp size={20} className="text-white" />
                  )}
                </button>
              </CollapsibleTrigger>
            </div>
            
            {/* Content */}
            <CollapsibleContent className="overflow-hidden">
              {/* Description text */}
              <div className="text-xs sm:text-sm md:text-base text-white leading-relaxed mt-2 mb-3">
                {labels[subStep]}
              </div>
              
              {/* Step indicator dots with improved spacing and size */}
              <div className="mt-4 flex items-center gap-3 justify-center">
                {Array.from({ length: maxSteps }).map((_, step) => (
                  <motion.button
                    key={step}
                    className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 ${
                      subStep === step 
                        ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onElementClick(step);
                    }}
                    aria-label={`Go to ${labelTitles[step]} step (${step + 1} of ${maxSteps})`}
                    title={labelTitles[step]}
                  />
                ))}
              </div>
            </CollapsibleContent>
          </motion.div>
        </Collapsible>
      </motion.div>
    </AnimatePresence>
  );
};
