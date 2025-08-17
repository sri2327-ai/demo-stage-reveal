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
  Quote
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroBadge } from "@/components/ui/HeroBadge";

const TranscribeAndDictate = () => {
  const keyBenefits = [
    {
      title: "Real-time transcription that never misses a beat",
      description: "99.7% clinical transcription accuracy validated through extensive testing",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Works across 60+ languages and medical specialties",
      description: "Handles multiple speakers and background noise seamlessly",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Offline capability ensures documentation continues",
      description: "Documentation continues without internet connectivity",
      icon: <Wifi className="w-6 h-6" />
    },
    {
      title: "From conversation to structured note in seconds",
      description: "Converts natural speech into SOAP, DAP, BIRP formats instantly",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Removes filler words and applies proper terminology",
      description: "Structures notes as you speak—no post-visit cleanup required",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Mobile, tablet, and desktop compatibility",
      description: "For any workflow across all your devices",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const clinicalUseCases = [
    {
      title: "Primary Care Physicians",
      description: "Document routine check-ups and complex consultations effortlessly",
      details: ["Handle family meetings with multiple participants", "Create comprehensive patient histories with detailed examples"],
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Emergency Medicine",
      description: "Rapid documentation during critical situations",
      details: ["Filters high-noise emergency room environments", "Captures complex medical terminology under pressure"],
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Telehealth & Remote Care",
      description: "Records consented phone calls and video consultations",
      details: ["Works seamlessly across telehealth platforms", "Maintains quality during poor connection conditions"],
      icon: <Phone className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Fast, accurate notes without slowing me down.",
      author: "Dr. Reid, MD",
      rating: 5
    },
    {
      quote: "Its upfront simple and user friendly made my note taking simple",
      author: "App Store Review",
      rating: 5
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
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <HeroBadge>
                <Mic className="w-4 h-4 mr-2" />
                Transcribe & Dictate
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Turn every conversation into perfect documentation
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                S10.AI captures medical conversations with 99.7% accuracy across any setting, specialty, or language. Focus on your patients while we handle the notes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Try S10.AI
                  <Mic className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 hover:bg-primary/5 transition-all duration-300 group">
                  Watch Demo
                  <Zap className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
                </Button>
              </div>
            </motion.div>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Benefits</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced AI transcription that adapts to your clinical workflow
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-card border h-full hover:shadow-elegant hover:border-primary/20 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-primary group-hover:text-primary/90">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Clinical Use Cases</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proven solutions across medical specialties and settings
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {clinicalUseCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glassmorphism border-0 h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                        {useCase.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl text-primary">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "99.7%", label: "Accuracy Rate" },
                { number: "60+", label: "Languages" },
                { number: "2+", label: "Hours Saved Daily" },
                { number: "24/7", label: "Availability" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials & Results Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Doctors Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real feedback from healthcare professionals using S10.AI
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-card border h-full hover:shadow-elegant hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6 relative">
                      <div className="absolute top-4 right-4">
                        <Quote className="w-6 h-6 text-primary/10" />
                      </div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-foreground mb-6 italic font-medium leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Stethoscope className="w-5 h-5 text-primary" />
                        </div>
                        <cite className="text-muted-foreground font-medium">— {testimonial.author}</cite>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-4 bg-primary/10 rounded-2xl px-8 py-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg text-primary">Save 2+ hours daily</div>
                  <div className="text-muted-foreground">While improving patient engagement and note quality</div>
                </div>
              </div>
            </motion.div>
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

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px] opacity-10" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
                Transform your documentation workflow today
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience 99.7% accurate transcription that adapts to your clinical practice.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start Free Trial
                <Mic className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TranscribeAndDictate;