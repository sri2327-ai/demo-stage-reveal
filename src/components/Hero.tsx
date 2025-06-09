
import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, Clock, Users, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useIsMobile } from '../hooks/use-mobile';

interface HeroProps {
  currentSection: string;
}

export const Hero: React.FC<HeroProps> = ({ currentSection }) => {
  const isMobile = useIsMobile();

  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-3 sm:px-4 md:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-36 sm:w-56 md:w-72 h-36 sm:h-56 md:h-72 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/3 w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <motion.div
          className="inline-block mb-3 sm:mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            <Hospital className="w-3 sm:w-4 h-3 sm:h-4 text-black flex-shrink-0" />
            <span className="text-black text-xs sm:text-sm font-medium">Designed for Healthcare Providers</span>
          </Card>
        </motion.div>
        
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight px-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Enhance Your Clinical Practice With <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-black to-black/80 text-transparent bg-clip-text">
            Intelligent Healthcare AI
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl text-black/80 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4 leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          See how S10.AI works alongside your clinical workflow to reduce documentation burden,
          streamline patient interactions, and improve care continuity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 px-4"
        >
          <Button 
            size={isMobile ? "default" : "lg"}
            className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto text-sm sm:text-base"
          >
            Explore Clinical Workflows
          </Button>
          
          <Button 
            variant="outline"
            size={isMobile ? "default" : "lg"}
            className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 w-full sm:w-auto text-sm sm:text-base"
          >
            Schedule a Personalized Demo
          </Button>
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-10 flex-wrap px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-1.5 sm:p-2 md:p-3 rounded-full flex-shrink-0">
              <Clock className="w-3 sm:w-4 md:w-5 lg:w-6 h-3 sm:h-4 md:h-5 lg:h-6 text-white" />
            </div>
            <p className="font-medium text-xs sm:text-sm md:text-base text-black">Save 2+ hours daily</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-1.5 sm:p-2 md:p-3 rounded-full flex-shrink-0">
              <Users className="w-3 sm:w-4 md:w-5 lg:w-6 h-3 sm:h-4 md:h-5 lg:h-6 text-white" />
            </div>
            <p className="font-medium text-xs sm:text-sm md:text-base text-black">Higher satisfaction</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-1.5 sm:p-2 md:p-3 rounded-full flex-shrink-0">
              <ShieldCheck className="w-3 sm:w-4 md:w-5 lg:w-6 h-3 sm:h-4 md:h-5 lg:h-6 text-white" />
            </div>
            <p className="font-medium text-xs sm:text-sm md:text-base text-black">Works with 7,000+ apps and your EHR</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
