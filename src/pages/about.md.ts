/* The homepage content — profile, experience, skills, project index — as markdown. */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { profileMarkdown } from "../lib/markdown";

export const GET: APIRoute = async () => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return new Response(profileMarkdown(posts), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
