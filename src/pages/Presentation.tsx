import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Clock, Users, Shield, TrendingUp, Zap, CheckCircle, ArrowRight, Star, Calendar, DollarSign, Target, Play, ChevronDown, MessageSquare, Languages, Database, Stethoscope, Phone, Bell, ClipboardList, UserCheck, TrendingDown, FastForward, X, AlertTriangle, Coffee, Frown, Smile, Settings, Award, BarChart3, Workflow, Timer, FileCheck, Building, Sparkles, Volume2, VolumeX, Brain, Code, Lightbulb, FileText, MessageCircle, Plug } from 'lucide-react';
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

  // Voice over state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [elevenLabsApiKey, setElevenLabsApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  // Page summary for voice over
  const pageSummary = `Welcome to S10.AI - The AI That Charts and Staffs So You Don't Have To. 

Healthcare burnout is real. Clinicians spend over 4 hours daily on electronic health records, with 1 in 2 facing burnout and 30% patient no-show rates leaving staff understaffed, overwhelmed, and underpaid.

Meet your AI teammates: CRUSH, our Clinical Documentation AI that generates comprehensive SOAP notes in under 60 seconds with 99.9% accuracy, and BRAVO, our Patient Engagement AI that handles appointment scheduling, follow-ups, and reduces no-shows by 40%.

Our solution delivers real ROI: 2-3 hours saved per clinician daily, 40% reduction in no-shows, 95% patient satisfaction, and streamlined workflows that let you focus on what matters most - patient care.

Join leading healthcare organizations who trust S10.AI to transform their practice. Your next step is easy - try S10.AI today and reclaim your time to focus on healing.`;

  // Generate and download American voice over
  const generateAmericanVoiceOver = async (apiKey: string) => {
    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/TX3LPaxmHKxFdv7VOQHJ', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey
        },
        body: JSON.stringify({
          text: pageSummary,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.7,
            similarity_boost: 0.8,
            style: 0.3,
            use_speaker_boost: true
          }
        })
      });
      if (response.ok) {
        const audioBlob = await response.blob();

        // Download the file
        const url = URL.createObjectURL(audioBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 's10ai-liam-american-voiceover.mp3';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Also play it
        const newAudio = new Audio(url);
        newAudio.onended = () => {
          setIsPlaying(false);
          setAudio(null);
          URL.revokeObjectURL(url);
        };
        setAudio(newAudio);
        setIsPlaying(true);
        newAudio.play();
        alert('American voice over downloaded successfully as s10ai-liam-american-voiceover.mp3');
        return true;
      } else {
        const errorData = await response.json();
        console.error('ElevenLabs API Error:', errorData);
        return false;
      }
    } catch (error) {
      console.error('Error generating voice over:', error);
      return false;
    }
  };

  // Voice over functionality with American voice
  const handleVoiceOver = async () => {
    if (isPlaying && audio) {
      audio.pause();
      speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    if (isLoading) return;
    setIsLoading(true);

    // Try ElevenLabs API first if API key is provided
    if (elevenLabsApiKey) {
      const success = await generateAmericanVoiceOver(elevenLabsApiKey);
      setIsLoading(false);
      if (success) return;
    }

    // Fallback to Web Speech API with American voice
    if ('speechSynthesis' in window) {
      const voices = speechSynthesis.getVoices();
      const americanVoice = voices.find(voice => voice.lang.startsWith('en-US') && (voice.name.includes('Male') || voice.name.includes('David') || voice.name.includes('Mark'))) || voices.find(voice => voice.lang.startsWith('en-US'));
      const utterance = new SpeechSynthesisUtterance(pageSummary);
      utterance.voice = americanVoice || null;
      utterance.rate = 0.85;
      utterance.pitch = 0.9;
      utterance.volume = 0.8;
      utterance.onstart = () => {
        setIsLoading(false);
        setIsPlaying(true);
      };
      utterance.onend = () => {
        setIsPlaying(false);
      };
      utterance.onerror = () => {
        setIsLoading(false);
        setIsPlaying(false);
        alert('Voice synthesis failed. Please try with ElevenLabs API key for better quality.');
      };
      speechSynthesis.speak(utterance);
    } else {
      setIsLoading(false);
      alert('Voice over not supported in this browser');
    }
  };

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

  // Load saved API key on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('elevenLabsApiKey');
    if (savedApiKey) {
      setElevenLabsApiKey(savedApiKey);
    }
  }, []);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return <div className="min-h-screen bg-white">
      {/* Transparent Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-white text-xl font-semibold">S10.AI</h1>
            </div>
            <div className="flex items-center gap-4">
              {!elevenLabsApiKey}
              <button onClick={handleVoiceOver} disabled={isLoading} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all rounded-lg border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed" title={isLoading ? "Generating audio..." : isPlaying ? "Stop voice over" : "Play page summary"}>
                {isLoading ? <Volume2 className="w-5 h-5 animate-pulse" /> : isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                <span className="hidden sm:inline">{isLoading ? "Loading..." : isPlaying ? "Stop" : "Listen"}</span>
              </button>
            </div>
          </div>
        </div>
        
        {showApiKeyInput && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-white/80 text-sm mb-3">Enter your ElevenLabs API key for high-quality Liam's American voice:</p>
              <div className="flex gap-2">
                <input type="password" placeholder="sk_..." value={elevenLabsApiKey} onChange={e => setElevenLabsApiKey(e.target.value)} className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
                <button onClick={() => {
              if (elevenLabsApiKey) {
                setShowApiKeyInput(false);
                localStorage.setItem('elevenLabsApiKey', elevenLabsApiKey);
              }
            }} disabled={!elevenLabsApiKey} className="px-4 py-2 bg-primary/80 hover:bg-primary text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                  Save
                </button>
              </div>
              <p className="text-white/60 text-xs mt-2">Your API key is stored locally and used for generating high-quality voice over that will be downloaded.</p>
            </div>
          </div>}
      </header>

      {/* Hero Section */}
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
        }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-4 sm:mb-6 leading-tight max-w-4xl">
            The AI That Charts & Staffs
            <br />
            <span className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light">So You Don't Have To</span>
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
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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

          {/* Feature indicators */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 1.4
        }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/60 text-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>99.9% Accurate</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
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

      {/* The Burnout is Real - Responsive Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        
      </section>

      {/* Meet Your AI Teammates - Redesigned with Separated Layout */}
      <section className="min-h-screen py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-blue-50/30 flex items-center scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#143151] mb-4 sm:mb-6">
              Meet Your AI Teammates
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              CRUSH and BRAVO work 24/7 so you can focus on what matters most - your patients.
            </p>
          </div>

          {/* CRUSH Section */}
          <div className="min-h-screen py-4 sm:py-6 flex items-center scroll-mt-16">
            {/* Header Section */}
            <div className="w-full">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-2 lg:mb-3">
                  CRUSH
                </h3>
                <p className="text-lg sm:text-xl text-[#387E89] font-semibold mb-3 lg:mb-4">Your AI Medical Scribe</p>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-xs font-semibold mb-4 lg:mb-6 shadow-sm">
                  <CheckCircle className="w-4 h-4" />
                  99.9% Accurate • HIPAA Compliant
                </div>
              </div>

              {/* Side-by-Side Layout */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Features Section - Left Side */}
                <div className="space-y-6 lg:space-y-8">
                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[{
                    icon: Clock,
                    title: "Under 60 Seconds",
                    desc: "Real-time documentation",
                    color: "blue",
                    gradient: "from-blue-50 to-blue-100"
                  }, {
                    icon: Languages,
                    title: "60+ Languages",
                    desc: "Understands accents & context",
                    color: "green",
                    gradient: "from-green-50 to-emerald-100"
                  }, {
                    icon: Database,
                    title: "100+ EHRs",
                    desc: "No API needed",
                    color: "purple",
                    gradient: "from-purple-50 to-purple-100"
                  }, {
                    icon: Stethoscope,
                    title: "50+ Specialties",
                    desc: "Tailored workflows",
                    color: "orange",
                    gradient: "from-orange-50 to-orange-100"
                  }].map((feature, index) => <div key={feature.title} className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-xl border border-white/50 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
                        <div className="text-center">
                          <div className={`w-10 h-10 bg-gradient-to-br from-white to-${feature.color}-50 rounded-lg flex items-center justify-center shadow-sm mx-auto mb-2`}>
                            <feature.icon className={`w-5 h-5 text-${feature.color}-600`} />
                          </div>
                          <h4 className="font-bold text-[#143151] text-sm mb-1">{feature.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>)}
                  </div>

                  {/* Detailed Features */}
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-[#143151] border-b border-gray-200 pb-2">Complete Feature Set</h4>
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                      {[{
                      title: "Smart Medical Understanding",
                      desc: "Understands medical language and context—no second-guessing, no errors",
                      icon: Brain
                    }, {
                      title: "Advanced Coding Support",
                      desc: "ICD-10, E/M, HCC and CPT Coding with 100% accuracy and real-time validation",
                      icon: Code
                    }, {
                      title: "Clinical Intelligence",
                      desc: "HCC tracking, quality alerts, clinical decision support, and preventive care prompts built-in",
                      icon: Lightbulb
                    }, {
                      title: "Pre-Visit Preparation",
                      desc: "Smart visit prep with patient background, follow-up items, and last visit summary",
                      icon: ClipboardList
                    }, {
                      title: "Smart Edit & Natural Language",
                      desc: "Make complex edits by dictating requests. Understands natural language like popular AIs",
                      icon: MessageSquare
                    }, {
                      title: "Patient Visit Summary",
                      desc: "Automated patient instructions in plain language, ready to email instantly",
                      icon: FileText
                    }, {
                      title: "100% Customizable",
                      desc: "Learns your preferences and adapts to your unique workflow and documentation style",
                      icon: Settings
                    }, {
                      title: "Complete Automation",
                      desc: "Prescriptions, referrals, labs, and follow-ups—all handled automatically",
                      icon: Zap
                    }].map((feature, index) => <div key={feature.title} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-all duration-300 group">
                          <div className="w-6 h-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-3 h-3 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-[#143151] text-sm mb-1 group-hover:text-[#387E89] transition-colors">{feature.title}</h5>
                            <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>)}
                    </div>
                  </div>
                </div>

                {/* Animation Section - Right Side */}
                <div className="flex justify-center xl:justify-start">
                  <div className="w-full max-w-lg">
                    <div className="relative group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-[#387E89]/20 hover:border-[#387E89]/40 transition-all duration-500 hover:shadow-xl">
                      <AnimatedCRUSH />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BRAVO Section */}
          <div className="min-h-screen py-4 sm:py-6 flex items-center scroll-mt-16">
            {/* Header Section */}
            <div className="w-full">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-2 lg:mb-3">
                  BRAVO
                </h3>
                <p className="text-lg sm:text-xl text-[#387E89] font-semibold mb-3 lg:mb-4">Your AI Front Office Agent</p>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-xs font-semibold mb-4 lg:mb-6 shadow-sm">
                  <UserCheck className="w-4 h-4" />
                  Automates Your Front Office
                </div>
              </div>

              {/* Side-by-Side Layout */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Animation Section - Left Side */}
                <div className="flex justify-center xl:justify-end order-2 xl:order-1">
                  <div className="w-full max-w-lg">
                    <div className="relative group bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-[#143151]/20 hover:border-[#143151]/40 transition-all duration-500 hover:shadow-xl">
                      <AnimatedBRAVO />
                    </div>
                  </div>
                </div>

                {/* Features Section - Right Side */}
                <div className="space-y-6 lg:space-y-8 order-1 xl:order-2">
                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[{
                    icon: Phone,
                    title: "AI Chat & Calls",
                    desc: "Connects with patients 24/7",
                    color: "blue",
                    gradient: "from-blue-50 to-blue-100"
                  }, {
                    icon: Calendar,
                    title: "Smart Scheduling",
                    desc: "Books & manages appointments",
                    color: "green",
                    gradient: "from-green-50 to-emerald-100"
                  }, {
                    icon: Bell,
                    title: "Auto Follow-ups",
                    desc: "Multi-channel reminders",
                    color: "purple",
                    gradient: "from-purple-50 to-purple-100"
                  }, {
                    icon: ClipboardList,
                    title: "Pre-visit Intake",
                    desc: "Handles questionnaires",
                    color: "orange",
                    gradient: "from-orange-50 to-orange-100"
                  }].map((feature, index) => <div key={feature.title} className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-xl border border-white/50 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
                        <div className="text-center">
                          <div className={`w-10 h-10 bg-gradient-to-br from-white to-${feature.color}-50 rounded-lg flex items-center justify-center shadow-sm mx-auto mb-2`}>
                            <feature.icon className={`w-5 h-5 text-${feature.color}-600`} />
                          </div>
                          <h4 className="font-bold text-[#143151] text-sm mb-1">{feature.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>)}
                  </div>

                  {/* Detailed Features */}
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-[#143151] border-b border-gray-200 pb-2">Complete Feature Set</h4>
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                      {[{
                      title: "24/7 AI-Powered Patient Interaction",
                      desc: "AI Chat & Phone Agents automate multilingual patient interactions with 24/7 availability",
                      icon: MessageCircle
                    }, {
                      title: "Seamless Scheduling",
                      desc: "AI-driven booking, rescheduling & reminders that never miss an inquiry",
                      icon: Calendar
                    }, {
                      title: "Help Reduce No-Shows & Boost Revenue",
                      desc: "Smart reminders, follow-ups, and automated workflows minimize cancellations",
                      icon: TrendingUp
                    }, {
                      title: "Revenue Protection",
                      desc: "Aims to reduce denials through improved data capture and RCM support",
                      icon: Shield
                    }, {
                      title: "Overcome Staffing Shortages",
                      desc: "AI task assignment with smart delegation to the right person or system",
                      icon: Users
                    }, {
                      title: "Seamless Integration",
                      desc: "Connects with many common EHR, CRM, and PMS systems",
                      icon: Plug
                    }, {
                      title: "Smarter Referrals",
                      desc: "Automates aspects of triage & care coordination under clinical guidance",
                      icon: ArrowRight
                    }].map((feature, index) => <div key={feature.title} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-all duration-300 group">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-3 h-3 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-[#143151] text-sm mb-1 group-hover:text-[#387E89] transition-colors">{feature.title}</h5>
                            <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#387E89]/20 hover:border-[#387E89]/40 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-[#143151] mb-3 sm:mb-4">
                Ready to Meet Your AI Teammates?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
                See how CRUSH and BRAVO can transform your practice workflow and give you back precious time to focus on patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Calculate Your ROI
                </Button>
                <Button variant="outline" size={isMobile ? "default" : "lg"} className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 text-sm sm:text-base w-full sm:w-auto">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Watch Demo
                </Button>
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
                  {[{
                  icon: Clock,
                  text: "4+ hours daily on documentation"
                }, {
                  icon: Bell,
                  text: "Constant scheduling interruptions"
                }, {
                  icon: Coffee,
                  text: "Weekend chart catch-up"
                }, {
                  icon: TrendingDown,
                  text: "High staff turnover"
                }].map((item, index) => <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border border-red-200/30">
                      <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <X className="w-2 h-2 text-red-600" />
                      </div>
                      <item.icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>)}
                </div>

                {/* Compact impact meter */}
                <div className="p-4 bg-red-100/40 rounded-xl border border-red-200/40">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-700 mb-2">High Stress Level</div>
                    <div className="w-full bg-red-200/50 rounded-full h-1.5 mb-2">
                      <div className="bg-red-500 h-1.5 rounded-full" style={{
                      width: '85%'
                    }}></div>
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
                  {[{
                  icon: Zap,
                  text: "75% faster documentation"
                }, {
                  icon: Users,
                  text: "Automated scheduling & follow-ups"
                }, {
                  icon: Heart,
                  text: "Work-life balance restored"
                }, {
                  icon: Smile,
                  text: "Focus on patient care"
                }].map((item, index) => <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/60 border border-green-200/30">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-2 h-2 text-green-600" />
                      </div>
                      <item.icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>)}
                </div>

                {/* Compact success meter */}
                <div className="p-4 bg-green-100/40 rounded-xl border border-green-200/40">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-700 mb-2">Low Stress Level</div>
                    <div className="w-full bg-green-200/50 rounded-full h-1.5 mb-2">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{
                      width: '92%'
                    }}></div>
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
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm w-full sm:w-auto">
                  <Play className="w-4 h-4 mr-2" />
                  See the Transformation
                </Button>
                <Button variant="outline" size={isMobile ? "default" : "lg"} className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 text-sm w-full sm:w-auto">
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
              <Button size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold rounded-lg w-full sm:w-auto">
                <Target className="w-4 h-4 mr-2" />
                {isMobile ? "Try ROI Calculator" : "See your numbers in seconds → Try the ROI Calculator"}
              </Button>
              <Button variant="outline" size={isMobile ? "default" : "lg"} className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold rounded-lg w-full sm:w-auto">
                <Settings className="w-4 h-4 mr-2" />
                {isMobile ? "Get Custom Setup" : "Ready for a tailored plan? → Get your custom setup"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-4">
              Trusted by 1,000+ Clinicians
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real doctors using S10.AI every day
            </p>
          </div>

          {/* Featured Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Featured Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 sm:mb-6 ring-4 ring-[#387E89]/10 hover:ring-[#387E89]/20 transition-all duration-300">
                  <img src="/lovable-uploads/6625dda1-7581-4dcf-9922-036bb51f7c8a.png" alt="Dr. Mitchell" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex mb-3 sm:mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed font-medium">
                  "Cut my documentation time by 70%. I actually get to go home on time now."
                </blockquote>
                <div className="mb-3 sm:mb-4">
                  <div className="font-semibold text-[#143151] text-base sm:text-lg">Dr. Robert Mitchell</div>
                  <div className="text-[#387E89] text-sm sm:text-base">Emergency Medicine</div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-full border border-blue-200">
                  <span className="text-sm font-medium text-blue-700">Saves 3+ hours daily</span>
                </div>
              </div>
            </div>

            {/* Featured Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 sm:mb-6 ring-4 ring-[#387E89]/10 hover:ring-[#387E89]/20 transition-all duration-300">
                  <img src="/lovable-uploads/6a66a6c9-902e-410b-9e57-1d7f0321b3ae.png" alt="Dr. Johnson" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex mb-3 sm:mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed font-medium">
                  "The AI templates are incredibly accurate. Like having a brilliant scribe who never gets tired."
                </blockquote>
                <div className="mb-3 sm:mb-4">
                  <div className="font-semibold text-[#143151] text-base sm:text-lg">Dr. Sarah Johnson</div>
                  <div className="text-[#387E89] text-sm sm:text-base">Family Medicine</div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 px-4 py-2 rounded-full border border-green-200">
                  <span className="text-sm font-medium text-green-700">99.9% accuracy</span>
                </div>
              </div>
            </div>

            {/* Featured Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 sm:mb-6 ring-4 ring-[#387E89]/10 hover:ring-[#387E89]/20 transition-all duration-300">
                  <img src="/lovable-uploads/b5b63f6f-c3a1-43d8-a7d8-0e6bf2390c02.png" alt="Dr. Gonzalez" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex mb-3 sm:mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed font-medium">
                  "BRAVO handles all our scheduling. Patient no-shows dropped 40% immediately."
                </blockquote>
                <div className="mb-3 sm:mb-4">
                  <div className="font-semibold text-[#143151] text-base sm:text-lg">Dr. Maria Gonzalez</div>
                  <div className="text-[#387E89] text-sm sm:text-base">Internal Medicine</div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 px-4 py-2 rounded-full border border-purple-200">
                  <span className="text-sm font-medium text-purple-700">40% less no-shows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[{
            image: "/lovable-uploads/bef17fd5-1e97-4132-b86f-8ed2851b3444.png",
            name: "Dr. Jennifer Walsh",
            specialty: "Pediatrics",
            quote: "Finally can focus on patients instead of paperwork. Work-life balance restored.",
            highlight: "Better work-life balance"
          }, {
            image: "/lovable-uploads/6ae429b1-f16f-4432-865d-4602f85e5701.png",
            name: "Dr. Raj Patel",
            specialty: "Cardiology",
            quote: "S10.AI understands medical terminology perfectly across all specialties.",
            highlight: "50+ specialties supported"
          }, {
            image: "/lovable-uploads/081c19bb-5cba-42ca-9e09-703a44940a01.png",
            name: "Dr. Michael Chen",
            specialty: "Orthopedics",
            quote: "Setup was 5 minutes. Results were immediate. No IT headaches.",
            highlight: "5-minute setup"
          }, {
            image: "/lovable-uploads/b9b4bd49-9bf0-41d3-9eae-51ed07de5c66.png",
            name: "Dr. David Wilson",
            specialty: "Emergency Medicine",
            quote: "Voice recognition works perfectly even in our noisy ER environment.",
            highlight: "Works anywhere"
          }].map((testimonial, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#387E89]/20 hover:ring-[#387E89]/40 transition-all duration-300">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />)}
                    </div>
                    <blockquote className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <div className="font-medium text-[#143151] text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-[#387E89] text-xs sm:text-sm">{testimonial.specialty}</div>
                      </div>
                      <div className="bg-white px-2 sm:px-3 py-1 rounded-full border border-gray-300 shadow-sm">
                        <span className="text-xs font-medium text-gray-700">{testimonial.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 bg-gray-50 rounded-2xl px-8 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#143151]">1,000+</div>
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

      {/* Built for Your Practice Section */}
      <section className="py-16 bg-gradient-to-br from-[#143151] via-[#1a3b5c] to-[#387E89] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
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
                {['Cardiology', 'Neurology', 'Psychiatry', 'Internal Med'].map(specialty => <span key={specialty} className="px-2 py-1 bg-white/15 text-white text-xs rounded-md border border-white/20">
                    {specialty}
                  </span>)}
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
              <Button variant="outline" size={isMobile ? "default" : "sm"} className="bg-transparent border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm w-full sm:w-auto">
                <Target className="w-4 h-4 mr-2" />
                {isMobile ? "Specialty Features" : "Explore specialty features →"}
              </Button>
              <Button variant="outline" size={isMobile ? "default" : "sm"} className="bg-transparent border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm w-full sm:w-auto">
                <CheckCircle className="w-4 h-4 mr-2" />
                {isMobile ? "Test Compatibility" : "Test compatibility →"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Board Advisor Testimonial Section - Compact */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-4">
              Trusted by Advisors Who've Seen It All
            </h2>
            <p className="text-lg text-gray-600">
              Leaders from innovative healthcare technology companies back S10.AI
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-3 border-white shadow-md">
                  <img src="/lovable-uploads/df7934ec-611f-45ea-a427-7d8c306fb983.png" alt="John Reece, CEO WISPR Systems" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Quote */}
                <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                  "S10.AI isn't just another AI tool—it's solving a real problem clinicians face every day. The team deeply understands healthcare workflows, and the product fits seamlessly into existing systems. I've seen firsthand how quickly it delivers ROI and how much time it gives back to providers. This is the kind of impact-driven innovation healthcare needs right now."
                </blockquote>

                {/* Attribution */}
                <div className="mb-4">
                  <div className="text-lg font-bold text-[#143151]">John Reece</div>
                  <div className="text-[#387E89] font-semibold text-sm">CEO, WISPR Systems • Board Advisor</div>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">Healthcare Innovation</span>
                  <span className="bg-green-50 px-3 py-1 rounded-full text-xs font-medium text-green-700">20+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-blue-100/50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-[#387E89]/5 via-transparent to-[#143151]/5"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Enhanced Header */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#143151] mb-4 sm:mb-6 leading-tight">
                Your Next Step Is Easy
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join thousands of clinicians who've already transformed their practice with S10.AI
              </p>
            </motion.div>

            {/* Practice Efficiency Assessment Section */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="mb-12 sm:mb-16">
              
            </motion.div>
            
            {/* Enhanced Benefits Grid */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-[#143151] text-sm sm:text-base mb-1 sm:mb-2">Free Consultation</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">15-minute personalized demo</p>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-[#143151] text-sm sm:text-base mb-1 sm:mb-2">Zero Setup Fees</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Custom plan, ready in 5 minutes</p>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-[#143151] text-sm sm:text-base mb-1 sm:mb-2">No Contracts</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Cancel anytime, no surprises</p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl w-full sm:w-auto group">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Book Your Demo Now →
              </Button>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Usually responds in under 2 hours</span>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200/60">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>1,000+ Active Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#143151] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions from clinicians
            </p>
          </div>

          <div className="space-y-4">
            {[{
            question: "How long does setup take?",
            answer: "Under 5 minutes. S10.AI is cloud-based with zero installations required. Simply log in and start using it immediately with your existing EHR."
          }, {
            question: "Will it work with my specialty?",
            answer: "Yes. S10.AI supports 50+ medical specialties including cardiology, neurology, psychiatry, internal medicine, pediatrics, and emergency medicine with specialty-specific templates."
          }, {
            question: "How accurate is the AI documentation?",
            answer: "99.9% accuracy rate. Our AI understands medical terminology, context, and nuances across all specialties, reducing documentation errors significantly."
          }, {
            question: "Does it integrate with my current EHR?",
            answer: "Absolutely. S10.AI works with 100+ EHR systems including Epic, Cerner, Athena, and more. No API setup required—it integrates seamlessly."
          }, {
            question: "What's the ROI timeline?",
            answer: "Most practices see ROI within 30 days. Clinicians save 3+ hours daily on documentation, allowing 30-40% more patient volume without additional staff."
          }, {
            question: "Is my patient data secure?",
            answer: "100% compliant with HIPAA, GDPR, PIPEDA, and ISO 27001 standards. All data is encrypted and processed securely in the cloud."
          }].map((faq, index) => <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                    <span className="font-semibold text-[#143151] text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>)}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Have more questions? 
              <Button variant="link" className="text-[#387E89] hover:text-[#306b75] p-0 ml-1 h-auto font-semibold">
                Contact our team →
              </Button>
            </p>
          </div>
        </div>
      </section>
    </div>;
}