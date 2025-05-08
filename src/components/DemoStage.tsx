
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DemoStageIndicator } from './DemoStageIndicator';
import { DemoScene } from './DemoScene';
import type { DemoStage as DemoStageType } from '../types/demo';

interface DemoStageProps {
  stages: DemoStageType[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const DemoStage: React.FC<DemoStageProps> = ({ 
  stages, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev === stages.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);
    
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, stages.length, isPaused]);

  const handleNext = () => {
    setCurrentStage((prev) => (prev === stages.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setCurrentStage((prev) => (prev === 0 ? stages.length - 1 : prev - 1));
  };

  const handleStageChange = (index: number) => {
    setCurrentStage(index);
  };
  
  // Pause autoplay when user interacts with navigation
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div 
      className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0">
        <DemoScene
          currentStage={currentStage}
          stages={stages}
        />
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex flex-col">
        <DemoStageIndicator 
          currentStage={currentStage}
          totalStages={stages.length}
          onStageChange={handleStageChange}
        />

        <div className="flex justify-center gap-4 mt-4">
          <motion.button
            className="px-4 py-2 bg-white border border-blue-300 rounded-lg shadow text-blue-700 hover:bg-blue-50 transition-colors"
            onClick={handlePrev}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous stage"
          >
            Previous
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-blue-600 rounded-lg shadow text-white hover:bg-blue-700 transition-colors"
            onClick={handleNext}
            whileTap={{ scale: 0.95 }}
            aria-label="Next stage"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};
