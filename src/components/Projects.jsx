import React from "react"
import { graphql, useStaticQuery } from "gatsby"


const Projects = () => {
  const data = useStaticQuery(graphql`
      query MyQuery {
        allMdx {
          nodes {
            id
            excerpt
            frontmatter {
              slug
              tags
              title
            }
          }
        }
      }
`)
  console.log(data)
  return (
    <>
      <h3>Projects</h3>
      {data.allMdx.nodes.map(i => <pre key={i.id}>{JSON.stringify(i, null, 2)}</pre>)}
    </>
  )
}
export default Projects
