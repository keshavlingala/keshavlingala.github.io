module.exports = {
  siteMetadata: {
    title: `Keshav Lingala`,
    description: `Hi I'm Keshav, B-tech UnderGraduate in Keshav Memorial Institute of Technology in Department of Computer Science and
  Technology. I like working on real world problems and provide an easy software solution, My moto Update, Evolve, Enjoy`,
    author: `@keshavlingala`,
    keywords: `keshav lingala,keshavlingala,lingalakeshav,keshav lingala,keshav reddy lingala,lingala keshav reddy,
        keshav,keshav lingala portfolio, keshav lingala profile,keshav reddy lingala,
         reddy,keshav reddy portfolio,keshav lingala profile`,
    image: "content/images/logo.png"

  },
  plugins: [
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
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `keshav`,
        icon: `src/content/images/logo.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-emotion`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
