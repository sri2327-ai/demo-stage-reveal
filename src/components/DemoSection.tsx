
import React from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './DemoStage';
import type { DemoStage as DemoStageType } from '../types/demo';

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
  return (
    <div className="px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-[#143151] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            How S10.AI Transforms Your Clinical Workflow
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how S10.AI's CRUSH and BRAVO, powered by AI, streamline key clinical workflows in an interactive demo.
          </motion.p>
        </div>
        
        {isInViewport && (
          <div className="flex justify-center">
            <DemoStage 
              stages={stages} 
              autoPlay={hasScrolledToDemo} 
              isDemoSection={currentSection === 'demo'}
            />
          </div>
        )}
      </div>
    </div>
  );
};
