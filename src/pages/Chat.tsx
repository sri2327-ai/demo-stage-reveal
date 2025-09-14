import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  MessageCircle, 
  Zap, 
  Clock, 
  Users, 
  Globe, 
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

const Chat = () => {
  const keyBenefits = [
    {
      title: "24/7 automated messaging across patient portals, SMS, and web chat",
      description: "Always-available patient communication without added staff",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Intelligent appointment booking, rescheduling, and cancellation workflows",
      description: "Seamless scheduling automation with smart calendar integration",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Prescription refill requests with built-in clinical verification",
      description: "Automated medication management with safety protocols",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Insurance pre-screening and eligibility checks before visit",
      description: "Streamlined verification process for better patient experience",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Context-aware conversation handling, trained on real clinical dialogues",
      description: "Natural language understanding for healthcare conversations",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: "Multilingual support for diverse patient populations",
      description: "Inclusive communication across language barriers",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const clinicalUseCases = [
    {
      title: "Primary care: streamline new patient intake and reduce front desk burden",
      description: "Automated patient onboarding and administrative support",
      details: ["New patient registration and intake forms", "Insurance verification and benefit checks", "Pre-visit health questionnaires"],
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Specialty clinics: deliver procedure prep instructions and post-visit check-ins",
      description: "Specialized communication for complex procedures",
      details: ["Pre-procedure preparation guidance", "Post-procedure follow-up monitoring", "Appointment scheduling for follow-ups"],
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Telehealth: keep virtual workflows seamless with instant chat assistance",
      description: "Enhanced digital health experience with AI support",
      details: ["Technical support for virtual visits", "Pre-visit technology checks", "Real-time patient assistance during telehealth"],
      icon: <Phone className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Reduces administrative tasks by 85% and cuts no-shows by 50% through automated engagement",
      author: "Practice Efficiency Study",
      rating: 5
    },
    {
      quote: "Enables 24/7 patient support without additional staff and improves patient satisfaction with instant responses",
      author: "Patient Satisfaction Survey",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How does the AI chat assistant handle complex patient inquiries?",
      answer: "Our AI is trained on real clinical dialogues and uses context-aware conversation handling to understand healthcare-specific queries, with smart escalation to live staff for complex situations."
    },
    {
      question: "Is patient communication secure and HIPAA compliant?",
      answer: "Yes, all chat communications maintain full HIPAA compliance with encrypted messaging and secure data handling across all platforms including SMS, web chat, and patient portals."
    },
    {
      question: "Can it integrate with existing patient portal systems?",
      answer: "Absolutely. Our chat assistant integrates seamlessly with existing patient portals, EHR systems, and communication platforms to provide unified patient engagement."
    },
    {
      question: "What languages are supported?",
      answer: "The system offers multilingual support to serve diverse patient populations, ensuring inclusive communication regardless of language barriers."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Patient Chat Assistant - 24/7 Intelligent Patient Communication</title>
        <meta name="description" content="Engage patients 24/7 with an AI-powered chat assistant that handles inquiries, scheduling, and follow-up without added staff. Improve response times and reduce no-shows." />
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
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat: AI Patient Engagement Assistant
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Intelligent chat support for seamless patient communication
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Engage patients 24/7 with an AI-powered chat assistant that handles inquiries, scheduling, and follow-up without added staff. Improve response times, reduce no-shows, and free up your team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Transform Patient Communication
                  <MessageCircle className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Comprehensive patient engagement that works around the clock
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
                Specialized chat support across healthcare settings
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

        {/* Core Features Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced AI capabilities that enhance patient engagement
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Smart triage: escalation to live staff for complex queries</h3>
                  <p className="text-muted-foreground">Intelligent routing ensures complex medical questions reach appropriate clinical staff immediately.</p>
                </CardContent>
              </Card>

              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Automated reminders, follow-ups, and satisfaction surveys</h3>
                  <p className="text-muted-foreground">Proactive patient engagement with scheduled communications and feedback collection.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* HIPAA Compliance Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">HIPAA Compliance & Security</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Secure patient communication with comprehensive data protection
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-card border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-2xl text-primary">Full HIPAA Compliance</h3>
                  <p className="text-lg text-muted-foreground">
                    Maintains full HIPAA compliance with encrypted communications and secure data handling across all chat interactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Impact Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Clinical Impact</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proven results in practice efficiency and patient satisfaction
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
                  { number: "50%", label: "Fewer No-Shows" },
                  { number: "24/7", label: "Patient Support" },
                  { number: "100%", label: "Instant Responses" }
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
              subtitle="Everything you need to know about AI patient chat assistance"
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
                Transform patient engagement today
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience 24/7 AI chat support that improves patient satisfaction and reduces staff workload.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start AI Chat Support
                <MessageCircle className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Chat;