import React, { useState } from "react"
import styled from "@emotion/styled"
import {
  Angular,
  Arduino,
  AWS,
  Bash,
  CPP,
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
  }

]
const skills = [
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
    techs: ["Google Cloud", "AWS", "Kubernetes", "Hadoop", "Spark"]
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
  &:hover{
    background-color: #d0cfcf45;
    ::after{
      width: ${p => p.progress}%;
    }
  }
  &::after{
    content: '';
    width: 0;
    transition: width 0.5s ease-out;
    position: absolute;
    left: 0;
    display: inline-block;
    height: 2px;
    background: #ffd285;
    bottom: 0;
    
  }
`
const Section = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 600px){
    flex-direction: column;
  }
`
const MyIcon = styled(({ src, className }) => {
  return <div className={className}><img src={src} alt=""/></div>
})
  `
  width: 40px;
  padding: 5px;
`
const IconLister = styled.div`
  display: grid;
  //flex-direction: row;
  //justify-content: center;
  //align-items: center;
  flex-wrap: wrap;
  //margin-top: -33px;
  width: 50%;
  align-items: flex-start;
  //grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 1rem;
  //grid-template-columns: auto auto auto;
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  text-align: center;
  margin-bottom: auto;
  li{
    //margin:5px;
    //margin-top:33px;
    margin-bottom: 33px;
    width: 50px;
    height: 50px;
    animation: fadeUp 1s ease-in-out;
  }
  @keyframes fadeUp{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  @media only screen and (max-width: 600px){
    width: 100%;
    
  }
`
const SkillsComponent = () => {
  const [items, setItems] = useState(icons)
  return (
    <Section>
      <SkillList>
        {skills.sort((a,b)=>b.progress-a.progress).map(skill => {
          return (
            <SkillItem onMouseOver={() => {
              console.log(skill)
              if (skill.techs.length === 0) {
                setItems(icons)
                return
              }
              setItems(icons.filter(icon => skill.techs.includes(icon.name)))
            }}
                       onMouseLeave={() => setItems(icons)}
                       progress={skill.progress} key={skill.name}>
              <h4>
                {skill.name}
              </h4>
            </SkillItem>
          )
        })}
      </SkillList>
      <IconLister>
        {items.map(icon => {
          return (
            <ToolTipItem  tooltip={icon.name} key={icon.name}>
              <img  src={icon.icon} alt=""/>
            </ToolTipItem>
          )
        })}
      </IconLister>
    </Section>
  )
}
export default SkillsComponent
