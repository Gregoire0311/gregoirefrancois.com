import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/content/projects";
import { ExternalLink, Github, ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AluminumFoundryERPage() {
  const project = projects.find(p => p.slug === "aluminum-foundry-erp");

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
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
                  <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    {project.demoType}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {project.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    {project.tagline}
                  </p>
                  <p className="text-muted-foreground mb-8">
                    {project.description}
                  </p>
                  
                  {/* Client Logo */}
                  <div className="mb-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 inline-block">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-muted-foreground">Client:</span>
                        <img 
                          src="/alu-fonte-logo.svg" 
                          alt="ALU FONTE Logo" 
                          className="h-10 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  
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
                      src={project.image}
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
                          'bg-gradient-to-r from-purple-500 to-indigo-500 text-white',
                          'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
                          'bg-gradient-to-r from-pink-500 to-rose-500 text-white',
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
                  <CardTitle>Business Impact</CardTitle>
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

              {/* Project Context */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <span>Project Context</span>
                    <img 
                      src="/alu-fonte-logo.svg" 
                      alt="ALU FONTE Logo" 
                      className="h-6 w-auto"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground mb-4">
                      This project involved developing a comprehensive ERP system for <strong>ALU FONTE</strong>, 
                      an aluminum foundry, addressing their specific production management needs. The system was built from scratch 
                      to handle the complex workflows of aluminum production, from raw material tracking to 
                      finished product delivery.
                    </p>
                    <p className="text-muted-foreground">
                      The solution required deep understanding of manufacturing processes, inventory management, 
                      and business operations to create a system that would truly benefit the company&apos;s daily operations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Project Screenshots */}
              <div className="mt-8 space-y-8">
                <h2 className="text-2xl font-bold text-center">Interface Screenshots</h2>
                
                {/* Homepage Screenshot */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span>Homepage</span>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Dashboard
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          The ERP homepage provides a comprehensive overview of the foundry&apos;s operations. 
                          It displays key metrics, important alerts, and quick access to main modules.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            <span>Real-time dashboard with KPIs</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            <span>Intuitive navigation to all modules</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            <span>Important alerts and notifications</span>
                          </li>
                        </ul>
                      </div>
                      <div className="aspect-video relative overflow-hidden rounded-lg border shadow-sm">
                        <Image
                          src="/projects/accueil.jpg"
                          alt="ERP Homepage"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Purchasing Module Screenshot */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span>Purchasing Module</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Purchasing
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          The purchasing module manages the entire procurement process, 
                          from purchase order creation to delivery tracking and invoicing.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            <span>Supplier and catalog management</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            <span>Purchase order creation and tracking</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            <span>Budget control and approvals</span>
                          </li>
                        </ul>
                      </div>
                      <div className="aspect-video relative overflow-hidden rounded-lg border shadow-sm">
                        <Image
                          src="/projects/achats.jpg"
                          alt="ERP Purchasing Module"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technical Drawings Screenshot */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span>Technical Drawings Management</span>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        Documentation
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Dedicated module for storing and managing technical drawings of foundry parts. 
                          Provides quick access to technical specifications and production documents.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            <span>Centralized storage of technical PDFs</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            <span>Advanced search and filtering</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            <span>Versioning and change history</span>
                          </li>
                        </ul>
                      </div>
                      <div className="aspect-video relative overflow-hidden rounded-lg border shadow-sm">
                        <Image
                          src="/projects/drawings.jpg"
                          alt="ERP Technical Drawings Module"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
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
