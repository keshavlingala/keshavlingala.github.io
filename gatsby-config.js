module.exports = {
  pathPrefix: "/keshavlingala.github.io",
  siteMetadata: {
    title: `Keshav Lingala`,
    description: `Hi I'm Keshav, B-tech UnderGraduate in Keshav Memorial Institute of Technology in Department of Computer Science and
  Technology. I like working on real world problems and provide an easy software solution, My moto Update, Evolve, Enjoy`,
    author: `@keshavlingala`,
    keywords: `keshav lingala,keshavlingala,lingalakeshav,keshav lingala,keshav reddy lingala,lingala keshav reddy,
        keshav,keshav lingala portfolio, keshav lingala profile,keshav reddy lingala,
         reddy,keshav reddy portfolio,keshav lingala profile`,
    twitterUsername: "@keshavlingala"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-GF8WLTZYSP",
        head: true
      }
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
        theme_color: `#ffd285`,
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
