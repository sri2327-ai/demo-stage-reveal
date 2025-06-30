
import React from 'react';
import { Button } from './ui/button';
import { useIsMobile } from '../hooks/use-mobile';
import { Sparkles, Zap, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#143151] via-[#1a3b5c] to-[#387E89] rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-36 translate-x-36"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/3 rounded-full -translate-x-24 -translate-y-24"></div>
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to Transform Your Practice?
            </h2>
            
            {/* Subheading */}
            <p className="text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
              Join thousands of clinicians already using S10.AI to reduce administrative burden by 60% 
              and improve patient care. Experience the future of medical documentation today.
            </p>
            
            {/* Social Proof Stats */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="w-4 h-4" />
                <span className="text-sm sm:text-base font-medium">10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm sm:text-base font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Clock className="w-4 h-4" />
                <span className="text-sm sm:text-base font-medium">60% Time Saved</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12">
              <Button 
                size={isMobile ? "default" : "lg"}
                className="bg-white text-[#143151] hover:bg-gray-100 transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Free 30-Day Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size={isMobile ? "default" : "lg"}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Schedule a Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-base sm:text-lg mb-2">No Credit Card Required</h3>
                <p className="text-white/80 text-xs sm:text-sm">Cancel anytime, no strings attached</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-base sm:text-lg mb-2">Setup in 5 Minutes</h3>
                <p className="text-white/80 text-xs sm:text-sm">Get started instantly with guided onboarding</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 mx-auto fill-current" />
                <h3 className="font-bold text-base sm:text-lg mb-2">24/7 Expert Support</h3>
                <p className="text-white/80 text-xs sm:text-sm">Award-winning customer success team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
