import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  Mic, 
  Zap, 
  Globe, 
  Users, 
  Wifi, 
  FileText, 
  Stethoscope, 
  Phone, 
  Heart,
  CheckCircle,
  Star,
  Quote,
  Clock,
  Shield,
  Volume2,
  Languages,
  Smartphone,
  Monitor,
  Tablet,
  ArrowRight,
  Play,
  MessageSquare
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroBadge } from "@/components/ui/HeroBadge";
import { useState } from "react";

const TranscribeAndDictate = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const accuracyStats = [
    { value: "99.7%", label: "Clinical Accuracy", icon: <CheckCircle className="w-6 h-6" /> },
    { value: "60+", label: "Languages", icon: <Languages className="w-6 h-6" /> },
    { value: "2+hrs", label: "Daily Time Saved", icon: <Clock className="w-6 h-6" /> },
    { value: "24/7", label: "Offline Capable", icon: <Wifi className="w-6 h-6" /> }
  ];

  const keyBenefits = [
    {
      title: "Real-time transcription that never misses a beat",
      description: "99.7% clinical transcription accuracy validated through extensive testing across medical specialties",
      icon: <Mic className="w-6 h-6" />,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-200/50"
    },
    {
      title: "Multi-language & specialty support",
      description: "Works across 60+ languages and medical specialties, handling multiple speakers and background noise",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-200/50"
    },
    {
      title: "Always-on documentation",
      description: "Offline capability ensures documentation continues seamlessly without internet connectivity",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-200/50"
    },
    {
      title: "Instant structured notes",
      description: "Converts natural speech into SOAP, DAP, BIRP formats instantly with proper medical terminology",
      icon: <Zap className="w-6 h-6" />,
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-200/50"
    },
    {
      title: "Smart content processing",
      description: "Automatically removes filler words and applies proper terminology—no post-visit cleanup required",
      icon: <FileText className="w-6 h-6" />,
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-200/50"
    },
    {
      title: "Universal device compatibility",
      description: "Seamlessly works across mobile, tablet, and desktop for any workflow scenario",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-200/50"
    }
  ];

  const clinicalUseCases = [
    {
      title: "Primary Care Physicians",
      description: "Document routine check-ups and complex consultations effortlessly",
      details: [
        "Handle family meetings with multiple participants",
        "Create comprehensive patient histories with detailed examples",
        "Seamless integration with existing EHR workflows"
      ],
      icon: <Stethoscope className="w-8 h-8" />,
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "Emergency Medicine",
      description: "Rapid documentation during critical situations",
      details: [
        "Filters high-noise emergency room environments",
        "Captures complex medical terminology under pressure",
        "Real-time transcription during time-critical procedures"
      ],
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-red-600 to-rose-600",
      bgGradient: "from-red-50 to-rose-50"
    },
    {
      title: "Telehealth & Remote Care",
      description: "Records consented phone calls and video consultations",
      details: [
        "Works seamlessly across telehealth platforms",
        "Maintains quality during poor connection conditions",
        "Automatic speaker identification for multi-party calls"
      ],
      icon: <Phone className="w-8 h-8" />,
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  const demoSteps = [
    {
      title: "Ambient Listening",
      description: "AI captures every word spoken during patient encounters",
      icon: <Volume2 className="w-5 h-5" />
    },
    {
      title: "Real-time Processing",
      description: "Speech is instantly converted to structured medical notes",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Smart Formatting",
      description: "Notes are automatically formatted into clinical templates",
      icon: <FileText className="w-5 h-5" />
    }
  ];

  const testimonials = [
    {
      quote: "Fast, accurate notes without slowing me down. The offline capability is a game-changer for our remote clinic.",
      author: "Dr. Reid, MD",
      specialty: "Family Medicine",
      rating: 5,
      avatar: "DR"
    },
    {
      quote: "Its upfront simple and user friendly interface made my note taking simple and efficient.",
      author: "App Store Review",
      specialty: "Verified Purchase",
      rating: 5,
      avatar: "AS"
    },
    {
      quote: "The multi-language support has transformed how we serve our diverse patient population.",
      author: "Dr. Martinez, MD",
      specialty: "Internal Medicine",
      rating: 5,
      avatar: "DM"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the transcription in noisy environments?",
      answer: "S10.AI maintains 99.7% accuracy even in challenging environments like emergency rooms, filtering background noise and multiple speakers automatically."
    },
    {
      question: "Does it work offline?",
      answer: "Yes, S10.AI includes offline capability to ensure documentation continues seamlessly even without internet connectivity."
    },
    {
      question: "What note formats are supported?",
      answer: "The system converts speech into multiple clinical formats including SOAP, DAP, BIRP, and custom specialty templates instantly."
    },
    {
      question: "Can it handle multiple languages?",
      answer: "S10.AI supports transcription in 60+ languages and adapts to medical terminology across different specialties and regions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Medical Transcription & Dictation - 99.7% Accurate Clinical Documentation</title>
        <meta name="description" content="Transform conversations into clinical documentation with 99.7% accuracy. Real-time transcription across 60+ languages with offline capability and instant SOAP note generation." />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/70 to-indigo-50/70" />
          <div className="absolute inset-0 bg-checker-grid" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 rounded-full blur-3xl"
            />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <HeroBadge>
                  <Mic className="w-4 h-4 mr-2" />
                  Transcribe & Dictate
                </HeroBadge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight"
              >
                Turn every conversation into{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    perfect documentation
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto"
              >
                S10.AI captures medical conversations with{" "}
                <span className="font-semibold text-primary">99.7% accuracy</span> across any setting, specialty, or language. 
                Focus on your patients while we handle the notes.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Try S10.AI Free
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
                  Watch Demo
                  <MessageSquare className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
              >
                {accuracyStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">See it in action</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Watch how conversations become clinical documentation in real-time
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {demoSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`cursor-pointer transition-all duration-300 ${activeDemo === index ? 'scale-105' : ''}`}
                    onClick={() => setActiveDemo(index)}
                  >
                    <Card className={`glassmorphism border-0 h-full ${activeDemo === index ? 'ring-2 ring-primary/50 shadow-lg' : 'hover:shadow-md'}`}>
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeDemo === index 
                            ? 'bg-primary text-white' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {step.icon}
                        </div>
                        <h3 className="font-semibold mb-2 text-primary">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Demo visualization */}
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {demoSteps[activeDemo].icon}
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{demoSteps[activeDemo].title}</h3>
                <p className="text-lg text-muted-foreground">{demoSteps[activeDemo].description}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Powerful features for clinical excellence</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced AI transcription that adapts to your clinical workflow
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className={`bg-gradient-to-br ${benefit.color} border ${benefit.borderColor} h-full hover:shadow-elegant transition-all duration-500 group-hover:-translate-y-2`}>
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary">
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-4 text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Use Cases Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted across medical specialties</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proven solutions that adapt to your unique clinical environment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {clinicalUseCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="glassmorphism border-0 h-full overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                    <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`} />
                    <CardContent className="p-8">
                      <div className={`w-20 h-20 rounded-3xl mb-6 flex items-center justify-center bg-gradient-to-br ${useCase.bgGradient} group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`text-gradient bg-gradient-to-r ${useCase.gradient} bg-clip-text`}>
                          {useCase.icon}
                        </div>
                      </div>
                      <h3 className="font-bold mb-4 text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{useCase.description}</p>
                      <ul className="space-y-3">
                        {useCase.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 + detailIndex * 0.1 }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm leading-relaxed">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials & Results Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven results from healthcare professionals</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of clinicians who save 2+ hours daily while improving patient care
              </p>
            </motion.div>

            {/* Results metrics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-primary rounded-3xl p-8 lg:p-12 mb-16 text-center text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold mb-2">2+ hours</div>
                    <div className="text-lg text-white/80">Saved daily per clinician</div>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold mb-2">99.7%</div>
                    <div className="text-lg text-white/80">Clinical accuracy rate</div>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold mb-2">60+</div>
                    <div className="text-lg text-white/80">Supported languages</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 h-full hover:shadow-elegant hover:-translate-y-2 transition-all duration-500">
                    <CardContent className="p-8">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />
                      <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <cite className="font-semibold text-foreground not-italic block">
                            {testimonial.author}
                          </cite>
                          <div className="text-sm text-muted-foreground">{testimonial.specialty}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <FAQSection
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about AI medical transcription"
              faqs={faqs}
            />
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px] opacity-10" />
          
          {/* Animated background shapes */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"
          />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
                  Ready to transform your documentation workflow?
                </h2>
                <p className="text-xl lg:text-2xl text-background/80 leading-relaxed">
                  Experience 99.7% accurate transcription that adapts to your clinical practice. 
                  Start your free trial today.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300 group rounded-full px-8">
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group rounded-full px-8">
                  Schedule Demo
                  <MessageSquare className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap justify-center items-center gap-6 text-background/70 text-sm"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Cancel anytime
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TranscribeAndDictate;