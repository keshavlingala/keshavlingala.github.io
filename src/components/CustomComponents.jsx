import styled from "@emotion/styled"
import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

const Container = styled.div`
    margin-left: 5vw;
    margin-right: 5vw;

    div, p, img, h1, h2, h3, h4, h5, h6, blockquote {
        animation: zoomIn 0.5s ease-out;
    }
`

const NotFoundImage = () => {
    const data = useStaticQuery(graphql`
      {
          file(relativePath: { eq: "images/404.png" }) {
              childImageSharp {
                fluid(traceSVG: {threshold: 100}) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
              }
          }
      }
  `)
    return <Img style={{
        height: "50%",
        width: "80%",
    }} fluid={data.file.childImageSharp.fluid}/>

}

const NotFound = () => {
    return (
        <>
            <div className={"not-found"}>
                <h1>404</h1>
                <h4>Page Not Found</h4>
                <p>Go back to <Link to="/">Home</Link></p>
                <NotFoundImage/>
            </div>


        </>
    )
}
export {
    Container,
    NotFound
}

