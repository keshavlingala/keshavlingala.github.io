import React, { useState } from "react"
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

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Navigator = styled.div`
  position: fixed;
  right: ${p => p.show ? 0 : "-50px"};
  top: calc(50vh - 92px);
  display: flex;
  flex-direction: column;
  background: #1b1b1b;
  z-index: 3;
  transition: right 0.5s ease-in-out;
  animation: none;
`

const TippedSpan = styled.span`
  border: 1px solid;
  background-color: #1b1b1b;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0cfcf45;
  }

  &:active {
    box-shadow: 0 0 1px 0 black;
  }

  position: relative;

  &::before {
    content: ${p => p.show ? "'" + p.tooltip + "'" : ""};
    font-size: 0.85em;
    position: absolute;
    display: flex;
    user-select: none;
    padding: 0.5rem;
    border-radius: 6px;
    color: #ffd285;
    opacity: ${p => (p.show ? "1" : "0")};
    transition: all 0.3s ease;
    z-index: -1;
    bottom: 0;
    right: 200%;
    width: 100%;
    align-items: center;
    height: 33px;
    white-space: nowrap;
    justify-content: center;
    text-shadow: 3px 4px 4px black;
    font-weight: 900;
  }
`
const NaviItem = ({ children, tooltip, onClick }) => {
  const [show, setShow] = useState(false)
  return <TippedSpan tabIndex="0" onMouseEnter={() => setShow(true)} tooltip={tooltip} show={show}
                     onTouchStart={() => setShow(true)}
                     onClick={onClick}
                     onTouchEnd={() => setShow(false)}
                     onMouseLeave={() => setShow(false)}>{children}</TippedSpan>
}

const NaviOpener = styled.span`
  color: #1b1b1b;
  font-size: large;
  cursor: pointer;
  position: fixed;
  height: 60px;
  width: 14px;
  background-color: #ffd285;
  border-radius: 10px 0 0 10px;
  top: calc(calc(50vh - 92px) + 85px);
  right: ${p=>p.show?'46px':'0px'};
  transition: right 0.5s ease-in-out;
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: ${p => p.show ? "1" : "1"};
  animation: none;
`
const IndexPage = () => {
  console.log("%c Hey 👋", "font-size:10vw")
  const scrollBy = (tag) => {
    console.log("Moving to Tag")
    console.log(document.querySelector("#" + tag))
    document.querySelector("#" + tag).scrollIntoView({ behavior: "smooth" })
  }
  const [showNavi, setNavi] = useState(false)
  return (
    <Layout>
      <SEO title="Profile" />
      <Profile />
      <TabSection />
      <Container>
        <Description>
          Hi Welcome to my portfolio, This is a place where I would like to keep my <span
          onClick={() => scrollBy("projects")}>projects</span>, <span
          onClick={() => scrollBy("experience")}>experiences</span>, <span
          onClick={() => scrollBy("education")}>education</span> and <span
          onClick={() => scrollBy("skills")}>skills</span> organized in one place. I am currently working at <a
          target="_blank"
          href="https://www.dbs.com/asia-hub-2/index.html" rel="noreferrer">DBS
          Bank</a> as a Full-Stack Developer. I like working on
          real-world problems and provide easy software solutions. Check out my Projects, feel free to <span
          onClick={() => scrollBy("contact")}>contact me</span>.
        </Description>


        <Navigator show={showNavi}>
          <NaviOpener onClick={() => setNavi(!showNavi)} show={showNavi}>
            <span className="material-icons">{showNavi ? "arrow_right" : "arrow_left"}</span>
          </NaviOpener>
          <NaviItem className="navi-item" tooltip="Projects" onClick={() => scrollBy("projects")}>
            <span className="material-icons">science</span>
          </NaviItem>
          <NaviItem className="navi-item" tooltip="Experience" onClick={() => scrollBy("experience")}>
            <span className="material-icons">work</span>
          </NaviItem>
          <NaviItem className="navi-item" tooltip="Education" onClick={() => scrollBy("education")}>
            <span className="material-icons">school</span>
          </NaviItem>
          <NaviItem className="navi-item" tooltip="Skills" onClick={() => scrollBy("skills")}>
            <span className="material-icons">handyman</span>
          </NaviItem>
          <NaviItem className="navi-item" tooltip="Get In Touch" onClick={() => scrollBy("contact")}>
            <span className="material-icons">mail</span>
          </NaviItem>
        </Navigator>

        <span className="anchor" id="projects" />
        <h2>Projects</h2>
        <Projects />
        <span className="anchor" id="experience" />
        <h2>Work Experience</h2>
        <WorkExperience />
        <span className="anchor" id="education" />
        <h2>Education</h2>
        <Education />
        <span className="anchor" id="skills" />
        <h2>Skills & Languages</h2>
        <SkillsComponent />
        <span className="anchor" id="contact" />
        <h2 title="Anytime, Anywhere">Get In Touch</h2>
        <ContactMe />
      </Container>
    </Layout>
  )
}
export default IndexPage
