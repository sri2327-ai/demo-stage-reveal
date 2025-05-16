
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Check immediately on mount
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < MOBILE_BREAKPOINT;
      console.log("useIsMobile - Window width:", window.innerWidth, "isMobile:", isMobileView);
      setIsMobile(isMobileView);
    };

    // Check initially
    checkIfMobile();
    
    // Set up listener for resize events
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handleChange = () => checkIfMobile();
    
    // Use the appropriate event listener based on browser support
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange);
    } else {
      // For older browsers
      window.addEventListener("resize", handleChange);
    }
    
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
