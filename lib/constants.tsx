export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Web Development",
    description: "Fast, accessible, and responsive web applications built with modern frameworks and best practices."
  },
  {
    title: "Custom Software",
    description: "Tailored solutions for complex business problems. From internal tools to customer-facing platforms."
  },
  {
    title: "UI/UX Implementation",
    description: "Pixel-perfect implementation of designs with attention to interaction details, accessibility, and performance."
  },
  {
    title: "Maintenance & Scaling",
    description: "Ongoing support, performance optimization, and architecture evolution as your product grows."
  }
];

export const projects = [
  {
    title: "South West Exposures",
    description: "Medical isotope shield catalouge and inquiry system. Custom admin content management system for adding, updating, and deleting products. Built for scalability",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    client: "South West Exposures",
    problem: "The existing WordPress site for South West Exposures was outdated, with a confusing UI, poor SEO performance, and static content that made updates difficult. It lacked the design sophistication, scalability, and technical foundation needed to effectively showcase complex products and support long-term growth.",
    solution: "The solution was a complete rebuild using Next.js and PostgreSQL, featuring a modern, responsive design, dynamic content management, SEO-optimized pages, and high-quality 3D product visuals. This allowed the team to easily update content, improve search visibility, and present complex products clearly to users.",
    outcomes: [
      "Indexed pages increased 60%+, with key products ranking top 10–20.",
      "Content updates reduced by ~98%, no developer needed.",
      "Polished, responsive design and 3D visuals"
    ],
    slug: "south-west-exposures"
  }
];

export const extendedServices = [
  {
    title: "Web Development",
    description: "Modern, fast, and accessible web applications built with the latest frameworks and best practices. From marketing sites to complex web apps, every project is engineered for performance and maintainability.",
    audience: "Startups, growing businesses, and established companies looking for a reliable web presence or complex web application.",
    features: [
      "Server-rendered and static applications",
      "Progressive web app capabilities",
      "SEO optimization and Core Web Vitals",
      "Responsive, mobile-first design",
      "CMS integration and content management",
      "API development and third-party integrations"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    )
  },
  {
    title: "Custom Software",
    description: "Purpose-built software solutions designed around your specific business needs. No templates, no compromises. Every feature is crafted to solve real problems and integrate with your existing workflows.",
    audience: "Companies with unique business processes that off-the-shelf solutions cannot adequately serve.",
    features: [
      "Internal tools and dashboards",
      "Data processing and automation",
      "Custom API and microservice architecture",
      "Legacy system modernization",
      "Database design and optimization",
      "Authentication and authorization systems"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },
  {
    title: "UI/UX Implementation",
    description: "Pixel-perfect translation of designs into production code. Whether you have Figma files, design systems, or wireframes, I bring them to life with meticulous attention to detail, animation, and interactivity.",
    audience: "Design agencies, product teams, and companies with existing designs that need expert frontend engineering.",
    features: [
      "Figma to code conversion",
      "Design system development",
      "Interaction design and animation",
      "Accessibility compliance (WCAG)",
      "Cross-browser and device testing",
      "Component library architecture"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
      </svg>
    )
  },
  {
    title: "Maintenance & Scaling",
    description: "Ongoing partnership to keep your software running smoothly and evolving with your business. From bug fixes to performance optimization to adding major new features.",
    audience: "Companies with existing applications that need reliable, ongoing engineering support and strategic technical guidance.",
    features: [
      "Performance monitoring and optimization",
      "Security updates and vulnerability patching",
      "Feature development and iteration",
      "Infrastructure scaling and migration",
      "Code refactoring and technical debt reduction",
      "Documentation and knowledge transfer"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    )
  }
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your project goals, constraints, timeline, and technical requirements. I ask the right questions to fully understand the problem before writing a single line of code."
  },
  {
    step: "02",
    title: "Proposal",
    description: "I deliver a clear project scope, architecture overview, timeline, and transparent pricing. No surprises, no hidden costs."
  },
  {
    step: "03",
    title: "Build",
    description: "Development happens in iterative sprints with regular demos and check-ins. You see progress weekly and can provide feedback in real-time."
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Thorough testing, performance optimization, and deployment. Post-launch support ensures everything runs smoothly as real users arrive."
  }
];
