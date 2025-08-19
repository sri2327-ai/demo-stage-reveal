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
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="absolute inset-0 bg-gradient-radial" />
          <div className="absolute inset-0 bg-checker-grid opacity-30" />
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
                <Button size="lg" className="rounded-full px-8 py-4 premium-button hover:shadow-glow hover:-translate-y-1 transition-all duration-500 group text-lg font-semibold">
                  Try S10.AI
                  <Mic className="w-5 h-5 ml-2 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-4 glassmorphism hover:bg-primary/10 hover:-translate-y-1 transition-all duration-500 group text-lg font-semibold">
                  Watch Demo
                  <Zap className="w-5 h-5 ml-2 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 lg:py-24 bg-gradient-secondary backdrop-blur-sm border-y border-white/20 relative">
          <div className="absolute inset-0 bg-gradient-radial opacity-50" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Key Benefits</h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                  <Card className="glassmorphism h-full hover:shadow-elegant hover:bg-white/20 hover:-translate-y-2 transition-all duration-500 group border-2 border-transparent hover:border-primary/30">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <h3 className="font-bold mb-4 text-xl text-primary group-hover:text-gradient transition-all duration-300">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Use Cases Section */}
        <section className="py-16 lg:py-24 bg-muted/30 relative">
          <div className="absolute inset-0 bg-gradient-radial opacity-30" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Clinical Use Cases</h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                  <Card className="h-full rounded-3xl border-2 border-accent/30 bg-gradient-to-br from-white via-accent/5 to-accent/10 hover:shadow-elegant hover:border-accent/50 hover:-translate-y-3 transition-all duration-500 group backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mb-8 group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
                        <div className="text-white text-xl">{useCase.icon}</div>
                      </div>
                      <h3 className="font-bold mb-4 text-2xl text-primary group-hover:text-gradient transition-all duration-300">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{useCase.description}</p>
                      <ul className="space-y-3">
                        {useCase.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3 text-base text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
        <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container relative z-10">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
                  className="text-center p-6 glassmorphism rounded-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-500 border-2 border-white/20"
                >
                  <div className="text-5xl lg:text-6xl font-black text-white mb-3 text-glow">{stat.number}</div>
                  <div className="text-white/90 font-semibold text-lg">{stat.label}</div>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">What Doctors Say</h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                  <Card className="glassmorphism border-2 h-full hover:shadow-elegant hover:-translate-y-2 hover:border-primary/40 transition-all duration-500 group">
                    <CardContent className="p-8 relative">
                      <div className="absolute top-6 right-6">
                        <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
                      </div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-foreground mb-8 italic font-semibold leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                        <cite className="text-primary font-bold text-lg">— {testimonial.author}</cite>
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
              <div className="inline-flex items-center gap-6 glassmorphism rounded-3xl px-12 py-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 border-2 border-primary/20">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-2xl text-gradient">Save 2+ hours daily</div>
                  <div className="text-muted-foreground text-lg">While improving patient engagement and note quality</div>
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
        <section className="py-20 lg:py-32 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute inset-0 bg-gradient-radial opacity-50" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Transform your documentation workflow today
              </h2>
              <p className="text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed font-medium">
                Experience 99.7% accurate transcription that adapts to your clinical practice.
              </p>
              <Button size="lg" className="hero-button text-xl font-bold px-12 py-6 rounded-full hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group">
                Start Free Trial
                <Mic className="w-6 h-6 ml-3 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TranscribeAndDictate;