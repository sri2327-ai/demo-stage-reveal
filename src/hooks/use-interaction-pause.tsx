
import { useState, useEffect, useCallback, useRef } from 'react';

interface InteractionPauseOptions {
  initialPauseState?: boolean;
  autoResumeTime?: number; // milliseconds
  trackInteractions?: boolean;
}

/**
 * Custom hook for managing interaction-based autoplay pausing in clinical demos
 * 
 * @param options Configuration options for the interaction pause behavior
 * @returns Object with pause state and control functions
 */
export const useInteractionPause = ({
  initialPauseState = false,
  autoResumeTime = 45000, // 45 second default for clinical demonstrations
  trackInteractions = true
}: InteractionPauseOptions = {}) => {
  const [isPaused, setIsPaused] = useState(initialPauseState);
  const [lastInteraction, setLastInteraction] = useState<number>(0);
  const autoResumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to register an interaction and pause autoplay
  const registerInteraction = useCallback(() => {
    if (trackInteractions) {
      const now = Date.now();
      setLastInteraction(now);
      setIsPaused(true);
    }
  }, [trackInteractions]);
  
  // Toggle pause state manually
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
    // When manually toggled, update last interaction time
    if (!isPaused) {
      setLastInteraction(Date.now());
    }
  }, [isPaused]);
  
  // Force resume autoplay
  const resumeAutoplay = useCallback(() => {
    setIsPaused(false);
  }, []);
  
  // Set up auto-resume timer
  useEffect(() => {
    // Clear any existing timer
    if (autoResumeTimerRef.current) {
      clearTimeout(autoResumeTimerRef.current);
      autoResumeTimerRef.current = null;
    }
    
    // If paused and there was a recent interaction, set timer to resume
    if (isPaused && lastInteraction > 0) {
      autoResumeTimerRef.current = setTimeout(() => {
        // Only auto-resume if sufficient time has passed since last interaction
        const timeSinceInteraction = Date.now() - lastInteraction;
        if (timeSinceInteraction >= autoResumeTime) {
          setIsPaused(false);
        }
      }, autoResumeTime);
    }
    
    // Cleanup timer on unmount
    return () => {
      if (autoResumeTimerRef.current) {
        clearTimeout(autoResumeTimerRef.current);
      }
    };
  }, [isPaused, lastInteraction, autoResumeTime]);
  
  return {
    isPaused,
    lastInteraction, 
    registerInteraction,
    togglePause,
    resumeAutoplay
  };
};
