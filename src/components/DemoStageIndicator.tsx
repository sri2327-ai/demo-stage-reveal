
import React from 'react';
import { motion } from 'framer-motion';
import type { DemoStageIndicatorProps } from '../types/demo';
import { useIsMobile } from '../hooks/use-mobile';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, Clipboard, FileClock, MessageCircle } from 'lucide-react';

export const DemoStageIndicator: React.FC<DemoStageIndicatorProps> = ({ 
  currentStage, 
  totalStages, 
  onStageChange,
  isDemoSection = false
}) => {
  const isMobile = useIsMobile();
  
  // Don't render if not in demo section and isDemoSection is specified
  if (isDemoSection === false) {
    return null;
  }
  
  const stageIcons = [
    {
      icon: MessageCircle,
      label: "Patient Engagement",
      description: "Automate patient communications"
    },
    {
      icon: Clipboard,
      label: "AI Medical Scribe",
      description: "Reduce documentation time" 
    },
    {
      icon: FileClock,
      label: "Admin Tasks",
      description: "Streamline workflows"
    },
    {
      icon: Calendar,
      label: "Post-Visit Support",
      description: "Improve outcomes"
    }
  ];
  
  return (
    <div className="flex justify-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto px-2 sm:px-4"
      >
        <Tabs 
          value={currentStage.toString()} 
          onValueChange={(value) => onStageChange(parseInt(value))}
          className="w-full"
        >
          <TabsList className={`bg-gradient-to-r from-[#143151]/90 to-[#387E89]/90 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg grid grid-cols-${isMobile ? '2 gap-1 p-1' : '4'} w-full`}>
            {stageIcons.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className={`flex flex-col items-center gap-1 px-3 py-2 sm:px-4 sm:py-3 data-[state=active]:bg-white/20 data-[state=active]:text-white rounded-lg transition-all ${
                    currentStage === index ? 'text-white font-medium' : 'text-white/70'
                  }`}
                >
                  <Icon size={isMobile ? 18 : 22} className="mb-1" />
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium line-clamp-1`}>
                    {stage.label}
                  </span>
                  {!isMobile && (
                    <span className="text-xs opacity-80 line-clamp-1">{stage.description}</span>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </motion.div>
    </div>
  );
};
