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
        background-color: #1b1b1b;
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
    display: flex;
    flex-direction: row;
    padding: 16px;
    //box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);;
    box-shadow: 2px 2px 5px 0 black;

    .col-9 {
      width: 75%;
      padding-right: 10px;

      span {
        display: block;
      }
    }

    .col-3 {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #ffd285 !important;

      span {
        line-height: 1.1;
        display: block;
      }
    }

    .col-3 span:nth-of-type(1) {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0 0 1.45rem;
    }

    .col-3 span:nth-of-type(2) {
      font-size: 1.5rem;
      font-weight: 500;
      margin: 0 0 1.45rem;
    }

    .col-3 span:nth-of-type(3) {
      font-size: 1.1rem;
      font-weight: bold;
    }

    .col-9 span:nth-of-type(1) {
      padding: 0;
      margin: 0 0 1.45rem;
      color: inherit;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1rem;
      line-height: 1.1;
    }

    .col-9 span:nth-of-type(2) {
      padding: 0;
      margin: 0 0 1.45rem;
      color: inherit;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.85028rem;
      line-height: 1.1;
    }

    @media only screen and (max-width: 600px) {
      .col-9 {
        width: 100%
      }
    }

    &:hover {
      //animation:borderRotate 0.5s ease-in-out;
    }
  `

const works = [
  {
    key: "2",
    role: "Software Engineer Intern",
    organization: "CoMakeIT",
    description: "Full stack Application Developer \n Developed front-end Web Application for Virtusa’s Product to Manage IOT Devices for Enterprise customers",
    date: {
      month: "June",
      day: "19",
      year: "2020"
    }
  },
  {
    key: "1",
    role: "Software Engineer Intern",
    organization: "Virtusa",
    description: "Full stack Application Developer",
    date: {
      month: "June",
      day: "19",
      year: "2020"
    }
  }
]


const WorkExperience = () => {
  return (
    <TimeLine>
      {works.map(work => {
        return <TimelineItem key={work.key}>
          <Div>
            <div className="col-9">
            <span>
              {work.role}
            </span>
              <span>
                {work.organization}
            </span>
              {work.description.split("\n").map(p => {
                return <p key={p}>
                  {p}
                </p>
              })}
            </div>
            <div className="col-3 mobile-none">
            <span>
              {work.date.month}
            </span>
              <span>
                {work.date.day}
            </span>
              <span>
              {work.date.year}
            </span>
            </div>
          </Div>
        </TimelineItem>
      })}
    </TimeLine>
  )
}
export default WorkExperience
