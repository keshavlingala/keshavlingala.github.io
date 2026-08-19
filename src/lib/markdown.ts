/* ============================================================
   Plain-text / Markdown renderings of the site.

   Machine readers (LLM crawlers, agents, "read this page as
   markdown" tooling) get the same content as the HTML pages
   without the layout: /llms.txt, /llms-full.txt, /about.md and
   /<slug>.md are all built from the helpers below.
   ============================================================ */
import type { CollectionEntry } from "astro:content";
import { siteMetadata } from "../site";
import { EXPERIENCE, EARLY } from "../data/experience";
import { CATEGORIES, SKILLS } from "../data/skills";

const { siteUrl, name, jobTitle, tagline, description, github, linkedin, email, location } =
  siteMetadata;

/* Built URLs for every image colocated with a post, keyed by source path —
   used to turn a post's relative image links into absolute, fetchable ones. */
const postImages = import.meta.glob<string>("../content/posts/**/*.{png,jpg,jpeg,gif,webp,svg}", {
  query: "?url",
  import: "default",
  eager: true,
});

/** Resolve `images/feature.png` inside post `slug` to an absolute URL. */
function imageUrl(slug: string, relative: string): string | null {
  const suffix = `/posts/${slug}/${relative.replace(/^\.\//, "")}`;
  const key = Object.keys(postImages).find((path) => path.endsWith(suffix));
  return key ? `${siteUrl}${postImages[key]}` : null;
}

/** Rewrite relative markdown image links so the file stands alone. */
function absolutizeImages(body: string, slug: string): string {
  return body.replace(/!\[([^\]]*)\]\(([^)\s]+)([^)]*)\)/g, (match, alt, src: string, rest) => {
    if (/^(https?:)?\/\//.test(src) || src.startsWith("/")) return match;
    const url = imageUrl(slug, src);
    return url ? `![${alt}](${url}${rest})` : `![${alt}]()`;
  });
}

const monthYear = (date: Date) =>
  date.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

export type Post = CollectionEntry<"posts">;

/* Trailing slash: that is the URL actually served, and the canonical. */
export const postUrl = (post: Post) => `${siteUrl}/${post.data.slug}/`;
export const postMarkdownUrl = (post: Post) => `${siteUrl}/${post.data.slug}.md`;

/** One project write-up as a standalone markdown document. */
export function postMarkdown(post: Post): string {
  const { title, description: desc, date, techs, code, code2, demo, slug, tags } = post.data;

  const facts = [
    `- **Author:** ${name} (${jobTitle}) — ${siteUrl}`,
    `- **Published:** ${monthYear(date)}`,
    `- **Project page:** ${postUrl(post)}`,
    techs.length ? `- **Tech:** ${techs.join(", ")}` : null,
    demo ? `- **Live demo:** ${demo}` : null,
    code ? `- **Source:** ${code}` : null,
    code2 ? `- **Source (2):** ${code2}` : null,
    tags.length ? `- **Topics:** ${tags.join(", ")}` : null,
  ].filter(Boolean);

  return [
    `# ${title}`,
    "",
    `> ${desc}`,
    "",
    ...facts,
    "",
    "---",
    "",
    absolutizeImages(post.body ?? "", slug).trim(),
    "",
    "---",
    "",
    `From the project archive of ${name} — ${siteUrl}. Machine-readable index: ${siteUrl}/llms.txt`,
    "",
  ].join("\n");
}

/** The homepage content — profile, experience, skills — as markdown. */
export function profileMarkdown(posts: Post[]): string {
  const lines: string[] = [
    `# ${name} — ${jobTitle}`,
    "",
    `> ${tagline}`,
    "",
    `- **Location:** ${location.city}, ${location.region}, ${location.country}`,
    `- **Website:** ${siteUrl}`,
    `- **GitHub:** ${github}`,
    `- **LinkedIn:** ${linkedin}`,
    `- **Email:** ${email}`,
    "",
    "## About",
    "",
    description,
    "",
    "## Experience",
    "",
  ];

  for (const company of EXPERIENCE) {
    lines.push(`### ${company.company}${company.current ? " (current)" : ""}`);
    lines.push("");
    lines.push(`- **When:** ${company.span}`);
    lines.push(`- **Where:** ${company.location}`);
    lines.push(
      `- **Roles:** ${company.roles.map((r) => `${r.title} (${r.type}, ${r.date})`).join("; ")}`,
    );
    if (company.url) lines.push(`- **Link:** ${company.url}`);
    if (company.tags.length) lines.push(`- **Stack:** ${company.tags.join(", ")}`);
    lines.push("");
    for (const bullet of company.bullets) lines.push(`- ${bullet}`);
    lines.push("");
  }

  lines.push("### Earlier roles and communities", "");
  for (const role of EARLY) {
    lines.push(`- **${role.org}** — ${role.role} (${role.date})${role.url ? ` — ${role.url}` : ""}`);
  }
  lines.push("");

  lines.push("## Skills", "");
  const core = SKILLS.filter((s) => s.core).map((s) => s.name);
  lines.push(`**Current stack:** ${core.join(", ")}`, "");
  for (const category of CATEGORIES) {
    const inCategory = SKILLS.filter((s) => s.cats.includes(category.key));
    if (!inCategory.length) continue;
    lines.push(`- **${category.label}:** ${inCategory.map((s) => s.name).join(", ")}`);
  }
  lines.push("");

  lines.push("## Projects", "");
  for (const post of posts) {
    lines.push(`- [${post.data.title}](${postUrl(post)}) — ${post.data.description}`);
    lines.push(`  - Markdown: ${postMarkdownUrl(post)}`);
  }
  lines.push("");

  return lines.join("\n");
}

/** The llms.txt index: what this site is, and where to read each part of it. */
export function llmsTxt(posts: Post[]): string {
  const lines: string[] = [
    `# ${name} — ${jobTitle}`,
    "",
    `> ${tagline} Based in ${location.city}, ${location.region}. This site is a personal portfolio: a profile, work history, skills and ${posts.length} project write-ups.`,
    "",
    `Every page has a plain-markdown twin at the same path with a \`.md\` suffix (for example ${siteUrl}/${posts[0]?.data.slug ?? "project"}.md). ${siteUrl}/llms-full.txt contains the whole site as one document.`,
    "",
    "## Profile",
    "",
    `- [About, experience and skills](${siteUrl}/about.md): ${jobTitle} in ${location.city}, ${location.region} — full work history, current stack and skill breakdown.`,
    `- [Portfolio homepage](${siteUrl}/): profile, project log, skills and contact.`,
    `- [GitHub](${github}): source for most of the projects below.`,
    `- [LinkedIn](${linkedin}): professional profile.`,
    "",
    "## Projects",
    "",
  ];

  for (const post of posts) {
    const summary = post.data.description.split(/(?<=\.)\s/)[0];
    lines.push(`- [${post.data.title}](${postMarkdownUrl(post)}): ${summary}`);
  }

  lines.push(
    "",
    "## Optional",
    "",
    `- [Full site as one file](${siteUrl}/llms-full.txt): every project write-up concatenated.`,
    `- [Sitemap](${siteUrl}/sitemap-index.xml): all indexable HTML pages.`,
    "",
  );

  return lines.join("\n");
}

/** Everything, in one file. */
export function llmsFullTxt(posts: Post[]): string {
  return [
    profileMarkdown(posts),
    "---",
    "",
    "# Project write-ups",
    "",
    ...posts.map((post) => `${postMarkdown(post)}\n---\n`),
  ].join("\n");
}
