
import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from './ui/card';
import { CheckCircle } from 'lucide-react';

interface StackedCardData {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  theme: 'clinician' | 'practice' | 'goal';
}

interface StackedCardsProps {
  cards: StackedCardData[];
}

const StackedCards: React.FC<StackedCardsProps> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Improved transform calculations with better mobile handling
  const cardTransforms = useMemo(() => {
    return cards.map((_, index) => {
      // Smoother scaling for mobile
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const scaleReduction = isMobile ? 0.03 : 0.05;
      const yOffset = isMobile ? 15 : 30;
      
      const targetScale = 1 - ((cards.length - index - 1) * scaleReduction);
      const targetY = index * yOffset;
      
      // Better progress distribution for smoother animations
      const cardProgress = index / (cards.length - 1);
      const start = Math.max(0, cardProgress * 0.6);
      const end = Math.min(1, start + 0.5);
      
      return {
        scale: useTransform(
          scrollYProgress,
          [start, end],
          [targetScale, 1],
          { clamp: true }
        ),
        y: useTransform(
          scrollYProgress,
          [start, end],
          [targetY, 0],
          { clamp: true }
        ),
        opacity: useTransform(
          scrollYProgress,
          [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
          [0.7, 1, 1, 0.9],
          { clamp: true }
        ),
      };
    });
  }, [cards.length, scrollYProgress]);

  console.log('StackedCards rendered with', cards.length, 'cards');

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: `${Math.max(300, cards.length * 120)}vh` }}
    >
      {/* Enhanced decorative background with better mobile positioning */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-16 sm:right-32 w-24 sm:w-40 h-24 sm:h-40 bg-blue-100 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-30"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-10 sm:left-20 w-32 sm:w-52 h-32 sm:h-52 bg-purple-100 rounded-full blur-2xl sm:blur-3xl opacity-25 sm:opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-20 sm:w-36 h-20 sm:h-36 bg-cyan-100 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-35"></div>
      </div>

      {cards.map((card, index) => {
        const transforms = cardTransforms[index];
        
        return (
          <div
            key={card.id}
            className="sticky top-2 sm:top-4 md:top-8 flex items-center justify-center min-h-[85vh] sm:min-h-[90vh] px-3 sm:px-6 lg:px-8 py-2 sm:py-4 md:py-8"
            style={{ 
              zIndex: cards.length - index,
            }}
          >
            <motion.div
              style={{
                scale: transforms.scale,
                y: transforms.y,
                opacity: transforms.opacity,
              }}
              className="w-full max-w-5xl xl:max-w-6xl"
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 1
              }}
            >
              <Card className="bg-gradient-to-br from-white/95 via-white/90 to-gray-50/80 backdrop-blur-xl border-0 shadow-[0_8px_32px_rgba(0,0,0,0.06)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative group hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] sm:hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500">
                {/* Improved gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#143151]/15 via-[#387E89]/15 to-[#143151]/15 p-[1px] rounded-xl sm:rounded-2xl lg:rounded-3xl">
                  <div className="h-full w-full bg-gradient-to-br from-white/95 via-white/90 to-gray-50/80 rounded-xl sm:rounded-2xl lg:rounded-3xl" />
                </div>
                
                <div className="relative z-10 p-3 sm:p-6 lg:p-8 xl:p-10">
                  {card.theme === 'goal' ? (
                    // Goal card - enhanced mobile layout
                    <div className="text-center max-w-3xl xl:max-w-4xl mx-auto">
                      <div className="flex justify-center mb-3 sm:mb-6">
                        <div className="bg-gradient-to-br from-[#143151] to-[#387E89] p-2.5 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                          {card.icon}
                        </div>
                      </div>
                      
                      <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent mb-3 sm:mb-6 leading-tight px-2">
                        {card.title}
                      </h2>
                      
                      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-8 font-medium px-2">
                        {card.description}
                      </p>
                      
                      {/* Enhanced mobile-friendly button presentation */}
                      <div className="flex justify-center mb-2 sm:mb-4">
                        <motion.div 
                          className="relative group/badge w-full max-w-md sm:max-w-none sm:w-auto"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          {/* Mobile-optimized glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#143151]/15 to-[#387E89]/15 rounded-lg sm:rounded-xl lg:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Responsive badge design */}
                          <div className="relative bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151] p-[1px] rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 group-hover/badge:from-white group-hover/badge:via-white group-hover/badge:to-white transition-all duration-300">
                              <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight">
                                {card.subtitle}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    // Regular cards - improved mobile two-column layout
                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
                      <div className={card.theme === 'practice' ? 'order-2 lg:order-1' : ''}>
                        <div className="flex items-start gap-2.5 sm:gap-4 mb-3 sm:mb-6">
                          <div className="bg-gradient-to-br from-[#143151] to-[#387E89] p-1.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5 sm:mt-0">
                            {card.icon}
                          </div>
                          <h2 className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight">
                            {card.title}
                          </h2>
                        </div>
                        <h3 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#143151] mb-2 sm:mb-4 leading-tight">
                          {card.subtitle}
                        </h3>
                        <p className="text-xs sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                      
                      <div className={card.theme === 'practice' ? 'order-1 lg:order-2' : ''}>
                        <Card className="bg-gradient-to-br from-blue-50/70 via-sky-50/50 to-cyan-50/30 backdrop-blur-sm border border-blue-200/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300">
                          <div className="space-y-2.5 sm:space-y-4 lg:space-y-6">
                            {card.features.map((feature, featureIndex) => (
                              <motion.div 
                                key={featureIndex} 
                                className="flex items-start gap-2 sm:gap-4 group/feature"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                              >
                                <div className="bg-gradient-to-br from-[#387E89] to-[#143151] p-1 sm:p-2 rounded-md sm:rounded-lg lg:rounded-xl shadow-md group-hover/feature:scale-110 transition-transform duration-200 flex-shrink-0 mt-0.5">
                                  <CheckCircle className="w-2.5 sm:w-4 lg:w-5 h-2.5 sm:h-4 lg:h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-bold text-[#143151] mb-0.5 sm:mb-2 text-xs sm:text-base lg:text-lg group-hover/feature:text-[#387E89] transition-colors duration-200 leading-tight">
                                    {feature.title}
                                  </h4>
                                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">
                                    {feature.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </Card>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default StackedCards;
