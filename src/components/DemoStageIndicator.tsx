import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  // Handle stage change with console logging for debugging
  const handleStageClick = (index: number) => {
    console.log("DemoStageIndicator - Stage clicked:", index);
    if (onStageChange) {
      onStageChange(index);
    }
  };

  // Handle previous/next navigation
  const handlePrevious = () => {
    if (currentStage > 0 && onStageChange) {
      onStageChange(currentStage - 1);
    }
  };
  const handleNext = () => {
    if (currentStage < totalStages - 1 && onStageChange) {
      onStageChange(currentStage + 1);
    }
  };

  // Get stage names
  const getStageNames = () => {
    return ["Patient Engagement", "Medical Scribe", "Admin Tasks", "Post-Visit"];
  };
  return <div className="flex flex-col justify-center w-full px-2 gap-3">
      {isMobile ?
    // Mobile Tab Design with Gradients for mobile
    <Tabs defaultValue={currentStage.toString()} className="w-full" onValueChange={value => handleStageClick(parseInt(value))} value={currentStage.toString()}>
          <TabsList className="w-full bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 border border-[#387E89]/20 sticky top-0 z-10">
            {getStageNames().map((stageName, index) => <TabsTrigger key={index} value={index.toString()} className={currentStage === index ? 'flex-1 text-xs sm:text-sm bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold' : 'flex-1 text-xs sm:text-sm text-[#143151] hover:text-[#387E89] font-medium'}>
                {/* Show shorter names on very small screens */}
                <span className="hidden xs:inline">{stageName}</span>
                <span className="inline xs:hidden">
                  {index === 0 ? "Patient" : index === 1 ? "Scribe" : index === 2 ? "Admin" : "Post"}
                </span>
              </TabsTrigger>)}
          </TabsList>
        </Tabs> :
    // Desktop indicator (dots) with white text when selected
    <div className="flex items-center justify-center gap-3">
          {Array.from({
        length: totalStages
      }).map((_, index) => <motion.button key={index} className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#387E89] focus:ring-offset-2 ${currentStage === index ? 'bg-gradient-to-r from-[#143151] to-[#387E89] shadow-lg w-6 text-white' : 'bg-gray-300 hover:bg-gray-400'}`} onClick={() => handleStageClick(index)} whileHover={{
        scale: 1.2
      }} whileTap={{
        scale: 0.9
      }} aria-label={`Go to stage ${index + 1}`} role="tab" aria-selected={currentStage === index} tabIndex={0} />)}
        </div>}

      {/* Add Previous/Next navigation buttons for mobile */}
      {isMobile}
    </div>;
};