import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { 
  FileText, 
  Zap, 
  Mic, 
  Users, 
  Settings, 
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

const TemplatesPage = () => {
  const keyBenefits = [
    {
      title: "Unlimited customization",
      description: "Build templates for any note type: SOAP, DAP, BIRP, EMDR",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Create specialty-specific sections for all medical specialties",
      description: "Design encounter-specific formats for new vs. follow-up patients",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Dynamic templates that expand based on clinical context",
      description: "Intelligent adaptation to patient presentation and findings",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Voice-activated efficiency",
      description: "Trigger complete sections with simple voice commands",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Dot phrases instantly populate review of systems",
      description: "Conditional macros that adapt to patient presentation",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Multi-layered automation for complex documentation needs",
      description: "Seamless integration with your existing workflow",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const templateCategories = [
    {
      title: "Specialty-Optimized Templates",
      description: "Cardiology: Echo, EKG, and cardiac consultation formats",
      details: ["Emergency Medicine: Rapid assessment and treatment plans", "Primary Care: Comprehensive wellness and chronic disease management", "Mental Health: Custom templates for psychiatric evaluations"],
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Note Type Flexibility",
      description: "SOAP notes with intelligent section population",
      details: ["Progress notes with automated clinical reasoning", "Consultation reports with specialty-specific formatting", "Procedure notes with step-by-step documentation"],
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Intelligent Adaptation",
      description: "Templates update automatically based on clinical findings",
      details: ["Learn your preferred terminology and phrasing over time", "Adjust section emphasis based on specialty workflow", "Integrate seamlessly with EHR template requirements"],
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Mental health providers praise S10.AI's custom templates as 'huge for mental health workflows'",
      author: "Mental Health Provider Survey",
      rating: 5
    },
    {
      quote: "The template customization allows me to document exactly how I think about each patient encounter.",
      author: "Dr. Clinical Excellence",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Can I create templates for any medical specialty?",
      answer: "Yes, S10.AI supports unlimited template creation for all medical specialties including cardiology, emergency medicine, primary care, mental health, and more."
    },
    {
      question: "How do voice-activated templates work?",
      answer: "Simply use voice commands or 'dot phrases' to trigger complete template sections. The system recognizes your preferred terminology and populates relevant sections automatically."
    },
    {
      question: "Do templates adapt to different patient presentations?",
      answer: "Yes, our dynamic templates expand and adapt based on clinical context, patient history, and encounter type to provide the most relevant documentation structure."
    },
    {
      question: "Can templates integrate with my existing EHR?",
      answer: "Absolutely. Our templates are designed to integrate seamlessly with your EHR requirements while maintaining your preferred documentation style and workflow."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dynamic Medical Templates - Custom Clinical Documentation That Adapts</title>
        <meta name="description" content="Create unlimited specialty-specific templates that adapt dynamically. Design custom clinical notes that match your exact workflow with intelligent templates." />
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
                Templates
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Documentation that fits your workflow perfectly
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Create unlimited specialty-specific templates that adapt dynamically. Design custom clinical notes that match your exact workflow with intelligent templates that expand based on patient context.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                  Build Your Perfect Clinical Note
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
                Powerful template customization that adapts to your practice
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

        {/* Template Categories Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Template Categories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive template solutions for every clinical need
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {templateCategories.map((category, index) => (
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

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "∞", label: "Custom Templates" },
                { number: "15+", label: "Note Types" },
                { number: "50+", label: "Specialties" },
                { number: "100%", label: "Voice Activated" }
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

        {/* Success Stories Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Healthcare providers love our flexible template system
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
                  <div className="font-semibold text-lg text-primary">Perfect workflow integration</div>
                  <div className="text-muted-foreground">Templates that think and adapt like you do</div>
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
              subtitle="Everything you need to know about custom clinical templates"
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
                Create your perfect clinical template today
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience unlimited customization with templates that adapt to your unique workflow.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Start Building Templates
                <FileText className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TemplatesPage;