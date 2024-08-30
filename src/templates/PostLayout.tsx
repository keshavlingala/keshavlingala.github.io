import React from "react";
import {MDXProvider} from "@mdx-js/react";
import Layout from "../layouts/layout";
import {Container} from "../components/CustomComponents";
import {SEO} from "../components/SEO";
import {AdjacentNode, PostLayoutNode} from "../../gatsby-node";
import {Link} from "gatsby";
import styled from "@emotion/styled";

const Navigator = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
    margin-top: 1em;
`

const NavigationLink = styled(Link)<{position:'left'|'right'}>`
    box-shadow: none;
    background-color: inherit;
    color: inherit;
    border-radius: 4px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;

    ${({position}) => position === 'left' && 'margin-right: auto; border-left: 1px solid;'}
    ${({position}) => position === 'right' && 'margin-left: auto; border-right: 1px solid;'}

    &:focus, &:hover {
        outline: none;
        background-color: #1b1b1b;
        //box-shadow: inset 0 0 4px 5px black;
        border-bottom: 1px solid;
    }

    &:disabled {
        background-color: #1b1b1b;
        color: #545454;
        box-shadow: none;
        outline: none;
        cursor: not-allowed;
    }
`


const PostLayout: React.FC<{
    pageContext: { node: PostLayoutNode, next: AdjacentNode, previous: AdjacentNode },
    children: React.ReactNode
}> = (props) => {
    console.log('Post Layout Data:', props)
    const {node, next, previous} = props.pageContext;
    return <>
        <SEO title={node.frontmatter.title} description={node.frontmatter.description} image={node.frontmatter.featuredImage.publicURL}
             pathname={node.frontmatter.slug}/>
        <Layout>
            <Container>
                <Navigator>
                    {previous && (
                        <NavigationLink position='left' to={'/' + previous.frontmatter.slug}>
                            Prev: {previous.frontmatter.title.length > 30 ? previous.frontmatter.title.slice(0, 30) + '...' : previous.frontmatter.title}
                        </NavigationLink>
                    )}
                    {next && (
                        <NavigationLink position='right' to={'/' + next.frontmatter.slug}>
                            Next: {next.frontmatter.title.length > 30 ? next.frontmatter.title.slice(0, 30) + '...' : next.frontmatter.title}
                        </NavigationLink>
                    )}
                </Navigator>
                <MDXProvider>
                    {props.children}
                </MDXProvider>
            </Container>
        </Layout>
    </>
};

export default PostLayout;

export const Head = ({data}: any) => {
    const {mdx} = data;
    console.log('Post Head Data:', data)
    return <></>
};
