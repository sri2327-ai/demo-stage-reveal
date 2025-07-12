import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  ArrowRight,
  Clock,
  Users,
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Brain,
  ChevronRight,
  Play,
  CheckCircle,
  Star,
  Award,
  Target,
  BarChart3
} from 'lucide-react';
import { AnimatedCRUSH } from '../components/AnimatedCRUSH';
import { AnimatedBRAVO } from '../components/AnimatedBRAVO';
import { useIsMobile } from '../hooks/use-mobile';

const Presentation = () => {
  const [activeTeammate, setActiveTeammate] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const painPoints = [
    {
      icon: Clock,
      title: "Administrative Overload",
      description: "Physicians spend 2+ hours daily on documentation, reducing patient care time",
      stat: "2+ hours daily"
    },
    {
      icon: Users,
      title: "Staff Shortages",
      description: "Front office staff overwhelmed with calls, scheduling, and patient inquiries",
      stat: "40% understaffed"
    },
    {
      icon: DollarSign,
      title: "Revenue Loss",
      description: "No-shows and scheduling inefficiencies cost practices thousands monthly",
      stat: "$150K+ annually"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Reduce no-shows by 35% and optimize scheduling efficiency",
      value: "$150K+",
      metric: "Annual savings"
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Free up 2+ hours daily for physicians to focus on patient care",
      value: "2+ hours",
      metric: "Daily savings"
    },
    {
      icon: Users,
      title: "Staff Efficiency",
      description: "Automate 80% of routine administrative tasks",
      value: "80%",
      metric: "Task automation"
    },
    {
      icon: Heart,
      title: "Patient Satisfaction",
      description: "24/7 availability and faster response times improve patient experience",
      value: "95%",
      metric: "Satisfaction rate"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Family Medicine Physician",
      practice: "Westside Medical Group",
      quote: "CRUSH has transformed my practice. I now spend 2 more hours daily with patients instead of documentation.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Practice Manager",
      practice: "Downtown Health Center",
      quote: "BRAVO handles 90% of our scheduling calls. Our staff can finally focus on patient care.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Jennifer Park",
      role: "Internal Medicine",
      practice: "Park Medical Associates",
      quote: "The accuracy and speed of documentation is incredible. It's like having a perfect medical assistant.",
      rating: 5,
      avatar: "JP"
    }
  ];

  const features = [
    {
      category: "CRUSH - AI Medical Scribe",
      items: [
        "Real-time medical transcription with 99.9% accuracy",
        "Automatic SOAP note generation",
        "Direct EHR integration with major systems",
        "HIPAA-compliant secure processing",
        "Multi-specialty medical terminology support",
        "Voice command recognition and response"
      ]
    },
    {
      category: "BRAVO - AI Front Office Agent",
      items: [
        "24/7 automated phone answering and routing",
        "Intelligent appointment scheduling and rescheduling",
        "Patient reminder system via SMS and email",
        "Insurance verification and pre-authorization",
        "Prescription refill request handling",
        "Multi-language patient communication support"
      ]
    }
  ];

  const stats = [
    { value: "99.9%", label: "Documentation Accuracy", icon: Target },
    { value: "2+ hrs", label: "Daily Time Savings", icon: Clock },
    { value: "35%", label: "Reduction in No-Shows", icon: TrendingUp },
    { value: "24/7", label: "Patient Support", icon: Users },
    { value: "$150K+", label: "Annual Cost Savings", icon: DollarSign },
    { value: "95%", label: "Patient Satisfaction", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#143151] via-[#387E89] to-[#143151] opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              Revolutionary AI Healthcare Technology
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Meet Your New
              <span className="block bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent">
                AI Healthcare Team
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
              CRUSH and BRAVO work 24/7 to eliminate administrative burden, 
              so you can focus on what matters most - your patients.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <Button 
              size="lg" 
              className="bg-white text-[#143151] hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              See Live Demo
              <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#143151] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {stats.slice(0, 4).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4">
              Healthcare's Administrative Crisis
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Medical practices are drowning in paperwork while patients wait for care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="p-4 sm:p-6 lg:p-8 text-center border-2 border-red-100 hover:border-red-200 transition-colors duration-300 bg-gradient-to-b from-white to-red-50/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <point.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#143151] mb-2 sm:mb-3">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {point.description}
                </p>
                <div className="text-xl sm:text-2xl font-bold text-red-600">
                  {point.stat}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4">
              The AI Solution Your Practice Needs
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Two powerful AI agents working together to transform your practice operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <Card className="p-4 sm:p-6 lg:p-8 border-2 border-[#387E89]/20 hover:border-[#387E89]/40 transition-colors duration-300 bg-gradient-to-br from-white to-blue-50/30">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#387E89]/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-[#387E89]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#143151]">CRUSH</h3>
                  <p className="text-sm sm:text-base text-[#387E89] font-semibold">AI Medical Scribe</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Real-time medical documentation that listens to patient encounters and generates 
                perfect clinical notes with 99.9% accuracy, integrating seamlessly with your EHR.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Real-time transcription during patient visits",
                  "Automatic SOAP note generation",
                  "Direct EHR integration",
                  "HIPAA-compliant processing"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-4 sm:p-6 lg:p-8 border-2 border-[#143151]/20 hover:border-[#143151]/40 transition-colors duration-300 bg-gradient-to-br from-white to-green-50/30">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#143151]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#143151]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#143151]">BRAVO</h3>
                  <p className="text-sm sm:text-base text-[#143151] font-semibold">AI Front Office Agent</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                24/7 patient engagement handling phone calls, appointment scheduling, and administrative 
                tasks with natural conversation and human-like empathy.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "24/7 automated phone answering",
                  "Intelligent appointment scheduling",
                  "Patient reminders and follow-ups",
                  "Insurance verification support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Your AI Teammates - Enhanced with Responsive Hover Interactions */}
      <section className="py-8 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4">
              Meet Your AI Teammates
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Powerful AI agents that work alongside your team to eliminate administrative burden
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            {/* CRUSH - AI Medical Scribe */}
            <div className="relative group">
              <Card 
                className="p-4 sm:p-6 lg:p-8 border-2 border-[#387E89]/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-blue-50/30 hover:border-[#387E89]/40 cursor-pointer"
                onClick={() => isMobile && setActiveTeammate(activeTeammate === 'crush' ? null : 'crush')}
              >
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="relative mb-4 sm:mb-6">
                    {/* Desktop Hover overlay */}
                    <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs sm:text-sm font-semibold text-[#387E89] flex items-center gap-2">
                          <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                          See CRUSH in Action
                        </span>
                      </div>
                    </div>

                    {/* Mobile tap indicator */}
                    {isMobile && (
                      <div className="absolute top-2 right-2 z-10">
                        <div className="bg-[#387E89]/10 rounded-full p-2 animate-pulse">
                          <Play className="w-4 h-4 text-[#387E89]" />
                        </div>
                      </div>
                    )}
                    
                    {/* Animation container - responsive scaling */}
                    <div className={`transition-transform duration-300 ${
                      isMobile 
                        ? (activeTeammate === 'crush' ? 'scale-105' : 'scale-100')
                        : 'group-hover:scale-105'
                    }`}>
                      <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                        <AnimatedCRUSH />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151] mb-2 group-hover:text-[#387E89] transition-colors duration-300">
                    CRUSH
                  </h3>
                  <p className="text-sm sm:text-base text-[#387E89] font-semibold mb-3 sm:mb-4">
                    AI Medical Scribe
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Real-time medical documentation that captures every detail of patient encounters with 99.9% accuracy
                  </p>
                </div>

                {/* Features Grid - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    { icon: Clock, text: "Real-time transcription", color: "text-blue-600" },
                    { icon: Shield, text: "HIPAA compliant", color: "text-green-600" },
                    { icon: Brain, text: "AI-powered insights", color: "text-purple-600" },
                    { icon: Zap, text: "Instant EHR integration", color: "text-orange-600" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-200">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gray-50 ${feature.color}`}>
                        <feature.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats - Responsive */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#387E89] mb-1">99.9%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#387E89] mb-1">2hrs</div>
                    <div className="text-xs sm:text-sm text-gray-600">Time Saved</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* BRAVO - AI Staffing Agent */}
            <div className="relative group">
              <Card 
                className="p-4 sm:p-6 lg:p-8 border-2 border-[#143151]/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-green-50/30 hover:border-[#143151]/40 cursor-pointer"
                onClick={() => isMobile && setActiveTeammate(activeTeammate === 'bravo' ? null : 'bravo')}
              >
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="relative mb-4 sm:mb-6">
                    {/* Desktop Hover overlay */}
                    <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs sm:text-sm font-semibold text-[#143151] flex items-center gap-2">
                          <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                          See BRAVO in Action
                        </span>
                      </div>
                    </div>

                    {/* Mobile tap indicator */}
                    {isMobile && (
                      <div className="absolute top-2 right-2 z-10">
                        <div className="bg-[#143151]/10 rounded-full p-2 animate-pulse">
                          <Play className="w-4 h-4 text-[#143151]" />
                        </div>
                      </div>
                    )}
                    
                    {/* Animation container - responsive scaling */}
                    <div className={`transition-transform duration-300 ${
                      isMobile 
                        ? (activeTeammate === 'bravo' ? 'scale-105' : 'scale-100')
                        : 'group-hover:scale-105'
                    }`}>
                      <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                        <AnimatedBRAVO />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151] mb-2 group-hover:text-[#387E89] transition-colors duration-300">
                    BRAVO
                  </h3>
                  <p className="text-sm sm:text-base text-[#143151] font-semibold mb-3 sm:mb-4">
                    AI Front Office Agent
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    24/7 patient engagement handling calls, scheduling, and administrative tasks with human-like conversation
                  </p>
                </div>

                {/* Features Grid - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    { icon: Users, text: "24/7 availability", color: "text-blue-600" },
                    { icon: Heart, text: "Patient-first approach", color: "text-red-600" },
                    { icon: TrendingUp, text: "Smart scheduling", color: "text-green-600" },
                    { icon: Shield, text: "Secure & compliant", color: "text-purple-600" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-200">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gray-50 ${feature.color}`}>
                        <feature.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats - Responsive */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] mb-1">35%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Fewer No-Shows</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-600">Coverage</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Mobile Instructions */}
          {isMobile && (
            <div className="text-center mb-8 p-4 bg-blue-50/50 rounded-lg">
              <p className="text-sm text-gray-600">
                Tap on each card to see the AI teammates in action
              </p>
            </div>
          )}

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4">
              Transform Your Practice Today
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              See immediate improvements in efficiency, revenue, and patient satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center border-2 border-green-100 hover:border-green-200 transition-all duration-300 bg-gradient-to-b from-white to-green-50/30 hover:shadow-lg">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                  {benefit.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  {benefit.metric}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#143151] mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4">
              Complete Feature Set
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to modernize your practice operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {features.map((category, index) => (
              <Card key={index} className="p-4 sm:p-6 lg:p-8 border-2 border-gray-100 hover:border-gray-200 transition-colors duration-300">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] mb-4 sm:mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              See what doctors and practice managers are saying about their AI teammates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-4 sm:p-6 border-2 border-blue-100 hover:border-blue-200 transition-colors duration-300 bg-gradient-to-b from-white to-blue-50/30">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#387E89] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#143151] text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.practice}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-[#143151] to-[#387E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Proven Results Across Practices
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Real metrics from healthcare practices using CRUSH and BRAVO
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 px-3 sm:px-4 py-2 rounded-full text-green-800 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              Limited Time: 30-Day Free Trial
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#143151] mb-4 sm:mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Join hundreds of healthcare practices already saving time and improving patient care with AI teammates. 
              Start your free trial today - no credit card required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              Start Free 30-Day Trial
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              Schedule Demo
              <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-600">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-600">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-600">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
