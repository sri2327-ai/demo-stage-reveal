import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockDiagnoses } from '@/data/mockDiagnoses';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
const ITEMS_PER_PAGE = 9;
const Diagnoses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState('');

  // Filter diagnoses based on search term and selected letter
  const filteredDiagnoses = useMemo(() => {
    return mockDiagnoses.filter(diagnosis => {
      const matchesSearch = diagnosis.name.toLowerCase().includes(searchTerm.toLowerCase()) || diagnosis.description.toLowerCase().includes(searchTerm.toLowerCase()) || diagnosis.alsoKnownAs.some(term => term.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesLetter = selectedLetter ? diagnosis.name.charAt(0).toUpperCase() === selectedLetter : true;
      return matchesSearch && matchesLetter;
    });
  }, [searchTerm, selectedLetter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredDiagnoses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentDiagnoses = filteredDiagnoses.slice(startIndex, endIndex);

  // Group diagnoses by first letter for navigation
  const groupedByLetter = useMemo(() => {
    const groups: {
      [key: string]: number;
    } = {};
    mockDiagnoses.forEach(diagnosis => {
      const firstLetter = diagnosis.name.charAt(0).toUpperCase();
      groups[firstLetter] = (groups[firstLetter] || 0) + 1;
    });
    return groups;
  }, []);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleLetterFilter = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? '' : letter);
    setCurrentPage(1);
  };
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-[#143151] text-sm font-medium mb-6 border border-blue-200/40">
            <Filter className="w-4 h-4 mr-2" />
            Medical Resource Center
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#143151] mb-6">
            Medical Diagnoses
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive resource for medical conditions with detailed ICD-10 coding information, 
            documentation requirements, and clinical guidance for healthcare professionals.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto px-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-[#387E89] transition-colors" />
              <Input type="text" placeholder="Search medical conditions, symptoms, or ICD codes..." value={searchTerm} onChange={e => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
              setSelectedLetter('');
            }} className="pl-12 h-12 sm:h-14 text-base sm:text-lg bg-white border-2 border-gray-200 rounded-2xl focus:border-[#387E89] focus:ring-4 focus:ring-[#387E89]/20 shadow-lg transition-all duration-200 text-gray-900 placeholder:text-gray-500" />
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151]">
              Medical Conditions
              {selectedLetter && <span className="ml-3 text-[#387E89] text-xl sm:text-2xl">
                  Starting with "{selectedLetter}"
                </span>}
            </h2>
            <div className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
              {filteredDiagnoses.length} of {mockDiagnoses.length} conditions
            </div>
          </div>

          {currentDiagnoses.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
              {currentDiagnoses.map(diagnosis => <Link key={diagnosis.id} to={`/diagnoses/${diagnosis.id}`} className="group block">
                  <Card className="h-full bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 hover:border-[#387E89]/30">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-xs font-mono bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                          {diagnosis.primaryCode}
                        </Badge>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#387E89] group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-bold text-[#143151] group-hover:text-[#387E89] transition-colors line-clamp-2">
                        {diagnosis.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
                        {diagnosis.description}
                      </p>
                      
                      {diagnosis.alsoKnownAs.length > 0 && <div className="mb-4">
                          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Also known as</p>
                          <div className="flex flex-wrap gap-2">
                            {diagnosis.alsoKnownAs.slice(0, 2).map((term, index) => <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200">
                                {term}
                              </Badge>)}
                            {diagnosis.alsoKnownAs.length > 2 && <Badge variant="secondary" className="text-xs bg-[#387E89]/10 text-[#387E89] border border-[#387E89]/20">
                                +{diagnosis.alsoKnownAs.length - 2} more
                              </Badge>}
                          </div>
                        </div>}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
                        <span className="text-xs text-gray-500 font-medium">{diagnosis.codeType}</span>
                        <div className="flex items-center text-[#387E89] text-sm font-medium group-hover:text-[#143151] transition-colors">
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>)}
            </div> : <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm mx-4 sm:mx-0">
              <CardContent className="p-8 sm:p-16 text-center">
                <div className="w-16 h-16 bg-[#387E89]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#387E89]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#143151] mb-2">No conditions found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse by letter below.
                </p>
                <Button variant="outline" onClick={() => {
              setSearchTerm('');
              setSelectedLetter('');
            }} className="bg-transparent border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>}

          {/* Pagination */}
          {totalPages > 1 && <div className="flex justify-center mt-12 px-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-[#387E89]/10 hover:text-[#387E89]"} />
                  </PaginationItem>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                const pageNum = i + 1;
                return <PaginationItem key={pageNum}>
                        <PaginationLink onClick={() => handlePageChange(pageNum)} isActive={currentPage === pageNum} className={currentPage === pageNum ? "bg-[#387E89] text-white border-[#387E89] hover:bg-[#143151]" : "text-gray-600 hover:bg-[#387E89]/10 hover:text-[#387E89] cursor-pointer"}>
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>;
              })}

                  <PaginationItem>
                    <PaginationNext onClick={() => handlePageChange(currentPage + 1)} className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-[#387E89]/10 hover:text-[#387E89]"} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>}
        </div>

        {/* Alphabet Navigation - Below Content */}
        <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-[#143151]">Quick Navigation</CardTitle>
            <p className="text-gray-600">Browse conditions by first letter</p>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-13 lg:grid-cols-26 gap-2">
              {alphabet.map(letter => <Button key={letter} variant={selectedLetter === letter ? "default" : groupedByLetter[letter] ? "outline" : "ghost"} size="sm" className={`
                    h-10 sm:h-12 w-full text-base sm:text-lg font-bold transition-all duration-200
                    ${selectedLetter === letter ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-lg border-[#387E89] hover:from-[#112a46] hover:to-[#306b75]' : groupedByLetter[letter] ? 'bg-white border-gray-200 text-[#143151] hover:bg-gradient-to-r hover:from-[#387E89]/10 hover:to-[#143151]/10 hover:border-[#387E89] hover:text-[#387E89]' : 'opacity-30 cursor-not-allowed bg-transparent border-transparent text-gray-400'}
                  `} disabled={!groupedByLetter[letter]} onClick={() => handleLetterFilter(letter)}>
                  {letter}
                </Button>)}
            </div>
            <div className="mt-6 text-center">
              
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Diagnoses;