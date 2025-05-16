
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

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
            className={`bg-gradient-to-r from-[#143151]/80 to-[#387E89]/70 backdrop-blur-lg text-white 
                      px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-xl border border-white/20 
                      shadow-xl flex flex-col justify-between ${isCollapsed ? 'rounded-b-none' : ''}`}
          >
            {/* Collapse toggle and title row */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <motion.div 
                  className="flex items-center justify-center h-6 w-6 rounded-full bg-white/30"
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
                  <motion.span 
                    className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]"
                  />
                </motion.div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-white">
                  {labelTitles[subStep]}
                </h3>
              </div>
              
              <CollapsibleTrigger asChild>
                <button 
                  className="rounded-full p-1.5 hover:bg-white/30 transition-colors" 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label={isCollapsed ? "Expand description" : "Collapse description"}
                >
                  {isCollapsed ? (
                    <ChevronDown size={18} className="text-white" />
                  ) : (
                    <ChevronUp size={18} className="text-white" />
                  )}
                </button>
              </CollapsibleTrigger>
            </div>
            
            {/* Content */}
            <CollapsibleContent className="overflow-hidden">
              {/* Description text */}
              <div className="text-xs sm:text-sm md:text-base text-white leading-relaxed mt-1 mb-2">
                {labels[subStep]}
              </div>
              
              {/* Step indicator dots with improved spacing and size */}
              <div className="mt-3 flex items-center gap-2.5 justify-center">
                {Array.from({ length: maxSteps }).map((_, step) => (
                  <motion.button
                    key={step}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      subStep === step 
                        ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]' 
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
