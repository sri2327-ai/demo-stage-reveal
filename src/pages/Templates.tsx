
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, FileText, Users, Calendar, Share2, Eye, ArrowRight, CheckCircle, Clock, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CallToAction } from '@/components/CallToAction';

// Mock data for templates
const mockTemplates = [
  {
    id: 1,
    title: "NHS GP Consult Template",
    description: "Comprehensive tool designed for General Practitioners to document patient consultations effectively.",
    specialty: "General Practice",
    category: "Consultation",
    uses: 3275,
    rating: 4.9,
    lastUpdated: "2025-01-15",
    tags: ["GP", "NHS", "Consultation", "Primary Care"],
    author: "Dr. Sarah Johnson",
    authorSpecialty: "General Practitioner",
    structure: [
      "Patient Demographics",
      "Chief Complaint",
      "History of Present Illness",
      "Past Medical History",
      "Physical Examination",
      "Assessment & Plan",
      "Follow-up Instructions"
    ],
    sampleContent: `Chief Complaint: Patient presents with persistent cough and shortness of breath.

History of Present Illness:
- 45-year-old male with 2-week history of productive cough
- Associated with mild dyspnea on exertion
- No fever, chest pain, or weight loss
- Non-smoker, no recent travel

Physical Examination:
- Vital signs: BP 130/80, HR 78, RR 16, SpO2 98%
- Chest: Clear to auscultation bilaterally
- Heart: Regular rate and rhythm

Assessment & Plan:
- Likely upper respiratory tract infection
- Prescribed symptomatic treatment
- Follow-up in 1 week if symptoms persist`
  },
  {
    id: 2,
    title: "Cardiology Assessment Template",
    description: "Specialized template for cardiovascular examinations and treatment planning.",
    specialty: "Cardiology",
    category: "Assessment",
    uses: 1842,
    rating: 4.8,
    lastUpdated: "2025-01-10",
    tags: ["Cardiology", "Heart", "Assessment", "ECG"],
    author: "Dr. Michael Chen",
    authorSpecialty: "Cardiologist",
    structure: [
      "Cardiovascular History",
      "Risk Factor Assessment",
      "Physical Examination",
      "Diagnostic Tests",
      "Treatment Plan",
      "Patient Education"
    ],
    sampleContent: `Cardiovascular History:
- 58-year-old female with chest discomfort
- Hypertension for 10 years, well-controlled
- Family history of CAD (father, age 65)

Risk Factors:
- Hypertension: Yes, on medication
- Diabetes: No
- Smoking: Former smoker (quit 5 years ago)
- Hyperlipidemia: Yes, on statin therapy

Physical Examination:
- Blood pressure: 125/78 mmHg
- Heart rate: 72 bpm, regular
- Heart sounds: S1 S2 normal, no murmurs
- Peripheral pulses: 2+ bilateral

Diagnostic Plan:
- ECG: Normal sinus rhythm
- Echocardiogram recommended
- Stress test if symptoms persist`
  },
  {
    id: 3,
    title: "Mental Health Assessment",
    description: "Comprehensive mental health evaluation template for psychiatrists and psychologists.",
    specialty: "Psychiatry",
    category: "Assessment",
    uses: 2156,
    rating: 4.7,
    lastUpdated: "2025-01-08",
    tags: ["Mental Health", "Psychiatry", "Assessment", "Therapy"],
    author: "Dr. Lisa Rodriguez",
    authorSpecialty: "Psychiatrist",
    structure: [
      "Mental Status Examination",
      "Psychiatric History",
      "Risk Assessment",
      "Diagnosis",
      "Treatment Plan",
      "Safety Planning"
    ],
    sampleContent: `Mental Status Examination:
- Appearance: Well-groomed, appropriate dress
- Behavior: Cooperative, good eye contact
- Speech: Normal rate and volume
- Mood: "Anxious"
- Affect: Anxious, congruent with mood

Psychiatric History:
- First episode of significant anxiety 6 months ago
- No previous psychiatric hospitalizations
- No substance use history
- Taking prescribed medications as directed

Risk Assessment:
- No current suicidal ideation
- No homicidal ideation
- Good social support system
- Insight and judgment intact

Treatment Plan:
- Continue current medication regimen
- Cognitive behavioral therapy referral
- Follow-up in 2 weeks`
  }
];

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return mockTemplates.filter(template => {
      const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesSpecialty = selectedSpecialty ? template.specialty === selectedSpecialty : true;
      const matchesCategory = selectedCategory ? template.category === selectedCategory : true;
      
      return matchesSearch && matchesSpecialty && matchesCategory;
    });
  }, [searchTerm, selectedSpecialty, selectedCategory]);

  // Get unique specialties and categories
  const specialties = [...new Set(mockTemplates.map(t => t.specialty))];
  const categories = [...new Set(mockTemplates.map(t => t.category))];

  if (selectedTemplate) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => setSelectedTemplate(null)}
            className="mb-6 text-[#143151] hover:bg-[#387E89]/10 hover:text-[#387E89]"
          >
            ← Back to Templates
          </Button>

          {/* Template Header */}
          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {selectedTemplate.specialty}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {selectedTemplate.category}
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">{selectedTemplate.title}</h1>
                <p className="text-xl text-white/90 mb-6">{selectedTemplate.description}</p>
                
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{selectedTemplate.uses.toLocaleString()} uses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span>{selectedTemplate.rating}/5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>Updated {new Date(selectedTemplate.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="secondary" 
                  className="bg-white text-[#143151] hover:bg-gray-100"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Template
                </Button>
                <Button 
                  className="bg-[#387E89] hover:bg-[#306b75] text-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Use Template
                </Button>
              </div>
            </div>
          </div>

          {/* Template Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* About & Author */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#143151]">About This Template</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">{selectedTemplate.description}</p>
                
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-[#143151] mb-3">Created by</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center text-white font-bold">
                      {selectedTemplate.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-[#143151]">{selectedTemplate.author}</p>
                      <p className="text-sm text-gray-600">{selectedTemplate.authorSpecialty}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-[#143151] mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTemplate.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Template Structure */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#143151]">Template Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedTemplate.structure.map((section, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-[#387E89]" />
                      <span className="font-medium text-[#143151]">{section}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Content */}
          <Card className="bg-white border border-gray-200 shadow-sm mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-[#143151]">Sample Note</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-6">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
                  {selectedTemplate.sampleContent}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <CallToAction />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 backdrop-blur-sm rounded-full text-[#143151] text-sm font-medium mb-6 border border-[#387E89]/20">
            <FileText className="w-4 h-4 mr-2" />
            Medical Documentation Templates
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#143151] mb-6">
            Clinical Templates & Notes
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Professional medical documentation templates created by healthcare experts. Streamline your clinical workflow with structured, comprehensive templates for every specialty and use case.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-[#387E89] transition-colors" />
              <Input
                type="text"
                placeholder="Search templates by specialty, condition, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 sm:h-14 text-base sm:text-lg bg-white border-2 border-gray-200 rounded-2xl focus:border-[#387E89] focus:ring-4 focus:ring-[#387E89]/20 shadow-lg transition-all duration-200 text-gray-900 placeholder:text-gray-500"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter by:</span>
              </div>
              
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:border-[#387E89] focus:ring-2 focus:ring-[#387E89]/20 text-sm"
              >
                <option value="">All Specialties</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:border-[#387E89] focus:ring-2 focus:ring-[#387E89]/20 text-sm"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151]">
              Available Templates
            </h2>
            <div className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              {filteredTemplates.length} templates found
            </div>
          </div>

          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {filteredTemplates.map((template) => (
                <Card 
                  key={template.id} 
                  className="h-full bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-[#387E89]/10 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-[#387E89]/5 hover:to-[#143151]/5 hover:border-[#387E89]/30 cursor-pointer group"
                  onClick={() => setSelectedTemplate(template)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                          {template.specialty}
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-[#143151]/10 text-[#143151] border-[#143151]/30">
                          {template.category}
                        </Badge>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#387E89] group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-[#143151] group-hover:text-[#387E89] transition-colors line-clamp-2">
                      {template.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
                      {template.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{template.uses.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Star className="w-4 h-4 fill-current text-yellow-500" />
                          <span>{template.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-500 font-medium">
                        By {template.author}
                      </span>
                      <div className="flex items-center text-[#387E89] text-sm font-medium group-hover:text-[#143151] transition-colors">
                        View Details
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 shadow-sm">
              <CardContent className="p-8 sm:p-16 text-center">
                <div className="w-16 h-16 bg-[#387E89]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#387E89]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#143151] mb-2">No templates found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters to find relevant templates.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSpecialty('');
                    setSelectedCategory('');
                  }}
                  className="bg-transparent border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
};

export default Templates;
