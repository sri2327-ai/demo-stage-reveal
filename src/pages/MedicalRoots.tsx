import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Book, Stethoscope, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  getAllRoots, 
  searchRoots, 
  getRootsByLetter 
} from "@/data/medicalRoots";

const MedicalRoots = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  
  const allRoots = getAllRoots();
  const filteredRoots = searchQuery 
    ? searchRoots(searchQuery)
    : selectedLetter 
    ? getRootsByLetter(selectedLetter)
    : allRoots;

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLetter("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center">
              <Book className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight">
              Medical Root Words
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            A comprehensive guide to medical root words used in healthcare terminology. 
            Understanding root words helps decode complex medical terms and improves clinical communication 
            for healthcare professionals and medical students.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 text-[#387E89]" />
              <span>Clinically Accurate</span>
            </div>
            <span className="hidden sm:block">•</span>
            <span>Etymology Included</span>
            <span className="hidden sm:block">•</span>
            <span>Example Words</span>
          </div>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8 sm:mb-12 bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold text-[#143151]">
              <Search className="h-5 w-5 sm:h-6 sm:w-6 text-[#387E89]" />
              Search & Filter Root Words
            </CardTitle>
            <CardDescription className="text-sm sm:text-base text-gray-600">
              Find medical root words by term, meaning, or example words
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 sm:space-y-8">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <Input
                placeholder="Search root words (e.g., cardi/o, heart, cardiology...)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedLetter("");
                }}
                className="pl-10 sm:pl-12 h-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-[#387E89] focus:ring-[#387E89]/20"
              />
            </div>

            {/* Alphabet Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-[#387E89]" />
                <span className="text-sm sm:text-base font-medium text-gray-700">Filter by Letter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {alphabet.map((letter) => (
                  <Button
                    key={letter}
                    variant={selectedLetter === letter ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedLetter(letter);
                      setSearchQuery("");
                    }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-200 ${
                      selectedLetter === letter 
                        ? "bg-gradient-to-br from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg"
                        : "border-gray-200 hover:border-[#387E89] hover:bg-[#387E89]/5 hover:text-[#387E89]"
                    }`}
                  >
                    {letter}
                  </Button>
                ))}
                {(selectedLetter || searchQuery) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="ml-2 sm:ml-4 text-gray-600 hover:text-[#387E89] hover:bg-[#387E89]/5"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Results Count */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
              <div className="text-sm sm:text-base text-blue-800 font-medium">
                Showing <span className="font-bold">{filteredRoots.length}</span> of <span className="font-bold">{allRoots.length}</span> root words
                {searchQuery && <span className="text-blue-600"> for "{searchQuery}"</span>}
                {selectedLetter && <span className="text-blue-600"> starting with "{selectedLetter}"</span>}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Root Words Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 sm:mb-12">
          {filteredRoots.map((root) => (
            <Link
              key={root.root}
              to={`/medical-roots/${encodeURIComponent(root.root.toLowerCase())}`}
              className="group block"
            >
              <Card className="h-full bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 hover:border-[#387E89]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:bg-white overflow-hidden">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <CardTitle className="text-xl sm:text-2xl font-bold text-[#143151] group-hover:text-[#387E89] transition-colors leading-tight">
                      {root.root}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs font-medium bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 flex-shrink-0">
                      {root.specialty}
                    </Badge>
                  </div>
                  <CardDescription className="font-semibold text-sm sm:text-base text-gray-700 leading-snug">
                    {root.meaning}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-2 leading-relaxed">
                    {root.clinicalContext}
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Examples</p>
                    <div className="space-y-1">
                      {root.examples.slice(0, 2).map((example, index) => (
                        <div key={index} className="text-xs">
                          <span className="font-medium text-[#143151]">{example.word}</span>
                          <span className="text-gray-600"> - {example.definition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium flex-shrink-0">
                      {root.origin}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredRoots.length === 0 && (
          <Card className="text-center py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60">
            <CardContent>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Search className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#143151]">No root words found</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base max-w-md mx-auto">
                Try adjusting your search query or browse by letter to find what you're looking for
              </p>
              <Button 
                onClick={clearFilters} 
                variant="outline"
                className="border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
              >
                Show All Root Words
              </Button>
            </CardContent>
          </Card>
        )}

        {/* SEO Content Section */}
        <Card className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151] mb-4 sm:mb-6 text-center">
                Understanding Medical Root Words in Healthcare
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Medical root words are the foundation of medical terminology, providing the core meaning 
                  to complex medical terms. Understanding these root words helps healthcare professionals 
                  and students decode medical terminology efficiently and communicate patient conditions accurately.
                </p>
                <p>
                  Our comprehensive root word guide includes etymology, clinical context, and real-world examples 
                  to help you master medical terminology. Each root word entry provides multiple example words 
                  with clear definitions to reinforce learning and practical application.
                </p>
                <p>
                  Whether you're studying for medical boards, working in clinical practice, or simply wanting 
                  to understand medical documentation better, mastering these root words is fundamental to 
                  healthcare communication and patient care excellence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Card className="bg-gradient-to-br from-[#143151] to-[#387E89] border-0 shadow-xl overflow-hidden">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Enhance Your Medical Documentation Skills
              </h2>
              <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Use S10.AI's intelligent coding assistant to ensure accurate medical terminology usage 
                and streamline your clinical documentation process.
              </p>
              <Link to="/demo" className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#143151] font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-sm sm:text-base">
                Start with S10.AI
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MedicalRoots;