import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/brand.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return <Img alt='Keshav Lingala' fixed={data.file.childImageSharp.fixed}/>
}

export default Logo
