
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Shield, Zap, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';
import { AnimatedCRUSH } from '@/components/AnimatedCRUSH';
import { AnimatedBRAVO } from '@/components/AnimatedBRAVO';

const Presentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Section 1: Hero */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            The Future of
            <span className="block bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent">
              Healthcare AI
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto"
          >
            S10.AI transforms healthcare operations with intelligent automation, 
            reducing administrative burden by 75% while improving patient care quality.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="bg-white text-[#143151] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Schedule Demo
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Meet Your AI Teammates */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your AI Teammates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized AI agents work seamlessly together to transform your healthcare operations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">CRUSH AI Scribe</h3>
                    <p className="text-gray-600">Real-time Clinical Documentation</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>99.9% accuracy in real-time transcription</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Automatic SOAP note generation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Seamless EHR integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Reduces documentation time by 80%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#387E89] to-[#143151] rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">BRAVO AI Agent</h3>
                    <p className="text-gray-600">Front Office Automation</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>24/7 intelligent call handling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Automated appointment scheduling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Smart reminder systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>35% reduction in no-shows</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">CRUSH AI in Action</h4>
                  <p className="text-gray-600 text-sm">Watch real-time clinical documentation</p>
                </div>
                <div className="p-6">
                  <AnimatedCRUSH />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">BRAVO AI in Action</h4>
                  <p className="text-gray-600 text-sm">Experience automated patient engagement</p>
                </div>
                <div className="p-6">
                  <AnimatedBRAVO />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Before vs After (Simplified) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before vs After S10.AI
            </h2>
            <p className="text-lg text-gray-600">
              See the transformation in healthcare operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-400"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Before S10.AI</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>2-3 hours daily on documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>High staff turnover from burnout</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Missed appointments and scheduling errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Limited patient face time</span>
                </li>
              </ul>
            </motion.div>

            {/* After Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-400"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">After S10.AI</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>20 minutes daily on documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Improved staff satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated scheduling with 35% less no-shows</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>More quality time with patients</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: ROI & Benefits (Simplified) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-600">
              Healthcare organizations see immediate impact
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { number: "75%", label: "Reduction in Admin Time", icon: Clock },
              { number: "35%", label: "Fewer No-Shows", icon: Users },
              { number: "99.9%", label: "Documentation Accuracy", icon: Shield },
              { number: "80%", label: "Faster Note Completion", icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center border border-blue-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join hundreds of healthcare providers already using S10.AI
            </p>
            <button className="bg-white text-[#143151] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
