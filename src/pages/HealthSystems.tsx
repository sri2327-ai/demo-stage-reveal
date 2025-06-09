
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { MouseTrackerProvider } from '../components/ui/cursor';
import { 
  Stethoscope, 
  Calendar, 
  TrendingUp, 
  Shield, 
  Users, 
  Heart,
  CheckCircle,
  ArrowRight,
  Building2,
  Target,
  Clock,
  DollarSign,
  Star,
  Lock,
  FileCheck,
  Globe,
  Award,
  Settings,
  Brain,
  Zap,
  Database,
  Network,
  BarChart3,
  Workflow
} from 'lucide-react';

const HealthSystems = () => {
  const unifiedPlatformBenefits = [
    {
      icon: <Brain className="w-8 h-8 text-[#143151]" />,
      title: 'Dual-Agent Intelligence',
      description: 'Unlike single-point solutions, our CRUSH + BRAVO platform addresses both clinical documentation and administrative workflows simultaneously, delivering comprehensive ROI.',
      stats: 'Complete workflow coverage'
    },
    {
      icon: <Network className="w-8 h-8 text-[#143151]" />,
      title: 'Unified Data Strategy',
      description: 'One platform means unified analytics, streamlined compliance, and coordinated AI governance across your entire health system.',
      stats: 'Single source of truth'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#143151]" />,
      title: 'Exponential ROI Growth',
      description: 'When clinical efficiency gains combine with administrative automation, the financial impact compounds - delivering up to 40% revenue increase.',
      stats: 'Up to 40% revenue boost'
    }
  ];

  const enterpriseAdvantages = [
    {
      icon: <Shield className="w-8 h-8 text-[#143151]" />,
      title: 'Enterprise-Grade Security',
      description: 'Built for health systems from day one with comprehensive compliance, audit trails, and enterprise data governance frameworks.',
      stats: 'HIPAA, GDPR, ISO 27001'
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#143151]" />,
      title: 'System-Wide Standardization',
      description: 'Deploy consistent AI workflows across departments while maintaining clinician autonomy and specialty-specific customization.',
      stats: 'Universal EHR integration'
    },
    {
      icon: <Target className="w-8 h-8 text-[#143151]" />,
      title: 'Strategic AI Partnership',
      description: 'Beyond software - we provide change management expertise, implementation strategy, and ongoing optimization for sustainable AI adoption.',
      stats: '90%+ adoption success'
    }
  ];

  const complianceLogos = [
    { name: 'HIPAA', icon: <Shield className="w-6 h-6" /> },
    { name: 'PIPEDA', icon: <Lock className="w-6 h-6" /> },
    { name: 'GDPR', icon: <Globe className="w-6 h-6" /> },
    { name: 'ISO 27001', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <MouseTrackerProvider disableCursor={false}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div 
              className="inline-block mb-6" 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.7 }}
            >
              <Card className="bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 backdrop-blur-sm border border-[#387E89]/20 px-4 py-2 inline-flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#143151]" />
                <span className="text-[#143151] text-sm font-medium">Enterprise-Grade Clinical AI</span>
              </Card>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#143151] mb-6 leading-tight" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Unify Your Clinical & Operational AI
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed" 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The single platform to solve clinician burnout and optimize system-wide operations. S10.ai synchronizes ambient clinical intelligence <strong>(CRUSH)</strong> with administrative automation <strong>(BRAVO)</strong> to deliver unparalleled ROI and adoption.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto">
                Request a Strategic Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Platform Solution Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#143151] mb-6">
                The Complete Workflow Solution
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Address clinical and operational friction simultaneously with our dual-agent platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* CRUSH Column */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/40 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#143151]">CRUSH</h3>
                      <p className="text-lg text-gray-600">AI Medical Scribe</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Listens to patient encounters and generates accurate, specialty-specific notes in your EHR, saving clinicians over 2 hours daily.
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
                <Card className="p-8 h-full bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200/40 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#143151]">BRAVO</h3>
                      <p className="text-lg text-gray-600">AI Staffing Agent</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Automates 85% of admin work—scheduling, intake, refills, and more—to boost efficiency and accelerate revenue.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unified Platform Advantage Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <div className="inline-block mb-6">
                <Card className="bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 backdrop-blur-sm border border-[#387E89]/20 px-6 py-3 inline-flex items-center gap-3 shadow-lg">
                  <Zap className="w-6 h-6 text-[#143151]" />
                  <span className="text-[#143151] text-lg font-semibold">Unified Platform Advantage</span>
                </Card>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#143151] mb-8 leading-tight">
                Beyond Single-Point Solutions
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                While competitors offer isolated tools, S10.ai delivers a unified platform where clinical and administrative AI work in harmony to multiply your impact.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {unifiedPlatformBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-8 h-full bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl hover:bg-white transition-all duration-300 group-hover:scale-105 group-hover:border-[#387E89]/30">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-[#143151]/20 group-hover:to-[#387E89]/20 transition-all duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#143151] mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 rounded-full">
                        <span className="text-sm font-semibold text-[#143151]">{benefit.stats}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="inline-block px-12 py-6 bg-gradient-to-r from-white/90 to-slate-50/90 backdrop-blur-sm border border-[#387E89]/20 shadow-xl">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-[#143151]">Training Data</div>
                      <div className="text-lg font-bold text-[#387E89]">10M+ Encounters</div>
                    </div>
                  </div>
                  
                  <div className="w-px h-12 bg-[#387E89]/30 hidden md:block"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-[#143151]">Adoption Rate</div>
                      <div className="text-lg font-bold text-green-600">90%+ Success</div>
                    </div>
                  </div>
                  
                  <div className="w-px h-12 bg-[#387E89]/30 hidden md:block"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-[#143151]">Security</div>
                      <div className="text-lg font-bold text-purple-600">Enterprise-Grade</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Implementation Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <div className="inline-block mb-6">
                <Card className="bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 backdrop-blur-sm border border-[#387E89]/20 px-6 py-3 inline-flex items-center gap-3 shadow-lg">
                  <Building2 className="w-6 h-6 text-[#143151]" />
                  <span className="text-[#143151] text-lg font-semibold">Enterprise Implementation</span>
                </Card>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#143151] mb-8 leading-tight">
                Built for Health System Scale
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                From pilot to system-wide deployment, we provide the infrastructure, support, and strategic guidance to ensure successful AI transformation at enterprise scale.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {enterpriseAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-8 h-full bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-200/50 group-hover:border-[#387E89]/30">
                    <div className="flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-[#143151]/20 group-hover:to-[#387E89]/20 transition-all duration-300">
                        {advantage.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#143151] mb-4">{advantage.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{advantage.description}</p>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 rounded-full self-start">
                        <span className="text-sm font-semibold text-[#143151]">{advantage.stats}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <Card className="p-8 lg:p-12 bg-gradient-to-br from-[#143151] to-[#387E89] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl leading-relaxed mb-6 italic">
                    "S10.ai's platform was a strategic overhaul of our workflow. We saw a 75% reduction in documentation time and a 42% increase in patient face-time. Their ability to improve both clinical and administrative efficiency is a true game-changer."
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Dr. Sarah Johnson</p>
                      <p className="text-white/80">Chief Medical Officer, Regional Health System</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Security & Trust Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151] mb-8">
                Enterprise-Grade Security & Compliance
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                {complianceLogos.map((compliance, index) => (
                  <motion.div
                    key={compliance.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                          <div className="text-white">{compliance.icon}</div>
                        </div>
                        <p className="font-semibold text-[#143151]">{compliance.name}</p>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Privacy Statement */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="inline-block px-12 py-6 bg-gradient-to-r from-white/90 to-slate-50/90 backdrop-blur-sm border border-[#387E89]/20 shadow-xl">
                  <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium text-[#143151]">Data Privacy</div>
                        <div className="text-lg font-bold text-[#387E89]">Zero Customer Data Training</div>
                      </div>
                    </div>
                    
                    <div className="w-px h-12 bg-[#387E89]/30 hidden md:block"></div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                        <Database className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium text-[#143151]">Data Storage</div>
                        <div className="text-lg font-bold text-[#387E89]">No Data Retention</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                S10.ai does not use customer data for model training and does not store patient or operational data. 
                Your information remains secure and private within your own systems.
              </p>

              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 hover:border-[#387E89]/50 transition-all duration-300"
              >
                Review Our Security Architecture
                <FileCheck className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </MouseTrackerProvider>
  );
};

export default HealthSystems;
