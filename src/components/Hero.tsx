
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Clock, Hospital, Users, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { MouseTrackerProvider, PointerFollower } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';

interface HeroProps {
  scrollToDemo: () => void;
  currentSection: string;
}

export const Hero: React.FC<HeroProps> = ({ scrollToDemo, currentSection }) => {
  const isMobile = useIsMobile();

  return (
    <MouseTrackerProvider>
      <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 inline-flex items-center gap-2 mb-6">
              <Hospital className="w-4 h-4 text-black" />
              <span className="text-black text-sm font-medium">Designed for Healthcare Providers</span>
            </Card>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Enhance Your Clinical Practice With <br />
            <span className="bg-gradient-to-r from-black to-black/80 text-transparent bg-clip-text">
              Intelligent Healthcare AI
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto mb-10"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              onClick={scrollToDemo}
              size="lg" 
              className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
            >
              Explore Clinical Workflows
              <ArrowDown className="ml-1 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 w-full sm:w-auto"
            >
              Schedule a Personalized Demo
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center items-center gap-4 md:gap-8 mt-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 md:p-3 rounded-full">
                <Clock className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <p className="font-medium text-sm md:text-base text-black">Save 2+ hours daily</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 md:p-3 rounded-full">
                <Users className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <p className="font-medium text-sm md:text-base text-black">Higher satisfaction</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 md:p-3 rounded-full">
                <ShieldCheck className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <p className="font-medium text-sm md:text-base text-black">Works with 7,000+ apps and your EHR</p>
            </div>
          </motion.div>
        </div>
        
        {/* Only show the scroll indicator on desktop */}
        {!isMobile && (
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              delay: 1.2, 
              opacity: { duration: 0.5 },
              y: { repeat: Infinity, duration: 1.5 } 
            }}
            onClick={scrollToDemo}
          >
            <p className="font-medium mb-2 text-center">Experience the clinical workflow</p>
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6" />
            </div>
          </motion.div>
        )}
      </header>
    </MouseTrackerProvider>
  );
};
