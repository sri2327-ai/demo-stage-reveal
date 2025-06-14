
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
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#143151]" />,
      title: 'Dual-Agent Intelligence',
      description: 'Unlike single-point solutions, our CRUSH + BRAVO platform addresses both clinical documentation and administrative workflows simultaneously, delivering comprehensive ROI.',
      stats: 'Complete workflow coverage'
    },
    {
      icon: <Network className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#143151]" />,
      title: 'Unified Data Strategy',
      description: 'One platform means unified analytics, streamlined compliance, and coordinated AI governance across your entire health system.',
      stats: 'Single source of truth'
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#143151]" />,
      title: 'Exponential ROI Growth',
      description: 'When clinical efficiency gains combine with administrative automation, the financial impact compounds - delivering up to 40% revenue increase.',
      stats: 'Up to 40% revenue boost'
    }
  ];

  const enterpriseAdvantages = [
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#143151]" />,
      title: 'Enterprise-Grade Security',
      description: 'Built for health systems from day one with comprehensive compliance, audit trails, and enterprise data governance frameworks.',
      stats: 'HIPAA, GDPR, ISO 27001'
    },
    {
      icon: <Workflow className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#143151]" />,
      title: 'System-Wide Standardization',
      description: 'Deploy consistent AI workflows across departments while maintaining clinician autonomy and specialty-specific customization.',
      stats: 'Universal EHR integration'
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#143151]" />,
      title: 'Strategic AI Partnership',
      description: 'Beyond software - we provide change management expertise, implementation strategy, and ongoing optimization for sustainable AI adoption.',
      stats: '90%+ adoption success'
    }
  ];

  const complianceLogos = [
    { name: 'HIPAA', icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
    { name: 'PIPEDA', icon: <Lock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
    { name: 'GDPR', icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
    { name: 'ISO 27001', icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> }
  ];

  return (
    <MouseTrackerProvider disableCursor={false}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Strategic Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-96 lg:h-96 bg-gradient-to-br from-[#143151]/10 to-[#387E89]/10 rounded-full blur-3xl opacity-80"></div>
            <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 lg:w-80 lg:h-80 bg-gradient-to-br from-[#387E89]/10 to-[#143151]/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl opacity-60"></div>
            
            {/* Strategic Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px]"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Executive Badge */}
            <motion.div 
              className="text-center mb-4 sm:mb-6 lg:mb-8" 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 inline-flex items-center gap-2 shadow-lg rounded-full">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                <span className="text-black text-xs sm:text-sm lg:text-base font-semibold">Strategic AI Transformation for Health Systems</span>
              </div>
            </motion.div>
            
            {/* Executive-Focused Headline */}
            <motion.h1 
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#143151] mb-4 sm:mb-6 lg:mb-8 leading-tight px-4" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Accelerate Revenue.<br />
              <span className="bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
                Reduce Costs.
              </span><br />
              Scale Operations.
            </motion.h1>
            
            {/* Value Proposition */}
            <motion.p 
              className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-5xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed font-medium px-4" 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The unified AI platform that delivers <strong className="text-[#143151]">40% revenue growth</strong> while reducing operational costs by <strong className="text-[#143151]">60%</strong>. Transform your health system with enterprise-grade clinical and administrative AI.
            </motion.p>

            {/* Key Metrics Row */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-6 sm:mb-8 lg:mb-12 px-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#143151]">40%</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Revenue Increase</div>
              </div>
              <div className="hidden sm:block w-px h-8 sm:h-12 lg:h-16 bg-[#387E89]/30"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#143151]">60%</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Cost Reduction</div>
              </div>
              <div className="hidden sm:block w-px h-8 sm:h-12 lg:h-16 bg-[#387E89]/30"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#143151]">90%</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Staff Satisfaction</div>
              </div>
              <div className="hidden sm:block w-px h-8 sm:h-12 lg:h-16 bg-[#387E89]/30"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#143151]">6 Mo</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Full ROI</div>
              </div>
            </motion.div>

            {/* Executive CTA */}
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-2xl hover:shadow-3xl transition-all group px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold">
                  Schedule Executive Briefing
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-[#387E89] text-[#143151] hover:bg-[#387E89]/10 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold">
                  View ROI Calculator
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2" />
                </Button>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 max-w-2xl mx-auto">
                Join 50+ health systems already transforming their operations with S10.ai
              </p>
            </motion.div>
          </div>
        </section>

        {/* Platform Solution Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-8 sm:mb-12 lg:mb-16"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4 lg:mb-6">
                The Complete Workflow Solution
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Address clinical and operational friction simultaneously with our dual-agent platform.
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
                      <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] leading-tight">CRUSH</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600">AI Medical Scribe</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
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
                <Card className="p-4 sm:p-6 lg:p-8 h-full bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/40 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 lg:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] leading-tight">BRAVO</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600">AI Staffing Agent</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    Automates 85% of admin work—scheduling, intake, refills, and more—to boost efficiency and accelerate revenue.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unified Platform Advantage Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-block mb-4 md:mb-6">
                <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-4 py-2 md:px-6 md:py-3 inline-flex items-center gap-2 md:gap-3 shadow-lg">
                  <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                  <span className="text-black text-sm md:text-lg font-semibold">Unified Platform Advantage</span>
                </Card>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143151] mb-6 md:mb-8 leading-tight">
                Beyond Single-Point Solutions
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed">
                While competitors offer isolated tools, S10.ai delivers a unified platform where clinical and administrative AI work in harmony to multiply your impact.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {unifiedPlatformBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-6 md:p-8 h-full bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl hover:bg-white transition-all duration-300 group-hover:scale-105 group-hover:border-[#387E89]/30">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:from-[#143151]/20 group-hover:to-[#387E89]/20 transition-all duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#143151] mb-3 md:mb-4">{benefit.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">{benefit.description}</p>
                      <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 rounded-full">
                        <span className="text-xs md:text-sm font-semibold text-[#143151]">{benefit.stats}</span>
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
              <Card className="inline-block px-8 py-4 md:px-12 md:py-6 bg-gradient-to-r from-white/90 to-slate-50/90 backdrop-blur-sm border border-[#387E89]/20 shadow-xl">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs md:text-sm font-medium bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">Training Data</div>
                      <div className="text-sm md:text-lg font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">10M+ Encounters</div>
                    </div>
                  </div>
                  
                  <div className="w-px h-8 md:h-12 bg-[#387E89]/30 hidden md:block"></div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs md:text-sm font-medium bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">Adoption Rate</div>
                      <div className="text-sm md:text-lg font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">90%+ Success</div>
                    </div>
                  </div>
                  
                  <div className="w-px h-8 md:h-12 bg-[#387E89]/30 hidden md:block"></div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs md:text-sm font-medium bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">Security</div>
                      <div className="text-sm md:text-lg font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">Enterprise-Grade</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Implementation Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-block mb-4 md:mb-6">
                <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-4 py-2 md:px-6 md:py-3 inline-flex items-center gap-2 md:gap-3 shadow-lg">
                  <Building2 className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                  <span className="text-black text-sm md:text-lg font-semibold">Enterprise Implementation</span>
                </Card>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143151] mb-6 md:mb-8 leading-tight">
                Built for Health System Scale
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed">
                From pilot to system-wide deployment, we provide the infrastructure, support, and strategic guidance to ensure successful AI transformation at enterprise scale.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              {enterpriseAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-6 md:p-8 h-full bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-200/50 group-hover:border-[#387E89]/30">
                    <div className="flex flex-col">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:from-[#143151]/20 group-hover:to-[#387E89]/20 transition-all duration-300">
                        {advantage.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#143151] mb-3 md:mb-4">{advantage.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 flex-grow">{advantage.description}</p>
                      <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 rounded-full self-start">
                        <span className="text-xs md:text-sm font-semibold text-[#143151]">{advantage.stats}</span>
                      </div>
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
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-full translate-y-10 md:translate-y-12 -translate-x-10 md:-translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 md:gap-2 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6 italic">
                    "S10.ai's platform was a strategic overhaul of our workflow. We saw a 75% reduction in documentation time and a 42% increase in patient face-time. Their ability to improve both clinical and administrative efficiency is a true game-changer."
                  </blockquote>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-base md:text-lg">Dr. Sarah Johnson</p>
                      <p className="text-white/80 text-sm md:text-base">Chief Medical Officer, Regional Health System</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Security & Trust Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-block mb-4 md:mb-6">
                <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-4 py-2 md:px-6 md:py-3 inline-flex items-center gap-2 md:gap-3 shadow-lg">
                  <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                  <span className="text-black text-sm md:text-lg font-semibold">Security & Compliance</span>
                </Card>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143151] mb-6 md:mb-8 leading-tight">
                Enterprise-Grade Security
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed">
                Built with the highest security standards and compliance frameworks to protect your data and maintain trust.
              </p>
            </motion.div>

            {/* Compliance Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
              {complianceLogos.map((compliance, index) => (
                <motion.div
                  key={compliance.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-4 md:p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-slate-200/50 group-hover:scale-105 group-hover:border-[#387E89]/30 h-full">
                    <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center border-2 border-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <div className="text-white">{compliance.icon}</div>
                      </div>
                      <div>
                        <p className="font-bold text-sm md:text-base text-[#143151] mb-1">{compliance.name}</p>
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mx-auto" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Security Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                viewport={{ once: true }}
              >
                <Card className="p-6 md:p-8 bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#143151] mb-3">Data Privacy</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
                        Zero customer data training policy ensures your sensitive information remains completely private and secure.
                      </p>
                      <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full">
                        <span className="text-xs md:text-sm font-semibold text-green-700">No Data Retention</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }} 
                viewport={{ once: true }}
              >
                <Card className="p-6 md:p-8 bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#143151] mb-3">Secure Infrastructure</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
                        Enterprise-grade encryption, secure data processing, and comprehensive audit trails for complete transparency.
                      </p>
                      <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full">
                        <span className="text-xs md:text-sm font-semibold text-purple-700">End-to-End Encryption</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }} 
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  S10.ai maintains the highest security standards while ensuring your data remains private and secure within your own systems.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base"
                  >
                    Review Security Documentation
                    <FileCheck className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 hover:border-[#387E89]/50 transition-all duration-300 text-sm md:text-base"
                  >
                    Schedule Security Assessment
                    <Shield className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MouseTrackerProvider>
  );
};

export default HealthSystems;
