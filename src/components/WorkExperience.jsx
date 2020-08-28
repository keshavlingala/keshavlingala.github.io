import React from "react"
import styled from "@emotion/styled"

export const TimeLine = styled.ul
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
export const TimelineItem = styled(({ children, className }) => {
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
  }
  .col-9 h6 {
    font-weight: normal;
    font-size: 1rem;
  }
  .col-3 {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #dee2e6 !important;
  }
  .col-3 h3 {
      font-size: 1.1rem;
  }
  .col-3 h1 {
      font-size: 1.5rem;
      font-weight: 500;
  }
  @media only screen and (max-width: 600px) {
    .col-9{width: 100%}
  }
  &:hover{
    //animation:borderRotate 0.5s ease-in-out;
  }
`
const WorkExperience = () => {
  return (
    <TimeLine>
      <TimelineItem>
        <Div>
          <div className="col-9">
            <h4>
              Software Engineer Intern
            </h4>
            <h6>
              Virtusa
            </h6>
            <p>
              Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className="col-3 mobile-none">
            {/*style="font-size: 1.3rem"*/}
            <h3>
              June
            </h3>
            {/*style="font-size: 2rem;font-weight: 500"*/}
            <h1>
              19
            </h1>
            {/*style="font-size: 1.1rem"*/}
            <h3>
              2020
            </h3>
          </div>
        </Div>
      </TimelineItem>
    </TimeLine>
  )
}
export default WorkExperience
