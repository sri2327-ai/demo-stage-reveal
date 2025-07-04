
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, Code, Users, Shield, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const codeRanges = [
  {
    range: 'A00-A09',
    title: 'Intestinal infectious diseases',
    description: 'Cholera, typhoid, paratyphoid fevers, salmonella infections, shigellosis, and other bacterial intestinal infections.',
    totalCodes: '94+',
    billableCodes: '79+',
    category: 'Infectious Diseases'
  },
  {
    range: 'A15-A19',
    title: 'Tuberculosis',
    description: 'All forms of tuberculosis including respiratory, miliary, and tuberculosis of other organs.',
    totalCodes: '45+',
    billableCodes: '38+',
    category: 'Infectious Diseases'
  },
  {
    range: 'A20-A28',
    title: 'Certain zoonotic bacterial diseases',
    description: 'Plague, tularemia, anthrax, brucellosis, and other bacterial diseases transmitted from animals.',
    totalCodes: '32+',
    billableCodes: '28+',
    category: 'Infectious Diseases'
  },
  {
    range: 'I00-I09',
    title: 'Acute rheumatic fever',
    description: 'Acute rheumatic fever, rheumatic heart diseases, and related conditions.',
    totalCodes: '28+',
    billableCodes: '24+',
    category: 'Circulatory System'
  },
  {
    range: 'I10-I16',
    title: 'Hypertensive diseases',
    description: 'Essential hypertension, hypertensive heart disease, kidney disease, and related conditions.',
    totalCodes: '42+',
    billableCodes: '35+',
    category: 'Circulatory System'
  },
  {
    range: 'I20-I25',
    title: 'Ischemic heart diseases',
    description: 'Angina pectoris, acute myocardial infarction, and other ischemic heart diseases.',
    totalCodes: '68+',
    billableCodes: '58+',
    category: 'Circulatory System'
  }
];

const ICD10Codes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-[#143151] text-xs font-medium mb-3 sm:mb-4 lg:mb-6 border border-blue-200/40">
            <BookOpen className="w-3 h-3 mr-1.5" />
            Medical Coding Reference
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#143151] mb-3 sm:mb-4 lg:mb-6 leading-tight">
            ICD-10-CM Code Browser
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl">
            Browse and search through comprehensive ICD-10-CM diagnostic codes. Find the exact codes you need 
            for accurate medical billing and documentation with detailed descriptions and billable status indicators.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#387E89] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold text-[#143151] mb-1 sm:mb-2">
                    Quick Code Search
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Find specific ICD-10 codes or browse by category
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by code or description (e.g., A00, cholera, diabetes)"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#387E89] focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                  Search Codes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/60">
              <CardContent className="p-4 sm:p-6 text-center">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700 mb-1">70,000+</div>
                <div className="text-xs sm:text-sm text-blue-600">Total ICD-10 Codes</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/60">
              <CardContent className="p-4 sm:p-6 text-center">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700 mb-1">99.9%</div>
                <div className="text-xs sm:text-sm text-green-600">Accuracy Rate</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/60 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 text-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-1">10,000+</div>
                <div className="text-xs sm:text-sm text-purple-600">Healthcare Professionals</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Code Ranges */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">
              Browse Code Ranges
            </h2>
            <Badge variant="outline" className="text-xs sm:text-sm bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 w-fit">
              Updated for 2024
            </Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {codeRanges.map((range, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="font-mono text-xs bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 flex-shrink-0">
                      {range.range}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 flex-shrink-0">
                      {range.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold text-[#143151] leading-tight break-words">
                    {range.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    {range.description}
                  </p>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex gap-3 sm:gap-4 text-xs">
                      <div>
                        <span className="font-semibold text-[#143151]">{range.totalCodes}</span>
                        <span className="text-gray-500 ml-1">total</span>
                      </div>
                      <div>
                        <span className="font-semibold text-green-600">{range.billableCodes}</span>
                        <span className="text-gray-500 ml-1">billable</span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/icd10-codes/${range.range.toLowerCase()}`}>
                    <Button className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white group-hover:shadow-lg transition-all text-sm">
                      Browse Codes
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-gradient-to-br from-[#143151] to-[#387E89] border-0 shadow-xl overflow-hidden">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                Need AI-Powered Coding Assistance?
              </h2>
              <p className="text-blue-100 mb-4 sm:mb-5 lg:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
                Let S10.AI automatically suggest the most accurate ICD-10 codes based on your clinical documentation. 
                Reduce errors and save time with intelligent coding assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center">
                <Link to="/demo">
                  <Button className="w-full sm:w-auto bg-white text-[#143151] hover:bg-gray-50 font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 shadow-lg text-sm sm:text-base">
                    Try S10.AI Demo
                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link to="/diagnoses">
                  <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base">
                    Browse All Diagnoses
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ICD10Codes;
