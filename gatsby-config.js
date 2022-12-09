module.exports = {
  pathPrefix: "/keshavlingala.github.io",
  siteMetadata: {
    title: `Keshav Lingala`,
    description: `This portfolio showcases the work and accomplishments of a Computer Science Master's student at California State University, Fullerton. The portfolio covers coursework, research projects, internships, and other relevant experiences. It provides an insight into the student’s knowledge, skills, and abilities and will serve as a testament to their hard work and dedication to their degree. Feel free to contact me.`,
    author: `@keshavlingala`,
    keywords: `keshav lingala, keshavLingala, lingalaKeshav,keshav lingala,keshav reddy lingala,lingala keshav reddy,
        keshav,keshav lingala portfolio, keshav lingala profile,keshav reddy lingala,
         reddy,keshav reddy portfolio,keshav lingala profile`,
    twitterUsername: "@keshavlingala"
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
              tracedSVG: { threshold: 100 },
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
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
