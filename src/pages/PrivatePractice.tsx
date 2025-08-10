
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { MouseTrackerProvider } from '../components/ui/cursor';
import { FAQSection } from '../components/FAQSection';
import { 
  Stethoscope, 
  Headphones, 
  TrendingUp, 
  Clock, 
  Users, 
  Heart,
  CheckCircle,
  ArrowRight,
  Play,
  DollarSign,
  Star,
  FileText,
  Calendar,
  Target,
  PiggyBank,
  Award
} from 'lucide-react';

const PrivatePractice = () => {
  const privatePracticeFAQs = [
    {
      question: "How does S10.AI support patient-centered care during consultations?",
      answer: "S10.AI's CRUSH medical scribe listens to your patient conversations and generates comprehensive notes in real-time, allowing you to maintain eye contact and focus entirely on your patient. The AI captures medical history, symptoms, and treatment plans accurately, so you can be fully present during each consultation."
    },
    {
      question: "Why is patient-centered care important for private practice providers?",
      answer: "Patient-centered care leads to better health outcomes, increased patient satisfaction, and stronger patient-provider relationships. In private practice, this translates to higher patient retention, positive word-of-mouth referrals, and improved practice reputation. S10.AI helps you deliver this level of care by removing administrative burdens that take away from patient interaction."
    },
    {
      question: "How does S10.AI help maintain continuity in patient-centered care?",
      answer: "S10.AI maintains detailed, consistent documentation across all patient visits, ensuring that care plans and patient preferences are accurately tracked over time. BRAVO, our AI front-office assistant, also helps maintain continuity by managing follow-up appointments, medication refills, and patient communications seamlessly."
    },
    {
      question: "Who is responsible for delivering patient-centered care with S10.AI?",
      answer: "You, the healthcare provider, remain fully responsible for all medical decisions and patient care. S10.AI serves as your AI assistant, handling documentation and administrative tasks so you can focus on what matters most - providing excellent patient care. The AI supports your practice but never replaces your clinical expertise and judgment."
    },
    {
      question: "How does S10.AI ensure accurate documentation of patient interactions?",
      answer: "S10.AI uses advanced medical AI trained on millions of clinical encounters to accurately capture and document patient interactions. The system understands medical terminology, can differentiate between relevant clinical information and casual conversation, and generates notes that are both comprehensive and compliant with medical documentation standards."
    }
  ];

  const metrics = [
    {
      value: '$150,000+',
      label: 'Annual Cost Savings',
      icon: <PiggyBank className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#143151]" />
    },
    {
      value: '-50%',
      label: 'Patient No-Shows',
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#387E89]" />
    },
    {
      value: '+40%',
      label: 'Patient Face-Time',
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#143151]" />
    },
    {
      value: '95%',
      label: 'Patient Satisfaction',
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#387E89]" />
    }
  ];

  const caseStudies = [
    {
      title: 'Functional Medicine Practice Cuts Charting Time from 60 to 15 Mins',
      description: 'Learn how Dr. Martinez transformed her practice workflow and patient care quality.',
      cta: 'Read Now'
    },
    {
      title: 'Family Physician Saves 1.5 Hours Daily vs. Other AI Tools',
      description: 'Discover why Dr. Johnson switched from his previous AI solution to S10.ai.',
      cta: 'Read Now'
    }
  ];

  return (
    <MouseTrackerProvider disableCursor={false}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-gradient-to-br from-[#143151]/10 to-[#387E89]/10 rounded-full blur-3xl opacity-80"></div>
            <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-48 lg:h-48 bg-gradient-to-br from-[#387E89]/10 to-[#143151]/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px]"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div 
              className="mb-4 sm:mb-6" 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-foreground backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 inline-flex items-center gap-1.5 sm:gap-2 shadow-lg rounded-full">
                <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm lg:text-base font-semibold">For Private Practices</span>
              </div>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#143151] mb-3 sm:mb-4 lg:mb-6 leading-tight px-4" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              More Patients.<br />
              <span className="bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
                Less Paperwork.
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4" 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The all-in-one AI team for private practices. Stop drowning in administrative work and get back to what you do best.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-2xl hover:shadow-3xl transition-all group px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" />
                Watch a 5-Minute Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-[#143151] hover:bg-[#387E89]/10 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold underline">
                See Pricing
              </Button>
            </motion.div>

            <motion.p 
              className="text-xs sm:text-sm lg:text-base text-gray-500 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Join thousands of practices already transforming their workflows with S10.ai
            </motion.p>
          </div>
        </section>

        {/* All-in-One Solution Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-8 sm:mb-12 lg:mb-16"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4">
                Your AI Team, Ready on Day One
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                S10.ai gives you a personal scribe and a front-office assistant in one simple platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* CRUSH Column */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-6 lg:p-8 h-full bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/40 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 lg:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] leading-tight">CRUSH</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600">Your AI Medical Scribe</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    Saves you 2+ hours on charting every day. Generates perfect, customized notes and codes them automatically. No more after-hours work.
                  </p>
                </Card>
              </motion.div>

              {/* BRAVO Column */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }} 
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-6 lg:p-8 h-full bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/40 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 lg:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] leading-tight">BRAVO</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600">Your AI Front-Office Assistant</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    Works 24/7 to automate scheduling, handle patient intake, and manage refills, reducing your staff's administrative burden.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quantifiable Results Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-8 sm:mb-12 lg:mb-16"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4">
                Run a More Profitable Practice
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our platform delivers an immediate return.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-3 sm:p-4 lg:p-6 text-center bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center mb-2 sm:mb-3">
                      {metric.icon}
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#143151] mb-1 lg:mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-sm text-gray-600 font-medium leading-tight">
                      {metric.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <Card className="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-[#143151] to-[#387E89] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-10 md:-translate-y-16 translate-x-10 md:translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full translate-y-8 md:translate-y-12 -translate-x-8 md:-translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 md:gap-2 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6 italic">
                    "As a solo practitioner, S10.ai is the best hire I've ever made. CRUSH saves me 90 minutes a day, and BRAVO handles the scheduling headaches. My revenue is up, and my stress is down."
                  </blockquote>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-base md:text-lg">Dr. Sarah Thompson</p>
                      <p className="text-white/80 text-sm md:text-base">Family Medicine</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151] mb-4">
                See How We Help Practices Like Yours
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 md:p-8 h-full bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-3 md:gap-4 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-lg flex items-center justify-center group-hover:from-[#143151]/20 group-hover:to-[#387E89]/20 transition-all duration-300">
                        <Award className="w-5 h-5 md:w-6 md:h-6 text-[#143151]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-[#143151] mb-2 group-hover:text-[#387E89] transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                          {study.description}
                        </p>
                        <Button variant="ghost" className="text-[#387E89] hover:bg-[#387E89]/10 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform">
                          {study.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Questions & answers"
          subtitle="Everything you need to know about S10.AI for private practices"
          faqs={privatePracticeFAQs}
        />

        {/* Final CTA Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151] mb-4">
                Ready for a Smarter Practice?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                See how S10.ai fits your workflow and budget. Setup is simple, and the results are immediate.
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-2xl hover:shadow-3xl transition-all group px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold">
                Get a 15-Minute Demo
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </MouseTrackerProvider>
  );
};

export default PrivatePractice;
