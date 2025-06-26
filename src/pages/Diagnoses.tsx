
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockDiagnoses } from '@/data/mockDiagnoses';

const ITEMS_PER_PAGE = 9;

const Diagnoses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState('');

  // Filter diagnoses based on search term and selected letter
  const filteredDiagnoses = useMemo(() => {
    return mockDiagnoses.filter(diagnosis => {
      const matchesSearch = diagnosis.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        diagnosis.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        diagnosis.alsoKnownAs.some(term => 
          term.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesLetter = selectedLetter ? 
        diagnosis.name.charAt(0).toUpperCase() === selectedLetter : true;
      
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
    const groups: { [key: string]: number } = {};
    mockDiagnoses.forEach(diagnosis => {
      const firstLetter = diagnosis.name.charAt(0).toUpperCase();
      groups[firstLetter] = (groups[firstLetter] || 0) + 1;
    });
    return groups;
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLetterFilter = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? '' : letter);
    setCurrentPage(1);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#1A2332] to-[#2A3441]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#387E89]/20 to-[#143151]/20 backdrop-blur-sm rounded-full text-[#387E89] text-sm font-medium mb-6 border border-[#387E89]/30">
            <Filter className="w-4 h-4 mr-2" />
            Medical Resource Center
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-[#387E89] to-[#143151] bg-clip-text text-transparent mb-6">
            Medical Diagnoses
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive resource for medical conditions with detailed ICD-10 coding information, 
            documentation requirements, and clinical guidance for healthcare professionals.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto px-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-[#387E89] transition-colors" />
              <Input
                type="text"
                placeholder="Search medical conditions, symptoms, or ICD codes..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                  setSelectedLetter('');
                }}
                className="pl-12 h-12 sm:h-14 text-base sm:text-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:border-[#387E89] focus:ring-4 focus:ring-[#387E89]/20 shadow-lg transition-all duration-200 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Medical Conditions
              {selectedLetter && (
                <span className="ml-3 text-[#387E89] text-xl sm:text-2xl">
                  Starting with "{selectedLetter}"
                </span>
              )}
            </h2>
            <div className="text-sm text-gray-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              {filteredDiagnoses.length} of {mockDiagnoses.length} conditions
            </div>
          </div>

          {currentDiagnoses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
              {currentDiagnoses.map((diagnosis) => (
                <Link 
                  key={diagnosis.id} 
                  to={`/diagnoses/${diagnosis.id}`}
                  className="group block"
                >
                  <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-[#387E89]/20 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:border-[#387E89]/50">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-xs font-mono bg-[#387E89]/20 text-[#387E89] border-[#387E89]/50 backdrop-blur-sm">
                          {diagnosis.primaryCode}
                        </Badge>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#387E89] group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-bold text-white group-hover:text-[#387E89] transition-colors line-clamp-2">
                        {diagnosis.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
                        {diagnosis.description}
                      </p>
                      
                      {diagnosis.alsoKnownAs.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Also known as</p>
                          <div className="flex flex-wrap gap-2">
                            {diagnosis.alsoKnownAs.slice(0, 2).map((term, index) => (
                              <Badge key={index} variant="secondary" className="text-xs bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20">
                                {term}
                              </Badge>
                            ))}
                            {diagnosis.alsoKnownAs.length > 2 && (
                              <Badge variant="secondary" className="text-xs bg-[#387E89]/20 text-[#387E89] border border-[#387E89]/30">
                                +{diagnosis.alsoKnownAs.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <span className="text-xs text-gray-400 font-medium">{diagnosis.codeType}</span>
                        <div className="flex items-center text-[#387E89] text-sm font-medium group-hover:text-white transition-colors">
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg mx-4 sm:mx-0">
              <CardContent className="p-8 sm:p-16 text-center">
                <div className="w-16 h-16 bg-[#387E89]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#387E89]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">No conditions found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or browse by letter below.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLetter('');
                  }}
                  className="bg-transparent border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 px-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="bg-white/10 border-white/20 text-white hover:bg-[#387E89] hover:border-[#387E89] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-1 mx-2">
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(pageNum)}
                        className={
                          currentPage === pageNum 
                            ? "bg-[#387E89] text-white border-[#387E89]" 
                            : "bg-white/10 border-white/20 text-white hover:bg-[#387E89] hover:border-[#387E89]"
                        }
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="bg-white/10 border-white/20 text-white hover:bg-[#387E89] hover:border-[#387E89] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Alphabet Navigation - Below Content */}
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-white">Quick Navigation</CardTitle>
            <p className="text-gray-300">Browse conditions by first letter</p>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-13 lg:grid-cols-26 gap-2">
              {alphabet.map(letter => (
                <Button
                  key={letter}
                  variant={selectedLetter === letter ? "default" : groupedByLetter[letter] ? "outline" : "ghost"}
                  size="sm"
                  className={`
                    h-10 sm:h-12 w-full text-base sm:text-lg font-bold transition-all duration-200
                    ${selectedLetter === letter 
                      ? 'bg-[#387E89] text-white shadow-lg border-[#387E89]' 
                      : groupedByLetter[letter] 
                        ? 'bg-white/10 border-white/20 text-white hover:bg-[#387E89] hover:border-[#387E89] hover:text-white' 
                        : 'opacity-30 cursor-not-allowed bg-transparent border-transparent text-gray-500'
                    }
                  `}
                  disabled={!groupedByLetter[letter]}
                  onClick={() => handleLetterFilter(letter)}
                >
                  {letter}
                </Button>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-300">
                {selectedLetter ? (
                  <>Showing {filteredDiagnoses.length} conditions starting with "{selectedLetter}"</>
                ) : (
                  <>Browse {Object.keys(groupedByLetter).length} available letters</>
                )}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Diagnoses;
