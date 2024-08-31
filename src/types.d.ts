import {ReactNode} from "react";
import {IGatsbyImageData} from "gatsby-plugin-image";
import {IconNames} from "./iconNames";

// SEO related types
interface SEOProps {
    title?: string;
    description?: string;
    pathname?: string;
    keywords?: string;
    image?: string;
    children?: ReactNode;
}

// Skill related types
interface Skill {
    name: string;
    progress: number;
    techs: string[];
    active?: boolean;
}

// Project related types
interface Project {
    id: string;
    frontmatter: {
        slug: string;
        tags: string[];
        title: string;
        code: string;
        demo: string;
        description: string;
        date: string;
        techs: string[];
        featuredImage: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        };
    };
}

interface AdjacentNode {
    frontmatter: {
        slug: string;
        title: string;
        featuredImage: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        };
    };
}

interface PostLayoutNode {
    id: string;
    frontmatter: {
        slug: string;
        title: string;
        date: string;
        description: string;
        tags: string[];
        featuredImage: {
            publicURL: string;
        };
        techs: string[];
    };
    internal: {
        contentFilePath: string;
    };
    tableOfContents: { items: Item[] };
}

interface PostLayoutType {
    allMdx: {
        edges: {
            node: PostLayoutNode;
            next?: AdjacentNode;
            previous?: AdjacentNode;
        }[];
    };
}

// Site metadata related types
interface SiteMetadata {
    title: string;
    description: string;
    author: string;
    keywords: string;
    twitterUsername: string;
    siteUrl: string;
    profileImage: string;
    image: string;
}

interface UseSiteMetadataQuery {
    site: {
        siteMetadata: SiteMetadata;
    };
    profileImage: {
        publicURL: string;
    };
    logoImage: {
        publicURL: string;
    };
}

// Image related types
interface LogoData {
    file: {
        childImageSharp?: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
}

interface NotFoundImageData {
    file: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
}

// Tooltip related types
interface TippedLIProps {
    tooltip: string;
    show?: boolean;
}

interface ToolTipItemProps {
    children: ReactNode;
    tooltip: string;
    link?: string;
}

// Layout related types
interface LayoutProps {
    children: ReactNode;
}

// Miscellaneous types
interface Item {
    title: string;
    url: string;
    items?: Item[];
}

interface Icon {
    name: IconNames;
    icon: string;
}


