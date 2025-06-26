
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Filter className="w-4 h-4 mr-2" />
            Medical Resource Center
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
            Medical Diagnoses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive resource for medical conditions with detailed ICD-10 coding information, 
            documentation requirements, and clinical guidance for healthcare professionals.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
              <Input
                type="text"
                placeholder="Search medical conditions, symptoms, or ICD codes..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                  setSelectedLetter('');
                }}
                className="pl-12 h-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-lg transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Medical Conditions
              {selectedLetter && (
                <span className="ml-3 text-blue-600">
                  Starting with "{selectedLetter}"
                </span>
              )}
            </h2>
            <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full border">
              {filteredDiagnoses.length} of {mockDiagnoses.length} conditions
            </div>
          </div>

          {currentDiagnoses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentDiagnoses.map((diagnosis) => (
                <Link 
                  key={diagnosis.id} 
                  to={`/diagnoses/${diagnosis.id}`}
                  className="group block"
                >
                  <Card className="h-full bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white group-hover:border-blue-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-xs font-mono bg-blue-50 text-blue-700 border-blue-200">
                          {diagnosis.primaryCode}
                        </Badge>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                        {diagnosis.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {diagnosis.description}
                      </p>
                      
                      {diagnosis.alsoKnownAs.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Also known as</p>
                          <div className="flex flex-wrap gap-2">
                            {diagnosis.alsoKnownAs.slice(0, 2).map((term, index) => (
                              <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                                {term}
                              </Badge>
                            ))}
                            {diagnosis.alsoKnownAs.length > 2 && (
                              <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-600">
                                +{diagnosis.alsoKnownAs.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-500 font-medium">{diagnosis.codeType}</span>
                        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
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
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-16 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No conditions found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse by letter below.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLetter('');
                  }}
                  className="bg-white hover:bg-blue-50"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageChange(currentPage - 1);
                      }}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'hover:bg-blue-50'}
                    />
                  </PaginationItem>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(pageNum);
                          }}
                          isActive={currentPage === pageNum}
                          className={currentPage === pageNum ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) handlePageChange(currentPage + 1);
                      }}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'hover:bg-blue-50'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>

        {/* Alphabet Navigation - Moved Below Content */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Quick Navigation</CardTitle>
            <p className="text-center text-gray-600">Browse conditions by first letter</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-13 lg:grid-cols-26 gap-2">
              {alphabet.map(letter => (
                <Button
                  key={letter}
                  variant={selectedLetter === letter ? "default" : groupedByLetter[letter] ? "outline" : "ghost"}
                  size="sm"
                  className={`
                    h-12 w-full text-lg font-bold transition-all duration-200
                    ${selectedLetter === letter 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : groupedByLetter[letter] 
                        ? 'hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700' 
                        : 'opacity-30 cursor-not-allowed'
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
              <p className="text-sm text-gray-500">
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
