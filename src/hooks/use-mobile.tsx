
import * as React from "react";

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
    
    // Set up listener for resize events
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Use the appropriate event listener based on browser support
    const handleChange = () => checkIfMobile();
    
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange);
    } else {
      // For older browsers
      window.addEventListener("resize", handleChange);
    }
    
    // Log initial state
    console.log(`useIsMobile - Initial detection: ${isMobile}`);
    
    // Cleanup
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleChange);
      } else {
        window.removeEventListener("resize", handleChange);
      }
    };
  }, []);

  return isMobile;
}
