import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroBadge } from "@/components/ui/HeroBadge";
import { specialties } from "@/data/specialties";
import { Search } from "lucide-react";

const allTags = Array.from(new Set(specialties.flatMap(s => s.tags))).sort();

export default function SpecialtyHub() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return specialties.filter(s => {
      const matchesTags = activeTags.length === 0 || activeTags.every(t => s.tags.includes(t));
      const matchesQuery = q.trim() === "" || `${s.name} ${s.description}`.toLowerCase().includes(q.toLowerCase());
      return matchesTags && matchesQuery;
    });
  }, [activeTags, q]);

  const toggleTag = (tag: string) => {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <>
      <Helmet>
        <title>Specialty Hub: Explore AI workflows and blogs by specialty</title>
        <meta name="description" content="Discover specialties and read tailored blog posts about AI medical scribe and agent workflows. Filter by tags and dive into best practices." />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/70 to-indigo-50/70" />
          <div className="absolute inset-0 bg-checker-grid" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <HeroBadge>
                Specialty Hub
              </HeroBadge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">Explore specialties and tailored insights</h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">Find your specialty, filter by tags, and read posts on workflows, coding, and patient experience.</p>
              <div className="max-w-2xl mx-auto flex items-center gap-2 rounded-full bg-white/70 border border-white/40 backdrop-blur px-4 py-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search specialties..." className="flex-1 bg-transparent outline-none text-sm" />
              </div>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {allTags.map(tag => (
                  <Button key={tag} size="sm" variant={activeTags.includes(tag) ? "default" : "secondary"} className="rounded-full" onClick={() => toggleTag(tag)}>
                    {tag}
                  </Button>
                ))}
                {activeTags.length > 0 && (
                  <Button size="sm" variant="ghost" onClick={() => setActiveTags([])}>Clear filters</Button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((s) => (
                <Card key={s.slug} className="bg-card border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-xl mb-2">{s.name}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{s.description}</p>
                      </div>
                      <Badge variant="secondary">{s.posts.length} posts</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {s.tags.map(t => (
                        <Badge key={t} variant="outline" className="rounded-full">{t}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button className="premium-button rounded-full px-4" onClick={() => navigate(`/specialties/${s.slug}`)}>View posts</Button>
                      <Link className="story-link text-sm self-center" to={`/specialties/${s.slug}`}>Learn more</Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
