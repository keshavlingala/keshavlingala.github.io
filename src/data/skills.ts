/* ============================================================
   Skill Galaxy data — categories + skills (with inferred levels)
   Icons resolve to the repo's local SVGs (no external CDN).
   `level` is inferred proficiency 1..5 (5 = daily driver).
   ============================================================ */

// Local icon SVGs as plain URL strings (?url bypasses the image pipeline,
// matching src/icons.ts). Keyed relative to this file.
const svgs = import.meta.glob<string>("../content/icons/*.svg", {
  query: "?url",
  import: "default",
  eager: true,
});

const icon = (file: string): string => {
  const url = svgs[`../content/icons/${file}.svg`];
  if (!url) throw new Error(`Missing skill icon SVG: ${file}.svg`);
  return url;
};

export type CatKey =
  | "fe"
  | "be"
  | "db"
  | "cloud"
  | "full"
  | "ml"
  | "gen"
  | "tools"
  | "auto";

export interface Category {
  key: CatKey;
  label: string;
}

export interface Skill {
  name: string;
  cats: CatKey[];
  level: number;
  color: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { key: "fe", label: "Front-end Web Development" },
  { key: "be", label: "Back-end Development" },
  { key: "db", label: "Database Design & Management" },
  { key: "cloud", label: "Cloud Technologies & DevOps" },
  { key: "full", label: "Full Stack Development" },
  { key: "ml", label: "Neural Networks & Machine Learning" },
  { key: "gen", label: "Generative AI & Autonomous Agents" },
  { key: "tools", label: "Tools & IDEs for Development" },
  { key: "auto", label: "Automation Scripting" },
];

export const SKILLS: Skill[] = [
  { name: "React",       cats: ["fe", "full"],            level: 5, color: "#61DAFB", icon: icon("react") },
  { name: "Angular",     cats: ["fe", "full"],            level: 5, color: "#DD0031", icon: icon("angular") },
  { name: "TypeScript",  cats: ["fe", "be", "full"],      level: 5, color: "#3178C6", icon: icon("typescript") },
  { name: "JavaScript",  cats: ["fe", "be", "full"],      level: 5, color: "#F7DF1E", icon: icon("javascript") },
  { name: "HTML5",       cats: ["fe"],                    level: 5, color: "#E34F26", icon: icon("html") },
  { name: "CSS3",        cats: ["fe"],                    level: 5, color: "#1572B6", icon: icon("css") },
  { name: "Bootstrap",   cats: ["fe"],                    level: 4, color: "#7952B3", icon: icon("bootstrap") },
  { name: "PWA",         cats: ["fe"],                    level: 3, color: "#5A0FC8", icon: icon("pwa") },
  { name: "Gatsby",      cats: ["fe"],                    level: 3, color: "#663399", icon: icon("gatsby") },
  { name: "GraphQL",     cats: ["be", "full"],            level: 3, color: "#E10098", icon: icon("graphql") },
  { name: "Node.js",     cats: ["be", "full"],            level: 4, color: "#5FA04E", icon: icon("nodejs") },
  { name: "NestJS",      cats: ["be"],                    level: 3, color: "#E0234E", icon: icon("nestjs") },
  { name: "Java",        cats: ["be", "full"],            level: 4, color: "#E76F00", icon: icon("java") },
  { name: "Spring Boot", cats: ["be", "full"],            level: 4, color: "#6DB33F", icon: icon("spring") },
  { name: "Kotlin",      cats: ["be"],                    level: 3, color: "#7F52FF", icon: icon("kotlinlang") },
  { name: "Go",          cats: ["be"],                    level: 3, color: "#00ADD8", icon: icon("golang") },
  { name: "Python",      cats: ["be", "ml", "gen", "auto"], level: 4, color: "#3776AB", icon: icon("python") },
  { name: "MySQL",       cats: ["db"],                    level: 4, color: "#4479A1", icon: icon("mysql") },
  { name: "PostgreSQL",  cats: ["db"],                    level: 4, color: "#4169E1", icon: icon("postgresql") },
  { name: "MongoDB",     cats: ["db"],                    level: 3, color: "#47A248", icon: icon("mongodb") },
  { name: "Redis",       cats: ["db"],                    level: 3, color: "#DC382D", icon: icon("redis") },
  { name: "Cassandra",   cats: ["db"],                    level: 2, color: "#1287B1", icon: icon("cassandra") },
  { name: "Firebase",    cats: ["db", "cloud"],           level: 4, color: "#FFCA28", icon: icon("firebase") },
  { name: "AWS",         cats: ["cloud"],                 level: 4, color: "#FF9900", icon: icon("aws") },
  { name: "Docker",      cats: ["cloud"],                 level: 4, color: "#2496ED", icon: icon("docker") },
  { name: "Kubernetes",  cats: ["cloud"],                 level: 3, color: "#326CE5", icon: icon("kubernetes") },
  { name: "Jenkins",     cats: ["cloud", "tools"],        level: 3, color: "#D24939", icon: icon("jenkins") },
  { name: "Kafka",       cats: ["cloud", "be"],           level: 3, color: "#8AC9D6", icon: icon("kafka") },
  { name: "Spark",       cats: ["cloud", "ml"],           level: 3, color: "#E25A1C", icon: icon("spark") },
  { name: "Ansible",     cats: ["cloud", "auto"],         level: 3, color: "#EE0000", icon: icon("ansible") },
  { name: "Hadoop",      cats: ["cloud", "db"],           level: 2, color: "#66CCFF", icon: icon("hadoop") },
  { name: "Git",         cats: ["tools"],                 level: 5, color: "#F05032", icon: icon("git") },
  { name: "Jira",        cats: ["tools"],                 level: 3, color: "#0052CC", icon: icon("jira") },
  { name: "Bash",        cats: ["auto", "tools"],         level: 4, color: "#4EAA25", icon: icon("bash") },
  { name: "TensorFlow",  cats: ["ml", "gen"],             level: 3, color: "#FF6F00", icon: icon("tensorflow") },
  { name: "Keras",       cats: ["ml"],                    level: 3, color: "#D00000", icon: icon("keras") },
  { name: "LangChain",   cats: ["gen"],                   level: 3, color: "#1C9C7C", icon: icon("langchain") },
  { name: "Anthropic",   cats: ["gen"],                   level: 3, color: "#CC785C", icon: icon("anthropic") },
];

export const catLabel = (key: CatKey): string =>
  CATEGORIES.find((c) => c.key === key)?.label ?? key;

/** Shortened category label for chips + hub nodes. */
export const catShort = (key: CatKey): string =>
  catLabel(key)
    .replace(" Development", "")
    .replace(" Design & Management", "")
    .replace(" Technologies & DevOps", " / DevOps")
    .replace("Neural Networks & Machine Learning", "ML / Neural Nets")
    .replace("Generative AI & Autonomous Agents", "GenAI / Agents")
    .replace(" for Development", "");
