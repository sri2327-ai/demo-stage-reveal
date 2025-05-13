
import React from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './DemoStage';
import type { DemoStage as DemoStageType } from '../types/demo';
import { useIsMobile } from '../hooks/use-mobile';
import { MousePointerClick } from 'lucide-react';

interface DemoSectionProps {
  isInViewport: boolean;
  hasScrolledToDemo: boolean;
  stages: DemoStageType[];
  currentSection: string;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ 
  isInViewport, 
  hasScrolledToDemo,
  stages,
  currentSection
}) => {
  const isMobile = useIsMobile();
  
  // Log the current section for debugging
  React.useEffect(() => {
    console.log("DemoSection - currentSection:", currentSection);
  }, [currentSection]);
  
  return (
    <div className="px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151] mb-3 sm:mb-4 md:mb-5 px-2 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            How S10.AI Transforms Your Clinical Workflow
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-2 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how S10.AI's CRUSH and BRAVO, powered by AI, streamline key clinical workflows in an interactive demo.
          </motion.p>
          
          {/* Enhanced interactive instruction with clearer call to action */}
          <motion.div
            className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-[#387E89]/20 border-2 border-[#387E89]/40 rounded-full text-[#143151] shadow-md">
              <MousePointerClick size={isMobile ? 20 : 24} className="text-[#387E89] animate-pulse" />
              <span className={`${isMobile ? "text-sm" : "text-base"} font-medium max-w-md`}>
                {isMobile 
                  ? "Tap numbered tabs to switch features & icons to explore details" 
                  : "Click numbered tabs to switch workflows & click icons inside each demo to explore specific features"}
              </span>
            </div>
          </motion.div>
        </div>
        
        {isInViewport && (
          <div className="flex justify-center w-full">
            <div className="w-full overflow-hidden">
              <DemoStage 
                stages={stages} 
                autoPlay={hasScrolledToDemo} 
                isDemoSection={currentSection === 'demo'} // This prop controls whether indicator shows
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
