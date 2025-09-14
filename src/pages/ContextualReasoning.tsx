import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  AlertTriangle, 
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

const ContextualReasoning = () => {
  const keyBenefits = [
    {
      title: "Real-time clinical decision support",
      description: "Surfaces differential diagnoses based on patient presentation",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Flags potential drug interactions and allergy risks",
      description: "Comprehensive safety screening in real-time",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Suggests appropriate lab tests and imaging based on symptoms",
      description: "Evidence-based recommendations tailored to presentation",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Provides evidence-based guidelines with clinical references",
      description: "Backed by peer-reviewed medical literature",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Specialty-specific intelligence",
      description: "Trained on millions of real clinical encounters",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Validated by board-certified experts across specialties",
      description: "Adapts recommendations to cardiology, primary care, mental health",
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  const clinicalUseCases = [
    {
      title: "Risk Management",
      description: "Cross-references patient history with current symptoms",
      details: ["Identifies missing elements in documentation", "Flags clinically inappropriate orders before submission", "Suggests evidence-based alternatives when indicated"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Quality Assurance",
      description: "Intelligent validation with 99% precision",
      details: ["Sources recommendations with clinical references", "Maintains clinical accuracy across specialties", "Reduces medical errors through intelligent alerts"],
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Specialty Optimization",
      description: "Cardiology: Echo and EKG findings interpretation",
      details: ["Emergency Medicine: Critical decision support for acute cases", "Primary Care: Comprehensive patient assessment guidance"],
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Healthcare providers report improved diagnostic accuracy and reduced oversight risks with intelligent clinical reasoning support.",
      author: "Clinical Study Results",
      rating: 5
    },
    {
      quote: "The AI understands medical context and supports clinical decisions like no other system I've used.",
      author: "Dr. Medical Professional",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How does contextual reasoning improve clinical decisions?",
      answer: "Our AI analyzes patient presentation against millions of clinical encounters to suggest differential diagnoses, flag risks, and provide evidence-based recommendations in real-time."
    },
    {
      question: "Is the clinical intelligence validated?",
      answer: "Yes, our system is validated by board-certified experts across specialties and maintains 99% precision in clinical recommendations."
    },
    {
      question: "What specialties are supported?",
      answer: "Our contextual reasoning adapts to cardiology, primary care, mental health, emergency medicine, and other specialties with nuanced terminology understanding."
    },
    {
      question: "How does it handle drug interactions?",
      answer: "The system cross-references patient medications in real-time, flagging potential interactions and allergy risks before orders are submitted."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Clinical Intelligence & Contextual Reasoning - Smart Medical Decision Support</title>
        <meta name="description" content="Go beyond transcription with intelligent clinical reasoning that suggests diagnoses, flags risks, and provides evidence-based recommendations in real-time." />
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
                <Brain className="w-4 h-4 mr-2" />
                Contextual Reasoning
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Clinical intelligence that thinks like a physician
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                AI that understands medical context and supports clinical decisions. Go beyond transcription with intelligent clinical reasoning that suggests diagnoses, flags risks, and provides evidence-based recommendations in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Experience Smart Clinical Support
                  <Brain className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Intelligent clinical reasoning that enhances decision-making
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

        {/* Clinical Applications Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Clinical Applications</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive clinical intelligence across specialties
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
                  <Card className="h-full rounded-2xl border border-[#387E89]/30 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm hover:shadow-md transition-all">
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
                { number: "99%", label: "Clinical Precision" },
                { number: "1M+", label: "Clinical Encounters" },
                { number: "24/7", label: "Decision Support" },
                { number: "10+", label: "Medical Specialties" }
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Clinical Impact</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proven results in clinical decision-making and patient outcomes
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
                  <div className="font-semibold text-lg text-primary">Improved diagnostic accuracy</div>
                  <div className="text-muted-foreground">With reduced oversight risks and intelligent alerts</div>
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
              subtitle="Learn how contextual reasoning enhances clinical decision-making"
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
                Experience intelligent clinical reasoning today
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Enhance your clinical decision-making with AI that thinks like a physician.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start Free Trial
                <Brain className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContextualReasoning;