
import React, { useRef } from 'react';
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
    offset: ["start end", "end start"]
  });

  console.log('StackedCards rendered with', cards.length, 'cards');

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: `${cards.length * 100}vh` }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-32 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-32 left-20 w-52 h-52 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-cyan-100 rounded-full blur-3xl opacity-45"></div>
      </div>

      {cards.map((card, index) => {
        const targetScale = 1 - ((cards.length - index) * 0.05);
        const targetY = index * 25;
        
        // Calculate progress for each card
        const start = index / cards.length;
        const end = (index + 1) / cards.length;
        
        return (
          <div
            key={card.id}
            className="sticky top-0 flex items-center justify-center h-screen px-4 sm:px-6 lg:px-8"
            style={{ 
              zIndex: cards.length - index,
            }}
          >
            <motion.div
              style={{
                scale: useTransform(
                  scrollYProgress,
                  [start, end],
                  [targetScale, 1]
                ),
                y: useTransform(
                  scrollYProgress,
                  [start, end],
                  [targetY, 0]
                ),
              }}
              className="w-full max-w-7xl"
            >
              <Card className="bg-gradient-to-br from-white via-white to-gray-50/30 backdrop-blur-xl border-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden relative group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#143151]/20 via-[#387E89]/20 to-[#143151]/20 p-[1px] rounded-3xl">
                  <div className="h-full w-full bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl" />
                </div>
                
                <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                  {card.theme === 'goal' ? (
                    // Goal card - centered layout with enhanced button presentation
                    <div className="text-center max-w-5xl mx-auto">
                      <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-br from-[#143151] to-[#387E89] p-4 sm:p-5 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          {card.icon}
                        </div>
                      </div>
                      
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent mb-6 leading-tight">
                        {card.title}
                      </h2>
                      
                      <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-medium max-w-4xl mx-auto">
                        {card.description}
                      </p>
                      
                      {/* Enhanced button presentation with modern design */}
                      <div className="flex justify-center mb-4">
                        <motion.div 
                          className="relative group/badge"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          {/* Glow effect background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#143151]/20 to-[#387E89]/20 rounded-2xl blur-xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Main badge */}
                          <div className="relative bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151] p-[1px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-3 sm:py-4 group-hover/badge:from-white group-hover/badge:via-white group-hover/badge:to-white transition-all duration-300">
                              <p className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
                                {card.subtitle}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    // Regular cards - two column layout
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      <div className={card.theme === 'practice' ? 'order-2 lg:order-1' : ''}>
                        <div className="flex items-center gap-3 sm:gap-4 mb-6">
                          <div className="bg-gradient-to-br from-[#143151] to-[#387E89] p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            {card.icon}
                          </div>
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight">
                            {card.title}
                          </h2>
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] mb-4 leading-tight">
                          {card.subtitle}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                      
                      <div className={card.theme === 'practice' ? 'order-1 lg:order-2' : ''}>
                        <Card className="bg-gradient-to-br from-blue-50/80 via-sky-50/60 to-cyan-50/40 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="space-y-4 sm:space-y-6">
                            {card.features.map((feature, featureIndex) => (
                              <motion.div 
                                key={featureIndex} 
                                className="flex items-start gap-3 sm:gap-4 group/feature"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                              >
                                <div className="bg-gradient-to-br from-[#387E89] to-[#143151] p-2 rounded-xl shadow-lg group-hover/feature:scale-110 transition-transform duration-200 flex-shrink-0">
                                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-bold text-[#143151] mb-2 text-sm sm:text-base lg:text-lg group-hover/feature:text-[#387E89] transition-colors duration-200 leading-tight">
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
