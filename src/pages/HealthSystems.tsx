
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
  Database
} from 'lucide-react';

const HealthSystems = () => {
  const benefitsData = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'Precision + Customization = Clinical Excellence',
      description: 'Our dual-agent AI (CRUSH + BRAVO) delivers specialty-specific documentation and workflow automation trained on 10M+ encounters, with provider-level customization that ensures 90%+ adoption rates.',
      gradient: 'from-blue-500 to-cyan-600',
      stats: '90%+ adoption rate'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: 'Maximize Financial Impact',
      description: 'Increase revenue up to 40% with AI-driven coding optimization and intelligent scheduling that works across both clinical and administrative workflows.',
      gradient: 'from-green-500 to-emerald-600',
      stats: 'Up to 40% revenue increase'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Operationalize AI with Confidence',
      description: 'As your strategic AI partner, we provide comprehensive change management, enterprise data strategies, and unparalleled transparency in healthcare AI implementation.',
      gradient: 'from-purple-500 to-indigo-600',
      stats: 'Enterprise-grade security'
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: 'Standardize with Deep Integration',
      description: 'Deploy one secure platform that integrates seamlessly with any EHR and your existing infrastructure, supporting organization-wide standards while maintaining clinician autonomy.',
      gradient: 'from-orange-500 to-red-600',
      stats: 'Universal EHR compatibility'
    }
  ];

  const clinicalAdvantages = [
    {
      icon: <Target className="w-6 h-6 text-[#143151]" />,
      title: 'Specialty-Specific Intelligence',
      description: 'Trained on diverse clinical encounters with discrete specialty labeling for accurate complex case documentation.'
    },
    {
      icon: <Settings className="w-6 h-6 text-[#143151]" />,
      title: 'Workflow-Level Customization',
      description: 'Adapts to each clinician\'s unique style, preferences, and organizational protocols automatically.'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#143151]" />,
      title: 'Dual-Agent Efficiency',
      description: 'Unlike single-point solutions, our CRUSH + BRAVO platform addresses both clinical and operational friction simultaneously.'
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
                <Card className="p-8 h-full bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/40 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
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

        {/* Enhanced Executive ROI & Control Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-20"
            >
              <div className="inline-block mb-6">
                <Card className="bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 backdrop-blur-sm border border-[#387E89]/20 px-6 py-3 inline-flex items-center gap-3 shadow-lg">
                  <Brain className="w-6 h-6 text-[#143151]" />
                  <span className="text-[#143151] text-lg font-semibold">Clinical Transformation Platform</span>
                </Card>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#143151] mb-8 leading-tight">
                Precision + Customization = <br />
                <span className="bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
                  Clinical Excellence
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed">
                We deliver provider-level personalization with the system-level governance, security, and financial results you need. Built for clinicians. Engineered for enterprise.
              </p>
              
              {/* Clinical Advantages Row */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {clinicalAdvantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="p-8 bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl hover:bg-white transition-all duration-300 group-hover:scale-105 group-hover:border-[#387E89]/30">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-xl flex items-center justify-center group-hover:from-[#143151]/20 group-hover:to-[#387E89]/20 transition-all duration-300">
                          {advantage.icon}
                        </div>
                        <h4 className="text-xl font-bold text-[#143151]">{advantage.title}</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Benefits Grid */}
            <div className="grid lg:grid-cols-2 gap-10">
              {benefitsData.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-10 h-full hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-sm border border-slate-200/50 group-hover:border-slate-300/70 group-hover:scale-[1.02] relative overflow-hidden">
                    {/* Subtle background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-8">
                        <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                          {benefit.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#143151] mb-3 group-hover:text-[#387E89] transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 rounded-full">
                            <span className="text-sm font-semibold text-[#143151]">{benefit.stats}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              viewport={{ once: true }}
              className="text-center mt-20"
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
                          {compliance.icon}
                        </div>
                        <p className="font-semibold text-[#143151]">{compliance.name}</p>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

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
