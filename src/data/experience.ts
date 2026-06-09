/* ============================================================
   Work experience — grouped by company (newest first).
   Sourced from LinkedIn. Edit here to update the Experience section.
   ============================================================ */

export interface Role {
  title: string;
  type: string;
  date: string;
  now?: boolean;
}

export interface Company {
  company: string;
  logo: string;
  logoSrc?: string;
  logoBg?: string;
  url?: string;
  color: string;
  current?: boolean;
  location: string;
  span: string;
  roles: Role[];
  bullets: string[];
  tags: string[];
}

export interface EarlyRole {
  org: string;
  role: string;
  date: string;
}

export const EXPERIENCE: Company[] = [
  {
    company: "Winsupply",
    logo: "W",
    logoSrc: "/logos/winsupply.svg",
    color: "#1B7F4B",
    current: true,
    location: "Dayton, Ohio",
    span: "Jul 2024 — Present",
    roles: [
      { title: "Senior Software Engineer", type: "Full-time", date: "Dec 2024 — Present", now: true },
      { title: "Senior Software Developer", type: "Contract", date: "Jul 2024 — Dec 2024" },
    ],
    bullets: [
      "Building server-side Java systems and Angular interfaces over IBM Db2 for one of the largest distribution networks in the US.",
    ],
    tags: ["Java", "Spring Boot", "Angular", "IBM Db2"],
  },
  {
    company: "Swasthomeo",
    logo: "S",
    logoSrc: "/logos/swasthomeo.jpg",
    url: "https://swasthomeo.com",
    color: "#C8915A",
    current: true,
    location: "Hyderabad, India · Remote",
    span: "Oct 2022 — Present",
    roles: [{ title: "Head of Technology", type: "Seasonal", date: "Oct 2022 — Present", now: true }],
    bullets: ["Leading technology and product direction for a homeopathy healthcare venture — swasthomeo.com."],
    tags: ["Leadership", "Full Stack", "Product"],
  },
  {
    company: "Dataflake LLC",
    logo: "D",
    logoSrc: "/logos/dataflake.png",
    logoBg: "#0d1b2a",
    color: "#2496ED",
    location: "Mason, Ohio · Hybrid",
    span: "Jan 2024 — Jul 2024",
    roles: [{ title: "Software Engineer", type: "Contract", date: "Jan 2024 — Jul 2024" }],
    bullets: [
      "Migrated legacy Java applications to Kotlin with clean-code principles — cutting the codebase by 40% and improving maintainability.",
      "Built Kotlin data pipelines processing millions of shipment orders in under a minute.",
      "Implemented Kafka real-time monitoring with automated Slack alerts, reducing data discrepancies by 25%.",
    ],
    tags: ["Kotlin", "Kafka", "Apache Camel", "Java"],
  },
  {
    company: "Cal State University, Fullerton",
    logo: "C",
    logoSrc: "/logos/csuf.svg",
    color: "#E25A1C",
    location: "Fullerton, California",
    span: "Jul 2023 — Dec 2023",
    roles: [{ title: "Research Assistant", type: "Freelance", date: "Jul 2023 — Dec 2023" }],
    bullets: [
      "Co-authored an IEEE Xplore paper with Prof. Sampson Akwafuo on a full-stack platform for household and academic management.",
    ],
    tags: ["Kotlin", "Spring Boot", "Angular", "Docker", "PostgreSQL", "WebSockets"],
  },
  {
    company: "DBS Bank",
    logo: "D",
    logoSrc: "/logos/dbs.png",
    color: "#E2231A",
    location: "Hyderabad, India · Hybrid",
    span: "Jul 2021 — Aug 2022",
    roles: [
      { title: "Software Engineer II", type: "Full-time", date: "Jan 2022 — Aug 2022" },
      { title: "Software Engineer", type: "Full-time", date: "Jul 2021 — May 2022" },
    ],
    bullets: [
      "Built the Online Application Opening System (OAOS) in Angular, letting corporations open bank accounts online.",
      "Developed secure REST APIs with Spring Boot, MySQL/JPA, Hibernate and OAuth2 for account management.",
    ],
    tags: ["Java", "Spring Boot", "Angular", "MySQL", "Jenkins", "OAuth2"],
  },
  {
    company: "Xebia",
    logo: "X",
    logoSrc: "/logos/xebia.png",
    color: "#6DB33F",
    location: "Hyderabad, India · Remote",
    span: "Feb 2021 — Jul 2021",
    roles: [{ title: "Software Engineer", type: "Apprenticeship", date: "Feb 2021 — Jul 2021" }],
    bullets: ["Built end-to-end backend systems with Spring Boot, Spring Cloud and Spring Data JPA for mobile apps."],
    tags: ["Java", "Spring Cloud", "Angular"],
  },
  {
    company: "Virtusa",
    logo: "V",
    logoSrc: "/logos/virtusa.png",
    color: "#0033A0",
    location: "Bengaluru, India · Remote",
    span: "Nov 2019 — Nov 2020",
    roles: [
      { title: "R&D Software Engineer", type: "Apprenticeship", date: "May 2020 — Nov 2020" },
      { title: "Angular Developer", type: "Apprenticeship", date: "Nov 2019 — May 2020" },
    ],
    bullets: [
      "Hit a 100% Angular Lighthouse score via lazy loading and optimized state management.",
      "Built an IoT dashboard with dynamic imports and multiple charting libraries (Chart.js, D3, Google Charts).",
    ],
    tags: ["Angular", "Java", "TypeScript"],
  },
];

/* Community / founding roles — compact strip */
export const EARLY: EarlyRole[] = [
  { org: "Aakarshan", role: "Founder & Developer", date: "2018 — 2021" },
  { org: "Recurse — KMIT Tech Club", role: "Founding Member", date: "2019 — 2021" },
  { org: "Smart India Hackathon", role: "Lead Developer", date: "2019" },
  { org: "R&D Dept, KMIT", role: "R&D Engineer", date: "2018 — 2020" },
];
