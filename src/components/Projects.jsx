import React from "react"
import { graphql, navigate, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
/*query MyQuery {
  allMdx {
    nodes {
      id
      excerpt(truncate: true, pruneLength: 150)
      slug
      frontmatter {
        tags
        title
        description
        featuredImage {
          id
          childImageSharp {
            fluid {
              tracedSVG
              src
            }
          }
        }
      }
    }
  }
}*/

const ProjectCard = styled.div`
    display: flex;
    margin-bottom: 50px;
    box-shadow: 2px 2px 5px 0 black;
    background-color: #1b1b1b;
    min-height: 260px;
    padding: 10px;
    position: relative;
    cursor: pointer;
    &:after{
      content: '';
      display:flex;
      position:absolute;
      bottom: 0;
      height: 2px;
      width: 100%;
      transform: scale(0);
      left: 0;
      right: 0;
      background-color: #ffd285;
      //transition: transform 0.5s cubic-bezier();
      text-align: center;
      justify-content: center;
      //animation: growCenter 0.5s reverse;
    }
    &:hover,:active{
      :after{
      content: '';
      //width: 100%;
      transform: scale(1);
      animation: growCenter 0.5s ease-in-out ;
      }
    }
    @keyframes growCenter{
      from{
        transform: scale(0);
      }
      to{
        transform: scale(1);
      }
    }
    @media only screen and (max-width: 600px) {
      flex-direction: column-reverse;
    }
`
const FeatureImg = styled(Img)`
    width: 20vw;
    min-width: 20vw;
    margin-left: auto;
    margin-bottom: 0;
    @media only screen and (max-width: 600px) {
      width: 100%;
      max-height: 30vh;
    }
`
const ProjectCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 10px 16px 16px;
  text-align: justify;
`
const CreatedOn = styled.span`
  margin-top: auto;
`
const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        nodes {
          id
          excerpt(truncate: true, pruneLength: 300)
          frontmatter {
            slug
            tags
            title
            description
            date
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
`)
  // console.log(data)
  return data.allMdx.nodes.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)).map(project => {
      const { fluid } = project.frontmatter.featuredImage.childImageSharp
      return (
        <ProjectCard onClick={() => {
          navigate(project.frontmatter.slug)
        }} key={project.id}>
          <ProjectCardContent>
            <h2>{project.frontmatter.title}</h2>
            <p>{project.frontmatter.description}</p>
            <CreatedOn>- {project.frontmatter.date}</CreatedOn>
          </ProjectCardContent>
          <FeatureImg fluid={fluid}/>
        </ProjectCard>
      )
    }
  )
}
export default Projects
