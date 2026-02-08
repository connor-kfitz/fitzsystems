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
    description:
      "Fast, accessible, and responsive web applications built with modern frameworks and best practices."
  },
  {
    title: "Custom Software",
    description:
      "Tailored solutions for complex business problems. From internal tools to customer-facing platforms."
  },
  {
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect implementation of designs with attention to interaction details, accessibility, and performance."
  },
  {
    title: "Maintenance & Scaling",
    description:
      "Ongoing support, performance optimization, and architecture evolution as your product grows."
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
