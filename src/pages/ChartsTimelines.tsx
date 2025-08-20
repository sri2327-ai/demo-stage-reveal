import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, ChevronLeft, ChevronRight, BarChart3, Clock, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockChartsTimelines } from '@/data/mockChartsTimelines';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ITEMS_PER_PAGE = 9;

const ChartsTimelines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { 
      id: 'scoring', 
      name: 'Scoring Systems, Scales, and Classifications', 
      icon: BarChart3,
      description: 'Clinical scoring systems and assessment scales',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'protocols', 
      name: 'Clinical Protocols, Timelines, and Bundles', 
      icon: Clock,
      description: 'Evidence-based clinical protocols and care bundles',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'charts', 
      name: 'Charts and Tools', 
      icon: FileText,
      description: 'Reference charts and diagnostic tools',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  // Filter items based on search term and selected category
  const filteredItems = useMemo(() => {
    return mockChartsTimelines.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.alsoKnownAs.some(term => term.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryFilter = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? '' : categoryId);
    setCurrentPage(1);
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.color || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || FileText;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-[#143151] text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-200/40">
            <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Clinical Resources
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#143151] mb-4 sm:mb-6">
            Charts & Timelines
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive collection of clinical scoring systems, protocols, reference charts, and assessment tools 
            for evidence-based healthcare decision making.
          </p>
        </div>

        {/* Category Filter Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151] text-center mb-6 sm:mb-8">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {categories.map(category => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <Card 
                  key={category.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isSelected 
                      ? 'ring-2 ring-[#387E89] shadow-lg bg-gradient-to-br from-[#387E89]/5 to-[#143151]/5' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => handleCategoryFilter(category.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#143151] mb-2 leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                    <div className="mt-4 text-xs text-[#387E89] font-medium">
                      {mockChartsTimelines.filter(item => item.category === category.id).length} items
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
                placeholder="Search scoring systems, protocols, charts..." 
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
              Clinical Resources
              {selectedCategory && (
                <span className="ml-2 sm:ml-3 text-[#387E89] text-lg sm:text-xl lg:text-2xl">
                  - {categories.find(cat => cat.id === selectedCategory)?.name}
                </span>
              )}
            </h2>
            <div className="text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200/50">
              {filteredItems.length} of {mockChartsTimelines.length} resources
            </div>
          </div>

          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              {currentItems.map(item => {
                const Icon = getCategoryIcon(item.category);
                return (
                  <Link key={item.id} to={`/charts-timelines/${item.id}`} className="group block">
                    <Card className="h-full bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 hover:border-[#387E89]/30">
                      <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-2 sm:mb-3">
                          <div className="flex items-center space-x-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(item.category)}`}>
                              <Icon className="h-4 w-4 text-white" />
                            </div>
                            <Badge variant="outline" className="text-xs font-medium bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                              {item.type}
                            </Badge>
                          </div>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-[#387E89] group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                        <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-[#143151] group-hover:text-[#387E89] transition-colors line-clamp-2 leading-tight">
                          {item.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 p-4 sm:p-6">
                        <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-xs sm:text-sm lg:text-base">
                          {item.description}
                        </p>
                        
                        {item.alsoKnownAs.length > 0 && (
                          <div className="mb-3 sm:mb-4">
                            <p className="text-xs font-semibold text-gray-500 mb-1.5 sm:mb-2 uppercase tracking-wide">Also known as</p>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {item.alsoKnownAs.slice(0, 2).map((term, index) => (
                                <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200">
                                  {term}
                                </Badge>
                              ))}
                              {item.alsoKnownAs.length > 2 && (
                                <Badge variant="secondary" className="text-xs bg-[#387E89]/10 text-[#387E89] border border-[#387E89]/20">
                                  +{item.alsoKnownAs.length - 2} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200/60">
                          <span className="text-xs text-gray-500 font-medium capitalize">{item.category}</span>
                          <div className="flex items-center text-[#387E89] text-xs sm:text-sm font-medium group-hover:text-[#143151] transition-colors">
                            View Details
                            <ArrowRight className="ml-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm mx-4 sm:mx-0">
              <CardContent className="p-6 sm:p-8 lg:p-16 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#387E89]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 text-[#387E89]" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] mb-2">No resources found</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Try adjusting your search terms or browse by category above.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
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

export default ChartsTimelines;