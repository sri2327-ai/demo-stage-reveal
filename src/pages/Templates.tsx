import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, FileText, Users, Calendar, Share2, Eye, ArrowRight, CheckCircle, Clock, Star, BookOpen, Stethoscope, ChevronDown, ChevronUp, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Enhanced mock data with FAQ section
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
CODES: H05z.00 (Upper respiratory tract infection, unspecified)`,
  faqs: [{
    question: "How do I customize this template for my practice?",
    answer: "This template can be easily customized by modifying the sections to match your specific practice needs. You can add or remove fields, adjust the clinical assessment criteria, and modify the coding sections to align with your local healthcare system requirements."
  }, {
    question: "Is this template compliant with NHS guidelines?",
    answer: "Yes, this template has been designed to fully comply with current NHS documentation standards and clinical governance requirements. It includes all mandatory fields for GP consultations and follows the recommended SOAP note structure."
  }, {
    question: "Can I integrate this with my existing EMR system?",
    answer: "Absolutely. This template is designed to be EMR-agnostic and can be integrated with most electronic medical record systems. The structured format makes it easy to map fields to your existing system's database schema."
  }, {
    question: "What training is needed to use this template effectively?",
    answer: "Minimal training is required as the template follows standard clinical documentation practices. Most clinicians can start using it immediately, though we recommend a brief orientation session to familiarize users with the specific workflow and any customizations."
  }, {
    question: "How often is this template updated?",
    answer: "This template is reviewed and updated quarterly to ensure compliance with the latest clinical guidelines and regulatory requirements. Users are automatically notified of any significant updates or changes."
  }]
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

FOLLOW-UP: 2 weeks (medication tolerance), then 6 weeks with results`,
  faqs: [{
    question: "What makes this cardiology template different from general templates?",
    answer: "This template is specifically designed for cardiovascular assessments and includes specialized sections for cardiac risk stratification, ECG interpretation, and evidence-based cardiac treatment protocols that aren't found in general medical templates."
  }, {
    question: "How does the QRISK3 calculation work within this template?",
    answer: "The template includes prompts for all QRISK3 risk factors and provides guidance on interpretation. While the actual calculation can be integrated via API, the template ensures all necessary data points are captured systematically."
  }, {
    question: "Can this template be used for both inpatient and outpatient cardiology?",
    answer: "Yes, this template is designed to be flexible for both settings. The structure can be adapted based on the clinical context, with additional sections for inpatient-specific assessments like telemetry monitoring and acute cardiac markers."
  }, {
    question: "Is this template aligned with ESC/AHA guidelines?",
    answer: "Absolutely. This template incorporates the latest European Society of Cardiology (ESC) and American Heart Association (AHA) guidelines for cardiovascular assessment and management, ensuring evidence-based clinical practice."
  }, {
    question: "How can I integrate cardiac imaging results into this template?",
    answer: "The template includes dedicated sections for ECG, echocardiogram, and other cardiac imaging results. These can be enhanced with direct integration to PACS systems or imaging databases through our API framework."
  }]
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

FOLLOW-UP: 2 weeks (medication review), 4 weeks (progress review)`,
  faqs: [{
    question: "How does this template ensure comprehensive mental health assessment?",
    answer: "This template follows evidence-based psychiatric assessment protocols, incorporating DSM-5 criteria, standardized mental status examination components, and comprehensive risk assessment frameworks to ensure no critical areas are missed."
  }, {
    question: "What risk assessment tools are integrated into this template?",
    answer: "The template includes structured risk assessment for suicide, self-harm, and risk to others, incorporating validated screening tools and safety planning protocols that align with clinical best practices and legal requirements."
  }, {
    question: "Can this template be customized for different mental health specialties?",
    answer: "Yes, while designed as a comprehensive psychiatric assessment, the template can be adapted for various mental health specialties including psychology, counseling, and specialized services like addiction or forensic psychiatry."
  }, {
    question: "How does the template handle crisis situations and emergency protocols?",
    answer: "The template includes dedicated sections for crisis assessment, safety planning, and emergency protocols. It prompts clinicians to document protective factors, warning signs, and emergency contacts systematically."
  }, {
    question: "What training is recommended before using this advanced template?",
    answer: "This template is designed for qualified mental health professionals. Users should have appropriate clinical training in psychiatric assessment, risk evaluation, and crisis intervention before implementing this comprehensive assessment framework."
  }]
}];
const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState(null);
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

  // Template Detail View
  if (selectedTemplate) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-7xl">
          {/* SEO and structured data - keep existing */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalEntity",
              "name": selectedTemplate.title,
              "description": selectedTemplate.description,
              "specialty": selectedTemplate.specialty,
              "author": {
                "@type": "Person",
                "name": selectedTemplate.author,
                "jobTitle": selectedTemplate.authorSpecialty
              },
              "dateModified": selectedTemplate.lastUpdated,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": selectedTemplate.rating,
                "ratingCount": selectedTemplate.uses
              }
            })}
          </script>

          {/* Enhanced Breadcrumb Navigation */}
          <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600 bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200/50">
              <li><Link to="/" className="hover:text-[#387E89] transition-colors font-medium">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><button onClick={() => setSelectedTemplate(null)} className="hover:text-[#387E89] transition-colors font-medium">Templates</button></li>
              <li className="text-gray-400">/</li>
              <li className="text-[#143151] font-semibold truncate max-w-xs sm:max-w-none">{selectedTemplate.title}</li>
            </ol>
          </nav>

          {/* Enhanced Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => setSelectedTemplate(null)} 
            className="mb-6 sm:mb-8 text-[#143151] hover:bg-[#387E89]/10 hover:text-[#387E89] transition-all group"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Templates
          </Button>

          {/* Enhanced Template Header */}
          <div className="bg-gradient-to-br from-[#143151] via-[#1a3b5c] to-[#387E89] text-white rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 lg:gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      <Stethoscope className="w-3 h-3 mr-1.5" />
                      {selectedTemplate.specialty}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      <FileText className="w-3 h-3 mr-1.5" />
                      {selectedTemplate.category}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      <Clock className="w-3 h-3 mr-1.5" />
                      {selectedTemplate.estimatedTime}
                    </Badge>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">{selectedTemplate.title}</h1>
                  <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-6 leading-relaxed max-w-4xl">{selectedTemplate.description}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base font-medium">{selectedTemplate.uses.toLocaleString()} uses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-yellow-400" />
                      <span className="text-sm sm:text-base font-medium">{selectedTemplate.rating}/5.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base font-medium">{selectedTemplate.complexity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base font-medium">Updated {new Date(selectedTemplate.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row xl:flex-col gap-3 xl:min-w-[200px]">
                  <Button 
                    variant="secondary" 
                    className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all group"
                  >
                    <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Share Template
                  </Button>
                  
                  <Button className="bg-white text-[#143151] hover:bg-gray-100 transition-all font-semibold group shadow-lg">
                    <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Use Template
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Author Info */}
          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-lg mb-8 sm:mb-12">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                  {selectedTemplate.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-[#143151] text-xl sm:text-2xl">{selectedTemplate.author}</h3>
                  <p className="text-gray-600 text-base sm:text-lg">{selectedTemplate.authorSpecialty}</p>
                  <p className="text-gray-500 text-sm sm:text-base">{selectedTemplate.authorCredentials}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Side-by-Side Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Template Structure */}
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl text-[#143151] flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#387E89]/10 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#387E89]" />
                  </div>
                  Template Structure
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">Organized sections for comprehensive clinical documentation</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {selectedTemplate.structure.map((section, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl hover:from-[#387E89]/5 hover:to-[#143151]/5 transition-all duration-200 border border-gray-200/50">
                      <div className="w-7 h-7 bg-gradient-to-r from-[#387E89] to-[#143151] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                        {index + 1}
                      </div>
                      <span className="font-medium text-[#143151] text-sm sm:text-base leading-relaxed">{section}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample Clinical Notes */}
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl text-[#143151] flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-green-600" />
                  </div>
                  Sample Clinical Note
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">Example of completed documentation using this template</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-gray-900 rounded-xl p-4 sm:p-6 border-l-4 border-[#387E89] shadow-inner">
                  <pre className="whitespace-pre-wrap text-xs sm:text-sm text-green-400 font-mono leading-relaxed overflow-x-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                    {selectedTemplate.sampleContent}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Clinical Benefits Section */}
          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-lg mb-12 sm:mb-16">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-[#143151] flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                Clinical Benefits
              </CardTitle>
              <p className="text-gray-600 leading-relaxed">Key advantages of using this template in clinical practice</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedTemplate.clinicalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-xl border border-green-200/50 hover:shadow-md transition-all duration-200">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced FAQ Section */}
          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-lg mb-12 sm:mb-16">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-[#143151] flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                </div>
                Frequently Asked Questions
              </CardTitle>
              <p className="text-gray-600 leading-relaxed">Common questions about this template and its usage</p>
            </CardHeader>
            <CardContent className="space-y-4" data-api-endpoint="/api/templates/faqs">
              {selectedTemplate.faqs.map((faq, index) => (
                <Collapsible key={index} open={expandedFaq === index} onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 sm:p-5 text-left bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl hover:from-gray-100 hover:to-blue-100/50 transition-all duration-200 border border-gray-200/50">
                    <h4 className="font-semibold text-[#143151] pr-4 leading-relaxed">{faq.question}</h4>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#387E89] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#387E89] flex-shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-5 py-4 text-gray-700 leading-relaxed bg-white/50 rounded-b-xl border-x border-b border-gray-200/50">
                    {faq.answer}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </CardContent>
          </Card>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20">
            <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 group text-lg px-8 py-3">
              <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Using This Template
            </Button>
            
            <Button variant="outline" className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 hover:border-[#387E89] transition-all group text-lg px-8 py-3">
              <Share2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Share with Colleagues
            </Button>
          </div>

          {/* Enhanced Call to Action for Individual Template */}
          <div className="bg-gradient-to-br from-[#143151] via-[#1a3b5c] to-[#387E89] rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Streamline Your Documentation?
              </h2>
              <p className="text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
                Join over 10,000+ healthcare professionals who trust S10.AI to reduce documentation time by 60% while improving accuracy and compliance. Get started with this template today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12">
                <Button className="bg-white text-[#143151] hover:bg-gray-100 transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 group text-lg px-8 py-4">
                  <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get Started Free
                </Button>
                
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all group text-lg px-8 py-4">
                  <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Templates Listing Page
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Templates
          </h2>
          <div className="flex items-center gap-4">
            <Input 
              type="text" 
              placeholder="Search templates..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:border-gray-400"
            />
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select 
                value={selectedSpecialty} 
                onChange={(e) => setSelectedSpecialty(e.target.value)} 
                className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:border-gray-400"
              >
                <option value="">All Specialties</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)} 
                className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:border-gray-400"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select 
                value={selectedComplexity} 
                onChange={(e) => setSelectedComplexity(e.target.value)} 
                className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:border-gray-400"
              >
                <option value="">All Complexities</option>
                {complexities.map(complexity => (
                  <option key={complexity} value={complexity}>{complexity}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {currentTemplates.map(template => (
            <Card key={template.id} className="bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl text-[#143151] flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#387E89]/10 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#387E89]" />
                  </div>
                  {template.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">Comprehensive template for {template.category}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm sm:text-base font-medium">{template.uses.toLocaleString()} uses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm sm:text-base font-medium">{template.rating}/5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm sm:text-base font-medium">{template.complexity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm sm:text-base font-medium">Updated {new Date(template.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-8 sm:mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis disabled={currentPage === 1} />
              </PaginationItem>
              {getPageNumbers().map(page => {
                if (page === 'ellipsis') {
                  return <PaginationEllipsis key={page} />;
                }
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? 'bg-[#143151] text-white' : 'text-gray-600 hover:bg-[#143151]/10'}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem>
                <PaginationEllipsis disabled={currentPage === totalPages} />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Enhanced Call to Action for Main Templates Page */}
        <div className="bg-gradient-to-br from-[#143151] via-[#1a3b5c] to-[#387E89] rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden mt-16 sm:mt-20 lg:mt-24">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-36 translate-x-36"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/3 rounded-full -translate-x-24 -translate-y-24"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Transform Your Clinical Documentation Today
            </h2>
            
            <p className="text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
              Join thousands of clinicians already using S10.AI to reduce administrative burden by 60% 
              and improve patient care. Access our comprehensive template library and experience the future of medical documentation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="w-4 h-4" />
                <span className="text-sm sm:text-base font-medium">10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <FileText className="w-4 h-4" />
                <span className="text-sm sm:text-base font-medium">500+ Templates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Clock className="w-4 h-4" />
                <span className="text-sm sm:text-base font-medium">60% Time Saved</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12">
              <Button className="bg-white text-[#143151] hover:bg-gray-100 transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Free 30-Day Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Browse All Templates
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-base sm:text-lg mb-2">No Credit Card Required</h3>
                <p className="text-white/80 text-xs sm:text-sm">Cancel anytime, no strings attached</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-base sm:text-lg mb-2">Setup in 5 Minutes</h3>
                <p className="text-white/80 text-xs sm:text-sm">Get started instantly with guided onboarding</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 mx-auto fill-current" />
                <h3 className="font-bold text-base sm:text-lg mb-2">24/7 Expert Support</h3>
                <p className="text-white/80 text-xs sm:text-sm">Award-winning customer success team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
