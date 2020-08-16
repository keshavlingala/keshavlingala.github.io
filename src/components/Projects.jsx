import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { navigate } from "../../.cache/gatsby-browser-entry"


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
            slug
          }
        }
      }
`)
  console.log(data)
  return data.allMdx.nodes.map(i =>
    <pre  onClick={() => navigate(i.slug)} key={i.id}>{JSON.stringify(i, null, 2)}</pre>
  )
}
export default Projects
