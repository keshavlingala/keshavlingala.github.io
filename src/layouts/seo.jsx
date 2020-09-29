import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const domain = "https://keshavlingala.me"

function SEO({ img, description, lang, meta, title, tags }) {
  const { site, file } = useStaticQuery(
    graphql`
          {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
            file(relativePath: {eq: "images/profile.jpg"}) {
              childImageSharp {
                fixed(jpegProgressive: true, jpegQuality: 100) {
                  src
                }
              }
            }
          }
    `
  )
  const metaDescription = description || site.siteMetadata.description
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
          property: `og:title`,
          content: title
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
