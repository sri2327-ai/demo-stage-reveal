import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Settings,
  CalendarDays,
  Mic,
  ClipboardList,
  Send,
  Wand2,
  Bot,
  BarChart3,
  ShieldCheck,
  Upload,
  FileText,
  Play,
  Pause,
  CircleStop,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { ScribeSidebar } from "@/components/scribe/ScribeSidebar";

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

type Appointment = {
  name: string;
  mrn: string;
  age: string;
  visit: string;
  lang: string;
  flags: string;
  src: string;
};

const defaultAppointments: Appointment[] = [
  { name: "John Doe", mrn: "12345", age: "45/M", visit: "Follow-up", lang: "English", flags: "", src: "Epic" },
  { name: "Jane Smith", mrn: "67890", age: "32/F", visit: "New Patient", lang: "Spanish", flags: "Interpreter", src: "Cerner" },
  { name: "Peter Jones", mrn: "54321", age: "68/M", visit: "Annual Physical", lang: "English", flags: "Refill", src: "Athena" },
];

const visitData = [
  { day: "Mon", value: 12 },
  { day: "Tue", value: 19 },
  { day: "Wed", value: 15 },
  { day: "Thu", value: 17 },
  { day: "Fri", value: 22 },
  { day: "Sat", value: 8 },
  { day: "Sun", value: 14 },
];

const agentMix = [
  { name: "Automated", value: 75, color: "#16a34a" },
  { name: "Transferred", value: 15, color: "#fb923c" },
  { name: "Voicemail", value: 10, color: "#64748b" },
];

const ProductWalkthrough: React.FC = () => {
  const [active, setActive] = useState<string>(sections[0].id);
  const [selectedEhr, setSelectedEhr] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [appointments] = useState<Appointment[]>(defaultAppointments);
  const [selectedPatient, setSelectedPatient] = useState<Appointment | null>(null);
  const [patientContext, setPatientContext] = useState<string>("");

  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [transcript, setTranscript] = useState("");
  const recordTimerRef = useRef<number | null>(null);
  const transcriptTimerRef = useRef<number | null>(null);

  const [checks, setChecks] = useState(
    [
      { label: "Chief Complaint documented", ok: true },
      { label: "History of Present Illness complete", ok: true },
      { label: "Assessment and Plan complete", ok: true },
      { label: "Review of Systems needs attention", ok: false },
      { label: "Physical examination incomplete", ok: false },
    ] as { label: string; ok: boolean }[]
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Scrollspy for active section highlighting
  useEffect(() => {
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

  // Recording timers
  useEffect(() => {
    if (isRecording) {
      // Clock timer
      recordTimerRef.current = window.setInterval(() => setSeconds((s) => s + 1), 1000);
      // Simulated transcription
      const lines = [
        "Patient presents for follow-up of diabetes and hypertension.",
        "\n\nCHIEF COMPLAINT: Blood sugars trending higher over the last few weeks.",
        "\n\nHPI: Checks sugars twice daily. Morning 140–160, evening 180–200. No hypoglycemia.",
        "\n\nEXAM: BP 138/82, HR 76. Lungs clear. No edema.",
        "\n\nA/P: Increase Metformin to 1000mg BID. RTC in 3 months.",
      ];
      let i = 0;
      transcriptTimerRef.current = window.setInterval(() => {
        setTranscript((t) => (i < lines.length ? t + lines[i++] : t));
        if (i >= lines.length && transcriptTimerRef.current) {
          window.clearInterval(transcriptTimerRef.current);
          transcriptTimerRef.current = null;
        }
      }, 2500);
    }
    return () => {
      if (recordTimerRef.current) window.clearInterval(recordTimerRef.current);
      if (transcriptTimerRef.current) window.clearInterval(transcriptTimerRef.current);
      recordTimerRef.current = null;
      transcriptTimerRef.current = null;
    };
  }, [isRecording]);

  const onNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageTitle = "ScribeAI Product Walkthrough | AI Medical Scribe";
  const description = "ScribeAI walkthrough: setup, schedule, capture, coding, send to EHR, automations, AI agent, dashboard.";

  const timeStr = useMemo(() => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }, [seconds]);

  const handleConnect = () => {
    if (!selectedEhr || connecting) return;
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      onNavClick("schedule");
    }, 1600);
  };

  const handleOpenAppointment = (appt: Appointment) => {
    setSelectedPatient(appt);
    setPatientContext("");
    onNavClick("capture");
    setTimeout(() => {
      setPatientContext(
        `Patient Summary\n${appt.name} (${appt.age})\nMRN: ${appt.mrn}\nVisit Type: ${appt.visit}\n\nActive Problems\n• Type 2 Diabetes\n• Hypertension\n• Hyperlipidemia\n\nCurrent Medications\n• Metformin 500mg BID\n• Lisinopril 10mg daily\n• Atorvastatin 20mg daily\n\nAllergies\n• Penicillin (rash)\n\nRecent Labs\n• HbA1c: 8.2% (3 months ago)\n• Creatinine: 1.1 mg/dL\n• LDL: 95 mg/dL\n\nAlert: HbA1c above target. Consider medication adjustment.`
      );
    }, 600);
  };

  const toggleRecording = () => {
    setIsRecording((r) => !r);
    if (!isRecording) {
      setSeconds(0);
      setTranscript("");
    }
  };

  const markFix = (idx: number) => {
    setChecks((arr) => arr.map((c, i) => (i === idx ? { ...c, ok: true } : c)));
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : "/scribeai"} />
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ScribeAI",
            description,
            brand: { "@type": "Brand", name: "S10AI" },
          })}
        </script>
      </Helmet>

<SidebarProvider>
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-semibold tracking-tight md:text-xl">AI Medical Scribe</h1>
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
      </header>

      <div className="min-h-screen flex w-full">
        <ScribeSidebar active={active} onNavigate={onNavClick} />
        <SidebarInset>
          <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-16 pt-6 md:pt-10">

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
                <Button onClick={() => onNavClick("schedule")} className="rounded-full hidden md:inline-flex">
                  Next: Schedule
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
                      <Button variant="outline" className="rounded-full">Save as My Default</Button>
                      <Button onClick={() => onNavClick("schedule")} className="rounded-full">Next: Connect EHR</Button>
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
                      {["Epic", "Cerner", "AthenaHealth", "eClinicalWorks", "NextGen", "Allscripts"].map((ehr) => (
                        <button
                          key={ehr}
                          onClick={() => setSelectedEhr(ehr)}
                          className={`rounded-lg border px-3 py-2 text-left hover:bg-muted transition ${
                            selectedEhr === ehr ? "ring-2 ring-primary/50" : ""
                          }`}
                        >
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
                      {["BAA Covered", "End-to-End Encryption", "HIPAA Compliant"].map((f) => (
                        <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> {f}</li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Button variant="outline" className="rounded-full">Skip for now</Button>
                      <Button onClick={handleConnect} disabled={!selectedEhr || connecting} className="rounded-full">
                        {connecting ? "Connecting…" : selectedEhr ? `Connect ${selectedEhr}` : "Connect"}
                      </Button>
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
                      {appointments.map((r) => (
                        <tr key={r.mrn} className="border-b last:border-0">
                          <td className="px-4 py-3">{r.name}</td>
                          <td className="px-4 py-3">{r.mrn}</td>
                          <td className="px-4 py-3">{r.age}</td>
                          <td className="px-4 py-3">{r.visit}</td>
                          <td className="px-4 py-3">{r.lang}</td>
                          <td className="px-4 py-3">{r.flags}</td>
                          <td className="px-4 py-3">{r.src}</td>
                          <td className="px-4 py-3"><Button size="sm" onClick={() => handleOpenAppointment(r)} className="rounded-full">Open</Button></td>
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
                      <Button onClick={toggleRecording} className="rounded-full">
                        {isRecording ? (
                          <>
                            <CircleStop className="h-4 w-4 mr-2" /> Stop Recording
                          </>
                        ) : (
                          <>
                            <Mic className="h-4 w-4 mr-2" /> Start Recording
                          </>
                        )}
                      </Button>
                      <div className="text-sm opacity-70">{timeStr}</div>
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
                    <div className="rounded-lg border p-4 min-h-[160px] text-sm whitespace-pre-wrap opacity-90">
                      {transcript || "Live transcription and drafting will appear here…"}
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Patient Context</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border p-4 min-h-[140px] text-sm whitespace-pre-wrap opacity-90">
                      {selectedPatient ? patientContext || "Loading patient data…" : "Open a patient from Schedule to load context."}
                    </div>
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
                    {checks.map((i, idx) => (
                      <div key={i.label} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`h-4 w-4 ${i.ok ? "text-green-600" : "opacity-40"}`} />
                          <span>{i.label}</span>
                        </div>
                        {!i.ok && (
                          <Button size="sm" variant="outline" className="rounded-full" onClick={() => markFix(idx)}>
                            Fix
                          </Button>
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
                      <Button className="rounded-full" onClick={() => onNavClick("send")}>Continue to EHR</Button>
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
                    <div className="rounded-lg border p-4 min-h-[160px] text-sm opacity-90">
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
                      <div key={k as string} className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-lg border p-3">
                        <div className="font-medium">{k}</div>
                        <div className="opacity-80">{v}</div>
                      </div>
                    ))}
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" className="rounded-full" onClick={() => onNavClick("coding")}>Back to Coding</Button>
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
                      <div key={k as string} className="flex items-center justify-between gap-4">
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
                  <Card key={k as string}>
                    <CardHeader>
                      <CardTitle className="text-base">{k}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm opacity-80">{v}</CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card className="h-[300px]">
                  <CardHeader>
                    <CardTitle>Daily Visit Volume</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={visitData} margin={{ left: 4, right: 12 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card className="h-[300px]">
                  <CardHeader>
                    <CardTitle>AI Agent Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie dataKey="value" data={agentMix} cx="50%" cy="50%" outerRadius={80} label>
                          {agentMix.map((e, i) => (
                            <Cell key={`c-${i}`} fill={e.color} />
                          ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
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
        </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
    </>
  );
};

export default ProductWalkthrough;
