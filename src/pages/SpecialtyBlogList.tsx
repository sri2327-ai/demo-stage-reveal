import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { specialties } from "@/data/specialties";

export default function SpecialtyBlogList(props: { slug?: string } = {}) {
  const params = useParams();
  const finalSlug = props.slug ?? params.slug;
  const specialty = specialties.find(s => s.slug === finalSlug);

  if (!specialty) {
    return (
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Specialty not found</h1>
        <Button asChild><Link to="/specialties">Back to Specialty Hub</Link></Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${specialty.name} Blogs: AI scribe & agents`}</title>
        <meta name="description" content={`Explore ${specialty.name} posts about AI medical scribe workflows, coding, and patient engagement.`} />
        <link rel="canonical" href={`/${specialty.slug}`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-subtle">
        <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/20">
          <div className="container">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-3">{specialty.name}</h1>
            <p className="text-muted-foreground max-w-2xl">{specialty.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {specialty.tags.map(t => <Badge key={t} variant="outline" className="rounded-full">{t}</Badge>)}
            </div>
          </div>
        </section>

        {/* S10.ai Platform Overview */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-500/5 to-blue-500/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-6 text-center">
                S10.ai — The AI-powered assistant transforming {specialty.name.toLowerCase()} care
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                Boost efficiency, reduce administrative burden, and improve patient outcomes with S10.ai. Our platform combines AI Scribe, AI Agents, and intelligent automation to streamline documentation, coding, and patient communication—all within your existing EHR.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-xl mb-3">AI Pre-Charting for {specialty.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Prepare for patient visits in minutes, not hours. S10.ai's AI Scribe + AI Agents deliver instant clinical priorities, updates, and patient insights—giving clinicians a complete, actionable view of every patient.</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-xl mb-3">Context-Aware Clinical Notes</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">S10.ai automatically surfaces key details from past visits and customizes notes for today's encounter. Always accurate. Always relevant.</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-xl mb-3">Intelligent Coding & Billing</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Capture the full complexity of care without manual effort. AI-driven coding ensures accurate ICD-10, HCC, and E/M assignments, reducing errors and optimizing revenue.</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-xl mb-3">AI Phone & Chat Agents</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Manage patient calls, messages, confirmations, and follow-ups effortlessly. Fully integrated with your EHR, AI Chat and Phone Agents triage inquiries, provide instant answers, and log summaries automatically.</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-8 text-center">
                  <h3 className="font-semibold text-xl mb-4">Seamless {specialty.name}-Specific EMR & App Integrations</h3>
                  <p className="text-muted-foreground">Connects with your {specialty.name.toLowerCase()}-specific EMR and 7,000+ productivity apps. No screen-switching. No duplicate entries. Just smarter workflows.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-bl from-blue-500/5 to-purple-500/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
                Results {specialty.name.toLowerCase()} practices love
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">~80%</div>
                    <p className="text-muted-foreground text-sm">clinician adoption</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">2.2</div>
                    <p className="text-muted-foreground text-sm">hours saved per day</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">34%</div>
                    <p className="text-muted-foreground text-sm">more ICD-10 codes captured</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">45%</div>
                    <p className="text-muted-foreground text-sm">fewer manual administrative tasks</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">3×</div>
                    <p className="text-muted-foreground text-sm">faster patient follow-ups</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">Improved</div>
                    <p className="text-muted-foreground text-sm">patient engagement via AI Chat & Phone Agents</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Designed by Experts Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-tr from-purple-500/5 to-blue-500/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
                  Designed by {specialty.name.toLowerCase()} experts, for {specialty.name.toLowerCase()} clinicians
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We build AI in partnership with clinical leaders to enhance care, streamline operations, and evolve based on real-world feedback.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Open feedback channels</h3>
                    <p className="text-muted-foreground text-sm">Direct communication with clinicians and onsite experts for continuous improvement</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Hands-on training</h3>
                    <p className="text-muted-foreground text-sm">Comprehensive training during pilots and rollout phases</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Rapid implementation</h3>
                    <p className="text-muted-foreground text-sm">Quick deployment of updates and change requests based on user needs</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Continuous support</h3>
                    <p className="text-muted-foreground text-sm">24/7 support via phone, email, and chat—optimized for AI Chat Agents</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialty.posts.map(p => (
                <Card key={p.slug} className="bg-card border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    {p.image && (
                      <div className="-mx-6 mb-4">
                        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-t-lg">
                          <img
                            src={p.image}
                            alt={p.imageAlt ?? `${p.title} – ${specialty.name}`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        </AspectRatio>
                      </div>
                    )}
                    <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span>{new Date(p.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{p.readingTime}</span>
                    </div>
                    <Button asChild className="premium-button rounded-full px-4"><Link to={`/${specialty.slug}/${p.slug}`}>Read post</Link></Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Call to Actions */}
            <div className="mt-16 pt-12 border-t border-border/50">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Explore More Resources</h2>
                <p className="text-muted-foreground">Enhance your {specialty.name.toLowerCase()} practice with our comprehensive tools</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">ICD-10 Codes</h3>
                    <p className="text-sm text-muted-foreground mb-4">Browse comprehensive ICD-10 diagnostic codes for accurate medical coding and documentation</p>
                    <Button asChild className="w-full">
                      <Link to="/icd10-codes">Explore ICD-10 Codes</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Documentation Templates</h3>
                    <p className="text-sm text-muted-foreground mb-4">Access ready-to-use clinical documentation templates to streamline your workflow</p>
                    <Button asChild className="w-full">
                      <Link to="/templates">Browse Templates</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="ghost" asChild><Link to="/specialties">← Back to Specialty Hub</Link></Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
