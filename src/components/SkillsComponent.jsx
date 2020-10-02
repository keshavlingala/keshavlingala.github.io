import React, { useState } from "react"
import styled from "@emotion/styled"
import {
  Angular,
  Arduino,
  AWS,
  Bash,
  CPP,
  Docker,
  Firebase,
  Gatsby,
  GCloud,
  Git,
  Hadoop,
  Java,
  JavaScript,
  Kubernetes,
  MangoDB,
  MYSql,
  NodeJS,
  Python,
  RaspberryPi,
  ReactLogo,
  Spark,
  TensorFlow,
  Typescript
} from "../hooks/useIcons"
import { ToolTipItem } from "./TabSection"

const icons = [
  {
    name: "Angular",
    icon: Angular
  },
  {
    name: "Arduino",
    icon: Arduino
  },
  {
    name: "AWS",
    icon: AWS
  },
  {
    name: "Bash",
    icon: Bash
  },
  {
    name: "C++",
    icon: CPP
  },
  {
    name: "Firebase",
    icon: Firebase
  },
  {
    name: "Gatsby",
    icon: Gatsby
  },
  {
    name: "Google Cloud",
    icon: GCloud
  },
  {
    name: "Git",
    icon: Git
  },
  {
    name: "Hadoop",
    icon: Hadoop
  },
  {
    name: "Java",
    icon: Java
  },
  {
    name: "Javascript",
    icon: JavaScript
  },
  {
    name: "Kubernetes",
    icon: Kubernetes
  },
  {
    name: "MongoDB",
    icon: MangoDB
  },
  {
    name: "MySQL",
    icon: MYSql
  },
  {
    name: "NodeJS",
    icon: NodeJS
  },
  {
    name: "Python",
    icon: Python
  },
  {
    name: "Raspberry Pi",
    icon: RaspberryPi
  },
  {
    name: "React",
    icon: ReactLogo
  },
  {
    name: "Spark",
    icon: Spark
  },
  {
    name: "TensorFlow",
    icon: TensorFlow
  },
  {
    name: "Typescript",
    icon: Typescript
  },
  {
    name: "Docker",
    icon: Docker
  }

]
let skills = [
  {
    name: "Analytical and Problem solving",
    progress: 87,
    techs: ["Java", "Python", "Javascript", "C++"]
  },
  {
    name: "Web Development Front-end & Back-end",
    progress: 85,
    techs: ["Angular", "React", "Firebase", "Gatsby", "NodeJS", "Javascript", "MongoDB", "TypeScript", "MySQL"]
  },
  {
    name: "Automation scripting",
    progress: 83,
    techs: ["Python", "Bash", "Git", "Google Cloud", "AWS"]
  },
  {
    name: "Cloud Computing",
    progress: 72,
    techs: ["Google Cloud", "Docker", "AWS", "Kubernetes", "Hadoop", "Spark"]
  },
  {
    name: "Machine Learning",
    progress: 78,
    techs: ["Python", "TensorFlow"]
  },
  {
    name: "Fast Learner",
    progress: 100,
    techs: []
  },
  {
    name: "IOT",
    progress: 79,
    techs: ["Python", "Raspberry Pi", "Arduino", "C++"]
  }

]
const falseAll = (skills, name) => {
  return skills.map(skill => {
    return { ...skill, active: skill.name === name }
  })
}
skills = falseAll(skills, "")
const SkillList = styled.ul`
  margin:0;
  width: 50%;
  @media only screen and (max-width: 600px){
    width: 100%;
  }
`
const SkillItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 10px;
  list-style: none;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  position:relative;
  background-color: ${p => p.active ? "#d0cfcf45" : "inherit"};
  &:hover{
    background-color: #d0cfcf45;
    ::after{
      width: ${p => p.progress}%;
    }
  }
  &::after{
    content: '';
    width: ${p => p.active ? p.progress : 0}%;
    transition: width 0.5s ease-out;
    position: absolute;
    left: 0;
    display: inline-block;
    height: 2px;
    background-color: #ffd285;
    bottom: 0;
  }
`
const Section = styled.div`
  display: flex;
  width: 100%;
  min-height: 429px;
  @media only screen and (max-width: 600px){
    flex-direction: column;
    min-height: 794px;
  }
`

const IconLister = styled.ul`
  display: grid;
  flex-wrap: wrap;
  width: 50%;
  align-items: flex-start;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 1rem;
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  text-align: center;
  margin-bottom: auto;
  li{
    margin-bottom: 33px;
    width: 50px;
    height: 50px;
    animation: fadeUp 0.5s ease-in-out;
  }
  @keyframes fadeUp{
    from{
      opacity: 0;
      transform: translateY(-10px);
    }
    to{
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media only screen and (max-width: 600px){
    width: 100%;
    margin-top:66px;
    margin-left: 0;
  }
`
const SkillsComponent = () => {
  const [items, setItems] = useState(icons)
  const [selected, setSelected] = useState(icons)
  return (
    <Section>
      <SkillList>
        {skills.sort((a, b) => b.progress - a.progress).map(skill => {
          return (
            <SkillItem tabIndex='0' onMouseOver={() => {
              if (skill.techs.length === 0) {
                setItems(icons)
              } else
                setItems(icons.filter(icon => skill.techs.includes(icon.name)))
            }}
                       onClick={() => {
                         skills = falseAll(skills, skill.name)
                         if (skill.techs.length === 0)
                           setSelected(icons)
                         else
                           setSelected(icons.filter(icon => skill.techs.includes(icon.name)))
                       }}
                       active={skill.active}
                       onMouseLeave={() => {
                         setItems(selected)
                       }}
                       progress={skill.progress} key={skill.name}>
              {skill.name}
            </SkillItem>
          )
        })}
      </SkillList>
      <IconLister>
        {items.map(icon => {
          return (
            <ToolTipItem tooltip={icon.name} key={icon.name}>
              <img src={icon.icon} alt="" />
            </ToolTipItem>
          )
        })}
      </IconLister>
    </Section>
  )
}
export default SkillsComponent
