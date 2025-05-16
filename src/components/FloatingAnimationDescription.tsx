
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, ChevronUp, ChevronDown } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

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
  // Default to collapsed on mobile for better visibility of animations
  const [isOpen, setIsOpen] = useState(!isMobile);
  const currentLabel = labels[subStep] || "Description not available";
  const currentTitle = labelTitles[subStep] || `Step ${subStep + 1}`;

  // Handle button click to prevent event propagation and ensure proper navigation
  const handleButtonClick = (step: number, e: React.MouseEvent) => {
    // Prevent event bubbling
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log("FloatingAnimationDescription - Button clicked for step:", step);
    if (onElementClick && step >= 0 && step < maxSteps) {
      // Navigate directly to the clicked step
      onElementClick(step);
      
      // Provide haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(40);
      }
    }
  };

  return (
    <motion.div 
      className="relative bg-white rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 border border-[#387E89]/20 z-50 pointer-events-auto backdrop-blur-sm bg-white/90 w-full max-w-[95%] sm:max-w-[90%] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Top section with title and collapse toggle */}
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div 
              className="bg-[#387E89]/10 rounded-full p-1 sm:p-1.5"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
            >
              <div className="font-semibold text-base sm:text-lg md:text-xl text-[#143151]">{currentTitle}</div>
            </motion.div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <motion.button
              className="p-1.5 sm:p-2 rounded-full bg-[#387E89]/10 text-[#143151] hover:bg-[#387E89]/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="More information"
              onClick={(e) => e.stopPropagation()} // Prevent event propagation
            >
              <Info size={isMobile ? 18 : 20} />
            </motion.button>
            <CollapsibleTrigger asChild>
              <motion.button
                className="p-1.5 sm:p-2 rounded-full bg-[#387E89]/10 text-[#143151] hover:bg-[#387E89]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Collapse description" : "Expand description"}
                onClick={(e) => e.stopPropagation()} // Prevent event propagation
              >
                {isOpen ? (
                  <ChevronUp size={isMobile ? 18 : 20} />
                ) : (
                  <ChevronDown size={isMobile ? 18 : 20} />
                )}
              </motion.button>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent>
          {/* Description text with subtle animation */}
          <motion.p 
            className="text-sm sm:text-base text-gray-700 leading-relaxed"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            {currentLabel}
          </motion.p>

          {/* Interactive navigation - Conditionally rendered based on prop */}
          {onElementClick && (
            <motion.div 
              className="mt-3 sm:mt-4 flex flex-wrap justify-start gap-1.5 sm:gap-2 overflow-x-auto pb-1"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {Array.from({ length: maxSteps }, (_, i) => (
                <motion.button
                  key={i}
                  className={`min-h-[32px] min-w-[32px] sm:min-h-[36px] sm:min-w-[36px] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-sm font-medium transition-colors
                              ${subStep === i
                      ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-md scale-110'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  onClick={(e) => handleButtonClick(i, e)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to step ${i + 1}`}
                  data-clickable="true"
                >
                  {i + 1}
                </motion.button>
              ))}
            </motion.div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};
