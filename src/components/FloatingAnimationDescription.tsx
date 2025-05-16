
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext } from './ui/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FloatingAnimationDescriptionProps {
  currentStage: number;
  subStep: number;
  labels: Record<number, string>;
  labelTitles: Record<number, string>;
  maxSteps: number;
  onElementClick?: (step: number) => void;
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
  
  // Handle navigation
  const handlePreviousStep = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onElementClick) {
      const prevStep = (subStep - 1 + maxSteps) % maxSteps;
      onElementClick(prevStep);
    }
  };

  const handleNextStep = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onElementClick) {
      const nextStep = (subStep + 1) % maxSteps;
      onElementClick(nextStep);
    }
  };

  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-lg shadow-lg p-4 relative"
      >
        {/* Upper navigation dots */}
        <div className="flex justify-center items-center mb-2">
          {Array.from({ length: maxSteps }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => onElementClick && onElementClick(i)}
              className={`w-2 h-2 mx-1 rounded-full transition-all ${
                i === subStep ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to sub-step ${i + 1}`}
            />
          ))}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg md:text-xl mb-1">
          {labelTitles[subStep] || `Step ${subStep + 1}`}
        </h3>
        
        {/* Description */}
        <p className="text-sm md:text-base text-white/90">
          {labels[subStep] || "Description not available"}
        </p>
        
        {/* Previous/Next buttons with improved positioning and visibility */}
        <div className="flex justify-between items-center mt-3">
          <motion.button
            onClick={handlePreviousStep}
            className="flex items-center justify-center gap-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-md text-white text-sm font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous feature"
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </motion.button>
          
          <div className="text-xs text-white/70">
            {subStep + 1} of {maxSteps}
          </div>
          
          <motion.button
            onClick={handleNextStep}
            className="flex items-center justify-center gap-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-md text-white text-sm font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next feature"
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
