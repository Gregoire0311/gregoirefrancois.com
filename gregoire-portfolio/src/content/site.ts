export const siteConfig = {
  name: "Grégoire FRANÇOIS",
  role: "Freelance Web & Application Developer",
  location: "Bayonne, FR — Available worldwide",
  languages: ["Français", "English", "Español"],
  availability: "Open to projects — Sept 2025",
  email: "gregoire.p.francois@gmail.com",
  github: "https://github.com/Gregoire0311",
  linkedin: "https://www.linkedin.com/in/grégoire-françois-943436209/",
  
  // SEO
  title: "Grégoire FRANÇOIS - Freelance Web & Application Developer",
  description: "Freelance Web & Application Developer based in Bayonne, France. I build fast, clean, and reliable web experiences with modern technologies.",
  url: "https://gregoirefrancois.dev", // TODO: Replace with real domain
  
  // Hero content
  hero: {
    title: "Freelance Web & App Developer",
    tagline: "I build fast, clean, and reliable web experiences.",
    cta: {
      about: "About me",
      contact: "Contact Me"
    },
    badge: "Currently open for freelance work"
  },
  
  // Quick facts
  quickFacts: {
    location: "Bayonne, FR",
    languages: "FR/EN/ESP",
    stack: "TS/React/Next/Tailwind",
    availability: "Open to projects"
  },
  
  // Skills
  skills: {
    frontend: {
      title: "Frontend",
      items: [
        { name: "TypeScript", level: "Proficient" },
        { name: "React/Next.js", level: "Proficient" },
        { name: "Tailwind CSS", level: "Proficient" },
        { name: "shadcn/ui", level: "Working" }
      ]
    },
    backend: {
      title: "Backend",
      items: [
        { name: "Node.js", level: "Working" },
        { name: "Express", level: "Working" },
        { name: "REST APIs", level: "Working" },
        { name: "SQL Basics", level: "Exploring" }
      ]
    },
    devops: {
      title: "DevOps",
      items: [
        { name: "Vercel", level: "Proficient" },
        { name: "Git", level: "Proficient" },
        { name: "Docker", level: "Exploring" }
      ]
    },
    tools: {
      title: "Outils",
      items: [
        { name: "Figma", level: "Working" },
        { name: "Cursor", level: "Proficient" },
        { name: "VSCode", level: "Proficient" }
      ]
    }
  },
  
  // Services
  services: [
    {
      title: "Landing Pages",
      description: "Conversion-optimized landing pages",
      deliverables: ["Responsive design", "SEO-ready", "Fast loading", "Clean code"],
      icon: "LandingPage"
    },
    {
      title: "Web Apps",
      description: "Modern and performant web applications",
      deliverables: ["Full-stack development", "Database integration", "User authentication", "API development"],
      icon: "WebApp"
    },
    {
      title: "Automations & Integrations",
      description: "System automation and integration",
      deliverables: ["Workflow automation", "Third-party integrations", "Data synchronization", "Custom scripts"],
      icon: "Automation"
    },
    {
      title: "Maintenance",
      description: "Ongoing support and maintenance",
      deliverables: ["Bug fixes", "Performance optimization", "Security updates", "Feature enhancements"],
      icon: "Maintenance"
    }
  ],
  
  // Process
  process: [
    {
      step: 1,
      title: "Discovery",
      description: "Needs analysis and goal definition",
      icon: "Search"
    },
    {
      step: 2,
      title: "Prototype",
      description: "Mockup creation and concept validation",
      icon: "Palette"
    },
    {
      step: 3,
      title: "Build",
      description: "Development with testing and optimization",
      icon: "Code"
    },
    {
      step: 4,
      title: "Handover",
      description: "Delivery and user training",
      icon: "Handover"
    }
  ],
  
  // About
  about: {
    title: "About me",
    content: "Currently formalizing my freelance status, I focus on quality, fast communication, and clear documentation delivery. My approach emphasizes close collaboration with clients to understand their specific needs and deliver tailored solutions.",
    interests: [
      "Modern web development",
      "Performance optimization",
      "User experience",
      "Process automation"
    ]
  },
  
  // Footer
  footer: {
    disclaimer: "Independent freelancer — portfolio site. Some projects are training/demo. Current revenue: 0 (starting phase).",
    social: {
      github: "https://github.com/...",
      linkedin: "https://www.linkedin.com/in/...",
      email: "gregoire.p.francois@gmail.com"
    }
  }
} as const;
