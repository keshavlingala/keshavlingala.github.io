import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const ProfilePic = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/profile.jpg" }) {
        childImageSharp {
          fluid(traceSVG: { threshold: 100 }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Img style={{
      borderRadius: "50%"
    }} fluid={data.file.childImageSharp.fluid}
    />
  )
}
export default ProfilePic
