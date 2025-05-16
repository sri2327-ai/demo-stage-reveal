
import React from 'react';
import { motion as framerMotion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';

interface AnimationDescriptionProps {
  currentStage: number;
  subStep: number;
  labels: Record<number, string>;
  labelTitles: Record<number, string>;
  maxSteps: number;
  onElementClick: (step: number) => void;
}

export const AnimationDescription: React.FC<AnimationDescriptionProps> = ({
  currentStage,
  subStep,
  labels,
  labelTitles,
  maxSteps,
  onElementClick
}) => {
  const isMobile = useIsMobile();

  return (
    <AnimatePresence mode="wait">
      <framerMotion.div 
        key={`description-${currentStage}-${subStep}`}
        className="w-full px-2 sm:px-3"
        initial={clinicalAnimations.cardAppear.initial}
        animate={clinicalAnimations.cardAppear.animate}
        exit={clinicalAnimations.cardAppear.exit}
        transition={{ duration: accessibilityHelpers.getDuration(0.3) }}
      >
        <framerMotion.div 
          className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-xl shadow-lg mx-auto flex flex-col justify-between"
        >
          {/* Header with title - Improved visibility */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <framerMotion.div 
              className="flex items-center justify-center h-7 w-7 rounded-full bg-white/30"
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
              <framerMotion.span 
                className="inline-flex h-3 w-3 rounded-full bg-green-400"
              />
            </framerMotion.div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl">
              {labelTitles[subStep]}
            </h3>
          </div>
          
          {/* Description text with increased height and better text formatting */}
          <div className="text-sm sm:text-base md:text-lg text-white/95 min-h-[60px] max-h-[100px] overflow-y-auto pr-2 leading-relaxed mb-3">
            {labels[subStep]}
          </div>
          
          {/* Step indicator dots with improved spacing and visibility */}
          <div className="pt-2 flex items-center gap-3 justify-center border-t border-white/20">
            {Array.from({ length: maxSteps }).map((_, step) => (
              <framerMotion.button
                key={step}
                className={`flex items-center justify-center ${
                  subStep === step 
                    ? 'bg-white text-[#143151] w-7 h-7 shadow-glow font-bold'
                    : 'bg-white/40 hover:bg-white/60 w-3.5 h-3.5'
                } rounded-full transition-all duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onElementClick(step);
                }}
                aria-label={`Go to ${labelTitles[step]} step (${step + 1} of ${maxSteps})`}
                title={labelTitles[step]}
              >
                {subStep === step && (
                  <span className="text-xs">{step + 1}</span>
                )}
              </framerMotion.button>
            ))}
          </div>
        </framerMotion.div>
      </framerMotion.div>
    </AnimatePresence>
  );
};
