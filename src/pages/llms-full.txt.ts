/* /llms-full.txt — profile plus every project write-up, in one document. */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { llmsFullTxt } from "../lib/markdown";

export const GET: APIRoute = async () => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return new Response(llmsFullTxt(posts), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
