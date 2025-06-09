
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { CheckCircle } from "lucide-react";

interface StackedCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: {
    title: string;
    description: string;
  }[];
  backgroundGradient: string;
  icon: React.ReactNode;
}

interface StackedCardsSectionProps {
  title: string;
  subtitle: string;
  cards: StackedCard[];
  sectionId: string;
}

const StackedCardsSection: React.FC<StackedCardsSectionProps> = ({
  title,
  subtitle,
  cards,
  sectionId
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);

  const cardStyle = {
    height: '70vh',
    maxHeight: '700px',
    borderRadius: '20px',
    transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * (cards.length - 0.5);
          
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          const cardProgress = progress * (cards.length - 1);
          const newActiveIndex = Math.min(cards.length - 1, Math.floor(cardProgress));
          setActiveCardIndex(newActiveIndex);
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [cards.length]);

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: `${(cards.length + 1) * 100}vh` }}
    >
      <section className="w-full h-screen py-16 sticky top-0 overflow-hidden" id={sectionId}>
        <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-8 h-full flex flex-col">
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143151] mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
          
          <div ref={cardsContainerRef} className="relative flex-1">
            {cards.map((card, index) => {
              const isVisible = isIntersecting && activeCardIndex >= index;
              const isActive = activeCardIndex === index;
              const zIndex = 10 + index;
              const scale = 0.9 + (index * 0.05);
              const translateY = isVisible ? 
                (isActive ? 20 : 40 + (index * 15)) : 
                200;
              const opacity = isVisible ? (isActive ? 1 : 0.8) : 0;

              return (
                <div 
                  key={card.id}
                  className="absolute inset-0 overflow-hidden shadow-2xl"
                  style={{
                    ...cardStyle,
                    zIndex,
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    pointerEvents: isVisible ? 'auto' : 'none'
                  }}
                >
                  <Card className={`h-full ${card.backgroundGradient} border-blue-200/40 overflow-hidden`}>
                    <div className="relative z-10 p-6 md:p-8 h-full flex">
                      <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-3 rounded-full">
                              {card.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#143151]">
                              {card.title}
                            </h3>
                          </div>
                          
                          <h4 className="text-xl md:text-2xl font-semibold text-[#143151] mb-4">
                            {card.subtitle}
                          </h4>
                          
                          <p className="text-gray-700 mb-6 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                        
                        <div className="space-y-6">
                          {card.benefits.map((benefit, benefitIndex) => (
                            <motion.div
                              key={benefitIndex}
                              className="flex items-start gap-4"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
                              transition={{ delay: benefitIndex * 0.1, duration: 0.5 }}
                            >
                              <CheckCircle className="w-6 h-6 text-[#387E89] mt-1 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-[#143151] mb-2">
                                  {benefit.title}
                                </h5>
                                <p className="text-gray-700">
                                  {benefit.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      {cards.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx <= activeCardIndex 
                              ? 'bg-[#387E89]' 
                              : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StackedCardsSection;
