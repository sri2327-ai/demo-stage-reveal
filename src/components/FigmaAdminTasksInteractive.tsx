
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAdminTasksIllustration } from './FigmaAdminTasksIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { clinicalColorThemes } from '../lib/color-themes';

interface FigmaAdminTasksInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

export const FigmaAdminTasksInteractive: React.FC<FigmaAdminTasksInteractiveProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [lastInteraction, setLastInteraction] = useState(0);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Only hide title on mobile, or if explicitly needed for a specific layout
  const shouldHideTitle = isMobile ? hideTitle : false;
  
  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInteractive || !onElementClick) return;
      
      // Update last interaction time to pause autoplay
      setLastInteraction(Date.now());
      
      // Arrow key navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        onElementClick((subStep + 1) % 3);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        onElementClick((subStep - 1 + 3) % 3);
        e.preventDefault();
      } else if (e.key >= '1' && e.key <= '3') {
        // Number keys 1-3 for direct navigation
        onElementClick(parseInt(e.key) - 1);
        e.preventDefault();
      }
    };
    
    if (isInteractive) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInteractive, onElementClick, subStep]);

  // Handle click on specific UI elements (icons) with improved validation and event handling
  const handleIconClick = (step: number, e?: React.MouseEvent) => {
    // Stop event propagation if event is provided
    if (e) {
      e.stopPropagation();
    }
    
    console.log("AdminTasks - Icon clicked for step:", step);
    if (onElementClick && step >= 0 && step < 3) {
      // Track interaction time for autoplay management
      setLastInteraction(Date.now());
      // Directly navigate to clicked step
      onElementClick(step);
      
      // Provide haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(40);
      }
    }
  };
  
  // Handle click on the illustration area with improved event checking
  const handleIllustrationClick = (e: React.MouseEvent) => {
    // Don't handle if the click was on a child element that should handle its own clicks
    if ((e.target as HTMLElement).closest('[data-clickable="true"]')) {
      return;
    }
    
    if (onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 3;
      console.log("AdminTasks - Illustration area clicked, moving to step:", nextStep);
      setLastInteraction(Date.now());
      onElementClick(nextStep);
      
      // Provide minimal haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(20);
      }
    }
  };
  
  // Get theme colors for Admin Tasks
  const colorTheme = clinicalColorThemes.adminTasks;
  
  return (
    <div 
      ref={containerRef}
      className={`w-full h-full flex items-center justify-center ${colorTheme.background} rounded-xl ${colorTheme.border} ${colorTheme.shadow} p-3`}
      role="region" 
      aria-label="Admin Tasks Interactive Demo"
      tabIndex={-1}
    >
      {isInteractive ? (
        <MouseTrackerProvider disableCursor={false}>
          <div className="w-full h-full flex items-center justify-center"> 
            <div 
              className={`w-full h-full flex items-center justify-center ${colorTheme.highlight} rounded-lg`}
              onClick={handleIllustrationClick}
              role="button"
              aria-label="Navigate to next feature"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleIllustrationClick(e as unknown as React.MouseEvent);
                }
              }}
            >
              <FigmaAdminTasksIllustration
                subStep={subStep}
                onElementClick={handleIconClick}
                isInteractive={true}
                hideTitle={shouldHideTitle}
              />
            </div>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="w-full h-full flex items-center justify-center"> 
          <div className={`w-full h-full flex items-center justify-center ${colorTheme.highlight} rounded-lg`}>
            <FigmaAdminTasksIllustration
              subStep={subStep}
              isInteractive={false}
              hideTitle={shouldHideTitle}
            />
          </div>
        </div>
      )}
    </div>
  );
};
