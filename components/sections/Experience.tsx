"use client";

import { experience } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Building production systems and shipping real products
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">
                  {experience.title}
                </CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                  <span>{experience.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{experience.period}</span>
                  {experience.location && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span>{experience.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary mt-1.5">▹</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        </FadeIn>
      </div>
    </section>
  );
}
