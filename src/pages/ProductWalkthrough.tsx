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
  RefreshCw,
  List,
  Calendar,
  Search,
  Filter,
  Play,
  MoreVertical,
  ArrowLeft,
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
  { id: "setup", label: "Setup", description: "Configure your note format and connect to your EHR system" },
  { id: "schedule", label: "Schedule", description: "View and manage appointments from multiple systems" },
  { id: "capture", label: "Capture", description: "Record patient encounters with AI-powered transcription" },
  { id: "coding", label: "Coding", description: "Review and validate AI-generated medical codes" },
  { id: "send", label: "Send to EHR", description: "Securely send documentation to your electronic health record" },
  { id: "automations", label: "Automations", description: "Configure workflow automations to streamline operations" },
  { id: "agent", label: "AI Agent", description: "Set up AI agents for patient communication and support" },
  { id: "dashboard", label: "Dashboard", description: "Monitor performance metrics and system analytics" },
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
  { name: "John Doe", mrn: "12345", age: "45/M", visit: "Follow-up", lang: "English", flags: "", src: "Epic - Main Campus" },
  { name: "Jane Smith", mrn: "67890", age: "32/F", visit: "New Patient", lang: "Spanish", flags: "Interpreter", src: "Cerner - Downtown Clinic" },
  { name: "Peter Jones", mrn: "54321", age: "68/M", visit: "Annual Physical", lang: "English", flags: "Refill", src: "Athena - Westside Campus" },
  { name: "Maria Garcia", mrn: "98765", age: "28/F", visit: "Consultation", lang: "Spanish", flags: "High Priority", src: "Epic - Main Campus" },
  { name: "Robert Chen", mrn: "13579", age: "52/M", visit: "Follow-up", lang: "Chinese", flags: "Interpreter", src: "Cerner - East Location" },
  { name: "Sarah Johnson", mrn: "24680", age: "39/F", visit: "Procedure", lang: "English", flags: "Pre-op", src: "Allscripts - Surgery Center" },
  { name: "Mohammed Ali", mrn: "11223", age: "62/M", visit: "Cardiology", lang: "Arabic", flags: "Interpreter", src: "Epic - Heart Center" },
  { name: "Lisa Thompson", mrn: "33445", age: "29/F", visit: "Urgent Care", lang: "English", flags: "Same Day", src: "NextGen - Urgent Care" },
  { name: "David Kim", mrn: "55667", age: "41/M", visit: "Telemedicine", lang: "Korean", flags: "Virtual", src: "Epic - Telehealth" },
  { name: "Emily Rodriguez", mrn: "77889", age: "36/F", visit: "Dermatology", lang: "Spanish", flags: "Specialist", src: "Cerner - Specialty Clinic" },
  { name: "James Wilson", mrn: "99001", age: "58/M", visit: "Orthopedic", lang: "English", flags: "Post-op", src: "Athena - Sports Medicine" },
  { name: "Anna Petrov", mrn: "12346", age: "33/F", visit: "Obstetrics", lang: "Russian", flags: "Interpreter", src: "Epic - Women's Health" },
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
  const [scheduleView, setScheduleView] = useState<'list' | 'calendar'>('list');
  const [scheduleSearch, setScheduleSearch] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("all");

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
  
  // Automation toggles  
  const [automations, setAutomations] = useState({
    patientInstructions: true,
    followupReminders: true, 
    labOrders: false,
    prescriptionRefills: true
  });

  // Demo guidance state
  const [showDemoGuide, setShowDemoGuide] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  // Demo popup conversion state
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [userInteractions, setUserInteractions] = useState(0);
  const timeOnPageRef = useRef<NodeJS.Timeout | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showDemoGuide) {
        setShowDemoGuide(false);
      }
      if (e.key === 'h' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setShowDemoGuide(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showDemoGuide]);

  // Demo popup engagement tracking
  useEffect(() => {
    // Track time on page
    timeOnPageRef.current = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);

    // Track user interactions
    const trackInteraction = () => {
      setUserInteractions(prev => prev + 1);
    };

    // Add event listeners for user engagement
    window.addEventListener('scroll', trackInteraction);
    window.addEventListener('click', trackInteraction);
    window.addEventListener('keydown', trackInteraction);
    window.addEventListener('mousemove', trackInteraction);

    return () => {
      if (timeOnPageRef.current) {
        clearInterval(timeOnPageRef.current);
      }
      window.removeEventListener('scroll', trackInteraction);
      window.removeEventListener('click', trackInteraction);
      window.removeEventListener('keydown', trackInteraction);
      window.removeEventListener('mousemove', trackInteraction);
    };
  }, []);

  // Show demo popup based on engagement
  useEffect(() => {
    if (hasShownPopup || showDemoPopup) return;
    
    // Show popup after 75 seconds of time on page OR after 10+ interactions and 45+ seconds
    const shouldShowPopup = 
      timeOnPage >= 75 || 
      (timeOnPage >= 45 && userInteractions >= 10);
    
    if (shouldShowPopup) {
      setShowDemoPopup(true);
      setHasShownPopup(true);
    }
  }, [timeOnPage, userInteractions, hasShownPopup, showDemoPopup]);

  // Handle demo popup actions
  const handleBookDemo = () => {
    // In a real app, this would redirect to booking page or trigger booking flow
    window.open('https://calendly.com/s10ai-demo', '_blank');
    setShowDemoPopup(false);
  };

  const handleClosePopup = () => {
    setShowDemoPopup(false);
    // Optionally show again after some time if user continues browsing
    setTimeout(() => {
      if (timeOnPage > 300) { // If still on page after 5 more minutes
        setHasShownPopup(false);
      }
    }, 300000); // 5 minutes
  };

  // Demo states for interactive functionality
  const [analyzing, setAnalyzing] = useState(false);
  const [importing, setImporting] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Capture section states
  const [captureMode, setCaptureMode] = useState<'audio' | 'type'>('audio');
  const [typeNotes, setTypeNotes] = useState("");

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
    "allergy-immunology": ["Chief Complaint","HPI","Allergy History","Environmental Triggers","Physical Exam","Skin Testing","Assessment","Treatment Plan"],
    "anesthesiology": ["Pre-op Assessment","Airway Evaluation","ASA Classification","Anesthetic Plan","Intra-op Course","Post-op Care"],
    "cardiology": ["Chief Complaint","HPI","Cardiac Risk Factors","Medications","Exam","ECG","Echocardiogram","Assessment","Plan"],
    "dermatology": ["Chief Complaint","HPI","Lesion Description","Location & Distribution","Exam","Assessment","Plan"],
    "behavioral-health": ["Chief Complaint","Subjective","Objective","Assessment","Plan","Safety/Risk"],
    "emergency-medicine": ["Chief Complaint","HPI","Triage Assessment","Physical Exam","Diagnostic Studies","ED Course","Disposition"],
    "family-medicine": ["Chief Complaint","HPI","Review of Systems","Physical Exam","Assessment","Plan","Health Maintenance"],
    "internal-medicine": ["Chief Complaint","HPI","Review of Systems","Physical Exam","Assessment","Plan","Follow-up"],
    "pediatrics": ["Chief Complaint","HPI","Development","Growth Charts","Physical Exam","Assessment","Plan","Parent Education"],
    "psychiatry": ["Chief Complaint","HPI","Mental Status Exam","Risk Assessment","Medication Review","Assessment","Treatment Plan"],
    "orthopedics": ["Chief Complaint","HPI","Injury Mechanism","Physical Exam","Range of Motion","Imaging","Assessment","Treatment Plan"],
    "oncology": ["Chief Complaint","HPI","Performance Status","Physical Exam","Staging","Treatment Response","Plan"],
    "neurology": ["Chief Complaint","HPI","Neurological Exam","Mental Status","Imaging Review","Assessment","Treatment Plan"],
    // Add more as needed - all templates now have headers defined
  };

  const [previousNote, setPreviousNote] = useState("");
  const [selectedSpecialtySlug, setSelectedSpecialtySlug] = useState<string | null>(null);
  const [liveHeaders, setLiveHeaders] = useState<string[]>(defaultHeaders);
  const [scratchSections, setScratchSections] = useState<string[]>(["Chief Complaint", "HPI", "Exam", "Assessment", "Plan"]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [customSectionName, setCustomSectionName] = useState("");
  
  // Filter templates based on search
  const filteredTemplates = useMemo(() => {
    if (!searchTerm.trim()) return specialtyTemplates;
    return specialtyTemplates.filter(template => 
      template.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

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
    console.log('Navigating to:', id);
    setActive(id);
    setActiveTooltip(null); // Hide tooltip when navigating
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
    const newRecordingState = !isRecording;
    setIsRecording(newRecordingState);
    
    if (newRecordingState) {
      // Starting recording
      setSeconds(0);
      setTranscript("");
      // Start the timer
      recordTimerRef.current = window.setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
      // Start simulating transcript
      setTimeout(() => {
        transcriptTimerRef.current = window.setInterval(() => {
          setTranscript(prev => {
            const words = [
              "Patient reports increased blood sugar levels over the past two weeks.",
              "Morning readings ranging from 140 to 160 milligrams per deciliter.",
              "Evening readings between 180 and 200 milligrams per deciliter.",
              "No episodes of hypoglycemia reported.",
              "Patient continues current medication regimen as prescribed.",
              "Blood pressure appears well controlled on current therapy.",
              "Physical examination reveals no acute distress."
            ];
            const currentWords = prev.split(' ').filter(w => w.length > 0);
            if (currentWords.length < words.join(' ').split(' ').length) {
              const nextWord = words.join(' ').split(' ')[currentWords.length];
              return prev + (prev ? ' ' : '') + nextWord;
            }
            return prev;
          });
        }, 500);
      }, 1000);
    } else {
      // Stopping recording
      if (recordTimerRef.current) {
        clearInterval(recordTimerRef.current);
        recordTimerRef.current = null;
      }
      if (transcriptTimerRef.current) {
        clearInterval(transcriptTimerRef.current);
        transcriptTimerRef.current = null;
      }
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

      {/* Interactive Demo Guide */}
      {showDemoGuide && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl shadow-2xl max-w-lg w-full p-6 animate-scale-in border">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center">
                <Wand2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Interactive Demo</h3>
                <p className="text-sm text-muted-foreground">Explore S10.AI Medical Scribe & Agents</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Click on any menu item to explore different modules and features</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Hover over navigation items to see detailed descriptions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Try interactive elements like buttons and forms throughout the demo</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Press <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl+H</kbd> to reopen this guide anytime</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => setShowDemoGuide(false)}
                className="flex-1 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg"
              >
                Start Exploring
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setShowDemoGuide(false)}
                className="px-4 rounded-full border border-border hover:bg-muted"
                size="sm"
              >
                Skip
              </Button>
            </div>
          </div>
        </div>
      )}

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
                  <div className="relative">
                    <button
                      className={`nav-button ${active === s.id ? "active" : ""}`}
                      onClick={() => onNavClick(s.id)}
                      onMouseEnter={() => {
                        console.log('Hover on', s.id, s.description);
                        setActiveTooltip(s.id);
                      }}
                      onMouseLeave={() => {
                        console.log('Leave', s.id);
                        setActiveTooltip(null);
                      }}
                      aria-current={active === s.id ? "step" : undefined}
                      data-screen={s.id}
                      title={s.description} // For mobile tooltip
                    >
                      {Icon ? <Icon className="nav-icon" aria-hidden /> : null}
                      <span className="nav-text">{s.label}</span>
                    </button>
                    
                    {/* Desktop Tooltip */}
                    {activeTooltip === s.id && (
                      <div className="tooltip-container">
                        <div className="tooltip-content">
                          <div className="tooltip-title">{s.label}</div>
                          <div className="tooltip-description">{s.description}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="main-content">
          <div className="top-nav">
            <div className="flex-1 min-w-0">
              <h1 className="text-sm md:text-base lg:text-lg font-semibold truncate">AI Medical Scribe & Agents</h1>
              <p className="text-xs md:text-sm opacity-70 truncate">Clinical documentation & automation</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDemoGuide(true)}
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full px-2 lg:px-3 min-w-0"
                title="Show demo guide"
              >
                <Wand2 className="h-4 w-4" />
                <span className="hidden sm:inline ml-1 text-xs">Guide</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden sm:flex items-center gap-2 rounded-full px-3 lg:px-4 py-2 text-xs lg:text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border hover:border-border/80 hover:shadow-sm transition-all min-w-0"
              >
                <Link to="/" className="flex items-center gap-2">
                  <div className="h-5 w-5 lg:h-6 lg:w-6 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center shadow-sm">
                    <ArrowLeft className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="hidden md:inline font-medium">Return to S10.AI website</span>
                </Link>
              </Button>
              <Button asChild className="rounded-full text-xs lg:text-sm px-2 sm:px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl transition-all min-w-0">
                <Link to="/welcome">
                  <span className="hidden sm:inline">Schedule Demo</span>
                  <span className="sm:hidden">Demo</span>
                </Link>
              </Button>
            </div>
          </div>

          <main className="w-full">
            {/* Setup Section */}
            <section id="setup" className={`screen ${active === "setup" ? "" : "hidden"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Settings className="h-5 w-5 text-blue-600" aria-hidden />
                    </div>
                    Get set up in 2 minutes
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Choose your note format and connect securely to your EHR.</p>

                  <div className="mt-6 relative">
                    <div className="flex items-center justify-between max-w-md">
                      <div className={`flex items-center gap-3 ${setupStep !== 'ehr' ? 'text-blue-600' : 'text-muted-foreground'}`}>
                        <div className={`h-8 w-8 rounded-full grid place-items-center font-semibold text-sm ${
                          setupStep !== 'ehr' ? 'bg-blue-500 text-white' : 'border-2'
                        }`}>1</div>
                        <span className="font-medium">Set Note Style</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-border mx-4" />
                      <div className={`flex items-center gap-3 ${setupStep === 'ehr' ? 'text-blue-600' : 'text-muted-foreground'}`}>
                        <div className={`h-8 w-8 rounded-full grid place-items-center font-semibold text-sm ${
                          setupStep === 'ehr' ? 'bg-blue-500 text-white' : 'border-2'
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
                      className="group rounded-2xl border-2 hover:border-blue-300 p-8 text-left transition-all duration-200 hover:shadow-lg hover:shadow-blue-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-blue-100 group-hover:bg-blue-200 grid place-items-center transition-colors">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xl font-semibold mb-2">Set your note style</div>
                          <div className="text-muted-foreground">Import, paste, or build a template for your clinical notes.</div>
                        </div>
                      </div>
                    </button>

                    <button 
                      onClick={() => setSetupStep('ehr')} 
                      className="group rounded-2xl border-2 hover:border-green-300 p-8 text-left transition-all duration-200 hover:shadow-lg hover:shadow-green-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-green-100 group-hover:bg-green-200 grid place-items-center transition-colors">
                          <Server className="h-6 w-6 text-green-600" />
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
                          <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center">
                            <FileText className="h-4 w-4 text-slate-600" />
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
                              <TabsTrigger value="previous" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-blue-50/50">
                                <span className="hidden sm:inline">Previous</span>
                                <span className="sm:hidden">Prev</span>
                              </TabsTrigger>
                              <TabsTrigger value="library" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-purple-50/50">
                                <span className="hidden sm:inline">Library</span>
                                <span className="sm:hidden">Lib</span>
                              </TabsTrigger>
                              <TabsTrigger value="import" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-green-50/50">
                                Import
                              </TabsTrigger>
                              <TabsTrigger value="paste" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-orange-50/50">
                                Paste
                              </TabsTrigger>
                              <TabsTrigger value="scratch" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-teal-50/50">
                                Build
                              </TabsTrigger>
                              <TabsTrigger value="prompt" className="rounded-lg text-[9px] sm:text-[10px] lg:text-xs font-medium py-1.5 sm:py-2 px-1 sm:px-2 lg:px-4 data-[state=active]:bg-pink-50 data-[state=active]:text-pink-700 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-pink-50/50">
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
                                  <div className="flex items-center justify-between">
                                    <div className="text-sm font-semibold">Select Specialty Template</div>
                                    <div className="text-xs text-muted-foreground">
                                      {specialtyTemplates.length} templates available
                                    </div>
                                  </div>
                                  
                                  {/* Search functionality */}
                                  <div className="relative">
                                    <Input 
                                      placeholder="Search specialties..." 
                                      className="h-9"
                                      value={searchTerm}
                                      onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                  </div>
                                  
                                  {/* Fixed height scrollable container for templates */}
                                  <div className="flex-1 min-h-0">
                                    <div className="h-[350px] overflow-y-auto custom-scrollbar pr-2 border rounded-lg bg-muted/20 p-4">
                                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                        {filteredTemplates.map((spec, index) => (
                                          <button
                                            key={spec.slug}
                                            onClick={() => {
                                              setSelectedSpecialtySlug(spec.slug);
                                              const templateHeaders = spec.headers || headersBySpecialty[spec.slug] || defaultHeaders;
                                              setLiveHeaders(templateHeaders);
                                              toast({ 
                                                title: `${spec.name} template selected`, 
                                                description: `${templateHeaders.length} sections loaded` 
                                              });
                                            }}
                                            className={`group relative rounded-2xl border-2 hover:border-primary/60 p-4 text-left transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in ${
                                              selectedSpecialtySlug === spec.slug 
                                                ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg shadow-primary/20 -translate-y-1' 
                                                : 'hover:bg-gradient-to-br hover:from-muted/50 hover:to-muted/30 border-border bg-background'
                                            }`}
                                            style={{ animationDelay: `${index * 30}ms` }}
                                            aria-pressed={selectedSpecialtySlug === spec.slug}
                                          >
                                            {/* Selection indicator */}
                                            {selectedSpecialtySlug === spec.slug && (
                                              <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-primary flex items-center justify-center animate-scale-in">
                                                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                                              </div>
                                            )}
                                            
                                            <div className="space-y-3">
                                              <div className="font-semibold text-sm leading-tight text-foreground line-clamp-2 min-h-[2.5rem] flex items-center pr-8">
                                                {spec.name}
                                              </div>
                                              <div className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                                                <ClipboardList className="h-3 w-3" />
                                                {(spec.headers || headersBySpecialty[spec.slug] || defaultHeaders).length} sections
                                              </div>
                                            </div>
                                            
                                            {/* Progress bar animation */}
                                            {selectedSpecialtySlug === spec.slug && (
                                              <div className="mt-3 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                                <div className="h-full w-full bg-gradient-to-r from-primary to-primary/80 rounded-full animate-slide-in-right" />
                                              </div>
                                            )}
                                            
                                            {/* Hover effect overlay */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                          </button>
                                        ))}
                                      </div>
                                      
                                      {/* No results state */}
                                      {filteredTemplates.length === 0 && (
                                        <div className="h-full flex items-center justify-center text-center">
                                          <div className="space-y-3">
                                            <div className="text-4xl opacity-20">🔍</div>
                                            <div className="text-sm font-medium text-muted-foreground">No templates found</div>
                                            <div className="text-xs text-muted-foreground">Try adjusting your search terms</div>
                                          </div>
                                        </div>
                                      )}
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
                                <div className="h-full flex flex-col gap-6">
                                  <div className="flex items-center justify-between">
                                    <div className="text-sm font-semibold">Build Template from Scratch</div>
                                    <Button 
                                      variant="outline" 
                                      size="sm"
                                      onClick={() => {
                                        setScratchSections([]);
                                        setLiveHeaders([]);
                                        toast({ title: "Template cleared", description: "Start building your custom template" });
                                      }}
                                      className="text-xs h-8"
                                    >
                                      Clear All
                                    </Button>
                                  </div>
                                  
                                  {/* Responsive layout with improved mobile experience */}
                                  <div className="flex-1 grid gap-6 lg:grid-cols-2 xl:grid-cols-5 min-h-0">
                                    
                                    {/* Section Library - Enhanced Design */}
                                    <div className="lg:col-span-1 xl:col-span-2">
                                      <Card className="h-full border-2 bg-gradient-to-br from-muted/30 to-muted/10 animate-fade-in">
                                        <CardHeader className="pb-4">
                                          <CardTitle className="text-center text-sm font-semibold flex items-center justify-center gap-2">
                                            <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center">
                                              <ClipboardList className="h-3 w-3 text-primary" />
                                            </div>
                                            Section Library
                                          </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-0 h-full pb-6">
                                          {/* Categories */}
                                          <Tabs defaultValue="common" className="h-full">
                                            <TabsList className="grid w-full grid-cols-3 mb-4">
                                              <TabsTrigger value="common" className="text-xs">Common</TabsTrigger>
                                              <TabsTrigger value="specialty" className="text-xs">Specialty</TabsTrigger>
                                              <TabsTrigger value="custom" className="text-xs">Custom</TabsTrigger>
                                            </TabsList>
                                            
                                            <TabsContent value="common" className="h-[280px] m-0">
                                              <div className="h-full overflow-y-auto custom-scrollbar pr-2">
                                                <div className="grid grid-cols-1 gap-2">
                                                  {defaultHeaders.map((h, index) => (
                                                    <button 
                                                      key={h} 
                                                      type="button" 
                                                      onClick={() => {
                                                        if (!scratchSections.includes(h)) {
                                                          const newSections = [...scratchSections, h];
                                                          setScratchSections(newSections);
                                                          setLiveHeaders(newSections);
                                                          toast({ title: "Section added", description: `"${h}" added to template` });
                                                        } else {
                                                          toast({ title: "Already added", description: `"${h}" is already in your template` });
                                                        }
                                                      }}
                                                      disabled={scratchSections.includes(h)}
                                                      className="group flex items-center gap-3 px-4 py-3 rounded-xl border-2 hover:border-slate-300 text-sm font-medium transition-all duration-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 text-left bg-background animate-fade-in disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50"
                                                      style={{ animationDelay: `${index * 20}ms` }}
                                                    >
                                                      <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${scratchSections.includes(h) ? 'bg-green-100 text-green-600' : 'bg-slate-100 group-hover:bg-slate-200 text-slate-600'}`}>
                                                        {scratchSections.includes(h) ? (
                                                          <CheckCircle2 className="h-4 w-4" />
                                                        ) : (
                                                          <span className="text-sm">+</span>
                                                        )}
                                                      </div>
                                                      <span className="flex-1">{h}</span>
                                                    </button>
                                                  ))}
                                                </div>
                                              </div>
                                            </TabsContent>
                                            
                                            <TabsContent value="specialty" className="h-[280px] m-0">
                                              <div className="h-full overflow-y-auto custom-scrollbar pr-2">
                                                <div className="grid grid-cols-1 gap-2">
                                                  {["Vital Signs", "Allergies", "Current Medications", "Past Medical History", "Social History", "Family History", "Surgical History", "Imaging Results", "Lab Results", "Procedures", "Consultation Notes", "Discharge Instructions"].map((h, index) => (
                                                    <button 
                                                      key={h} 
                                                      type="button" 
                                                      onClick={() => {
                                                        if (!scratchSections.includes(h)) {
                                                          const newSections = [...scratchSections, h];
                                                          setScratchSections(newSections);
                                                          setLiveHeaders(newSections);
                                                          toast({ title: "Section added", description: `"${h}" added to template` });
                                                        }
                                                      }}
                                                      disabled={scratchSections.includes(h)}
                                                      className="group flex items-center gap-3 px-4 py-3 rounded-xl border-2 hover:border-slate-300 text-sm font-medium transition-all duration-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 text-left bg-background animate-fade-in disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50"
                                                      style={{ animationDelay: `${index * 20}ms` }}
                                                    >
                                                      <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${scratchSections.includes(h) ? 'bg-green-100 text-green-600' : 'bg-slate-100 group-hover:bg-slate-200 text-slate-600'}`}>
                                                        {scratchSections.includes(h) ? (
                                                          <CheckCircle2 className="h-4 w-4" />
                                                        ) : (
                                                          <span className="text-sm">+</span>
                                                        )}
                                                      </div>
                                                      <span className="flex-1">{h}</span>
                                                    </button>
                                                  ))}
                                                </div>
                                              </div>
                                            </TabsContent>
                                            
                                            <TabsContent value="custom" className="h-[280px] m-0">
                                              <div className="h-full flex flex-col gap-4">
                                                <div className="text-center text-sm text-muted-foreground">
                                                  Create your own custom sections
                                                </div>
                                                <div className="flex gap-2">
                                                  <Input 
                                                    placeholder="Enter section name..."
                                                    value={customSectionName}
                                                    onChange={(e) => setCustomSectionName(e.target.value)}
                                                    onKeyPress={(e) => {
                                                      if (e.key === 'Enter' && customSectionName.trim()) {
                                                        const newSections = [...scratchSections, customSectionName.trim()];
                                                        setScratchSections(newSections);
                                                        setLiveHeaders(newSections);
                                                        setCustomSectionName('');
                                                        toast({ title: "Custom section added", description: `"${customSectionName.trim()}" added to template` });
                                                      }
                                                    }}
                                                    className="text-sm"
                                                  />
                                                  <Button 
                                                    size="sm"
                                                    onClick={() => {
                                                      if (customSectionName.trim()) {
                                                        const newSections = [...scratchSections, customSectionName.trim()];
                                                        setScratchSections(newSections);
                                                        setLiveHeaders(newSections);
                                                        setCustomSectionName('');
                                                        toast({ title: "Custom section added", description: `"${customSectionName.trim()}" added to template` });
                                                      }
                                                    }}
                                                    disabled={!customSectionName.trim()}
                                                  >
                                                    Add
                                                  </Button>
                                                </div>
                                                <div className="text-xs text-muted-foreground text-center">
                                                  Press Enter or click Add to create a custom section
                                                </div>
                                              </div>
                                            </TabsContent>
                                          </Tabs>
                                        </CardContent>
                                      </Card>
                                    </div>
                                    
                                    {/* Template Structure - Enhanced Design */}
                                    <div className="lg:col-span-1 xl:col-span-3">
                                      <Card className="h-full border-2 bg-gradient-to-br from-background to-muted/5 animate-fade-in">
                                        <CardHeader className="pb-4">
                                          <CardTitle className="text-center text-sm font-semibold flex items-center justify-center gap-2">
                                            <div className="h-6 w-6 rounded-lg bg-indigo-100 flex items-center justify-center">
                                              <FileText className="h-3 w-3 text-indigo-600" />
                                            </div>
                                            Your Template Structure ({scratchSections.length})
                                          </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-0 h-full pb-6">
                                          {/* Empty state with better UX */}
                                          {scratchSections.length === 0 ? (
                                            <div className="h-full flex items-center justify-center text-center">
                                              <div className="space-y-4 max-w-sm">
                                                <div className="text-6xl opacity-20">📝</div>
                                                <div className="space-y-2">
                                                  <div className="text-sm font-medium text-muted-foreground">Start building your template</div>
                                                  <div className="text-xs text-muted-foreground leading-relaxed">
                                                    Select sections from the library to build your custom note template. 
                                                    You can reorder and customize as needed.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ) : (
                                            <div className="space-y-3 h-[320px] overflow-y-auto custom-scrollbar pr-2">
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
                                                  className="group relative rounded-xl border-2 bg-gradient-to-r from-card to-card/80 p-4 cursor-move hover:border-indigo-300 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100 hover:-translate-y-0.5 animate-scale-in"
                                                >
                                                  <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                      <div className="h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                                                        <span className="text-indigo-600 text-xs font-bold">{i + 1}</span>
                                                      </div>
                                                      <span className="font-medium text-sm">{h}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                      <button 
                                                        type="button" 
                                                        className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded-md hover:bg-muted/50" 
                                                        onClick={(e) => {
                                                          e.stopPropagation();
                                                          if (i > 0) {
                                                            const newSections = [...scratchSections];
                                                            [newSections[i], newSections[i-1]] = [newSections[i-1], newSections[i]];
                                                            setScratchSections(newSections);
                                                            setLiveHeaders(newSections);
                                                          }
                                                        }}
                                                        disabled={i === 0}
                                                      >
                                                        ↑
                                                      </button>
                                                      <button 
                                                        type="button" 
                                                        className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded-md hover:bg-muted/50" 
                                                        onClick={(e) => {
                                                          e.stopPropagation();
                                                          if (i < scratchSections.length - 1) {
                                                            const newSections = [...scratchSections];
                                                            [newSections[i], newSections[i+1]] = [newSections[i+1], newSections[i]];
                                                            setScratchSections(newSections);
                                                            setLiveHeaders(newSections);
                                                          }
                                                        }}
                                                        disabled={i === scratchSections.length - 1}
                                                      >
                                                        ↓
                                                      </button>
                                                      <button 
                                                        type="button" 
                                                        className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs text-destructive hover:text-destructive/80 hover:underline px-2 py-1 rounded-md hover:bg-destructive/10" 
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
                                                  
                                                  {/* Drag indicator */}
                                                  <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-50 transition-opacity">
                                                    <div className="flex flex-col gap-0.5">
                                                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                        </CardContent>
                                      </Card>
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
                        <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        </div>
                        Connect to Your EHR
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="text-sm font-semibold mb-2">Select your EHR system</div>
                        <div className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          Integrates with 200+ EHR systems including all major platforms
                        </div>
                        
                        {/* Scrollable EHR Grid Container */}
                        <div className="h-80 overflow-y-auto border rounded-lg p-4 bg-gray-50/50">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {[
                              { name: "Epic", logo: "🏥", subtitle: "Epic Systems" },
                              { name: "Cerner", logo: "⚕️", subtitle: "Oracle Health" },
                              { name: "Athena", logo: "🔬", subtitle: "athenahealth" },
                              { name: "eClinicalWorks", logo: "💊", subtitle: "eCW" },
                              { name: "NextGen", logo: "📋", subtitle: "NextGen Healthcare" },
                              { name: "Allscripts", logo: "🩺", subtitle: "Allscripts Healthcare" },
                              { name: "Meditech", logo: "🏥", subtitle: "MEDITECH" },
                              { name: "Greenway", logo: "🌱", subtitle: "Greenway Health" },
                              { name: "Practice Fusion", logo: "⚡", subtitle: "Veracyte" },
                              { name: "Amazing Charts", logo: "📊", subtitle: "Amazing Charts" },
                              { name: "CureMD", logo: "💉", subtitle: "CureMD Healthcare" },
                              { name: "DrChrono", logo: "👨‍⚕️", subtitle: "DrChrono EHR" },
                              { name: "AdvancedMD", logo: "🔬", subtitle: "AdvancedMD" },
                              { name: "Kareo", logo: "💼", subtitle: "Tebra (Kareo)" },
                              { name: "ChartLogic", logo: "📈", subtitle: "ChartLogic" },
                              { name: "ModMed", logo: "🏥", subtitle: "Modernizing Medicine" },
                              { name: "Praxis", logo: "🧠", subtitle: "Praxis EMR" },
                              { name: "WRS Health", logo: "💻", subtitle: "WRS Health" },
                              { name: "Aprima", logo: "⚕️", subtitle: "Aprima Medical" },
                              { name: "HealthFusion", logo: "🔄", subtitle: "HealthFusion MediTouch" },
                              { name: "Centricity", logo: "🎯", subtitle: "GE Healthcare" },
                              { name: "TherapyNotes", logo: "📝", subtitle: "TherapyNotes" },
                              { name: "SimplePractice", logo: "✨", subtitle: "SimplePractice" },
                              { name: "TheraNest", logo: "🏠", subtitle: "TheraNest" },
                              { name: "WebPT", logo: "💪", subtitle: "WebPT" },
                              { name: "Therabill", logo: "📋", subtitle: "Therabill" },
                              { name: "InSync", logo: "🔄", subtitle: "InSync Healthcare" },
                              { name: "Valant", logo: "🧭", subtitle: "Valant EHR" },
                              { name: "ICANotes", logo: "📄", subtitle: "ICANotes" },
                              { name: "TotalMD", logo: "🏥", subtitle: "TotalMD" },
                              { name: "Sevocity", logo: "🌐", subtitle: "Sevocity" },
                              { name: "Azalea Health", logo: "🌸", subtitle: "Azalea Health" },
                              { name: "Netsmart", logo: "🌐", subtitle: "Netsmart myEvolv" },
                              { name: "PointClickCare", logo: "👆", subtitle: "PointClickCare" },
                              { name: "MatrixCare", logo: "🏥", subtitle: "MatrixCare" },
                              { name: "CareVoyant", logo: "🚀", subtitle: "CareVoyant" },
                              { name: "Brightree", logo: "🌳", subtitle: "Brightree by ResMed" },
                              { name: "CompuGroup", logo: "💼", subtitle: "CompuGroup Medical" },
                              { name: "Office Practicum", logo: "🏢", subtitle: "Office Practicum" },
                              { name: "PrimeSuite", logo: "👑", subtitle: "Greenway PrimeSuite" },
                              { name: "Any EHR", logo: "🔧", subtitle: "Custom Integration" }
                            ].map((ehr) => (
                              <button
                                key={ehr.name}
                                onClick={() => setSelectedEhr(ehr.name)}
                                className={`rounded-xl border-2 hover:border-emerald-300 p-3 text-center transition-all duration-200 hover:shadow-md ${
                                  selectedEhr === ehr.name ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200' : ''
                                } ${ehr.name === 'Any EHR' ? 'border-dashed border-emerald-300 bg-emerald-50' : ''}`}
                              >
                                <div className="text-xl mb-1">{ehr.logo}</div>
                                <div className="font-semibold text-xs">{ehr.name}</div>
                                <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                                  {ehr.subtitle}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="text-sm font-medium text-blue-900 mb-1">Don't see your EHR?</div>
                          <div className="text-xs text-blue-700">
                            Our AI agents can integrate with any EHR system through custom protocols. We support legacy systems, specialty-specific platforms, and emerging technologies.
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold mb-3">Connection Method</div>
                        <div className="rounded-xl border p-4">
                          <label className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                            <input type="radio" name="conn" defaultChecked className="scale-110" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <Bot className="h-4 w-4 text-slate-600" />
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

                      {/* Enhanced Action Buttons */}
                      <div className="sticky bottom-0 bg-white border-t pt-4 -mx-6 px-6 -mb-6 pb-6">
                        <div className="flex flex-wrap gap-3 justify-between items-center">
                          <div className="flex gap-3">
                            <Button 
                              variant="outline" 
                              className="rounded-full px-6"
                              onClick={() => setSetupStep('landing')}
                            >
                              ← Back
                            </Button>
                            <Button 
                              variant="ghost" 
                              className="rounded-full px-6 text-muted-foreground hover:text-foreground"
                              onClick={() => {
                                toast({ title: "Setup saved", description: "You can configure EHR connection later from Settings." });
                                onNavClick("schedule");
                              }}
                            >
                              Skip for now
                            </Button>
                          </div>
                          <Button 
                            onClick={handleConnect} 
                            disabled={!selectedEhr || connecting} 
                            className="rounded-full px-8 font-semibold shadow-md hover:shadow-lg transition-all"
                            size="lg"
                          >
                            {connecting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                Connecting to {selectedEhr}...
                              </>
                            ) : selectedEhr ? (
                              <>
                                <ShieldCheck className="h-4 w-4 mr-2" />
                                Connect {selectedEhr}
                              </>
                            ) : (
                              'Select EHR to Connect'
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>

            {/* Schedule Section */}
            <section id="schedule" className={`screen ${active === "schedule" ? "" : "hidden"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CalendarDays className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Unified Schedule
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">
                    Schedule imported from multiple EHR systems and practice management platforms across {new Set(appointments.map(a => a.src.split(' - ')[0])).size} systems 
                    and {new Set(appointments.map(a => a.src.split(' - ')[1] || 'Main')).size} locations.
                  </p>
                </div>

                {/* Enhanced Controls Section */}
                <div className="grid gap-4 lg:gap-6 mb-6">
                  <Card className="border-2 bg-gradient-to-r from-background to-muted/5">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        
                        {/* Sync Status - Enhanced */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="font-medium text-green-700">Live Sync Active</span>
                          </div>
                          <div className="h-4 w-px bg-border"></div>
                          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              Epic (4 locations)
                            </span>
                            <span className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              Cerner (3 locations)
                            </span>
                            <span className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                              Athena (2 locations)
                            </span>
                            <span className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              NextGen (1 location)
                            </span>
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="sm" className="rounded-lg">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Sync All
                          </Button>
                          <div className="h-4 w-px bg-border"></div>
                          <Tabs value={scheduleView} onValueChange={(v: 'list' | 'calendar') => setScheduleView(v)} className="w-fit">
                            <TabsList className="bg-muted/50">
                              <TabsTrigger value="list" className="text-xs px-3">
                                <List className="h-3 w-3 mr-1" />
                                List
                              </TabsTrigger>
                              <TabsTrigger value="calendar" className="text-xs px-3">
                                <Calendar className="h-3 w-3 mr-1" />
                                Calendar
                              </TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Search and Filter Bar */}
                    <CardContent className="pt-0 pb-6">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                              type="text"
                              placeholder="Search patients, MRN, visit type..."
                              value={scheduleSearch}
                              onChange={(e) => setScheduleSearch(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <select
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                            className="px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-w-[140px]"
                          >
                            <option value="all">All Locations</option>
                            <option value="Main Campus">Main Campus</option>
                            <option value="Downtown Clinic">Downtown Clinic</option>
                            <option value="Westside Campus">Westside Campus</option>
                            <option value="East Location">East Location</option>
                            <option value="Surgery Center">Surgery Center</option>
                            <option value="Heart Center">Heart Center</option>
                            <option value="Urgent Care">Urgent Care</option>
                            <option value="Telehealth">Telehealth</option>
                            <option value="Specialty Clinic">Specialty Clinic</option>
                            <option value="Sports Medicine">Sports Medicine</option>
                            <option value="Women's Health">Women's Health</option>
                          </select>
                          <Button variant="outline" size="sm" className="rounded-lg whitespace-nowrap">
                            <Filter className="h-4 w-4 mr-2" />
                            More Filters
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Schedule Content */}
                <Card className="overflow-hidden border-2">
                  <CardContent className="p-0">
                    {scheduleView === 'list' ? (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b bg-gradient-to-r from-muted/80 to-muted/40">
                              {["Time", "Patient", "MRN", "Age/Sex", "Visit Type", "Language", "Priority", "Location & System", "Actions"].map((header) => (
                                <th key={header} className="text-left px-4 lg:px-6 py-4 font-semibold text-xs lg:text-sm whitespace-nowrap">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {appointments
                              .filter(appointment => {
                                const matchesSearch = scheduleSearch === "" || 
                                  appointment.name.toLowerCase().includes(scheduleSearch.toLowerCase()) ||
                                  appointment.mrn.includes(scheduleSearch) ||
                                  appointment.visit.toLowerCase().includes(scheduleSearch.toLowerCase());
                                const matchesLocation = locationFilter === "all" || appointment.src.includes(locationFilter);
                                return matchesSearch && matchesLocation;
                              })
                              .map((appointment, index) => {
                                const [system, location] = appointment.src.split(' - ');
                                const times = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"];
                                const time = times[index % times.length];
                                
                                return (
                                  <tr key={appointment.mrn} className="border-b hover:bg-muted/30 transition-all duration-200 group animate-fade-in">
                                    <td className="px-4 lg:px-6 py-4 font-mono text-xs lg:text-sm font-medium">
                                      {time}
                                    </td>
                                    <td className="px-4 lg:px-6 py-4">
                                      <div className="font-medium text-sm">{appointment.name}</div>
                                      <div className="text-xs text-muted-foreground mt-0.5">ID: {appointment.mrn}</div>
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 text-muted-foreground font-mono text-xs lg:text-sm">
                                      {appointment.mrn}
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 text-sm">{appointment.age}</td>
                                    <td className="px-4 lg:px-6 py-4">
                                      <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                        {appointment.visit}
                                      </span>
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 text-sm">{appointment.lang}</td>
                                    <td className="px-4 lg:px-6 py-4">
                                      {appointment.flags && (
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium border ${
                                          appointment.flags.includes('High Priority') ? 'bg-red-50 text-red-700 border-red-200' :
                                          appointment.flags.includes('Interpreter') ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                          appointment.flags.includes('Pre-op') ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                          appointment.flags.includes('Same Day') ? 'bg-orange-50 text-orange-700 border-orange-200' :
                                          appointment.flags.includes('Virtual') ? 'bg-green-50 text-green-700 border-green-200' :
                                          appointment.flags.includes('Post-op') ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                                          'bg-yellow-50 text-yellow-700 border-yellow-200'
                                        }`}>
                                          {appointment.flags}
                                        </span>
                                      )}
                                    </td>
                                    <td className="px-4 lg:px-6 py-4">
                                      <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                          <div className={`h-2 w-2 rounded-full ${
                                            system === 'Epic' ? 'bg-blue-500' :
                                            system === 'Cerner' ? 'bg-green-500' :
                                            system === 'Athena' ? 'bg-purple-500' :
                                            system === 'Allscripts' ? 'bg-orange-500' :
                                            system === 'NextGen' ? 'bg-red-500' :
                                            'bg-gray-500'
                                          }`}></div>
                                          <span className="text-xs font-medium">{system}</span>
                                        </div>
                                        <div className="text-xs text-muted-foreground pl-4">
                                          {location || 'Main Location'}
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-4 lg:px-6 py-4">
                                      <div className="flex items-center gap-2">
                                        <Button 
                                          size="sm" 
                                          onClick={() => handleOpenAppointment(appointment)} 
                                          className="rounded-lg h-8 px-3 text-xs font-medium group-hover:shadow-md transition-shadow"
                                        >
                                          <Play className="h-3 w-3 mr-1" />
                                          Start
                                        </Button>
                                        <Button 
                                          variant="outline" 
                                          size="sm" 
                                          className="rounded-lg h-8 px-2"
                                        >
                                          <MoreVertical className="h-3 w-3" />
                                        </Button>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>

                        {/* Empty State */}
                        {appointments.filter(appointment => {
                          const matchesSearch = scheduleSearch === "" || 
                            appointment.name.toLowerCase().includes(scheduleSearch.toLowerCase()) ||
                            appointment.mrn.includes(scheduleSearch) ||
                            appointment.visit.toLowerCase().includes(scheduleSearch.toLowerCase());
                          const matchesLocation = locationFilter === "all" || appointment.src.includes(locationFilter);
                          return matchesSearch && matchesLocation;
                        }).length === 0 && (
                          <div className="text-center py-12">
                            <div className="text-4xl opacity-20 mb-4">📅</div>
                            <div className="text-lg font-medium text-muted-foreground">No appointments found</div>
                            <div className="text-sm text-muted-foreground mt-2">
                              Try adjusting your search or filter criteria
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Calendar View */
                      <div className="p-6">
                        <div className="grid grid-cols-7 gap-4 mb-6">
                          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="text-center text-sm font-semibold text-muted-foreground py-2">
                              {day}
                            </div>
                          ))}
                          {Array.from({ length: 35 }, (_, i) => {
                            const isToday = i === 15; // Mock today
                            const hasAppointments = Math.random() > 0.7;
                            const appointmentCount = hasAppointments ? Math.floor(Math.random() * 5) + 1 : 0;
                            
                            return (
                              <div 
                                key={i} 
                                className={`min-h-[80px] p-2 border rounded-lg transition-colors cursor-pointer ${
                                  isToday ? 'bg-primary/10 border-primary/30' : 
                                  hasAppointments ? 'bg-muted/30 hover:bg-muted/50' : 
                                  'hover:bg-muted/20'
                                }`}
                              >
                                <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : ''}`}>
                                  {i + 1}
                                </div>
                                {hasAppointments && (
                                  <div className="space-y-1">
                                    {Array.from({ length: appointmentCount }, (_, j) => (
                                      <div key={j} className="text-xs p-1 bg-primary/20 text-primary rounded truncate">
                                        {j === 0 ? '9:00 AM' : j === 1 ? '10:30 AM' : j === 2 ? '2:00 PM' : '3:30 PM'}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <div className="text-center text-sm text-muted-foreground">
                          Click on any date to view detailed appointments
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Capture Section */}
            <section id="capture" className={`screen ${active === "capture" ? "" : "hidden"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mic className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Clinical Documentation
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Capture patient encounters through audio recording or manual typing with AI assistance.</p>
                  
                  {/* Real-time Status Bar */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                          <span className="font-medium">
                            {isRecording ? 'Recording Active' : 'Ready to Capture'}
                          </span>
                        </div>
                        {selectedPatient && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <span>•</span>
                            <span>Patient: {selectedPatient.name}</span>
                            <span>•</span>
                            <span>Visit: {selectedPatient.visit}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-muted-foreground">AI Processing:</div>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="text-xs font-medium text-green-700">Active</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Responsive Grid Layout */}
                <div className="grid gap-6 lg:gap-8 xl:grid-cols-12">
                  
                  {/* Enhanced Input Methods Panel */}
                  <div className="xl:col-span-4 space-y-6">
                    <Card className="border-2 bg-gradient-to-br from-background to-muted/5">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center">
                            {captureMode === 'audio' ? <Mic className="h-3 w-3 text-primary" /> : <FileText className="h-3 w-3 text-primary" />}
                          </div>
                          Input Method
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        
                        {/* Enhanced Mode Toggle */}
                        <Tabs value={captureMode} onValueChange={(value: 'audio' | 'type') => setCaptureMode(value)} className="w-full">
                          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                            <TabsTrigger value="audio" className="flex items-center gap-2 data-[state=active]:bg-primary/10">
                              <Mic className="h-4 w-4" />
                              <span className="hidden sm:inline">Audio Capture</span>
                              <span className="sm:hidden">Audio</span>
                            </TabsTrigger>
                            <TabsTrigger value="type" className="flex items-center gap-2 data-[state=active]:bg-primary/10">
                              <FileText className="h-4 w-4" />
                              <span className="hidden sm:inline">Manual Entry</span>
                              <span className="sm:hidden">Type</span>
                            </TabsTrigger>
                          </TabsList>
                          
                          {/* Enhanced Audio Capture Tab */}
                          <TabsContent value="audio" className="mt-6 space-y-6">
                            <div className="space-y-6">
                              
                              {/* Recording Controls */}
                              <div className="space-y-4">
                                <Button 
                                  onClick={toggleRecording} 
                                  className={`w-full rounded-xl h-16 font-semibold text-lg transition-all duration-300 ${
                                    isRecording 
                                      ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/25' 
                                      : 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:scale-[1.02]'
                                  }`}
                                >
                                  {isRecording ? (
                                    <>
                                      <CircleStop className="h-6 w-6 mr-3" /> Stop Recording
                                    </>
                                  ) : (
                                    <>
                                      <Mic className="h-6 w-6 mr-3" /> Start Recording
                                    </>
                                  )}
                                </Button>
                                
                                {/* Enhanced Recording Status */}
                                <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg border">
                                  <div className="flex items-center gap-2">
                                    <div className={`h-4 w-4 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-muted-foreground/50'}`} />
                                    <span className="font-mono text-2xl font-bold">{timeStr}</span>
                                  </div>
                                  <div className="h-6 w-px bg-border mx-2"></div>
                                  <div className="text-sm text-center">
                                    <div className="font-medium">
                                      {isRecording ? 'Recording in Progress' : 'Ready to Record'}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                      {isRecording ? 'Speak clearly for best results' : 'High-quality audio recommended'}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Enhanced Audio Visualizer */}
                              <Card className="p-4 bg-gradient-to-r from-muted/20 to-muted/5">
                                <div className="text-xs font-medium text-muted-foreground mb-3 text-center">
                                  Audio Input Level
                                </div>
                                <div className="flex items-end justify-center gap-1 h-20">
                                  {[8,14,20,12,18,10,16,22,12,15,19,8,16,25,11,20,12,18,14,10].map((h, i) => (
                                    <div 
                                      key={i} 
                                      className={`w-2 rounded-t transition-all duration-300 ${
                                        isRecording 
                                          ? 'bg-gradient-to-t from-primary to-primary/60 animate-pulse' 
                                          : 'bg-gradient-to-t from-primary/20 to-primary/10'
                                      }`} 
                                      style={{ 
                                        height: `${isRecording ? h : h * 0.3}px`,
                                        animationDelay: `${i * 50}ms`
                                      }} 
                                    />
                                  ))}
                                </div>
                              </Card>
                              
                              {/* Audio Quality Indicators */}
                              <div className="grid grid-cols-3 gap-3 text-xs">
                                <div className="text-center p-2 rounded-lg bg-green-50 border border-green-200">
                                  <div className="font-medium text-green-700">Quality</div>
                                  <div className="text-green-600">Excellent</div>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-blue-50 border border-blue-200">
                                  <div className="font-medium text-blue-700">Clarity</div>
                                  <div className="text-blue-600">Clear</div>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-purple-50 border border-purple-200">
                                  <div className="font-medium text-purple-700">Background</div>
                                  <div className="text-purple-600">Quiet</div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                          
                          {/* Enhanced Type Input Tab */}
                          <TabsContent value="type" className="mt-6">
                            <div className="space-y-6">
                              <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <Bot className="h-4 w-4" />
                                AI-Assisted Manual Entry
                              </div>
                              
                              <div className="space-y-4">
                                <Textarea 
                                  placeholder="Begin typing your clinical notes here. AI will assist with structuring, medical terminology, and formatting as you type..."
                                  value={typeNotes}
                                  onChange={(e) => setTypeNotes(e.target.value)}
                                  className="min-h-[250px] resize-none text-sm leading-relaxed border-2 focus:border-primary/50 transition-colors"
                                />
                                
                                {/* AI Suggestions Panel */}
                                {typeNotes.length > 20 && (
                                  <Card className="p-3 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
                                    <div className="text-xs font-medium text-primary mb-2 flex items-center gap-1">
                                      <Bot className="h-3 w-3" />
                                      AI Suggestions
                                    </div>
                                    <div className="text-xs text-muted-foreground space-y-1">
                                      <div>• Consider adding vital signs if available</div>
                                      <div>• Review of systems may be beneficial</div>
                                      <div>• Assessment and plan section recommended</div>
                                    </div>
                                  </Card>
                                )}
                                
                                {/* Word Count & Metrics */}
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                  <div className="flex items-center gap-4">
                                    <span>{typeNotes.split(' ').filter(Boolean).length} words</span>
                                    <span>{typeNotes.length} characters</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    <span>AI analyzing</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => {
                                    setTypeNotes("");
                                    toast({ title: "Notes cleared", description: "Ready for new input" });
                                  }}
                                  className="rounded-lg"
                                >
                                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                  Clear All
                                </Button>
                                <Button 
                                  size="sm"
                                  onClick={() => {
                                    if (typeNotes.trim()) {
                                      setTranscript(typeNotes);
                                      toast({ title: "Notes processed", description: "AI is structuring your notes" });
                                    }
                                  }}
                                  disabled={!typeNotes.trim()}
                                  className="rounded-lg"
                                >
                                  <Wand2 className="h-4 w-4 mr-2" />
                                  Process & Structure
                                </Button>
                                <Button 
                                  variant="outline"
                                  size="sm"
                                  className="rounded-lg"
                                  onClick={() => {
                                    setCaptureMode('audio');
                                    toast({ title: "Voice dictation activated", description: "You can now use voice dictation to capture notes" });
                                  }}
                                >
                                  <Mic className="h-4 w-4 mr-2" />
                                  Voice Dictation
                                </Button>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>

                        {/* Enhanced Session Controls */}
                        <div className="pt-6 border-t space-y-3">
                          <div className="text-xs font-medium text-muted-foreground mb-3">Session Controls</div>
                          <div className="grid gap-2">
                            <Button variant="outline" className="rounded-lg justify-start h-10 text-sm" size="sm">
                              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Pause Session
                            </Button>
                            <Button variant="outline" className="rounded-lg justify-start h-10 text-sm" size="sm">
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Audio File
                            </Button>
                            <Button variant="outline" className="rounded-lg justify-start h-10 text-sm text-destructive hover:text-destructive hover:bg-destructive/10" size="sm">
                              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              End & Discard Session
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Enhanced AI-Generated Note Panel */}
                  <div className="xl:col-span-5">
                    <Card className="h-full border-2 bg-gradient-to-br from-background to-muted/5">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Bot className="h-3 w-3 text-primary" />
                            </div>
                            AI-Generated Clinical Note
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-xs text-muted-foreground">Live Processing</span>
                            </div>
                            <Button variant="outline" size="sm" className="rounded-lg text-xs">
                              <Settings className="h-3 w-3 mr-1" />
                              Settings
                            </Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        
                        {/* Processing Status */}
                        <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                            <span className="font-medium text-blue-700">Real-time transcription and structuring active</span>
                          </div>
                          <div className="text-xs text-blue-600 mt-1 flex flex-wrap items-center gap-3">
                            <span>• Medical terminology detection</span>
                            <span>• Grammar correction</span>
                            <span>• Clinical structure formatting</span>
                          </div>
                        </div>
                        
                        {/* Note Content */}
                        <div className="rounded-lg border-2 bg-gradient-to-br from-background to-muted/10 p-6 min-h-[400px] max-h-[500px] overflow-y-auto custom-scrollbar">
                          <div className="text-sm whitespace-pre-wrap leading-relaxed">
                            {transcript || typeNotes || `${selectedPatient ? `📋 CLINICAL NOTE\n\nPatient: ${selectedPatient.name}\nMRN: ${selectedPatient.mrn}\nVisit Type: ${selectedPatient.visit}\nDate: ${new Date().toLocaleDateString()}\n\n` : ""}🎯 READY FOR INPUT\n\n${captureMode === 'audio' ? '🎤 Begin recording' : '⌨️ Start typing'} to generate structured clinical documentation...\n\n📝 AI will automatically organize content into:\n\n• Chief Complaint\n• History of Present Illness  \n• Review of Systems\n• Physical Examination\n• Assessment & Differential\n• Plan & Follow-up\n• Patient Instructions\n\n✨ Features:\n• Real-time medical terminology correction\n• Automatic ICD-10/CPT code suggestions\n• Clinical decision support\n• Template-based structure\n• Integration with patient history`}
                          </div>
                        </div>
                        
                        {/* Enhanced Note Actions */}
                        <div className="flex flex-wrap gap-3 pt-4 border-t">
                          <Button variant="outline" size="sm" className="rounded-lg flex-1 sm:flex-none">
                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit Note
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-lg flex-1 sm:flex-none">
                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy Text
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-lg flex-1 sm:flex-none">
                            <FileText className="h-4 w-4 mr-2" />
                            Export
                          </Button>
                          <Button size="sm" className="rounded-lg flex-1 sm:flex-none" onClick={() => onNavClick('coding')}>
                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Continue to Coding
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Patient Summary Snapshot - Right Side */}
                  <div className="xl:col-span-3">
                    <Card className="h-full border-2 bg-gradient-to-br from-blue-50/50 to-background">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2 text-blue-900">
                          <div className="h-6 w-6 rounded-lg bg-blue-100 flex items-center justify-center">
                            <svg className="h-3 w-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          Patient Summary Snapshot
                        </CardTitle>
                        <p className="text-xs text-blue-700/70">Medical history and previous visit details</p>
                      </CardHeader>
                      <CardContent>
                        {selectedPatient ? (
                          <div className="space-y-4">
                            {/* Patient Header */}
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-700">
                                  {selectedPatient.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <div className="font-semibold text-blue-900">{selectedPatient.name}</div>
                                  <div className="text-sm text-blue-700">MRN: {selectedPatient.mrn}</div>
                                  <div className="text-sm text-blue-600">{selectedPatient.age} • {selectedPatient.visit}</div>
                                </div>
                              </div>
                            </div>

                            {/* Previous Visit Summary */}
                            <div className="space-y-3">
                              <div className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                                <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Last Visit: March 15, 2024
                              </div>
                              <div className="p-3 bg-gradient-to-r from-green-50 to-green-50/50 rounded-lg border border-green-200 text-xs">
                                <div className="font-medium text-green-800 mb-1">Visit Summary</div>
                                <div className="text-green-700 space-y-1">
                                  <div>• Diabetes follow-up - HbA1c improved to 7.8%</div>
                                  <div>• Blood pressure well controlled</div>
                                  <div>• Renewed prescriptions</div>
                                  <div>• Scheduled for 3-month follow-up</div>
                                </div>
                              </div>
                            </div>

                            {/* Clinical Context */}
                            <div className="h-[300px] max-h-[400px] overflow-y-auto custom-scrollbar">
                              <div className="text-sm space-y-4">
                                {patientContext ? (
                                  <div className="whitespace-pre-wrap leading-relaxed text-gray-700">
                                    {patientContext}
                                  </div>
                                ) : (
                                  <div className="space-y-4">
                                    <div className="animate-pulse space-y-3">
                                      <div className="h-4 bg-blue-100 rounded w-3/4"></div>
                                      <div className="h-4 bg-blue-100 rounded w-1/2"></div>
                                      <div className="h-4 bg-blue-100 rounded w-2/3"></div>
                                      <div className="h-4 bg-blue-100 rounded w-5/6"></div>
                                      <div className="h-4 bg-blue-100 rounded w-2/3"></div>
                                    </div>
                                    <div className="text-blue-600 text-center py-4">
                                      Loading patient medical history...
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-200">
                              <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50 rounded-lg">
                                <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Full History
                              </Button>
                              <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50 rounded-lg">
                                <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Lab Results
                              </Button>
                              <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50 rounded-lg">
                                <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Allergies
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center text-center">
                            <div className="space-y-3">
                              <div className="text-4xl opacity-30">👤</div>
                              <div className="text-sm font-medium text-blue-800">No Patient Selected</div>
                              <div className="text-xs text-blue-600 leading-relaxed max-w-sm">
                                Select a patient from the Schedule to load their medical history and context for this visit.
                              </div>
                              <Button variant="outline" size="sm" onClick={() => onNavClick('schedule')} className="text-blue-700 border-blue-200">
                                Go to Schedule
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Coding Section */}
            <section id="coding" className={`screen ${active === "coding" ? "" : "hidden"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
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
            <section id="send" className={`screen ${active === "send" ? "" : "hidden"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    Send to EHR
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Review, validate, and send your clinical documentation to the EHR system.</p>
                  
                  {/* Status Bar */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-green-50/50 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium text-green-800">Clinical Note Ready</div>
                          <div className="text-sm text-green-600">All required fields validated • Ready for EHR transmission</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-700">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span>Connected to {selectedEhr || 'Epic'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {isSending ? (
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center py-16">
                      <div className="text-center space-y-6">
                        <div className="flex items-center justify-center">
                          <div className="relative">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20"></div>
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent absolute top-0"></div>
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold mb-2">Sending to {selectedEhr || 'Epic'}</div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div>✓ Validating note structure</div>
                            <div>✓ Checking required fields</div>
                            <div>⏳ Transmitting to EHR...</div>
                          </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '75%' }}></div>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Transmission in progress...</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-6 xl:grid-cols-12">
                    
                    {/* Enhanced Note Preview */}
                    <Card className="xl:col-span-8 border-2 bg-gradient-to-br from-background to-muted/5">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            Final Clinical Note Preview
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="rounded-lg">
                              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Edit Note
                            </Button>
                            <Button variant="outline" size="sm" className="rounded-lg">
                              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              Preview Mode
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-xl border-2 bg-gradient-to-br from-background to-muted/10 p-6 min-h-[500px] max-h-[600px] overflow-y-auto custom-scrollbar">
                          <div className="text-sm leading-relaxed space-y-4">
                            
                            {/* Patient Header */}
                            <div className="pb-4 border-b border-muted">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <div className="text-lg font-semibold text-foreground">
                                    {selectedPatient?.name || 'John Doe'}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    MRN: {selectedPatient?.mrn || '12345'} • DOB: 01/15/1978 • Age: 45
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-medium">Visit Date: {new Date().toLocaleDateString()}</div>
                                  <div className="text-xs text-muted-foreground">
                                    Provider: Dr. Sarah Johnson, MD
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Clinical Note Content */}
                            <div className="space-y-6">
                              <div>
                                <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                  CHIEF COMPLAINT
                                </div>
                                <div className="text-foreground pl-4">
                                  Blood sugars trending higher over the last few weeks.
                                </div>
                              </div>
                              
                              <div>
                                <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                  HISTORY OF PRESENT ILLNESS
                                </div>
                                <div className="text-foreground pl-4">
                                  Patient presents for follow-up of diabetes and hypertension. Checks sugars twice daily. Morning readings 140-160, evening 180-200. No hypoglycemia episodes. Reports adherence to current medication regimen. No recent changes in diet or exercise routine.
                                </div>
                              </div>
                              
                              <div>
                                <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                  PHYSICAL EXAMINATION
                                </div>
                                <div className="text-foreground pl-4">
                                  Vital Signs: BP 138/82, HR 76, RR 16, Temp 98.6°F, O2 Sat 98%<br/>
                                  General: Well-appearing, no acute distress<br/>
                                  Cardiovascular: Regular rate and rhythm, no murmurs<br/>
                                  Pulmonary: Lungs clear to auscultation bilaterally<br/>
                                  Extremities: No peripheral edema, pulses intact
                                </div>
                              </div>
                              
                              <div>
                                <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                  ASSESSMENT AND PLAN
                                </div>
                                <div className="text-foreground pl-4 space-y-3">
                                  <div>
                                    <div className="font-medium">1. Type 2 Diabetes Mellitus (E11.9) - Poorly controlled</div>
                                    <div className="text-sm text-muted-foreground ml-3">
                                      • Increase Metformin to 1000mg BID<br/>
                                      • Continue glucose monitoring<br/>
                                      • HbA1c in 3 months<br/>
                                      • Diabetes education referral
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium">2. Hypertension (I10) - Well controlled</div>
                                    <div className="text-sm text-muted-foreground ml-3">
                                      • Continue current regimen<br/>
                                      • Home BP monitoring
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                  FOLLOW-UP
                                </div>
                                <div className="text-foreground pl-4">
                                  Return to clinic in 3 months or sooner if concerns. Patient educated on signs/symptoms requiring immediate medical attention.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Note Metadata */}
                        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <span>Word count: 245</span>
                              <span>Sections: 5</span>
                              <span>Medical terms: 18</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-600" />
                              <span className="text-green-700">Validation passed</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Enhanced EHR Fields Panel */}
                    <Card className="xl:col-span-4 h-fit border-2 bg-gradient-to-br from-background to-muted/5">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">
                          <Server className="h-5 w-5 text-primary" />
                          EHR Integration
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        
                        {/* EHR Selection */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-semibold">Target EHR System</div>
                            <Button variant="outline" size="sm" className="rounded-lg text-xs">
                              <Settings className="h-3 w-3 mr-1" />
                              Change
                            </Button>
                          </div>
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                              <div>
                                <div className="font-medium text-blue-800">{selectedEhr || 'Epic MyChart'}</div>
                                <div className="text-xs text-blue-600">Connected • Last sync: 2 min ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Diagnosis Codes */}
                        <div className="space-y-3">
                          <div className="text-sm font-semibold flex items-center justify-between">
                            Diagnosis Codes (ICD-10)
                            <Button variant="outline" size="sm" className="rounded-lg text-xs">
                              <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                              Add
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-green-50 border border-green-200 rounded-lg">
                              <div>
                                <div className="text-sm font-medium text-green-800">E11.9</div>
                                <div className="text-xs text-green-600">Type 2 Diabetes Mellitus</div>
                              </div>
                              <div className="text-xs text-green-700 font-medium">Primary</div>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-green-50 border border-green-200 rounded-lg">
                              <div>
                                <div className="text-sm font-medium text-green-800">I10</div>
                                <div className="text-xs text-green-600">Essential Hypertension</div>
                              </div>
                              <div className="text-xs text-green-700 font-medium">Secondary</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Procedure Codes */}
                        <div className="space-y-3">
                          <div className="text-sm font-semibold flex items-center justify-between">
                            Procedure Codes (CPT)
                            <Button variant="outline" size="sm" className="rounded-lg text-xs">
                              <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Edit
                            </Button>
                          </div>
                          <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="text-sm font-medium text-blue-800">99213</div>
                            <div className="text-xs text-blue-600">Office/Outpatient Visit - Established Patient</div>
                            <div className="text-xs text-blue-700 mt-1">Confidence: 95%</div>
                          </div>
                        </div>

                        {/* Validation Status */}
                        <div className="space-y-3">
                          <div className="text-sm font-semibold">Validation Status</div>
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-green-700">
                              <CheckCircle2 className="h-4 w-4" />
                              <span>Required fields complete</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-700">
                              <CheckCircle2 className="h-4 w-4" />
                              <span>Diagnosis codes validated</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-700">
                              <CheckCircle2 className="h-4 w-4" />
                              <span>Provider credentials verified</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-700">
                              <CheckCircle2 className="h-4 w-4" />
                              <span>EHR connection active</span>
                            </div>
                          </div>
                        </div>
                        
                        <Separator className="my-4" />
                        
                        {/* Send Actions */}
                        <div className="space-y-3">
                          <Button 
                            className="w-full rounded-xl h-12 font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" 
                            onClick={() => {
                              setIsSending(true);
                              setTimeout(() => {
                                setIsSending(false);
                                onNavClick('automations');
                                toast({ 
                                  title: "Note sent successfully", 
                                  description: `Clinical note delivered to ${selectedEhr || 'Epic'} • Patient chart updated` 
                                });
                              }, 3000);
                            }}
                          >
                            <Send className="h-5 w-5 mr-2" />
                            Send to {selectedEhr || 'Epic'}
                          </Button>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" className="rounded-lg h-9 text-sm">
                              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                              Save Draft
                            </Button>
                            <Button variant="outline" className="rounded-lg h-9 text-sm">
                              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Export PDF
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </section>

            {/* Automations Section */}
            <section id="automations" className={`screen ${active === "automations" ? "" : "hidden"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Wand2 className="h-5 w-5 text-gray-600" aria-hidden />
                    </div>
                    <span className="text-gray-900">Workflow Automations</span>
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Configure automatic workflows to streamline your practice operations.</p>
                  
                  {/* Status Bar */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-800">Automation Engine Active</div>
                          <div className="text-sm text-gray-600">4 workflows configured • Processing 850+ tasks/month</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="h-2 w-2 rounded-full bg-gray-500 animate-pulse"></div>
                        <span>Real-time monitoring</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {[
                    {
                      key: "patientInstructions",
                      title: "Auto-Generate Patient Instructions",
                      description: "Automatically create after-visit summaries and patient instructions based on the visit notes.",
                      enabled: automations.patientInstructions,
                      color: "green",
                      options: ["Email to Patient", "Send to Patient Portal", "Print Instructions"]
                    },
                    {
                      key: "followupReminders", 
                      title: "Schedule Follow-up Reminders",
                      description: "Set automatic reminders for patients who need follow-up appointments based on their diagnosis.",
                      enabled: automations.followupReminders,
                      color: "blue"
                    },
                    {
                      key: "labOrders",
                      title: "Lab Order Processing", 
                      description: "Automatically process and track lab orders mentioned in the current visit notes and send them to the lab.",
                      enabled: automations.labOrders,
                      color: "gray"
                    },
                    {
                      key: "prescriptionRefills",
                      title: "Prescription Refill Alerts",
                      description: "Alert when patients are due for prescription refills and send prescription orders from the current visit to pharmacy.",
                      enabled: automations.prescriptionRefills,
                      color: "orange"
                    }
                  ].map((automation, index) => (
                    <Card key={automation.key} className="border-2 bg-gradient-to-br from-background to-gray-50/20 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                              automation.enabled 
                                ? `bg-${automation.color}-100` 
                                : 'bg-gray-100'
                            }`}>
                              <div className={`h-3 w-3 rounded-full ${
                                automation.enabled 
                                  ? `bg-${automation.color}-500` 
                                  : 'bg-gray-400'
                              }`}></div>
                            </div>
                            <div>
                              <CardTitle className="text-lg text-gray-900">{automation.title}</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">{automation.description}</p>
                              {automation.options && automation.enabled && (
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {automation.options.map((option, idx) => (
                                    <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                      {option}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          <Switch 
                            checked={automation.enabled} 
                            onCheckedChange={(checked) => 
                              setAutomations(prev => ({ ...prev, [automation.key]: checked }))
                            }
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm" className="rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50">
                            <Settings className="h-3 w-3 mr-2" />
                            Configure
                          </Button>
                          {automation.enabled && (
                            <div className="text-xs text-green-600 flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              Active
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Configure additional automations in settings
                  </div>
                  <Button className="rounded-lg bg-gray-600 hover:bg-gray-700" onClick={() => onNavClick('agent')}>
                    <Bot className="h-4 w-4 mr-2" />
                    Continue to AI Agent Setup
                  </Button>
                </div>
              </div>
            </section>

            {/* AI Agent Section */}
            <section id="agent" className={`screen ${active === "agent" ? "" : "hidden"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-gray-600" aria-hidden />
                    </div>
                    <span className="text-gray-900">AI Agent Configuration</span>
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg">Configure your AI agent to handle patient communications and administrative tasks.</p>
                  
                  {/* Agent Status */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <Bot className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">AI Agent Ready</div>
                          <div className="text-sm text-gray-600">Trained on medical protocols • 24/7 availability • Multi-language support</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-800">Performance Score</div>
                        <div className="text-2xl font-bold text-gray-600">95%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {[
                    {
                      key: 'followups',
                      title: "Follow-up Call Automation",
                      description: "AI agent makes post-visit follow-up calls to check on patient recovery, medication adherence, reduce no-shows, and confirm upcoming appointments.",
                      enabled: agent.followups,
                      icon: "phone",
                      stats: "150+ calls/month • 40% reduction in no-shows"
                    },
                    {
                      key: 'inbound', 
                      title: "Inbound Call Screening",
                      description: "Screen and triage incoming patient calls, handling routine questions and scheduling requests.",
                      enabled: agent.inbound,
                      icon: "phone-incoming",
                      stats: "85% automation rate"
                    },
                    {
                      key: 'outreach',
                      title: "Patient Outreach Campaigns", 
                      description: "Proactive outreach for preventive care reminders, wellness checks, and health education.",
                      enabled: agent.outreach,
                      icon: "megaphone",
                      stats: "300+ patients/month"
                    },
                    {
                      key: 'support',
                      title: "24/7 Patient Support",
                      description: "Round-the-clock AI support for urgent patient questions and basic medical guidance.",
                      enabled: agent.support,
                      icon: "clock",
                      stats: "24/7 availability"
                    }
                  ].map((feature, index) => (
                    <Card key={feature.key} className="border-2 bg-gradient-to-br from-background to-gray-50/20 hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                              feature.enabled 
                                ? 'bg-gray-100 border-2 border-gray-200' 
                                : 'bg-gray-100 border-2 border-gray-200'
                            }`}>
                              {feature.icon === 'phone' && <svg className={`h-5 w-5 ${feature.enabled ? 'text-gray-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                              {feature.icon === 'phone-incoming' && <svg className={`h-5 w-5 ${feature.enabled ? 'text-gray-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                              {feature.icon === 'megaphone' && <svg className={`h-5 w-5 ${feature.enabled ? 'text-gray-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>}
                              {feature.icon === 'clock' && <svg className={`h-5 w-5 ${feature.enabled ? 'text-gray-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                            </div>
                            <div>
                              <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                              <div className="mt-2 text-xs text-gray-600 font-medium">{feature.stats}</div>
                            </div>
                          </div>
                          <Switch 
                            checked={feature.enabled}
                            onCheckedChange={(checked) => 
                              setAgent(prev => ({ ...prev, [feature.key]: checked }))
                            }
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm" className="rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50">
                            <Settings className="h-3 w-3 mr-2" />
                            Configure Agent
                          </Button>
                          {feature.enabled ? (
                            <div className="text-xs text-green-600 flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                              Online
                            </div>
                          ) : (
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                              Offline
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Advanced agent training available in settings
                  </div>
                  <Button className="rounded-lg bg-teal-600 hover:bg-teal-700" onClick={() => onNavClick('dashboard')}>
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics Dashboard
                  </Button>
                </div>
              </div>
            </section>

            {/* Dashboard Section */}
            <section id="dashboard" className={`screen ${active === "dashboard" ? "" : "hidden"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
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

        {/* Demo Conversion Popup */}
        <AlertDialog open={showDemoPopup} onOpenChange={setShowDemoPopup}>
          <AlertDialogContent className="max-w-md mx-4 sm:mx-auto">
            <AlertDialogHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center shadow-lg">
                <CalendarDays className="h-8 w-8 text-white" />
              </div>
              <AlertDialogTitle className="text-lg sm:text-xl font-semibold">
                Ready to see S10.AI in action?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-sm sm:text-base leading-relaxed">
                You've explored our product walkthrough. Now discover how S10.AI can transform your practice with a personalized demo tailored to your specialty.
                <br /><br />
                <strong>Get your custom demo and see:</strong>
                <ul className="text-left mt-2 space-y-1 text-sm">
                  <li>• Live AI transcription with your specialty templates</li>
                  <li>• EHR integration setup for your practice</li>
                  <li>• ROI calculations specific to your workflow</li>
                  <li>• Implementation timeline and support options</li>
                </ul>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex-col space-y-2 sm:space-y-0 sm:flex-row gap-2">
              <AlertDialogCancel 
                onClick={handleClosePopup} 
                className="order-2 sm:order-1 w-full sm:w-auto"
              >
                Maybe Later
              </AlertDialogCancel>
              <AlertDialogAction 
                onClick={handleBookDemo}
                className="order-1 sm:order-2 w-full sm:w-auto bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl font-semibold px-6 transition-all"
              >
                Book Free Demo
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default ProductWalkthrough;