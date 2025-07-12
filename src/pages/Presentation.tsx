import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Heart, 
  Clock, 
  Users, 
  Shield, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Calendar,
  DollarSign,
  Target,
  Award,
  Play,
  ChevronDown,
  BarChart3,
  FileText,
  MessageSquare
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      let startTime: number;
      let animationId: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };
      
      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }
  }, [isInView, end, duration, hasStarted]);

  return <span ref={ref}>{count}</span>;
};

const AnimatedStat = ({ icon: Icon, value, label, suffix = "" }: { 
  icon: any; 
  value: number; 
  label: string; 
  suffix?: string; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
        className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <div className="text-3xl sm:text-4xl font-bold text-[#143151] mb-2">
        <CountUp end={value} />{suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, quote, delay = 0 }: {
  name: string;
  role: string;
  quote: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
    >
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-4 italic">"{quote}"</blockquote>
      <div>
        <div className="font-semibold text-[#143151]">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </motion.div>
  );
};

export default function Presentation() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements - matching Hero component style */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-48 md:w-64 h-48 md:h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-56 md:w-72 h-56 md:h-72 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/3 w-28 md:w-40 h-28 md:h-40 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 inline-flex items-center gap-2 mb-6">
              <Zap className="w-4 h-4 text-black flex-shrink-0" />
              <span className="text-black text-sm font-medium">AI-Powered Clinical Excellence</span>
            </Card>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
          >
            The AI That Charts & Staffs —{' '}
            <span className="bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
              So You Don't Have To
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 bg-white/50 backdrop-blur-sm rounded-lg p-3">
              <Zap className="w-5 h-5 text-[#387E89]" />
              <span className="text-sm font-semibold text-black">75% faster charting</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/50 backdrop-blur-sm rounded-lg p-3">
              <Shield className="w-5 h-5 text-[#387E89]" />
              <span className="text-sm font-semibold text-black">7,000+ app integrations</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/50 backdrop-blur-sm rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-[#387E89]" />
              <span className="text-sm font-semibold text-black">HIPAA compliant</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size={isMobile ? "default" : "lg"}
              className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a 15-Minute Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12"
          >
            <ChevronDown className="w-6 h-6 mx-auto text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* The Burnout is Real */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
              The Burnout is Real
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While you're saving lives, administrative burden is draining yours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <AnimatedStat
                icon={Clock}
                value={4}
                suffix="+"
                label="hours daily on EHR documentation"
              />
              <AnimatedStat
                icon={Users}
                value={50}
                suffix="%"
                label="of doctors experiencing burnout"
              />
              <AnimatedStat
                icon={TrendingUp}
                value={30}
                suffix="%"
                label="patient no-show rate"
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Run Your Burnout Score
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-blue-100 shadow-lg p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center">
                    <Clock className="w-12 h-12 text-red-600" />
                  </div>
                  <blockquote className="text-gray-600 italic text-lg mb-4">
                    "It's 10 PM and I'm still finishing charts from this morning..."
                  </blockquote>
                  <div className="text-sm text-gray-500">- Dr. Sarah M., Family Medicine</div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Your AI Teammates */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
              Meet Your AI Teammates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CRUSH and BRAVO work 24/7 so you can focus on what matters most - your patients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#143151] mb-4">CRUSH</h3>
                  <p className="text-gray-600 mb-6">Your AI Medical Scribe</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center justify-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Real-time documentation</li>
                    <li className="flex items-center justify-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> SOAP note generation</li>
                    <li className="flex items-center justify-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> ICD-10 coding assistance</li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#387E89] to-[#143151] rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#143151] mb-4">BRAVO</h3>
                  <p className="text-gray-600 mb-6">Your AI Staffing Agent</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center justify-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Patient scheduling</li>
                    <li className="flex items-center justify-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Appointment confirmations</li>
                    <li className="flex items-center justify-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Follow-up coordination</li>
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Calculate Your ROI
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#143151] text-center mb-12"
          >
            Before vs After S10.AI
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-red-50 border border-red-200 p-8 h-full">
                <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">BEFORE</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">4+ hours daily on documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">Constant interruptions for scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">Weekend chart catch-up</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">High staff turnover</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">Burnout and exhaustion</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-green-50 border border-green-200 p-8 h-full">
                <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">AFTER</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">75% faster documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Automated scheduling & follow-ups</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Work-life balance restored</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Happy, efficient staff</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Focus on patient care</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg"
              variant="outline"
              className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10"
            >
              <Play className="w-5 h-5 mr-2" />
              See It In Action
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Proof & Templates */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
              Proven Templates & Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of clinicians using our battle-tested documentation templates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Family Medicine", count: "1,250+ templates", icon: Heart },
              { title: "Emergency Medicine", count: "890+ templates", icon: Zap },
              { title: "Internal Medicine", count: "2,100+ templates", icon: Users }
            ].map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-blue-100 shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                    <specialty.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#143151] mb-2">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.count}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg"
              variant="outline"
              className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore Templates
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ROI & Impact - Matching existing ROISection style */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
              Measurable ROI for Clinicians
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              S10.AI delivers quantifiable returns for healthcare providers without disrupting existing workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-shadow h-full p-6 text-center">
                <div className="bg-blue-50 p-4 rounded-full w-max mx-auto mb-4">
                  <Zap className="w-10 h-10 text-[#143151]" />
                </div>
                <div className="text-3xl font-bold text-[#143151] mb-2">
                  <CountUp end={75} />%
                </div>
                <div className="text-sm text-gray-600">faster charting</div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-shadow h-full p-6 text-center">
                <div className="bg-blue-50 p-4 rounded-full w-max mx-auto mb-4">
                  <DollarSign className="w-10 h-10 text-[#143151]" />
                </div>
                <div className="text-3xl font-bold text-[#143151] mb-2">
                  $<CountUp end={150} />K
                </div>
                <div className="text-sm text-gray-600">average annual savings</div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-shadow h-full p-6 text-center">
                <div className="bg-blue-50 p-4 rounded-full w-max mx-auto mb-4">
                  <Clock className="w-10 h-10 text-[#143151]" />
                </div>
                <div className="text-3xl font-bold text-[#143151] mb-2">
                  <CountUp end={15} /> hrs
                </div>
                <div className="text-sm text-gray-600">weekly time savings</div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-shadow h-full p-6 text-center">
                <div className="bg-blue-50 p-4 rounded-full w-max mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-[#143151]" />
                </div>
                <div className="text-3xl font-bold text-[#143151] mb-2">
                  <CountUp end={40} />%
                </div>
                <div className="text-sm text-gray-600">productivity increase</div>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Calculate Your Practice's ROI</h3>
                <p className="text-white/80">
                  See how much time and money your practice could save with S10.AI
                </p>
              </div>
              <Button
                className="bg-white text-[#143151] hover:bg-blue-50 shadow-lg"
                size="lg"
              >
                <Target className="w-5 h-5 mr-2" />
                Use ROI Calculator
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
              What Clinicians Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real doctors using S10.AI every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Dr. Willem Chen"
              role="Emergency Medicine Physician"
              quote="S10.AI cut my documentation time by 70%. I actually get to go home on time now."
              delay={0.2}
            />
            <TestimonialCard
              name="Dr. Smriti Patel"
              role="Family Medicine"
              quote="The AI templates are incredibly accurate. It's like having a brilliant scribe who never gets tired."
              delay={0.4}
            />
            <TestimonialCard
              name="Dr. Lisbeth Rodriguez"
              role="Internal Medicine"
              quote="My staff loves BRAVO. Patient scheduling runs itself now, and our no-show rate dropped 40%."
              delay={0.6}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              See More Success Stories
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Matching CallToAction component style */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
              Ready to transform your practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of clinicians who've already transformed their practice with S10.AI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Free demo</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Custom plan</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">No setup fees</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Demo Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 w-full sm:w-auto"
              >
                Try Risk-Free for 30 Days
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}