import React from "react"
import Layout from "../layouts/layout"
import Profile from "../components/Profile"
import TabSection from "../components/TabSection"
import styled from "@emotion/styled"
import { Container } from "../components/CustomComponents"
import Projects from "../components/Projects"
import Education from "../components/Education"
import WorkExperience from "../components/WorkExperience"
import SEO from "../layouts/seo"
import SkillsComponent from "../components/SkillsComponent"
import ContactMe from "../components/ContactMe"

const Description = styled.p`
  text-align: center;
  margin: 100px 0;
`
const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Profile' />
      <Profile />
      <TabSection />
      <Container>
        <Description>
          B-tech underGraduate in Keshav Memorial Institute of Technology in department of Computer Science and
          Technology,
          I like to program things like IOT and worked on Web Apps, Automation Scripts, CS Algorithms , Cloud
          Orchestration Cloud
          Automation and Educational Applications more useful to Students like Me.
        </Description>
        <h2>Projects</h2>gi
        <Projects />
        <h2>Work Experience</h2>
        <WorkExperience />
        <h2>Education</h2>
        <Education />
        <h2>Skills & Languages</h2>
        <SkillsComponent />

        <h2 title='Anytime, Anywhere'>Get In Touch</h2>
        <ContactMe />
      </Container>
    </Layout>
  )
}
export default IndexPage
