import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import React from "react"

const ProfilePic = () => {
    const data = useStaticQuery(graphql`
      {
          file(relativePath: { eq: "images/Profile.png" }) {
              childImageSharp {
                fluid(traceSVG: {threshold: 100}) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
              }
          }
      }
  `)
    return <Img style={{
        mixBlendMode: "multiply",
        opacity: 0.8,
        height: "50%",
    }} fluid={data.file.childImageSharp.fluid}/>

}
export default ProfilePic
