import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { Eye, Users, FileText, Languages, Shield, Stethoscope } from "lucide-react";
import { Helmet } from "react-helmet-async";

const MaintainEyeContact = () => {
  const specialtySnapshots = [
    {
      title: "Behavioral Health",
      description: "Maintain presence during sensitive conversations while capturing nuanced narrative details and assessments (PHQ-9, GAD-7, PCL-5).",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Emergency/Urgent Care", 
      description: "Keep eyes on the patient in high-stakes contexts while the scribe preserves an accurate clinical timeline.",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Primary Care",
      description: "Build trust in short visits and still walk away with complete notes and correct codes.",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const howItWorksSteps = [
    {
      title: "Ambient capture in any setting",
      description: "In-person, phone, or telehealth visits are transcribed and understood in real time."
    },
    {
      title: "Clinical structuring + coding",
      description: "The scribe creates SOAP/DAP notes and suggests compliant codes, referral letters, and summaries from the consult context."
    },
    {
      title: "EHR-ready by default",
      description: "Works with major EHRs and can run standalone to accelerate go-live and protect clinical time."
    }
  ];

  const faqs = [
    {
      question: "Does the AI replace clinician judgment?",
      answer: "No—the clinician reviews and approves the note; the scribe drafts, structures, and suggests codes to support efficiency."
    },
    {
      question: "Can it work without EHR access?",
      answer: "Yes—standalone mode accelerates adoption; integrations are available per plan."
    },
    {
      question: "Is it secure?",
      answer: "S10.AI emphasizes HIPAA-grade compliance and enterprise security practices."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Maintain patient eye-contact with an AI medical scribe | Ambient, hands-free notes</title>
        <meta 
          name="description" 
          content="Keep eyes on the patient—not the screen. An AI medical scribe captures, structures, and codes the consult in real time so clinicians stay fully present and finish accurate notes faster."
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
                <Eye className="w-4 h-4 mr-2" />
                Patient Connection
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent leading-tight">
                Make eye contact, not screen contact
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                The AI medical scribe handles the documentation—focus entirely on the person in front of you.
              </p>
              
              <Button size="lg" className="premium-button group">
                See Patient Presence in Action
                <Eye className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                  Stay present from hello to sign-off
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Stay present from hello to sign-off</h3>
                      <p className="text-muted-foreground">Ambient AI captures every clinical detail while attention stays on body language, nuance, and rapport.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Never break focus to type</h3>
                      <p className="text-muted-foreground">Voice-first, hands-free controls mean no mid-visit typing or screen toggling.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Languages className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Multilingual care, one click</h3>
                      <p className="text-muted-foreground">Speak and document across 60+ languages to match patient needs while maintaining clinician-preferred documentation standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Accuracy clinicians can trust</h3>
                      <p className="text-muted-foreground">Clinical-grade transcription and coding support reduce rework and help close charts quickly.</p>
                    </div>
                  </div>
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
                    <Eye className="w-24 h-24 text-background/80" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">How it works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Seamless integration that works with your existing workflow
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
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
                      <h3 className="font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Snapshots */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Specialty snapshots</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tailored solutions for different medical specialties
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {specialtySnapshots.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glassmorphism border-0 h-full hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        {specialty.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-primary">{specialty.title}</h3>
                      <p className="text-muted-foreground">{specialty.description}</p>
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
              subtitle="Everything you need to know about maintaining patient eye-contact with AI"
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
                See patient presence in action—try an AI medical scribe demo today
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Experience how ambient AI keeps you focused on what matters most: your patients.
              </p>
              <Button size="lg" variant="secondary" className="hero-button group">
                Try AI Medical Scribe Demo
                <Eye className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MaintainEyeContact;