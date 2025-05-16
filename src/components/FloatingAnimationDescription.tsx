
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
            className={`bg-gradient-to-r from-[#8E9196]/70 to-[#75869E]/60 backdrop-blur-md text-white 
                      px-3 py-3 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-xl border border-white/10 
                      shadow-lg flex flex-col justify-between ${isCollapsed ? 'rounded-b-none' : ''}`}
          >
            {/* Collapse toggle and title row */}
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <motion.div 
                  className="flex items-center justify-center h-6 w-6 rounded-full bg-white/20"
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
                    className="inline-flex h-2 w-2 rounded-full bg-green-400"
                  />
                </motion.div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg">
                  {labelTitles[subStep]}
                </h3>
              </div>
              
              <CollapsibleTrigger asChild>
                <button 
                  className="rounded-full p-1 hover:bg-white/20 transition-colors" 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label={isCollapsed ? "Expand description" : "Collapse description"}
                >
                  {isCollapsed ? (
                    <ChevronDown size={16} className="text-white/80" />
                  ) : (
                    <ChevronUp size={16} className="text-white/80" />
                  )}
                </button>
              </CollapsibleTrigger>
            </div>
            
            {/* Content */}
            <CollapsibleContent>
              {/* Description text */}
              <div className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed">
                {labels[subStep]}
              </div>
              
              {/* Step indicator dots with improved spacing and size */}
              <div className="mt-4 flex items-center gap-2 justify-center">
                {Array.from({ length: maxSteps }).map((_, step) => (
                  <motion.button
                    key={step}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      subStep === step ? 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.5)]' : 'bg-white/40 hover:bg-white/60'
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
