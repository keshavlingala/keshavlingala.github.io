import type { IconNames } from "./iconNames";

// Icon mapping (name -> imported SVG URL)
export interface Icon {
  name: IconNames;
  icon: string;
}

// SEO props (used by SEO.astro / Base.astro)
export interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  datePublished?: string;
}
