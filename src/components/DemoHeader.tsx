
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
  
  return <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-3 px-3 sm:py-4 sm:px-4 border-b border-white/10 shadow-lg">
      <div className="flex flex-col space-y-2 sm:space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl truncate pr-2">AI-Automated Clinical Workflows</h3>
          
          <button 
            onClick={togglePause} 
            className="bg-white/30 hover:bg-white/40 rounded-full p-2 sm:p-2.5 md:p-3 transition-all shadow-lg border border-white/30 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 flex-shrink-0 min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center" 
            aria-label={getPlayPauseAriaLabel()}
          >
            {isPaused ? 
              <Play size={isMobile ? 18 : 20} className="text-white group-hover:text-white/90" /> : 
              <Pause size={isMobile ? 18 : 20} className="text-white group-hover:text-white/90" />
            }
          </button>
        </div>
        
        {/* Tabs for feature selection - enhanced for better responsive behavior */}
        <Tabs value={currentStage.toString()} onValueChange={value => handleStageChange(parseInt(value))} className="w-full">
          <TabsList className="w-full bg-white/10 p-1 sm:p-1 rounded-md border border-white/20 overflow-x-auto flex flex-nowrap no-scrollbar scroll-pl-3 scroll-smooth">
            {stageDescriptions.map((stage, index) => (
              <TabsTrigger 
                key={index} 
                value={index.toString()} 
                className={`
                  min-w-max min-h-[44px] flex-grow flex items-center justify-center gap-1.5 sm:gap-2
                  ${currentStage === index ? 
                    'bg-white/20 text-white shadow-lg' : 
                    'text-white/80 hover:bg-white/15 hover:text-white'}
                  data-[state=active]:bg-white/25 data-[state=active]:text-white
                  transition-all duration-200 py-2 px-2 xs:px-2.5 sm:px-3 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium
                  touch-manipulation
                `}
                onClick={() => {
                  // Add haptic feedback on mobile if available
                  if (navigator.vibrate && isMobile) {
                    navigator.vibrate(40);
                  }
                }}
              >
                <span className={`
                  inline-flex items-center justify-center
                  ${isMobile ? 'h-6 w-6 sm:h-7 sm:w-7' : 'h-6 w-6 sm:h-7 sm:w-7'} 
                  rounded-full 
                  ${currentStage === index ? 'bg-[#FFDEE2] text-[#143151]' : 'bg-white/20 text-white'}
                  text-xs sm:text-sm font-bold flex-shrink-0
                `}>
                  {index + 1}
                </span>
                
                {/* More adaptive text display for different screen sizes */}
                <span className="hidden xxs:inline xxs:max-w-[60px] xs:max-w-[80px] sm:max-w-none truncate">
                  {isMobile ? 
                    (index === 0 ? "Patient" : 
                     index === 1 ? "Scribe" : 
                     index === 2 ? "Admin" : "Care") : 
                    stage.title
                  }
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {/* Adaptive description text */}
        <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-full line-clamp-2 mb-0.5 pr-2">
          {stageDescriptions[currentStage].description}
        </p>
      </div>
    </div>;
};
