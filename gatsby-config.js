module.exports = {
    pathPrefix: "/keshavlingala.github.io",
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
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-VNY508N935",
                ],
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: true,
                },
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Keshav Lingala`,
                short_name: `Keshav`,
                start_url: `/?source=pwa`,
                background_color: `#1b1b1b`,
                theme_color: `#1b1b1b`,
                display: `fullscreen`,
                icon: `src/content/images/logo.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                defaultLayouts: {
                    default: require.resolve("./src/layouts/layout.jsx")
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                            tracedSVG: {threshold: 100},
                            withWebp: true,
                            linkImagesToOriginal: true
                        }
                    },
                    {
                        resolve: "gatsby-remark-gifs"
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/static/*`, "/*"],
                start_url: "/?source=pwa",
                short_name: "Keshav"
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/`,
                excludes: ['/404'],
            },
        }
    ]
}
