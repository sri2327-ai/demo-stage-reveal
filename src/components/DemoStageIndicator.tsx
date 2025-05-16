
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
  if (!isDemoSection) {
    console.log("DemoStageIndicator - Not rendering due to isDemoSection = false");
    return null;
  }
  
  // Get stage names
  const getStageNames = () => {
    return [
      "Patient Engagement",
      "Medical Scribe",
      "Admin Tasks",
      "Post-Visit"
    ];
  };
  
  // Handle stage change with console logging for debugging
  const handleStageChange = (index: number) => {
    console.log("DemoStageIndicator - Stage clicked:", index);
    if (onStageChange) {
      onStageChange(index);
    }
  };

  // Handle previous/next navigation
  const handlePrevious = () => {
    if (currentStage > 0) {
      handleStageChange(currentStage - 1);
    }
  };

  const handleNext = () => {
    if (currentStage < totalStages - 1) {
      handleStageChange(currentStage + 1);
    }
  };

  return (
    <div className="flex flex-col w-full px-2 gap-4">
      {isMobile ? (
        <>
          {/* Mobile Tab Design with Gradients for mobile */}
          <Tabs 
            defaultValue={currentStage.toString()} 
            className="w-full" 
            onValueChange={(value) => handleStageChange(parseInt(value))}
          >
            <TabsList className="w-full bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 border border-[#387E89]/20">
              {getStageNames().map((stageName, index) => (
                <TabsTrigger 
                  key={index} 
                  value={index.toString()} 
                  className={currentStage === index ? 
                    'flex-1 text-xs sm:text-sm bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold shadow-md' : 
                    'flex-1 text-xs sm:text-sm text-[#143151] hover:text-[#387E89] font-medium'}
                  style={currentStage === index ? { textShadow: '0 1px 2px rgba(0,0,0,0.2)' } : {}}
                >
                  {/* Show shorter names on very small screens */}
                  <span className="hidden xs:inline">{stageName}</span>
                  <span className="inline xs:hidden">
                    {index === 0 ? "Patient" : 
                     index === 1 ? "Scribe" : 
                     index === 2 ? "Admin" : "Post"}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {/* Consistent Previous/Next Navigation for Mobile */}
          <div className="flex justify-between w-full mt-2 px-2">
            <button
              onClick={handlePrevious}
              disabled={currentStage === 0}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm transition-all ${
                currentStage === 0 
                  ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500' 
                  : 'bg-gradient-to-r from-[#143151]/90 to-[#387E89]/90 text-white shadow-md hover:shadow-lg active:transform active:scale-95'
              }`}
            >
              <ArrowLeft size={16} />
              <span>Previous</span>
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentStage === totalStages - 1}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm transition-all ${
                currentStage === totalStages - 1 
                  ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500' 
                  : 'bg-gradient-to-r from-[#143151]/90 to-[#387E89]/90 text-white shadow-md hover:shadow-lg active:transform active:scale-95'
              }`}
            >
              <span>Next</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </>
      ) : (
        // Desktop indicator with enhanced dots
        <div className="flex flex-wrap items-center justify-center gap-3">
          {Array.from({ length: totalStages }).map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#387E89] focus:ring-offset-2 ${
                currentStage === index
                  ? 'bg-gradient-to-r from-[#143151] to-[#387E89] shadow-lg w-6 text-white'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => handleStageChange(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to stage ${index + 1}`}
              role="tab"
              aria-selected={currentStage === index}
              tabIndex={0}
            />
          ))}
        </div>
      )}
    </div>
  );
};
