import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../layouts/seo"
import { Container } from "./CustomComponents"

const shortcodes = { Link } // Provide common components here
export default ({ data: { mdx } }) => {
  console.log(mdx)
  // return <pre>{JSON.stringify(data, null, 4)}</pre>
  console.log(shortcodes)
  return (
    <div>
      <SEO title={mdx.title}/>
      <Layout>
        <Container>
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </Layout>
    </div>
  )
}
export const pageQuery = graphql`
    query BlogPostQuery($id: String){
      mdx(id: { eq: $id }) {
        id
        frontmatter {
          tags
          title
        }
        body
      }
    }
  `

