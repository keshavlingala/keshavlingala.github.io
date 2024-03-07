import React from "react";
import Layout from "../layouts/layout";
import Profile from "../components/Profile";
import styled from "@emotion/styled";
import {Container} from "../components/CustomComponents";
import Projects from "../components/Projects";
import SEO from "../layouts/seo";
import SkillsComponent from "../components/SkillsComponent";
import ContactMe from "../components/ContactMe";
import MovingCircles from "../static/cursor-animation";

const Description = styled.ul`
  margin: 20px 0;
  list-style: none;
`;
const IndexPage = () => {
    console.log("%c Hey 👋", "font-size:10vw");
    return (
        <Layout>
            <SEO title="Profile"/>
            <Profile/>
            <Container>
                <Description>
                    <li>
                        Adept Software Engineer with a robust portfolio in full-stack development, cloud solutions, and
                        system optimization. Proficient in Java, Python, AWS, Kubernetes, and beyond. Committed to
                        excellence in clean code and cutting-edge technologies.
                        Dive into my projects below. Get in touch: <a
                        href="mailto:keshav.zsh@gmail.com">keshav.zsh@gmail.com</a>
                    </li>
                </Description>

                <span className="anchor" id="projects"/>
                <h2>Projects</h2>
                <Projects/>
                <span className="anchor" id="experience"/>
                {/*<h2>Work Experience</h2>*/}
                {/*<WorkExperience/>*/}
                {/*<span className="anchor" id="education"/>*/}
                {/*<h2>Education</h2>*/}
                {/*<Education/>*/}
                <span className="anchor" id="skills"/>
                <h2>Skills & Languages</h2>
                <SkillsComponent/>
                <span className="anchor" id="contact"/>
                <h2 title="Anytime, Anywhere">Get In Touch</h2>
                <ContactMe/>
            </Container>
        </Layout>
    );
};
export default IndexPage;
