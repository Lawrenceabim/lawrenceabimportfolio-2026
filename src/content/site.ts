import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Bimbo Lawrence Damitan",
  title: "Bimbo Lawrence Damitan — Cybersecurity",
  description:
    "Bridging the gap between tactical IT operations and applied security research. My technical foundation was built in Nigeria, handling data analysis and digital forensics for the national power grid. Today, I'm a CyberMACS scholar and TÜBİTAK researcher in Istanbul. From evaluating EU transition strategies using GENESYS-MOD to designing custom RAG pipelines, I specialize in turning complex data into actionable security intelligence.",
  location: "Istanbul, TR",
  status: "Clearance: Granted",
  focusAreas: ["Cybersecurity", "OSINT", "Risk Management", "Threat Analysis"],
  url: "https://lawrenceabim.com",
  ogImage: "/og-image.png",
  twitterHandle: "@lawrenceabim",
  keywords: [
    "cybersecurity",
    "applied cryptography",
    "energy system modeling",
    "C programming",
    "RAG systems",
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Profile", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Designs", href: "#visual-work" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/lawrenceabim", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bimbo-lawrence/", icon: "linkedin" },
  { label: "Email", href: "mailto:lawrenceabim@gmail.com", icon: "mail" },
];

export const research = [
  {
    title: "An Empirical Study of the Privacy-Utility Trade-off in Differentially Private Classifiers",
    venue: "23rd CIIT Conference",
    year: "2026",
    status: "Accepted", 
    link: "/papers/CIIT_2026_Privacy_Utility.pdf",
    overview: "Evaluates the privacy-utility trade-off of applying Differential Privacy (DP) to machine learning classifiers in healthcare. The study demonstrates that DP Random Forest models maintain a 15% utility advantage over Logistic Regression models under strict privacy mandates (where ε ≤ 1.0).",
  },
  {
    title: "Hydrogen-Enabled Sector Coupling in Turkiye's Energy Transition: Integrated Modeling with GENESYS-MOD",
    venue: "Man0EUvRE Project (TÜBİTAK)",
    year: "2026",
    status: "Published", 
    link: "/papers/EEM_2025_Hydrogen_Transition.pdf",
    overview: "A modeling study using the GENESYS-MOD framework to analyze hydrogen-driven sector coupling in Turkiye's long-term energy transition through 2050. The research highlights how early renewable deployment and hydrogen integration are critical for decarbonization, industrial heat substitution, and cross-border energy trade with Europe.",
  },
  {
    title: "Cybercrime in Nigeria: Aligning Domestic Law with International Criminal Standards through SOPs and SETA Reform",
    venue: "Independent Research",
    year: "2026",
    status: "In Progress", 
    link: null, 
    overview: "An analytical review addressing the legal gaps and enforcement challenges of cybercrime in Nigeria. The paper proposes capacity-building imperatives and standard operating procedures to align domestic frameworks with international criminal standards.",
  }
];

export const experience = [
  {
    role: "Research Assistant",
    company: "Kadir Has University (TÜBİTAK Project)",
    location: "Istanbul, Türkiye",
    date: "Oct 2025 - Present",
    points: [
      "Conducting data analysis and scenario modeling using GENESYS-MOD to investigate the EU's transition to Net-Zero 2050.",
      "Evaluating policy frameworks, analyzing large datasets for renewable integration, and supporting interdisciplinary research outputs aligned with European energy goals.",
    ],
  },
  {
    role: "IT Officer",
    company: "Kehinde & Partners LP",
    location: "Abuja, Nigeria",
    date: "May 2024 - Sep 2025",
    points: [
      "Provided technical analysis on cases involving cybersecurity, data breaches, and digital evidence collection for legal investigations.",
      "Implemented legal tech solutions for e-discovery and managed IT systems ensuring secure organizational operations.",
      "Led graphic design initiatives, including the structural layout and visual design of the firm's central catalog and promotional materials."
    ],
  },
  {
    role: "Data Analyst",
    company: "Transmission Company of Nigeria (TCN)",
    location: "Abuja, Nigeria",
    date: "Dec 2022 - Oct 2023",
    points: [
      "Analyzed operational data from electricity generation systems, monitoring critical infrastructure performance across multiple substations.",
      "Developed data visualizations and dashboards to support operational decision-making and national energy evaluation processes.",
    ],
  },
  {
    role: "IT Support Analyst", 
    company: "Yemi Akinseye George & Partners",
    location: "Abuja, Nigeria",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Supported technical infrastructure and provided hardware/software troubleshooting for legal practitioners.",
      "Maintained data integrity and confidentiality for sensitive case files across local networks."
    ],
  },
  {
    role: "Technical Intern",
    company: "HiiT Abuja",
    location: "Abuja, Nigeria",
    date: "Jul 2021 - Sep 2021",
    points: [
      "Completed intensive training in Python programming and front-end web design.",
      "Developed foundational skills in graphic design, utilizing creative software to build digital assets and UI layouts."
    ],
  }
];

export const projects = [
  {
    featured: true,
    title: "Mentor Chatbot (RAG)",
    category: "AI / Data Science Collaboration",
    description: "Engineered a local, privacy-preserving Retrieval-Augmented Generation (RAG) chatbot to query an extensive internal knowledge base of over 200 institutional documents. The system solves LLM hallucination and knowledge cutoffs by acting as an 'Open Book' assistant.",
    tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "Ollama", "Llama 3.1"],
    link: "https://github.com/iamhasancoskun/CyberMACS-RAG",
    architecture: [
      "Chunking Strategy: 500 characters with 50-character overlap using RecursiveCharacterTextSplitter.",
      "Embeddings: Hugging Face sentence-transformers/all-MiniLM-L6-v2 (384-dimensional).",
      "Vector Store: 4,680 embedded chunks stored persistently in ChromaDB.",
      "Retrieval: k=10 similarity search feeding into a local Llama 3.1 8b instance via Ollama."
    ],
    images: [
      "/rag-ui.jpeg",
      "/rag-pipeline.jpeg",
    ],
    imageLayout: "cover" // Tells the component to use the "App Window" layout
  },
  {
    featured: true,
    title: "GENESYS-MOD: EU Net-Zero 2050",
    category: "Applied Energy System Modeling (TÜBİTAK)",
    status: "ONGOING",
    description: "Investigating the European Union's transition strategies toward Net-Zero 2050 as part of the Man0EUvRE project. Engineered complex Python pipelines to aggregate timeslices and transform raw GENESYS-MOD simulation outputs into standardized IAMC formats.",
    tech: ["Python", "Pandas", "GENESYS-MOD", "PyAM", "IAMC Standards", "Data Engineering"],
    link: "#", 
    architecture: [
      "Data Pipeline: Aggregated raw timeslices and mapped complex variables using Pandas and PyAM.",
      "Modeling Framework: Utilized GENESYS-MOD to simulate decarbonization pathways and hydrogen integration.",
      "Sector Coupling: Modeled hydrogen production, seasonal storage, and cross-sectoral utilization up to 2060.",
      "Standardization: Converted proprietary multi-node solver outputs into the universal IAMC format."
    ],
    images: [
      "/Hydrogen Production & Use.jpeg", 
      "/capacity.jpeg"  
    ],
    imageLayout: "natural", // Tells the component to shrink-wrap and show captions
    imageCaptions: [
      "Hydrogen production and use across GoRES, NECPEssentials, REPowerEU, and Trinity scenarios",
      "Installed capacity by technology, 2020–2060"
    ]
  }
];

// Add this to the bottom of src/content/site.ts

export const stats = [
  { 
    value: "4TH", 
    label: "WINTER SCHOOL CTF 2026", 
    color: "text-orange-500 border-orange-500/30" 
  },
  { 
    value: "ISC2", 
    label: "CERTIFIED IN CYBERSECURITY (CC)", 
    color: "text-emerald-500 border-emerald-500/30" 
  },
  { 
    value: "15+", 
    label: "CERTIFICATIONS & COURSES", 
    color: "text-blue-500 border-blue-500/30" 
  }
];

export const awards = [
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "Jan 2026",
    description: "Foundational certification validating expertise in security principles, access controls, and network security.",
    logo: "/Certified in Cybersecurity (CC).png" // No link property here, so the button hides!
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Nov 2025",
    description: "Validation of foundational networking protocols, routing, and switching infrastructure.",
    logo: "/CCNAITN__1_.png",
    link: "https://www.credly.com/badges/3f0bfb51-2755-4589-9be8-7bfb24117d13/email" 
  },
  {
    title: "Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT",
    date: "May 2024",
    description: "Specialized training in securing industrial control systems and critical data pipelines.",
    logo: "/ICIP.png",
    link: "https://www.credly.com/badges/b28d6187-43c6-4e64-be13-5636bcbbbe70/linked_in_profile"
  },
  {
    title: "Data Visualization in Tableau & Python",
    issuer: "Udemy",
    date: "Jan 2025",
    description: "Advanced plotting, data modeling, and visual analytics using Matplotlib and Seaborn.",
    logo: "/udemy_logo.jpg",
    link: "https://www.udemy.com/certificate/UC-b6171668-7b64-4624-9973-8625f2407d8e/"
  }
];

export const visualWork = [
  {
    title: "Democracy Day Campaign",
    category: "Corporate Identity",
    image: "/democracy day.jpeg",
  },
  {
    title: "June Editorial Design",
    category: "Brand Communications",
    image: "/june.jpeg",
  },
  {
    title: "August Welcome Graphic",
    category: "Corporate Communications",
    image: "/august.jpeg",
  },
  {
    title: "September Brand Update",
    category: "Corporate Identity",
    image: "/september.jpeg",
  },
  {
    title: "Workers' Day Editorial",
    category: "Brand Communications",
    image: "/may.jpeg",
  },
  {
    title: "Easter Corporate Greeting",
    category: "Corporate Identity",
    image: "/easter.jpeg",
  },
  {
    title: "Season's Greetings",
    category: "Corporate Communications",
    image: "/seasons greetings.jpeg",
  }
];