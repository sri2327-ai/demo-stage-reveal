import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, ChevronLeft, ChevronRight, FileText, Stethoscope, ClipboardList } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockMedicalPhrases, getUniqueSpecialties, getUniqueSections } from '@/data/mockMedicalPhrases';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ITEMS_PER_PAGE = 9;

const MedicalPhrases = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');

  const specialties = getUniqueSpecialties().map(specialty => ({
    id: specialty.toLowerCase().replace(/\s+/g, '-'),
    name: specialty,
    icon: Stethoscope,
    description: `Clinical phrases commonly used in ${specialty}`,
    color: 'from-[#143151] to-[#387E89]'
  }));

  const sections = getUniqueSections().map(section => ({
    id: section.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, ''),
    name: section,
    icon: ClipboardList,
    description: `Phrases used in ${section}`,
    color: 'from-[#143151] to-[#387E89]'
  }));

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Filter items based on search term, selected specialty, section, and letter
  const filteredItems = useMemo(() => {
    return mockMedicalPhrases.filter(item => {
      const matchesSearch = item.phrase.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.meaning.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.clinicalContext.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.relatedPhrases.some(phrase => phrase.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesSpecialty = selectedSpecialty ? item.specialty === selectedSpecialty : true;
      const matchesSection = selectedSection ? item.sectionOfNote === selectedSection : true;
      const matchesLetter = selectedLetter ? item.phrase.charAt(0).toUpperCase() === selectedLetter : true;
      return matchesSearch && matchesSpecialty && matchesSection && matchesLetter;
    });
  }, [searchTerm, selectedSpecialty, selectedSection, selectedLetter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSpecialtyFilter = (specialty: string) => {
    setSelectedSpecialty(selectedSpecialty === specialty ? '' : specialty);
    setCurrentPage(1);
  };

  const handleSectionFilter = (section: string) => {
    setSelectedSection(selectedSection === section ? '' : section);
    setCurrentPage(1);
  };

  const handleLetterFilter = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? '' : letter);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 backdrop-blur-sm rounded-full text-[#143151] text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-[#387E89]/30">
            <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Clinical Documentation
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#143151] mb-4 sm:mb-6">
            Medical Phrases Hub
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive collection of commonly used medical phrases in clinical documentation, 
            organized by specialty and section of medical notes.
          </p>
        </div>

        {/* Alphabetical Filter */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151] text-center mb-6 sm:mb-8">
            Browse Alphabetically
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {alphabet.map(letter => {
              const isSelected = selectedLetter === letter;
              const hasItems = mockMedicalPhrases.some(phrase => phrase.phrase.charAt(0).toUpperCase() === letter);
              return (
                <Button
                  key={letter}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleLetterFilter(letter)}
                  disabled={!hasItems}
                  className={`w-10 h-10 ${
                    isSelected 
                      ? 'bg-[#387E89] text-white border-[#387E89] hover:bg-[#143151]' 
                      : hasItems 
                        ? 'text-[#143151] border-[#143151]/30 hover:bg-[#387E89]/10 hover:text-[#387E89] hover:border-[#387E89]'
                        : 'opacity-30 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Specialty Filter Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151] text-center mb-6 sm:mb-8">
            Browse by Specialty
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {specialties.map(specialty => {
              const Icon = specialty.icon;
              const isSelected = selectedSpecialty === specialty.name;
              const itemCount = mockMedicalPhrases.filter(item => item.specialty === specialty.name).length;
              return (
                <Card 
                  key={specialty.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isSelected 
                      ? 'ring-2 ring-[#387E89] shadow-lg bg-gradient-to-br from-[#387E89]/5 to-[#143151]/5' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => handleSpecialtyFilter(specialty.name)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${specialty.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-[#143151] mb-1 leading-tight">
                      {specialty.name}
                    </h3>
                    <div className="text-xs text-[#387E89] font-medium">
                      {itemCount} phrases
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Section Filter */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151] text-center mb-6 sm:mb-8">
            Browse by Note Section
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {sections.map(section => {
              const Icon = section.icon;
              const isSelected = selectedSection === section.name;
              const itemCount = mockMedicalPhrases.filter(item => item.sectionOfNote === section.name).length;
              return (
                <Card 
                  key={section.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isSelected 
                      ? 'ring-2 ring-[#387E89] shadow-lg bg-gradient-to-br from-[#387E89]/5 to-[#143151]/5' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => handleSectionFilter(section.name)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-[#143151] mb-1 leading-tight">
                      {section.name}
                    </h3>
                    <div className="text-xs text-[#387E89] font-medium">
                      {itemCount} phrases
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto px-4">
            <div className="relative group">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5 group-focus-within:text-[#387E89] transition-colors" />
              <Input 
                type="text" 
                placeholder="Search medical phrases, meanings, contexts..." 
                value={searchTerm} 
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }} 
                className="pl-10 sm:pl-12 h-10 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-[#387E89] focus:ring-4 focus:ring-[#387E89]/20 shadow-lg transition-all duration-200 text-gray-900 placeholder:text-gray-500" 
              />
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4 px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">
              Medical Phrases
              {(selectedSpecialty || selectedSection || selectedLetter) && (
                <span className="ml-2 sm:ml-3 text-[#387E89] text-lg sm:text-xl lg:text-2xl">
                  {selectedLetter && `- ${selectedLetter}`}
                  {selectedSpecialty && ` - ${selectedSpecialty}`}
                  {selectedSection && ` - ${selectedSection}`}
                </span>
              )}
            </h2>
            <div className="text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200/50">
              {filteredItems.length} of {mockMedicalPhrases.length} phrases
            </div>
          </div>

          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              {currentItems.map(item => (
                <Link key={item.id} to={`/medical-phrases/${item.id}`} className="group block">
                  <Card className="h-full bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-xl hover:shadow-[#387E89]/10 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-[#387E89]/5 hover:to-[#143151]/5 hover:border-[#387E89]/30">
                    <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="flex items-center space-x-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-r from-[#143151] to-[#387E89]`}>
                            <FileText className="h-4 w-4 text-white" />
                          </div>
                          <Badge variant="outline" className="text-xs font-medium bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                            {item.specialty}
                          </Badge>
                        </div>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-[#387E89] group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-[#143151] group-hover:text-[#387E89] transition-colors line-clamp-2 leading-tight">
                        {item.phrase}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 p-4 sm:p-6">
                      <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-xs sm:text-sm lg:text-base">
                        {item.meaning}
                      </p>
                      
                      <div className="mb-3 sm:mb-4">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200 mb-2">
                          {item.sectionOfNote}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200/60">
                        <span className="text-xs text-gray-500 font-medium">{item.specialty}</span>
                        <div className="flex items-center text-[#387E89] text-xs sm:text-sm font-medium group-hover:text-[#143151] transition-colors">
                          View Details
                          <ArrowRight className="ml-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm mx-4 sm:mx-0">
              <CardContent className="p-6 sm:p-8 lg:p-16 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#387E89]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 text-[#387E89]" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] mb-2">No phrases found</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Try adjusting your search terms or browse by specialty or section above.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSpecialty('');
                    setSelectedSection('');
                    setSelectedLetter('');
                  }} 
                  className="bg-transparent border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white text-sm sm:text-base"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 sm:mt-12 px-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(currentPage - 1)} 
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-[#387E89]/10 hover:text-[#387E89]"} 
                    />
                  </PaginationItem>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink 
                          onClick={() => handlePageChange(pageNum)} 
                          isActive={currentPage === pageNum} 
                          className={currentPage === pageNum ? 
                            "bg-[#387E89] text-white border-[#387E89] hover:bg-[#143151]" : 
                            "text-gray-600 hover:bg-[#387E89]/10 hover:text-[#387E89] cursor-pointer"
                          }
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(currentPage + 1)} 
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-[#387E89]/10 hover:text-[#387E89]"} 
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalPhrases;