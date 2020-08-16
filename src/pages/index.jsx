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

const Title = styled.h1`
      margin-left: 2vw;
      @keyframes fadeInLeft{
        0% {
          opacity: 0;
          transform: translateX(30px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      animation: fadeInLeft 1s;
`
const SubTitle = styled.h3`
margin-left: 2vw;
font-weight: initial;
font-size: 1.3rem;
`

const Description = styled.p`
  text-align: center;
  margin: 100px 0;
`
const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Profile'/>
      <Profile/>
      <Title>Keshav Lingala</Title>
      <SubTitle>Computer Science Student</SubTitle>
      <TabSection/>
      <Container>
        <Description>
          B-tech UnderGraduate in Keshav Memorial Institute of Technology in Department of Computer Science and
          Technology
          I Like to program things like IOT, Web Apps, Automation Scripts, CS Algorithms , Cloud Orchestration Cloud
          Automation and Educational Applications more useful to Students like Me.
        </Description>
        <h3>Projects</h3>
        <Projects/>
        <h3>Work Experience</h3>
        <WorkExperience/>
        <h3>Education</h3>
        <Education/>
      </Container>
    </Layout>
  )
}
export default IndexPage
