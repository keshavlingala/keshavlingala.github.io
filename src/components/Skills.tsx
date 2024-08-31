import React, {useState} from "react";
import styled from "@emotion/styled";
import {ToolTipItem} from "./ToolTip";
import {Icon, Skill} from "../types";
import {icons} from "../hooks/useIcons";
import {IconNames} from "../iconNames";


//  Emotion styled components


const SkillList = styled.ul`
    margin: 0;
    width: 50%;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const SkillItem = styled.li<{ active?: boolean; progress: number }>`
    display: flex;
    flex-direction: row;
    padding: 10px;
    list-style: none;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    position: relative;
    background-color: ${p => (p.active ? "#d0cfcf45" : "inherit")};

    &:hover {
        background-color: #d0cfcf45;

        ::after {
            width: ${p => p.progress}%;
        }
    }

    &::after {
        content: '';
        width: ${p => (p.active ? p.progress : 0)}%;
        transition: width 0.5s ease-out;
        position: absolute;
        left: 0;
        display: inline-block;
        height: 2px;
        background-color: #ffd285;
        bottom: 0;
    }
`;

const Section = styled.div`
    display: flex;
    width: 100%;
    min-height: 429px;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        min-height: 794px;
    }
`;

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
    transition: height 0.5s ease-in-out;
    height: auto;

    li {
        margin-bottom: 33px;
        width: 50px;
        height: 50px;
        animation: fadeUp 0.5s ease-in-out;
    }

    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-top: 66px;
        margin-left: 0;
    }
`;


let skills: Skill[] = [
   {
    name: "Front-end Web Development",
    progress: 100,
    techs: [
        IconNames.Angular, IconNames.Typescript, IconNames.React, IconNames.Javascript,
        IconNames.HTML, IconNames.CSS, IconNames.Bootstrap, IconNames.Gatsby, IconNames.PWA
    ]
},
{
    name: "Back-end Development",
    progress: 100,
    techs: [
        IconNames.Java, IconNames.SpringBoot, IconNames.Python, IconNames.Kotlin,
        IconNames.NodeJS, IconNames.GoLang, IconNames.GoGin, IconNames.Javascript,
        IconNames.ApacheKafka, IconNames.ApacheSpark, IconNames.ApacheCassandra,
        IconNames.NestJs, IconNames.Typescript
    ]
},
{
    name: "Database Design and Management",
    progress: 100,
    techs: [
        IconNames.MySQL, IconNames.MongoDB, IconNames.GoogleCloud, IconNames.ApacheCassandra,
        IconNames.Oracle, IconNames.Postgresql, IconNames.GraphQL, IconNames.Redis
    ]
},
{
    name: "Cloud Technologies and DevOps",
    progress: 100,
    techs: [
        IconNames.GoogleCloud, IconNames.AWS, IconNames.Azure, IconNames.Docker,
        IconNames.Kubernetes, IconNames.ApacheHadoop, IconNames.ApacheSpark,
        IconNames.Bash, IconNames.ApacheKafka, IconNames.Jenkins, IconNames.Git,
        IconNames.Ansible, IconNames.GithubActions
    ]
},
{
    name: "Full Stack Development",
    progress: 100,
    techs: [
        IconNames.Gatsby, IconNames.Python, IconNames.GraphQL, IconNames.Redis,
        IconNames.Angular, IconNames.Typescript, IconNames.React, IconNames.SpringBoot,
        IconNames.NodeJS, IconNames.Docker, IconNames.Javascript, IconNames.HTML,
        IconNames.CSS, IconNames.Bootstrap, IconNames.AWS, IconNames.Kubernetes,
        IconNames.ApacheKafka, IconNames.Jenkins, IconNames.Ansible, IconNames.Git,
        IconNames.Postgresql, IconNames.MySQL, IconNames.MongoDB, IconNames.Java,
        IconNames.Kotlin, IconNames.GoLang, IconNames.GoGin, IconNames.ApacheSpark,
        IconNames.ApacheCassandra, IconNames.NestJs, IconNames.GithubActions, IconNames.PWA
    ]
},
{
    name: "Neural Networks and Machine Learning",
    progress: 100,
    techs: [
        IconNames.NeuralNetworks, IconNames.TensorFlow, IconNames.Keras,
        IconNames.Python, IconNames.Java, IconNames.CPP, IconNames.Javascript,
        IconNames.Arduino
    ]
},
{
    name: "Tools and IDEs for Development",
    progress: 100,
    techs: [
        IconNames.Idea, IconNames.GoLand, IconNames.WebStorm, IconNames.Pycharm,
        IconNames.VsCode, IconNames.Postman, IconNames.Insomnia, IconNames.BlazeMeter,
        IconNames.Jmeter, IconNames.Prometheus, IconNames.Grafana, IconNames.Kibana,
        IconNames.ElasticSearch, IconNames.Splunk, IconNames.Jira, IconNames.Discord,
        IconNames.Slack, IconNames.Confluence, IconNames.BitBucket, IconNames.Scrum,
        IconNames.Kanban, IconNames.Agile, IconNames.WaterFall
    ]
},
{
    name: "Automation scripting",
    progress: 100,
    techs: [
        IconNames.Python, IconNames.Bash, IconNames.Git, IconNames.GoogleCloud,
        IconNames.Docker, IconNames.AWS
    ]
},
{
    name: "All Skills",
    progress: 100,
    techs: []
}
].map(skill => ({...skill, active: skill.name === "Full Stack Development"}));


const SkillsComponent: React.FC = () => {
    const [items, setItems] = useState<Icon[]>(icons.filter(icon => skills.find(skill => skill.active)?.techs.includes(icon.name)));

    return (
        <Section>
            <SkillList>
                {skills.map(skill => (
                    <SkillItem
                        tabIndex={0}
                        onClick={() => {
                            if (skill.techs.length === 0) {
                                setItems(icons);
                            } else {
                                setItems(icons.filter(icon => skill.techs.includes(icon.name)));
                            }
                            skills = skills.map(s => ({...s, active: s.name === skill.name}));
                        }}
                        active={skill.active}
                        progress={skill.progress}
                        key={skill.name}
                    >
                        {skill.name} {skill.active}
                    </SkillItem>
                ))}
            </SkillList>
            <IconLister>
                {items.map(icon => (
                    <ToolTipItem tooltip={icon.name} key={icon.name}>
                        <img width="40px" height="40px" src={icon.icon} alt={icon.name}/>
                    </ToolTipItem>
                ))}
            </IconLister>
        </Section>
    );
};

export default SkillsComponent;
