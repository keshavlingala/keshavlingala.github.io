/* /llms.txt — the llmstxt.org index: what this site is and where to read it. */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { llmsTxt } from "../lib/markdown";

export const GET: APIRoute = async () => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return new Response(llmsTxt(posts), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
