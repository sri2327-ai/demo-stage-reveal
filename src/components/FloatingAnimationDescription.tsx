
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
  const [isOpen, setIsOpen] = useState(true);
  const currentLabel = labels[subStep] || "Description not available";
  const currentTitle = labelTitles[subStep] || `Step ${subStep + 1}`;

  return (
    <motion.div 
      className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-[#387E89]/20 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Top section with title and collapse toggle */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="font-semibold text-lg sm:text-xl text-[#143151]">{currentTitle}</div>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              className="p-2 rounded-full bg-[#387E89]/10 text-[#143151] hover:bg-[#387E89]/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="More information"
            >
              <Info size={isMobile ? 16 : 20} />
            </motion.button>
            <CollapsibleTrigger asChild>
              <motion.button
                className="p-2 rounded-full bg-[#387E89]/10 text-[#143151] hover:bg-[#387E89]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Collapse description" : "Expand description"}
              >
                {isOpen ? (
                  <ChevronUp size={isMobile ? 16 : 20} />
                ) : (
                  <ChevronDown size={isMobile ? 16 : 20} />
                )}
              </motion.button>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent>
          {/* Description text */}
          <motion.p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {currentLabel}
          </motion.p>

          {/* Interactive navigation - Conditionally rendered based on prop */}
          {onElementClick && (
            <div className="mt-4 flex justify-start gap-2 overflow-x-auto">
              {Array.from({ length: maxSteps }, (_, i) => (
                <motion.button
                  key={i}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                              ${subStep === i
                      ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  onClick={() => onElementClick(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to step ${i + 1}`}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};
