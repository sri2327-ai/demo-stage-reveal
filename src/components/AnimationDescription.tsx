
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
        className="w-full z-30 px-4 sm:px-6 absolute bottom-16"
        initial={clinicalAnimations.cardAppear.initial}
        animate={clinicalAnimations.cardAppear.animate}
        exit={clinicalAnimations.cardAppear.exit}
        transition={{ duration: accessibilityHelpers.getDuration(0.5) }}
      >
        <framerMotion.div 
          className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4 rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl border border-white/20"
        >
          <div className="flex items-center gap-2 mb-1">
            <framerMotion.span 
              className="inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-400"
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
            <h3 className="font-bold text-sm sm:text-base md:text-lg">
              {labelTitles[subStep]}
            </h3>
          </div>
          
          <div className="mt-1.5 text-xs sm:text-sm md:text-base text-white/90 line-clamp-3 sm:line-clamp-2">
            {labels[subStep]}
          </div>
          
          <div className="mt-2 text-xs text-white/80 flex items-center">
            <Info size={isMobile ? 12 : 14} className="mr-1.5 text-white/70" />
            <span className="line-clamp-1">
              {isMobile 
                ? "Tap icons to explore features" 
                : "Click icons to explore each feature"}
            </span>
          </div>
          
          {/* Step indicator */}
          <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
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
          </div>
        </framerMotion.div>
      </framerMotion.div>
    </AnimatePresence>
  );
};
