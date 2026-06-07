import React from "react";
import Layout from "../layouts/layout";
import styled from "@emotion/styled";
import {Container} from "../components/CustomComponents";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import {SEO} from "../components/SEO";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";

const Description = styled.p`
    margin: 20px 0;
    list-style: none;
`;

const IndexPage: React.FC = () => {
    console.log("%c Hey 👋", "font-size:10vw;color:orange");
    return (
        <Layout>
            <Profile/>
            <Container>
                <Description>
                    Software Development Engineer with a portfolio spanning full-stack development, cloud-native
                    systems, and — most recently — generative AI: designing LLM-powered applications, autonomous
                    agents, and MCP integrations. Proficient across Java, Python, TypeScript, AWS, and Kubernetes,
                    with a focus on clean code and shipping practical AI systems.
                    Dive into my projects below. Get in touch: <a
                    href="mailto:admin@keshav.codes">admin@keshav.codes</a>
                </Description>

                <span className="anchor" id="projects"/>
                <h2>Projects</h2>
                <Projects/>
                <span className="anchor" id="skills"/>
                <h2>Skills & Languages</h2>
                <Skills/>
                <span className="anchor" id="contact"/>
                <h2 title="Anytime, Anywhere">Get In Touch</h2>
                <ContactMe/>
            </Container>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => {
    return (
        <>
            <SEO title="Keshav Lingala"/>
            <html lang='en'/>
        </>
    )
}
