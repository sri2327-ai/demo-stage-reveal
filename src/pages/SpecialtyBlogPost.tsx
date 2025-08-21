import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { specialties } from "@/data/specialties";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "@/components/FAQSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function SpecialtyBlogPost(props: { slug?: string; postSlug?: string } = {}) {
  const params = useParams();
  const slug = props.slug ?? params.slug;
  const postSlug = props.postSlug ?? params.postSlug;
  const specialty = specialties.find(s => s.slug === slug);
  const post = specialty?.posts.find(p => p.slug === postSlug);

  if (!specialty || !post) {
    return (
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
        <Button asChild><Link to="/specialties">Back to Specialty Hub</Link></Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${post.title} – ${specialty.name} Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`/${specialty.slug}/${post.slug}`} />
      </Helmet>

      <article className="min-h-screen bg-gradient-subtle">
        <header className="py-16 lg:py-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/20">
          <div className="container max-w-3xl">
            <p className="text-sm text-muted-foreground mb-2"><Link to={`/${specialty.slug}`} className="story-link">{specialty.name} Blog</Link></p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-3">{post.title}</h1>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
            {post.image && (
              <div className="mt-6">
                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.imageAlt ?? `${post.title} – ${specialty.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              </div>
            )}
          </div>
        </header>

        <main className="py-12 lg:py-16">
          <div className="container max-w-3xl">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img {...props} className="my-6 w-full rounded-md shadow-sm" loading="lazy" decoding="async" alt={props.alt || `${post.title} illustration`} />
                ),
                a: ({ node, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer" className="underline decoration-primary/50 hover:decoration-primary">{props.children}</a>
                ),
                h1: ({ ...p }) => <h2 {...p} />,
              }}
            >
              {post.content}
            </ReactMarkdown>

            <div className="mt-8">
              <Button variant="ghost" asChild><Link to={`/${specialty.slug}`}>← Back to {specialty.name} posts</Link></Button>
            </div>
          </div>
        </main>

        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <FAQSection title="Related FAQs" subtitle={`Common questions about ${specialty.name} workflows`} faqs={post.faqs.map(f => ({ question: f.question, answer: f.answer }))} />
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Enhance Your Practice</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover comprehensive resources to streamline your {specialty.name.toLowerCase()} workflow and improve patient outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">ICD-10 Codes</h3>
                  <p className="text-sm text-muted-foreground mb-4">Browse comprehensive diagnostic codes for accurate medical coding</p>
                  <Button asChild className="w-full">
                    <Link to="/icd10-codes">Explore Codes</Link>
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
                  <h3 className="font-semibold text-lg mb-2">Templates</h3>
                  <p className="text-sm text-muted-foreground mb-4">Access ready-to-use clinical documentation templates</p>
                  <Button asChild className="w-full">
                    <Link to="/templates">Browse Templates</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m-6 0l6 6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Book a Demo</h3>
                  <p className="text-sm text-muted-foreground mb-4">Schedule a personalized demo to see S10.AI in action</p>
                  <Button asChild className="w-full" variant="secondary">
                    <a href="#" onClick={(e) => e.preventDefault()}>Schedule Demo</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
