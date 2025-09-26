import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/content/site';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{siteConfig.about.title}</h2>
        </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Photo section */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="/projects/gregoirefrancois.jpg"
                  alt="Grégore François"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>

            {/* Content section */}
            <div className="lg:col-span-2 grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>My Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {siteConfig.about.content}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Areas of Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {siteConfig.about.interests.map((interest, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{interest}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted rounded-full">
              <Badge variant="secondary" className="text-xs">
                Portfolio under construction
              </Badge>
              <span className="text-sm text-muted-foreground">
                — some projects are training demos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
