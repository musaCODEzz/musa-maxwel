export interface NavItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProjectItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  githubUrl: string;
  liveUrl?: string;
  apiDocsUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  name: "Musa Maxwel",
  initials: "MM",
  handle: "musaCODEzz",
  title: "Fullstack Engineer & Systems Builder",
  location: "Nairobi, Kenya",
  email: "musamaxwell15@gmail.com",
  phone: "+254 795 782 509",
  whatsappUrl: "https://wa.me/254795782509",
  status: "Available for fullstack & backend roles",
  bioHeadline: "I build systems that scale — from API design and vehicle verification engines to distributed cloud platforms. Based in Nairobi, working with teams across Africa and beyond.",

  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ] as NavItem[],

  stats: [
    { n: "60+", label: "Public Repos" },
    { n: "3+", label: "Live Systems" },
    { n: "+254", label: "Nairobi, Kenya" }
  ],

  about: {
    tag: "001 / About",
    headingLine1: "Built for",
    headingLine2: "scale.",
    paragraphs: [
      "I'm a fullstack software engineer with deep roots in African web and fintech infrastructure. Over the past several years, I've focused on shipping software that real people depend on — anti-fraud automotive verification engines, developer publication hubs, and mobile money payment microservices.",
      "My technical work spans the full stack: I'm equally at home architecting anti-rollback verification algorithms in TypeScript, designing high-throughput REST APIs with OpenAPI/Swagger, or crafting responsive, accessible user interfaces. I believe good engineering is fundamentally about clarity — in code, in communication, and in real-world reliability.",
      "Outside of software engineering, I explore automotive technologies, contribute to open-source developer tooling on GitHub (@musaCODEzz), and engage with Nairobi's vibrant developer community."
    ],
    skills: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Modern CSS", "Vite"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs"]
      },
      {
        category: "Databases",
        items: ["PostgreSQL", "MongoDB", "Redis", "SQLite"]
      },
      {
        category: "Practices & DevOps",
        items: ["Docker", "GitHub Actions", "System Design", "Vitest / Jest", "Vercel / Render"]
      }
    ] as SkillGroup[]
  },

  projects: [
    {
      number: "01",
      title: "AutoLog KE",
      description:
        "Kenya's digital vehicle passport and anti-rollback odometer verification platform engineered to eliminate used-car fraud in East Africa. Features privacy-preserving vehicle URLs (/passport/:slug), mathematical rollback curve anomaly detection, and a verified spare-parts RFQ engine.",
      tags: ["TypeScript", "Express.js", "MongoDB", "Vitest", "Docker"],
      year: "2026",
      githubUrl: "https://github.com/musaCODEzz/autolog-backend",
      liveUrl: "https://musacodezz.github.io/autolog-backend/"
    },
    {
      number: "02",
      title: "StackPulse (BLOG-API)",
      description:
        "Production-grade developer publication engine featuring interactive OpenAPI / Swagger UI documentation, dual JWT authentication with refresh token rotation, Google OAuth 2.0, and automated Vitest test suites. Frontend deployed on Vercel, backend hosted on Render.",
      tags: ["TypeScript", "React", "Express.js", "Swagger", "Render", "Vercel"],
      year: "2026",
      githubUrl: "https://github.com/musaCODEzz/BLOG-API-FRONTEND",
      liveUrl: "https://blog-api-frontend-neon.vercel.app/",
      apiDocsUrl: "https://blog-api-backend-mh0s.onrender.com/api-docs"
    },
    {
      number: "03",
      title: "Nexa Kenya",
      description:
        "Modern business and web application platform delivering intuitive service discovery, interactive digital experiences, and sub-second paint times. Built with Next.js and deployed continuously on Vercel.",
      tags: ["Next.js", "TypeScript", "Modern CSS", "Vercel"],
      year: "2026",
      githubUrl: "https://github.com/musaCODEzz/eMobilis-Fullstack-Dev",
      liveUrl: "https://nexa-kenya.vercel.app/"
    },
    {
      number: "04",
      title: "M-Pesa DARAJA Gateway",
      description:
        "Backend payment microservice integrating Safaricom's M-Pesa DARAJA API. Handles STK Push (Lipa Na M-Pesa Online), cryptographic OAuth token caching, and resilient callback webhook listeners with signature verification.",
      tags: ["Node.js", "Express.js", "REST API", "Axios"],
      year: "2024",
      githubUrl: "https://github.com/musaCODEzz/MPESA-DARAJA-API"
    },
    {
      number: "05",
      title: "E-Commerce Shop API",
      description:
        "Scalable e-commerce backend built with TypeScript, managing multi-tier product catalogs, user cart states, and resilient order workflows using high-performance MongoDB aggregation pipelines and JWT role-based access control.",
      tags: ["TypeScript", "Node.js", "Express.js", "MongoDB", "JWT"],
      year: "2026",
      githubUrl: "https://github.com/musaCODEzz/shop-api"
    },
    {
      number: "06",
      title: "On-Chain Voting DApp",
      description:
        "Ethereum-based voting decentralized application engineered with Solidity smart contracts and Hardhat for auditable, tamper-proof governance ballots with gas-optimized state structures.",
      tags: ["Solidity", "Hardhat", "JavaScript", "Web3.js"],
      year: "2023",
      githubUrl: "https://github.com/musaCODEzz/voting-dapp"
    }
  ] as ProjectItem[],

  experience: [
    {
      role: "Full-Stack Software Engineer & Platform Builder",
      company: "AutoLog KE / Independent",
      period: "2025 — Present",
      description:
        "Architecting Kenya's vehicle passport verification platform and developer tooling. Built mathematical anti-clocking algorithms to detect odometer fraud, standardized Kenyan vehicle registration and phone normalization rules, and authored OpenAPI-compliant REST APIs backed by Vitest automated test suites."
    },
    {
      role: "Software Developer",
      company: "Namu Cars Ltd",
      period: "2024 — 2025",
      description:
        "Designed and deployed scalable web applications using Python (Flask), React.js, and Node.js, managing containerized environments with Docker to support over 10,000 users. Automated deployment workflows with GitHub Actions and Jenkins, cutting release cycle times by 20%."
    },
    {
      role: "Data & Marketing Researcher",
      company: "KOKO Networks",
      period: "2023 — 2024",
      description:
        "Developed automated data processing scripts with Python (Pandas) and SQL, building analytical pipelines and internal dashboards across 20+ operational stakeholders. Contributed to data migration tasks and AWS cloud workflows aligned with DevOps best practices."
    }
  ] as ExperienceItem[],

  socials: [
    { label: "GitHub", href: "https://github.com/musaCODEzz" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/musa-maxwel/" },
    { label: "Twitter / X", href: "https://twitter.com/musaCODEzz" }
  ]
};
