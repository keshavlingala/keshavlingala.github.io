import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      tags: z.array(z.string()).optional().default([]),
      techs: z.array(z.string()).optional().default([]),
      featured: z.boolean().optional().default(false),
      code: z.string().optional(),
      code2: z.string().optional(),
      demo: z.string().optional(),
      featuredImage: image(),
    }),
});

export const collections = { posts };
