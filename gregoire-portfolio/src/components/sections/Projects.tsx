'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/content/projects';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover my recent projects, including training demos and client projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge 
            variant={project.demoType === 'Training/Demo' ? 'secondary' : 'default'}
            className={project.demoType === 'Training/Demo' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'}
          >
            {project.demoType}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.tagline}</CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-4">
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
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm mb-2">Role:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {project.role.map((role, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link href={`/projects/${project.slug}`}>
                View details
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
