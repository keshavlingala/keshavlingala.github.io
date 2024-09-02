import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Keshav Lingala`,
        description: `This portfolio showcases my work and accomplishments in the realm of computer science, focusing on personal projects and initiatives. It covers a range of topics from innovative research projects to hands-on programming tasks, reflecting my knowledge, skills, and abilities in the field. This portfolio serves as a testament to my dedication and hard work in pursuing my passion for technology. Feel free to contact me for further discussion or inquiries.`,
        author: `@keshavlingala`,
        keywords: `keshav lingala, keshavLingala, lingalaKeshav,keshav lingala,keshav reddy lingala,lingala keshav reddy,
        keshav,keshav lingala portfolio, keshav lingala profile,keshav reddy lingala,
         reddy,keshav reddy portfolio,keshav lingala profile`,
        twitterUsername: "@keshavlingala",
        siteUrl: `https://keshav.codes`
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-VNY508N935"],
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                },
                pluginConfig: {
                    head: true
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Keshav Lingala`,
                short_name: `Keshav`,
                start_url: `/?source=pwa`,
                background_color: `#1b1b1b`,
                theme_color: `#1b1b1b`,
                display: `fullscreen`,
                icon: `src/content/images/logo.png`,
            },
        },
        "gatsby-plugin-emotion",
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                            withWebp: true,
                            linkImagesToOriginal: false,
                            showCaptions: true,
                            wrapperStyle: `margin: 0 0 1.45rem; text-align: center;`,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                            withWebp: true,
                            linkImagesToOriginal: false,
                            showCaptions: true,
                            wrapperStyle: `margin: 0 0 1.45rem; text-align: center;`,
                        },
                    },
                ],
            },
        },
    ],
};

export default config;
