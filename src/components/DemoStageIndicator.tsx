
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
  
  // Handle stage change with console logging for debugging
  const handleStageClick = (index: number) => {
    console.log("DemoStageIndicator - Stage clicked:", index);
    if (onStageChange) {
      onStageChange(index);
    }
  };

  return null; // Remove the entire indicator UI
};
