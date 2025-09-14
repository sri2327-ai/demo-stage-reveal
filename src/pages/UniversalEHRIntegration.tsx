import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  Database, 
  Zap, 
  Settings, 
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

const UniversalEHRIntegration = () => {
  const keyBenefits = [
    {
      title: "Truly universal compatibility",
      description: "Works with 100+ EHR systems including Epic, Cerner, Athenahealth",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "No API development or complex setup required",
      description: "Simple integration process with immediate deployment",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Bidirectional data exchange in real-time",
      description: "Seamless two-way communication with EHR systems",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Auto-populates structured data fields",
      description: "Intelligent field mapping and data insertion",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Intelligent adaptation",
      description: "Agentic AI agents automatically configure data mappings",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Adapts to EHR updates and schema changes",
      description: "Continuous compatibility with system updates",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const integrationCapabilities = [
    {
      title: "Complete EHR automation",
      description: "Direct note insertion into patient charts",
      details: ["Automated order entry and lab results", "Insurance verification and patient demographics", "Referral letter generation and routing"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Zero disruption setup",
      description: "No 'rip-and-replace' of existing systems",
      details: ["Maintains current workflows while adding intelligence", "Staff training minimal due to familiar interface", "Immediate productivity gains"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Supported EHR Systems",
      description: "Major platforms: Epic, Cerner, Athenahealth, NextGen, eClinicalWorks",
      details: ["Specialty systems: OSMIND, Elation, Practice Q, Intake Q", "Cloud and on-premise: Works with any deployment model"],
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "80% Faster Documentation with OSMIND EHR Integration - S10.AI reduces documentation time significantly across all EHR platforms",
      author: "EHR Integration Study",
      rating: 5
    },
    {
      quote: "The universal integration capability means we didn't have to change our existing workflow - it just got smarter.",
      author: "Dr. System Integration",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How many EHR systems are supported?",
      answer: "S10.AI supports 100+ EHR systems including major platforms like Epic, Cerner, Athenahealth, NextGen, and specialty systems like OSMIND, Elation, and Practice Q."
    },
    {
      question: "Is complex setup required for integration?",
      answer: "No, our agentic AI automatically configures data mappings and adapts to your EHR architecture, reducing implementation time to minutes with no API development required."
    },
    {
      question: "Can it work with both cloud and on-premise EHRs?",
      answer: "Yes, S10.AI works with any deployment model including cloud-based and on-premise EHR systems, maintaining FHIR and HL7 standards compliance."
    },
    {
      question: "What happens when the EHR system updates?",
      answer: "Our intelligent adaptation technology automatically adjusts to EHR updates and schema changes, ensuring continuous compatibility without manual intervention."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Universal EHR Integration - Works with 100+ Healthcare Systems</title>
        <meta name="description" content="Deep, bidirectional integration across 100+ EHR systems without complex setup. Agentic AI adapts to any EHR architecture instantly." />
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
                <Database className="w-4 h-4 mr-2" />
                Universal EHR Integration
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Works seamlessly with any EHR system
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Deep, bidirectional integration across 100+ EHR systems without complex setup. Agentic AI adapts to any EHR architecture, from Epic and Cerner to specialty-specific systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Connect with Any EHR Instantly
                  <Database className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Universal compatibility with intelligent adaptation and zero disruption
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

        {/* Integration Capabilities Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Integration Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive EHR automation with seamless workflow integration
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {integrationCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full rounded-2xl border border-[#387E89]/30 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                        {capability.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl text-primary">{capability.title}</h3>
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.details.map((detail, detailIndex) => (
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
                { number: "100+", label: "EHR Systems" },
                { number: "0", label: "Setup Complexity" },
                { number: "100%", label: "FHIR Compliant" },
                { number: "24/7", label: "Real-time Sync" }
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

        {/* Standards Compliance Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Standards Compliance</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with industry standards for seamless healthcare interoperability
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">FHIR and HL7 standards compliance</h3>
                  <p className="text-muted-foreground">Full adherence to healthcare interoperability standards ensuring seamless data exchange across all systems.</p>
                </CardContent>
              </Card>

              <Card className="bg-card border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-primary">Reduces implementation time to minutes</h3>
                  <p className="text-muted-foreground">Intelligent AI agents automatically configure and adapt to your specific EHR environment for immediate deployment.</p>
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
                Proven results across diverse EHR environments
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
                  <div className="font-semibold text-lg text-primary">80% faster documentation</div>
                  <div className="text-muted-foreground">Across all EHR platforms with zero disruption</div>
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
              subtitle="Everything you need to know about universal EHR integration"
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
                Connect your EHR in minutes, not months
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience universal EHR integration that adapts to your system automatically.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start EHR Integration
                <Database className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UniversalEHRIntegration;