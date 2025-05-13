
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';

interface DemoStageIndicatorProps {
  currentStage: number;
  totalStages: number;
  onStageChange?: (index: number) => void;
  isDemoSection?: boolean;
}

export const DemoStageIndicator: React.FC<DemoStageIndicatorProps> = ({
  currentStage,
  totalStages,
  onStageChange,
  isDemoSection = true
}) => {
  const isMobile = useIsMobile();
  
  // Log props for debugging
  React.useEffect(() => {
    console.log("DemoStageIndicator - isDemoSection:", isDemoSection);
    console.log("DemoStageIndicator - currentStage:", currentStage);
  }, [isDemoSection, currentStage]);

  // This component should only be rendered in the demo section
  // Add enhanced conditional rendering
  if (!isDemoSection) {
    console.log("DemoStageIndicator - Not rendering due to isDemoSection = false");
    return null;
  }
  
  // Define clinical labels for each stage
  const getStageLabel = (index: number): string => {
    const labels = [
      "Patient Engagement",
      "AI Medical Scribe",
      "Administrative Tasks",
      "Post-Visit Support"
    ];
    return labels[index] || `Stage ${index + 1}`;
  };
  
  // Handle stage change with console logging for debugging
  const handleStageClick = (index: number) => {
    console.log("DemoStageIndicator - Stage clicked:", index);
    if (onStageChange) {
      onStageChange(index);
    }
  };

  return (
    <motion.div 
      className={`absolute z-40 left-0 right-0 bottom-6 sm:bottom-5 md:bottom-6 px-3 sm:px-5 ${isMobile ? 'justify-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: accessibilityHelpers.getDuration(0.5), delay: 0.4 }}
      role="tablist"
      aria-label="Clinical demonstration stages"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
        {Array.from({ length: totalStages }).map((_, index) => (
          <motion.button
            key={index}
            className={`relative px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-full border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#387E89] 
              ${currentStage === index 
                ? 'bg-[#143151] border-[#387E89] shadow-md' 
                : 'bg-white/80 border-gray-300 hover:border-[#387E89]/50'
              }`}
            onClick={() => handleStageClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            role="tab"
            aria-selected={currentStage === index}
            aria-label={`View ${getStageLabel(index)} demonstration`}
            aria-controls={`demo-stage-${index}`}
          >
            <span className={`font-medium text-xs sm:text-sm md:text-base whitespace-nowrap ${
              currentStage === index ? 'text-white' : 'text-gray-700'
            }`}>
              {isMobile ? (
                <>
                  <span className="hidden sm:inline">{getStageLabel(index)}</span>
                  <span className="sm:hidden">
                    {index === 0 ? "Engagement" : 
                     index === 1 ? "Scribe" : 
                     index === 2 ? "Admin" : "Follow-up"}
                  </span>
                </>
              ) : (
                getStageLabel(index)
              )}
            </span>
            
            {/* Active indicator dot */}
            {currentStage === index && (
              <motion.div 
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#387E89] rounded-full"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
