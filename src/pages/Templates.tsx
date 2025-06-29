import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, FileText, Users, Calendar, Share2, Eye, ArrowRight, CheckCircle, Clock, Star, Download, Copy, BookOpen, Stethoscope } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { CallToAction } from '@/components/CallToAction';

// Enhanced mock data with better SEO structure
const mockTemplates = [{
  id: 1,
  slug: 'nhs-gp-consultation-template',
  title: "NHS GP Consultation Template",
  description: "Comprehensive tool designed for General Practitioners to document patient consultations effectively following NHS guidelines and best practices.",
  specialty: "General Practice",
  category: "Consultation",
  uses: 3275,
  rating: 4.9,
  lastUpdated: "2025-01-15",
  tags: ["GP", "NHS", "Consultation", "Primary Care", "SOAP Notes"],
  author: "Dr. Sarah Johnson",
  authorSpecialty: "General Practitioner",
  authorCredentials: "MBBS, MRCGP",
  estimatedTime: "5-10 minutes",
  complexity: "Beginner",
  structure: ["Patient Demographics & Registration", "Chief Complaint & Presenting Problem", "History of Present Illness (HPI)", "Past Medical History & Medications", "Social & Family History", "Review of Systems", "Physical Examination Findings", "Clinical Assessment & Differential", "Investigation & Management Plan", "Patient Education & Follow-up", "Coding & Administrative Notes"],
  clinicalBenefits: ["Reduces documentation time by 40%", "Ensures comprehensive patient history capture", "Improves clinical decision-making workflow", "Maintains NHS coding compliance"],
  sampleContent: `PATIENT: John Smith, DOB: 15/03/1978, NHS No: 123 456 7890

PRESENTING COMPLAINT:
45-year-old male presents with persistent productive cough and mild shortness of breath, ongoing for 2 weeks.

HISTORY OF PRESENT ILLNESS:
- Onset: Gradual over 2 weeks
- Character: Productive cough with clear/white sputum
- Associated symptoms: Mild dyspnea on exertion, no chest pain
- Aggravating factors: Cold weather, physical activity
- Relieving factors: Rest, warm drinks
- No fever, night sweats, or weight loss reported
- No recent travel or sick contacts

PAST MEDICAL HISTORY:
- Hypertension (diagnosed 2015) - well controlled
- No previous respiratory illness
- No known drug allergies

CURRENT MEDICATIONS:
- Amlodipine 5mg OD
- No recent antibiotic use

SOCIAL HISTORY:
- Non-smoker (never smoked)
- Alcohol: <14 units/week
- Occupation: Office worker
- Lives with spouse, no children

EXAMINATION:
Vital Signs: BP 125/78, HR 76, RR 16, SpO2 98% room air, Temp 36.8°C
General: Well-appearing, no acute distress
Respiratory: Clear breath sounds bilaterally, no wheeze or crackles
Cardiovascular: Regular rhythm, no murmurs
ENT: Mild throat erythema, no exudate

ASSESSMENT:
Most likely viral upper respiratory tract infection with post-viral cough
Differential: Bacterial LRTI (less likely given absence of fever/purulent sputum)

PLAN:
1. Symptomatic treatment - honey and lemon, adequate hydration
2. Safety netting - return if symptoms worsen or persist >4 weeks
3. Consider CXR if no improvement in 2 weeks
4. Continue current antihypertensive medication
5. Patient education provided regarding expected course

FOLLOW-UP: PRN or in 2 weeks if no improvement
CODES: H05z.00 (Upper respiratory tract infection, unspecified)`
}, {
  id: 2,
  slug: 'cardiology-assessment-template',
  title: "Comprehensive Cardiology Assessment Template",
  description: "Specialized template for cardiovascular examinations, risk stratification, and evidence-based treatment planning for cardiac patients.",
  specialty: "Cardiology",
  category: "Assessment",
  uses: 1842,
  rating: 4.8,
  lastUpdated: "2025-01-10",
  tags: ["Cardiology", "Heart Disease", "Risk Assessment", "ECG", "Echocardiogram"],
  author: "Dr. Michael Chen",
  authorSpecialty: "Consultant Cardiologist",
  authorCredentials: "MD, FACC, FESC",
  estimatedTime: "15-20 minutes",
  complexity: "Intermediate",
  structure: ["Cardiovascular History Taking", "Chest Pain Characterization", "Cardiovascular Risk Factor Assessment", "Functional Capacity Evaluation", "Physical Examination Protocol", "ECG Interpretation Framework", "Diagnostic Test Planning", "Risk Stratification Tools", "Evidence-Based Treatment Plan", "Patient Education & Lifestyle", "Follow-up & Monitoring Plan"],
  clinicalBenefits: ["Standardizes cardiac risk assessment", "Improves diagnostic accuracy", "Ensures guideline-compliant care", "Facilitates MDT communication"],
  sampleContent: `CARDIOVASCULAR ASSESSMENT

PATIENT: Maria Rodriguez, 58F, DOB: 22/07/1966

PRESENTING COMPLAINT:
Central chest discomfort on exertion, progressively worsening over 3 months

CARDIOVASCULAR HISTORY:
- Chest pain: Retrosternal, pressure-like, 6/10 severity
- Triggers: Walking uphill, stairs (>2 flights)
- Duration: 5-10 minutes, resolves with rest
- No associated nausea, diaphoresis, or radiation
- Functional class: NYHA Class II symptoms

RISK FACTORS:
✓ Hypertension (10 years, on treatment)
✓ Type 2 Diabetes (5 years, HbA1c 7.2%)
✓ Hyperlipidemia (total cholesterol 6.8 mmol/L)
✓ Family history: Father MI age 62
✓ Postmenopausal (not on HRT)
✗ Smoking history: Never smoked
✗ Known CAD or stroke

QRISK3 Score: 28% (10-year CV risk)

EXAMINATION:
- BP: 142/88 mmHg (average of 3 readings)
- HR: 78 bpm, regular
- BMI: 29.2 kg/m²
- Heart sounds: S1 S2 normal, no murmurs/gallops
- Chest: Clear to auscultation
- Peripheral pulses: 2+ throughout
- No peripheral edema or JVD

ECG: Normal sinus rhythm, no acute changes, old inferior Q waves

ASSESSMENT:
1. Stable angina pectoris - high probability
2. Hypertension - suboptimal control
3. Type 2 diabetes with cardiovascular risk
4. Dyslipidemia requiring optimization

DIAGNOSTIC PLAN:
1. Exercise stress test or CTCA (patient preference)
2. Echocardiogram to assess LV function
3. Lipid profile, HbA1c, renal function
4. Consider coronary angiography if high-risk features

TREATMENT PLAN:
1. Antiplatelet: Aspirin 75mg OD
2. Statin: Atorvastatin 40mg OD
3. ACE inhibitor: Ramipril 2.5mg OD (start low)
4. Beta-blocker: Metoprolol 25mg BD (if no contraindications)
5. GTN spray PRN for chest pain

LIFESTYLE COUNSELING:
- Cardiac rehabilitation referral
- Dietary advice (Mediterranean diet)
- Weight management (target BMI <25)
- Regular moderate exercise program
- Diabetes self-management education

FOLLOW-UP: 2 weeks (medication tolerance), then 6 weeks with results`
}, {
  id: 3,
  slug: 'mental-health-assessment-template',
  title: "Mental Health Assessment Template",
  description: "Comprehensive psychiatric evaluation template for mental health professionals, including risk assessment and treatment planning frameworks.",
  specialty: "Psychiatry",
  category: "Assessment",
  uses: 2156,
  rating: 4.7,
  lastUpdated: "2025-01-08",
  tags: ["Mental Health", "Psychiatry", "Risk Assessment", "DSM-5", "Therapy Planning"],
  author: "Dr. Lisa Rodriguez",
  authorSpecialty: "Consultant Psychiatrist",
  authorCredentials: "MD, MRCPsych",
  estimatedTime: "30-45 minutes",
  complexity: "Advanced",
  structure: ["Mental Status Examination", "Psychiatric History Taking", "Risk Assessment Protocol", "Substance Use Screening", "Cognitive Assessment", "Psychosocial Formulation", "DSM-5 Diagnostic Criteria", "Treatment Planning Framework", "Safety Planning Protocol", "Capacity Assessment", "Discharge Planning"],
  clinicalBenefits: ["Standardizes mental health assessments", "Improves risk identification", "Ensures comprehensive evaluation", "Facilitates treatment planning"],
  sampleContent: `MENTAL HEALTH ASSESSMENT

PATIENT: James Thompson, 34M, DOB: 12/11/1989

REFERRAL SOURCE: GP - increased anxiety and low mood

PRESENTING COMPLAINT:
"I've been feeling anxious all the time and can't sleep properly for the past 3 months"

HISTORY OF PRESENTING ILLNESS:
- Onset: Gradual over 3 months, following work restructure
- Symptoms: Persistent worry, restlessness, fatigue, sleep disturbance
- Anxiety: Generalized, focusing on work performance and finances
- Mood: Low mood, anhedonia, reduced concentration
- Sleep: Initial insomnia, waking 3-4 times nightly
- Appetite: Reduced, 5kg weight loss
- Energy: Significantly reduced, struggling with daily tasks

MENTAL STATUS EXAMINATION:
- Appearance: Casually dressed, appears tired, good hygiene
- Behavior: Cooperative, fidgety, maintains eye contact
- Speech: Normal rate and volume, coherent
- Mood: "Anxious and down" (subjective)
- Affect: Anxious, congruent with stated mood
- Thought process: Goal-directed, some circumstantiality
- Thought content: Excessive worry re: work/finances, no delusions
- Perceptions: No hallucinations reported or observed
- Cognition: Alert, oriented x3, concentration impaired
- Insight: Good - recognizes need for help
- Judgment: Intact

RISK ASSESSMENT:
Suicide Risk: LOW
- No active suicidal ideation currently
- No previous attempts or self-harm
- Protective factors: supportive partner, employed, future goals
- Some passive thoughts "better off dead" when stressed

Self-Harm Risk: LOW
- No history of deliberate self-harm
- No current urges or plans

Risk to Others: NONE
- No thoughts of harming others
- No history of violence

PSYCHIATRIC HISTORY:
- Previous episodes: Brief anxiety period during university (2010)
- Hospitalizations: None
- Previous treatment: Brief counseling at university
- Family history: Mother - depression, treated with antidepressants

SUBSTANCE USE:
- Alcohol: 2-3 units twice weekly (within guidelines)
- Smoking: Never
- Illicit drugs: None currently, recreational cannabis in teens
- Caffeine: 4-5 cups coffee daily (increased recently)

FORMULATION:
34-year-old male presenting with mixed anxiety-depressive episode triggered by occupational stress. No significant psychiatric history. Good social support and insight. Low acute risk.

PROVISIONAL DIAGNOSIS:
F41.2 Mixed anxiety and depressive disorder (ICD-10)
309.28 Adjustment disorder with mixed anxiety and depressed mood (DSM-5)

TREATMENT PLAN:
Immediate (0-2 weeks):
1. Sleep hygiene education
2. Reduce caffeine intake
3. Brief mindfulness/relaxation techniques
4. GP liaison re: sick leave if needed

Short-term (2-8 weeks):
1. CBT referral - 8-12 sessions
2. Consider SSRI if no improvement (sertraline 50mg)
3. Occupational health referral
4. Regular exercise program

Medium-term (2-6 months):
1. Review medication response
2. Workplace stress management
3. Relapse prevention planning
4. Partner/family psychoeducation

SAFETY PLAN:
- Warning signs: Increased hopelessness, social withdrawal
- Coping strategies: Breathing exercises, partner support, walk
- Emergency contacts: Partner, Samaritans, Crisis team
- Next appointment: 2 weeks

CAPACITY: Has capacity to make treatment decisions

FOLLOW-UP: 2 weeks (medication review), 4 weeks (progress review)`
}];
const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 6;

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return mockTemplates.filter(template => {
      const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) || template.description.toLowerCase().includes(searchTerm.toLowerCase()) || template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) || template.author.toLowerCase().includes(searchTerm.toLowerCase()) || template.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty ? template.specialty === selectedSpecialty : true;
      const matchesCategory = selectedCategory ? template.category === selectedCategory : true;
      const matchesComplexity = selectedComplexity ? template.complexity === selectedComplexity : true;
      return matchesSearch && matchesSpecialty && matchesCategory && matchesComplexity;
    });
  }, [searchTerm, selectedSpecialty, selectedCategory, selectedComplexity]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage);
  const startIndex = (currentPage - 1) * templatesPerPage;
  const endIndex = startIndex + templatesPerPage;
  const currentTemplates = filteredTemplates.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedSpecialty, selectedCategory, selectedComplexity]);

  // Get unique values for filters
  const specialties = [...new Set(mockTemplates.map(t => t.specialty))];
  const categories = [...new Set(mockTemplates.map(t => t.category))];
  const complexities = [...new Set(mockTemplates.map(t => t.complexity))];

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    return pages;
  };
  if (selectedTemplate) {
    return <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12 max-w-7xl">
          {/* Breadcrumb Navigation - Responsive */}
          <nav className="mb-4 sm:mb-6 text-xs sm:text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 sm:space-x-2 text-gray-600 overflow-x-auto">
              <li><Link to="/" className="hover:text-[#387E89] transition-colors whitespace-nowrap">Home</Link></li>
              <li className="mx-1 sm:mx-2">/</li>
              <li><button onClick={() => setSelectedTemplate(null)} className="hover:text-[#387E89] transition-colors whitespace-nowrap">Templates</button></li>
              <li className="mx-1 sm:mx-2">/</li>
              <li className="text-[#143151] font-medium truncate">{selectedTemplate.title}</li>
            </ol>
          </nav>

          {/* Back Button - Responsive */}
          <Button variant="ghost" onClick={() => setSelectedTemplate(null)} className="mb-4 sm:mb-6 text-[#143151] hover:bg-[#387E89]/10 hover:text-[#387E89] transition-all text-sm sm:text-base">
            ← Back to Templates
          </Button>

          {/* Template Header - Responsive */}
          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                    <Stethoscope className="w-3 h-3 mr-1" />
                    {selectedTemplate.specialty}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                    <FileText className="w-3 h-3 mr-1" />
                    {selectedTemplate.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {selectedTemplate.estimatedTime}
                  </Badge>
                </div>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">{selectedTemplate.title}</h1>
                
                
                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm md:text-base">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">{selectedTemplate.uses.toLocaleString()} uses</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <span>{selectedTemplate.rating}/5.0</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">{selectedTemplate.complexity}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">Updated {new Date(selectedTemplate.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 lg:min-w-[180px] xl:min-w-[200px]">
                <Button variant="secondary" className="bg-white text-[#143151] hover:bg-gray-100 transition-all text-xs sm:text-sm flex-1 lg:flex-none">
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Share Template</span>
                  <span className="sm:hidden">Share</span>
                </Button>
                
                <Button className="bg-[#387E89] hover:bg-[#306b75] text-white transition-all text-xs sm:text-sm flex-1 lg:flex-none lg:w-full">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Use Template</span>
                  <span className="sm:hidden">Use</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Template Content Grid - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {/* Left Column - About & Author */}
            <div className="xl:col-span-1 space-y-6">
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-[#143151] flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    About This Template
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">{selectedTemplate.description}</p>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-[#143151] mb-3">Clinical Benefits</h4>
                    <ul className="space-y-2">
                      {selectedTemplate.clinicalBenefits.map((benefit, index) => <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>)}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-[#143151] mb-3">Created by</h4>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {selectedTemplate.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-[#143151]">{selectedTemplate.author}</p>
                        <p className="text-sm text-gray-600">{selectedTemplate.authorSpecialty}</p>
                        <p className="text-xs text-gray-500">{selectedTemplate.authorCredentials}</p>
                      </div>
                    </div>
                  </div>

                  
                </CardContent>
              </Card>
            </div>

            {/* Middle Column - Template Structure */}
            <div className="xl:col-span-1">
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-[#143151] flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Template Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedTemplate.structure.map((section, index) => <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#387E89]/5 transition-colors">
                        <div className="w-6 h-6 bg-[#387E89] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="font-medium text-[#143151] text-sm leading-relaxed">{section}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Actions */}
            <div className="xl:col-span-1">
              <Card className="bg-gradient-to-br from-[#387E89]/5 to-[#143151]/5 border border-[#387E89]/20 shadow-sm sticky top-6">
                <CardHeader>
                  <CardTitle className="text-xl text-[#143151] flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white transition-all">
                    <Eye className="w-4 h-4 mr-2" />
                    Use Template Now
                  </Button>
                  <Button variant="outline" className="w-full border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy to Clipboard
                  </Button>
                  <Button variant="outline" className="w-full border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Template
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sample Content - Responsive */}
          <Card className="bg-white border border-gray-200 shadow-sm mb-8 sm:mb-12">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#143151] flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                Sample Clinical Note
              </CardTitle>
              <p className="text-sm sm:text-base text-gray-600 mt-2">Example of a completed clinical note using this template</p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6 border-l-4 border-[#387E89]">
                <pre className="whitespace-pre-wrap text-xs sm:text-sm text-gray-800 font-mono leading-relaxed overflow-x-auto">
                  {selectedTemplate.sampleContent}
                </pre>
              </div>
              <div className="mt-3 sm:mt-4 text-xs text-gray-500">
                * This is a sample note for demonstration purposes. Patient information is fictional.
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <CallToAction />
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12 max-w-7xl">
        {/* Hero Section - Responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 backdrop-blur-sm rounded-full text-[#143151] text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-[#387E89]/20">
            <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Professional Medical Documentation
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#143151] mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            Clinical Templates & Documentation
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-3 sm:px-4 mb-6 sm:mb-8">
            Professional medical documentation templates created by healthcare experts. Streamline your clinical workflow with structured, comprehensive templates for every specialty and use case. Trusted by over 1,000+ clinicians worldwide.
          </p>
        </div>

        {/* Search and Filters - Responsive */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
            {/* Main Search Bar - Responsive */}
            <div className="relative group">
              <Search className="absolute left-4 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5 group-focus-within:text-[#387E89] transition-colors" />
              <Input type="text" placeholder="Search templates by specialty, condition, author..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 sm:pl-12 h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-[#387E89] focus:ring-4 focus:ring-[#387E89]/20 shadow-lg transition-all duration-200 text-gray-900 placeholder:text-gray-500" aria-label="Search medical templates" />
            </div>

            {/* Filter Controls - Responsive */}
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
              <div className="flex items-center gap-1 sm:gap-2 text-gray-700 text-xs sm:text-sm">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium hidden sm:inline">Filter by:</span>
                <span className="font-medium sm:hidden">Filter:</span>
              </div>
              
              <select value={selectedSpecialty} onChange={e => setSelectedSpecialty(e.target.value)} className="px-2 sm:px-4 py-1 sm:py-2 border border-gray-200 rounded-lg focus:border-[#387E89] focus:ring-2 focus:ring-[#387E89]/20 text-xs sm:text-sm bg-white transition-all min-w-0 flex-shrink" aria-label="Filter by medical specialty">
                <option value="">All Specialties</option>
                {specialties.map(specialty => <option key={specialty} value={specialty}>{specialty}</option>)}
              </select>

              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-2 sm:px-4 py-1 sm:py-2 border border-gray-200 rounded-lg focus:border-[#387E89] focus:ring-2 focus:ring-[#387E89]/20 text-xs sm:text-sm bg-white transition-all min-w-0 flex-shrink" aria-label="Filter by template category">
                <option value="">All Categories</option>
                {categories.map(category => <option key={category} value={category}>{category}</option>)}
              </select>

              <select value={selectedComplexity} onChange={e => setSelectedComplexity(e.target.value)} className="px-2 sm:px-4 py-1 sm:py-2 border border-gray-200 rounded-lg focus:border-[#387E89] focus:ring-2 focus:ring-[#387E89]/20 text-xs sm:text-sm bg-white transition-all min-w-0 flex-shrink" aria-label="Filter by complexity level">
                <option value="">All Levels</option>
                {complexities.map(complexity => <option key={complexity} value={complexity}>{complexity}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results Section - Responsive */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4 px-2 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#143151]">
              Available Templates
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-200 shadow-sm">
                {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} found
              </div>
              {totalPages > 1 && <div className="text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-200 shadow-sm">
                  Page {currentPage} of {totalPages}
                </div>}
            </div>
          </div>

          {currentTemplates.length > 0 ? <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-2 sm:px-0">
                {currentTemplates.map(template => <Card key={template.id} className="h-full bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-[#387E89]/10 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:bg-gradient-to-br hover:from-[#387E89]/5 hover:to-[#143151]/5 hover:border-[#387E89]/30 cursor-pointer group" onClick={() => setSelectedTemplate(template)} role="button" tabIndex={0} onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedTemplate(template);
              }
            }} aria-label={`View ${template.title} template details`}>
                    <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="flex flex-wrap gap-1 sm:gap-2 flex-1 mr-2">
                          <Badge variant="outline" className="text-xs bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                            {template.specialty}
                          </Badge>
                          <Badge variant="outline" className="text-xs bg-[#143151]/10 text-[#143151] border-[#143151]/30">
                            {template.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                            {template.complexity}
                          </Badge>
                        </div>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-[#387E89] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                      </div>
                      <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-[#143151] group-hover:text-[#387E89] transition-colors line-clamp-2 leading-tight">
                        {template.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col h-full p-4 sm:p-6">
                      <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 leading-relaxed text-xs sm:text-sm md:text-base flex-grow">
                        {template.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">{template.uses.toLocaleString()}</span>
                            <span className="sm:hidden">{template.uses > 1000 ? `${Math.floor(template.uses / 1000)}k` : template.uses}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-500" />
                            <span>{template.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">{template.estimatedTime}</span>
                            <span className="sm:hidden">{template.estimatedTime.split(' ')[0]}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 mt-auto">
                        <div>
                          <span className="text-xs text-gray-500 font-medium block truncate">
                            By {template.author}
                          </span>
                          <p className="text-xs text-gray-400 truncate">
                            {template.authorSpecialty}
                          </p>
                        </div>
                        <div className="flex items-center text-[#387E89] text-xs sm:text-sm font-medium group-hover:text-[#143151] transition-colors">
                          <span className="hidden sm:inline">View Details</span>
                          <span className="sm:hidden">View</span>
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              {/* Pagination - Responsive */}
              {totalPages > 1 && <div className="flex justify-center px-2 sm:px-0">
                  <Pagination>
                    <PaginationContent className="flex-wrap gap-1 sm:gap-2">
                      <PaginationItem>
                        <PaginationPrevious href="#" onClick={e => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                    }
                  }} className={`${currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'} text-xs sm:text-sm px-2 sm:px-3`} />
                      </PaginationItem>
                      
                      {getPageNumbers().map((page, index) => <PaginationItem key={index}>
                          {page === 'ellipsis' ? <PaginationEllipsis className="text-xs sm:text-sm" /> : <PaginationLink href="#" onClick={e => {
                    e.preventDefault();
                    setCurrentPage(page);
                  }} isActive={currentPage === page} className="cursor-pointer text-xs sm:text-sm w-8 h-8 sm:w-9 sm:h-9">
                              {page}
                            </PaginationLink>}
                        </PaginationItem>)}
                      
                      <PaginationItem>
                        <PaginationNext href="#" onClick={e => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1);
                    }
                  }} className={`${currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'} text-xs sm:text-sm px-2 sm:px-3`} />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>}
            </> : <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 shadow-sm mx-2 sm:mx-0">
              <CardContent className="p-6 sm:p-8 md:p-16 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#387E89]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 text-[#387E89]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#143151] mb-2">No templates found</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Try adjusting your search terms or filters to find relevant templates.
                </p>
                <Button variant="outline" onClick={() => {
              setSearchTerm('');
              setSelectedSpecialty('');
              setSelectedCategory('');
              setSelectedComplexity('');
            }} className="bg-transparent border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white transition-all text-sm sm:text-base">
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>}
        </div>

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>;
};
export default Templates;