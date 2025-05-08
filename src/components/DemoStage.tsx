
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DemoStageIndicator } from './DemoStageIndicator';
import { DemoScene } from './DemoScene';
import type { DemoStage as DemoStageType } from '../types/demo';
import { Pause, Play } from 'lucide-react';

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

  const handleStageChange = (index: number) => {
    setCurrentStage(index);
  };
  
  // Pause autoplay when user interacts with navigation
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  
  // Toggle pause/play manually
  const togglePause = () => setIsPaused(prev => !prev);

  // Get current stage name
  const getCurrentStageName = () => {
    const stageNames = [
      "Patient Engagement",
      "AI Medical Scribe",
      "Administrative Tasks",
      "Post-Visit Support"
    ];
    return stageNames[currentStage] || "";
  };

  return (
    <div 
      className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden border border-blue-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Stage name header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-3 px-4 z-10">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{getCurrentStageName()}</h3>
          <button 
            onClick={togglePause}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 transition-all"
            aria-label={isPaused ? "Play demo" : "Pause demo"}
          >
            {isPaused ? (
              <Play size={16} />
            ) : (
              <Pause size={16} />
            )}
          </button>
        </div>
      </div>
      
      <div className="absolute inset-0 pt-12">
        <DemoScene
          currentStage={currentStage}
          stages={stages}
        />
      </div>
      
      <div className="absolute bottom-6 left-0 right-0">
        <DemoStageIndicator 
          currentStage={currentStage}
          totalStages={stages.length}
          onStageChange={handleStageChange}
        />
      </div>
      
      {/* Clinical context tooltip */}
      <div className="absolute bottom-16 right-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-white text-[#143151] px-4 py-2 rounded-lg shadow-lg text-sm max-w-xs"
        >
          <p className="font-medium">Click to interact or select a workflow stage</p>
        </motion.div>
      </div>
    </div>
  );
};
