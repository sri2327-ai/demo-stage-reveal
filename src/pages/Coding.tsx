import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  Code, 
  Zap, 
  DollarSign, 
  Users, 
  Shield, 
  Brain, 
  Stethoscope, 
  Phone, 
  Heart,
  CheckCircle,
  Star,
  Quote
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroBadge } from "@/components/ui/HeroBadge";

const Coding = () => {
  const keyBenefits = [
    {
      title: "Comprehensive code generation",
      description: "ICD-10 diagnostic codes with 99% accuracy",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "CPT procedure codes for optimal billing",
      description: "Automated procedure code selection and validation",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "HCC risk adjustment coding for value-based care",
      description: "Comprehensive risk stratification and documentation",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "E/M level determination with documentation support",
      description: "Accurate evaluation and management coding",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Intelligent validation",
      description: "Cross-references codes with clinical documentation",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Flags potential up-coding or down-coding risks",
      description: "Compliance protection and audit preparation",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const codingIntelligence = [
    {
      title: "Real-time analysis",
      description: "Analyzes documentation and generates appropriate codes instantly",
      details: ["Understands complex diagnostic combinations", "Adapts to subspecialty coding requirements", "Continuous updates with coding changes"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Audit preparation",
      description: "Meets CMS guidelines and audit requirements",
      details: ["Provides clear rationale for code selection", "Maintains documentation integrity", "Reduces denial risk with accurate coding"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Specialty Accuracy",
      description: "Trained on specialty-specific patterns",
      details: ["Primary care comprehensive coding", "Cardiology procedure and diagnostic coding", "Emergency medicine rapid coding protocols", "Mental health and behavioral health coding"],
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Healthcare providers report improved reimbursement rates and reduced claim denials with automated, intelligent coding.",
      author: "Financial Impact Study",
      rating: 5
    },
    {
      quote: "The coding accuracy has transformed our revenue cycle management and reduced audit risks significantly.",
      author: "Dr. Revenue Optimization",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How accurate is the automated coding?",
      answer: "Our AI achieves 99% accuracy in ICD-10 diagnostic coding and provides comprehensive CPT and HCC coding with intelligent validation against clinical documentation."
    },
    {
      question: "Does it help with compliance and audits?",
      answer: "Yes, the system meets CMS guidelines, provides clear rationale for code selection, and maintains documentation integrity to reduce denial risk and prepare for audits."
    },
    {
      question: "Can it handle specialty-specific coding?",
      answer: "Absolutely. Our AI is trained on specialty-specific coding patterns for primary care, cardiology, emergency medicine, mental health, and other specialties."
    },
    {
      question: "How does it prevent up-coding or down-coding?",
      answer: "The system flags potential coding risks by cross-referencing codes with clinical documentation and provides intelligent validation to ensure appropriate code selection."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Medical Coding - Accurate ICD-10, CPT & HCC Coding Automation</title>
        <meta name="description" content="Generate precise ICD-10, CPT, and HCC codes automatically while documenting. Real-time coding intelligence with 99% accuracy and audit-ready compliance." />
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
                <Code className="w-4 h-4 mr-2" />
                Coding
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Accurate, automated medical coding in real-time
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Generate precise ICD-10, CPT, and HCC codes automatically while documenting. Real-time coding intelligence with 99% accuracy and audit-ready compliance reduces coding errors and improves reimbursement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Maximize Revenue with Intelligent Coding
                  <Code className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Intelligent coding automation that maximizes revenue and ensures compliance
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

        {/* Coding Intelligence Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Coding Intelligence</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced AI that understands medical documentation and generates accurate codes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {codingIntelligence.map((intelligence, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full rounded-2xl border border-[#387E89]/30 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                        {intelligence.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl text-primary">{intelligence.title}</h3>
                      <p className="text-muted-foreground mb-4">{intelligence.description}</p>
                      <ul className="space-y-2">
                        {intelligence.details.map((detail, detailIndex) => (
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
                { number: "99%", label: "Coding Accuracy" },
                { number: "100%", label: "CMS Compliant" },
                { number: "50+", label: "Specialties" },
                { number: "0%", label: "Manual Coding" }
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

        {/* Financial Impact Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Financial Impact</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proven results in reimbursement optimization and compliance
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
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg text-primary">Improved reimbursement rates</div>
                  <div className="text-muted-foreground">With reduced claim denials and audit-ready compliance</div>
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
              subtitle="Everything you need to know about AI medical coding"
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
                Maximize your revenue with intelligent coding
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience 99% accurate coding automation that improves reimbursement and ensures compliance.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start Smart Coding Today
                <Code className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Coding;