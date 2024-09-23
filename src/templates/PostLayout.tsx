import React from "react";
import {MDXProvider} from "@mdx-js/react";
import Layout from "../layouts/layout";
import {Container} from "../components/CustomComponents";
import {SEO} from "../components/SEO";
import {Link} from "gatsby";
import styled from "@emotion/styled";
import {AdjacentNode, PostLayoutNode} from "../types";
import {icons} from "../hooks/useIcons";
import {ToolTipItem, UL} from "../components/ToolTip";
import {SkillIconListContainer} from "../components/Projects";
import {css} from "@emotion/react";

const Navigator = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
    margin-top: 1em;
`

const NavigationLink = styled(Link)<{ position: 'left' | 'right' }>`
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
    pageContext: { node: PostLayoutNode, next: AdjacentNode, previous: AdjacentNode }, children: React.ReactNode
}> = (props) => {
    const {node, next, previous} = props.pageContext;
    return <>
        <Layout>
            <Container>
                <Navigator>
                    {previous && (<NavigationLink position='left' to={'/' + previous.frontmatter.slug}>
                        Prev: {previous.frontmatter.title.length > 30 ? previous.frontmatter.title.slice(0, 30) + '...' : previous.frontmatter.title}
                    </NavigationLink>)}
                    {next && (<NavigationLink position='right' to={'/' + next.frontmatter.slug}>
                        Next: {next.frontmatter.title.length > 30 ? next.frontmatter.title.slice(0, 30) + '...' : next.frontmatter.title}
                    </NavigationLink>)}
                </Navigator>
                <h1>{node.frontmatter.title}</h1>
                <h3>Technologies Used</h3>
                <SkillIconListContainer>
                    {node.frontmatter.techs && icons.filter(icon => node.frontmatter.techs.includes(icon.name))
                        .map(icon => <ToolTipItem tooltip={icon.name} key={icon.name}>
                            <img width="40px" height="40px" src={icon.icon} alt={icon.name}/>
                        </ToolTipItem>)}
                </SkillIconListContainer>
                <h3>Links</h3>
                <UL css={css`
                    justify-content: flex-start;
                    margin-top: 40px;

                    li {
                        margin-right: 30px;
                    }
                `}>
                    {node.frontmatter.code && <ToolTipItem tooltip={"Open in Github"} link={node.frontmatter.code}>
                        <i className='fa fa-github fa-2x'/>
                        Github
                    </ToolTipItem>}
                    {node.frontmatter.code2 && <ToolTipItem tooltip={"Open in Github"} link={node.frontmatter.code2}>
                        <i className='fa fa-github fa-2x'/>
                        Github
                    </ToolTipItem>}
                    {node.frontmatter.demo && <ToolTipItem tooltip={"Live Demo"} link={node.frontmatter.demo}>
                        <i className='fa fa-link fa-2x'/>
                        Demo
                    </ToolTipItem>}
                </UL>
                <hr/>
                <MDXProvider>
                    {props.children}
                </MDXProvider>
            </Container>
        </Layout>
    </>
};

export default PostLayout;

export const Head = ({pageContext}: {pageContext: { node: PostLayoutNode }}) => {
    const {node} = pageContext;
    return <SEO title={node.frontmatter.title} description={node.frontmatter.description} image={node.frontmatter.featuredImage.publicURL} pathname={node.frontmatter.slug}/>
};
