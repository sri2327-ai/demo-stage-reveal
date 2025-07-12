import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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

  // Aurora background animation with green colors
  const color = useMotionValue("#387E89");

  useEffect(() => {
    animate(color, ["#387E89", "#143151", "#4A9B8E", "#2F6B78"], {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
      >
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 sm:px-4 py-2 inline-flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-white text-sm font-medium">AI-Powered Clinical Excellence</span>
            </Card>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-4xl"
          >
            The AI That Charts & Staffs — So You Don't Have To
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl leading-relaxed"
          >
            Transform your practice with AI that handles documentation and staffing, 
            so you can focus on what matters most - your patients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm rounded-xl py-2 sm:py-3 px-3 sm:px-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-sm text-white/90">75% faster charting</span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm rounded-xl py-2 sm:py-3 px-3 sm:px-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-sm text-white/90">7,000+ app integrations</span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm rounded-xl py-2 sm:py-3 px-3 sm:px-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-sm text-white/90">HIPAA compliant</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-white transition-colors hover:bg-white/20 text-sm sm:text-base font-semibold w-full sm:w-auto"
            >
              Book a 15 minute consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* The Burnout is Real */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] mb-6 leading-tight">
              The Burnout is Real
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              While you're saving lives, administrative burden is draining yours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl overflow-hidden">
                {/* Video placeholder with play button */}
                <div className="aspect-video relative bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Simulated video thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-900/20"></div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded">LIVE</div>
                  
                  {/* Play button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-white/30 transition-all group"
                  >
                    <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </motion.button>
                  
                  {/* Video title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">Dr. Sarah's Reality: 10 PM Chart Marathon</h3>
                    <p className="text-sm text-white/80">See what burnout looks like in real healthcare</p>
                  </div>
                </div>
                
                {/* Video description below */}
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">Real footage from a family practice clinic</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Watch as Dr. Sarah works late into the night, struggling with EHR documentation 
                    that should have taken minutes, not hours.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/50 to-red-100/80 p-8 rounded-3xl shadow-xl border border-red-100/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group backdrop-blur-sm"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
                  <div className="relative text-center">
                    <div className="text-5xl font-black bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent mb-3 group-hover:from-red-700 group-hover:via-red-800 group-hover:to-red-900 transition-all duration-300">4+</div>
                    <div className="text-sm text-gray-700 font-bold uppercase tracking-wider">hours/day on EHRs</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/50 to-red-100/80 p-8 rounded-3xl shadow-xl border border-orange-100/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group backdrop-blur-sm"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-2xl"></div>
                  <div className="relative text-center">
                    <div className="text-5xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-red-700 bg-clip-text text-transparent mb-3 group-hover:from-orange-700 group-hover:via-red-700 group-hover:to-red-800 transition-all duration-300">1 in 2</div>
                    <div className="text-sm text-gray-700 font-bold uppercase tracking-wider">clinicians face burnout</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden bg-gradient-to-br from-white via-rose-50/50 to-red-100/80 p-8 rounded-3xl shadow-xl border border-rose-100/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group backdrop-blur-sm"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-500/10 to-red-500/10 rounded-full blur-2xl"></div>
                  <div className="relative text-center">
                    <div className="text-5xl font-black bg-gradient-to-r from-rose-600 via-red-600 to-red-700 bg-clip-text text-transparent mb-3 group-hover:from-rose-700 group-hover:via-red-700 group-hover:to-red-800 transition-all duration-300">30%</div>
                    <div className="text-sm text-gray-700 font-bold uppercase tracking-wider">no-show rates</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-orange-50/50 p-8 rounded-3xl shadow-xl border-2 border-gradient-to-r from-amber-200/50 to-red-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group backdrop-blur-sm"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
                  <div className="relative text-center">
                    <div className="text-xs font-black bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 bg-clip-text text-transparent mb-3 uppercase tracking-widest group-hover:from-amber-800 group-hover:via-orange-800 group-hover:to-red-800 transition-all duration-300">Reality Check</div>
                    <div className="text-sm font-black bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight uppercase tracking-wide">Understaffed, overwhelmed, underpaid</div>
                  </div>
                </motion.div>
              </div>

              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/80 to-gray-100/60 p-8 rounded-3xl border border-slate-200/50 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
                <div className="relative">
                  <blockquote className="text-gray-800 italic text-xl mb-4 font-semibold leading-relaxed">
                    "It's 10 PM and I'm still finishing charts from this morning..."
                  </blockquote>
                  <div className="text-sm text-gray-600 font-bold">- Dr. Sarah M., Family Medicine</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#143151] via-[#387E89] to-[#4A9B8E] hover:from-[#112a46] hover:via-[#306b75] hover:to-[#3d8071] text-white shadow-2xl hover:shadow-3xl transition-all duration-500 px-12 py-6 text-lg font-bold rounded-2xl border-2 border-[#387E89]/20 hover:scale-110 hover:border-[#387E89]/40 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-3">
                    🩺 Run Your Burnout Score
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>
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