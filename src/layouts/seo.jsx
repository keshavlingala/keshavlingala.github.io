import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import * as url from "url";

const domain = "https://keshav.codes"

function SEO({ img, description, lang, meta, title, tags, slug }) {
  const { site, file } = useStaticQuery(
    graphql`{
              site {
                siteMetadata {
                  title
                  description
                  author
                }
              }
              file(relativePath: {eq: "images/profile.jpg"}) {
                childImageSharp {
                  fixed(jpegQuality: 99) {
                    src
                  }
                }
              }
            }
    `
  )
  const metaDescription = description || site.siteMetadata.description + tags.join(' ')
  const image = img || file.childImageSharp.fixed.src
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `theme-color`,
          content: '#1b1b1b'
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:url`,
          content: domain+slug
        },
        {
          property: `og:image`,
          content: domain + image
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: "tags",
          content: tags.join(", ")
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  tags: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default SEO
