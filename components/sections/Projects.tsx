"use client";

import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Live production systems and frameworks I've built
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <Card className="flex flex-col hover:shadow-xl transition-shadow h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant={project.status === "LIVE" ? "default" : "secondary"}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.role}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-muted-foreground mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap mt-4">
                  <Button asChild size="sm" className="flex-1">
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
