
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Stethoscope, FileText, ClipboardList, UserRound } from 'lucide-react';

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
      "AI Medical Scribe (CRUSH)",
      "Administrative Tasks",
      "Post-Visit Support"
    ];
  };
  
  // Get stage icons for better visual recognition
  const getStageIcon = (index: number) => {
    switch(index) {
      case 0: return <UserRound size={isMobile ? 16 : 18} />;
      case 1: return <Stethoscope size={isMobile ? 16 : 18} />;
      case 2: return <ClipboardList size={isMobile ? 16 : 18} />;
      case 3: return <FileText size={isMobile ? 16 : 18} />;
      default: return null;
    }
  };
  
  // Handle stage change with console logging for debugging
  const handleStageClick = (index: number) => {
    console.log("DemoStageIndicator - Stage clicked:", index);
    if (onStageChange) {
      onStageChange(index);
    }
  };

  return (
    <div className="flex justify-center w-full px-2">
      {isMobile ? (
        // Mobile Tab Design with Gradients for mobile - improved for clinical users
        <Tabs 
          defaultValue={currentStage.toString()} 
          className="w-full" 
          onValueChange={(value) => handleStageClick(parseInt(value))}
        >
          <TabsList className="w-full bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 border border-[#387E89]/20 p-1">
            {getStageNames().map((stageName, index) => (
              <TabsTrigger 
                key={index} 
                value={index.toString()} 
                className={`
                  flex-1 text-xs sm:text-sm transition-all duration-200
                  ${currentStage === index 
                    ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold' 
                    : 'text-[#143151] hover:text-[#387E89] hover:bg-[#387E89]/10 font-medium'}
                  ${index === 1 ? 'border-2 border-[#387E89]/40 border-dashed' : ''}
                `}
              >
                <div className="flex flex-col items-center justify-center gap-1 py-0.5">
                  {getStageIcon(index)}
                  {/* Show shorter names on very small screens */}
                  <span className="hidden xs:inline whitespace-normal text-center text-[10px] sm:text-xs">
                    {stageName}
                  </span>
                  <span className="inline xs:hidden">
                    {index === 0 ? "Patient" : 
                     index === 1 ? "CRUSH" : 
                     index === 2 ? "Admin" : "Post"}
                  </span>
                  {index === 1 && (
                    <span className="bg-[#387E89] text-white text-[9px] px-1.5 py-0.5 rounded-full absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                      S10
                    </span>
                  )}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      ) : (
        // Desktop indicator with improved clinical focus
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-4 mb-1">
            {getStageNames().map((name, index) => (
              <motion.button
                key={index}
                onClick={() => handleStageClick(index)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-md transition-all
                  ${currentStage === index 
                    ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200 text-[#143151]'}
                  ${index === 1 ? 'border-2 border-[#387E89] border-dashed' : ''}
                  relative
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View ${name} workflow`}
                role="tab"
                aria-selected={currentStage === index}
              >
                {getStageIcon(index)}
                <span className="font-medium text-sm">{name}</span>
                
                {index === 1 && (
                  <span className="bg-[#387E89] text-white text-xs px-2 py-0.5 rounded-full absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                    S10.AI Product
                  </span>
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Visual indicator dots for progress */}
          <div className="flex items-center justify-center gap-2 mt-1">
            {Array.from({ length: totalStages }).map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentStage === index
                    ? 'bg-gradient-to-r from-[#143151] to-[#387E89] scale-125'
                    : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
