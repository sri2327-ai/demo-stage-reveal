
import React from 'react';
import { Button } from './ui/button';
import { useIsMobile } from '../hooks/use-mobile';

export const CallToAction: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-12 sm:py-16 px-3 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#143151] mb-3 sm:mb-4 px-2">
          Ready to transform your practice?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 max-w-lg mx-auto px-4 leading-relaxed">
          Join thousands of clinicians already using S10.AI to reduce administrative burden and improve patient care.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button 
            size={isMobile ? "default" : "lg"}
            className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-sm sm:text-base"
          >
            Try risk-free for 30 days
          </Button>
          <Button 
            variant="outline" 
            size={isMobile ? "default" : "lg"}
            className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 w-full sm:w-auto text-sm sm:text-base"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};
