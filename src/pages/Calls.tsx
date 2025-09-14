import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  Phone, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  Brain, 
  Stethoscope, 
  AlertTriangle, 
  Heart,
  CheckCircle,
  Star,
  Quote
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroBadge } from "@/components/ui/HeroBadge";

const Calls = () => {
  const keyBenefits = [
    {
      title: "Human-like speech recognition with 99% accuracy in noisy environments",
      description: "Advanced AI that understands context and nuance",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Appointment scheduling, reminders, and cancellations via phone",
      description: "Complete appointment management automation",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Prescription refill processing and insurance verification",
      description: "Streamlined medication and coverage workflows",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Emergency keyword detection with automated escalation",
      description: "Intelligent triage for urgent situations",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Multi-speaker voice detection and contextual call routing",
      description: "Advanced audio processing for complex conversations",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "24/7 availability with no fatigue or hold-time complaints",
      description: "Always-on patient support without human limitations",
      icon: <Phone className="w-6 h-6" />
    }
  ];

  const clinicalUseCases = [
    {
      title: "Urgent care: rapid triage and routing of acute symptom calls",
      description: "Intelligent assessment of urgent medical needs",
      details: ["Immediate symptom evaluation", "Automated provider escalation", "Emergency protocol activation"],
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Hospitals: automated handoff calls between on-call teams",
      description: "Seamless communication for continuity of care",
      details: ["Real-time call transcription", "Automated documentation", "Provider-to-provider messaging"],
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Rural clinics: support patients with limited internet via phone line",
      description: "Accessible healthcare communication for underserved areas",
      details: ["Phone-based appointment booking", "Medication refill requests", "Health status check-ins"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Reduces call handling time by 50% and saves practices $50,000 annually on staffing costs",
      author: "ROI Analysis Study",
      rating: 5
    },
    {
      quote: "Decreases no-shows by 20% through automated reminders and provides immediate ROI with 451% five-year return",
      author: "Practice Efficiency Report",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How accurate is the voice recognition in noisy environments?",
      answer: "Our AI voice agent maintains 99% accuracy even in challenging environments, using advanced noise filtering and context-aware processing to understand patient calls clearly."
    },
    {
      question: "Can it handle emergency situations safely?",
      answer: "Yes, the system includes emergency keyword detection with automated escalation protocols, ensuring urgent situations are immediately routed to appropriate clinical staff."
    },
    {
      question: "What types of calls can it manage?",
      answer: "The AI agent handles appointment scheduling, prescription refills, insurance verification, symptom triage, and routine inquiries while maintaining HIPAA compliance."
    },
    {
      question: "How does it integrate with existing phone systems?",
      answer: "Our solution integrates seamlessly with existing phone infrastructure and EHR systems, providing real-time transcription and automated documentation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Agent for Healthcare - Automated Phone Support 24/7</title>
        <meta name="description" content="Never miss a call with an AI voice agent that answers, triages, and documents patient calls in real time. Cut staffing costs and elevate patient satisfaction." />
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
                <Phone className="w-4 h-4 mr-2" />
                Calls: AI Voice Agent
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Automated phone interactions that feel human
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Never miss a call with an AI voice agent that answers, triages, and documents patient calls in real time. Cut staffing costs and elevate patient satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Experience the Future of Healthcare Phone Support
                  <Phone className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Advanced AI voice technology that transforms patient communication
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
                Transforming healthcare communication across practice settings
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
                Advanced capabilities that ensure seamless patient communication
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Real-time call transcription integrated directly into the EHR</h3>
                  <p className="text-muted-foreground">Automated documentation of every patient interaction with seamless EHR integration.</p>
                </CardContent>
              </Card>

              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Outbound calling for missed-call recovery and follow-ups</h3>
                  <p className="text-muted-foreground">Proactive patient engagement with automated callback and follow-up capabilities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety & Compliance Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Safety & Compliance</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Medical-grade security and compliance for healthcare communications
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">HIPAA-compliant voice processing and storage</h3>
                  <p className="text-muted-foreground">End-to-end encryption for all voice communications with comprehensive audit trails.</p>
                </CardContent>
              </Card>

              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Clinical triage protocols for urgent situations</h3>
                  <p className="text-muted-foreground">Automatic escalation for emergency keywords with intelligent routing to clinical staff.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proven Results Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transforming healthcare practices with measurable outcomes
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
                  { number: "50%", label: "Reduced Call Time" },
                  { number: "$50K", label: "Annual Savings" },
                  { number: "20%", label: "Fewer No-Shows" },
                  { number: "451%", label: "Five-Year ROI" }
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
              subtitle="Everything you need to know about AI voice agents for healthcare"
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
                Transform your phone support today
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience 24/7 AI voice support that never misses a call and elevates patient satisfaction.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start AI Voice Support
                <Phone className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Calls;