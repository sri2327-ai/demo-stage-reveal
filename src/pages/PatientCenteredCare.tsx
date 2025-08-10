import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { Heart, Users, Globe, FileText, MessageSquare, Activity } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PatientCenteredCare = () => {
  const careFeatures = [
    {
      title: "Presence-first care",
      description: "The AI scribe enables uninterrupted listening and observation of nonverbal cues and empathy cues.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Nuanced documentation",
      description: "Structured notes capture context, plans, and relevant assessments for clear next steps.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Language and culture aware",
      description: "Multilingual support and customizable templates respect patient preferences while preserving clinical standards.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Continuity across encounters",
      description: "Longitudinal insights link history and patterns to inform decisions and follow-up.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Engagement that sticks",
      description: "AI chat/phone agents automate reminders, education, and follow-ups based on approved content to sustain adherence and satisfaction.",
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  const careWorkflow = [
    {
      phase: "Before visit",
      description: "Pre-charting, history retrieval, and document management prepare the encounter."
    },
    {
      phase: "During visit",
      description: "Hands-free capture and voice controls keep attention on the patient while producing structured, EHR-ready notes."
    },
    {
      phase: "After visit",
      description: "Letters, instructions, and summaries are generated for patients and care teams; agents handle outreach and reminders."
    }
  ];

  const useCases = [
    {
      title: "General Practice",
      description: "Build rapport in brief windows while maintaining accurate documentation and timely follow-ups.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Surgical/Procedural",
      description: "Standardized letters, instructions, and coordination artifacts generated quickly.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Behavioral Health",
      description: "Emotional availability preserved; assessments and narrative detail documented accurately.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "Who drives patient-centered care?",
      answer: "Clinicians remain responsible for decisions; the AI scribe drafts and agents support adherence and coordination."
    },
    {
      question: "How is accuracy ensured?",
      answer: "Clinical models, templating, and review loops before EHR insertion improve reliability."
    },
    {
      question: "What about data control?",
      answer: "De-identified processing and secure handling are emphasized; clinician approval gates final records."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Deliver patient-centered care with an AI medical scribe + AI chat and phone agents</title>
        <meta 
          name="description" 
          content="Be present, understand nuance, and communicate clearly. The AI medical scribe preserves connection in the room while chat/phone agents support continuity between visits."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge variant="secondary" className="mb-6 glassmorphism">
                <Heart className="w-4 h-4 mr-2" />
                Patient-Centered Care
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent leading-tight">
                Patient-centered care, powered by presence and continuity
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Maintain eye contact in the visit—and maintain momentum between visits.
              </p>
              
              <Button size="lg" className="premium-button group">
                Empower Patient-Centered Care
                <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Care Features */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive patient-centered features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technology that enhances human connection and continuity of care
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glassmorphism border-0 h-full hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-primary">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Care Workflow */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Care workflow</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Seamless support throughout the entire patient journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {careWorkflow.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glassmorphism border-0 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold mb-3 text-xl text-primary">{phase.phase}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
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
                Patient-centered care across all specialties and settings
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
              subtitle="Everything you need to know about delivering patient-centered care with AI"
              faqs={faqs}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
                Empower patient-centered care—see a live end-to-end patient journey demo
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience how AI enhances human connection and continuity throughout the patient journey.
              </p>
              <Button size="lg" variant="secondary" className="hero-button group">
                See Patient Journey Demo
                <Users className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PatientCenteredCare;