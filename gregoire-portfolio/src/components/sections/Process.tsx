import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/content/site';

const processIcons = {
  Search: '🔍',
  Palette: '🎨',
  Code: '💻',
  Handover: '🤝'
} as const;

export function Process() {
  return (
    <section id="process" className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">My Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach to ensure your project&apos;s success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.process.map((step) => (
            <Card key={step.step} className="relative">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">
                  {processIcons[step.icon as keyof typeof processIcons]}
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
