
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
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Enhanced Badge */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-primary/5 backdrop-blur-sm border border-primary/20 px-4 py-2 inline-flex items-center gap-2 shadow-lg">
              <Hospital className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">Designed for Healthcare Providers</span>
            </Card>
          </motion.div>
          
          {/* Improved Typography Hierarchy */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.9] tracking-tight max-w-5xl mx-auto">
              The AI medical scribe{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                for all clinicians
              </span>
            </h1>
          </motion.div>
          
          {/* Improved Description */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed font-light">
              Experience seamless clinical documentation with AI that works alongside your workflow, 
              reduces administrative burden, and enhances patient care quality.
            </p>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold w-full sm:w-auto min-w-[200px]"
              >
                Try Heidi - it's free
              </Button>
              
              <Button 
                variant="ghost"
                size="lg"
                className="border border-border text-foreground hover:bg-accent/50 px-8 py-4 text-lg font-medium w-full sm:w-auto min-w-[150px] transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
          
          {/* Improved Feature Pills */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-4xl w-full">
              <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50 min-w-0 flex-shrink-0">
                <div className="bg-primary p-2 rounded-full flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="font-medium text-sm md:text-base text-foreground whitespace-nowrap">Save 2+ hours daily</p>
              </div>
              
              <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50 min-w-0 flex-shrink-0">
                <div className="bg-primary p-2 rounded-full flex-shrink-0">
                  <Users className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="font-medium text-sm md:text-base text-foreground whitespace-nowrap">Higher satisfaction</p>
              </div>
              
              <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50 min-w-0 flex-shrink-0">
                <div className="bg-primary p-2 rounded-full flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="font-medium text-sm md:text-base text-foreground whitespace-nowrap">HIPAA compliant</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
