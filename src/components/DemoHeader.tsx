
import React from 'react';
import { Pause, Play } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useIsMobile } from '../hooks/use-mobile';

interface DemoHeaderProps {
  currentStage: number;
  isPaused: boolean;
  togglePause: (e: React.MouseEvent) => void;
  handleStageChange: (index: number) => void;
}

export const DemoHeader: React.FC<DemoHeaderProps> = ({
  currentStage,
  isPaused,
  togglePause,
  handleStageChange
}) => {
  const isMobile = useIsMobile();
  
  // Stage descriptions for tabs
  const stageDescriptions = [{
    title: "Patient Engagement",
    description: "AI patient communication hub that preserves your clinical voice and reduces administrative burden"
  }, {
    title: "AI Medical Scribe",
    description: "Reduce documentation time by 75% with AI-powered medical scribe that integrates with your EHR"
  }, {
    title: "Clinical Admin",
    description: "Automate administrative workflows to prevent revenue delays and reduce staff workload"
  }, {
    title: "Post-Visit Care",
    description: "Improve outcomes with automated follow-up and continuous monitoring between visits"
  }];

  // Determine ARIA label for play/pause button
  const getPlayPauseAriaLabel = () => {
    return isPaused ? "Play demo slideshow" : "Pause demo slideshow";
  };
  
  return (
    <div 
      className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-3 px-4 sm:py-4 sm:px-6 border-b border-white/10 shadow-lg"
    >
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
            AI Clinical Workflows Demo
          </h3>
          
          <button 
            onClick={togglePause} 
            className="bg-white/30 hover:bg-white/40 rounded-full p-2 sm:p-2.5 md:p-3 transition-all shadow-lg border border-white/30 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50" 
            aria-label={getPlayPauseAriaLabel()}
          >
            {isPaused ? 
              <Play size={isMobile ? 18 : 22} className="text-white group-hover:text-white/90" /> : 
              <Pause size={isMobile ? 18 : 22} className="text-white group-hover:text-white/90" />
            }
          </button>
        </div>
        
        {/* Tabs for feature selection */}
        <Tabs 
          value={currentStage.toString()} 
          onValueChange={value => handleStageChange(parseInt(value))} 
          className="w-full"
        >
          <TabsList className="w-full bg-white/10 p-1 rounded-md border border-white/20">
            {stageDescriptions.map((stage, index) => (
              <TabsTrigger 
                key={index} 
                value={index.toString()} 
                className={`flex-1 flex items-center justify-center gap-2 ${
                  currentStage === index 
                    ? 'bg-white/20 text-white shadow-lg' 
                    : 'text-white/80 hover:bg-white/15 hover:text-white'
                  } 
                  data-[state=active]:bg-white/25 data-[state=active]:text-white
                  transition-all duration-200 py-2 px-3 font-medium`}
              >
                <span className={`inline-flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full 
                  ${currentStage === index 
                    ? 'bg-[#FFDEE2] text-[#143151]' 
                    : 'bg-white/20 text-white'
                  } text-sm sm:text-base font-bold`}>
                  {index + 1}
                </span>
                <span className="hidden sm:inline">{stage.title}</span>
                <span className="sm:hidden">{index === 0 ? "Patient" : index === 1 ? "Scribe" : index === 2 ? "Admin" : "Post-Visit"}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {/* Active feature description */}
        <p className="text-sm sm:text-base text-white/90 max-w-xl line-clamp-2 mb-0.5">
          {stageDescriptions[currentStage].description}
        </p>
      </div>
    </div>
  );
};
