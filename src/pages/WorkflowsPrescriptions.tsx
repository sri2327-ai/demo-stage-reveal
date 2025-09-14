import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  Pill, 
  Zap, 
  Shield, 
  Users, 
  TestTube, 
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

const WorkflowsPrescriptions = () => {
  const keyBenefits = [
    {
      title: "Smart prescription workflow",
      description: "Detects medication intents from ambient conversation",
      icon: <Pill className="w-6 h-6" />
    },
    {
      title: "Pre-stages eRx orders with comprehensive safety validations",
      description: "Real-time drug interaction and allergy screening",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Insurance coverage hints and alternative suggestions",
      description: "Optimize prescribing for patient affordability",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Automated lab ordering",
      description: "Suggests appropriate tests based on patient presentation",
      icon: <TestTube className="w-6 h-6" />
    },
    {
      title: "Flags duplicate orders from recent history",
      description: "Clinical decision support for optimal test selection",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Automated result integration and follow-up",
      description: "Seamless workflow from order to results",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const safetyFeatures = [
    {
      title: "Comprehensive validation",
      description: "Drug-drug interaction screening across all medications",
      details: ["Renal dosing adjustments and contraindications", "Allergy cross-referencing with alternative recommendations", "Clinical appropriateness validation for all orders"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Quality Assurance",
      description: "Evidence-based ordering protocols",
      details: ["Dosing verification against patient parameters", "Lab value interpretation and trending", "Automated follow-up scheduling for results"],
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "EHR Integration",
      description: "Orders flow directly into your EHR system",
      details: ["Automated refill request processing", "Lab result updates in patient charts", "Prescription tracking and management"],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Supports prescription and lab workflows across all medical specialties with specialty-specific order sets and protocols.",
      author: "Clinical Specialties Review",
      rating: 5
    },
    {
      quote: "The intelligent ordering system has revolutionized how we handle prescriptions and lab orders in our practice.",
      author: "Dr. Workflow Excellence",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How does the system detect prescription intents?",
      answer: "Our AI analyzes ambient conversation during patient encounters to automatically detect when medications are discussed, pre-staging orders with comprehensive safety validations."
    },
    {
      question: "What safety checks are included?",
      answer: "The system performs drug-drug interaction screening, allergy cross-referencing, renal dosing adjustments, and clinical appropriateness validation for all orders."
    },
    {
      question: "Can it suggest lab tests automatically?",
      answer: "Yes, the system suggests appropriate lab tests based on patient presentation, flags duplicate orders, and provides clinical decision support for optimal test selection."
    },
    {
      question: "How does EHR integration work?",
      answer: "Orders flow directly into your EHR system with automated refill processing, lab result updates, and comprehensive prescription tracking and management."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Prescription & Lab Order Workflows - Streamlined Clinical Ordering</title>
        <meta name="description" content="Automate prescription and lab order workflows with intelligent validation. Detect medication and lab intents from conversations with built-in safety checks." />
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
                <Pill className="w-4 h-4 mr-2" />
                Workflows: Prescriptions & Lab Orders
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Streamlined ordering with built-in safety checks
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Automate prescription and lab order workflows with intelligent validation. Detect medication and lab intents from conversations, create pre-validated orders with safety screening, and integrate directly with your EHR.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Revolutionize Clinical Ordering
                  <Pill className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Intelligent ordering workflows with comprehensive safety validation
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

        {/* Safety Features Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Safety Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive validation and quality assurance for every order
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {safetyFeatures.map((feature, index) => (
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
                { number: "100%", label: "Safety Validated" },
                { number: "50+", label: "Specialties" },
                { number: "24/7", label: "Order Processing" },
                { number: "0", label: "Manual Entry" }
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

        {/* Clinical Specialties Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Clinical Specialties</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive ordering support across all medical specialties
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
                  <div className="font-semibold text-lg text-primary">Seamless order management</div>
                  <div className="text-muted-foreground">Intelligent workflows across all clinical specialties</div>
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
              subtitle="Learn how intelligent ordering workflows enhance patient safety"
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
                Streamline your ordering workflows today
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience intelligent prescription and lab ordering with comprehensive safety validation.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start Smart Ordering
                <Pill className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkflowsPrescriptions;