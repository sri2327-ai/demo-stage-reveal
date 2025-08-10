import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Award, TrendingUp, Clock } from 'lucide-react';

const PrivatePracticeCaseStudies = () => {
  const caseStudies = [
    {
      title: 'Functional Medicine Practice Cuts Charting Time from 60 to 15 Mins',
      description: 'Learn how Dr. Martinez transformed her practice workflow and patient care quality with S10.AI\'s comprehensive documentation system.',
      cta: 'Read Case Study',
      icon: <Clock className="w-6 h-6" />,
      stats: '75% Time Savings',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Family Physician Saves 1.5 Hours Daily vs. Other AI Tools',
      description: 'Discover why Dr. Johnson switched from his previous AI solution to S10.ai and saw immediate improvements in efficiency.',
      cta: 'View Results',
      icon: <TrendingUp className="w-6 h-6" />,
      stats: '150% ROI',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }} 
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
            See How We Help Practices Like Yours
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Real results from real practices using S10.AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-8 lg:p-10 h-full bg-card/80 backdrop-blur-xl border border-border/50 hover:shadow-[var(--shadow-large)] hover:scale-[1.02] transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${study.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${study.gradient} rounded-2xl flex items-center justify-center text-white shadow-[var(--shadow-soft)] group-hover:scale-110 transition-transform duration-300`}>
                      {study.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${study.gradient} text-white text-sm font-bold rounded-full mb-3`}>
                        {study.stats}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                    {study.description}
                  </p>
                  
                  <Button variant="ghost" className="text-accent hover:bg-accent/10 p-0 h-auto font-bold text-base group-hover:translate-x-1 transition-transform duration-300">
                    {study.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivatePracticeCaseStudies;