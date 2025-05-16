
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
        className="w-full z-30 px-4 sm:px-6 mt-8 sm:mt-10 md:mt-12 relative"
        initial={clinicalAnimations.cardAppear.initial}
        animate={clinicalAnimations.cardAppear.animate}
        exit={clinicalAnimations.cardAppear.exit}
        transition={{ duration: accessibilityHelpers.getDuration(0.5) }}
      >
        <framerMotion.div 
          className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 rounded-xl shadow-xl mx-auto"
        >
          <div className="flex items-center gap-2">
            <framerMotion.span 
              className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400"
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
            <h3 className="font-bold text-base sm:text-lg md:text-xl">
              {labelTitles[subStep]}
            </h3>
          </div>
          
          <div className="mt-1.5 text-sm sm:text-base text-white/90 line-clamp-2">
            {labels[subStep]}
          </div>
          
          <div className="mt-2 text-xs sm:text-sm text-white/70 flex items-center">
            <Info size={isMobile ? 14 : 16} className="mr-1.5 text-white/70" />
            <span className="line-clamp-1">
              {isMobile 
                ? "Tap icons to explore features" 
                : "Click icons to explore each feature"}
            </span>
          </div>
          
          {/* Step indicator */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {Array.from({ length: maxSteps }).map((_, step) => (
              <framerMotion.button
                key={step}
                className={`w-2.5 h-2.5 rounded-full ${subStep === step ? 'bg-white' : 'bg-white/40'}`}
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
