
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
        className="w-full h-full px-2 sm:px-3"
        initial={clinicalAnimations.cardAppear.initial}
        animate={clinicalAnimations.cardAppear.animate}
        exit={clinicalAnimations.cardAppear.exit}
        transition={{ duration: accessibilityHelpers.getDuration(0.3) }}
      >
        <framerMotion.div 
          className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-xl shadow-xl mx-auto h-full flex flex-col justify-center"
        >
          <div className="flex items-center gap-2">
            <framerMotion.span 
              className="inline-flex h-2 w-2 rounded-full bg-green-400"
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
            <h3 className="font-bold text-sm sm:text-base md:text-lg truncate">
              {labelTitles[subStep]}
            </h3>
          </div>
          
          <div className="mt-1 text-xs sm:text-sm text-white/90 line-clamp-1 sm:line-clamp-2">
            {labels[subStep]}
          </div>
          
          {/* Step indicator dots */}
          <div className="mt-1.5 flex items-center gap-1.5 justify-center">
            {Array.from({ length: maxSteps }).map((_, step) => (
              <framerMotion.button
                key={step}
                className={`w-2 h-2 rounded-full ${subStep === step ? 'bg-white' : 'bg-white/40'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onElementClick(step);
                }}
                aria-label={`Go to step ${step + 1}`}
              />
            ))}
          </div>
        </framerMotion.div>
      </framerMotion.div>
    </AnimatePresence>
  );
};
