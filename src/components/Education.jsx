import React from "react"
import styled from "@emotion/styled"

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
    background-color: rgba(103,58,183,0.5);
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
      background-color: white;
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
      background-color: #673ab7;
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
      background-color: #673ab7;
      z-index: 2;
      box-shadow: 0 0 2px 5px #fff,
      0 0 0 7px #808080,
      0 0 0 12px #fff,
      0 0 0 13px #673ab7;
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
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);;

`
const Education = () => {
  return (
    <TimeLine>
      <TimelineItem>
        <Div>
          <div className="workExpe">
            <div className="col-9">
              <h5>
                Keshav Memorial Institute of Technology
              </h5>
              <h6>
                2017-2021
              </h6>
              <p>
                Computer Science and Engineering Percentage: 75%
              </p>
            </div>
            <div className="col-3 ">
              <h3>
                July
              </h3>
              <h1>
                27
              </h1>
              <h3>
                2017
              </h3>
            </div>
          </div>
        </Div>
      </TimelineItem>
      <TimelineItem>
        <Div>
          <div className="workExpe">
            <div className="col-9">
              <h5>
                SR Junior College
              </h5>
              <h6>
                2015-2017
              </h6>
              <p>
                Mathematics and Physics Percentage: 94%
              </p>
            </div>
            <div className="col-3 ">
              <h3>
                June
              </h3>
              <h1>
                7
              </h1>
              <h3>
                2015
              </h3>
            </div>
          </div>
        </Div>
      </TimelineItem>
      <TimelineItem>
        <Div>
          <div className="workExpe">
            <div className="col-9">
              <h5>
                Holy Angels High School
              </h5>
              <h6>
                - 2015
              </h6>
              <p>
                Secondary School Certificate (CCE) Percentage: 95%
              </p>
            </div>
            <div className="col-3 ">
              <h3>
                March
              </h3>
              <h1>
                19
              </h1>
              <h3>
                2015
              </h3>
            </div>
          </div>
        </Div>
      </TimelineItem>
    </TimeLine>
  )
}

export default Education
