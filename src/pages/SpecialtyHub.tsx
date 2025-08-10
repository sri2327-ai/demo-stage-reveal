import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeroBadge } from "@/components/ui/HeroBadge";
import { specialties } from "@/data/specialties";

export default function SpecialtyHub() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedSpecialty = selected ? specialties.find((s) => s.slug === selected) : null;

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

              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {specialties.map((s) => (
                  <Button
                    key={s.slug}
                    size="sm"
                    variant={selected === s.slug ? "default" : "secondary"}
                    className="rounded-full"
                    onClick={() => setSelected(s.slug)}
                  >
                    {s.name}
                  </Button>
                ))}
                {selected && (
                  <Button size="sm" variant="ghost" onClick={() => setSelected(null)}>
                    Clear selection
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container">
            {!selectedSpecialty ? (
              <div className="text-center text-muted-foreground">
                Select a specialty above to see relevant posts.
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-6">{selectedSpecialty.name} Posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedSpecialty.posts.map((p) => (
                    <Card
                      key={p.slug}
                      className="bg-card border hover:shadow-elegant transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                          <span>{new Date(p.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{p.readingTime}</span>
                        </div>
                        <Button asChild className="premium-button rounded-full px-4">
                          <Link to={`/specialties/${selectedSpecialty.slug}/${p.slug}`}>
                            Read post
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
