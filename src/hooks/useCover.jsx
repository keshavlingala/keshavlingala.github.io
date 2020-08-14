import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Cover = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/background.jpg" }) {
        childImageSharp {
          fluid(traceSVG: { threshold: 100 }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} />
}
export default Cover
