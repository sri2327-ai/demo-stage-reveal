
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
                  [index * 0.25, (index + 1) * 0.25],
                  [targetScale, 1]
                ),
                y: useTransform(
                  scrollYProgress,
                  [index * 0.25, (index + 1) * 0.25],
                  [targetY, 0]
                ),
              }}
              className="w-full max-w-6xl"
            >
              <Card className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl p-6 sm:p-8 lg:p-12">
                <div className={`${card.theme === 'goal' ? '' : 'grid md:grid-cols-2 gap-8 lg:gap-12'} items-center`}>
                  {card.theme === 'practice' ? (
                    <>
                      <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200/40 order-2 md:order-1">
                        <div className="space-y-4 sm:space-y-6">
                          {card.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3 sm:gap-4">
                              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#387E89] mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-[#143151] mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h4>
                                <p className="text-gray-700 text-xs sm:text-sm">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                      
                      <div className="order-1 md:order-2">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 sm:p-3 rounded-full flex-shrink-0">
                            {card.icon}
                          </div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143151]">
                            {card.title}
                          </h2>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#143151] mb-3 sm:mb-4">
                          {card.subtitle}
                        </h3>
                        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                          {card.description}
                        </p>
                      </div>
                    </>
                  ) : card.theme === 'goal' ? (
                    <div className="text-center">
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-3 sm:p-4 rounded-full">
                          {card.icon}
                        </div>
                      </div>
                      
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143151] mb-4 sm:mb-6">
                        {card.title}
                      </h2>
                      
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                        {card.description}
                      </p>
                      
                      <p className="text-lg sm:text-xl font-semibold text-[#143151]">
                        {card.subtitle}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 sm:p-3 rounded-full flex-shrink-0">
                            {card.icon}
                          </div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143151]">
                            {card.title}
                          </h2>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#143151] mb-3 sm:mb-4">
                          {card.subtitle}
                        </h3>
                        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                          {card.description}
                        </p>
                      </div>
                      
                      <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200/40">
                        <div className="space-y-4 sm:space-y-6">
                          {card.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3 sm:gap-4">
                              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#387E89] mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-[#143151] mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h4>
                                <p className="text-gray-700 text-xs sm:text-sm">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </>
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
