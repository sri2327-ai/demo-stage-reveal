
import * as React from "react";

// Adjusted breakpoint for better responsive behavior
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Initial check function with better logging
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < MOBILE_BREAKPOINT;
      console.log("useIsMobile - Window width:", window.innerWidth, "isMobile:", isMobileView);
      setIsMobile(isMobileView);
    };

    // Check immediately on mount
    checkIfMobile();
    
    // Set up listener for resize events with debounce for better performance
    let debounceTimer: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      debounceTimer = setTimeout(() => {
        checkIfMobile();
      }, 100); // 100ms debounce
    };
    
    // Use the appropriate event listener 
    window.addEventListener("resize", handleResize);
    
    // Also use matchMedia for more reliable breakpoint detection
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handleChange = (e: MediaQueryListEvent) => {
      console.log("useIsMobile - Media query change:", e.matches);
      setIsMobile(e.matches);
    };
    
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange);
    }
    
    // Log initial state
    console.log(`useIsMobile - Initial detection: ${isMobile}`);
    
    // Cleanup
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      window.removeEventListener("resize", handleResize);
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleChange);
      }
    };
  }, []);

  return isMobile;
}
