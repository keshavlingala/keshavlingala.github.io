import React from "react";
import Layout from "../layouts/layout";
import Profile from "../components/Profile";
import styled from "@emotion/styled";
import {Container} from "../components/CustomComponents";
import Projects from "../components/Projects";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import SEO from "../layouts/seo";
import SkillsComponent from "../components/SkillsComponent";
import ContactMe from "../components/ContactMe";

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
                        Self-motivated, hardworking, and passionate developer, Skilled in Full Stack Web Developer with
                        expertise in developing applications and experience in Cloud Computing, Application
                        Containerization, and Automation using Bash and Python. Also proficient in using Front-end
                        Frameworks such as React and Angular.
                    </li>
                    <li>Specialized in solving real-world complex problems.</li>
                    <li>With hands-on experience in building high-performance, scalable and highly available systems.
                    </li>
                    <li>Feel Free to Contact me at <a href="mailto:keshavlingala@gmail.com">keshavlingala@gmail.com</a>
                    </li>
                </Description>

                <span className="anchor" id="projects"/>
                <h2>Projects</h2>
                <Projects/>
                <span className="anchor" id="experience"/>
                <h2>Work Experience</h2>
                <WorkExperience/>
                <span className="anchor" id="education"/>
                <h2>Education</h2>
                <Education/>
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
