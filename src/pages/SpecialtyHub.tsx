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
                  onChange={(val) => val && navigate(`/specialties/${val}`)}
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
                      <Link to={`/specialties/${s.slug}`}>Explore posts</Link>
                    </Button>
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
