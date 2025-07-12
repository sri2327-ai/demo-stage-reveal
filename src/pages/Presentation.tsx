import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Clock, Users, Shield, TrendingUp, Zap, CheckCircle, ArrowRight, Star, Calendar, DollarSign, Target, Award, Play, ChevronDown, BarChart3, FileText, MessageSquare, Languages, Database, Stethoscope, Phone, Bell, ClipboardList, Globe, Lock, Sparkles, Brain, UserCheck, TrendingDown, FastForward, X, AlertTriangle, Coffee, Frown, Smile } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { AnimatedCRUSH } from '@/components/AnimatedCRUSH';
import { AnimatedBRAVO } from '@/components/AnimatedBRAVO';

const CountUp = ({
  end,
  duration = 2
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
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

const AnimatedStat = ({
  icon: Icon,
  value,
  label,
  suffix = ""
}: {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 20
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.6,
    delay: 0.2
  }} className="text-center">
      <motion.div initial={{
      scale: 0
    }} animate={isInView ? {
      scale: 1
    } : {}} transition={{
      duration: 0.5,
      delay: 0.4,
      type: "spring"
    }} className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <div className="text-3xl sm:text-4xl font-bold text-[#143151] mb-2">
        <CountUp end={value} />{suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>;
};

const TestimonialCard = ({
  name,
  role,
  quote,
  delay = 0
}: {
  name: string;
  role: string;
  quote: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 20
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.6,
    delay
  }} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />)}
      </div>
      <blockquote className="text-gray-700 mb-4 italic">"{quote}"</blockquote>
      <div>
        <div className="font-semibold text-[#143151]">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </motion.div>;
};

// Logo Marquee Component
const LogoMarquee = () => {
  const logos = [{
    name: "Apunipima",
    text: "apunipima"
  }, {
    name: "LIPS Healthcare",
    text: "LIPS HEALTHCARE"
  }, {
    name: "Asante",
    text: "ASANTE"
  }, {
    name: "NYC Health + Hospitals",
    text: "NYC HEALTH+ HOSPITALS"
  }, {
    name: "Family Doctors Tuggerah",
    text: "Family Doctors Tuggerah"
  }, {
    name: "Doctors.net.uk",
    text: "Doctors.net.uk"
  }];
  return <div className="w-full overflow-hidden bg-white py-8 border-t border-b border-gray-100">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => <div key={index} className="mx-8 flex items-center justify-center min-w-[200px] h-16">
            <span className={`text-gray-400 font-medium text-sm ${logo.name === "Apunipima" ? "text-xs lowercase tracking-wide" : logo.name === "LIPS Healthcare" ? "text-xs uppercase tracking-widest font-light" : logo.name === "Asante" ? "text-lg font-bold tracking-wide" : logo.name === "NYC Health + Hospitals" ? "text-xs uppercase tracking-wide font-bold" : logo.name === "Family Doctors Tuggerah" ? "text-xs" : "text-sm"}`}>
              {logo.text}
            </span>
          </div>)}
      </div>
    </div>;
};

export default function Presentation() {
  const {
    scrollYProgress
  } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const isMobile = useIsMobile();

  // Aurora background animation with green colors
  const color = useMotionValue("#387E89");
  useEffect(() => {
    animate(color, ["#387E89", "#143151", "#4A9B8E", "#2F6B78"], {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    });
  }, [color]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <motion.section style={{
      backgroundImage
    }} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 sm:mb-8 leading-tight max-w-5xl">
            The AI That Charts & Staffs
            <br />
            <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">So You Don't Have To</span>
          </motion.h1>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.0
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
            <motion.button style={{
            border,
            boxShadow
          }} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="group relative flex items-center justify-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm px-8 py-4 text-white transition-all hover:bg-white/20 text-lg font-semibold border-white/20 w-full sm:w-auto">
              Try S10.AI
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Enhanced feature indicators - Better responsive */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 1.4
        }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-white/60 text-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>99.9% Accurate</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:col-span-1 col-span-1">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>Under 60 Seconds</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 2
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="text-white/60">
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Logo Marquee Section */}
      <LogoMarquee />

      {/* The Burnout is Real - Animations Removed */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#143151] mb-4 sm:mb-6 leading-tight">
              The Burnout is Real
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              While you're saving lives, administrative burden is draining yours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
            {/* Enhanced Video Section */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white group">
                {/* Native-looking video container */}
                <div className="aspect-video relative bg-black rounded-t-2xl overflow-hidden">
                  <iframe src="https://www.youtube.com/embed/sYNhYsNnR74?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1&playlist=sYNhYsNnR74" title="Dr. Lauren Mitchell: A Day in Internal Medicine" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  
                  {/* Custom play overlay (hidden when playing) */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                {/* Enhanced video description */}
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#143151]">Live from Internal Medicine practice</span>
                    <div className="ml-auto text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">4:32</div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Follow Dr. Lauren Mitchell through her daily challenges with patient care, documentation, 
                    and the administrative burden that keeps her working long into the evening.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Section with basic hover effects */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-white to-gray-50/50 p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:shadow-[#387E89]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 hover:border-[#387E89]/30 group">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-3xl sm:text-5xl font-bold text-[#143151] mb-2 sm:mb-3 group-hover:text-[#387E89] transition-all duration-300">4+</div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium uppercase tracking-wide">hours/day on EHRs</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50/50 p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:shadow-[#387E89]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 hover:border-[#387E89]/30 group">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-3xl sm:text-5xl font-bold text-[#143151] mb-2 sm:mb-3 group-hover:text-[#387E89] transition-all duration-300">1 in 2</div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium uppercase tracking-wide">clinicians face burnout</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50/50 p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:shadow-[#387E89]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 hover:border-[#387E89]/30 group">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-3xl sm:text-5xl font-bold text-[#143151] mb-2 sm:mb-3 group-hover:text-[#387E89] transition-all duration-300">30%</div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium uppercase tracking-wide">no-show rates</div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-[#387E89]/10 via-[#143151]/5 to-[#387E89]/5 p-4 sm:p-8 rounded-2xl border-2 border-[#387E89]/30 shadow-xl hover:shadow-2xl hover:shadow-[#387E89]/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                  {/* Enhanced background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#143151]/5 to-transparent opacity-50"></div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#387E89]/10 rounded-full blur-2xl group-hover:bg-[#387E89]/20 transition-colors duration-500"></div>
                  
                  <div className="relative text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FastForward className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-xs font-bold text-[#387E89] mb-2 sm:mb-3 uppercase tracking-widest group-hover:text-[#143151] transition-all duration-300">Reality Check</div>
                    <div className="text-xs sm:text-sm font-bold text-[#143151] leading-tight tracking-wide group-hover:text-[#387E89] transition-colors duration-300">
                      Understaffed, Overwhelmed, Underpaid
                    </div>
                    <div className="mt-2 sm:mt-3 w-12 h-1 bg-gradient-to-r from-[#387E89] to-[#143151] rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced quote card */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 p-6 sm:p-8 rounded-2xl border border-gray-200/60 mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <blockquote className="text-gray-700 italic text-lg sm:text-xl mb-4 font-medium leading-relaxed">
                  "It's 10 PM and I'm still finishing charts from this morning..."
                </blockquote>
                <div className="text-sm text-gray-600 font-semibold">- Dr. Lauren Mitchell, Internal Medicine</div>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl border-0 w-full sm:w-auto">
                  Run Your Burnout Score →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your AI Teammates - Animations Removed */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] mb-6">
              Meet Your AI Teammates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CRUSH and BRAVO work 24/7 so you can focus on what matters most - your patients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* CRUSH - AI Medical Scribe */}
            <div className="relative">
              <Card className="p-8 border-2 border-[#387E89]/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-blue-50/30 hover:border-[#387E89]/40 group">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="relative mb-6 hover:scale-105 transition-transform duration-300">
                    <AnimatedCRUSH />
                  </div>
                  <h3 className="text-3xl font-bold text-[#143151] mb-2 group-hover:text-[#387E89] transition-colors duration-300">
                    CRUSH
                  </h3>
                  <p className="text-lg text-[#387E89] font-semibold mb-4">Your AI Medical Scribe</p>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    99.9% Accurate • HIPAA Compliant
                  </div>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[{
                  icon: Clock,
                  title: "Under 60 Seconds",
                  desc: "Real-time documentation",
                  color: "blue"
                }, {
                  icon: Languages,
                  title: "60+ Languages",
                  desc: "Understands accents & context",
                  color: "green"
                }, {
                  icon: Database,
                  title: "100+ EHRs",
                  desc: "No API needed",
                  color: "purple"
                }, {
                  icon: Stethoscope,
                  title: "50+ Specialties",
                  desc: "Tailored workflows",
                  color: "orange"
                }].map((feature, index) => <div key={feature.title} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100 hover:bg-white transition-all duration-300 hover:shadow-md hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 bg-${feature.color}-100 rounded-lg flex items-center justify-center`}>
                          <feature.icon className={`w-4 h-4 text-${feature.color}-600`} />
                        </div>
                        <span className="font-semibold text-[#143151] text-sm">{feature.title}</span>
                      </div>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>)}
                </div>

                {/* Detailed Features */}
                <div className="space-y-3">
                  {[{
                  title: "Smart Medical Understanding",
                  desc: "Understands medical language and context—no second-guessing, no errors"
                }, {
                  title: "Clinical Intelligence",
                  desc: "HCC tracking, quality alerts, and preventive care prompts built-in"
                }, {
                  title: "Complete Automation",
                  desc: "Prescriptions, referrals, labs, and follow-ups—all handled automatically"
                }].map((feature, index) => <div key={feature.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-[#143151] text-sm">{feature.title}</span>
                        <p className="text-xs text-gray-600 mt-1">{feature.desc}</p>
                      </div>
                    </div>)}
                </div>
              </Card>
            </div>

            {/* BRAVO - AI Staffing Agent */}
            <div className="relative">
              <Card className="p-8 border-2 border-[#143151]/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-green-50/30 hover:border-[#143151]/40 group">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="relative mb-6 hover:scale-105 transition-transform duration-300">
                    <AnimatedBRAVO />
                  </div>
                  <h3 className="text-3xl font-bold text-[#143151] mb-2 group-hover:text-[#387E89] transition-colors duration-300">
                    BRAVO
                  </h3>
                  <p className="text-lg text-[#387E89] font-semibold mb-4">Your AI Front Office Agent</p>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <UserCheck className="w-4 h-4" />
                    Automates Your Front Office
                  </div>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[{
                  icon: Phone,
                  title: "AI Chat & Calls",
                  desc: "Connects with patients 24/7",
                  color: "blue"
                }, {
                  icon: Calendar,
                  title: "Smart Scheduling",
                  desc: "Books & manages appointments",
                  color: "green"
                }, {
                  icon: Bell,
                  title: "Auto Follow-ups",
                  desc: "Multi-channel reminders",
                  color: "purple"
                }, {
                  icon: ClipboardList,
                  title: "Pre-visit Intake",
                  desc: "Handles questionnaires",
                  color: "orange"
                }].map((feature, index) => <div key={feature.title} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-100 hover:bg-white transition-all duration-300 hover:shadow-md hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 bg-${feature.color}-100 rounded-lg flex items-center justify-center`}>
                          <feature.icon className={`w-4 h-4 text-${feature.color}-600`} />
                        </div>
                        <span className="font-semibold text-[#143151] text-sm">{feature.title}</span>
                      </div>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>)}
                </div>

                {/* Detailed Features */}
                <div className="space-y-3">
                  {[{
                  title: "Reduce No-Shows",
                  desc: "Automated reminders and confirmations through multiple channels"
                }, {
                  title: "Patient Experience",
                  desc: "Elevated support with instant responses and personalized care"
                }, {
                  title: "Complete Integration",
                  desc: "Seamlessly works with your existing practice management systems"
                }].map((feature, index) => <div key={feature.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-[#143151] text-sm">{feature.title}</span>
                        <p className="text-xs text-gray-600 mt-1">{feature.desc}</p>
                      </div>
                    </div>)}
                </div>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-2xl p-8 border border-[#387E89]/20 hover:border-[#387E89]/40 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-[#143151] mb-4">
                Ready to Meet Your AI Teammates?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                See how CRUSH and BRAVO can transform your practice workflow and give you back precious time to focus on patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                  <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Calculate Your ROI
                  </Button>
                </div>
                <div className="hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                  <Button variant="outline" size="lg" className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After - Enhanced */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50/30 to-blue-50/50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-green-50 px-6 py-3 rounded-full border border-gray-200 mb-6"
            >
              <Frown className="w-5 h-5 text-red-500" />
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Smile className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">The Transformation</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#143151] mb-6 leading-tight">
              Before vs After{' '}
              <span className="bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
                S10.AI
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See the dramatic transformation in your daily workflow and quality of life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* BEFORE Card - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, x: -50, rotateY: -15 }} 
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Card className="bg-gradient-to-br from-red-50 via-orange-50/50 to-red-100/30 border-2 border-red-200/60 p-8 h-full shadow-2xl hover:shadow-red-200/50 transition-all duration-500 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300 rounded-full blur-2xl"></div>
                  </div>
                  
                  {/* Header */}
                  <div className="relative z-10 text-center mb-8">
                    <motion.div
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4"
                    >
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-red-700 mb-2">BEFORE</h3>
                    <p className="text-red-600/80 font-medium">The Daily Struggle</p>
                  </div>

                  {/* Problems List */}
                  <div className="relative z-10 space-y-5">
                    {[
                      { icon: Clock, text: "4+ hours daily on documentation", delay: 0.1 },
                      { icon: Bell, text: "Constant interruptions for scheduling", delay: 0.2 },
                      { icon: Coffee, text: "Weekend chart catch-up sessions", delay: 0.3 },
                      { icon: TrendingDown, text: "High staff turnover rates", delay: 0.4 },
                      { icon: Frown, text: "Burnout and exhaustion", delay: 0.5 }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-red-200/30 hover:bg-white/60 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <X className="w-3 h-3 text-red-600" />
                        </div>
                        <div className="flex items-center gap-3 flex-1">
                          <item.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item.text}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="relative z-10 mt-8 p-4 bg-red-100/50 rounded-xl border border-red-200/50"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-700 mb-1">😰 Stress Level: HIGH</div>
                      <div className="text-sm text-red-600">Work-life balance: Non-existent</div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>

            {/* AFTER Card - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotateY: 15 }} 
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateX: -5 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Card className="bg-gradient-to-br from-green-50 via-emerald-50/50 to-green-100/30 border-2 border-green-200/60 p-8 h-full shadow-2xl hover:shadow-green-200/50 transition-all duration-500 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
                  </div>
                  
                  {/* Header */}
                  <div className="relative z-10 text-center mb-8">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0px 0px 0px rgba(34, 197, 94, 0)",
                          "0px 0px 20px rgba(34, 197, 94, 0.3)",
                          "0px 0px 0px rgba(34, 197, 94, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-green-700 mb-2">AFTER</h3>
                    <p className="text-green-600/80 font-medium">The S10.AI Advantage</p>
                  </div>

                  {/* Solutions List */}
                  <div className="relative z-10 space-y-5">
                    {[
                      { icon: Zap, text: "75% faster documentation", delay: 0.1 },
                      { icon: Users, text: "Automated scheduling & follow-ups", delay: 0.2 },
                      { icon: Heart, text: "Work-life balance restored", delay: 0.3 },
                      { icon: TrendingUp, text: "Happy, efficient staff", delay: 0.4 },
                      { icon: Smile, text: "Focus on patient care", delay: 0.5 }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                        whileHover={{ x: -5, scale: 1.02 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-green-200/30 hover:bg-white/80 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <div className="flex items-center gap-3 flex-1">
                          <item.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item.text}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="relative z-10 mt-8 p-4 bg-green-100/50 rounded-xl border border-green-200/50"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-700 mb-1">😊 Stress Level: LOW</div>
                      <div className="text-sm text-green-600">Work-life balance: Achieved</div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Transformation Arrow - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ 
                x: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 px-8 py-4 rounded-2xl border border-[#387E89]/20 hover:border-[#387E89]/40 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-[#143151]">Transform Your Practice</div>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8 text-[#387E89]" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA Section - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-white via-blue-50/50 to-white p-8 rounded-2xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#143151] mb-4">
                Ready for Your Transformation?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join thousands of clinicians who've already transformed their practice workflow and reclaimed their time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    See the Transformation
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 px-8 py-6 text-lg font-semibold rounded-xl"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    Calculate Your Savings
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proof & Templates */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
              Proven Templates & Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of clinicians using our battle-tested documentation templates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[{
            title: "Family Medicine",
            count: "1,250+ templates",
            icon: Heart
          }, {
            title: "Emergency Medicine",
            count: "890+ templates",
            icon: Zap
          }, {
            title: "Internal Medicine",
            count: "2,100+ templates",
            icon: Users
          }].map((specialty, index) => <motion.div key={specialty.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} viewport={{
            once: true
          }}>
                <Card className="bg-white border border-blue-100 shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg flex items-center justify-center">
                    <specialty.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#143151] mb-2">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.count}</p>
                </Card>
              </motion.div>)}
          </div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} viewport={{
          once: true
        }} className="text-center">
            <Button size="lg" variant="outline" className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10">
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore Templates
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ROI & Impact - Matching existing ROISection style */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
              Measurable ROI for Clinicians
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              S10.AI delivers quantifiable returns for healthcare providers without disrupting existing workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
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

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
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

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }}>
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

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }}>
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

          <motion.div className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl p-8 text-white shadow-xl" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Calculate Your Practice's ROI</h3>
                <p className="text-white/80">
                  See how much time and money your practice could save with S10.AI
                </p>
              </div>
              <Button className="bg-white text-[#143151] hover:bg-blue-50 shadow-lg" size="lg">
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
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
              What Clinicians Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real doctors using S10.AI every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard name="Dr. Willem Chen" role="Emergency Medicine Physician" quote="S10.AI cut my documentation time by 70%. I actually get to go home on time now." delay={0.2} />
            <TestimonialCard name="Dr. Smriti Patel" role="Family Medicine" quote="The AI templates are incredibly accurate. It's like having a brilliant scribe who never gets tired." delay={0.4} />
            <TestimonialCard name="Dr. Lisbeth Rodriguez" role="Internal Medicine" quote="My staff loves BRAVO. Patient scheduling runs itself now, and our no-show rate dropped 40%." delay={0.6} />
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} viewport={{
          once: true
        }} className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10">
              <MessageSquare className="w-5 h-5 mr-2" />
              See More Success Stories
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Matching CallToAction component style */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
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
              <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Demo Now
              </Button>
              <Button variant="outline" size="lg" className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 w-full sm:w-auto">
                Try Risk-Free for 30 Days
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
}
