import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  FileText, 
  Zap, 
  Database, 
  Users, 
  Clock, 
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

const PreCharting = () => {
  const keyBenefits = [
    {
      title: "Comprehensive patient overview",
      description: "Pulls data from prior visits and current medications",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Reviews recent lab results and imaging studies",
      description: "Complete clinical picture at your fingertips",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Identifies care gaps and preventive care opportunities",
      description: "Never miss important health maintenance items",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Creates focused agenda based on appointment type",
      description: "Tailored preparation for every patient encounter",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Smart clinical insights",
      description: "Pre-populated assessment sections with patient-specific data",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Intelligent patient insights for clinical decision-making",
      description: "Context-aware documentation ready before the encounter",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const preChartingComponents = [
    {
      title: "Clinical Data Integration",
      description: "Historical visit summaries and treatment responses",
      details: ["Current medication lists with interaction screening", "Recent diagnostic results and imaging reports", "Care plan updates and follow-up requirements"],
      icon: <Database className="w-6 ehrz-6" />
    },
    {
      title: "Visit Optimization",
      description: "Specialty-specific pre-visit questionnaires",
      details: ["Risk stratification and clinical alerts", "Preventive care reminders and screenings", "Insurance verification and authorization status"],
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "EHR Integration",
      description: "Integrates with Epic, Cerner, Athenahealth, and 100+ EHRs",
      details: ["Automated updates from labs, imaging, and referrals", "Patient document upload and organization", "CRM integration for streamlined workflows"],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Reduces pre-visit chart review time significantly while enabling more meaningful patient interactions",
      author: "Clinical Impact Study",
      rating: 5
    },
    {
      quote: "Pre-charting has transformed how I prepare for patient visits. Everything I need to know is ready before they walk in.",
      author: "Dr. Prepared Practice",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How does pre-charting save time?",
      answer: "Pre-charting automatically pulls and organizes patient data from multiple sources, creating comprehensive visit summaries before patients arrive, eliminating manual chart review."
    },
    {
      question: "What data sources are integrated?",
      answer: "Our system integrates with 100+ EHRs, labs, imaging centers, and referral systems to provide a complete clinical picture including medications, allergies, recent results, and care gaps."
    },
    {
      question: "Can it identify care gaps?",
      answer: "Yes, the system automatically identifies preventive care opportunities, overdue screenings, and care plan items that need attention during the visit."
    },
    {
      question: "Does it work with telehealth visits?",
      answer: "Absolutely. Pre-charting works seamlessly with telehealth platforms, ensuring you're fully prepared for virtual patient encounters."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Pre-Charting - Intelligent Chart Preparation for Every Visit</title>
        <meta name="description" content="Start every visit prepared and informed. Intelligent chart preparation creates visit-ready documentation before patients arrive." />
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
                <FileText className="w-4 h-4 mr-2" />
                Pre-Charting
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Start every visit prepared and informed
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Intelligent chart preparation creates visit-ready documentation before patients arrive. Automated pre-charting pulls patient history, medications, labs, and imaging to create comprehensive visit summaries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Transform Visit Preparation
                  <FileText className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
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
                Comprehensive pre-visit preparation that enhances patient care
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

        {/* Pre-Charting Components Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pre-Charting Components</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive data integration and visit optimization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {preChartingComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full rounded-2xl border border-[#387E89]/30 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                        {component.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl text-primary">{component.title}</h3>
                      <p className="text-muted-foreground mb-4">{component.description}</p>
                      <ul className="space-y-2">
                        {component.details.map((detail, detailIndex) => (
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
                { number: "100+", label: "EHR Integrations" },
                { number: "5 min", label: "Prep Time Saved" },
                { number: "100%", label: "Chart Readiness" },
                { number: "24/7", label: "Data Updates" }
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

        {/* Clinical Impact Section */}
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
                Transforming patient visit preparation across healthcare
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
                  <div className="font-semibold text-lg text-primary">Seamless data flow</div>
                  <div className="text-muted-foreground">Complete chart preparation before every encounter</div>
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
              subtitle="Everything you need to know about intelligent pre-charting"
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
                Never be unprepared for a patient visit again
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience intelligent pre-charting that transforms visit preparation.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start Pre-Charting Today
                <FileText className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PreCharting;