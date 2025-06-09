
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
  BarChart3,
  UserCheck,
  Zap,
  Database
} from 'lucide-react';

const HealthSystems = () => {
  const benefitsData = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: 'Maximize Financial Impact',
      description: 'Increase revenue up to 40% with AI-driven coding and optimized scheduling.',
      gradient: 'from-emerald-500 to-emerald-600',
      shadowColor: 'shadow-emerald-200/50'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: 'Drive Unmatched Adoption',
      description: 'Our patented IPKO™ technology allows deep customization, ensuring clinicians love and use the tool.',
      gradient: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-200/50'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Standardize with Confidence',
      description: 'Deploy one secure platform that integrates seamlessly with any EHR and your existing infrastructure.',
      gradient: 'from-indigo-500 to-indigo-600',
      shadowColor: 'shadow-indigo-200/50'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Partner in Responsible AI',
      description: 'We are your strategic partner for safe, secure, and compliant AI implementation.',
      gradient: 'from-slate-600 to-slate-700',
      shadowColor: 'shadow-slate-200/50'
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Improved Decorative Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-200/30 to-slate-200/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div 
              className="inline-block mb-8" 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.7 }}
            >
              <Card className="bg-gradient-to-r from-slate-800/10 to-blue-800/10 backdrop-blur-sm border border-slate-300/30 px-6 py-3 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <Building2 className="w-6 h-6 text-slate-700" />
                <span className="text-slate-700 font-semibold">Enterprise-Grade Clinical AI</span>
              </Card>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 leading-tight" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Unify Your Clinical &<br />Operational AI
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto mb-10 leading-relaxed font-medium" 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The single platform to solve clinician burnout and optimize system-wide operations. S10.ai synchronizes ambient clinical intelligence <span className="font-bold text-blue-700">(CRUSH)</span> with administrative automation <span className="font-bold text-emerald-700">(BRAVO)</span> to deliver unparalleled ROI and adoption.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-slate-800 to-blue-800 hover:from-slate-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all group text-lg px-8 py-4 h-auto">
                Request a Strategic Consultation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Platform Solution Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-6">
                The Complete Workflow Solution
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto font-medium">
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
                <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                      <Stethoscope className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-2">CRUSH</h3>
                      <p className="text-xl text-blue-700 font-semibold">AI Medical Scribe</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-lg">
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
                <Card className="p-8 h-full bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-2">BRAVO</h3>
                      <p className="text-xl text-emerald-700 font-semibold">AI Staffing Agent</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Automates 85% of admin work—scheduling, intake, refills, and more—to boost efficiency and accelerate revenue.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Executive ROI & Control Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-gradient-to-br from-slate-100 to-blue-100/50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-6">
                Built for Clinicians.<br />Engineered for Enterprise.
              </h2>
              <p className="text-xl text-slate-600 max-w-5xl mx-auto font-medium">
                We deliver provider-level personalization with the system-level governance, security, and financial results you need.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {benefitsData.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-8 h-full hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:scale-105 group ${benefit.shadowColor}`}>
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all`}>
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-white/80 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <Card className="p-12 lg:p-16 bg-gradient-to-br from-slate-800 to-blue-800 text-white relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl lg:text-3xl leading-relaxed mb-8 italic font-medium">
                    "S10.ai's platform was a strategic overhaul of our workflow. We saw a 75% reduction in documentation time and a 42% increase in patient face-time. Their ability to improve both clinical and administrative efficiency is a true game-changer."
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">Dr. Sarah Johnson</p>
                      <p className="text-blue-200 text-lg">Chief Medical Officer, Regional Health System</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Security & Trust Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-gradient-to-br from-slate-100 to-blue-100/50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-12">
                Enterprise-Grade Security & Compliance
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
                {complianceLogos.map((compliance, index) => (
                  <motion.div
                    key={compliance.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-8 bg-white hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                          {compliance.icon}
                        </div>
                        <p className="font-bold text-slate-800 text-lg">{compliance.name}</p>
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all duration-300 text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl"
              >
                Review Our Security Architecture
                <FileCheck className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </MouseTrackerProvider>
  );
};

export default HealthSystems;
