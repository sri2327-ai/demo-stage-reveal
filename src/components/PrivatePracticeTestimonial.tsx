import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Star, Stethoscope, Quote } from 'lucide-react';

const PrivatePracticeTestimonial = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 lg:p-16 bg-[var(--gradient-primary)] text-white relative overflow-hidden shadow-[var(--shadow-large)]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-20 md:-translate-y-32 translate-x-20 md:translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full translate-y-16 md:translate-y-24 -translate-x-16 md:-translate-x-24"></div>
            <Quote className="absolute top-8 left-8 w-12 h-12 md:w-16 md:h-16 text-white/20" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed mb-8 md:mb-10 font-medium">
                "As a solo practitioner, S10.ai is the best hire I've ever made. CRUSH saves me 90 minutes a day, and BRAVO handles the scheduling headaches. My revenue is up 25%, and my stress is down significantly."
              </blockquote>
              
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl md:text-2xl mb-1">Dr. Sarah Thompson</p>
                  <p className="text-white/80 text-lg md:text-xl">Family Medicine Practice</p>
                  <p className="text-white/60 text-sm md:text-base mt-1">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivatePracticeTestimonial;