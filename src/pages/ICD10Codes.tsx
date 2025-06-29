
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ChevronRight, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const icd10Chapters = [
  {
    id: 'a00-b99',
    range: 'A00-B99',
    title: 'Certain infectious and parasitic diseases',
    chapter: 'Chapter 1',
    subcategories: [
      { range: 'A00-A09', title: 'Intestinal infectious diseases', codeCount: 94 },
      { range: 'A15-A19', title: 'Tuberculosis', codeCount: 28 },
      { range: 'A20-A28', title: 'Certain zoonotic bacterial diseases', codeCount: 45 },
      { range: 'A30-A49', title: 'Other bacterial diseases', codeCount: 67 },
      { range: 'A50-A64', title: 'Infections with a predominantly sexual mode of transmission', codeCount: 82 },
      { range: 'A65-A69', title: 'Other spirochetal diseases', codeCount: 23 },
      { range: 'A70-A74', title: 'Other diseases caused by chlamydiae', codeCount: 18 },
      { range: 'A75-A79', title: 'Rickettsioses', codeCount: 15 },
      { range: 'A80-A89', title: 'Viral and prion infections of the central nervous system', codeCount: 34 },
      { range: 'A90-A99', title: 'Arthropod-borne viral fevers and viral hemorrhagic fevers', codeCount: 41 },
      { range: 'B00-B09', title: 'Viral infections characterized by skin and mucous membrane lesions', codeCount: 52 },
      { range: 'B10', title: 'Other human herpesviruses', codeCount: 8 },
      { range: 'B15-B19', title: 'Viral hepatitis', codeCount: 29 },
      { range: 'B20', title: 'Human immunodeficiency virus [HIV] disease', codeCount: 12 },
      { range: 'B25-B34', title: 'Other viral diseases', codeCount: 38 },
      { range: 'B35-B49', title: 'Mycoses', codeCount: 65 },
      { range: 'B50-B64', title: 'Protozoal diseases', codeCount: 47 },
      { range: 'B65-B83', title: 'Helminthiases', codeCount: 73 },
      { range: 'B85-B89', title: 'Pediculosis, acariasis and other infestations', codeCount: 19 },
      { range: 'B90-B94', title: 'Sequelae of infectious and parasitic diseases', codeCount: 16 },
      { range: 'B95-B97', title: 'Bacterial and viral infectious agents', codeCount: 31 },
      { range: 'B99', title: 'Other infectious diseases', codeCount: 5 }
    ]
  }
];

const ICD10Codes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = icd10Chapters.map(chapter => ({
    ...chapter,
    subcategories: chapter.subcategories.filter(sub =>
      sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.range.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(chapter => chapter.subcategories.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-[#143151] text-sm font-medium mb-6 border border-blue-200/40">
            <BookOpen className="w-4 h-4 mr-2" />
            ICD-10-CM Classification System
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#143151] mb-6">
            ICD-10 Code Directory
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive ICD-10-CM code classification system organized by chapters and categories. 
            Find the right codes for accurate medical billing and documentation.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto px-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-[#387E89] transition-colors" />
              <Input
                type="text"
                placeholder="Search ICD-10 codes, categories, or conditions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 sm:h-14 text-base sm:text-lg bg-white border-2 border-gray-200 rounded-2xl focus:border-[#387E89] focus:ring-4 focus:ring-[#387E89]/20 shadow-lg transition-all duration-200 text-gray-900 placeholder:text-gray-500"
                data-api-search="icd10-codes"
              />
            </div>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="space-y-12" data-api-chapters="icd10-chapters">
          {filteredChapters.map((chapter) => (
            <Card key={chapter.id} className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-sm font-mono bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                    {chapter.chapter}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                    {chapter.subcategories.length} categories
                  </Badge>
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-[#143151] mb-2">
                  {chapter.range}
                </CardTitle>
                <p className="text-lg text-gray-600 font-medium">
                  {chapter.title}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {chapter.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.range}
                      to={`/icd10-codes/${subcategory.range.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="group block"
                    >
                      <Card className="bg-white border border-gray-200/60 hover:border-[#387E89]/30 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline" className="text-xs font-mono bg-blue-50 text-blue-700 border-blue-200">
                                  {subcategory.range}
                                </Badge>
                                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-500">
                                  {subcategory.codeCount}+ codes
                                </Badge>
                              </div>
                              <h3 className="text-base sm:text-lg font-semibold text-[#143151] group-hover:text-[#387E89] transition-colors">
                                {subcategory.title}
                              </h3>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#387E89] group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-[#143151] to-[#387E89] border-0 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Streamline Your Coding Process?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Use S10.AI's intelligent coding assistant to ensure accurate ICD-10 code selection 
                and reduce documentation time.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 bg-white text-[#143151] font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Coding with S10.AI
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ICD10Codes;
