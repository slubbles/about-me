import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant={project.status === "LIVE" ? "default" : "secondary"}>
              {project.status}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{project.role}</p>
          <p className="text-lg mb-6">{project.description}</p>

          <div className="flex gap-4 flex-wrap">
            {project.liveUrl && (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Highlights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Challenges */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Technical Challenges</h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">
                    Problem: {challenge.problem}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">
                      Solution:
                    </span>{" "}
                    {challenge.solution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Back to Projects */}
        <div className="text-center pt-8">
          <Button asChild size="lg">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
