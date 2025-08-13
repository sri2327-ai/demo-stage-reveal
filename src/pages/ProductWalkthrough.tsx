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

  // Demo states for interactive functionality
  const [analyzing, setAnalyzing] = useState(false);
  const [importing, setImporting] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

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

  // Initialize live preview with scratch sections
  useEffect(() => {
    setLiveHeaders(scratchSections);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

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

          <main ref={containerRef} className="w-full h-full">
            {/* Setup Section */}
            <section id="setup" className={`screen ${active === "setup" ? "" : "hidden"} h-full overflow-y-auto`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Settings className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Get set up in 2 minutes
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Choose your note format and connect securely to your EHR.</p>

                  <div className="mt-6 relative">
                    <div className="flex items-center justify-between max-w-md">
                      <div className={`flex items-center gap-3 ${setupStep !== 'ehr' ? 'text-primary' : 'text-muted-foreground'}`}>
                        <div className={`h-8 w-8 rounded-full grid place-items-center font-semibold text-sm ${
                          setupStep !== 'ehr' ? 'bg-primary text-primary-foreground' : 'border-2'
                        }`}>1</div>
                        <span className="font-medium">Set Note Style</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-border mx-4" />
                      <div className={`flex items-center gap-3 ${setupStep === 'ehr' ? 'text-primary' : 'text-muted-foreground'}`}>
                        <div className={`h-8 w-8 rounded-full grid place-items-center font-semibold text-sm ${
                          setupStep === 'ehr' ? 'bg-primary text-primary-foreground' : 'border-2'
                        }`}>2</div>
                        <span className="font-medium">Connect EHR</span>
                      </div>
                    </div>
                  </div>
                </div>

                {setupStep === 'landing' && (
                  <div className="grid gap-6 md:gap-8 lg:grid-cols-2 max-w-4xl">
                    <button 
                      onClick={() => setSetupStep('note')} 
                      className="group rounded-2xl border-2 hover:border-primary/50 p-8 text-left transition-all duration-200 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 grid place-items-center transition-colors">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xl font-semibold mb-2">Set your note style</div>
                          <div className="text-muted-foreground">Import, paste, or build a template for your clinical notes.</div>
                        </div>
                      </div>
                    </button>

                    <button 
                      onClick={() => setSetupStep('ehr')} 
                      className="group rounded-2xl border-2 hover:border-primary/50 p-8 text-left transition-all duration-200 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 grid place-items-center transition-colors">
                          <Server className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xl font-semibold mb-2">Connect to your EHR(s)</div>
                          <div className="text-muted-foreground">Securely link to Epic, Cerner, and more for a seamless workflow.</div>
                        </div>
                      </div>
                    </button>
                  </div>
                )}

                {setupStep === 'note' && (
                  <div className="grid gap-8 xl:grid-cols-3 2xl:grid-cols-5">
                    <Card className="xl:col-span-2 2xl:col-span-3">
                      <CardHeader className="pb-6">
                        <CardTitle className="flex items-center gap-3 text-xl">
                          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          Set Your Note Style
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-full">
                        {/* Action buttons - always visible at top */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b mb-6">
                          <Button variant="outline" size="sm" className="rounded-full" onClick={() => setSetupStep('landing')}>
                            ← Back
                          </Button>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="rounded-full">
                              Save as Default
                            </Button>
                            <Button onClick={() => setSetupStep('ehr')} size="sm" className="rounded-full">
                              Next: Connect EHR →
                            </Button>
                          </div>
                        </div>

                        {/* Main content area with controlled height */}
                        <div className="flex-1 min-h-0">
                          <Tabs defaultValue="previous" className="h-full flex flex-col">
                            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full h-auto p-1 mb-6 rounded-xl bg-muted gap-1">
                              <TabsTrigger value="previous" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:bg-background/50">
                                <span className="hidden sm:inline">Previous</span>
                                <span className="sm:hidden">Prev</span>
                              </TabsTrigger>
                              <TabsTrigger value="library" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:bg-background/50">
                                <span className="hidden sm:inline">Library</span>
                                <span className="sm:hidden">Lib</span>
                              </TabsTrigger>
                              <TabsTrigger value="import" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:bg-background/50">
                                Import
                              </TabsTrigger>
                              <TabsTrigger value="paste" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:bg-background/50">
                                Paste
                              </TabsTrigger>
                              <TabsTrigger value="scratch" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:bg-background/50">
                                Build
                              </TabsTrigger>
                              <TabsTrigger value="prompt" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:bg-background/50">
                                <span className="hidden sm:inline">AI Prompt</span>
                                <span className="sm:hidden">AI</span>
                              </TabsTrigger>
                            </TabsList>

                            <div className="flex-1 min-h-0">
                              <TabsContent value="previous" className="h-full m-0">
                                <div className="h-full flex flex-col gap-4">
                                  <div className="text-sm font-semibold">Paste Previous Note</div>
                                  <Textarea
                                    value={previousNote}
                                    onChange={(e) => setPreviousNote(e.target.value)}
                                    placeholder="Paste your previous note here and we'll extract the template structure for you..."
                                    className="flex-1 min-h-[200px] resize-none"
                                  />
                                  <Button 
                                    className="rounded-full w-fit animate-fade-in" 
                                    disabled={analyzing || !previousNote.trim()}
                                    onClick={() => {
                                      if (!previousNote.trim()) {
                                        toast({ title: "Please paste a note first", variant: "destructive" });
                                        return;
                                      }
                                      setAnalyzing(true);
                                      setProgress(0);
                                      const interval = setInterval(() => {
                                        setProgress(p => {
                                          if (p >= 100) {
                                            clearInterval(interval);
                                            setAnalyzing(false);
                                            // Extract realistic headers from the note content
                                            const extractedHeaders = previousNote.trim() ? 
                                              ["Chief Complaint", "History of Present Illness", "Physical Examination", "Assessment and Plan", "Follow-up Instructions"] :
                                              defaultHeaders;
                                            setLiveHeaders(extractedHeaders);
                                            toast({ title: "Template extracted successfully!", description: `${extractedHeaders.length} sections identified from your note.` });
                                            return 100;
                                          }
                                          return p + 20;
                                        });
                                      }, 300);
                                    }}
                                  >
                                    {analyzing ? (
                                      <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                        Analyzing... {progress}%
                                      </>
                                    ) : (
                                      <>
                                        <Wand2 className="h-4 w-4 mr-2" /> Analyze & Extract Template
                                      </>
                                    )}
                                  </Button>
                                </div>
                              </TabsContent>

                              <TabsContent value="library" className="h-full m-0">
                                <div className="h-full flex flex-col gap-4">
                                  <div className="text-sm font-semibold">Select Specialty Template</div>
                                  <div className="flex-1 min-h-0 overflow-y-auto pr-2">
                                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
                                      {specialtyTemplates.map((spec) => (
                                        <button
                                          key={spec.slug}
                                          onClick={() => {
                                            setSelectedSpecialtySlug(spec.slug);
                                            const templateHeaders = headersBySpecialty[spec.slug] || defaultHeaders;
                                            setLiveHeaders(templateHeaders);
                                            toast({ 
                                              title: `${spec.name} template selected`, 
                                              description: "Template structure updated in preview" 
                                            });
                                          }}
                                          className={`group rounded-xl border-2 hover:border-primary/50 p-3 sm:p-4 text-left transition-all duration-200 hover:shadow-md hover:scale-105 animate-fade-in ${
                                            selectedSpecialtySlug === spec.slug ? 'border-primary bg-primary/5 shadow-md scale-105' : 'hover:bg-muted/30'
                                          }`}
                                          aria-pressed={selectedSpecialtySlug === spec.slug}
                                        >
                                          <div className="font-semibold text-xs sm:text-sm mb-1 line-clamp-2">{spec.name}</div>
                                          <div className="text-[10px] sm:text-xs text-muted-foreground">Preset Template</div>
                                          {selectedSpecialtySlug === spec.slug && (
                                            <div className="mt-2 h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                                              <div className="h-1 w-full bg-primary rounded-full animate-scale-in" />
                                            </div>
                                          )}
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="import" className="h-full m-0">
                                <div className="h-full flex flex-col gap-4">
                                  <div className="text-sm font-semibold">Import Template File</div>
                                  <div className="flex-1 flex items-center justify-center">
                                    <button 
                                      onClick={() => {
                                        setImporting(true);
                                        setProgress(0);
                                        const interval = setInterval(() => {
                                          setProgress(p => {
                                            if (p >= 100) {
                                              clearInterval(interval);
                                              setImporting(false);
                                              setLiveHeaders(["Chief Complaint", "History", "Assessment", "Plan"]);
                                              toast({ title: "File imported successfully!", description: "Template structure extracted from uploaded file." });
                                              return 100;
                                            }
                                            return p + 25;
                                          });
                                        }, 400);
                                      }}
                                      disabled={importing}
                                      className="group aspect-video max-w-md flex flex-col items-center justify-center rounded-xl border-2 border-dashed hover:border-primary/50 transition-all duration-200 w-full hover:bg-primary/5 disabled:opacity-50 animate-fade-in"
                                    >
                                      {importing ? (
                                        <>
                                          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mb-3" />
                                          <div className="text-sm font-medium">Importing... {progress}%</div>
                                          <div className="text-xs text-muted-foreground mt-2">Processing file...</div>
                                        </>
                                      ) : (
                                        <>
                                          <Upload className="h-8 sm:h-10 w-8 sm:w-10 text-muted-foreground mb-3 group-hover:text-primary transition-colors" />
                                          <div className="text-xs sm:text-sm font-medium px-2 text-center">Drop file or click to browse</div>
                                          <div className="text-[10px] sm:text-xs text-muted-foreground mt-2 text-center">Supports .docx, .txt, .pdf</div>
                                        </>
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="paste" className="h-full m-0">
                                <div className="h-full flex flex-col gap-4">
                                  <div className="text-sm font-semibold">Paste Template Content</div>
                                  <Textarea 
                                    placeholder="Paste your template content here and we'll extract the structure..." 
                                    className="flex-1 min-h-[200px] resize-none" 
                                  />
                                  <Button 
                                    className="rounded-full w-fit animate-fade-in"
                                    onClick={() => {
                                      setAnalyzing(true);
                                      setTimeout(() => {
                                        setAnalyzing(false);
                                        setLiveHeaders(["Chief Complaint", "HPI", "Physical Exam", "Assessment", "Plan"]);
                                        toast({ title: "Headers extracted!", description: "Template structure identified from pasted content." });
                                      }, 2000);
                                    }}
                                    disabled={analyzing}
                                  >
                                    {analyzing ? (
                                      <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                        Analyzing...
                                      </>
                                    ) : (
                                      <>
                                        <Wand2 className="h-4 w-4 mr-2" /> Analyze & Extract Headers
                                      </>
                                    )}
                                  </Button>
                                </div>
                              </TabsContent>

                              <TabsContent value="scratch" className="h-full m-0">
                                <div className="h-full flex flex-col gap-4">
                                  <div className="text-sm font-semibold">Build Template from Scratch</div>
                                  <div className="flex-1 grid gap-4 lg:grid-cols-5 min-h-0">
                                    <div className="lg:col-span-2 rounded-xl border-2 p-3 sm:p-4 bg-muted/30 animate-fade-in">
                                      <div className="text-xs sm:text-sm font-semibold mb-3 text-center">Section Library</div>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 max-h-40 sm:max-h-60 overflow-y-auto">
                                        {defaultHeaders.map((h) => (
                                          <button 
                                            key={h} 
                                            type="button" 
                                            onClick={() => {
                                              setScratchSections((s) => [...s, h]);
                                              // Update live preview immediately
                                              const newSections = [...scratchSections, h];
                                              setLiveHeaders(newSections);
                                              toast({ title: "Section added", description: `"${h}" added to template` });
                                            }}
                                            className="px-2 sm:px-3 py-2 rounded-lg border hover:border-primary/50 text-[10px] sm:text-xs font-medium transition-all hover:bg-primary/10 hover:scale-105 text-left animate-fade-in"
                                          >
                                            + {h}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="lg:col-span-3 rounded-xl border-2 p-3 sm:p-4 bg-background animate-fade-in">
                                      <div className="text-xs sm:text-sm font-semibold mb-3 text-center">Your Template Structure</div>
                                      <div className="space-y-2 max-h-40 sm:max-h-60 overflow-y-auto">
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
                                                 setLiveHeaders(copy);
                                                 return copy;
                                               });
                                               setDragIndex(null);
                                               toast({ title: "Section reordered", description: "Template structure updated" });
                                            }}
                                            className="group rounded-lg border-2 bg-card p-2 sm:p-3 cursor-move hover:border-primary/50 transition-all hover:shadow-sm hover:scale-105 animate-scale-in"
                                          >
                                            <div className="flex justify-between items-center">
                                              <span className="font-medium text-xs sm:text-sm line-clamp-1">{h}</span>
                                              <button 
                                                type="button" 
                                                className="text-[10px] sm:text-xs text-destructive hover:underline opacity-0 group-hover:opacity-100 transition-all ml-2 flex-shrink-0" 
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  const newSections = scratchSections.filter((_, idx) => idx !== i);
                                                  setScratchSections(newSections);
                                                  setLiveHeaders(newSections);
                                                  toast({ title: "Section removed", description: `"${h}" removed from template` });
                                                }}
                                              >
                                                Remove
                                              </button>
                                            </div>
                                          </div>
                                        ))}
                                        <Button 
                                          variant="outline" 
                                          size="sm"
                                          className="w-full rounded-lg border-dashed hover:bg-primary/5 transition-all hover:scale-105" 
                                           onClick={() => {
                                             const name = window.prompt('New section name');
                                             if (name) {
                                               const newSections = [...scratchSections, name];
                                               setScratchSections(newSections);
                                               setLiveHeaders(newSections);
                                               toast({ title: "Custom section added", description: `"${name}" added to template` });
                                             }
                                           }}
                                        >
                                          + Add Custom Section
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="prompt" className="h-full m-0">
                                <div className="h-full flex flex-col gap-4">
                                  <div className="text-sm font-semibold">Build Template by AI Prompt</div>
                                  <Textarea 
                                    placeholder="Describe your ideal note template (e.g., 'Create a cardiology follow-up template with emphasis on cardiac risk factors and medication review')" 
                                    className="flex-1 min-h-[200px] resize-none"
                                  />
                                  <Button 
                                    className="rounded-full w-fit animate-fade-in"
                                    onClick={() => {
                                      setGenerating(true);
                                      setProgress(0);
                                      const interval = setInterval(() => {
                                        setProgress(p => {
                                          if (p >= 100) {
                                            clearInterval(interval);
                                            setGenerating(false);
                                            setLiveHeaders(["Chief Complaint", "HPI", "Assessment", "Plan", "Follow-up"]);
                                            toast({ title: "AI Template generated!", description: "Custom template created based on your prompt." });
                                            return 100;
                                          }
                                          return p + 10;
                                        });
                                      }, 200);
                                    }}
                                    disabled={generating}
                                  >
                                    {generating ? (
                                      <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                        Generating... {progress}%
                                      </>
                                    ) : (
                                      <>
                                        <Wand2 className="h-4 w-4 mr-2" /> Generate Template
                                      </>
                                    )}
                                  </Button>
                                </div>
                              </TabsContent>
                            </div>
                          </Tabs>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="xl:col-span-1 2xl:col-span-2 h-fit">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg">Live Preview</CardTitle>
                      </CardHeader>
                       <CardContent>
                         <div className="max-h-[400px] sm:max-h-[500px] overflow-y-auto space-y-3 pr-2">
                           {liveHeaders.length === 0 ? (
                             <div className="text-center py-8 text-muted-foreground">
                               <div className="text-sm">No template selected</div>
                               <div className="text-xs mt-1">Choose an option from the tabs above</div>
                             </div>
                           ) : (
                             liveHeaders.map((s, index) => (
                               <div key={`${s}-${index}`} className="rounded-lg border p-3 transition-all hover:shadow-sm animate-fade-in">
                                 <div className="font-semibold text-xs sm:text-sm mb-1 text-primary">{s}</div>
                                 <div className="text-[10px] sm:text-xs text-muted-foreground">
                                   [AI will generate content based on recorded conversation]
                                 </div>
                               </div>
                             ))
                           )}
                         </div>
                       </CardContent>
                    </Card>
                  </div>
                )}

                {setupStep === 'ehr' && (
                  <Card className="max-w-4xl">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <ShieldCheck className="h-4 w-4 text-primary" />
                        </div>
                        Connect to Your EHR
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="text-sm font-semibold mb-4">Select your EHR system</div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                          {[
                            { name: "Epic", logo: "🏥" },
                            { name: "Cerner", logo: "⚕️" },
                            { name: "Athena", logo: "🔬" },
                            { name: "eCW", logo: "💊" },
                            { name: "NextGen", logo: "📋" },
                            { name: "Allscripts", logo: "🩺" }
                          ].map((ehr) => (
                            <button
                              key={ehr.name}
                              onClick={() => setSelectedEhr(ehr.name)}
                              className={`rounded-xl border-2 hover:border-primary/50 p-4 text-center transition-all duration-200 hover:shadow-md ${
                                selectedEhr === ehr.name ? 'border-primary bg-primary/5' : ''
                              }`}
                            >
                              <div className="text-2xl mb-2">{ehr.logo}</div>
                              <div className="font-semibold text-sm">{ehr.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {ehr.name === 'Cerner' ? 'Oracle Health' : 'EHR System'}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold mb-3">Connection Method</div>
                        <div className="rounded-xl border p-4">
                          <label className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                            <input type="radio" name="conn" defaultChecked className="scale-110" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <Bot className="h-4 w-4 text-primary" />
                                <div className="font-medium">AI Agent Integration</div>
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                Secure, intelligent connection that clinicians trust. Our AI agents handle the integration seamlessly while maintaining full HIPAA compliance and data security.
                              </div>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                                  <CheckCircle2 className="h-3 w-3" />
                                  Zero-code setup
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                                  <ShieldCheck className="h-3 w-3" />
                                  Clinician-friendly
                                </span>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-xl">
                        {["BAA Covered", "End-to-End Encryption", "HIPAA Compliant"].map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="rounded-lg" onClick={() => setSetupStep('landing')}>
                          Back
                        </Button>
                        <Button variant="outline" className="rounded-lg">
                          Skip for now
                        </Button>
                        <Button 
                          onClick={handleConnect} 
                          disabled={!selectedEhr || connecting} 
                          className="rounded-lg"
                        >
                          {connecting ? 'Connecting…' : selectedEhr ? `Connect ${selectedEhr}` : 'Select EHR to Connect'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>

            {/* Schedule Section */}
            <section id="schedule" className={`screen ${active === "schedule" ? "" : "hidden"} h-full overflow-y-auto`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CalendarDays className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Unified Schedule
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Schedule imported from multiple EHR systems and practice management platforms.</p>
                </div>

                <Card className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          Epic: Synced 2 min ago
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          Cerner: Synced 5 min ago
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></div>
                          AthenaHealth: Syncing…
                        </span>
                      </div>
                      <Button variant="outline" className="rounded-lg">
                        Sync Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            {["Patient", "MRN", "Age/Sex", "Visit Type", "Language", "Flags", "Source", "Actions"].map((header) => (
                              <th key={header} className="text-left px-6 py-4 font-semibold text-sm">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {appointments.map((appointment) => (
                            <tr key={appointment.mrn} className="border-b hover:bg-muted/30 transition-colors">
                              <td className="px-6 py-4 font-medium">{appointment.name}</td>
                              <td className="px-6 py-4 text-muted-foreground">{appointment.mrn}</td>
                              <td className="px-6 py-4">{appointment.age}</td>
                              <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary">
                                  {appointment.visit}
                                </span>
                              </td>
                              <td className="px-6 py-4">{appointment.lang}</td>
                              <td className="px-6 py-4">
                                {appointment.flags && (
                                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800">
                                    {appointment.flags}
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1">
                                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                  {appointment.src}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <Button 
                                  size="sm" 
                                  onClick={() => handleOpenAppointment(appointment)} 
                                  className="rounded-lg"
                                >
                                  Open
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Capture Section */}
            <section id="capture" className={`screen ${active === "capture" ? "" : "hidden"} h-full overflow-y-auto`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mic className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Audio Capture
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Record the visit and watch notes generate in real time.</p>
                </div>

                <div className="grid gap-8 xl:grid-cols-12">
                  <Card className="xl:col-span-3">
                    <CardHeader>
                      <CardTitle>Audio Capture</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Button onClick={toggleRecording} className="w-full rounded-lg" variant={isRecording ? "destructive" : "default"}>
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
                        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                          <span className={`h-2.5 w-2.5 rounded-full ${isRecording ? 'bg-destructive animate-pulse' : 'bg-muted-foreground/50'}`} />
                          <span className="font-mono">{timeStr}</span>
                        </div>
                      </div>

                      <div className="flex items-end gap-1 h-20 p-4 bg-muted/30 rounded-lg">
                        {[8,14,20,12,18,10,16,22,12,15,19,8,16].map((h, i) => (
                          <div key={i} className="w-2 rounded bg-primary/70 transition-all" style={{ height: `${h}px` }} />
                        ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button variant="outline" className="rounded-lg">Pause Session</Button>
                        <Button variant="outline" className="rounded-lg">Discard</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="xl:col-span-6">
                    <CardHeader>
                      <CardTitle>AI-Generated Note</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-lg border p-6 min-h-[400px] text-sm whitespace-pre-wrap">
                        {transcript || "Patient presents today for follow-up of diabetes and hypertension.\n\nCHIEF COMPLAINT: [content will be generated]"}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="xl:col-span-3">
                    <CardHeader>
                      <CardTitle>Patient Context</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-lg border p-4 min-h-[400px] text-sm whitespace-pre-wrap text-muted-foreground">
                        {selectedPatient ? patientContext || "Loading patient data…" : "Open a patient from Schedule to load context."}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="xl:col-span-12 flex flex-wrap gap-3">
                    <Button variant="outline" className="rounded-lg">Discard</Button>
                    <Button variant="outline" className="rounded-lg">Pause Session</Button>
                    <Button className="rounded-lg" onClick={() => onNavClick('coding')}>Finalize Visit</Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Coding Section */}
            <section id="coding" className={`screen ${active === "coding" ? "" : "hidden"} h-full overflow-y-auto`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ClipboardList className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Coding & Compliance Review
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Resolve documentation issues and review suggested codes.</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Documentation Review</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {checks.map((item, idx) => (
                        <div key={item.label} className="flex items-center justify-between gap-3 p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className={`h-5 w-5 ${item.ok ? "text-green-600" : "text-muted-foreground"}`} />
                            <span className={item.ok ? "" : "text-muted-foreground"}>{item.label}</span>
                          </div>
                          {!item.ok && (
                            <Button size="sm" variant="outline" className="rounded-lg" onClick={() => markFix(idx)}>
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
                    <CardContent className="space-y-6">
                      <div>
                        <div className="font-semibold mb-3">Primary Diagnosis (ICD-10)</div>
                        <div className="space-y-2">
                          <div className="rounded-lg border p-4 bg-green-50/50">
                            <div className="font-medium">E11.9 • Type 2 Diabetes Mellitus</div>
                            <div className="text-sm text-green-600 font-medium">95% confidence</div>
                          </div>
                          <div className="rounded-lg border p-4 bg-green-50/50">
                            <div className="font-medium">I10 • Essential Hypertension</div>
                            <div className="text-sm text-green-600 font-medium">92% confidence</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold mb-3">Procedures (CPT)</div>
                        <div className="rounded-lg border p-4 bg-blue-50/50">
                          <div className="font-medium">99213 • Office visit, established patient</div>
                          <div className="text-sm text-blue-600 font-medium">88% confidence</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="rounded-lg">Back to Edit</Button>
                        <Button className="rounded-lg" onClick={() => onNavClick("send")}>Continue to EHR</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Send to EHR Section */}
            <section id="send" className={`screen ${active === "send" ? "" : "hidden"} h-full overflow-y-auto`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Send to EHR
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Preview the clinical note and structured fields before sending to the EHR.</p>
                </div>

                {isSending ? (
                  <Card>
                    <CardContent className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                        <p className="mt-4 font-medium">Sending to Epic...</p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-8 xl:grid-cols-3">
                    <Card className="xl:col-span-2">
                      <CardHeader>
                        <CardTitle>Final Note Preview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-lg border p-6 min-h-[400px] text-sm whitespace-pre-wrap">
                          CHIEF COMPLAINT: Blood sugars trending higher over the last few weeks.
                          
                          HISTORY OF PRESENT ILLNESS: Patient presents for follow-up of diabetes and hypertension. Checks sugars twice daily. Morning readings 140-160, evening 180-200. No hypoglycemia episodes.
                          
                          PHYSICAL EXAMINATION: BP 138/82, HR 76. Lungs clear. No peripheral edema.
                          
                          ASSESSMENT AND PLAN: 
                          1. Type 2 Diabetes Mellitus - Poorly controlled. Increase Metformin to 1000mg BID.
                          2. Hypertension - Well controlled on current regimen.
                          
                          Return to clinic in 3 months.
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="xl:col-span-1">
                      <CardHeader>
                        <CardTitle>EHR Fields</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label className="font-semibold">Diagnosis Codes</Label>
                          <div className="text-sm space-y-1">
                            <div>E11.9 - Type 2 Diabetes</div>
                            <div>I10 - Hypertension</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="font-semibold">Procedure Codes</Label>
                          <div className="text-sm">99213 - Office Visit</div>
                        </div>
                        <div className="space-y-2">
                          <Label className="font-semibold">Target EHR</Label>
                          <div className="text-sm">{selectedEhr || 'Epic'}</div>
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <div className="flex flex-col gap-2">
                          <Button className="w-full rounded-lg" onClick={() => {
                            setIsSending(true);
                            setTimeout(() => {
                              setIsSending(false);
                              onNavClick('automations');
                              toast({ title: "Note sent successfully", description: "Clinical note has been delivered to Epic." });
                            }, 2000);
                          }}>
                            Send to {selectedEhr || 'Epic'}
                          </Button>
                          <Button variant="outline" className="w-full rounded-lg">Save as Draft</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </section>

            {/* Automations Section */}
            <section id="automations" className={`screen ${active === "automations" ? "" : "hidden"} h-full overflow-y-auto`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Wand2 className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Workflow Automations
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Configure automatic workflows to streamline your practice operations.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {[
                    {
                      title: "Auto-Generate Patient Instructions",
                      description: "Automatically create after-visit summaries and patient instructions based on the visit notes.",
                      enabled: true
                    },
                    {
                      title: "Schedule Follow-up Reminders",
                      description: "Set automatic reminders for patients who need follow-up appointments based on their diagnosis.",
                      enabled: true
                    },
                    {
                      title: "Lab Order Processing", 
                      description: "Automatically process and track lab orders mentioned in visit notes.",
                      enabled: false
                    },
                    {
                      title: "Prescription Refill Alerts",
                      description: "Alert when patients are due for prescription refills based on their medication history.",
                      enabled: true
                    }
                  ].map((automation, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{automation.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{automation.description}</p>
                          </div>
                          <Switch 
                            checked={automation.enabled} 
                            onCheckedChange={() => {}} 
                          />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="rounded-lg">Configure</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8">
                  <Button className="rounded-lg" onClick={() => onNavClick('agent')}>
                    Continue to AI Agent Setup
                  </Button>
                </div>
              </div>
            </section>

            {/* AI Agent Section */}
            <section id="agent" className={`screen ${active === "agent" ? "" : "hidden"} h-full overflow-y-auto`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    AI Agent Configuration
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Configure your AI agent to handle patient communications and administrative tasks.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {[
                    {
                      key: 'followups',
                      title: "Follow-up Call Automation",
                      description: "AI agent makes post-visit follow-up calls to check on patient recovery and medication adherence.",
                      enabled: agent.followups
                    },
                    {
                      key: 'inbound', 
                      title: "Inbound Call Screening",
                      description: "Screen and triage incoming patient calls, handling routine questions and scheduling requests.",
                      enabled: agent.inbound
                    },
                    {
                      key: 'outreach',
                      title: "Patient Outreach Campaigns", 
                      description: "Proactive outreach for preventive care reminders, wellness checks, and health education.",
                      enabled: agent.outreach
                    },
                    {
                      key: 'support',
                      title: "24/7 Patient Support",
                      description: "Round-the-clock AI support for urgent patient questions and basic medical guidance.",
                      enabled: agent.support
                    }
                  ].map((feature) => (
                    <Card key={feature.key}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                          </div>
                          <Switch 
                            checked={feature.enabled}
                            onCheckedChange={(checked) => 
                              setAgent(prev => ({ ...prev, [feature.key]: checked }))
                            }
                          />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="rounded-lg">Configure</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8">
                  <Button className="rounded-lg" onClick={() => onNavClick('dashboard')}>
                    View Analytics Dashboard
                  </Button>
                </div>
              </div>
            </section>

            {/* Dashboard Section */}
            <section id="dashboard" className={`screen ${active === "dashboard" ? "" : "hidden"} h-full overflow-y-auto`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Analytics Dashboard
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Monitor your practice performance and AI agent effectiveness.</p>
                </div>

                <div className="grid gap-6 xl:grid-cols-3">
                  <Card className="xl:col-span-2">
                    <CardHeader>
                      <CardTitle>Weekly Visit Volume</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={visitData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="day" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>AI Agent Call Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={agentMix}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label
                          >
                            {agentMix.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <div className="xl:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: "Notes Generated", value: "147", change: "+12%" },
                      { label: "Time Saved", value: "23.5 hrs", change: "+8%" },
                      { label: "AI Agent Calls", value: "89", change: "+15%" },
                      { label: "Patient Satisfaction", value: "96%", change: "+2%" },
                    ].map((stat, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <p className="text-xs text-green-600 mt-1">{stat.change} from last week</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Send Dialog */}
        <AlertDialog open={sendDialogOpen} onOpenChange={setSendDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Send Note to EHR?</AlertDialogTitle>
              <AlertDialogDescription>
                This will send the completed clinical note and codes to your connected EHR system.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => {
                setIsSending(true);
                setTimeout(() => {
                  setIsSending(false);
                  setSendDialogOpen(false);
                  onNavClick('automations');
                }, 2000);
              }}>
                Send to EHR
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default ProductWalkthrough;