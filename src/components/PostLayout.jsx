import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../layouts/seo"
import { Container } from "./CustomComponents"
import styled from "@emotion/styled"
import { ToolTipItem, UL } from "./ToolTip"
import { css } from "@emotion/core"

export default (props) => {
  const mdx = props.data.mdx
  const ProjectLinks = styled(({ className }) => {
    return (<div className={className}>
      <h2>Links</h2>
      <UL css={css`
        justify-content: flex-start;
        margin-top: 40px;
        li {
          margin-right: 30px;
        }
      `}>
        {mdx.frontmatter.code && <ToolTipItem tooltip={"Github App"} link={mdx.frontmatter.code}>
          <i className="fa fa-github fa-2x" />
          Github
        </ToolTipItem>}
        {mdx.frontmatter.code2 && <ToolTipItem tooltip={"Github API"} link={mdx.frontmatter.code2}>
          <i className="fa fa-github fa-2x" />
          Github
        </ToolTipItem>}
        {mdx.frontmatter.demo && <ToolTipItem tooltip={"Visit Prototype"} link={mdx.frontmatter.demo}>
          <i className="fa fa-link fa-2x" />
          Demo
        </ToolTipItem>}
      </UL>
    </div>)
  })`
    border-bottom: 2px solid;
  `
  return (
    <div>
      <SEO tags={mdx.frontmatter.tags} img={mdx.frontmatter.featuredImage.childImageSharp.fixed.src}
           description={mdx.frontmatter.description} title={mdx.frontmatter.title}  slug={mdx.frontmatter.slug} />
      <Layout>
        <Container>
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
          <ProjectLinks />
        </Container>
      </Layout>
    </div>
  )
}
export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
  mdx(id: {eq: $id}) {
    id
    frontmatter {
      description
      tags
      title
      code
      code2
      date
      demo
      featuredImage {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
    body
  }
}

  `

