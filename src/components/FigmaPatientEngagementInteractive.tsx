
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FigmaPatientEngagementIllustration } from './FigmaPatientEngagementIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';

interface FigmaPatientEngagementInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

export const FigmaPatientEngagementInteractive: React.FC<FigmaPatientEngagementInteractiveProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [lastInteraction, setLastInteraction] = useState(0);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Set up cursor position for hover effects
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isProcessingCall, setIsProcessingCall] = useState(false);
  
  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInteractive || !onElementClick) return;
      
      // Update last interaction time to pause autoplay
      setLastInteraction(Date.now());
      
      // Arrow key navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        onElementClick((subStep + 1) % 5);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        onElementClick((subStep - 1 + 5) % 5);
        e.preventDefault();
      } else if (e.key >= '1' && e.key <= '5') {
        // Number keys 1-5 for direct navigation
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

  // Handle hover on specific elements
  const handleHover = (step: number | null) => {
    // We can handle hover states here if needed
  };

  // Handle click on specific UI elements (icons)
  const handleIconClick = (step: number) => {
    console.log("PatientEngagement - Icon clicked for step:", step);
    if (onElementClick) {
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
  
  // Handle click on the illustration area
  const handleIllustrationClick = () => {
    if (onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 5;
      console.log("PatientEngagement - Illustration area clicked, moving to step:", nextStep);
      setLastInteraction(Date.now());
      onElementClick(nextStep);
      
      // Provide minimal haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(20);
      }
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto h-full" 
      role="region" 
      aria-label="Patient Engagement Interactive Demo"
    >
      {isInteractive ? (
        <MouseTrackerProvider disableCursor={false}>
          <div className="relative h-full flex flex-col items-center justify-center py-8"> 
            <div 
              className="relative w-full h-full flex-1 flex items-center justify-center cursor-pointer" 
              onClick={handleIllustrationClick}
              role="button"
              aria-label="Navigate to next feature"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleIllustrationClick();
                }
              }}
            >
              {/* Fixed consistent sizing wrapper */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-3xl">
                  <FigmaPatientEngagementIllustration
                    subStep={subStep}
                    cursorPosition={cursorPosition}
                    isProcessingCall={isProcessingCall}
                    onElementClick={handleIconClick}
                    isInteractive={true}
                    onHover={handleHover}
                    hideTitle={hideTitle}
                  />
                </div>
              </div>
            </div>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center py-8"> 
          <div className="relative w-full h-full flex-1 flex items-center justify-center">
            {/* Fixed consistent sizing wrapper */}
            <div className="w-full max-w-3xl">
              <FigmaPatientEngagementIllustration
                subStep={subStep}
                cursorPosition={cursorPosition}
                isProcessingCall={isProcessingCall}
                hideTitle={hideTitle}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
