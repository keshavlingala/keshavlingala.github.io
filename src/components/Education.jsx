import React from "react"
import { Div, TimeLine, TimelineItem } from "./WorkExperience"

/*
const TimeLine = styled.ul
  `
  display: block;
  position: relative;
  text-align: justify;
  max-width: 700px;
  margin:0;

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
const TimelineItem = styled(({ children, className }) => {
  return (
    <li className={className}>
      <div>{children}</div>
      <span className="dot-a"/>
      <span className="line"/>
      <span className="dot"/>
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

const Div = styled(({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
})
`
  padding: 16px;
  //box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);;
  box-shadow: 2px 2px 5px 0 black;
`
*/

const Education = () => {
  return (
    <TimeLine>
      <TimelineItem>
        <Div>
          <div className="col-9">
            <span>
              Keshav Memorial Institute of Technology
            </span>
            <span>
              2017-2021
            </span>
            <p>
              Computer Science and Engineering Percentage: 75%
            </p>
          </div>
          <div className="col-3 mobile-none">
            <span>
              July
            </span>
            <span>
              27
            </span>
            <span>
              2017
            </span>
          </div>
        </Div>
      </TimelineItem>
      <TimelineItem>
        <Div>
          <div className="col-9">
            <span>
              SR Junior College
            </span>
            <span>
              2015-2017
            </span>
            <p>
              Mathematics and Physics Percentage: 94%
            </p>
          </div>
          <div className="col-3 mobile-none">
            <span>
              June
            </span>
            <span>
              7
            </span>
            <span>
              2015
            </span>
          </div>
        </Div>
      </TimelineItem>
      <TimelineItem>
        <Div>
          <div className="col-9">
            <span>
              Holy Angels High School
            </span>
            <span>
              - 2015
            </span>
            <p>
              Secondary School Certificate (CCE) Percentage: 95%
            </p>
          </div>
          <div className="col-3 mobile-none">
            <span>
              March
            </span>
            <span>
              19
            </span>
            <span>
              2015
            </span>
          </div>
        </Div>
      </TimelineItem>
    </TimeLine>
  )
}

export default Education
