/* A plain-markdown twin of every project page: /<slug>.md */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { postMarkdown, type Post } from "../lib/markdown";

export async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({ params: { slug: post.data.slug }, props: { post } }));
}

export const GET: APIRoute = ({ props }) =>
  new Response(postMarkdown(props.post as Post), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
