import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { HeroBadge } from "@/components/ui/HeroBadge";

import { Link } from "react-router-dom";
import {
  FileText,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle2,
  Users,
  Stethoscope,
  Brain
} from "lucide-react";

const CutAdminTasks = () => {
  // Key benefits
  const benefits = [
    {
      title: "Automate 85% of admin tasks",
      description:
        "AI medical scribe drafts notes and codes; AI phone/chat agents manage scheduling, intake, and follow-ups.",
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Save 8+ hours daily",
      description:
        "Real-time documentation, automated scheduling, and intelligent patient communication cut admin time dramatically.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "No more \"pajama time\"",
      description:
        "Complete charts during visits while AI agents handle calls, reminders, and routine inquiries around the clock.",
      icon: <FileText className="w-6 h-6 text-primary" />,
    },
    {
      title: "Streamline front office",
      description:
        "AI phone agent manages appointments, insurance verification, and prior authorizations without human intervention.",
      icon: <Phone className="w-6 h-6 text-primary" />,
    },
    {
      title: "24/7 patient support",
      description:
        "AI chat agent handles basic inquiries, medication reminders, and follow-up coordination automatically.",
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
    },
  ];

  // How it works
  const howItWorksSteps = [
    {
      title: "AI medical scribe",
      description:
        "Captures conversations, structures notes, suggests codes, generates letters—all hands-free during patient care.",
    },
    {
      title: "AI phone agent",
      description:
        "Handles scheduling, insurance verification, prior auths, and prescription refills with natural conversation.",
    },
    {
      title: "AI chat agent",
      description:
        "Manages patient questions, appointment changes, lab results, and care plan follow-ups via secure messaging.",
    },
  ];

  // Specialty snapshots
  const specialtySnapshots = [
    {
      title: "Primary care",
      description:
        "Automate wellness visits, chronic care documentation, and routine patient communications.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Emergency medicine",
      description:
        "Eliminate discharge paperwork delays while AI agents manage insurance verification and follow-ups.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Mental health",
      description:
        "Focus on therapy while AI handles session notes, insurance auths, and appointment coordination.",
      icon: <Brain className="w-6 h-6" />,
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Will this replace our staff?",
      answer:
        "No—AI handles routine tasks while staff focuses on complex cases and patient relationships.",
    },
    {
      question: "How secure are the AI agents?",
      answer:
        "All tools are HIPAA-compliant with enterprise-grade security and audit trails.",
    },
    {
      question: "Can it work with our current systems?",
      answer:
        "Yes—integrates with 100+ EHRs and practice management systems.",
    },
  ];

  const faqLdJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const canonical = new URL('/cut-admin-tasks', window.location.origin).toString();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Helmet>
        <title>End administrative burden | Cut admin tasks</title>
        <meta
          name="description"
          content="Automate 85% of admin tasks with AI scribe, phone and chat agents. Save 8+ hours daily, eliminate pajama time, and streamline the front office."
        />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(faqLdJson)}</script>
      </Helmet>

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
            <HeroBadge>Clinical Admin Automation</HeroBadge>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
              End administrative burden, focus on care
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              AI medical scribe, AI phone agent, and AI chat agent handle the busywork—reclaim time for patients.
            </p>

            <Button asChild size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300">
              <Link to="/presentation">Cut admin tasks now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                Automate, accelerate, and eliminate after-hours work
              </h2>

              <div className="space-y-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{b.title}</h3>
                      <p className="text-muted-foreground">{b.description}</p>
                    </div>
                  </div>
                ))}
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
              Three AI agents work in concert to remove administrative friction
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Specialty snapshots</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where automation makes the biggest difference
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
                <Card className="bg-card border h-full hover:shadow-elegant transition-all duration-300">
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
          <div className="text-center mt-10">
            <Button asChild size="lg" className="rounded-full px-8 premium-button">
              <Link to="/specialties">See more specialty details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Answers about automating administrative work with AI"
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
              Cut admin tasks now—get your automation workflow assessment
            </h2>
            <p className="text-xl text-background/80 mb-8">
              See how much time you can reclaim with AI-driven documentation and patient communication.
            </p>
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300">
              <Link to="/presentation">Get assessment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CutAdminTasks;
