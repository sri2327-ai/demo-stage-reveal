
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronDown, ChevronUp, Shield, ShieldCheck, MessageSquare, Clock } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface FloatingAnimationDescriptionProps {
  currentStage: number;
  subStep: number;
  labels: Record<number, string>;
  labelTitles: Record<number, string>;
  maxSteps: number;
  onElementClick: (step: number) => void;
}

export const FloatingAnimationDescription: React.FC<FloatingAnimationDescriptionProps> = ({
  currentStage,
  subStep,
  labels,
  labelTitles,
  maxSteps,
  onElementClick
}) => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Get color scheme based on current stage - updated with more subtle colors
  const getStageColorScheme = () => {
    switch(currentStage) {
      case 0: // Patient Engagement
        return {
          gradient: 'from-blue-700/80 to-blue-500/80',
          highlight: 'bg-blue-300',
          shadow: 'shadow-[0_0_6px_rgba(96,165,250,0.5)]',
          iconBg: 'bg-blue-500/20',
          activeDot: 'bg-blue-100 shadow-[0_0_8px_rgba(186,230,253,0.6)]'
        };
      case 1: // AI Medical Scribe
        return {
          gradient: 'from-indigo-700/80 to-indigo-500/80',
          highlight: 'bg-indigo-300',
          shadow: 'shadow-[0_0_6px_rgba(99,102,241,0.5)]',
          iconBg: 'bg-indigo-500/20',
          activeDot: 'bg-indigo-100 shadow-[0_0_8px_rgba(199,210,254,0.6)]'
        };
      case 2: // Admin Tasks
        return {
          gradient: 'from-emerald-700/80 to-emerald-500/80',
          highlight: 'bg-emerald-300',
          shadow: 'shadow-[0_0_6px_rgba(16,185,129,0.5)]',
          iconBg: 'bg-emerald-500/20',
          activeDot: 'bg-emerald-100 shadow-[0_0_8px_rgba(209,250,229,0.6)]'
        };
      case 3: // Post-Visit Support
        return {
          gradient: 'from-amber-700/80 to-amber-500/80',
          highlight: 'bg-amber-300',
          shadow: 'shadow-[0_0_6px_rgba(245,158,11,0.5)]',
          iconBg: 'bg-amber-500/20',
          activeDot: 'bg-amber-100 shadow-[0_0_8px_rgba(254,243,199,0.6)]'
        };
      default:
        return {
          gradient: 'from-slate-700/80 to-slate-500/80',
          highlight: 'bg-slate-300',
          shadow: 'shadow-[0_0_6px_rgba(100,116,139,0.5)]',
          iconBg: 'bg-slate-500/20',
          activeDot: 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]'
        };
    }
  };

  const colors = getStageColorScheme();
  
  // Get themed icon based on stage and subStep
  const getThemedIcon = () => {
    // Select icon based on stage and subStep
    switch(currentStage) {
      case 0: // Patient Engagement
        return <MessageSquare size={isMobile ? 16 : 18} className="text-blue-100" />;
      case 1: // AI Medical Scribe
        return <Clock size={isMobile ? 16 : 18} className="text-indigo-100" />;
      case 2: // Admin Tasks
        return <ShieldCheck size={isMobile ? 16 : 18} className="text-emerald-100" />;
      case 3: // Post-Visit Support
        return <Shield size={isMobile ? 16 : 18} className="text-amber-100" />;
      default:
        return <Info size={isMobile ? 16 : 18} className="text-white" />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={`floating-description-${currentStage}-${subStep}`}
        className="w-full rounded-xl overflow-hidden"
        initial={clinicalAnimations.cardAppear.initial}
        animate={clinicalAnimations.cardAppear.animate}
        exit={clinicalAnimations.cardAppear.exit}
        transition={{ duration: accessibilityHelpers.getDuration(0.3) }}
      >
        <Collapsible
          open={!isCollapsed}
          onOpenChange={() => setIsCollapsed(!isCollapsed)}
          className="w-full"
        >
          <motion.div 
            className={`bg-gradient-to-r ${colors.gradient} backdrop-blur-sm text-white 
                      px-4 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6 rounded-xl border border-white/15 
                      shadow-lg flex flex-col justify-between ${isCollapsed ? 'rounded-b-none' : ''}`}
          >
            {/* Collapse toggle and title row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <motion.div 
                  className={`flex items-center justify-center h-8 w-8 rounded-full ${colors.iconBg}`}
                  animate={{ 
                    opacity: [1, 0.7, 1],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                >
                  <motion.div className="flex items-center justify-center">
                    {getThemedIcon()}
                  </motion.div>
                </motion.div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-white drop-shadow-sm">
                  {labelTitles[subStep]}
                </h3>
              </div>
              
              <CollapsibleTrigger asChild>
                <button 
                  className="rounded-full p-2 hover:bg-white/20 transition-colors" 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label={isCollapsed ? "Expand description" : "Collapse description"}
                >
                  {isCollapsed ? (
                    <ChevronDown size={20} className="text-white" />
                  ) : (
                    <ChevronUp size={20} className="text-white" />
                  )}
                </button>
              </CollapsibleTrigger>
            </div>
            
            {/* Content */}
            <CollapsibleContent className="overflow-hidden">
              {/* Description text */}
              <div className="text-xs sm:text-sm md:text-base text-white leading-relaxed mt-2 mb-4 font-medium">
                {labels[subStep]}
              </div>
              
              {/* Step indicator dots with improved spacing and size */}
              <div className="mt-5 flex items-center gap-4 justify-center">
                {Array.from({ length: maxSteps }).map((_, step) => (
                  <motion.button
                    key={step}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 flex items-center justify-center ${
                      subStep === step 
                        ? `${colors.activeDot}` 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onElementClick(step);
                    }}
                    aria-label={`Go to ${labelTitles[step]} step (${step + 1} of ${maxSteps})`}
                    title={labelTitles[step]}
                  >
                    {subStep === step && (
                      <motion.div 
                        className={`w-1.5 h-1.5 rounded-full ${colors.highlight} ${colors.shadow}`}
                        animate={{ 
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatDelay: 0
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </CollapsibleContent>
          </motion.div>
        </Collapsible>
      </motion.div>
    </AnimatePresence>
  );
};
