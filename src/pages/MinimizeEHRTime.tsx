import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { Clock, FileText, Code, MessageSquare, Zap, Building2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const MinimizeEHRTime = () => {
  const features = [
    {
      title: "Save hours daily",
      description: "Real-time transcription, structured notes, and code suggestions reduce documentation time dramatically.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Ready-to-sign drafts",
      description: "Visit transcripts become EHR-ready notes, letters, and plans—review, edit, and close in minutes.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Code confidently",
      description: "AI-assisted ICD-10, CPT, E/M, and HCC suggestions help capture complete, compliant documentation.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Offload the inbox",
      description: "AI phone/chat agents handle scheduling, reminders, intake, refills routing, and basic triage to reduce clicks and messages.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Launch fast, integrate later",
      description: "Works with major EHRs and can operate standalone to avoid IT delays.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const deepDiveFeatures = [
    {
      title: "Voice-first workflows",
      description: "Start/stop, add details, and generate letters or summaries hands-free during the consult."
    },
    {
      title: "Pre-charting and document management",
      description: "Intelligent chart prep and retrieval of prior notes, labs, and documents save time before the visit."
    },
    {
      title: "Front office automation",
      description: "AI agents book/reschedule, verify insurance, and manage follow-ups to keep calendars clean and the EHR uncluttered."
    }
  ];

  const useCases = [
    {
      title: "Solo/Small Practices",
      description: "Standalone deploy, then add integrations—unlock time savings immediately.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Multi-specialty Groups",
      description: "Specialty templates at scale with consistent standards and coding completeness.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Telehealth/Phone Visits",
      description: "The scribe supports virtual modalities; AI phone agents capture and route information before it hits the chart.",
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "Will accuracy suffer with accents?",
      answer: "The scribe is tuned for medical speech and diverse accents in 60+ languages."
    },
    {
      question: "Can phone/chat agents customize scripts?",
      answer: "Yes—no-code controls, branded voices, and tailored intents are supported."
    },
    {
      question: "How quickly can teams adopt it?",
      answer: "Standalone mode and voice-first design shorten training; EHR integration is available per plan."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Minimize EHR time with an AI medical scribe + AI phone and chat agents</title>
        <meta 
          name="description" 
          content="End after-hours charting and reduce admin. The AI medical scribe drafts accurate notes and codes, while AI phone and chat agents handle intake, scheduling, verifications, and follow-ups."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px]">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 text-[#143151]">
                <Clock className="w-4 h-4 mr-2" />
                EHR Efficiency
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight">
                Less time in the EHR, more time in care
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Combine an AI medical scribe with AI phone/chat agents to cut charting and shrink inbox load.
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:shadow-xl transition-all duration-300 group">
                Cut EHR Time Now
                <Clock className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                  Transform your documentation workflow
                </h2>
                
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-primary rounded-3xl p-8 glassmorphism">
                  <div className="w-full h-full bg-background/10 rounded-2xl flex items-center justify-center">
                    <Clock className="w-24 h-24 text-background/80" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Feature deep dive</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced capabilities that streamline your entire workflow
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {deepDiveFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glassmorphism border-0 h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Use cases</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Flexible deployment for any practice size or specialty
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glassmorphism border-0 h-full hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        {useCase.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-primary">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <FAQSection 
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about minimizing EHR time"
              faqs={faqs}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#143151] to-[#387E89] relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px] opacity-10" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
                Cut EHR time now—book a workflow consult and live demo
              </h2>
              <p className="text-xl text-background/80 mb-8">
                See how AI can transform your documentation workflow and free up hours for patient care.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Book Workflow Consult
                <Zap className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MinimizeEHRTime;