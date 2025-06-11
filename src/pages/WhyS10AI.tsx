import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { MouseTrackerProvider } from '../components/ui/cursor';
import StackedCards from '../components/StackedCards';
import { Stethoscope, Clock, Users, Heart, Calendar, Shield, TrendingUp, Star, CheckCircle, ArrowRight, Clock3, Phone } from 'lucide-react';

const WhyS10AI = () => {
  const stackedCardsData = [
    {
      id: 'clinician',
      icon: <Heart className="w-6 h-6 text-white" />,
      title: 'For the Clinician',
      subtitle: 'The Joy of Focused Medicine',
      description: 'The burden of documentation is the biggest drain on a clinician\'s time and energy. We solve it completely. Our AI Medical Scribe, CRUSH, listens to natural patient conversations and instantly drafts pristine, specialty-specific clinical notes.',
      features: [{
        title: 'Slash Documentation Time by 75%',
        description: 'Reclaim over 2 hours every day. Eliminate "pajama time" spent charting at home.'
      }, {
        title: 'Maximise Patient Interaction',
        description: 'With notes handled, you can be fully present with your patients, increasing face-time by over 40%.'
      }, {
        title: 'Boost Clinician Well-being',
        description: 'By removing the primary driver of burnout, we help you get back to the joy of practicing medicine.'
      }],
      theme: 'clinician' as const
    }, {
      id: 'practice',
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: 'For the Practice',
      subtitle: 'The Power of a Resilient Operation',
      description: 'Staffing shortages and administrative overhead can cripple a practice\'s growth and profitability. Our AI Staffing Agent, BRAVO, is your solution. BRAVO works 24/7 as your automated front-office engine, creating a seamless, efficient, and cost-effective operation.',
      features: [{
        title: 'Automate 85% of Front Office Tasks',
        description: 'From patient scheduling and intake to insurance verification and prescription refills, BRAVO handles the administrative grind.'
      }, {
        title: 'Address Staffing Shortages',
        description: 'Reduce dependency on manual administrative work by 30%, allowing your team to focus on high-value patient interactions.'
      }, {
        title: 'Improve Financial Impact',
        description: 'Accelerate your revenue cycle with automated coding. Practices see revenue increase by up to 40%.'
      }],
      theme: 'practice' as const
    }, {
      id: 'goal',
      icon: <Star className="w-8 h-8 text-white" />,
      title: 'It All Leads to One Thing: Delivering Better Patient Care',
      subtitle: 'That is the S10.ai difference.',
      description: 'Why do we obsess over workflow? Because the ultimate outcome of a streamlined practice is a superior patient experience. When clinicians are unburdened and operations are frictionless, patients get the focused, timely, and attentive care they deserve. They feel heard, supported, and valued at every step.',
      features: [],
      theme: 'goal' as const
    }
  ];

  return (
    <MouseTrackerProvider disableCursor={false}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-100 rounded-full blur-3xl opacity-40 sm:opacity-60"></div>
            <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-purple-100 rounded-full blur-3xl opacity-50 sm:opacity-70"></div>
            <div className="absolute top-1/2 left-1/3 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-cyan-100 rounded-full blur-3xl opacity-40 sm:opacity-60"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div className="inline-block mb-4 sm:mb-6" initial={{
              scale: 0.8,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              duration: 0.7
            }}>
              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2">
                <Stethoscope className="w-3 sm:w-4 h-3 sm:h-4 text-black flex-shrink-0" />
                <span className="text-black text-xs sm:text-sm font-medium">Maximize Patient Time. Minimize Documentation.</span>
              </Card>
            </motion.div>
            
            <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#143151] mb-4 sm:mb-6 leading-tight px-4" initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
              Why S10.AI?
            </motion.h1>
            
            <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4" initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
              While others solve single problems, <strong>S10.ai transforms your entire practice workflow.</strong> We streamline documentation, automate front-office tasks, and boost efficiency—so you can focus on what matters most: exceptional patient care.
            </motion.p>

            <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 max-w-4xl mx-auto px-4" initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5,
              duration: 0.6
            }}>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-1.5">
                <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-[#387E89] flex-shrink-0" />
                <span>75% Less Documentation Time</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-1.5">
                <Users className="w-3 sm:w-4 h-3 sm:h-4 text-[#387E89] flex-shrink-0" />
                <span>Enhanced Patient Interaction</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-1.5">
                <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-[#387E89] flex-shrink-0" />
                <span>Improved Practice Efficiency</span>
              </div>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6,
              duration: 0.6
            }}>
              <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto">
                See the Platform in Action
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-32 sm:w-48 h-32 sm:h-48 bg-purple-100 rounded-full blur-3xl opacity-30 sm:opacity-40"></div>
            <div className="absolute bottom-10 right-10 w-40 sm:w-56 h-40 sm:h-56 bg-cyan-100 rounded-full blur-3xl opacity-40 sm:opacity-50"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#143151] mb-4 sm:mb-6 px-4">
                Stop Patching Problems. Start Solving Them.
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
                You can buy an AI scribe and still have a chaotic front office. You can automate scheduling and still have clinician burnout. Point solutions create silos. <strong>S10.ai provides a complete workflow transformation</strong> by fixing both sides of the equation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stacked Cards Sections - Significantly reduced spacing */}
        <div className="pb-2 sm:pb-4">
          <StackedCards cards={stackedCardsData} />
        </div>

        {/* Modern CTA Section - Reduced top spacing and tighter integration */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
          {/* Enhanced Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20 sm:opacity-30"></div>
            <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-15 sm:opacity-25"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full blur-3xl opacity-15 sm:opacity-20"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="text-center">
              {/* Enhanced Trust Badge */}
              <motion.div 
                className="flex justify-center mb-4 sm:mb-6 lg:mb-8"
                initial={{ scale: 0.9, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }} 
                transition={{ delay: 0.2, duration: 0.6 }} 
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-black flex-shrink-0" />
                  <span className="text-black text-xs sm:text-sm font-medium">Trusted by 1000+ Healthcare Practices</span>
                </Card>
              </motion.div>

              {/* Main Headline */}
              <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#143151] mb-3 sm:mb-4 lg:mb-6 leading-tight px-4" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.3,
                duration: 0.8
              }} viewport={{
                once: true
              }}>
                Transform Your Practice Today
              </motion.h2>
              
              {/* Value Props Grid */}
              <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto px-4" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4,
                duration: 0.8
              }} viewport={{
                once: true
              }}>
                <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                    <Clock3 className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="font-semibold text-[#143151] text-xs sm:text-sm">15-Minute Setup</p>
                    <p className="text-gray-600 text-xs">Quick implementation</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                    <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="font-semibold text-[#143151] text-xs sm:text-sm">HIPAA Compliant</p>
                    <p className="text-gray-600 text-xs">Enterprise security</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="font-semibold text-[#143151] text-xs sm:text-sm">24/7 Support</p>
                    <p className="text-gray-600 text-xs">Always available</p>
                  </div>
                </div>
              </motion.div>

              <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-4" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.5,
                duration: 0.8
              }} viewport={{
                once: true
              }}>
                Join healthcare providers who've reduced administrative time by 75% while improving patient satisfaction scores.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-4" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.6,
                duration: 0.8
              }} viewport={{
                once: true
              }}>
                <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold">
                  Start Your Free Assessment
                  <Calendar className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:scale-110 transition-transform duration-200" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-2 border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 hover:border-[#387E89]/50 transition-all duration-300 w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transform">
                  Watch 2-Min Demo
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.p className="text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6 lg:mt-8 flex items-center justify-center gap-2 flex-wrap px-4" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                delay: 0.8,
                duration: 0.6
              }} viewport={{
                once: true
              }}>
                <div className="flex items-center gap-1">
                  <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
                  <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
                  <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
                  <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
                  <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
                </div>
                <span className="ml-2">4.9/5 from 200+ healthcare professionals</span>
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </MouseTrackerProvider>
  );
};

export default WhyS10AI;
