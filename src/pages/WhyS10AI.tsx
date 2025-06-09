
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { MouseTrackerProvider } from '../components/ui/cursor';
import { 
  Stethoscope, 
  Clock, 
  Users, 
  Heart, 
  Calendar,
  Shield,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const WhyS10AI = () => {
  return (
    <MouseTrackerProvider disableCursor={false}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-5 md:px-8 py-12 md:py-20">
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
                <Stethoscope className="w-5 h-5 text-[#143151]" />
                <span className="text-[#143151] text-sm font-medium">The Power of a Unified Platform</span>
              </Card>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#143151] mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why S10.AI?
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Other tools solve one problem. <strong>S10.ai transforms your entire practice.</strong> We are the only platform that integrates clinical relief with operational excellence, creating a healthier ecosystem for your clinicians, staff, and patients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all group"
              >
                See the Platform in Action
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="px-4 sm:px-5 md:px-8 py-16 bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151] mb-6">
                Stop Patching Problems. Start Solving Them.
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                You can buy an AI scribe and still have a chaotic front office. You can automate scheduling and still have clinician burnout. Point solutions create silos. <strong>S10.ai provides a complete workflow transformation</strong> by fixing both sides of the equation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: For the Clinician */}
        <section className="px-4 sm:px-5 md:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-3 rounded-full">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151]">
                    For the Clinician
                  </h2>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#143151] mb-4">
                  The Joy of Focused Medicine
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Streamline Documentation & Boost Well-being</strong>
                </p>
                <p className="text-gray-700 mb-6">
                  The burden of documentation is the biggest drain on a clinician's time and energy. We solve it completely. Our AI Medical Scribe, CRUSH, listens to natural patient conversations and instantly drafts pristine, specialty-specific clinical notes.
                </p>
              </div>
              
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200/40">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#387E89] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#143151] mb-2">Slash Documentation Time by 75%</h4>
                      <p className="text-gray-700">Reclaim over 2 hours every day. Eliminate "pajama time" spent charting at home.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#387E89] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#143151] mb-2">Maximise Patient Interaction</h4>
                      <p className="text-gray-700">With notes handled, you can be fully present with your patients, increasing face-time by over 40%.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#387E89] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#143151] mb-2">Boost Clinician Well-being</h4>
                      <p className="text-gray-700">By removing the primary driver of burnout, we help you get back to the joy of practicing medicine.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 2: For the Practice */}
        <section className="px-4 sm:px-5 md:px-8 py-16 bg-gradient-to-r from-[#387E89]/5 to-[#143151]/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200/40 order-2 md:order-1">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#387E89] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#143151] mb-2">Automate 85% of Front Office Tasks</h4>
                      <p className="text-gray-700">From patient scheduling and intake to insurance verification and prescription refills, BRAVO handles the administrative grind.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#387E89] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#143151] mb-2">Address Staffing Shortages</h4>
                      <p className="text-gray-700">Reduce dependency on manual administrative work by 30%, allowing your team to focus on high-value patient interactions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#387E89] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#143151] mb-2">Improve Financial Impact</h4>
                      <p className="text-gray-700">Accelerate your revenue cycle with automated coding. Practices see revenue increase by up to 40%.</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-3 rounded-full">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151]">
                    For the Practice
                  </h2>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#143151] mb-4">
                  The Power of a Resilient Operation
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Automate Your Front Office & Improve Financials</strong>
                </p>
                <p className="text-gray-700 mb-6">
                  Staffing shortages and administrative overhead can cripple a practice's growth and profitability. Our AI Staffing Agent, BRAVO, is your solution. BRAVO works 24/7 as your automated front-office engine, creating a seamless, efficient, and cost-effective operation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ultimate Goal Section */}
        <section className="px-4 sm:px-5 md:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-4 rounded-full">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151] mb-6">
                It All Leads to One Thing: Delivering Better Patient Care
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Why do we obsess over workflow? Because the ultimate outcome of a streamlined practice is a superior patient experience. When clinicians are unburdened and operations are frictionless, patients get the focused, timely, and attentive care they deserve. They feel heard, supported, and valued at every step.
              </p>
              
              <p className="text-xl font-semibold text-[#143151]">
                That is the S10.ai difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-4 sm:px-5 md:px-8 py-16 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143151] mb-6">
                Ready to See a Complete Transformation?
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Stop solving one problem at a time. Let us show you how a unified AI platform can elevate your entire practice in just 15 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
                >
                  Book Your Free Workflow Assessment
                  <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 w-full sm:w-auto"
                >
                  Have Questions? Talk to an Expert
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MouseTrackerProvider>
  );
};

export default WhyS10AI;
