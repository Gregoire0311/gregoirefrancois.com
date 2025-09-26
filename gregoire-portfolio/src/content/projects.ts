export interface Project {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  stack: string[];
  role: string[];
  demoType: "Training/Demo" | "Client Project" | "Personal";
  repoUrl: string;
  liveUrl: string;
  description: string;
  impact: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    slug: "the-green-goblins",
    title: "The Green Goblins",
    tagline: "E-commerce website for historical military relics sales",
    image: "/projects/39-45-logo.jpg",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Stripe"],
    role: ["Full-stack development", "UI/UX Design", "Payment integration"],
    demoType: "Personal",
    repoUrl: "#",
    liveUrl: "#",
    description: "A modern e-commerce website developed in TypeScript for selling historical military relics (medals, hats, collectibles) with a secure and intuitive interface.",
    impact: [
      "Modern and responsive user interface",
      "Secure payment system",
      "Catalog organized by eras and categories",
      "Optimized shopping experience"
    ],
    features: [
      "Product catalog with advanced filters",
      "Shopping cart and checkout system",
      "Stripe payment integration",
      "Order management and history",
      "Responsive design with Tailwind CSS",
      "SEO and performance optimization"
    ],
    challenges: [
      "High-resolution image management",
      "Transaction security",
      "Intuitive interface for all ages",
      "Performance optimization"
    ],
    learnings: [
      "E-commerce development with TypeScript",
      "Payment system integration",
      "Inventory and order management",
      "UX design for online commerce"
    ]
  },
  {
    slug: "git-helper-pro",
    title: "Git Helper Pro",
    tagline: "Git management application with genealogical tree visualization",
    image: "/projects/git-helper-pro-logo.jpg",
    stack: ["TypeScript", "React", "Node.js", "Git API"],
    role: ["Full-stack development", "User interface", "Git integration"],
    demoType: "Personal",
    repoUrl: "#",
    liveUrl: "#",
    description: "A TypeScript application that allows connecting to a GitHub repository and performing Git operations (commits, push, pull, branches) with genealogical tree visualization.",
    impact: [
      "Intuitive interface for Git management",
      "Clear visualization of branch history",
      "Simplification of complex Git operations"
    ],
    features: [
      "GitHub repository connection",
      "Commit, push and pull management",
      "Branch creation and management",
      "Genealogical tree visualization of branches",
      "Modern and responsive user interface"
    ],
    challenges: [
      "GitHub API integration",
      "Complex Git history visualization",
      "Permission and authentication management",
      "Performance optimization for large repositories"
    ],
    learnings: [
      "GitHub API mastery",
      "Data visualization interface development",
      "Programmatic Git operations management",
      "Complex TypeScript application architecture"
    ]
  },
  {
    slug: "aluminum-foundry-erp",
    title: "Aluminum Foundry ERP",
    tagline: "Production management system for aluminum foundry",
    image: "/projects/aluminum-foundry.jpg",
    stack: ["PHP", "SQL", "CSS", "HTML"],
    role: ["Full-stack development", "Database design", "Business logic", "UI/UX"],
    demoType: "Personal",
    repoUrl: "#",
    liveUrl: "#",
    description: "Custom ERP system developed for an aluminum foundry to manage their production processes, inventory, and business operations.",
    impact: [
      "Streamlined production management",
      "Improved inventory tracking",
      "Enhanced business process efficiency"
    ],
    features: [
      "Production planning and scheduling",
      "Inventory management system",
      "Order tracking and fulfillment",
      "Reporting and analytics dashboard"
    ],
    challenges: [
      "Understanding complex foundry operations",
      "Designing intuitive user interface for non-technical users",
      "Optimizing database performance for large datasets"
    ],
    learnings: [
      "Business process analysis and optimization",
      "Custom ERP development",
      "Database design for manufacturing operations"
    ]
  }
] as const;
