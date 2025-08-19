import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeroBadge } from "@/components/ui/HeroBadge";
import { specialties } from "@/data/specialties";
import { SpecialtyCombobox } from "@/components/ui/SpecialtyCombobox";

export default function SpecialtyHub() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Specialty Hub: Explore AI workflows and blogs</title>
        <meta
          name="description"
          content="Choose a specialty and explore tailored posts about AI medical scribe workflows, coding, and patient engagement."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/70 to-indigo-50/70" />
          <div className="absolute inset-0 bg-checker-grid" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <HeroBadge>Specialty Hub</HeroBadge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
                Explore specialties and tailored insights
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Pick a specialty to instantly see relevant posts below.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <SpecialtyCombobox
                  items={specialties.map((s) => ({ label: s.name, value: s.slug }))}
                  value={null}
                  onChange={(val) => val && navigate(`/${val}`)}
                  placeholder="Select a specialty"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((s) => (
                <Card key={s.slug} className="bg-card border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span>{s.posts.length} posts</span>
                    </div>
                    <Button asChild className="premium-button rounded-full px-4">
                      <Link to={`/${s.slug}`}>See more details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials & Case Studies Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Success Stories
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
                Trusted by healthcare professionals
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                See how S10.AI transforms workflows across every medical specialty
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
              {/* Featured Testimonial */}
              <Card className="p-8 lg:p-12 bg-gradient-primary text-white relative overflow-hidden shadow-elegant">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
                <svg className="absolute top-6 left-6 w-12 h-12 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl lg:text-3xl leading-relaxed mb-8 font-medium">
                    "S10.AI transformed our cardiology practice. 3 hours saved daily, 40% revenue increase, and patients love the improved attention during visits."
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop&crop=face" 
                        alt="Dr. Michael Chen" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-xl mb-1">Dr. Michael Chen</p>
                      <p className="text-white/80 text-lg">Cardiology Associates</p>
                      <p className="text-white/60 text-sm mt-1">Boston, MA</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Video Testimonial */}
              <div className="relative">
                <Card className="p-2 bg-card/80 backdrop-blur-xl border border-white/10 shadow-elegant overflow-hidden">
                  <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary/80 to-primary/60 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop')] bg-cover bg-center opacity-40" />
                    <div className="relative z-10 text-center">
                      <Button size="lg" className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300 group">
                        <svg className="w-8 h-8 text-white ml-1 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </Button>
                      <p className="text-white font-medium mt-4 text-lg">Watch Dr. Sarah's Story</p>
                      <p className="text-white/70 text-sm">2 min demo</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card/80 backdrop-blur-xl border border-white/10 hover:shadow-elegant hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-primary/60 opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center text-white shadow-elegant group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-primary/60 text-white text-sm font-bold rounded-full mb-3">
                        75% Time Savings
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                        Emergency Medicine Practice Cuts Documentation Time by 75%
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Learn how Metro Emergency reduced charting from 45 to 12 minutes per patient while improving accuracy and physician satisfaction.
                  </p>
                  
                  <Button variant="ghost" className="text-accent hover:bg-accent/10 p-0 h-auto font-bold group-hover:translate-x-1 transition-transform duration-300">
                    Read Case Study
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-xl border border-white/10 hover:shadow-elegant hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent to-accent/60 opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center text-white shadow-elegant group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-accent to-accent/60 text-white text-sm font-bold rounded-full mb-3">
                        150% ROI
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                        Multi-Specialty Clinic Achieves 150% ROI in 6 Months
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Discover how Pacific Medical Group transformed operations across 5 specialties, seeing immediate improvements in efficiency and revenue.
                  </p>
                  
                  <Button variant="ghost" className="text-accent hover:bg-accent/10 p-0 h-auto font-bold group-hover:translate-x-1 transition-transform duration-300">
                    View Results
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
