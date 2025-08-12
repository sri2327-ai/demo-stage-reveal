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
  Server,
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
import "./scribeai.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { specialtyTemplates } from "@/data/specialtyTemplates";

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

const iconById: Record<string, React.ComponentType<any>> = {
  setup: Settings,
  schedule: CalendarDays,
  capture: Mic,
  coding: ClipboardList,
  send: Send,
  automations: Wand2,
  agent: Bot,
  dashboard: BarChart3,
};

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

  const [setupStep, setSetupStep] = useState<"landing" | "note" | "ehr">("landing");

  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  // AI Agent toggles (UI only)
  const [agent, setAgent] = useState({ followups: true, inbound: true, outreach: true, support: false });

  // Template headers and UX state for Note Style
  const defaultHeaders = [
    "Chief Complaint",
    "History of Present Illness",
    "Review of Systems",
    "Past Medical History",
    "Medications",
    "Allergies",
    "Physical Exam",
    "Assessment",
    "Plan",
  ];

  const headersBySpecialty: Record<string, string[]> = {
    cardiology: [
      "Chief Complaint",
      "HPI",
      "Cardiac Risk Factors",
      "Medications",
      "Exam",
      "ECG",
      "Echocardiogram",
      "Assessment",
      "Plan",
    ],
    dermatology: [
      "Chief Complaint",
      "HPI",
      "Lesion Description",
      "Location & Distribution",
      "Exam",
      "Assessment",
      "Plan",
    ],
    "behavioral-health": [
      "Chief Complaint",
      "Subjective",
      "Objective",
      "Assessment",
      "Plan",
      "Safety/Risk",
    ],
  };

  const [previousNote, setPreviousNote] = useState("");
  const [selectedSpecialtySlug, setSelectedSpecialtySlug] = useState<string | null>(null);
  const [liveHeaders, setLiveHeaders] = useState<string[]>(defaultHeaders);
  const [scratchSections, setScratchSections] = useState<string[]>(["Chief Complaint", "HPI", "Exam", "Assessment", "Plan"]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  // Single-panel mode: highlight active via state
  // (scrollspy disabled)

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
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      <div className="scribeai-layout">
        <aside className="left-nav">
          <div className="nav-brand">
            <img src="/lovable-uploads/ce200032-a0a3-4dd3-80e9-8c560c7c1e14.png" alt="S10.AI logo" className="nav-logo" />
          </div>
          <ul className="nav-list">
            {sections.map((s) => {
              const Icon = iconById[s.id];
              return (
                <li key={s.id} className="nav-item">
                  <button
                    className={`nav-button ${active === s.id ? "active" : ""}`}
                    onClick={() => onNavClick(s.id)}
                    aria-current={active === s.id ? "step" : undefined}
                    data-screen={s.id}
                  >
                    {Icon ? <Icon className="nav-icon" aria-hidden /> : null}
                    <span className="nav-text">{s.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="main-content">
          <div className="top-nav">
            <div>
              <h1 className="text-base md:text-lg font-semibold">AI Medical Scribe</h1>
              <p className="text-xs opacity-80">ScribeAI • End-to-end clinical documentation workflow</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full px-3 py-1 border" aria-label="Clinician">
                <div className="h-6 w-6 rounded-full grid place-items-center text-xs font-medium border" aria-hidden>
                  SM
                </div>
                <span className="text-sm hidden md:inline">Dr. Sarah Mitchell</span>
              </div>
              <Button asChild className="rounded-full">
                <Link to="/welcome">Get started</Link>
              </Button>
            </div>
          </div>

          <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-16 pt-6 md:pt-10">
            <article className="space-y-14">
            {/* Setup */}
            <section id="setup" className={`screen ${active === "setup" ? "" : "hidden"} scroll-mt-24`}>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                  <Settings className="h-5 w-5" aria-hidden /> Get set up in 2 minutes
                </h2>
                <p className="mt-2 opacity-80">Choose your note format and connect securely to your EHR.</p>

                {/* Stepper */}
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <div className={`flex items-center gap-2 ${setupStep !== 'ehr' ? 'text-primary' : ''}`}>
                    <div className="h-7 w-7 rounded-full grid place-items-center border font-medium">1</div>
                    <span>Set Note Style</span>
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <div className={`flex items-center gap-2 ${setupStep === 'ehr' ? 'text-primary' : ''}`}>
                    <div className="h-7 w-7 rounded-full grid place-items-center border font-medium">2</div>
                    <span>Connect EHR</span>
                  </div>
                </div>
              </div>

              {/* Landing choices */}
              {setupStep === 'landing' && (
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <button onClick={() => setSetupStep('note')} className="rounded-xl border p-6 text-left hover:bg-muted transition">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg grid place-items-center border"><FileText className="h-5 w-5" /></div>
                      <div>
                        <div className="text-lg font-semibold">Set your note style</div>
                        <div className="text-sm opacity-80">Import, paste, or build a template for your clinical notes.</div>
                      </div>
                    </div>
                  </button>

                  <button onClick={() => setSetupStep('ehr')} className="rounded-xl border p-6 text-left hover:bg-muted transition">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg grid place-items-center border"><Server className="h-5 w-5" /></div>
                      <div>
                        <div className="text-lg font-semibold">Connect to your EHR(s)</div>
                        <div className="text-sm opacity-80">Securely link to Epic, Cerner, and more for a seamless workflow.</div>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              {/* Note style flow */}
              {setupStep === 'note' && (
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" /> Set Your Note Style
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <Tabs defaultValue="previous" className="w-full">
                        <TabsList className="flex gap-2 sm:gap-2 flex-wrap md:flex-nowrap overflow-x-auto bg-muted p-1 rounded-md">
                          <TabsTrigger value="previous" className="rounded-full px-3 py-1.5 text-sm">Previous note</TabsTrigger>
                          <TabsTrigger value="library" className="rounded-full px-3 py-1.5 text-sm">Template library</TabsTrigger>
                          <TabsTrigger value="import" className="rounded-full px-3 py-1.5 text-sm">Import template</TabsTrigger>
                          <TabsTrigger value="paste" className="rounded-full px-3 py-1.5 text-sm">Paste template</TabsTrigger>
                          <TabsTrigger value="scratch" className="rounded-full px-3 py-1.5 text-sm">Build from scratch</TabsTrigger>
                          <TabsTrigger value="prompt" className="rounded-full px-3 py-1.5 text-sm">Build by prompt</TabsTrigger>
                        </TabsList>

                        <TabsContent value="previous" className="space-y-3">
                          <div className="text-sm font-medium">Paste Previous Note</div>
                          <Textarea
                            value={previousNote}
                            onChange={(e) => setPreviousNote(e.target.value)}
                            placeholder="Paste your previous note here…"
                            className="min-h-[220px]"
                          />
                          <Button className="rounded-full" onClick={() => setLiveHeaders(defaultHeaders)}>
                            <Wand2 className="h-4 w-4 mr-2" /> Analyze & Extract Template
                          </Button>
                        </TabsContent>

                        <TabsContent value="library" className="space-y-3">
                          <div className="text-sm font-medium">Select Specialty Template</div>
                          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {specialtyTemplates.map((spec) => (
                              <button
                                key={spec.slug}
                                onClick={() => {
                                  setSelectedSpecialtySlug(spec.slug);
                                  setLiveHeaders(spec.headers || headersBySpecialty[spec.slug] || defaultHeaders);
                                }}
                                className={`rounded-xl border px-4 py-5 text-left hover:bg-muted transition ${selectedSpecialtySlug === spec.slug ? 'ring-2 ring-primary/50' : ''}`}
                                aria-pressed={selectedSpecialtySlug === spec.slug}
                              >
                                <div className="font-semibold">{spec.name}</div>
                                <div className="text-xs opacity-70">Preset</div>
                              </button>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="import" className="space-y-3">
                          <div className="text-sm font-medium">Import Template File</div>
                          <button className="aspect-video grid place-items-center rounded-lg border text-sm opacity-80">
                            <Upload className="h-5 w-5 mr-2" /> Drop file or click to browse
                          </button>
                        </TabsContent>

                        <TabsContent value="paste" className="space-y-2">
                          <div className="text-sm font-medium">Paste Template Content</div>
                          <div className="rounded-lg border p-3 text-sm opacity-80 min-h-[160px]">Paste your template content here…</div>
                        </TabsContent>

                        <TabsContent value="scratch" className="grid gap-3">
                          <div className="text-sm font-medium">Build Template from Scratch</div>
                          <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-lg border p-3">
                              <div className="text-xs font-medium mb-2">Section Palette</div>
                              <div className="flex flex-wrap gap-2">
                                {defaultHeaders.map((h) => (
                                  <button key={h} type="button" onClick={() => setScratchSections((s) => [...s, h])} className="px-2 py-1 rounded-full border text-xs hover:bg-muted">
                                    + {h}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="md:col-span-2 rounded-lg border p-3 min-h-[220px]">
                              {scratchSections.map((h, i) => (
                                <div
                                  key={`${h}-${i}`}
                                  draggable
                                  onDragStart={() => setDragIndex(i)}
                                  onDragOver={(e) => e.preventDefault()}
                                  onDrop={() => {
                                    if (dragIndex === null || dragIndex === i) return;
                                    setScratchSections((arr) => {
                                      const copy = [...arr];
                                      const [moved] = copy.splice(dragIndex, 1);
                                      copy.splice(i, 0, moved);
                                      return copy;
                                    });
                                    setDragIndex(null);
                                  }}
                                  className="rounded-md border p-2 bg-card my-2 cursor-move"
                                >
                                  <div className="flex justify-between items-center">
                                    <span className="font-medium">{h}</span>
                                    <button type="button" className="text-xs underline" onClick={() => setScratchSections((arr) => arr.filter((_, idx) => idx !== i))}>Remove</button>
                                  </div>
                                </div>
                              ))}
                              <div className="pt-2">
                                <Button variant="outline" className="rounded-full" onClick={() => {
                                  const name = window.prompt('New section name');
                                  if (name) setScratchSections((s) => [...s, name]);
                                }}>Add section</Button>
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="prompt" className="space-y-2">
                          <div className="text-sm font-medium">Build Template by AI Prompt</div>
                          <div className="rounded-lg border p-3 text-sm opacity-80">Describe your ideal note template…</div>
                          <Button className="rounded-full"><Wand2 className="h-4 w-4 mr-2" /> Generate Template</Button>
                        </TabsContent>
                      </Tabs>

                      <Separator />
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="rounded-full" onClick={() => setSetupStep('landing')}>Back</Button>
                        <Button variant="outline" className="rounded-full">Save as My Default</Button>
                        <Button onClick={() => setSetupStep('ehr')} className="rounded-full">Next: Connect EHR</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="lg:sticky lg:top-24 h-fit">
                    <CardHeader>
                      <CardTitle>Live Preview</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-3">
                      {liveHeaders.map((s) => (
                        <div key={s}>
                          <div className="font-medium">{s}</div>
                          <div className="opacity-70">[Content will be generated here]</div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* EHR connection flow */}
              {setupStep === 'ehr' && (
                <div className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5" /> Connect to Your EHR
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-6">
                        {["Epic", "Cerner", "Athena", "eCW", "NextGen", "Allscripts"].map((ehr) => (
                          <button
                            key={ehr}
                            onClick={() => setSelectedEhr(ehr)}
                            className={`rounded-lg border px-3 py-4 text-center hover:bg-muted transition ${selectedEhr === ehr ? 'ring-2 ring-primary/50' : ''}`}
                          >
                            <div className="text-base font-semibold">{ehr}</div>
                            <div className="text-xs opacity-70">{ehr === 'Cerner' ? 'Cerner Oracle Health' : ehr}</div>
                          </button>
                        ))}
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Connection Method</div>
                        <div className="rounded-lg border p-4 flex items-center gap-6">
                          <label className="flex items-center gap-2 text-sm">
                            <input type="radio" name="conn" defaultChecked /> SMART on FHIR/OAuth
                          </label>
                          <label className="flex items-center gap-2 text-sm">
                            <input type="radio" name="conn" /> API Key
                          </label>
                        </div>
                      </div>

                      <ul className="text-sm flex flex-wrap gap-6">
                        {["BAA Covered", "End-to-End Encryption", "HIPAA Compliant"].map((f) => (
                          <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> {f}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="rounded-full" onClick={() => setSetupStep('landing')}>Back</Button>
                        <Button variant="outline" className="rounded-full">Skip for now</Button>
                        <Button onClick={handleConnect} disabled={!selectedEhr || connecting} className="rounded-full">
                          {connecting ? 'Connecting…' : selectedEhr ? `Connect ${selectedEhr}` : 'Connect'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </section>

            {/* Schedule */}
            <section id="schedule" className={`screen ${active === "schedule" ? "" : "hidden"} scroll-mt-24`}>
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
            <section id="capture" className={`screen ${active === "capture" ? "" : "hidden"} scroll-mt-24`}>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <Mic className="h-5 w-5" aria-hidden /> Audio Capture
              </h2>
              <p className="mt-2 opacity-80">Record the visit and watch notes generate in real time.</p>

              <div className="mt-4 grid gap-6 lg:grid-cols-12">
                {/* Left: Controls */}
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Audio Capture</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div>
                      <Button onClick={toggleRecording} className="rounded-full" variant={isRecording ? "destructive" : "default"}>
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
                      <div className="mt-3 flex items-center gap-2 text-sm opacity-80">
                        <span className={`h-2.5 w-2.5 rounded-full ${isRecording ? 'bg-destructive' : 'bg-muted-foreground/50'}`} />
                        <span>{timeStr}</span>
                      </div>
                    </div>

                    {/* Simple waveform */}
                    <div className="flex items-end gap-1 h-16">
                      {[8,14,20,12,18,10,16,22,12,15].map((h, i) => (
                        <div key={i} className="w-1.5 rounded bg-primary/70" style={{ height: `${h}px` }} />
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="rounded-full">Pause Session</Button>
                      <Button variant="outline" className="rounded-full">Discard</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Mid: AI Note */}
                <Card className="lg:col-span-6">
                  <CardHeader>
                    <CardTitle>AI-Generated Note</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border p-4 min-h-[360px] text-sm whitespace-pre-wrap">
                      {transcript || "Patient presents today for follow-up of diabetes and hypertension.\n\nCHIEF COMPLAINT: [content will be generated]"}
                    </div>
                  </CardContent>
                </Card>

                {/* Right: Patient Context */}
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Patient Context</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border p-4 min-h-[360px] text-sm whitespace-pre-wrap opacity-90">
                      {selectedPatient ? patientContext || "Loading patient data…" : "Open a patient from Schedule to load context."}
                    </div>
                  </CardContent>
                </Card>

                {/* Footer actions */}
                <div className="lg:col-span-12 flex flex-wrap gap-3">
                  <Button variant="outline" className="rounded-full">Discard</Button>
                  <Button variant="outline" className="rounded-full">Pause Session</Button>
                  <Button className="rounded-full" onClick={() => onNavClick('coding')}>Finalize Visit</Button>
                </div>
              </div>
            </section>

            {/* Coding */}
            <section id="coding" className={`screen ${active === "coding" ? "" : "hidden"} scroll-mt-24`}>
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
            <section id="send" className={`screen ${active === "send" ? "" : "hidden"} scroll-mt-24`}>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <Send className="h-5 w-5" aria-hidden /> Send to EHR (Write-back Preview)
              </h2>
              <p className="mt-2 opacity-80">Preview the clinical note and structured fields before sending to the EHR.</p>

              <div className="mt-4">
                {isSending && (
                  <div className="fixed inset-0 z-40 grid place-items-center bg-background/60 backdrop-blur-sm">
                    <div className="rounded-lg border bg-card p-6 shadow-lg">
                      <div className="text-sm font-medium">Sending to EHR…</div>
                      <div className="text-xs opacity-70 mt-1">Writing note and structured fields</div>
                    </div>
                  </div>
                )}

                <Tabs defaultValue="note" className="w-full">
                  <TabsList className="flex gap-2 overflow-x-auto whitespace-nowrap bg-muted p-1 rounded-md">
                    <TabsTrigger value="note" className="rounded-full px-3 py-1.5 text-sm">Note Preview</TabsTrigger>
                    <TabsTrigger value="orders" className="rounded-full px-3 py-1.5 text-sm">Orders</TabsTrigger>
                    <TabsTrigger value="referrals" className="rounded-full px-3 py-1.5 text-sm">Referrals</TabsTrigger>
                    <TabsTrigger value="rx" className="rounded-full px-3 py-1.5 text-sm">Prescriptions</TabsTrigger>
                    <TabsTrigger value="followup" className="rounded-full px-3 py-1.5 text-sm">Follow-up</TabsTrigger>
                    <TabsTrigger value="mapping" className="rounded-full px-3 py-1.5 text-sm">Field Mapping</TabsTrigger>
                  </TabsList>

                  <TabsContent value="note" className="mt-4">
                    <div className="grid gap-6 lg:grid-cols-2">
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
                            <Button className="rounded-full" onClick={() => setSendDialogOpen(true)} disabled={isSending}>Send to EHR</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="orders" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Orders</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm">
                        {[
                          "HbA1c",
                          "CMP",
                          "Lipid Panel",
                          "Microalbumin/Creatinine Ratio",
                        ].map((o) => (
                          <label key={o} className="flex items-center gap-2">
                            <Checkbox defaultChecked />
                            <span>{o}</span>
                          </label>
                        ))}
                        <div className="flex gap-3 pt-2">
                          <Button variant="outline" className="rounded-full" onClick={() => onNavClick("coding")}>Back</Button>
                          <Button className="rounded-full" onClick={() => setSendDialogOpen(true)} disabled={isSending}>Send to EHR</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="referrals" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Referrals</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <label className="flex items-center gap-2">
                          <Checkbox />
                          <span>Endocrinology</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <Checkbox />
                          <span>Diabetes Education</span>
                        </label>
                        <div className="flex gap-3 pt-2">
                          <Button variant="outline" className="rounded-full" onClick={() => onNavClick("coding")}>Back</Button>
                          <Button className="rounded-full" onClick={() => setSendDialogOpen(true)} disabled={isSending}>Send to EHR</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="rx" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Prescriptions</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="rounded-lg border p-3">Metformin 1000mg BID — 90 days</div>
                        <div className="rounded-lg border p-3">Lisinopril 10mg QD — 90 days</div>
                        <div className="flex gap-3 pt-2">
                          <Button variant="outline" className="rounded-full" onClick={() => onNavClick("coding")}>Back</Button>
                          <Button className="rounded-full" onClick={() => setSendDialogOpen(true)} disabled={isSending}>Send to EHR</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="followup" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Follow-up</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="rounded-lg border p-3">Return in 3 months for diabetes follow-up</div>
                        <div className="rounded-lg border p-3">Nurse call in 2 weeks to check SMBG</div>
                        <div className="flex gap-3 pt-2">
                          <Button variant="outline" className="rounded-full" onClick={() => onNavClick("coding")}>Back</Button>
                          <Button className="rounded-full" onClick={() => setSendDialogOpen(true)} disabled={isSending}>Send to EHR</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="mapping" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Field Mapping</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        {[
                          ["Chief Complaint", "note.sections.cc"],
                          ["HPI", "note.sections.hpi"],
                          ["A/P", "note.sections.ap"],
                          ["Primary Dx", "icd10.primary"],
                        ].map(([k, v]) => (
                          <div key={k as string} className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-lg border p-3">
                            <div className="font-medium">{k}</div>
                            <div className="opacity-80">{v}</div>
                          </div>
                        ))}
                        <div className="flex gap-3 pt-2">
                          <Button variant="outline" className="rounded-full" onClick={() => onNavClick("coding")}>Back</Button>
                          <Button className="rounded-full" onClick={() => setSendDialogOpen(true)} disabled={isSending}>Send to EHR</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <AlertDialog open={sendDialogOpen} onOpenChange={setSendDialogOpen}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Send to EHR?</AlertDialogTitle>
                      <AlertDialogDescription>
                        We will write back the note and selected structured fields to your connected EHR.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="rounded-full">Cancel</AlertDialogCancel>
                      <AlertDialogAction className="rounded-full" onClick={() => {
                        setSendDialogOpen(false)
                        setIsSending(true)
                        setTimeout(() => {
                          setIsSending(false)
                          toast({ title: "Sent to EHR", description: "Note and orders successfully written back." })
                        }, 1400)
                      }}>Confirm Send</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </section>

            {/* Automations */}
            <section id="automations" className={`screen ${active === "automations" ? "" : "hidden"} scroll-mt-24`}>
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
            <section id="agent" className={`screen ${active === "agent" ? "" : "hidden"} scroll-mt-24`}>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                <Bot className="h-5 w-5" aria-hidden /> AI Call & Chat Agent
              </h2>
              <p className="mt-2 opacity-80">Automate patient communication with intelligent escalation to on-call providers.</p>

              <div className="mt-4 grid gap-6 lg:grid-cols-3">
                {/* Left: Features */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Feature 1 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Schedule Follow-up Calls</span>
                        <Switch checked={agent.followups} onCheckedChange={(v) => setAgent((p) => ({ ...p, followups: v }))} />
                      </CardTitle>
                      <p className="text-sm opacity-80">AI automatically schedules and conducts follow-up calls for reminders and care coordination.</p>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md bg-primary/10 text-sm px-3 py-2">
                        Reduces no-shows by 40%
                      </div>
                    </CardContent>
                  </Card>

                  {/* Feature 2 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Inbound Call Management</span>
                        <Switch checked={agent.inbound} onCheckedChange={(v) => setAgent((p) => ({ ...p, inbound: v }))} />
                      </CardTitle>
                      <p className="text-sm opacity-80">Handle routine patient inquiries, scheduling, and basic medical questions 24/7.</p>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md bg-primary/10 text-sm px-3 py-2">
                        Automates 80% of routine calls
                      </div>
                    </CardContent>
                  </Card>

                  {/* Feature 3 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Patient Outreach</span>
                        <Switch checked={agent.outreach} onCheckedChange={(v) => setAgent((p) => ({ ...p, outreach: v }))} />
                      </CardTitle>
                      <p className="text-sm opacity-80">Proactive reminders for preventive care, medication adherence, and wellness check-ins.</p>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md bg-primary/10 text-sm px-3 py-2">
                        Improves patient satisfaction by 35%
                      </div>
                    </CardContent>
                  </Card>

                  {/* Feature 4 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>24/7 Patient Support</span>
                        <Switch checked={agent.support} onCheckedChange={(v) => setAgent((p) => ({ ...p, support: v }))} />
                      </CardTitle>
                      <p className="text-sm opacity-80">Round-the-clock availability with intelligent escalation to on-call providers.</p>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md bg-primary/10 text-sm px-3 py-2">
                        Increases preventive care compliance by 50%
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right: Configuration */}
                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle>Configuration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <div className="font-medium mb-2">Business Hours</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label htmlFor="bh-start">Start</Label>
                          <Input id="bh-start" type="time" defaultValue="08:00" />
                        </div>
                        <div>
                          <Label htmlFor="bh-end">End</Label>
                          <Input id="bh-end" type="time" defaultValue="17:00" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label className="mb-1 block">Primary Language</Label>
                      <Select defaultValue="english">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="multilingual">Multilingual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="escalation" className="mb-1 block">Escalation Phone</Label>
                      <Input id="escalation" placeholder="On-call provider number" />
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
            <section id="dashboard" className={`screen ${active === "dashboard" ? "" : "hidden"} scroll-mt-24`}>
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
        </div>
      </div>
    </>
  );
};

export default ProductWalkthrough;
