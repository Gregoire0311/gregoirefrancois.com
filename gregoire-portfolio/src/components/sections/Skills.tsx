import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/content/site';

const skillLevels = {
  'Proficient': 'default',
  'Working': 'secondary',
  'Exploring': 'outline'
} as const;

const skillLevelColors = {
  'Proficient': 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
  'Working': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
  'Exploring': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
} as const;

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical skills organized by expertise domain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory
            title={siteConfig.skills.frontend.title}
            skills={siteConfig.skills.frontend.items}
          />
          <SkillCategory
            title={siteConfig.skills.backend.title}
            skills={siteConfig.skills.backend.items}
          />
          <SkillCategory
            title={siteConfig.skills.devops.title}
            skills={siteConfig.skills.devops.items}
          />
          <SkillCategory
            title={siteConfig.skills.tools.title}
            skills={siteConfig.skills.tools.items}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: readonly { name: string; level: keyof typeof skillLevels }[] 
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <Badge 
                variant={skillLevels[skill.level]}
                className={`text-xs ${skillLevelColors[skill.level]}`}
              >
                {skill.level}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
