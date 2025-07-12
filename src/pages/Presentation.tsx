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
  MessageSquare,
  Languages,
  Database,
  Stethoscope,
  Phone,
  Bell,
  ClipboardList,
  Globe,
  Lock,
  Sparkles,
  Brain,
  UserCheck
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
      {/* Hero Section - Redesigned */}
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

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            The AI medical scribe
            <br />
            <span className="text-white/90">for all clinicians</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl leading-relaxed"
          >
            Transform your practice with AI that handles documentation and staffing, 
            so you can focus on what matters most - your patients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group relative flex items-center justify-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm px-8 py-4 text-white transition-all hover:bg-white/20 text-lg font-semibold border-white/20"
            >
              Try S10.AI - it's free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Subtle feature indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center justify-center gap-8 mt-16 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>99.9% Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Under 60 Seconds</span>
            </div>
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
              <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white">
                {/* YouTube Video Embed */}
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.youtube.com/embed/sYNhYsNnR74"
                    title="Dr. Lauren Mitchell: A Day in Internal Medicine"
                    className="w-full h-full rounded-t-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video description below */}
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-[#387E89] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#143151]">Real insights from Internal Medicine practice</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Follow Dr. Lauren Mitchell through her daily challenges with patient care, documentation, 
                    and the administrative burden that keeps her working long into the evening.
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
                  className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:shadow-[#387E89]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 hover:border-[#387E89]/30 group"
                >
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#143151] mb-3 group-hover:text-[#387E89] transition-all duration-300">4+</div>
                    <div className="text-sm text-gray-700 font-medium uppercase tracking-wide">hours/day on EHRs</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:shadow-[#387E89]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 hover:border-[#387E89]/30 group"
                >
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#143151] mb-3 group-hover:text-[#387E89] transition-all duration-300">1 in 2</div>
                    <div className="text-sm text-gray-700 font-medium uppercase tracking-wide">clinicians face burnout</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:shadow-[#387E89]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 hover:border-[#387E89]/30 group"
                >
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#143151] mb-3 group-hover:text-[#387E89] transition-all duration-300">30%</div>
                    <div className="text-sm text-gray-700 font-medium uppercase tracking-wide">no-show rates</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-[#387E89]/10 via-[#143151]/5 to-[#387E89]/5 p-8 rounded-2xl border-2 border-[#387E89]/30 shadow-xl hover:shadow-2xl hover:shadow-[#387E89]/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
                >
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#143151]/5 to-transparent opacity-50"></div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#387E89]/10 rounded-full blur-2xl group-hover:bg-[#387E89]/20 transition-colors duration-500"></div>
                  
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#387E89] to-[#143151] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <div className="text-xs font-bold text-[#387E89] mb-3 uppercase tracking-widest group-hover:text-[#143151] transition-all duration-300">Reality Check</div>
                    <div className="text-sm font-bold text-[#143151] leading-tight tracking-wide group-hover:text-[#387E89] transition-colors duration-300">
                      Understaffed, Overwhelmed, Underpaid
                    </div>
                    <div className="mt-3 w-12 h-1 bg-gradient-to-r from-[#387E89] to-[#143151] rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </motion.div>
              </div>

              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-50 to-blue-50/30 p-8 rounded-2xl border border-gray-200/60 mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <blockquote className="text-gray-700 italic text-xl mb-4 font-medium leading-relaxed">
                  "It's 10 PM and I'm still finishing charts from this morning..."
                </blockquote>
                <div className="text-sm text-gray-600 font-semibold">- Dr. Lauren Mitchell, Internal Medicine</div>
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
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-12 py-6 text-lg font-semibold rounded-xl border-0"
                >
                  🩺 Run Your Burnout Score →
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Your AI Teammates */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] mb-6">
              Meet Your AI Teammates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CRUSH and BRAVO work 24/7 so you can focus on what matters most - your patients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* CRUSH - AI Medical Scribe */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8 border-2 border-[#387E89]/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-blue-50/30 hover:border-[#387E89]/40">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#143151] to-[#387E89] rounded-2xl flex items-center justify-center shadow-lg">
                      <FileText className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-[#143151] mb-2">CRUSH</h3>
                  <p className="text-lg text-[#387E89] font-semibold mb-4">Your AI Medical Scribe</p>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    99.9% Accurate • HIPAA Compliant
                  </div>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-[#387E89]" />
                      </div>
                      <span className="font-semibold text-[#143151] text-sm">Under 60 Seconds</span>
                    </div>
                    <p className="text-xs text-gray-600">Real-time documentation</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Languages className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-semibold text-[#143151] text-sm">60+ Languages</span>
                    </div>
                    <p className="text-xs text-gray-600">Understands accents & context</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Database className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-semibold text-[#143151] text-sm">100+ EHRs</span>
                    </div>
                    <p className="text-xs text-gray-600">No API needed</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Stethoscope className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="font-semibold text-[#143151] text-sm">50+ Specialties</span>
                    </div>
                    <p className="text-xs text-gray-600">Tailored workflows</p>
                  </div>
                </div>

                {/* Detailed Features */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#143151] text-sm">Smart Medical Understanding</span>
                      <p className="text-xs text-gray-600 mt-1">Understands medical language and context—no second-guessing, no errors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#143151] text-sm">Clinical Intelligence</span>
                      <p className="text-xs text-gray-600 mt-1">HCC tracking, quality alerts, and preventive care prompts built-in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#143151] text-sm">Complete Automation</span>
                      <p className="text-xs text-gray-600 mt-1">Prescriptions, referrals, labs, and follow-ups—all handled automatically</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* BRAVO - AI Staffing Agent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8 border-2 border-[#143151]/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-green-50/30 hover:border-[#143151]/40">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#387E89] to-[#143151] rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-[#143151] mb-2">BRAVO</h3>
                  <p className="text-lg text-[#387E89] font-semibold mb-4">Your AI Front Office Agent</p>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <UserCheck className="w-4 h-4" />
                    Automates Your Front Office
                  </div>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-100 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-[#143151] text-sm">AI Chat & Calls</span>
                    </div>
                    <p className="text-xs text-gray-600">Connects with patients 24/7</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-100 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-semibold text-[#143151] text-sm">Smart Scheduling</span>
                    </div>
                    <p className="text-xs text-gray-600">Books & manages appointments</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-100 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Bell className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-semibold text-[#143151] text-sm">Auto Follow-ups</span>
                    </div>
                    <p className="text-xs text-gray-600">Multi-channel reminders</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-100 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <ClipboardList className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="font-semibold text-[#143151] text-sm">Pre-visit Intake</span>
                    </div>
                    <p className="text-xs text-gray-600">Handles questionnaires</p>
                  </div>
                </div>

                {/* Detailed Features */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#143151] text-sm">Reduce No-Shows</span>
                      <p className="text-xs text-gray-600 mt-1">Automated reminders and confirmations through multiple channels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#143151] text-sm">Patient Experience</span>
                      <p className="text-xs text-gray-600 mt-1">Elevated support with instant responses and personalized care</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#143151] text-sm">Complete Integration</span>
                      <p className="text-xs text-gray-600 mt-1">Seamlessly works with your existing practice management systems</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-2xl p-8 border border-[#387E89]/20">
              <h3 className="text-2xl font-bold text-[#143151] mb-4">
                Ready to Meet Your AI Teammates?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                See how CRUSH and BRAVO can transform your practice workflow and give you back precious time to focus on patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Calculate Your ROI
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-[#387E89] text-[#143151] hover:bg-[#387E89]/10"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
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
