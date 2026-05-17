export const contact = {
  name: "Dev Mangrulkar",
  email: "dev.mangrulkar@gmail.com",
  phone: "(571) 263 2945",
  location: "Chantilly, VA",
  clearance: "Active Secret Security Clearance",
  linkedin: "https://www.linkedin.com/in/devmangrulkar",
  github: "https://github.com/dmangokart",
  resumePdf: "/Dev Mangrulkar SWE CV.pdf",
};

export const heroPhrases = [
  "Active Secret Security Clearance",
  "Software Engineer + AI Specialist",
  "Full Stack + Analytics Systems",
  "Data Integration for Federal Missions",
];

export const aboutText = [
  "I build modern engineering and analytics platforms for federal services, combining disciplined software delivery with data, AI, and cloud-enabled insights.",
  "Currently pursuing an M.S. in Analytics at Georgia Tech while leading solutions for data lakes, automation, and AI governance in federal advisory engagements.",
];

export const aboutHighlights = [
  "Secret Security Clearance",
  "Georgia Tech M.S. Analytics, expected Dec 2026",
  "Virginia Tech B.S. Business Information Technology",
  "6x Dean’s List recipient",
  "Snowflake, Azure, Python, full stack, and machine learning",
];

export const education = [
  {
    institution: "Georgia Institute of Technology – Georgia Tech",
    degree: "M.S. Analytics",
    timeframe: "Expected Dec 2026",
    details: "Cumulative GPA 3.77",
  },
  {
    institution: "Virginia Polytechnic Institute and State University – Virginia Tech",
    degree: "B.S. Business Information Technology",
    timeframe: "Graduated",
    details: "Concentration: Computer Based Decision Support Systems | Cumulative GPA: 3.53 | In-major GPA: 3.68 | 6x Dean’s List Recipient",
  },
];

export type TimelineItem = {
  title: string;
  subtitle: string;
  timeframe: string;
  bullets: string[];
};

export const experiences: TimelineItem[] = [
  {
    title: "Specialist – Software Engineer",
    subtitle: "KPMG Advisory – Federal Services | Engineering Lighthouse",
    timeframe: "Nov 2024 – Present",
    bullets: [
      "Designed and created a bureau-wide data lake in Snowflake, consolidating international application and external data for anti-fentanyl and narcotics enforcement missions.",
      "Own integration and data pipelines across 5+ applications with 100+ DAU, streaming both batch and live updates to Streamlit apps, PowerBI dashboards, and reporting outputs.",
    ],
  },
  {
    title: "Developer / AI Specialist",
    subtitle: "International Narcotic and Law Enforcement Agency",
    timeframe: "Ongoing",
    bullets: [
      "Modernized a legacy web application using Angular, .NET, and Azure to support international anti-fentanyl and narcotics enforcement workflows.",
      "Led AI governance across cross-functional teams, defining feature delivery objectives and aligning solutions with regulatory and end-user requirements.",
    ],
  },
  {
    title: "Lead Developer",
    subtitle: "Federal Health Services Agency",
    timeframe: "Recent Engagement",
    bullets: [
      "Built Python-based automations that reduced task processing from multiple hours per week per employee to under two minutes.",
      "Delivered the solution in 912.5 hours out of 1500 planned hours, serving as technical SME, client liaison, analyst, and testing lead throughout the SDLC.",
    ],
  },
  {
    title: "Developer – Business Development Analytics Tool (BDAT)",
    subtitle: "KPMG Advisory – Federal Services",
    timeframe: "Ongoing",
    bullets: [
      "Contributing to an AI-enabled tool for RFx response generation using Python, NLTK, Azure, Tableau, and GPT-4o.",
      "Building automation to surface relevant proposal content and improve proposal quality while reducing response time.",
    ],
  },
];

export const internships: TimelineItem[] = [
  {
    title: "Software Engineering Intern",
    subtitle: "KPMG Advisory – Digital Lighthouse",
    timeframe: "Jun 2023 – Aug 2023",
    bullets: [
      "Enhanced a survey management tool in a secure enterprise environment, enabling streamlined data consolidation and analytic capabilities.",
      "Built web applications using Vue.js, Prisma, TSOA, Azure DevOps, and Postgres while practicing Agile and SCRUM collaboration.",
    ],
  },
  {
    title: "Technical Treasury Consultant Intern",
    subtitle: "Actualize Consulting – Treasury Technology Advisory",
    timeframe: "May 2022 – Nov 2022",
    bullets: [
      "Created API connectors to move cash data from Kyriba into BigQuery and PowerBI for treasury dashboards.",
      "Designed reusable connector templates to enable flexible integration across client systems.",
    ],
  },
  {
    title: "Data Analytics Intern",
    subtitle: "Sunrise Senior Living – IT Data Analytics",
    timeframe: "Jul 2021 – Aug 2021",
    bullets: [
      "Designed ERDs and Snowflake DDL/DML to normalize license management data for PowerBI reporting.",
      "Built a dashboard to track inactive PowerBI Premium licenses and reduce recurring expenses.",
    ],
  },
];

export const businessDevelopment: TimelineItem[] = [
  {
    title: "Department of State Account Data Analytics Lead",
    subtitle: "Business Development",
    timeframe: "Current",
    bullets: [
      "Create and maintain spend and recompete analysis dashboards for account executives to shape actionable pursuit strategy.",
      "Support proposal responses and whitepaper content for RFP, RFQ, and RFI submissions.",
    ],
  },
  {
    title: "Department of Veterans Affairs (VBA)",
    subtitle: "Proposal and technical writing support",
    timeframe: "Current",
    bullets: [
      "Developed technical proposal sections for Fraud Prevention Services using AI, machine learning, and analytics expertise.",
      "Refined document voice, versioning, and compliance to clearly communicate KPMG’s proposed program value.",
    ],
  },
  {
    title: "Whitepaper – Department of State (INL)",
    subtitle: "Thought leadership",
    timeframe: "Recent",
    bullets: [
      "Authored a whitepaper on Data Lake Architecture with Palantir Foundry to enable integrated, secure, and scalable analytics for INL.",
      "Outlined AI enablement, unified data access, and analytics-first architecture for global enforcement workflows.",
    ],
  },
];

export const projects = [
  {
    title: "Mentor to Transitioning Veterans",
    category: "Leadership & Mentorship",
    description: "Guide former Special Operations service members in professional development, technical skills, and career transition strategy.",
    highlight: "Helped place veterans into MBA programs, defense intelligence, and corporate roles.",
  },
  {
    title: "Group Recommendation System",
    category: "Data Science",
    description: "Built a collaborative filtering platform for book clubs with interactive visualizations and group-aware recommendations.",
    highlight: "Designed preference clouds, heat maps, and force-directed graphs for transparent recommendations.",
  },
  {
    title: "Slide – Gesture Presentation App",
    category: "Mobile UX",
    description: "Built an Apple Watch + iPhone app for presentation control through pinch gestures, eliminating the need for a remote.",
    highlight: "Delivered a polished hand-gesture interface for wireless slide navigation.",
  },
  {
    title: "Diabetes Diagnosis Tool",
    category: "Predictive Analytics",
    description: "Developed a Random Forest model to identify diabetes risk factors and support early diagnosis with actionable insights.",
    highlight: "Produced a predictive tool with data-driven insights for healthcare optimization.",
  },
];

export const openSourceResources = [
  {
    title: "GitHub Profile",
    subtitle: "Open source, tooling, and public code samples",
    description: "Explore my repositories, engineering experiments, and data-driven tools across frontend, backend, and analytics.",
    action: "View GitHub",
    href: "https://github.com/dmangokart",
    external: true,
    cardBg: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  },
  {
    title: "Download Resume",
    subtitle: "PDF copy of my software engineering resume",
    description: "Download the resume I use for federal advisory, AI, and analytics roles.",
    action: "Download CV",
    href: "/Dev Mangrulkar SWE CV.pdf",
    external: false,
    cardBg: "linear-gradient(135deg, #312e81 0%, #0f172a 100%)",
  },
  {
    title: "Portfolio Notes",
    subtitle: "Digital art and design details",
    description: "A modern portfolio experience inspired by flipboard animation, interactive cards, and thoughtful UX.",
    action: "Explore the flow",
    href: "#hero",
    external: false,
    cardBg: "linear-gradient(135deg, #0f172a 0%, #0d3b66 100%)",
  },
];

export const certifications = [
  "AI-900 Microsoft Certified: Azure AI Fundamentals",
  "Certified SAFe 6 Agilist",
];

export const technicalSkills = [
  "Java",
  "Python",
  "JavaScript / TypeScript",
  "Angular",
  "Vue.js",
  "Snowflake",
  "Azure DevOps",
  "PowerBI / Tableau",
  "SQL / Postgres / BigQuery",
  "NLP / GPT-4o",
];

export const proficiencies = [
  "Full Stack Solutions Developer",
  "Data Architect and Engineer",
  "Business Intelligence and Analytics",
  "AI Governance",
  "Agile-Minded Leader",
  "Quick Learner",
];
