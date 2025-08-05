import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Book, Stethoscope } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  getAllAbbreviations, 
  searchAbbreviations, 
  getAbbreviationsByLetter 
} from "@/data/medicalAbbreviations";

const MedicalAbbreviations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  
  const allAbbreviations = getAllAbbreviations();
  const filteredAbbreviations = searchQuery 
    ? searchAbbreviations(searchQuery)
    : selectedLetter 
    ? getAbbreviationsByLetter(selectedLetter)
    : allAbbreviations;

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLetter("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Book className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Medical Abbreviations & Acronyms
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            A comprehensive A-Z clinical glossary of medical abbreviations used in healthcare documentation, 
            patient records, and clinical communication. Essential reference for healthcare professionals 
            and medical students.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Stethoscope className="h-4 w-4" />
            <span>Clinically Accurate • Patient-Friendly Definitions • SEO Optimized</span>
          </div>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Abbreviations
            </CardTitle>
            <CardDescription>
              Find medical abbreviations by term, full form, or definition
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search abbreviations (e.g., HTN, blood pressure, heart...)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedLetter("");
                }}
                className="pl-10 h-12 text-base"
              />
            </div>

            {/* Alphabet Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter by Letter:</span>
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
                    className="w-10 h-10"
                  >
                    {letter}
                  </Button>
                ))}
                {(selectedLetter || searchQuery) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="ml-2"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              Showing {filteredAbbreviations.length} of {allAbbreviations.length} abbreviations
              {searchQuery && ` for "${searchQuery}"`}
              {selectedLetter && ` starting with "${selectedLetter}"`}
            </div>
          </CardContent>
        </Card>

        {/* Abbreviations Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAbbreviations.map((abbr) => (
            <Link
              key={abbr.abbreviation}
              to={`/medical-abbreviations/${abbr.abbreviation.toLowerCase()}`}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 bg-card/60 backdrop-blur-sm group-hover:bg-card/80">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {abbr.abbreviation}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {abbr.specialty}
                    </Badge>
                  </div>
                  <CardDescription className="font-semibold text-base">
                    {abbr.fullForm}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3 line-clamp-2">
                    {abbr.plainDefinition}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="px-2 py-1 bg-muted/50 rounded">
                      {abbr.system}
                    </span>
                    {abbr.icd10Code && (
                      <span className="font-mono">
                        ICD-10: {abbr.icd10Code}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredAbbreviations.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No abbreviations found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search query or browse by letter
              </p>
              <Button onClick={clearFilters} variant="outline">
                Show All Abbreviations
              </Button>
            </CardContent>
          </Card>
        )}

        {/* SEO Content Section */}
        <Card className="mt-12 border-0 bg-card/30 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Why Medical Abbreviations Matter in Healthcare
              </h2>
              <p className="mb-4">
                Medical abbreviations are essential shorthand used throughout healthcare to ensure 
                efficient communication while maintaining precision. From emergency rooms to clinical 
                documentation, these standardized terms help healthcare professionals quickly convey 
                complex medical information.
              </p>
              <p className="mb-4">
                Our comprehensive glossary provides clear, patient-friendly definitions alongside 
                clinical context to bridge the gap between medical terminology and understanding. 
                Each abbreviation includes specialty information, related terms, and when applicable, 
                relevant ICD-10 codes for accurate medical coding.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MedicalAbbreviations;