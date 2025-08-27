import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, FlaskConical, Stethoscope, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  getAllLabTests, 
  searchLabTests, 
  getLabTestsBySpecialty,
  getAllSpecialties
} from "@/data/labTests";

const LabTests = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  
  const allLabTests = getAllLabTests();
  const allSpecialties = getAllSpecialties();
  const filteredLabTests = searchQuery 
    ? searchLabTests(searchQuery)
    : selectedSpecialty 
    ? getLabTestsBySpecialty(selectedSpecialty)
    : allLabTests;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSpecialty("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center">
              <FlaskConical className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight">
              Laboratory Tests & Reference Ranges
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive guide to common laboratory tests with normal reference ranges for men and women, 
            clinical significance, and documentation examples. Essential resource for healthcare professionals 
            and medical students.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 text-[#387E89]" />
              <span>Clinically Accurate</span>
            </div>
            <span className="hidden sm:block">•</span>
            <span>Gender-Specific Ranges</span>
            <span className="hidden sm:block">•</span>
            <span>Documentation Examples</span>
          </div>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8 sm:mb-12 bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold text-[#143151]">
              <Search className="h-5 w-5 sm:h-6 sm:w-6 text-[#387E89]" />
              Search & Filter Lab Tests
            </CardTitle>
            <CardDescription className="text-sm sm:text-base text-gray-600">
              Find laboratory tests by name, specialty, or clinical relevance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 sm:space-y-8">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <Input
                placeholder="Search lab tests (e.g., CBC, cholesterol, glucose...)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedSpecialty("");
                }}
                className="pl-10 sm:pl-12 h-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-[#387E89] focus:ring-[#387E89]/20"
              />
            </div>

            {/* Specialty Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-[#387E89]" />
                <span className="text-sm sm:text-base font-medium text-gray-700">Filter by Specialty:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {allSpecialties.map((specialty) => (
                  <Button
                    key={specialty}
                    variant={selectedSpecialty === specialty ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedSpecialty(specialty);
                      setSearchQuery("");
                    }}
                    className={`text-sm sm:text-base font-semibold transition-all duration-200 ${
                      selectedSpecialty === specialty 
                        ? "bg-gradient-to-br from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg"
                        : "border-gray-200 hover:border-[#387E89] hover:bg-[#387E89]/5 hover:text-[#387E89]"
                    }`}
                  >
                    {specialty}
                  </Button>
                ))}
                {(selectedSpecialty || searchQuery) && (
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
                Showing <span className="font-bold">{filteredLabTests.length}</span> of <span className="font-bold">{allLabTests.length}</span> lab tests
                {searchQuery && <span className="text-blue-600"> for "{searchQuery}"</span>}
                {selectedSpecialty && <span className="text-blue-600"> in {selectedSpecialty}</span>}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lab Tests Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 sm:mb-12">
          {filteredLabTests.map((test) => (
            <Link
              key={test.slug}
              to={`/lab-tests/${test.slug}`}
              className="group block"
            >
              <Card className="h-full bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 hover:border-[#387E89]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:bg-white overflow-hidden">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <CardTitle className="text-lg sm:text-xl font-bold text-[#143151] group-hover:text-[#387E89] transition-colors leading-tight">
                      {test.test_name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs font-medium bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 flex-shrink-0">
                      {test.specialty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3 leading-relaxed">
                    {test.clinical_relevance}
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">
                      {test.system}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredLabTests.length === 0 && (
          <Card className="text-center py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60">
            <CardContent>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Search className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#143151]">No lab tests found</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base max-w-md mx-auto">
                Try adjusting your search query or browse by specialty to find what you're looking for
              </p>
              <Button 
                onClick={clearFilters} 
                variant="outline"
                className="border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
              >
                Show All Lab Tests
              </Button>
            </CardContent>
          </Card>
        )}

        {/* SEO Content Section */}
        <Card className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151] mb-4 sm:mb-6 text-center">
                Understanding Laboratory Tests in Clinical Practice
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Laboratory tests are fundamental diagnostic tools that provide objective data about 
                  a patient's health status. From routine screening to specialized diagnostics, these 
                  tests help healthcare providers detect diseases early, monitor treatment progress, 
                  and make informed clinical decisions.
                </p>
                <p>
                  Our comprehensive laboratory reference guide provides gender-specific normal ranges, 
                  clinical significance, and real-world documentation examples. Each test entry includes 
                  specialty context and system classification to help healthcare professionals understand 
                  when and why specific tests are ordered.
                </p>
                <p>
                  Whether you're a medical student learning diagnostic principles, a healthcare professional 
                  interpreting results, or a patient seeking to understand your lab work, this resource 
                  serves as your trusted reference for laboratory medicine and clinical diagnostics.
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
                Ready to Streamline Your Lab Interpretation?
              </h2>
              <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Use S10.AI's intelligent clinical assistant to interpret lab results accurately 
                and reduce documentation time.
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

export default LabTests;