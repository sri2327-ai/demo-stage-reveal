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
