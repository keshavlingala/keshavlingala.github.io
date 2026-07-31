/* ============================================================
   Skill Galaxy data — categories + skills.
   Icons resolve to the repo's local SVGs (no external CDN).
   Prominence is editorial, not a self-rated score:
     • tier "primary"  → full-size node
     • tier "familiar" → smaller, dimmed (breadth, not headline)
     • core: true      → current/active stack, gets a highlighted ring
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
  | "auto"
  | "sec"
  | "pm";

export interface Category {
  key: CatKey;
  label: string;
  /** Headline specialty — rendered as a larger, accented hub + chip. */
  featured?: boolean;
}

export interface Skill {
  name: string;
  cats: CatKey[];
  /** Visual prominence. "primary" = full-size node; "familiar" = smaller, dimmed. */
  tier: "primary" | "familiar";
  /** Part of my current/active stack — gets a highlighted ring. Implies "primary". */
  core?: boolean;
  color: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { key: "full", label: "Full Stack Development", featured: true },
  { key: "cloud", label: "Cloud Deployment & DevOps", featured: true },
  { key: "gen", label: "Generative AI & Autonomous Agents", featured: true },
  { key: "fe", label: "Front-end Web Development" },
  { key: "be", label: "Back-end Development" },
  { key: "db", label: "Database Design & Management" },
  { key: "ml", label: "Neural Networks & Machine Learning" },
  { key: "tools", label: "Tools & IDEs for Development" },
  { key: "auto", label: "Automation Scripting" },
  { key: "sec", label: "Security & Ethical Hacking" },
  { key: "pm", label: "Project Management & Collaboration" },
];

export const SKILLS: Skill[] = [
  // ── Core: my current / active stack (mirrors the hero) — highlighted ──
  { name: "TypeScript",  cats: ["fe", "be", "full"],      tier: "primary", core: true, color: "#3178C6", icon: icon("typescript") },
  { name: "Angular",     cats: ["fe", "full"],            tier: "primary", core: true, color: "#DD0031", icon: icon("angular") },
  { name: "React",       cats: ["fe", "full"],            tier: "primary", core: true, color: "#61DAFB", icon: icon("react") },
  { name: "Java",        cats: ["be", "full"],            tier: "primary", core: true, color: "#E76F00", icon: icon("java") },
  { name: "Spring Boot", cats: ["be", "full"],            tier: "primary", core: true, color: "#6DB33F", icon: icon("spring") },
  { name: "Node.js",     cats: ["be", "full"],            tier: "primary", core: true, color: "#5FA04E", icon: icon("nodejs") },
  { name: "Go",          cats: ["be"],                    tier: "primary", core: true, color: "#00ADD8", icon: icon("golang") },
  { name: "AWS",         cats: ["cloud"],                 tier: "primary", core: true, color: "#FF9900", icon: icon("aws") },
  { name: "Docker",      cats: ["cloud"],                 tier: "primary", core: true, color: "#2496ED", icon: icon("docker") },
  { name: "Kubernetes",  cats: ["cloud"],                 tier: "primary", core: true, color: "#326CE5", icon: icon("kubernetes") },

  // ── Primary: strong, regular-use skills ──
  { name: "JavaScript",  cats: ["fe", "be", "full"],      tier: "primary", color: "#F7DF1E", icon: icon("javascript") },
  { name: "HTML5",       cats: ["fe"],                    tier: "primary", color: "#E34F26", icon: icon("html") },
  { name: "CSS3",        cats: ["fe"],                    tier: "primary", color: "#1572B6", icon: icon("css") },
  { name: "GraphQL",     cats: ["be", "full"],            tier: "primary", color: "#E10098", icon: icon("graphql") },
  { name: "NestJS",      cats: ["be"],                    tier: "primary", color: "#E0234E", icon: icon("nestjs") },
  { name: "Kotlin",      cats: ["be"],                    tier: "primary", color: "#7F52FF", icon: icon("kotlinlang") },
  { name: "Python",      cats: ["be", "ml", "gen", "auto"], tier: "primary", color: "#3776AB", icon: icon("python") },
  { name: "MySQL",       cats: ["db"],                    tier: "primary", color: "#4479A1", icon: icon("mysql") },
  { name: "PostgreSQL",  cats: ["db"],                    tier: "primary", color: "#4169E1", icon: icon("postgresql") },
  { name: "MongoDB",     cats: ["db"],                    tier: "primary", color: "#47A248", icon: icon("mongodb") },
  { name: "Redis",       cats: ["db"],                    tier: "primary", color: "#DC382D", icon: icon("redis") },
  { name: "Firebase",    cats: ["db", "cloud"],           tier: "primary", color: "#FFCA28", icon: icon("firebase") },
  { name: "Kafka",       cats: ["cloud", "be"],           tier: "primary", color: "#8AC9D6", icon: icon("kafka") },
  { name: "Spark",       cats: ["cloud", "ml"],           tier: "primary", color: "#E25A1C", icon: icon("spark") },
  { name: "Jenkins",     cats: ["cloud", "tools"],        tier: "primary", color: "#D24939", icon: icon("jenkins") },
  { name: "GitHub Actions", cats: ["cloud", "auto"],      tier: "primary", color: "#2088FF", icon: icon("githubactions") },
  { name: "Git",         cats: ["tools"],                 tier: "primary", color: "#F05032", icon: icon("git") },
  { name: "Bash",        cats: ["auto", "tools"],         tier: "primary", color: "#4EAA25", icon: icon("bash") },
  { name: "TensorFlow",  cats: ["ml", "gen"],             tier: "primary", color: "#FF6F00", icon: icon("tensorflow") },
  { name: "LangChain",   cats: ["gen"],                   tier: "primary", color: "#1C9C7C", icon: icon("langchain") },
  { name: "Anthropic",   cats: ["gen"],                   tier: "primary", color: "#CC785C", icon: icon("anthropic") },
  { name: "Hugging Face", cats: ["gen", "ml"],            tier: "primary", color: "#FFD21E", icon: icon("huggingface") },
  { name: "Ollama",      cats: ["gen"],                   tier: "primary", color: "#DDDDDD", icon: icon("ollama") },
  { name: "RAG Pipelines", cats: ["gen"],                 tier: "primary", color: "#22C55E", icon: icon("rag") },
  { name: "LLM Agents",  cats: ["gen"],                   tier: "primary", color: "#A855F7", icon: icon("agents") },

  // ── Familiar: breadth of tools, platforms & methods I've worked with ──
  { name: "Bootstrap",   cats: ["fe"],                    tier: "familiar", color: "#7952B3", icon: icon("bootstrap") },
  { name: "PWA",         cats: ["fe"],                    tier: "familiar", color: "#5A0FC8", icon: icon("pwa") },
  { name: "Gatsby",      cats: ["fe"],                    tier: "familiar", color: "#663399", icon: icon("gatsby") },
  { name: "C++",         cats: ["be"],                    tier: "familiar", color: "#00599C", icon: icon("cpp") },
  { name: "Gin",         cats: ["be"],                    tier: "familiar", color: "#00ADD8", icon: icon("gin") },
  { name: "Cassandra",   cats: ["db"],                    tier: "familiar", color: "#1287B1", icon: icon("cassandra") },
  { name: "Oracle",      cats: ["db"],                    tier: "familiar", color: "#F80000", icon: icon("oracle") },
  { name: "Elasticsearch", cats: ["db", "cloud"],         tier: "familiar", color: "#00BFB3", icon: icon("elasticsearch") },
  { name: "Hadoop",      cats: ["cloud", "db"],           tier: "familiar", color: "#66CCFF", icon: icon("hadoop") },
  { name: "Azure",       cats: ["cloud"],                 tier: "familiar", color: "#0078D4", icon: icon("azure") },
  { name: "Google Cloud", cats: ["cloud"],                tier: "familiar", color: "#4285F4", icon: icon("gcloud") },
  { name: "Ansible",     cats: ["cloud", "auto"],         tier: "familiar", color: "#EE0000", icon: icon("ansible") },
  { name: "Grafana",     cats: ["cloud"],                 tier: "familiar", color: "#F46800", icon: icon("grafana") },
  { name: "Prometheus",  cats: ["cloud"],                 tier: "familiar", color: "#E6522C", icon: icon("prometheus") },
  { name: "Kibana",      cats: ["cloud"],                 tier: "familiar", color: "#F04E98", icon: icon("kibana") },
  { name: "Splunk",      cats: ["cloud", "tools"],        tier: "familiar", color: "#65A637", icon: icon("splunk") },
  { name: "Datadog",     cats: ["cloud"],                 tier: "familiar", color: "#632CA6", icon: icon("datadog") },
  { name: "Keras",       cats: ["ml"],                    tier: "familiar", color: "#D00000", icon: icon("keras") },
  { name: "Neural Networks", cats: ["ml"],                tier: "familiar", color: "#6E56CF", icon: icon("neuralnetwork") },
  { name: "ComfyUI",     cats: ["gen"],                   tier: "familiar", color: "#7C3AED", icon: icon("comfyui") },
  { name: "n8n",         cats: ["gen", "auto"],           tier: "familiar", color: "#EA4B71", icon: icon("n8n") },
  { name: "VS Code",     cats: ["tools"],                 tier: "familiar", color: "#007ACC", icon: icon("vscode") },
  { name: "JetBrains",   cats: ["tools"],                 tier: "familiar", color: "#FB6D2E", icon: icon("jetbrains") },
  { name: "Postman",     cats: ["tools"],                 tier: "familiar", color: "#FF6C37", icon: icon("postman") },
  { name: "Insomnia",    cats: ["tools"],                 tier: "familiar", color: "#4000BF", icon: icon("insomnia") },
  { name: "BitBucket",   cats: ["tools"],                 tier: "familiar", color: "#0052CC", icon: icon("bitbucket") },
  { name: "JMeter",      cats: ["tools", "auto"],         tier: "familiar", color: "#D22128", icon: icon("jmeter") },
  { name: "BlazeMeter",  cats: ["tools"],                 tier: "familiar", color: "#00A4A6", icon: icon("blazemeter") },
  { name: "Arduino",     cats: ["tools", "auto"],         tier: "familiar", color: "#00979D", icon: icon("arduino") },
  { name: "Kali Linux",  cats: ["sec", "tools"],          tier: "familiar", color: "#557C94", icon: icon("kalilinux") },
  { name: "Metasploit",  cats: ["sec"],                   tier: "familiar", color: "#2B79C2", icon: icon("metasploit") },
  { name: "Wireshark",   cats: ["sec"],                   tier: "familiar", color: "#1679A7", icon: icon("wireshark") },
  { name: "Nmap",        cats: ["sec"],                   tier: "familiar", color: "#8AB4D8", icon: icon("nmap") },
  { name: "Jira",        cats: ["pm", "tools"],           tier: "familiar", color: "#0052CC", icon: icon("jira") },
  { name: "Confluence",  cats: ["pm", "tools"],           tier: "familiar", color: "#2684FF", icon: icon("confluence") },
  { name: "Slack",       cats: ["pm", "tools"],           tier: "familiar", color: "#4A154B", icon: icon("slack") },
  { name: "Discord",     cats: ["pm", "tools"],           tier: "familiar", color: "#5865F2", icon: icon("discord") },
  { name: "Agile",       cats: ["pm"],                    tier: "familiar", color: "#2EBE9F", icon: icon("agile") },
  { name: "Scrum",       cats: ["pm"],                    tier: "familiar", color: "#009FDA", icon: icon("scrum") },
  { name: "Kanban",      cats: ["pm"],                    tier: "familiar", color: "#4F86C6", icon: icon("kanban") },
];

/** Node radius (px) by prominence — core > primary > familiar. */
export const skillRadius = (s: Skill): number =>
  s.core ? 27 : s.tier === "primary" ? 22 : 16;

export const catLabel = (key: CatKey): string =>
  CATEGORIES.find((c) => c.key === key)?.label ?? key;

/** Shortened category label for chips + hub nodes. */
export const catShort = (key: CatKey): string =>
  catLabel(key)
    .replace(" Development", "")
    .replace(" Design & Management", "")
    .replace("Cloud Deployment & DevOps", "Cloud / DevOps")
    .replace("Neural Networks & Machine Learning", "ML / Neural Nets")
    .replace("Generative AI & Autonomous Agents", "GenAI / Agents")
    .replace("Project Management & Collaboration", "PM / Collab")
    .replace("Security & Ethical Hacking", "Security")
    .replace(" for Development", "");
