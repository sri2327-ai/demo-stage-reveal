
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { DiagnosisCard } from '@/components/DiagnosisCard';
import { mockDiagnoses } from '@/data/mockDiagnoses';

const ITEMS_PER_PAGE = 12;

const Diagnoses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter diagnoses based on search term
  const filteredDiagnoses = useMemo(() => {
    return mockDiagnoses.filter(diagnosis =>
      diagnosis.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diagnosis.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diagnosis.alsoKnownAs.some(term => 
        term.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredDiagnoses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentDiagnoses = filteredDiagnoses.slice(startIndex, endIndex);

  // Group diagnoses by first letter for navigation
  const groupedByLetter = useMemo(() => {
    const groups: { [key: string]: number } = {};
    filteredDiagnoses.forEach(diagnosis => {
      const firstLetter = diagnosis.name.charAt(0).toUpperCase();
      groups[firstLetter] = (groups[firstLetter] || 0) + 1;
    });
    return groups;
  }, [filteredDiagnoses]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Diagnoses</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive resource for medical conditions with detailed ICD-10 coding information, 
            documentation requirements, and clinical guidance.
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search medical conditions..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Alphabet Navigation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Quick Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {alphabet.map(letter => (
                <Button
                  key={letter}
                  variant={groupedByLetter[letter] ? "default" : "outline"}
                  size="sm"
                  className="w-10 h-10"
                  disabled={!groupedByLetter[letter]}
                  onClick={() => {
                    setSearchTerm(letter);
                    setCurrentPage(1);
                  }}
                >
                  {letter}
                </Button>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredDiagnoses.length} of {mockDiagnoses.length} conditions
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {currentDiagnoses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentDiagnoses.map((diagnosis) => (
                <DiagnosisCard key={diagnosis.id} diagnosis={diagnosis} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) handlePageChange(currentPage - 1);
                        }}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
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
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No conditions found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse by letter.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Diagnoses;
