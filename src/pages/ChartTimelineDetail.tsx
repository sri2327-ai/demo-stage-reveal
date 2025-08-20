import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Clock, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getChartTimelineById } from '@/data/mockChartsTimelines';
import { FAQSection } from '@/components/FAQSection';
import { CallToAction } from '@/components/CallToAction';

const ChartTimelineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = id ? getChartTimelineById(id) : null;

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#143151] mb-4">Resource Not Found</h1>
          <p className="text-gray-600 mb-6">The requested clinical resource could not be found.</p>
          <Link to="/charts-timelines">
            <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white">
              Back to Charts & Timelines
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'scoring': return BarChart3;
      case 'protocols': return Clock;
      case 'charts': return FileText;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'scoring': return 'from-blue-500 to-cyan-500';
      case 'protocols': return 'from-green-500 to-emerald-500';
      case 'charts': return 'from-purple-500 to-violet-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const Icon = getCategoryIcon(item.category);

  const renderScoringTemplate = () => (
    <div className="space-y-8">
      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-[#143151]">Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{item.details.purpose}</p>
        </CardContent>
      </Card>

      {/* Scoring Table */}
      {item.details.components && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">Scoring Components</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Component</TableHead>
                  <TableHead className="font-semibold">Score</TableHead>
                  <TableHead className="font-semibold">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {item.details.components.map((component, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{component.component}</TableCell>
                    <TableCell className="font-mono">{component.score}</TableCell>
                    <TableCell>{component.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Interpretation */}
      {item.details.interpretation && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">Interpretation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {item.details.interpretation.map((interp, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Badge variant="outline" className="font-mono text-sm min-w-fit">
                    {interp.range}
                  </Badge>
                  <p className="text-gray-700">{interp.meaning}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderProtocolTemplate = () => (
    <div className="space-y-8">
      {/* Objective */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-[#143151]">Objective</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{item.details.objective}</p>
        </CardContent>
      </Card>

      {/* Steps */}
      {item.details.steps && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">Protocol Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-6">
              {item.details.steps.map((step, index) => (
                <li key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-[#143151]">{step.step}</h4>
                      {step.timeframe && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          {step.timeframe}
                        </Badge>
                      )}
                    </div>
                    <ul className="space-y-2 ml-4">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-[#387E89] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderChartsTemplate = () => (
    <div className="space-y-8">
      {/* Purpose */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-[#143151]">Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{item.details.purpose}</p>
        </CardContent>
      </Card>

      {/* How to Use */}
      {item.details.usage && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">How to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {item.details.usage.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Interpretation */}
      {item.details.interpretation && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">Interpretation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {item.details.interpretation.map((interp, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Badge variant="outline" className="font-mono text-sm min-w-fit">
                    {interp.range}
                  </Badge>
                  <p className="text-gray-700">{interp.meaning}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/charts-timelines" 
            className="inline-flex items-center text-[#387E89] hover:text-[#143151] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Charts & Timelines
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-start space-x-4 mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(item.category)}`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                  {item.type}
                </Badge>
                <Badge variant="secondary" className="capitalize">
                  {item.category}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-2">
                {item.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          {/* Also Known As */}
          {item.alsoKnownAs.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Also known as</p>
              <div className="flex flex-wrap gap-2">
                {item.alsoKnownAs.map((term, index) => (
                  <Badge key={index} variant="secondary" className="bg-white text-gray-700 border border-gray-200">
                    {term}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content based on category */}
        <div className="mb-12">
          {item.category === 'scoring' && renderScoringTemplate()}
          {item.category === 'protocols' && renderProtocolTemplate()}
          {item.category === 'charts' && renderChartsTemplate()}
        </div>

        {/* Clinical Pearls */}
        {item.details.clinicalPearls && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#143151]">Clinical Pearls</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {item.details.clinicalPearls.map((pearl, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#387E89] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{pearl}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* FAQ Section */}
        {item.details.faqs && (
          <FAQSection
            title="Frequently Asked Questions"
            subtitle={`Common questions about ${item.name}`}
            faqs={item.details.faqs}
          />
        )}

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
};

export default ChartTimelineDetail;