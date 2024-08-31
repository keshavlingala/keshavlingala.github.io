import React, {useState} from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import styled from "@emotion/styled"
import {Project} from "../types";
import {icons} from "../hooks/useIcons";
import {ToolTipItem} from "./ToolTip";

const ProjectCard = styled(Link)`
    display: flex;
    margin-bottom: 50px;
    box-shadow: 2px 2px 5px 0 black;
    background-color: #1b1b1b;
    min-height: 260px;
    padding: 10px;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    overflow: hidden;
    border-radius: 1em;
    animation: bubble 0.7s ease-in;

    &:after {
        content: '';
        display: flex;
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 100%;
        //transform: scale(0);
        left: 0;
        right: 0;
        background-color: #ffd285;
        text-align: center;
        justify-content: center;
    }

    &:hover {
        &:after {
            content: '';
            transform: scale(1);
            animation: infinite growCenter 2s ease-in-out;
        }

        //animation: pulse 0.5s ease-in-out;
        box-shadow: 2px 2px 5px 0 #ffd285;
    }

    &:active {
        //animation: fadeToLeft 0.3s ease-in-out;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
    }
`

const FeatureImg = styled(GatsbyImage)`
    width: 20vw;
    min-width: 20vw;
    margin-left: auto;
    margin-bottom: 0;
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: scale(0.9);
    }

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

const SkillImg = styled.img`
    width: 40px;
    height: 40px;
`

export const SkillIconListContainer = styled.ol`
    display: flex;
    margin-left: 0;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2px;
`

const Projects: React.FC = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
          allMdx {
            nodes {
              id
              frontmatter {
                slug
                tags
                title
                code
                demo
                description
                date
                techs
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      placeholder: BLURRED
                      formats: [AUTO, WEBP]
                    )
                  }
                }
              }
            }
          }
        }
    `)
    if (!data) return <></>

    return data?.allMdx?.nodes
        .sort((a: Project, b: Project) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
        .map((project: Project) => {
            const [isExpanded, setIsExpanded] = useState(false);
            const image = getImage(project.frontmatter.featuredImage.childImageSharp.gatsbyImageData)
            const date = new Date(project.frontmatter.date).toLocaleString('en-US', {year: 'numeric', month: 'short'})
            return (
                <ProjectCard to={project.frontmatter.slug} tabIndex={0} key={project.id}>
                    <ProjectCardContent>
                        <h3>{project.frontmatter.title}</h3>
                        <p>
                            {isExpanded ? project.frontmatter.description + ' ' : project.frontmatter.description.substring(0, 300) + "..."}
                            <span style={{textDecoration:'underline'}} onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setIsExpanded(!isExpanded);
                            }}>
                                {isExpanded ? "Read Less" : "Read More"}
                            </span>
                        </p>

                        <SkillIconListContainer>
                            {project.frontmatter.techs &&
                                project.frontmatter.techs.map(tech => {
                                    const icon = icons.find(icon => icon.name === tech);
                                    return icon ? (
                                        <ToolTipItem tooltip={icon.name} key={icon.name}>
                                            <img width="40px" height="40px" src={icon.icon} alt={icon.name}/>
                                        </ToolTipItem>
                                    ) : null;
                                })
                            }
                        </SkillIconListContainer>
                        <CreatedOn>- {date}</CreatedOn>
                    </ProjectCardContent>
                    {image && <FeatureImg image={image} alt={project.frontmatter.title}/>}
                </ProjectCard>
            )
        }) || <></>
}

export default Projects
