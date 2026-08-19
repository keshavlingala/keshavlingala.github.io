/* ============================================================
   JSON-LD builders — one source of truth for structured data.
   Composed into a single @graph by SEO.astro / page heads.
   ============================================================ */
import { siteMetadata } from "../site";
import { EXPERIENCE } from "../data/experience";
import { SKILLS } from "../data/skills";

const { siteUrl, name, jobTitle, description, twitterUsername, github, linkedin, location } =
  siteMetadata;

export const PERSON_ID = `${siteUrl}/#person`;
export const WEBSITE_ID = `${siteUrl}/#website`;

const twitterHandle = (twitterUsername || "").replace(/^@/, "");

export function personSchema(image: string) {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name,
    jobTitle,
    description,
    url: siteUrl,
    image,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.country,
    },
    worksFor: EXPERIENCE.filter((e) => e.current).map((e) => ({
      "@type": "Organization",
      name: e.company,
    })),
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "California State University, Fullerton" },
    ],
    knowsAbout: SKILLS.map((s) => s.name),
    sameAs: [github, linkedin, ...(twitterHandle ? [`https://twitter.com/${twitterHandle}`] : [])],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${siteUrl}/`,
    name: siteMetadata.title,
    description,
    publisher: { "@id": PERSON_ID },
    inLanguage: "en",
  };
}

export function profilePageSchema(image: string) {
  return {
    "@type": "ProfilePage",
    url: `${siteUrl}/`,
    name: `${name} — ${jobTitle}`,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
    primaryImageOfPage: image,
  };
}

export interface ProjectRef {
  title: string;
  slug: string;
  description: string;
}

export function projectsItemList(projects: ProjectRef[]) {
  return {
    "@type": "ItemList",
    name: `${name} — Projects`,
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteUrl}/${p.slug}/`,
      name: p.title,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  image: string;
  url: string;
  datePublished?: string;
  keywords?: string;
}) {
  return {
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    url: opts.url,
    mainEntityOfPage: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    inLanguage: "en",
    keywords: opts.keywords,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function breadcrumbSchema(title: string, url: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: title, item: url },
    ],
  };
}

export const graphDoc = (graph: object[]) => ({
  "@context": "https://schema.org",
  "@graph": graph,
});
