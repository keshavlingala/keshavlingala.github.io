import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../layouts/seo"
import { Container } from "./CustomComponents"
import styled from "@emotion/styled"
import { ToolTipItem, UL } from "./TabSection"
import { css } from "@emotion/core"

export default (props) => {
  const mdx=props.data.mdx
  console.log({ props })
  const ProjectLinks = styled(({ className }) => {
    return (<div className={className}>
      <h2>Links</h2>
      <UL css={css`
       justify-content: flex-start;
       margin-top: 40px;
       li{
       margin-right: 30px;
       }
      `}>
        <ToolTipItem tooltip={"Github Link"} link={mdx.frontmatter.code}>
          <i className='fa fa-github fa-2x' />
          Github
        </ToolTipItem>
        <ToolTipItem tooltip={"Visit Prototype"} link={mdx.frontmatter.demo}>
          <i className='fa fa-link fa-2x' />
          Demo
        </ToolTipItem>
      </UL>
    </div>)
  })`
    border-bottom: 2px solid;
    `
  console.log({ mdx })
  return (
    <div>
      <SEO tags={mdx.frontmatter.tags} img={mdx.frontmatter.featuredImage.childImageSharp.fixed.src} description={mdx.frontmatter.description} title={mdx.frontmatter.title} />
      <Layout>
        <Container>
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
          {mdx.frontmatter.demo && mdx.frontmatter.code && <ProjectLinks />}
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
