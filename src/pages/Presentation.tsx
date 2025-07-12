import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Clock, Users, Shield, TrendingUp, Zap, CheckCircle, ArrowRight, Star, Calendar, DollarSign, Target, Play, ChevronDown, MessageSquare, Languages, Database, Stethoscope, Phone, Bell, ClipboardList, UserCheck, TrendingDown, FastForward, X, AlertTriangle, Coffee, Frown, Smile, Settings, Award, BarChart3, Workflow, Timer, FileCheck, Building, Sparkles } from 'lucide-react';
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

      {/* Meet Your AI Teammates - Enhanced with Hover Interactions */}
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
            <div className="relative group">
              <Card className="p-8 border-2 border-[#387E89]/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-blue-50/30 hover:border-[#387E89]/40">
                {/* Header */}
                <div className="text-center mb-8">
                   <div className="relative mb-10">
                     {/* Animation container */}
                     <div className="group-hover:scale-105 transition-transform duration-300">
                       <AnimatedCRUSH />
                     </div>
                     
                     {/* Hover overlay positioned to not overlap text below */}
                     <div className="absolute top-0 left-0 right-0 bottom-4 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20 flex items-end justify-center pb-4">
                       <div className="bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-xl border border-white/50">
                         <span className="text-xs sm:text-sm font-semibold text-[#387E89] flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                           <Play className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                           <span className="hidden xs:inline">See CRUSH in Action</span>
                           <span className="xs:hidden">CRUSH Demo</span>
                         </span>
                       </div>
                     </div>
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
            <div className="relative group">
              <Card className="p-8 border-2 border-[#143151]/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-green-50/30 hover:border-[#143151]/40">
                {/* Header */}
                <div className="text-center mb-8">
                   <div className="relative mb-10">
                     {/* Animation container */}
                     <div className="group-hover:scale-105 transition-transform duration-300">
                       <AnimatedBRAVO />
                     </div>
                     
                     {/* Hover overlay positioned to not overlap text below */}
                     <div className="absolute top-0 left-0 right-0 bottom-4 bg-gradient-to-t from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20 flex items-end justify-center pb-4">
                       <div className="bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-xl border border-white/50">
                         <span className="text-xs sm:text-sm font-semibold text-[#143151] flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                           <Play className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                           <span className="hidden xs:inline">See BRAVO in Action</span>
                           <span className="xs:hidden">BRAVO Demo</span>
                         </span>
                       </div>
                     </div>
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

      {/* Before vs After - Compact & Subtle Design */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-gray-50/30 to-blue-50/20 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-24 h-24 bg-red-100/60 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-100/60 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Compact header */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 via-white to-green-50 px-4 py-2 rounded-full border border-gray-200/60 shadow-sm mb-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <TrendingDown className="w-3 h-3 text-red-500" />
                  <span className="text-xs font-medium text-red-600">Before</span>
                </div>
                <ArrowRight className="w-3 h-3 text-gray-400" />
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs font-medium text-green-600">After</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151] mb-3 leading-tight">
              Before vs After S10.AI
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              See the transformation in your daily workflow
            </p>
          </motion.div>

          {/* Compact comparison cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* BEFORE Card - Compact */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
              <Card className="bg-gradient-to-br from-red-50/60 to-orange-50/40 border border-red-200/40 p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
                {/* Compact header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-red-500/15 rounded-xl mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-700 mb-1">BEFORE</h3>
                  <p className="text-red-600/70 text-sm">The Daily Struggle</p>
                </div>

                {/* Compact problems list */}
                <div className="space-y-3 mb-6">
                  {[
                    { icon: Clock, text: "4+ hours daily on documentation" },
                    { icon: Bell, text: "Constant scheduling interruptions" },
                    { icon: Coffee, text: "Weekend chart catch-up" },
                    { icon: TrendingDown, text: "High staff turnover" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border border-red-200/30">
                      <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <X className="w-2 h-2 text-red-600" />
                      </div>
                      <item.icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Compact impact meter */}
                <div className="p-4 bg-red-100/40 rounded-xl border border-red-200/40">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-700 mb-2">High Stress Level</div>
                    <div className="w-full bg-red-200/50 rounded-full h-1.5 mb-2">
                      <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="text-xs text-red-600/70">85% burnout risk</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* AFTER Card - Compact */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/40 border border-green-200/40 p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
                {/* Compact header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500/15 rounded-xl mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-1">AFTER</h3>
                  <p className="text-green-600/70 text-sm">The S10.AI Advantage</p>
                </div>

                {/* Compact solutions list */}
                <div className="space-y-3 mb-6">
                  {[
                    { icon: Zap, text: "75% faster documentation" },
                    { icon: Users, text: "Automated scheduling & follow-ups" },
                    { icon: Heart, text: "Work-life balance restored" },
                    { icon: Smile, text: "Focus on patient care" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/60 border border-green-200/30">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-2 h-2 text-green-600" />
                      </div>
                      <item.icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Compact success meter */}
                <div className="p-4 bg-green-100/40 rounded-xl border border-green-200/40">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-700 mb-2">Low Stress Level</div>
                    <div className="w-full bg-green-200/50 rounded-full h-1.5 mb-2">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <div className="text-xs text-green-600/70">92% satisfaction rate</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Compact CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="text-center">
            <div className="bg-gradient-to-r from-white/80 to-blue-50/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-200/40 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-[#143151] mb-3">
                Ready for Your Transformation?
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Join thousands of clinicians who've transformed their practice workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="default" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm">
                  <Play className="w-4 h-4 mr-2" />
                  See the Transformation
                </Button>
                <Button variant="outline" size="default" className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 text-sm">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Calculate Savings
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Actually Get - Compact & Subtle Design */}
      <section className="py-12 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151] mb-3">
              What You Actually Get — and Why It Pays Off
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Real measurable outcomes that transform your practice economics and quality of life
            </p>
          </motion.div>

          {/* Benefits Grid - Compact Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {/* Time Savings */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
              <Card className="p-4 border border-blue-100/50 hover:border-blue-200/60 transition-all duration-300 hover:shadow-sm bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Timer className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#143151] mb-1">75% less time on notes</div>
                    <div className="text-sm text-gray-600">Automated documentation cuts charting time dramatically</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Admin Reduction */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <Card className="p-4 border border-green-100/50 hover:border-green-200/60 transition-all duration-300 hover:shadow-sm bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#143151] mb-1">85% less admin burden</div>
                    <div className="text-sm text-gray-600">Automated scheduling, follow-ups, and patient management</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* EHR Integration */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} viewport={{
            once: true
          }}>
              <Card className="p-4 border border-purple-100/50 hover:border-purple-200/60 transition-all duration-300 hover:shadow-sm bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#143151] mb-1">Instant EHR sync</div>
                    <div className="text-sm text-gray-600">Epic, Cerner, Athena & 100+ more systems</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Cost Savings */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} viewport={{
            once: true
          }}>
              <Card className="p-4 border border-emerald-100/50 hover:border-emerald-200/60 transition-all duration-300 hover:shadow-sm bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#143151] mb-1">$150K+ saved per clinician/year</div>
                    <div className="text-sm text-gray-600">Reduced staffing costs and increased efficiency</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Revenue Growth */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }} viewport={{
            once: true
          }}>
              <Card className="p-4 border border-blue-100/50 hover:border-blue-200/60 transition-all duration-300 hover:shadow-sm bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#143151] mb-1">40% revenue growth</div>
                    <div className="text-sm text-gray-600">No extra staff needed—just better efficiency</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Patient Volume */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} viewport={{
            once: true
          }}>
              <Card className="p-4 border border-indigo-100/50 hover:border-indigo-200/60 transition-all duration-300 hover:shadow-sm bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#143151] mb-1">30% increase in patient volume</div>
                    <div className="text-sm text-gray-600">See more patients without working longer hours</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Compliance & Satisfaction Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Compliance */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.7
          }} viewport={{
            once: true
          }}>
              <Card className="p-4 border border-gray-200/50 hover:border-gray-300/60 transition-all duration-300 hover:shadow-sm bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 bg-gray-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5 text-gray-600" />
                  </div>
                  <div className="text-base font-semibold text-[#143151]">100% Compliant</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['HIPAA', 'GDPR', 'PIPEDA', 'ISO 27001'].map(standard => <div key={standard} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                      {standard}
                    </div>)}
                </div>
              </Card>
            </motion.div>

            {/* Patient Satisfaction */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.8
          }} viewport={{
            once: true
          }}>
              <Card className="p-4 border border-amber-100/50 hover:border-amber-200/60 transition-all duration-300 hover:shadow-sm bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <div className="text-base font-semibold text-[#143151]">95% Patient Satisfaction</div>
                </div>
                <div className="text-sm text-gray-600">
                  Patients love the improved care experience and shorter wait times
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Zero Friction Promise */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.9
        }} viewport={{
          once: true
        }} className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-lg p-6 border border-[#387E89]/20 mb-6">
            <div className="text-center">
              <h3 className="text-lg font-bold text-[#143151] mb-2">
                Zero IT Setup. No Workflow Disruption.
              </h3>
              <p className="text-gray-600 mb-4 max-w-xl mx-auto text-sm">
                Up and running in minutes, not months. Your existing processes stay exactly the same.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#387E89]">5 min</div>
                  <div className="text-xs text-gray-600">Setup time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#387E89]">0</div>
                  <div className="text-xs text-gray-600">IT changes</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#387E89]">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1.0
        }} viewport={{
          once: true
        }} className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 text-sm font-semibold rounded-lg">
                <Target className="w-4 h-4 mr-2" />
                See your numbers in seconds → Try the ROI Calculator
              </Button>
              <Button variant="outline" size="lg" className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 px-6 py-3 text-sm font-semibold rounded-lg">
                <Settings className="w-4 h-4 mr-2" />
                Ready for a tailored plan? → Get your custom setup
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clean Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#143151] mb-4">
              Trusted by 10,000+ Clinicians
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real doctors using S10.AI every day
            </p>
          </div>

          {/* Featured Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Featured Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/6625dda1-7581-4dcf-9922-036bb51f7c8a.png" 
                    alt="Dr. Mitchell" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map(star => 
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  )}
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "Cut my documentation time by 70%. I actually get to go home on time now."
                </blockquote>
                <div className="mb-4">
                  <div className="font-semibold text-[#143151]">Dr. Robert Mitchell</div>
                  <div className="text-[#387E89] text-sm">Emergency Medicine</div>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-blue-700">Saves 3+ hours daily</span>
                </div>
              </div>
            </div>

            {/* Featured Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/6a66a6c9-902e-410b-9e57-1d7f0321b3ae.png" 
                    alt="Dr. Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map(star => 
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  )}
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "The AI templates are incredibly accurate. Like having a brilliant scribe who never gets tired."
                </blockquote>
                <div className="mb-4">
                  <div className="font-semibold text-[#143151]">Dr. Sarah Johnson</div>
                  <div className="text-[#387E89] text-sm">Family Medicine</div>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-green-700">99.9% accuracy</span>
                </div>
              </div>
            </div>

            {/* Featured Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/b5b63f6f-c3a1-43d8-a7d8-0e6bf2390c02.png" 
                    alt="Dr. Gonzalez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map(star => 
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  )}
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "BRAVO handles all our scheduling. Patient no-shows dropped 40% immediately."
                </blockquote>
                <div className="mb-4">
                  <div className="font-semibold text-[#143151]">Dr. Maria Gonzalez</div>
                  <div className="text-[#387E89] text-sm">Internal Medicine</div>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-purple-700">40% less no-shows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                image: "/lovable-uploads/bef17fd5-1e97-4132-b86f-8ed2851b3444.png",
                name: "Dr. Jennifer Walsh",
                specialty: "Pediatrics",
                quote: "Finally can focus on patients instead of paperwork. Work-life balance restored.",
                highlight: "Better work-life balance"
              },
              {
                image: "/lovable-uploads/6ae429b1-f16f-4432-865d-4602f85e5701.png",
                name: "Dr. Raj Patel",
                specialty: "Cardiology", 
                quote: "S10.AI understands medical terminology perfectly across all specialties.",
                highlight: "50+ specialties supported"
              },
              {
                image: "/lovable-uploads/081c19bb-5cba-42ca-9e09-703a44940a01.png",
                name: "Dr. Michael Chen",
                specialty: "Orthopedics",
                quote: "Setup was 5 minutes. Results were immediate. No IT headaches.",
                highlight: "5-minute setup"
              },
              {
                image: "/lovable-uploads/b9b4bd49-9bf0-41d3-9eae-51ed07de5c66.png",
                name: "Dr. David Wilson",
                specialty: "Emergency Medicine",
                quote: "Voice recognition works perfectly even in our noisy ER environment.",
                highlight: "Works anywhere"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map(star => 
                        <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <blockquote className="text-gray-700 mb-3 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-[#143151]">{testimonial.name}</div>
                        <div className="text-[#387E89] text-sm">{testimonial.specialty}</div>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-full border">
                        <span className="text-xs font-medium text-gray-700">{testimonial.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 bg-gray-50 rounded-2xl px-8 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#143151]">10,000+</div>
                <div className="text-sm text-gray-600">Active Clinicians</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#143151]">99.9%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#143151]">50+</div>
                <div className="text-sm text-gray-600">Medical Specialties</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#143151]">HIPAA</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Built for Your Practice Section - Compact */}
      <section className="py-12 bg-gradient-to-br from-[#143151] via-[#1a3b5c] to-[#387E89] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Built for Your Practice. <span className="text-blue-200">Ready on Day One.</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              S10.AI supports 50+ specialties with smart clinical prompts and universal compatibility.
            </p>
          </div>

          {/* Compact Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Left - Specialties */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center border border-white/20">
                  <Stethoscope className="w-5 h-5 text-white/90" />
                </div>
                <h3 className="text-xl font-bold text-white">50+ Medical Specialties</h3>
              </div>
              
              <p className="text-blue-100 mb-4 text-sm">
                Cardiology, neurology, psychiatry, internal medicine, and more—all supported.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Cardiology', 'Neurology', 'Psychiatry', 'Internal Med'].map((specialty) => (
                  <span key={specialty} className="px-2 py-1 bg-white/15 text-white text-xs rounded-md border border-white/20">
                    {specialty}
                  </span>
                ))}
                <span className="px-2 py-1 bg-blue-400/20 text-blue-200 text-xs rounded-md border border-blue-300/30 font-medium">
                  +46 more
                </span>
              </div>
            </div>

            {/* Right - Compatibility */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center border border-white/20">
                  <Database className="w-5 h-5 text-white/90" />
                </div>
                <h3 className="text-xl font-bold text-white">Universal Compatibility</h3>
              </div>
              
              <p className="text-blue-100 mb-4 text-sm">
                All major EHRs, VOIP, and PMS platforms. Cloud-based, zero installs.
              </p>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center mx-auto mb-1">
                    <Building className="w-4 h-4 text-white/80" />
                  </div>
                  <span className="text-xs text-blue-200">EHRs</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center mx-auto mb-1">
                    <Phone className="w-4 h-4 text-white/80" />
                  </div>
                  <span className="text-xs text-blue-200">VOIP</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center mx-auto mb-1">
                    <Settings className="w-4 h-4 text-white/80" />
                  </div>
                  <span className="text-xs text-blue-200">PMS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features Row - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center mx-auto mb-2">
                <Sparkles className="w-4 h-4 text-white/80" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Smart Prompts</h4>
              <p className="text-blue-200 text-xs">Context-aware documentation</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center mx-auto mb-2">
                <Zap className="w-4 h-4 text-white/80" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Zero Setup</h4>
              <p className="text-blue-200 text-xs">Ready in under 5 minutes</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center mx-auto mb-2">
                <Timer className="w-4 h-4 text-white/80" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Instant Results</h4>
              <p className="text-blue-200 text-xs">Benefits from day one</p>
            </div>
          </div>

          {/* Compact CTAs */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white/10 text-sm">
                <Target className="w-4 h-4 mr-2" />
                Explore specialty features →
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white/10 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Test compatibility →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-6">
            Ready to transform your practice?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of clinicians who've already transformed their practice with S10.AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Demo Now
            </Button>
            <Button variant="outline" size="lg" className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10">
              Try Risk-Free for 30 Days
            </Button>
          </div>
        </div>
      </section>
    </div>;
}
