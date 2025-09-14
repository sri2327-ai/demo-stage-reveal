import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  Puzzle, 
  Zap, 
  Settings, 
  Users, 
  Cloud, 
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

const UniversalAppIntegrations = () => {
  const keyBenefits = [
    {
      title: "Extensive integration library",
      description: "7,000+ healthcare app integrations available",
      icon: <Puzzle className="w-6 h-6" />
    },
    {
      title: "Practice management systems (PMS)",
      description: "Complete workflow integration with scheduling and billing",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "SIP and telecommunications platforms",
      description: "Seamless communication system integration",
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "Telehealth platforms and video conferencing",
      description: "Enhanced virtual care capabilities",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Cloud storage and document management",
      description: "Secure file handling and organization",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Email and communication systems",
      description: "Unified messaging and correspondence management",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const integrationCategories = [
    {
      title: "Clinical systems",
      description: "Laboratory information systems (LIS)",
      details: ["Radiology information systems (RIS)", "Picture archiving and communication systems (PACS)", "Pharmacy management systems"],
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Administrative platforms",
      description: "Billing and revenue cycle management",
      details: ["Patient scheduling and appointment systems", "Insurance verification and authorization", "Quality reporting and analytics"],
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Workflow Automation",
      description: "Patient data syncs across all connected systems",
      details: ["Automated updates and notifications", "Centralized documentation with distributed access", "Reduced manual data entry and errors"],
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Single point of control for multiple systems with automated task routing and completion",
      author: "Healthcare IT Management",
      rating: 5
    },
    {
      quote: "Intelligent alerts and reminders with comprehensive audit trails and reporting have transformed our operations.",
      author: "Dr. System Integration",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How many healthcare applications can be integrated?",
      answer: "S10.AI supports integration with over 7,000 healthcare applications including practice management systems, telehealth platforms, laboratory systems, and communication tools."
    },
    {
      question: "Can custom integrations be developed?",
      answer: "Yes, our platform includes custom integration development capabilities to connect with specialized or proprietary healthcare systems not in our standard library."
    },
    {
      question: "How does the intelligent orchestration work?",
      answer: "AI agents manage data exchange across platforms with automated workflow triggers, real-time synchronization, and intelligent routing to eliminate manual data entry."
    },
    {
      question: "What types of systems are supported?",
      answer: "We integrate with clinical systems (LIS, RIS, PACS), administrative platforms (PMS, billing), communication tools (SIP, telehealth), and cloud storage solutions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Universal App Integrations - Connect 7,000+ Healthcare Applications</title>
        <meta name="description" content="Integrate with 7,000+ healthcare applications for seamless workflow automation. S10.AI serves as the intelligent layer connecting your entire healthcare technology stack." />
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
                <Puzzle className="w-4 h-4 mr-2" />
                Universal App Integrations
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Connect everything in your healthcare ecosystem
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Integrate with 7,000+ healthcare applications for seamless workflow automation. S10.AI serves as the intelligent layer connecting telehealth, imaging, practice management, and communication tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Unify Your Healthcare Technology Stack
                  <Puzzle className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Comprehensive integration ecosystem with intelligent orchestration
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

        {/* Integration Categories Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Integration Categories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive system integration across all healthcare domains
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {integrationCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full rounded-2xl border border-[#387E89]/30 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl text-primary">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <ul className="space-y-2">
                        {category.details.map((detail, detailIndex) => (
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

        {/* Intelligent Orchestration Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Intelligent Orchestration</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                AI-driven workflow automation across your entire technology stack
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">AI agents manage data exchange across platforms</h3>
                  <p className="text-muted-foreground">Intelligent automation handles complex data workflows between systems without manual intervention.</p>
                </CardContent>
              </Card>

              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Automated workflow triggers and actions</h3>
                  <p className="text-muted-foreground">Real-time synchronization across systems with custom integration development capabilities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {[
                { number: "7,000+", label: "App Integrations" },
                { number: "100%", label: "Workflow Automation" },
                { number: "0", label: "Manual Data Entry" },
                { number: "24/7", label: "System Sync" }
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

        {/* Unified Healthcare Workflow Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Unified Healthcare Workflow</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enhanced productivity through intelligent system orchestration
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
                  <div className="font-semibold text-lg text-primary">Enhanced productivity</div>
                  <div className="text-muted-foreground">Single point of control for multiple systems</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <div className="container">
            <FAQSection
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about universal app integrations"
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
                Unite your healthcare technology ecosystem
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience seamless integration across 7,000+ healthcare applications with intelligent workflow automation.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start Unifying Today
                <Puzzle className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UniversalAppIntegrations;