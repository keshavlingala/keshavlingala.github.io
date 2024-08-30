import React, {useState} from "react";
import styled from "@emotion/styled";
import {ToolTipItem} from "./ToolTip";
import {Icon, Skill} from "../types";
import {icons} from "../hooks/useIcons";


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
        techs: ["Angular", "Typescript", "React", "Javascript", "HTML", "CSS", "Bootstrap", "Gatsby"]
    },
    {
        name: "Back-end Development",
        progress: 100,
        techs: ["Java", "Spring Boot", "Python", "Kotlin", "NodeJS", "GoLang", "Go Gin", "Javascript", "Apache Kafka", "Apache Spark", "Apache" +
        " Cassandra", "NestJs", "Typescript"]
    },
    {
        name: "Database Design and Management",
        progress: 100,
        techs: ["MySQL", "MongoDB", "Google Cloud", "Apache Cassandra", "Oracle", "Postgresql", "GraphQL", "Redis"]
    },
    {
        name: "Cloud Technologies and DevOps",
        progress: 100,
        techs: ["Google Cloud", "AWS", "Azure", "Docker", "Kubernetes", "Apache Hadoop", "Apache Spark", "Bash", "Apache Kafka", "Jenkins", "Git", "Ansible"]
    },
    {
        name: "Full Stack Development",
        progress: 100,
        techs: [
            "Gatsby", "Python", "GraphQL", "Redis",
            "Angular", "Typescript", "React", "Spring Boot", "NodeJS", "Docker", "Javascript", "HTML", "CSS", "Bootstrap", "AWS", "Kubernetes", "Apache Kafka", "Jenkins", "Ansible", "Git", "Postgresql", "MySQL", "MongoDB",
            "Java", "Kotlin", "GoLang", "Go Gin", "Apache Spark", "Apache Cassandra", "NestJs"
        ]
    },
    {
        name: "Neural Networks and Machine Learning",
        progress: 100,
        techs: ["Neural Networks", "TensorFlow", "Keras", "Python", "Java", "C++", "Javascript", "Arduino"]
    },
    {
        name: "Tools and IDEs for Development",
        progress: 100,
        techs: ["Idea", "GoLand", "WebStorm", "Pycharm", "Visual Studio Code", "Postman", "Insomnia", "BlazeMeter", "Jmeter", "Prometheus", "Grafana", "Kibana", "ElasticSearch", "Splunk", "Jira", "Discord", "Slack", "Confluence", "BitBucket", "Scrum", "Kanban", "Agile", "WaterFall", "VsCode"]
    },
    {
        name: "Automation scripting",
        progress: 100,
        techs: ["Python", "Bash", "Git", "Google Cloud", "Docker", "AWS"]
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
