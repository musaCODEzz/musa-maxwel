export interface Project {
  id: string;
  title: string;
  category: "fullstack" | "backend" | "web3" | "tools";
  categoryLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  apiDocsUrl?: string;
  featured: boolean;
  status: "Live Production" | "Active Demo" | "Open Source" | "In Development";
  stats?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  name: "Musa Maxwell",
  handle: "musaCODEzz",
  title: "Full-Stack Software Engineer & Distributed Systems Builder",
  location: "Nairobi, Kenya (+254)",
  email: "musamaxwell15@gmail.com",
  status: "Available for High-Impact Roles & Contracting",
  bio: "Talk less — Show me the code. I build resilient web applications, developer-first APIs, and fraud-resistant automotive systems that scale seamlessly.",
  metrics: [
    { label: "Public Repositories", value: "60+" },
    { label: "Primary Focus", value: "TypeScript & Python" },
    { label: "Core Architecture", value: "REST / Microservices" },
    { label: "Deployment Targets", value: "Vercel / Render / AWS" },
  ],
  socials: {
    github: "https://github.com/musaCODEzz",
    linkedin: "https://www.linkedin.com/in/musaCODEzz",
    twitter: "https://twitter.com/musaCODEzz",
    email: "mailto:musamaxwell15@gmail.com",
  },
  projects: [
    {
      id: "autolog-ke",
      title: "AutoLog KE",
      category: "fullstack",
      categoryLabel: "Automotive & FinTech",
      tagline: "Vehicle Passport & Anti-Rollback Odometer Verification Engine",
      description:
        "Kenya's digital vehicle passport, anti-rollback odometer verification platform, and verified spare-parts RFQ engine engineered to eliminate used-car fraud across East Africa.",
      highlights: [
        "Anti-Clocking Curve: Mathematical anomaly detection flagging mileage rollback tampering.",
        "Privacy-Preserving Passports: Publicly verifiable vehicle URLs (/passport/:slug) with masked registration plates (KD* ***P).",
        "East African Localization: Custom Kenyan plate normalization and E.164 (+254) phone standardization.",
        "Spare-parts RFQ engine connecting vehicle owners directly with vetted merchants."
      ],
      techStack: ["TypeScript", "Express.js", "MongoDB", "Vitest", "Modern CSS", "Docker"],
      githubUrl: "https://github.com/musaCODEzz/autolog-backend",
      featured: true,
      status: "Open Source",
      stats: "Core API & Verification Engine"
    },
    {
      id: "stackpulse",
      title: "StackPulse (BLOG-API)",
      category: "fullstack",
      categoryLabel: "Developer Platform",
      tagline: "Full-Stack Developer Publishing Engine & OpenAPI Hub",
      description:
        "A full-stack, production-grade developer publication engine featuring interactive API documentation, transactional auth, and real-time social metrics.",
      highlights: [
        "Security & Auth: Dual JWT architecture with refresh token rotation, Google OAuth 2.0, and transactional password recovery via Resend.",
        "Engagement Engine: Atomic clap and bookmark toggles, dynamic reading-time estimator, and view analytics.",
        "Interactive API Suite: Complete OpenAPI / Swagger UI suite with automated Vitest integration test suites.",
        "Cloud Deployment: Zero-downtime CI/CD deployment with frontend on Vercel and backend on Render."
      ],
      techStack: ["TypeScript", "React", "Express.js", "Swagger / OpenAPI", "Vitest", "Render", "Vercel"],
      liveUrl: "https://blog-api-frontend-neon.vercel.app/",
      apiDocsUrl: "https://blog-api-backend-mh0s.onrender.com/api-docs",
      githubUrl: "https://github.com/musaCODEzz/BLOG-API-FRONTEND",
      featured: true,
      status: "Live Production",
      stats: "Live on Vercel & Render"
    },
    {
      id: "nexa-kenya",
      title: "Nexa Kenya",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      tagline: "Digital Experience & Modern Services Platform",
      description:
        "Modern business and web application platform delivering intuitive service discovery, interactive digital experiences, and rapid performance.",
      highlights: [
        "Built with modern client-server architecture ensuring sub-second initial contentful paint.",
        "Responsive, mobile-first design with fluid transitions and accessible interactive states.",
        "Fully deployed and hosted on Vercel with automated branch previews and continuous deployment."
      ],
      techStack: ["Next.js", "TypeScript", "Modern CSS", "Vercel"],
      liveUrl: "https://nexa-kenya.vercel.app/",
      githubUrl: "https://github.com/musaCODEzz/eMobilis-Fullstack-Dev",
      featured: true,
      status: "Live Production",
      stats: "Hosted on Vercel"
    },
    {
      id: "mpesa-daraja",
      title: "M-Pesa DARAJA Gateway",
      category: "backend",
      categoryLabel: "Fintech & Payments",
      tagline: "Safaricom M-Pesa STK Push & Settlement Integration",
      description:
        "Engineered backend integration for Safaricom's M-Pesa DARAJA API powering seamless mobile money transactions for East African e-commerce.",
      highlights: [
        "STK Push (Lipa Na M-Pesa Online) initiation with cryptographic timestamp generation.",
        "Webhook listener with signature verification, handling instant callback processing.",
        "Automated OAuth token caching and renewal before expiration.",
        "Comprehensive transaction status inquiry and reconciliation logging."
      ],
      techStack: ["Node.js", "JavaScript", "Express.js", "Axios", "REST API"],
      githubUrl: "https://github.com/musaCODEzz/MPESA-DARAJA-API",
      featured: true,
      status: "Open Source",
      stats: "Payments Integration"
    },
    {
      id: "shop-api",
      title: "E-Commerce Shop API",
      category: "backend",
      categoryLabel: "Distributed Backend",
      tagline: "High-Throughput Inventory & Order Processing API",
      description:
        "Scalable e-commerce backend built with TypeScript, managing multi-tier product catalogs, user cart states, and resilient order workflows.",
      highlights: [
        "High-performance MongoDB aggregation pipelines for instant product filtering and sorting.",
        "JWT-secured customer and admin role-based access control (RBAC).",
        "Strict input validation and sanitization preventing injection attacks.",
        "Structured RESTful endpoints following OpenAPI industry conventions."
      ],
      techStack: ["TypeScript", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/musaCODEzz/shop-api",
      featured: false,
      status: "Open Source",
      stats: "E-Commerce Core"
    },
    {
      id: "voting-dapp",
      title: "On-Chain Voting DApp",
      category: "web3",
      categoryLabel: "Web3 & Blockchain",
      tagline: "Decentralized Governance & Transparent Balloting Protocol",
      description:
        "Ethereum-based voting decentralized application engineered with Solidity smart contracts and Hardhat for tamper-proof governance.",
      highlights: [
        "Auditable smart contract logic preventing double voting and unauthorized chairperson overrides.",
        "Local testnet simulation, unit tests, and contract deployment scripts using Hardhat.",
        "Gas-optimized state variables and event emitters for transparency on etherscan."
      ],
      techStack: ["Solidity", "Hardhat", "JavaScript", "Ethereum / Web3"],
      githubUrl: "https://github.com/musaCODEzz/voting-dapp",
      featured: false,
      status: "Open Source",
      stats: "Solidity / Hardhat"
    },
    {
      id: "finance-manager",
      title: "Personal Finance Manager",
      category: "tools",
      categoryLabel: "Python & Analytics",
      tagline: "Income, Expense & Budget Analytics Engine",
      description:
        "Python application designed for personal capital management, expense classification, budget thresholds, and analytical reporting.",
      highlights: [
        "Automated spending categorization and budget variance calculation.",
        "Structured data persistence with robust CSV and SQLite transaction handling.",
        "CLI and visual summary reports identifying expenditure leaks and saving targets."
      ],
      techStack: ["Python", "SQLite", "Data Analysis", "OOP Architecture"],
      githubUrl: "https://github.com/musaCODEzz/Personal_Finance_Manager",
      featured: false,
      status: "Open Source",
      stats: "Python / Data"
    },
    {
      id: "climate-api",
      title: "Global Climate News API",
      category: "backend",
      categoryLabel: "Data & Scraping",
      tagline: "Aggregated Climate & Environmental News Service",
      description:
        "Real-time news aggregation API collecting and standardizing worldwide environmental and climate updates from multiple leading publications.",
      highlights: [
        "Concurrent web scraping engine extracting clean headline and source metadata.",
        "Normalized REST endpoints with source-specific filtering and pagination.",
        "In-memory caching reducing redundant outgoing HTTP traffic."
      ],
      techStack: ["Node.js", "Express.js", "Axios", "Cheerio"],
      githubUrl: "https://github.com/musaCODEzz/Climate-API",
      featured: false,
      status: "Open Source",
      stats: "News Aggregator"
    }
  ] as Project[],

  skills: [
    {
      title: "Core Languages",
      description: "Strong foundational type-safe languages and scripting",
      skills: [
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Python", level: "Proficient" },
        { name: "SQL (PostgreSQL)", level: "Proficient" },
        { name: "Solidity", level: "Familiar" }
      ]
    },
    {
      title: "Backend & Systems",
      description: "Resilient server architecture, APIs, and microservices",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "REST API Design", level: "Advanced" },
        { name: "Swagger / OpenAPI", level: "Proficient" },
        { name: "FastAPI / Python", level: "Proficient" },
        { name: "Socket.io", level: "Proficient" }
      ]
    },
    {
      title: "Databases & Caching",
      description: "Data modeling, indexing, aggregation, and caching strategies",
      skills: [
        { name: "PostgreSQL", level: "Proficient" },
        { name: "MongoDB & Mongoose", level: "Advanced" },
        { name: "Redis", level: "Proficient" },
        { name: "SQLite", level: "Proficient" }
      ]
    },
    {
      title: "Frontend Engineering",
      description: "Responsive, high-performance UI and component systems",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js (App Router)", level: "Advanced" },
        { name: "Modern CSS / CSS3", level: "Advanced" },
        { name: "Tailwind CSS", level: "Proficient" },
        { name: "Vite", level: "Advanced" }
      ]
    },
    {
      title: "DevOps & Cloud",
      description: "Containerization, automated workflows, and production hosting",
      skills: [
        { name: "Docker", level: "Proficient" },
        { name: "GitHub Actions (CI/CD)", level: "Proficient" },
        { name: "Linux & Shell Scripting", level: "Advanced" },
        { name: "AWS (S3, EC2)", level: "Working Knowledge" },
        { name: "Vercel & Render", level: "Advanced" }
      ]
    },
    {
      title: "Quality & Security",
      description: "Testing pipelines, cryptographic auth, and defensive coding",
      skills: [
        { name: "Vitest & Jest", level: "Advanced" },
        { name: "JWT & Refresh Rotation", level: "Advanced" },
        { name: "OAuth 2.0 (Google)", level: "Proficient" },
        { name: "Helmet & CORS Hardening", level: "Advanced" },
        { name: "Rate Limiting", level: "Advanced" }
      ]
    }
  ] as SkillCategory[],

  terminalCommands: [
    {
      cmd: "whoami",
      description: "Display engineer profile and mission",
      output: [
        "Musa Maxwell (@musaCODEzz)",
        "Full-Stack Software Engineer based in Nairobi, Kenya.",
        "Mission: Build bulletproof web systems, developer APIs, and data-driven engines.",
        "Philosophy: Talk less — Show me the code."
      ]
    },
    {
      cmd: "projects --featured",
      description: "List primary production systems",
      output: [
        "1. AutoLog KE       -> Kenya's Vehicle Passport & Anti-Clocking Engine (TypeScript/Express/Mongo)",
        "2. StackPulse       -> Developer Publishing Hub + Swagger UI (Live: blog-api-frontend-neon.vercel.app)",
        "3. Nexa Kenya       -> Next.js Web Experience Platform (Live: nexa-kenya.vercel.app)",
        "4. M-Pesa Gateway   -> Safaricom Daraja STK Push & Callback Microservice"
      ]
    },
    {
      cmd: "tech-stack",
      description: "Output technical competencies",
      output: [
        "[LANGUAGES]   TypeScript, JavaScript, Python, SQL, Solidity",
        "[BACKEND]     Node.js, Express, Swagger, REST, Webhooks, Vitest",
        "[DATABASES]   MongoDB, PostgreSQL, Redis",
        "[FRONTEND]    Next.js, React, Modern CSS3, Vite",
        "[DEVOPS]      Docker, GitHub Actions, Vercel, Render, Linux"
      ]
    },
    {
      cmd: "contact",
      description: "Print reach-out channels",
      output: [
        "Email:    musamaxwell15@gmail.com",
        "GitHub:   https://github.com/musaCODEzz",
        "LinkedIn: https://www.linkedin.com/in/musaCODEzz",
        "Twitter:  https://twitter.com/musaCODEzz"
      ]
    }
  ]
};
