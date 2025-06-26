
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

interface DiagnosisCardProps {
  diagnosis: {
    id: string;
    name: string;
    description: string;
    alsoKnownAs: string[];
    primaryCode: string;
    codeType: string;
  };
}

export const DiagnosisCard: React.FC<DiagnosisCardProps> = ({ diagnosis }) => {
  return (
    <Link to={`/diagnoses/${diagnosis.id}`} className="block group">
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 bg-white border border-blue-200/40">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {diagnosis.name}
            </CardTitle>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {diagnosis.description}
          </p>
          
          {diagnosis.alsoKnownAs.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-medium text-gray-500 mb-2">Also known as:</p>
              <div className="flex flex-wrap gap-1">
                {diagnosis.alsoKnownAs.slice(0, 2).map((term, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {term}
                  </Badge>
                ))}
                {diagnosis.alsoKnownAs.length > 2 && (
                  <Badge variant="secondary" className="text-xs">
                    +{diagnosis.alsoKnownAs.length - 2} more
                  </Badge>
                )}
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div>
              <Badge variant="outline" className="text-xs">
                {diagnosis.primaryCode}
              </Badge>
            </div>
            <span className="text-xs text-gray-500">{diagnosis.codeType}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
