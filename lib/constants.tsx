import { rgbaGenerator } from "./utils";

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export const email = "connorkfitzsimmons@fitzsystems.ca";

export const calendlyUrl = "https://calendly.com/connorkfitzsimmons-fitzsystems/30min";

export const services = [
  {
    title: "Web Development",
    description: "Fast, accessible, and responsive web applications built with modern frameworks and databases."
  },
  {
    title: "Custom Software",
    description: "Tailored solutions for complex business problems. From internal tools to customer-facing platforms."
  },
  {
    title: "UI/UX Implementation",
    description: "Accurate translation of design systems into functional interfaces, ensuring refined interactions, accessibility compliance, and performance."
  },
  {
    title: "Maintenance & Scaling",
    description: "Ongoing support, performance optimization, and architecture evolution as your product grows."
  }
];

export const projects = [
  {
    title: "South West Exposures",
    description: "Medical isotope shield catalogue and inquiry system with a fully customized content management dashboard for managing products efficiently. Engineered for scalability, maintainability, and long-term growth.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    client: "South West Exposures",
    problem: "The existing WordPress site for South West Exposures was outdated, with a confusing UI, poor SEO performance, and static content that made updates difficult. It lacked the design sophistication, scalability, and technical foundation needed to effectively showcase complex products and support long-term growth.",
    solution: "A complete rebuild was implemented with Next.js and PostgreSQL, introducing a scalable, responsive architecture with dynamic content management. The platform streamlines content updates, has dynamic product pages optimized for SEO, and features a polished design with 3D renderings.",
    outcomes: [
      "60%+ increase in indexed pages; products rank top 10–20.",
      "Content updates reduced by ~98%, no developer needed.",
      "Polished, responsive design and 3D visuals"
    ],
    liveUrl: "https://swexposures.com",
    slug: "south-west-exposures"
  }
];

export const extendedServices = [
  {
    title: "Web Development",
    description: "Modern, fast, and accessible web applications built with reliable frameworks and best practices. From marketing sites to complex web apps, every project is engineered for performance and maintainability.",
    audience: "Startups, growing businesses, and established companies looking for a reliable web presence or complex web application.",
    features: [
      "Server-rendered and static applications",
      "SEO optimization and Core Web Vitals",
      "Responsive design and cross-device compatibility",
      "CMS integration and content management",
      "API development and third-party integrations",
      "Progressive web app capabilities"

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
      "Authentication and authorization systems",
      "Custom API and microservice architecture",
      "Internal tools and dashboards",
      "Data processing and automation",
      "Legacy system modernization",
      "Database design and optimization",
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
      "Cross-browser and device compatibility",
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
      "Code refactoring and technical debt reduction",
      "Documentation and knowledge transfer",
      "Feature development and iteration",
      "Infrastructure scaling and migration"
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
    description: "We discuss your project goals, constraints, timeline, and technical requirements. We ask the right questions to fully understand the problem."
  },
  {
    step: "02",
    title: "Proposal",
    description: "We deliver a clear project scope, architecture overview, timeline, and price."
  },
  {
    step: "03",
    title: "Build",
    description: "Development happens in iterative sprints. You see progress bi-weekly demos and provide feedback in real-time."
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Performance optimization, deployment, and post-launch support."
  }
];

export const budgetOptions = [
  { value: "5K", label: "Under $5,000" },
  { value: "5-10k", label: "$5,000 - $10,000" },
  { value: "10-25k", label: "$10,000 - $25,000" },
  { value: "25-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" }
];

const heroColors = {
  purple: "99,102,241",
  green: "16,185,129",
  blue: "59,130,246",
  pink: "244,114,182"
};

const heroAlphas = {
  strong: 0.24,
  medium: 0.20,
  light: 0.18
}

export const heroShapes = [
  { left: 6, size: 28, delay: 0, dur: 12, r: 6, color: rgbaGenerator(heroColors.purple, heroAlphas.medium) },
  { left: 18, size: 48, delay: 1.2, dur: 14, r: 999, color: rgbaGenerator(heroColors.green, heroAlphas.medium) },
  { left: 30, size: 20, delay: 0.6, dur: 10, r: 4, color: rgbaGenerator(heroColors.blue, heroAlphas.medium) },
  { left: 42, size: 64, delay: 2.4, dur: 16, r: 8, color: rgbaGenerator(heroColors.pink, heroAlphas.light) },
  { left: 54, size: 36, delay: 0.8, dur: 11, r: 10, color: rgbaGenerator(heroColors.purple, heroAlphas.strong) },
  { left: 66, size: 22, delay: 1.8, dur: 13, r: 999, color: rgbaGenerator(heroColors.green, heroAlphas.light) },
  { left: 78, size: 44, delay: 0.2, dur: 15, r: 6, color: rgbaGenerator(heroColors.blue, heroAlphas.light) },
  { left: 86, size: 30, delay: 2.0, dur: 12, r: 999, color: rgbaGenerator(heroColors.pink, heroAlphas.medium) },
  { left: 12, size: 18, delay: 3.0, dur: 9, r: 4, color: rgbaGenerator(heroColors.purple, heroAlphas.light) },
  { left: 26, size: 50, delay: 2.6, dur: 17, r: 12, color: rgbaGenerator(heroColors.green, heroAlphas.light) },
  { left: 48, size: 26, delay: 1.0, dur: 10, r: 999, color: rgbaGenerator(heroColors.blue, heroAlphas.light) },
  { left: 70, size: 40, delay: 2.8, dur: 14, r: 8, color: rgbaGenerator(heroColors.pink, heroAlphas.light) }
];
