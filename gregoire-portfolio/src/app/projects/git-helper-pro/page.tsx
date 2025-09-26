import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/content/projects";
import { ExternalLink, Github, ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GitHelperProPage() {
  const project = projects.find(p => p.slug === "git-helper-pro");

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/#projects" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {project.demoType}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {project.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    {project.tagline}
                  </p>
                  <p className="text-muted-foreground mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/projects/git-helper-pro-logo.jpg"
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Technologies */}
                <Card>
                  <CardHeader>
                    <CardTitle>Technologies Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => {
                        const colors = [
                          'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
                          'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
                          'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
                          'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                        ];
                        return (
                          <Badge key={tech} variant="outline" className={`text-xs ${colors[index % colors.length]}`}>
                            {tech}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Role */}
                <Card>
                  <CardHeader>
                    <CardTitle>My Role</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.role.map((role, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{role}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Impact */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Project Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.impact.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Application Screenshot */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Application Interface</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <Image
                      src="/projects/git-helper-pro.jpg"
                      alt="Git Helper Pro Screenshot"
                      width={400}
                      height={600}
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-3 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Challenges & Learnings */}
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-3 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Learnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-3 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
