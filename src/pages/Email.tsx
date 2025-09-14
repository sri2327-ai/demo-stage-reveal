import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  Mail, 
  Zap, 
  FileText, 
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

const Email = () => {
  const keyBenefits = [
    {
      title: "One-click creation of visit summaries, care plans, and referral letters",
      description: "Automated generation from clinical documentation",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Automated appointment and follow-up reminders via email",
      description: "Scheduled communication workflows for better engagement",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Medication instructions, lab result notifications, and educational content",
      description: "Comprehensive patient education and information delivery",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Integration with patient portal and practice email systems",
      description: "Seamless workflow integration with existing platforms",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Natural-language generation tuned for patient literacy levels",
      description: "Clear, accessible communication for all patients",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Secure PHI encryption and delivery tracking",
      description: "HIPAA-compliant email processing with full audit trails",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const clinicalUseCases = [
    {
      title: "Specialty practices: dispatch pre-procedure instructions automatically",
      description: "Automated preparation communication for complex procedures",
      details: ["Pre-operative instruction delivery", "Post-procedure care guidelines", "Follow-up appointment scheduling"],
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Behavioral health: send CBT homework and progress reminders",
      description: "Therapeutic communication and patient engagement tools",
      details: ["Homework assignment delivery", "Session reminder communications", "Progress tracking notifications"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Large group practices: centralize appointment reminder emails across locations",
      description: "Unified communication management for multi-site practices",
      details: ["Cross-location appointment coordination", "Centralized reminder systems", "Standardized communication templates"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Reduces administrative communication tasks by 85% and improves patient engagement and satisfaction scores",
      author: "Practice Efficiency Study",
      rating: 5
    },
    {
      quote: "Streamlines care coordination between providers and eliminates manual email drafting and scheduling",
      author: "Healthcare Communication Review",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How does automated email generation work?",
      answer: "Our AI analyzes clinical documentation to automatically generate personalized emails including visit summaries, care plans, and educational content tailored to each patient's needs and literacy level."
    },
    {
      question: "Is email communication HIPAA compliant?",
      answer: "Yes, all email communications use healthcare-grade encryption, secure PHI processing, and comprehensive audit trails to maintain full HIPAA compliance."
    },
    {
      question: "Can it integrate with existing email systems?",
      answer: "Absolutely. Our solution integrates seamlessly with practice email systems, patient portals, and EHR platforms for unified communication workflows."
    },
    {
      question: "What types of automated emails are supported?",
      answer: "The system generates visit summaries, medication instructions, lab results, appointment reminders, educational content, work/school notes, and discharge instructions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Communication Manager - Automated HIPAA-Compliant Patient Emails</title>
        <meta name="description" content="Generate and send personalized, HIPAA-compliant emails directly from clinical documentation. Reduce admin work and keep patients informed automatically." />
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
                <Mail className="w-4 h-4 mr-2" />
                Email: AI Communication Manager
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Automate patient and provider email workflows
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Generate and send personalized, HIPAA-compliant emails directly from clinical documentation. Reduce admin work and keep patients informed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Streamline Patient Communication Workflows
                  <Mail className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Intelligent email automation that enhances patient communication
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

        {/* Core Features Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced email automation capabilities for healthcare communication
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Template library for common communications</h3>
                  <p className="text-muted-foreground">Work/school notes, discharge instructions, and educational content templates ready for instant use.</p>
                </CardContent>
              </Card>

              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Trigger-based workflows</h3>
                  <p className="text-muted-foreground">Post-visit sequences, chronic care check-ins, and automated follow-up communications based on clinical triggers.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Use Cases Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Clinical Use Cases</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized email automation across healthcare settings
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

        {/* Compliance & Security Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Compliance & Security</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Healthcare-grade email automation with comprehensive security
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">HIPAA-compliant email processing and delivery</h3>
                  <p className="text-muted-foreground">Encrypted communications for PHI protection with automated data retention and deletion policies.</p>
                </CardContent>
              </Card>

              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Audit trails for all patient communications</h3>
                  <p className="text-muted-foreground">Comprehensive tracking and documentation of all automated email communications for compliance and review.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Practice Efficiency Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Practice Efficiency</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Measurable improvements in communication workflows
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
              <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { number: "85%", label: "Reduced Admin Tasks" },
                  { number: "100%", label: "HIPAA Compliant" },
                  { number: "0", label: "Manual Drafting" },
                  { number: "24/7", label: "Automated Delivery" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <div className="container">
            <FAQSection
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about AI email communication management"
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
                Automate your email workflows today
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience intelligent email automation that reduces admin work and keeps patients informed.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start Email Automation
                <Mail className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Email;