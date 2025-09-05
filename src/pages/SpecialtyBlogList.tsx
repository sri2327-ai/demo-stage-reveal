import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { specialties } from "@/data/specialties";
import { useState } from "react";
import { 
  Stethoscope, 
  FileText, 
  CreditCard, 
  ClipboardList, 
  Hash, 
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Activity,
  BarChart3,
  TestTube,
  Search
} from "lucide-react";

// Specialty Resources Component
const SpecialtyResourcesSection = ({ specialty }: { specialty: any }) => {
  const [activeTab, setActiveTab] = useState('Diagnoses');
  const [searchQuery, setSearchQuery] = useState('');

  const resourceData = {
    'Diagnoses': [
      { title: 'Myocardial Infarction', description: 'Commonly known as a heart attack, occurs when blood flow to part of the heart is blocked.' },
      { title: 'Atrial Fibrillation', description: 'An irregular and often rapid heart rhythm that can lead to blood clots in the heart.' },
      { title: 'Hypertension', description: 'Persistently high blood pressure that can damage arteries and organs over time.' },
      { title: 'Coronary Artery Disease', description: 'Blockage in the arteries supplying the heart muscle with blood and oxygen.' },
      { title: 'Heart Failure', description: 'Condition where the heart cannot pump blood effectively to meet the body\'s needs.' },
      { title: 'Arrhythmia', description: 'Abnormal heart rhythm that can be too fast, too slow, or irregular.' }
    ],
    'ICD-10 Codes': [
      { code: 'I21.9', description: 'Acute myocardial infarction, unspecified - used when specific details are unavailable' },
      { code: 'I48.0', description: 'Atrial fibrillation - irregular heart rhythm diagnosis code' },
      { code: 'I10', description: 'Essential (primary) hypertension - high blood pressure without known cause' },
      { code: 'I25.10', description: 'Atherosclerotic heart disease of native coronary artery without angina pectoris' },
      { code: 'I50.9', description: 'Heart failure, unspecified - when specific type of heart failure is not documented' },
      { code: 'I49.9', description: 'Cardiac arrhythmia, unspecified - abnormal heart rhythm not otherwise specified' }
    ],
    'CPT Codes': [
      { code: '93000', description: 'Electrocardiogram, complete - standard 12-lead ECG interpretation and report' },
      { code: '99214', description: 'Office visit for established patient - moderate complexity evaluation and management' },
      { code: '92928', description: 'Percutaneous transluminal coronary angioplasty - balloon catheter procedure' },
      { code: '93306', description: 'Echocardiography, transthoracic, real-time with image documentation' },
      { code: '93015', description: 'Cardiovascular stress test using maximal or submaximal treadmill or bicycle exercise' }
    ],
    'Templates': [
      { title: 'Cardiology Initial Visit', description: 'Comprehensive template for new patient cardiology consultations and evaluations.' },
      { title: 'Post-MI Follow-up', description: 'Structured template for monitoring patients after myocardial infarction recovery.' },
      { title: 'Hypertension Management', description: 'Template for ongoing blood pressure monitoring and medication management.' },
      { title: 'Heart Failure Assessment', description: 'Clinical template for evaluating and managing heart failure patients.' },
      { title: 'Pre-operative Cardiac Clearance', description: 'Template for cardiac risk assessment before non-cardiac surgery.' }
    ],
    'Abbreviations': [
      { abbreviation: 'ECG/EKG', description: 'Electrocardiogram - test that checks for problems with electrical activity of the heart' },
      { abbreviation: 'BP', description: 'Blood pressure - the pressure of blood pushing against arterial walls' },
      { abbreviation: 'CAD', description: 'Coronary artery disease - narrowing or blockage in heart arteries' },
      { abbreviation: 'CHF', description: 'Congestive heart failure - condition where heart cannot pump blood effectively' },
      { abbreviation: 'MI', description: 'Myocardial infarction - medical term for heart attack' },
      { abbreviation: 'AF', description: 'Atrial fibrillation - irregular heart rhythm affecting the upper chambers' }
    ],
    'Phrases': [
      { phrase: 'Acute on chronic heart failure', description: 'Sudden worsening of long-term heart failure condition requiring immediate attention.' },
      { phrase: 'Aortic valve stenosis', description: 'Narrowing of the aortic valve opening that restricts blood flow from the heart.' },
      { phrase: 'Non-ST-elevation myocardial infarction', description: 'Type of heart attack without ST-segment elevation on ECG.' },
      { phrase: 'Ejection fraction reduced', description: 'Heart failure with reduced pumping capacity of the left ventricle.' },
      { phrase: 'Unstable angina pectoris', description: 'Chest pain due to reduced blood flow to heart muscle, unpredictable pattern.' }
    ],
    'Medical Prefix': [
      { prefix: 'Cardi-', description: 'Pertaining to the heart. Example: Cardiology (study of the heart).' },
      { prefix: 'Tachy-', description: 'Fast, rapid. Example: Tachycardia (fast heart rate above 100 bpm).' },
      { prefix: 'Brady-', description: 'Slow. Example: Bradycardia (slow heart rate below 60 bpm).' },
      { prefix: 'Angio-', description: 'Relating to blood vessels. Example: Angioplasty (procedure to open blocked vessels).' },
      { prefix: 'Peri-', description: 'Around, surrounding. Example: Pericarditis (inflammation around the heart).' }
    ],
    'Medical Suffix': [
      { suffix: '-ectomy', description: 'Surgical removal. Example: Atherectomy (removal of plaque from arteries).' },
      { suffix: '-itis', description: 'Inflammation. Example: Myocarditis (inflammation of heart muscle).' },
      { suffix: '-megaly', description: 'Enlargement. Example: Cardiomegaly (enlarged heart).' },
      { suffix: '-sclerosis', description: 'Hardening. Example: Atherosclerosis (hardening of arteries).' },
      { suffix: '-stenosis', description: 'Narrowing. Example: Aortic stenosis (narrowing of aortic valve).' }
    ],
    'Medical Root Words': [
      { root: 'Cardi', description: 'Heart. Example: Cardiomyopathy (disease of heart muscle).' },
      { root: 'Angio', description: 'Vessel. Example: Angiogram (imaging of blood vessels).' },
      { root: 'Vasc', description: 'Vessel. Example: Vascular (relating to blood vessels).' },
      { root: 'Myo', description: 'Muscle. Example: Myocardial (relating to heart muscle).' },
      { root: 'Arterio', description: 'Artery. Example: Arteriosclerosis (hardening of arteries).' }
    ],
    'Clinical Charts and Timelines': [
      { title: 'Cardiac Event Timeline', description: 'Comprehensive timeline tracking major cardiac events, procedures, and treatments over time.' },
      { title: 'ECG/EKG Rhythm Strip Analysis', description: 'Visual chart displaying heart electrical activity patterns and rhythm interpretations.' },
      { title: 'Blood Pressure Monitoring Chart', description: 'Systematic tracking of blood pressure readings with trend analysis and medication adjustments.' },
      { title: 'Cardiac Catheterization Report', description: 'Detailed procedure timeline with findings, interventions, and post-procedure monitoring.' },
      { title: 'Heart Failure Progression Chart', description: 'Visual timeline showing heart failure symptoms, treatments, and functional capacity changes.' }
    ],
    'Lab Test Results': [
      { test: 'Troponin I/T Levels', description: 'Cardiac biomarkers elevated during heart muscle damage, crucial for MI diagnosis.' },
      { test: 'BNP/NT-proBNP', description: 'Brain Natriuretic Peptide levels used to diagnose and monitor heart failure severity.' },
      { test: 'Lipid Panel Complete', description: 'Comprehensive cholesterol and triglyceride assessment for cardiovascular risk evaluation.' },
      { test: 'CK-MB (Creatine Kinase)', description: 'Heart-specific enzyme elevated during myocardial injury and heart attacks.' },
      { test: 'D-Dimer', description: 'Blood clot breakdown product, elevated in conditions like pulmonary embolism.' },
      { test: 'Homocysteine Level', description: 'Amino acid associated with increased cardiovascular disease risk when elevated.' }
    ]
  };

  const tabs = [
    { key: 'Diagnoses', label: 'Diagnoses', icon: Stethoscope },
    { key: 'ICD-10 Codes', label: 'ICD-10 Codes', icon: Hash },
    { key: 'CPT Codes', label: 'CPT Codes', icon: CreditCard },
    { key: 'Templates', label: 'Templates', icon: FileText },
    { key: 'Abbreviations', label: 'Abbreviations', icon: MessageSquare },
    { key: 'Phrases', label: 'Phrases', icon: ClipboardList },
    { key: 'Medical Prefix', label: 'Prefix', icon: ChevronRight },
    { key: 'Medical Suffix', label: 'Suffix', icon: ChevronLeft },
    { key: 'Medical Root Words', label: 'Root Words', icon: Activity },
    { key: 'Clinical Charts and Timelines', label: 'Charts', icon: BarChart3 },
    { key: 'Lab Test Results', label: 'Lab Results', icon: TestTube }
  ];

  const currentData = resourceData[activeTab as keyof typeof resourceData] || [];
  const filteredData = currentData.filter(item => {
    const searchText = searchQuery.toLowerCase();
    const itemText = (
      (item as any).title || 
      (item as any).code || 
      (item as any).phrase || 
      (item as any).abbreviation ||
      (item as any).prefix ||
      (item as any).suffix ||
      (item as any).root ||
      (item as any).test ||
      ''
    ).toLowerCase() + ' ' + item.description.toLowerCase();
    return itemText.includes(searchText);
  });

  return (
    <div className="mt-16 pt-12 border-t border-border/50">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gradient mb-4 sm:mb-6">{specialty.name} Resources</h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed">
          Explore comprehensive {specialty.name.toLowerCase()} resources including diagnoses, medical codes, clinical templates, terminology, and lab results tailored for modern cardiovascular practice.
        </p>
      </div>

      {/* Tab Navigation - Responsive Horizontal Scroll */}
      <div className="mb-8 px-4">
        <div className="flex gap-2 lg:gap-3 overflow-x-auto scrollbar-hide pb-4 lg:flex-wrap lg:justify-center lg:overflow-x-visible">
          {tabs.map(tab => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-3 lg:py-4 rounded-xl font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.key
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105 border-2 border-primary'
                    : 'bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground hover:scale-105 border-2 border-transparent hover:border-primary/20'
                }`}
              >
                <IconComponent size={18} className="flex-shrink-0" />
                <span className="text-sm lg:text-base font-semibold">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search Input */}
      <div className="max-w-3xl mx-auto mb-8 px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={`Search ${activeTab.toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-base rounded-xl border-2 border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-elegant p-6 sm:p-8 lg:p-10 mx-4 min-h-[600px]">
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-3">{activeTab}</h3>
          <p className="text-muted-foreground text-base lg:text-lg">
            {filteredData.length} {filteredData.length === 1 ? 'result' : 'results'} 
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {filteredData.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">No results found</h4>
            <p className="text-muted-foreground mb-1">No results found for "{searchQuery}"</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search terms or browse different categories</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredData.map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/30 hover:border-primary/40 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-2">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg lg:text-xl mb-3 text-gradient group-hover:scale-105 transition-transform duration-300 leading-tight">
                      {(item as any).title || 
                       (item as any).code || 
                       (item as any).phrase || 
                       (item as any).abbreviation ||
                       (item as any).prefix ||
                       (item as any).suffix ||
                       (item as any).root ||
                       (item as any).test}
                    </h4>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button 
                      className="w-full premium-button rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-md"
                      onClick={() => console.log('View details:', item)}
                    >
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* SEO Content - Hidden but crawlable */}
      <div className="sr-only">
        <h3>{specialty.name} Medical Resources Directory</h3>
        <p>Comprehensive collection of {specialty.name.toLowerCase()} medical resources including:</p>
        <ul>
          <li>Common {specialty.name.toLowerCase()} diagnoses and conditions</li>
          <li>ICD-10 diagnostic codes for cardiovascular conditions</li>
          <li>CPT procedure codes for cardiac interventions</li>
          <li>Clinical documentation templates</li>
          <li>Medical abbreviations and terminology</li>
          <li>Common medical phrases in cardiology</li>
          <li>Medical prefixes, suffixes, and root words</li>
          <li>Clinical charts and patient timelines</li>
          <li>Laboratory test results and interpretations</li>
        </ul>
        {Object.entries(resourceData).map(([category, items]) => (
          <div key={category}>
            <h4>{category}</h4>
            {items.map((item, index) => (
              <div key={index}>
                <h5>{(item as any).title || (item as any).code || (item as any).phrase || (item as any).abbreviation || (item as any).prefix || (item as any).suffix || (item as any).root || (item as any).test}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default function SpecialtyBlogList(props: {
  slug?: string;
} = {}) {
  const params = useParams();
  const finalSlug = props.slug ?? params.slug;
  const specialty = specialties.find(s => s.slug === finalSlug);
  if (!specialty) {
    return <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Specialty not found</h1>
        <Button asChild><Link to="/specialties">Back to Specialty Hub</Link></Button>
      </div>;
  }
  return <>
      <Helmet>
        <title>{`${specialty.name} Blogs: AI scribe & agents`}</title>
        <meta name="description" content={`Explore ${specialty.name} posts about AI medical scribe workflows, coding, and patient engagement.`} />
        <link rel="canonical" href={`/${specialty.slug}`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-subtle">
        <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/20">
          <div className="container">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-3">{specialty.name}</h1>
            <p className="text-muted-foreground max-w-2xl mb-6">{specialty.description}</p>
            <Button size="lg" className="premium-button rounded-full px-8 py-3 text-base font-semibold hover:scale-105 transition-all duration-300 mb-6">
              Book a Demo
            </Button>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {specialty.tags.map(t => <Badge key={t} variant="outline" className="rounded-full">{t}</Badge>)}
            </div>
          </div>
        </section>

        {/* S10.ai Platform Overview */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-purple-500/8 to-blue-500/8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="container relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gradient mb-4 sm:mb-6 px-4">
                  S10.ai — The AI-powered assistant transforming {specialty.name.toLowerCase()} care
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
                  Boost efficiency, reduce administrative burden, and improve patient outcomes with S10.ai. Our platform combines AI Scribe, AI Agents, and intelligent automation to streamline documentation, coding, and patient communication—all within your existing EHR.
                </p>
              </div>
              
              <div className="grid gap-6 sm:gap-8 mb-8 lg:mb-12 px-4">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1 h-full">
                    <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-gradient">AI Pre-Charting for {specialty.name}</h3>
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed flex-grow">Prepare for patient visits in minutes, not hours. S10.ai's AI Scribe + AI Agents deliver instant clinical priorities, updates, and patient insights—giving clinicians a complete, actionable view of every patient.</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1 h-full">
                    <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-gradient">Context-Aware Clinical Notes</h3>
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed flex-grow">S10.ai automatically surfaces key details from past visits and customizes notes for today's encounter. Always accurate. Always relevant.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1 h-full">
                    <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-gradient">Intelligent Coding & Billing</h3>
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed flex-grow">Capture the full complexity of care without manual effort. AI-driven coding ensures accurate ICD-10, HCC, and E/M assignments, reducing errors and optimizing revenue.</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1 h-full">
                    <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-gradient">AI Phone & Chat Agents</h3>
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed flex-grow">Manage patient calls, messages, confirmations, and follow-ups effortlessly. Fully integrated with your EHR, AI Chat and Phone Agents triage inquiries, provide instant answers, and log summaries automatically.</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Custom Workflow Automation Card */}
                <Card className="bg-white backdrop-blur-sm border border-white/30 shadow-elegant hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl lg:text-2xl mb-4 text-gradient">Custom Workflow Automation</h3>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">Automate repetitive tasks like referrals, insurance verification, and lab notifications. HIPAA-compliant and tailored to {specialty.name.toLowerCase()} workflows for maximum impact.</p>
                  </CardContent>
                </Card>
              </div>

                {/* EMR Integration Highlight Card */}
                <Card className="bg-white backdrop-blur-sm border border-white/40 shadow-elegant mx-4 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 sm:p-8 lg:p-10 text-center relative z-10">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 lg:w-10 lg:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl lg:text-3xl mb-6 text-gradient">Seamless {specialty.name}-Specific EMR & App Integrations</h3>
                    <p className="text-muted-foreground text-base lg:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">Connects with your {specialty.name.toLowerCase()}-specific EMR and 7,000+ productivity apps. No screen-switching. No duplicate entries. Just smarter workflows.</p>
                    
                    {/* Integration highlights */}
                    
                    
                    <Button className="premium-button rounded-full px-8 py-3 text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                      Read about integrations
                    </Button>
                  </CardContent>
                </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-bl from-blue-500/8 to-purple-500/8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent"></div>
          <div className="container relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 lg:mb-16 px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gradient mb-4 sm:mb-6">
                  Results {specialty.name.toLowerCase()} practices love
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real metrics from practices using S10.ai to transform their workflows
                </p>
              </div>
              <div className="grid gap-4 sm:gap-6 px-4">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">~80%</div>
                    <p className="text-muted-foreground text-sm lg:text-base font-medium">clinician adoption</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">2.2</div>
                    <p className="text-muted-foreground text-sm lg:text-base font-medium">hours saved per day</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">34%</div>
                    <p className="text-muted-foreground text-sm lg:text-base font-medium">more ICD-10 codes captured</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">45%</div>
                    <p className="text-muted-foreground text-sm lg:text-base font-medium">fewer manual administrative tasks</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">3×</div>
                    <p className="text-muted-foreground text-sm lg:text-base font-medium">faster patient follow-ups</p>
                  </CardContent>
                </Card>
                
                  <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                    <CardContent className="p-6 lg:p-8 text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">Improved</div>
                      <p className="text-muted-foreground text-sm lg:text-base font-medium">patient engagement via AI Chat & Phone Agents</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Designed by Experts Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-tr from-purple-500/8 to-blue-500/8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="container relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 lg:mb-16 px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gradient mb-4 sm:mb-6">
                  Designed by {specialty.name.toLowerCase()} experts, for {specialty.name.toLowerCase()} clinicians
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  We build AI in partnership with clinical leaders to enhance care, streamline operations, and evolve based on real-world feedback.
                </p>
              </div>
              
              <div className="grid gap-6 sm:gap-8 px-4">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-gradient">Open feedback channels</h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">Direct communication with clinicians and onsite experts for continuous improvement</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-gradient">Hands-on training</h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">Comprehensive training during pilots and rollout phases</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-gradient">Rapid implementation</h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">Quick deployment of updates and change requests based on user needs</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/30 hover:border-primary/30 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-gradient">Continuous support</h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">24/7 support via phone, email, and chat—optimized for AI Chat Agents</p>
                  </CardContent>
                </Card>
                </div>

                {/* Additional support features */}
                <Card className="bg-white backdrop-blur-sm border border-white/30 shadow-elegant hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl lg:text-2xl mb-4 text-gradient">Quality Assurance & Compliance</h3>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">HIPAA-compliant infrastructure with continuous monitoring, regular updates, and dedicated compliance team ensuring your practice meets all regulatory requirements.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gradient mb-4">{specialty.name} Insights & Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialty.posts.map(p => <Card key={p.slug} className="bg-card border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    {p.image && <div className="-mx-6 mb-4">
                        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-t-lg">
                          <img src={p.image} alt={p.imageAlt ?? `${p.title} – ${specialty.name}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                        </AspectRatio>
                      </div>}
                    <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span>{new Date(p.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{p.readingTime}</span>
                    </div>
                    <Button asChild className="premium-button rounded-full px-4"><Link to={`/${specialty.slug}/${p.slug}`}>Read post</Link></Button>
                  </CardContent>
                </Card>)}
            </div>
            
            {/* Interactive Resources Section */}
            <SpecialtyResourcesSection specialty={specialty} />
            
            <div className="mt-8">
              <Button variant="ghost" asChild><Link to="/specialties">← Back to Specialty Hub</Link></Button>
            </div>
          </div>
        </section>
      </div>
    </>;
}