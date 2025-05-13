
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './DemoStage';
import type { DemoStage as DemoStageType } from '../types/demo';
import { useIsMobile } from '../hooks/use-mobile';
import { MousePointerClick, Play, Info } from 'lucide-react';
import { clinicalAnimations } from '../lib/animation-utils';

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
  
  // Debug current section to ensure it's being passed correctly
  useEffect(() => {
    console.log("DemoSection - currentSection:", currentSection);
    console.log("DemoSection - isDemoSection value:", currentSection === 'demo');
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
            Discover how S10.AI's CRUSH and BRAVO streamline your clinical workflow, reduce documentation time by 75%, and improve patient engagement.
          </motion.p>
          
          {/* Enhanced interactive instruction with clearer clinical context */}
          <motion.div
            className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-[#387E89]/20 border-2 border-[#387E89]/40 rounded-full text-[#143151] shadow-md"
              {...clinicalAnimations.clinicalPulse}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                delay: 1
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {isMobile ? (
                  <Play size={24} className="text-[#387E89]" />
                ) : (
                  <MousePointerClick size={24} className="text-[#387E89]" />
                )}
              </motion.div>
              
              <span className={`${isMobile ? "text-sm" : "text-base"} font-semibold max-w-md`}>
                {isMobile 
                  ? "Tap numbered tabs to explore different features" 
                  : "Click the numbered tabs to navigate between clinical workflows"}
              </span>
              
              <motion.div 
                className="flex gap-1 items-center text-xs sm:text-sm text-[#143151]/80 ml-1 pl-2 border-l border-[#387E89]/30"
                whileHover={{ scale: 1.05 }}
              >
                <Info size={16} className="text-[#387E89]" />
                <span>Interactive demo</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {isInViewport && (
          <div className="flex justify-center w-full">
            <div className="w-full overflow-hidden">
              <DemoStage 
                stages={stages} 
                autoPlay={hasScrolledToDemo} 
                isDemoSection={currentSection === 'demo'} // This is the key prop for the indicator
                autoPlayInterval={8000} // Slightly faster for better clinical engagement
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
