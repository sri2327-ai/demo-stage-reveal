import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  User, 
  Zap, 
  Brain, 
  Users, 
  Settings, 
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

const Customisation = () => {
  const keyBenefits = [
    {
      title: "Learns your clinical voice",
      description: "Analyzes existing notes to understand your style",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Adapts to your preferred terminology and phrasing",
      description: "Maintains consistency across all documentation types",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Generates notes written in your distinctive voice",
      description: "Every note sounds authentically like your documentation",
      icon: <User className="w-6 h-6" />
    },
    {
      title: "Specialty-intelligent customization",
      description: "Goes beyond generic templates to specialty-specific intelligence",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Understands nuanced clinical reasoning patterns",
      description: "Adapts to subspecialty requirements and workflows",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Continuous refinement through machine learning",
      description: "Becomes more accurate with continued use",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const personalizationFeatures = [
    {
      title: "Adaptive Learning",
      description: "Learns from every correction you make",
      details: ["Remembers preferences for tone, structure, and detail level", "Adjusts documentation depth based on encounter type", "Becomes more accurate with continued use"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Workflow Integration",
      description: "Customizes to match your EHR preferences",
      details: ["Adapts to practice-specific documentation requirements", "Supports individual and group practice customization", "Maintains compliance while preserving personal style"],
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Clinical Specialties",
      description: "Available for all medical specialties with custom AI models",
      details: ["Primary Care with comprehensive patient management", "Cardiology with cardiac-specific terminology", "Emergency Medicine with rapid documentation protocols", "Urgent Care with acute condition workflows"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Which AI medical scribe offers the most customisation options? - S10.AI leads with the most comprehensive personalization features",
      author: "Industry Comparison Study",
      rating: 5
    },
    {
      quote: "The AI learns my documentation style so well, colleagues can't tell the difference between my dictated and typed notes.",
      author: "Dr. Personalized Practice",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How does the AI learn my clinical voice?",
      answer: "S10.AI analyzes your existing documentation patterns, preferred terminology, and writing style to create a personalized AI model that generates notes in your distinctive voice."
    },
    {
      question: "Can the system adapt to different specialties?",
      answer: "Yes, our AI understands nuanced clinical reasoning patterns across all medical specialties and adapts to subspecialty requirements and workflows."
    },
    {
      question: "Does the customization improve over time?",
      answer: "Absolutely. The AI learns from every correction you make and continuously refines its understanding of your preferences, becoming more accurate with continued use."
    },
    {
      question: "Can multiple providers share customization settings?",
      answer: "Yes, S10.AI supports both individual provider customization and group practice settings while maintaining each provider's unique documentation style."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Medical Scribe Customization - Personalized Clinical Documentation</title>
        <meta name="description" content="Experience AI that learns your style, terminology, and workflow preferences to create documentation written in your distinctive voice." />
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
                <User className="w-4 h-4 mr-2" />
                Customisation
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                AI that writes in your unique clinical voice
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Truly personalized documentation that evolves with every encounter. Experience AI that learns your style, terminology, and workflow preferences to create documentation written in your distinctive voice.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Discover Personalized AI Documentation
                  <User className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Personalized AI that adapts to your unique clinical style
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

        {/* Personalization Features Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Personalization Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced customization that learns and evolves with your practice
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {personalizationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full rounded-2xl border border-[#387E89]/30 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl text-primary">{feature.title}</h3>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
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
                { number: "#1", label: "Customization Leader" },
                { number: "50+", label: "Specialties Supported" },
                { number: "100%", label: "Voice Matching" },
                { number: "∞", label: "Learning Capacity" }
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

        {/* Proven Customization Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven Customization</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Leading the industry in personalization capabilities
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
                  <div className="font-semibold text-lg text-primary">Unmatched personalization</div>
                  <div className="text-muted-foreground">AI that truly understands your unique style</div>
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
              subtitle="Learn how AI customization works for your practice"
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
                Experience AI that writes like you
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Discover personalized documentation that captures your unique clinical voice.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start Personalizing Today
                <User className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Customisation;