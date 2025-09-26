'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/content/site';
import { MapPin, Globe, Code, Calendar } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 text-sm bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200">
            {siteConfig.hero.badge}
          </Badge>


          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            {siteConfig.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {siteConfig.hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('about')}
              className="text-base"
            >
              {siteConfig.hero.cta.about}
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-base"
            >
              {siteConfig.hero.cta.contact}
            </Button>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">{siteConfig.quickFacts.location}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <Globe className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">{siteConfig.quickFacts.languages}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200">
              <Code className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-800">{siteConfig.quickFacts.stack}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200">
              <Calendar className="h-4 w-4 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-800">{siteConfig.quickFacts.availability}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
