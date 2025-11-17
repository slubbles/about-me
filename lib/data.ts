export const personalInfo = {
  name: "Idderf Salem",
  nickname: "Slubbles",
  title: "Full Stack Developer | Web3 & Blockchain Specialist",
  email: "idderfsalem98@gmail.com",
  github: "https://github.com/slubbles",
  linkedin: "https://www.linkedin.com/in/idderfsalem/",
  twitter: "https://x.com/idderfsalem",
  website: "https://snarbles.xyz",
  location: "Philippines 🇵🇭",
  timezone: "UTC+8",
  pronouns: "he/him",
  bio: "Full-stack developer building production Web3 and traditional web apps. I ship complete MVPs end-to-end—from smart contracts to polished UIs. Real products, real users.",
  tagline: "Building production systems that people actually use",
  highlights: [
    "End-to-end development: Smart contracts to polished UIs",
    "Live production systems serving real users",
    "Expertise in both Web3 (Solana/Algorand) and traditional web stacks",
    "Payment integration specialist (Stripe, crypto)",
  ],
};

export const skills = {
  Blockchain: [
    "Solana (Web3.js, Anchor, Rust)",
    "Algorand SDK",
    "SOON Network",
    "Smart Contracts",
    "DeFi",
  ],
  Frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "shadcn/ui",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Supabase",
    "API Integration",
    "VPS Management",
  ],
  Payment: [
    "Stripe API",
    "Payment Intents",
    "Webhooks",
    "PCI Compliance",
  ],
  Tools: ["Git", "Netlify", "Railway", "Vercel", "Docker"],
};

export const projects = [
  {
    id: "snarbles",
    title: "Snarbles",
    shortDescription:
      "No-code platform for creating tokens on Solana & Algorand in under 30 seconds",
    description:
      "A live production MVP serving real users. Complete platform from smart contracts to mobile-optimized frontend, built end to end.",
    role: "Web3 & Full Stack Developer (Solo Project)",
    liveUrl: "https://snarbles.xyz",
    githubUrl: null,
    status: "LIVE PRODUCTION MVP",
    highlights: [
      "Token creation in under 30 seconds",
      "Serving real users in production",
      "Built on Solana and Algorand blockchains",
      "Mobile-optimized frontend",
      "Complete MVP from smart contracts to UI",
      "Analytics dashboard and verification system",
      "Payment processing integration",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Algorand SDK",
      "Solana Web3.js",
      "Supabase",
      "Anchor Framework",
      "Stripe API",
    ],
    features: [
      {
        title: "Lightning Fast Creation",
        description:
          "Complete token creation and deployment in under 30 seconds with automated verification",
      },
      {
        title: "Multi-Chain Support",
        description:
          "Built on both Solana and Algorand, giving users flexibility in blockchain choice",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Real-time analytics for token performance and transaction history",
      },
      {
        title: "Payment Processing",
        description:
          "Integrated Stripe for seamless payments with PCI compliance",
      },
    ],
    challenges: [
      {
        problem: "Transaction Speed Optimization",
        solution:
          "Implemented parallel processing and optimized smart contract execution to achieve <30 second token creation",
      },
      {
        problem: "Cross-Chain Compatibility",
        solution:
          "Architected abstraction layer to support both Solana and Algorand with unified interface",
      },
    ],
  },
  {
    id: "stripe-integration",
    title: "Stripe Payment Integration System",
    shortDescription:
      "Complete payment processing with React frontend and Node.js backend",
    description:
      "Full-stack payment processing demo with product selection, secure checkout, real-time payment processing, and webhook handling. PCI-compliant implementation tested with live payments.",
    role: "Full Stack Developer",
    liveUrl: null,
    githubUrl: "https://github.com/slubbles/stripe-integration",
    status: "PRODUCTION-READY",
    highlights: [
      "Complete payment flow from UI to backend",
      "PCI-compliant implementation",
      "Real-time webhook processing",
      "Tested with live payments",
      "Production-ready architecture",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Stripe API",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "Product Selection",
        description:
          "Interactive product catalog with real-time price calculations",
      },
      {
        title: "Secure Checkout",
        description:
          "PCI-compliant payment flows with Stripe Elements for card processing",
      },
      {
        title: "Webhook Handling",
        description:
          "Real-time event processing for payment confirmations and updates",
      },
      {
        title: "Payment Verification",
        description:
          "Automated confirmation system with idempotency for reliability",
      },
    ],
    challenges: [
      {
        problem: "Webhook Reliability",
        solution:
          "Implemented idempotency keys and event deduplication to ensure no double-processing",
      },
      {
        problem: "Payment Security",
        solution:
          "Used Stripe Elements and server-side validation to maintain PCI compliance",
      },
    ],
  },
  {
    id: "token-presale",
    title: "Token Presale Platform",
    shortDescription:
      "Multi-round token sales with vesting schedules and escrow",
    description:
      "MVP for conducting seed, private, and public token sales with linear vesting schedules and whitelist management. Built end to end on Solana.",
    role: "Smart Contract & Full Stack Developer",
    liveUrl: null,
    githubUrl: null,
    status: "MVP",
    highlights: [
      "Multi-round sales (Seed/Private/Public)",
      "Linear vesting schedules",
      "Whitelist management system",
      "Solana smart contracts with Anchor",
      "Full frontend MVP",
    ],
    techStack: ["Anchor (Rust)", "Next.js", "TypeScript", "TailwindCSS", "Solana"],
    features: [
      {
        title: "Multi-Round Sales",
        description:
          "Support for seed, private, and public sale rounds with different pricing",
      },
      {
        title: "Vesting Schedules",
        description:
          "Linear vesting implementation for gradual token distribution",
      },
      {
        title: "Whitelist Management",
        description:
          "On-chain whitelist verification for exclusive sale access",
      },
      {
        title: "Escrow System",
        description:
          "Secure fund holding until sale conditions are met",
      },
    ],
    challenges: [
      {
        problem: "Complex Vesting Logic",
        solution:
          "Implemented efficient on-chain vesting calculations with minimal compute usage",
      },
      {
        problem: "Multi-Round Coordination",
        solution:
          "Designed state machine for seamless transitions between sale rounds",
      },
    ],
  },
  {
    id: "p2p-marketplace",
    title: "P2P Marketplace Framework",
    shortDescription:
      "Trustless escrow system for peer-to-peer transactions",
    description:
      "Universal P2P marketplace MVP with blockchain-based escrow eliminating intermediaries. Built smart contract architecture and industry-specific templates.",
    role: "Smart Contract & Full Stack Developer",
    liveUrl: "https://universal-p2p-system.netlify.app",
    githubUrl: null,
    status: "LIVE MVP",
    highlights: [
      "Trustless escrow without intermediaries",
      "Smart contract architecture",
      "Industry-specific templates",
      "MVP to framework evolution",
      "Built with Web3 security best practices",
    ],
    techStack: [
      "Solana",
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Anchor Framework",
    ],
    features: [
      {
        title: "Trustless Escrow",
        description:
          "Smart contract-based escrow ensures both parties are protected without intermediaries",
      },
      {
        title: "Framework Architecture",
        description:
          "Modular design allowing adaptation to various P2P use cases",
      },
      {
        title: "Industry Templates",
        description:
          "Pre-built templates for different trading scenarios and industries",
      },
      {
        title: "Dispute Resolution",
        description:
          "Built-in arbitration system for handling trade disputes fairly",
      },
    ],
    challenges: [
      {
        problem: "Trust in Peer-to-Peer Transactions",
        solution:
          "Implemented smart contract escrow that automatically releases funds upon delivery confirmation",
      },
      {
        problem: "Scaling for Multiple Use Cases",
        solution:
          "Designed flexible framework architecture adaptable to various trading scenarios",
      },
    ],
  },
];

export const experience = {
  title: "Full Stack Web3 Developer (Freelance)",
  company: "Self-Employed",
  period: "Dec 2023 - Present",
  location: "Remote • Philippines 🇵🇭",
  achievements: [
    "Built and deployed Snarbles, a live production token creation platform on Solana/Algorand serving real users with <30 second token generation",
    "Developed complete Stripe payment integration with React + Node.js backend, implementing secure checkout and webhook handling",
    "Architected P2P marketplace framework with trustless escrow smart contracts for peer-to-peer transactions",
    "Shipped production MVPs end to end, from smart contracts to mobile-optimized frontends",
    "Handle full stack development including payment processing, blockchain integration, and UI/UX",
  ],
};
