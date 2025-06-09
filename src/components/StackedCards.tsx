
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from './ui/card';
import { CheckCircle, Heart, TrendingUp, Star } from 'lucide-react';

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
    offset: ["start start", "end start"]
  });

  return (
    <div ref={containerRef} className="relative min-h-[300vh] py-16">
      {/* Decorative Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 right-32 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-32 left-20 w-52 h-52 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-cyan-100 rounded-full blur-3xl opacity-45"></div>
      </div>

      <div className="sticky top-0 flex items-center justify-center min-h-screen px-4 sm:px-5 md:px-8">
        <div className="relative max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const cardProgress = useTransform(
              scrollYProgress,
              [index / cards.length, (index + 1) / cards.length],
              [0, 1]
            );
            
            const y = useTransform(cardProgress, [0, 1], [100, -100]);
            const scale = useTransform(cardProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
            const opacity = useTransform(cardProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
            const rotateY = useTransform(cardProgress, [0, 0.5, 1], [-10, 0, 10]);

            return (
              <motion.div
                key={card.id}
                style={{
                  y,
                  scale,
                  opacity,
                  rotateY,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Card className="w-full max-w-5xl p-8 bg-white/90 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {card.theme === 'practice' ? (
                      <>
                        <Card className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200/40 order-2 md:order-1">
                          <div className="space-y-6">
                            {card.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-[#387E89] mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-semibold text-[#143151] mb-2">{feature.title}</h4>
                                  <p className="text-gray-700">{feature.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </Card>
                        
                        <div className="order-1 md:order-2">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-3 rounded-full">
                              {card.icon}
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151]">
                              {card.title}
                            </h2>
                          </div>
                          <h3 className="text-xl md:text-2xl font-semibold text-[#143151] mb-4">
                            {card.subtitle}
                          </h3>
                          <p className="text-gray-700 mb-6">
                            {card.description}
                          </p>
                        </div>
                      </>
                    ) : card.theme === 'goal' ? (
                      <div className="col-span-2 text-center">
                        <div className="flex justify-center mb-6">
                          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-4 rounded-full">
                            {card.icon}
                          </div>
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151] mb-6">
                          {card.title}
                        </h2>
                        
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                          {card.description}
                        </p>
                        
                        <p className="text-xl font-semibold text-[#143151]">
                          {card.subtitle}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-3 rounded-full">
                              {card.icon}
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151]">
                              {card.title}
                            </h2>
                          </div>
                          <h3 className="text-xl md:text-2xl font-semibold text-[#143151] mb-4">
                            {card.subtitle}
                          </h3>
                          <p className="text-gray-700 mb-6">
                            {card.description}
                          </p>
                        </div>
                        
                        <Card className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200/40">
                          <div className="space-y-6">
                            {card.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-[#387E89] mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-semibold text-[#143151] mb-2">{feature.title}</h4>
                                  <p className="text-gray-700">{feature.description}</p>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
