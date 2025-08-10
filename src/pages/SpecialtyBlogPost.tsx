import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { specialties } from "@/data/specialties";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";

export default function SpecialtyBlogPost() {
  const { slug, postSlug } = useParams();
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
      </Helmet>

      <article className="min-h-screen bg-gradient-subtle">
        <header className="py-16 lg:py-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/20">
          <div className="container max-w-3xl">
            <p className="text-sm text-muted-foreground mb-2"><Link to={`/specialties/${specialty.slug}`} className="story-link">{specialty.name} Blog</Link></p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-3">{post.title}</h1>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        <main className="py-12 lg:py-16">
          <div className="container max-w-3xl">
            {post.content.split("\n\n").map((para, idx) => (
              <p key={idx} className="mb-6 text-lg text-foreground/90 leading-relaxed">{para}</p>
            ))}

            <div className="mt-8">
              <Button variant="ghost" asChild><Link to={`/specialties/${specialty.slug}`}>← Back to {specialty.name} posts</Link></Button>
            </div>
          </div>
        </main>

        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <FAQSection title="Related FAQs" subtitle={`Common questions about ${specialty.name} workflows`} faqs={post.faqs.map(f => ({ question: f.question, answer: f.answer }))} />
          </div>
        </section>
      </article>
    </>
  );
}
