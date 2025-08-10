
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { MouseTrackerProvider } from '../components/ui/cursor';
import { FAQSection } from '../components/FAQSection';
import PrivatePracticeTestimonial from '../components/PrivatePracticeTestimonial';
import PrivatePracticeCaseStudies from '../components/PrivatePracticeCaseStudies';
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
      icon: <PiggyBank className="w-5 h-5 text-accent" />,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      value: '-50%',
      label: 'Patient No-Shows',
      icon: <Calendar className="w-5 h-5 text-accent" />,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      value: '+40%',
      label: 'Patient Face-Time',
      icon: <Clock className="w-5 h-5 text-accent" />,
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      value: '95%',
      label: 'Patient Satisfaction',
      icon: <Heart className="w-5 h-5 text-accent" />,
      gradient: 'from-pink-500 to-rose-600'
    }
  ];


  return (
    <MouseTrackerProvider disableCursor={false}>
      <div className="min-h-screen bg-[var(--gradient-secondary)]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-[var(--gradient-primary)] opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Modern Badge */}
            <motion.div 
              className="mb-6 sm:mb-8" 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.7 }}
            >
              <div className="bg-card/60 backdrop-blur-xl border border-border/50 px-4 py-2 sm:px-6 sm:py-3 inline-flex items-center gap-2 sm:gap-3 shadow-[var(--shadow-medium)] rounded-2xl group hover:shadow-[var(--shadow-large)] transition-all duration-300">
                <div className="w-6 h-6 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center">
                  <Target className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm sm:text-base font-semibold bg-[var(--gradient-primary)] bg-clip-text text-transparent">For Private Practices</span>
              </div>
            </motion.div>
            
            {/* Enhanced Main Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary mb-4 sm:mb-6 lg:mb-8 leading-[1.1] px-4" 
              initial={{ opacity: 0, y: -30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              More Patients.<br />
              <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                Less Paperwork.
              </span>
            </motion.h1>
            
            {/* Enhanced Subtitle */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 font-medium" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The all-in-one AI team for private practices. Stop drowning in administrative work and get back to what you do best.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-10 px-4"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button size="lg" className="w-full sm:w-auto bg-[var(--gradient-primary)] hover:shadow-[var(--shadow-large)] hover:scale-105 text-white shadow-[var(--shadow-medium)] transition-all duration-300 group px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-2xl border-0">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch a 5-Minute Demo
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/40 hover:shadow-[var(--shadow-soft)] text-primary px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-2xl transition-all duration-300">
                See Pricing
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4 font-medium">
                Join thousands of practices already transforming their workflows with S10.ai
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"></div>
                  ))}
                </div>
                <span className="ml-2">2,500+ happy practices</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced All-in-One Solution Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              viewport={{ once: true }} 
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Stethoscope className="w-4 h-4" />
                Your AI Team
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight">
                Ready on Day One
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
                S10.ai gives you a personal scribe and a front-office assistant in one simple platform.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Enhanced CRUSH Card */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 lg:p-10 h-full bg-card/80 backdrop-blur-xl border border-border/50 hover:shadow-[var(--shadow-large)] hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gradient-primary)] opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 sm:gap-6 mb-6 lg:mb-8">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[var(--gradient-primary)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-medium)]">
                        <FileText className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-tight">CRUSH</h3>
                        <p className="text-base sm:text-lg lg:text-xl text-accent font-semibold">Your AI Medical Scribe</p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                      Saves you 2+ hours on charting every day. Generates perfect, customized notes and codes them automatically. No more after-hours work.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Enhanced BRAVO Card */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }} 
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 lg:p-10 h-full bg-card/80 backdrop-blur-xl border border-border/50 hover:shadow-[var(--shadow-large)] hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 sm:gap-6 mb-6 lg:mb-8">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-medium)]">
                        <Headphones className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-tight">BRAVO</h3>
                        <p className="text-base sm:text-lg lg:text-xl text-accent font-semibold">Your AI Front-Office Assistant</p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                      Works 24/7 to automate scheduling, handle patient intake, and manage refills, reducing your staff's administrative burden.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Quantifiable Results Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/20 via-accent/5 to-primary/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              viewport={{ once: true }} 
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                Proven Results
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight">
                Run a More Profitable Practice
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
                Our platform delivers an immediate return on investment.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-6 sm:p-8 text-center bg-card/80 backdrop-blur-xl border border-border/50 hover:shadow-[var(--shadow-large)] hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center shadow-[var(--shadow-soft)]`}>
                          <div className="text-white">
                            {metric.icon}
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-2 sm:mb-3">
                        {metric.value}
                      </div>
                      <div className="text-sm sm:text-base text-muted-foreground font-semibold leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonial Section */}
        <PrivatePracticeTestimonial />

        {/* Enhanced Case Study Section */}
        <PrivatePracticeCaseStudies />

        {/* FAQ Section */}
        <FAQSection
          title="Questions & answers"
          subtitle="Everything you need to know about S10.AI for private practices"
          faqs={privatePracticeFAQs}
        />

        {/* Enhanced Final CTA Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <CheckCircle className="w-4 h-4" />
                Get Started Today
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight">
                Ready for a Smarter Practice?
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 font-medium leading-relaxed">
                See how S10.ai fits your workflow and budget. Setup is simple, and the results are immediate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button size="lg" className="w-full sm:w-auto bg-[var(--gradient-primary)] hover:shadow-[var(--shadow-large)] hover:scale-105 text-white shadow-[var(--shadow-medium)] transition-all duration-300 group px-8 py-4 lg:px-10 lg:py-5 text-lg lg:text-xl font-bold rounded-2xl">
                  Get a 15-Minute Demo
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/40 hover:shadow-[var(--shadow-soft)] text-primary px-8 py-4 lg:px-10 lg:py-5 text-lg lg:text-xl font-bold rounded-2xl transition-all duration-300">
                  View Pricing
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-8 font-medium">
                No setup fees • Cancel anytime • 30-day money-back guarantee
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </MouseTrackerProvider>
  );
};

export default PrivatePractice;
