import React from "react"
import styled from "@emotion/styled"

export const TimeLine = styled.ul
  `
    display: block;
    position: relative;
    text-align: justify;
    max-width: 700px;
    margin: 0;

    &:before {
      top: 0;
      bottom: 0;
      position: absolute;
      content: " ";
      width: 3px;
      background-color: #ffd285;
      margin-left: -1.5px;
      left: 5%;
    }
  `
export const TimelineItem = styled(({ children, className }) => {
  return (
    <li className={className}>
      <div>{children}</div>
      <span className="dot-a" />
      <span className="line" />
      <span className="dot" />
    </li>
  )
})
  `
    &:nth-of-type(n) {
      position: relative;
      list-style: none;
      display: block;
      margin-left: 0;
      width: 100%;
      margin-top: 50px;

      > div:first-of-type {
        width: 80%;
        z-index: 3;
        background-color: inherit;
        margin-left: auto;
      }

      .line {
        height: 1px;
        position: absolute;
        top: 50%;
        bottom: 50%;
        margin-right: -5px;
        background-color: gray;
        z-index: -1;
        right: 15px;
        left: 5%;
      }

      .dot-a {
        right: 20%;
        margin-right: -10px;
        background-color: #ffd285;
        box-shadow: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 20%;
        margin-left: -10px;
        margin-top: -5px;
        z-index: 2;
      }


      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        right: 0;
        margin-right: -5px;
        margin-top: -5px;
        background-color: #ffd285;
        z-index: 2;
        box-shadow: 0 0 2px 5px #1b1b1b,
        0 0 0 7px #808080,
        0 0 0 12px #1b1b1b,
        0 0 0 13px #ffd285;
        left: 5%;
        margin-left: -5px;
      }
    }

    &:first-of-type {
      margin-top: 0;
    }
  `

export const Div = styled(({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
})
  `
    background-color: #1b1b1b !important;
    padding: 15px;
    box-shadow: 2px 2px 5px 0 black;
    border-radius: 10px;

    h3 {
      margin: 0 0 3px;
    }

    h6 {
      font-weight: bold;
    }

    p {
      margin-bottom: 4px;
    }

    .date {
      font-weight: lighter;
      display: block;
    }

    .location {
      font-size: 0.9em;
      font-weight: 200;
      display: block;
    }

    .description {
      font-size: 0.8rem;
    }
    transition: transform 0.5s, box-shadow 0.5s;
    :hover {
      transform: translateX(25px);
      box-shadow: -12px 2px 5px 0 black;
    }

  `

const works = [
  {
    key: "3",
    role: "Senior Officer, Full Stack Development",
    organization: "DBS Bank",
    description: "Tech Stack: Angular, Java Spring Boot, Microservices, MySQL, Jenkins and GIT ",
    date: {
      startDate: "August 2021",
      endDate: "Present"
    },
    location: "Hyderabad, India"
  },
  {
    key: "2",
    role: "Software Engineer Intern",
    organization: "CoMakeIT",
    description: "Full stack Application Developer \n Developed front-end Web Application for Virtusa’s Product to Manage IOT Devices for Enterprise customers",
    date: {
      startDate: "April 2021",
      endDate: "July 2021"
    },
    location: "Hyderabad, India"
  },
  {
    key: "1",
    role: "Software Development Intern",
    organization: "Virtusa",
    description: "Front-end Development in Angular, Worked intensively on developing and improving performance of Angular Dynamic Dashboard for enterprise application",
    date: {
      startDate: "June 2020",
      endDate: "Nov 2020"
    },
    location: "Bangalore, India"
  }
]


const WorkExperience = () => {
  return (
    <TimeLine>
      {works.map(work => {
        return <TimelineItem key={work.key}>
          <Div>
            <h3>
              {work.role}
            </h3>
            <h6>
              {work.organization}
            </h6>
            <span className="date">{work.date.startDate} - {work.date.endDate}</span>
            <div className="description">
              {work.description.split("\n").map(p => {
                return <p key={p}>
                  {p}
                </p>
              })}
            </div>
            <span className="location">
              {work.location}</span>
          </Div>
        </TimelineItem>
      })}
    </TimeLine>
  )
}
export default WorkExperience
