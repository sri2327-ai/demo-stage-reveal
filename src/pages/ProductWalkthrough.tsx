import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Settings, CalendarDays, Mic, ClipboardList, Send, Wand2, Bot, BarChart3, ShieldCheck, Upload, FileText } from "lucide-react";

const sections = [
  { id: "setup", label: "Setup" },
  { id: "schedule", label: "Schedule" },
  { id: "capture", label: "Capture" },
  { id: "coding", label: "Coding" },
  { id: "send", label: "Send to EHR" },
  { id: "automations", label: "Automations" },
  { id: "agent", label: "AI Agent" },
  { id: "dashboard", label: "Dashboard" },
];

const ProductWalkthrough: React.FC = () => {
  const [active, setActive] = useState<string>(sections[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scrollspy for active section highlighting
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const onNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageTitle = "ScribeAI Product Walkthrough";
  const description = "Set up, schedule, capture, code, and send to EHR with ScribeAI.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : "/scribeai"} />
      </Helmet>

      <header className="w-full border-b">
        <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">AI Medical Scribe</h1>
              <p className="text-sm opacity-80 mt-1">ScribeAI • End-to-end clinical documentation workflow</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full px-3 py-1 border" aria-label="Clinician">
                <div className="h-6 w-6 rounded-full grid place-items-center text-xs font-medium border" aria-hidden>
                  SM
                </div>
                <span className="text-sm">Dr. Sarah Mitchell</span>
              </div>
              <Button asChild className="rounded-full">
                <Link to="/welcome">Get started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-16 pt-6 md:pt-10">
        {/* Sticky Step Navigation */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px,1fr]">
          <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-auto">
            {/* Mobile nav */}
            <div className="lg:hidden -mx-4 overflow-x-auto">
              <div className="flex items-center gap-2 px-4 pb-2">
                {sections.map((s) => (
                  <Button
                    key={s.id}
                    variant={active === s.id ? "default" : "outline"}
                    className="whitespace-nowrap rounded-full"
                    onClick={() => onNavClick(s.id)}
                    aria-current={active === s.id ? "step" : undefined}
                  >
                    {s.label}
                  </Button>
                ))}
              </div>
            </div>
            {/* Desktop nav */}
            <nav className="hidden lg:block">
              <div className="space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onNavClick(s.id)}
                    className={`w-full text-left px-4 py-2 rounded-md border transition ${
                      active === s.id ? "bg-primary/5 border-primary/30" : "hover:bg-muted"
                    }`}
                    aria-current={active === s.id ? "step" : undefined}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </nav>
          </aside>

          <article className="space-y-14">
            {/* Setup */}
            <section id="setup" className="scroll-mt-24">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                    <Settings className="h-5 w-5" aria-hidden /> Setup
                  </h2>
                  <p className="mt-2 opacity-80">Get set up in 2 minutes. Choose your note format and connect securely to your EHR.</p>
                </div>
                <Button asChild className="rounded-full hidden md:inline-flex">
                  <Link to="#schedule">Next: Schedule</Link>
                </Button>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" /> Set Note Style
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Previous note",
                        "Template library",
                        "Import template",
                        "Paste template",
                        "Build from scratch",
                        "Build by prompt",
                      ].map((label) => (
                        <Button key={label} variant="outline" className="rounded-full">{label}</Button>
                      ))}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3">
                        <div className="text-sm font-medium">Import Template File</div>
                        <button className="aspect-video grid place-items-center rounded-lg border text-sm opacity-80">
                          <Upload className="h-5 w-5 mr-2" /> Drop file or click to browse
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="text-sm font-medium">Paste Template Content</div>
                        <div className="rounded-lg border p-3 text-sm opacity-80">Paste here…</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Build Template by AI Prompt</div>
                      <div className="rounded-lg border p-3 text-sm opacity-80">Describe your ideal template…</div>
                      <Button className="rounded-full"><Wand2 className="h-4 w-4 mr-2" /> Generate Template</Button>
                    </div>

                    <Separator />
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="text-sm font-medium mb-2">Your Template Structure</div>
                        <div className="rounded-lg border p-4 text-sm opacity-80 min-h-[120px]">Drag sections here…</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-2">Live Preview</div>
                        <div className="rounded-lg border p-4 text-sm opacity-80 min-h-[120px]">Your template preview will appear here…</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" asChild className="rounded-full">
                        <Link to="#send">Save as My Default</Link>
                      </Button>
                      <Button asChild className="rounded-full">
                        <Link to="#schedule">Next: Connect EHR</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5" /> Connect EHR
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Epic",
                        "Cerner",
                        "AthenaHealth",
                        "eClinicalWorks",
                        "NextGen",
                        "Allscripts",
                      ].map((ehr) => (
                        <button key={ehr} className="rounded-lg border px-3 py-2 text-left hover:bg-muted">
                          <div className="text-sm font-medium">{ehr}</div>
                          <div className="text-xs opacity-70">Major EHR</div>
                        </button>
                      ))}
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {["SMART on FHIR/OAuth", "API Key"].map((m) => (
                        <button key={m} className="rounded-lg border px-3 py-2 text-left hover:bg-muted">
                          <div className="text-sm font-medium">{m}</div>
                          <div className="text-xs opacity-70">Connection Method</div>
                        </button>
                      ))}
                    </div>
                    <ul className="text-sm space-y-2">
                      {[
                        "BAA Covered",
                        "End-to-End Encryption",
                        "HIPAA Compliant",
                      ].map((f) => (
                        <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> {f}</li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Button variant="outline" className="rounded-full">Skip for now</Button>
                      <Button className="rounded-full">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Schedule */}
            <section id="schedule" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <CalendarDays className="h-5 w-5" aria-hidden /> Unified Schedule
              </h2>
              <p className="mt-2 opacity-80">Schedule imported from multiple EHR systems and practice management platforms.</p>

              <div className="mt-4 rounded-lg border overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b">
                  <div className="text-sm">Epic: Synced 2 min ago · Cerner: Synced 5 min ago · AthenaHealth: Syncing…</div>
                  <Button variant="outline" className="rounded-full">Sync Now</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        {["Patient", "MRN", "Age/Sex", "Visit Type", "Language", "Flags", "Source", "Actions"].map((h) => (
                          <th key={h} className="text-left px-4 py-3 font-medium">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "John Doe", mrn: "12345", age: "45/M", visit: "Follow-up", lang: "English", flags: "", src: "Epic" },
                        { name: "Jane Smith", mrn: "67890", age: "32/F", visit: "New Patient", lang: "Spanish", flags: "Interpreter", src: "Cerner" },
                        { name: "Peter Jones", mrn: "54321", age: "68/M", visit: "Annual Physical", lang: "English", flags: "Refill", src: "Athena" },
                      ].map((r) => (
                        <tr key={r.mrn} className="border-b last:border-0">
                          <td className="px-4 py-3">{r.name}</td>
                          <td className="px-4 py-3">{r.mrn}</td>
                          <td className="px-4 py-3">{r.age}</td>
                          <td className="px-4 py-3">{r.visit}</td>
                          <td className="px-4 py-3">{r.lang}</td>
                          <td className="px-4 py-3">{r.flags}</td>
                          <td className="px-4 py-3">{r.src}</td>
                          <td className="px-4 py-3"><Button size="sm" className="rounded-full">Open</Button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Capture */}
            <section id="capture" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <Mic className="h-5 w-5" aria-hidden /> Audio Capture
              </h2>
              <p className="mt-2 opacity-80">Record the visit and watch notes generate in real time.</p>

              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Capture Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Button className="rounded-full"><Mic className="h-4 w-4 mr-2" /> Start Recording</Button>
                      <div className="text-sm opacity-70">00:00</div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="rounded-full">Pause</Button>
                      <Button variant="outline" className="rounded-full">Discard</Button>
                      <Button className="rounded-full">Finalize Visit</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI-Generated Note</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border p-4 min-h-[160px] text-sm opacity-80">Live transcription and drafting will appear here…</div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Patient Context</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border p-4 min-h-[120px] text-sm opacity-80">Loading patient data…</div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Coding */}
            <section id="coding" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <ClipboardList className="h-5 w-5" aria-hidden /> Coding & Compliance Review
              </h2>
              <p className="mt-2 opacity-80">Resolve documentation issues and review suggested codes.</p>

              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Documentation Review</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    {[
                      { label: "Chief Complaint documented", ok: true },
                      { label: "History of Present Illness complete", ok: true },
                      { label: "Assessment and Plan complete", ok: true },
                      { label: "Review of Systems needs attention", ok: false },
                      { label: "Physical examination incomplete", ok: false },
                    ].map((i) => (
                      <div key={i.label} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`h-4 w-4 ${i.ok ? "" : "opacity-40"}`} />
                          <span>{i.label}</span>
                        </div>
                        {!i.ok && (
                          <Button size="sm" variant="outline" className="rounded-full">Fix</Button>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Suggested Codes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <div className="font-medium mb-2">Primary Diagnosis (ICD-10)</div>
                      <div className="rounded-lg border p-3">E11.9 • Type 2 Diabetes Mellitus (95% confidence)</div>
                      <div className="rounded-lg border p-3 mt-2">I10 • Essential Hypertension (92% confidence)</div>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Procedures (CPT)</div>
                      <div className="rounded-lg border p-3">99213 • Office visit, established patient, low complexity (88% confidence)</div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="rounded-full">Back to Edit</Button>
                      <Button className="rounded-full" asChild>
                        <Link to="#send">Continue to EHR</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Send to EHR */}
            <section id="send" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <Send className="h-5 w-5" aria-hidden /> Send to EHR (Write-back Preview)
              </h2>
              <p className="mt-2 opacity-80">Preview the clinical note and structured fields before sending to the EHR.</p>

              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Clinical Note Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border p-4 min-h-[160px] text-sm opacity-80">
                      Chief Complaint: Follow-up for diabetes and hypertension…
                      <br />
                      HPI: 45-year-old male returns for routine follow-up…
                      <br />
                      A/P: Continue current medications. RTC in 3 months.
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Structured Fields</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    {[
                      ["Chief Complaint", "Follow-up for diabetes"],
                      ["Primary Diagnosis", "Type 2 Diabetes (E11.9)"],
                      ["Secondary Diagnosis", "Essential Hypertension (I10)"],
                      ["Encounter Type", "Office Visit (99213)"],
                    ].map(([k, v]) => (
                      <div key={k} className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-lg border p-3">
                        <div className="font-medium">{k}</div>
                        <div className="opacity-80">{v}</div>
                      </div>
                    ))}
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" className="rounded-full">Back to Coding</Button>
                      <Button className="rounded-full">Send to EHR</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Automations */}
            <section id="automations" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <Wand2 className="h-5 w-5" aria-hidden /> Patient-Facing Automations
              </h2>
              <p className="mt-2 opacity-80">Automate follow-ups, reminders, and questionnaires to reduce administrative burden.</p>

              <div className="mt-4 grid gap-6 md:grid-cols-2">
                {[
                  { t: "Follow-up Appointment Scheduling", d: "Suggests and books follow-ups based on care plans" },
                  { t: "Lab Results Notifications", d: "Notifies patients when results are ready with interpretation" },
                  { t: "Medication Reminders", d: "Personalized reminders to improve adherence" },
                  { t: "Pre-visit Questionnaires", d: "Condition-specific questionnaires before appointments" },
                ].map((i) => (
                  <Card key={i.t}>
                    <CardHeader>
                      <CardTitle className="text-base">{i.t}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between gap-4">
                      <p className="text-sm opacity-80">{i.d}</p>
                      <Button variant="outline" className="rounded-full">Configure</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* AI Agent */}
            <section id="agent" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <Bot className="h-5 w-5" aria-hidden /> AI Call & Chat Agent
              </h2>
              <p className="mt-2 opacity-80">Automate patient communication with intelligent escalation to on-call providers.</p>

              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    {[
                      ["Schedule Follow-up Calls", "Reduces no-shows by 40%"],
                      ["Inbound Call Management", "Automates 80% of routine calls"],
                      ["Patient Outreach", "Improves satisfaction by 35%"],
                      ["24/7 Patient Support", "Increases preventive care compliance by 50%"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-4">
                        <div className="font-medium">{k}</div>
                        <div className="opacity-80">{v}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Configuration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="rounded-lg border p-3">
                        <div className="font-medium mb-1">Business Hours</div>
                        <div className="opacity-80">9:00 AM — 5:00 PM</div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="font-medium mb-1">Primary Language</div>
                        <div className="opacity-80">English • Spanish • Multilingual</div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="font-medium mb-1">Escalation Phone</div>
                      <div className="opacity-80">(555) 123-4567</div>
                    </div>
                    <div className="flex gap-3 pt-1">
                      <Button variant="outline" className="rounded-full">Skip AI Agent</Button>
                      <Button className="rounded-full">Activate AI Agent</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Dashboard */}
            <section id="dashboard" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <BarChart3 className="h-5 w-5" aria-hidden /> Post-Visit Operations Dashboard
              </h2>
              <p className="mt-2 opacity-80">Monitor follow-ups, waitlist, agent performance, and patient messages.</p>

              <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Follow-up Queue", "12 Overdue"],
                  ["Waitlist", "3 Offers Sent"],
                  ["AI Agent Calls", "47 Today"],
                  ["Patient Messages", "5 New"],
                ].map(([k, v]) => (
                  <Card key={k}>
                    <CardHeader>
                      <CardTitle className="text-base">{k}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm opacity-80">{v}</CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-full">
                  <Link to="/welcome">Try ScribeAI Free</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/why-s10ai">Learn how it works</Link>
                </Button>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default ProductWalkthrough;
