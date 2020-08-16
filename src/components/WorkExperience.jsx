import React from "react"
import styled from "@emotion/styled"

const TimeLine = styled.ul`
  //padding-inline-start: 0;
  display: block;
  //margin-top: 100px;
  position: relative;
  text-align: justify;
  width: 100%;
  //border: 1px solid black;

  &:before {
    //display: inline-block;
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: #007bff7a;
    left: 50%;
    margin-left: -1.5px;
  }

@media (max-width: 767px) {
    &:before {
      left: 5%;
    }
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
  &:nth-of-type(odd) {
    position: relative;
    list-style: none;
    width: 50%;
    margin-top: -30px;
    display: block;

    > div:first-of-type {
      width: 80%;
      z-index: 3;
      background-color: white;
    }

    .line {
      height: 1px;
      position: absolute;
      left: 0;
      top: 50%;
      bottom: 50%;
      margin-right: -5px;
      background-color: gray;
      z-index: -1;
      right: 15px;
    }

    .dot-a {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      right: 20%;
      margin-right: -10px;
      margin-top: -5px;
      background-color: #ff6090;
      z-index: 2;
      box-shadow: none;
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
      background-color: #ff6090;
      z-index: 2;
      box-shadow: 0 0 2px 5px #fff,
      0 0 0 7px #808080,
      0 0 0 12px #fff,
      0 0 0 13px #ff6090;
    }
  }

  &:nth-of-type(even) {
    display: block;
    position: relative;
    list-style: none;
    width: 50%;
    margin-left: 50%;
    margin-top: -50px;

    > div:first-of-type {
      width: 80%;
      background-color: white;
      z-index: 3;
      margin-left: auto;
    }

    .line {
      height: 1px;
      position: absolute;
      left: 0;
      right: 5px;
      top: 50%;
      bottom: 50%;
      background-color: gray;
      z-index: -1;
    }

    .dot-a {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 20%;
      margin-left: -10px;
      margin-top: -5px;
      background-color: #534bae;
      z-index: 2;
      box-shadow: none;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      margin-left: -5px;
      margin-top: -5px;
      z-index: 2;
      background-color: #534bae;
      box-shadow: 0 0 2px 5px #fff,
      0 0 0 7px #808080,
      0 0 0 12px #fff,
      0 0 0 13px #534bae;
    }
  }

  &:first-of-type {
    margin-top: 0;
  }

  &:nth-of-type(6n+1) {
    .dot {
      background-color: #ec407a;
      box-shadow: 0 0 2px 5px #fff,
      0 0 0 7px #808080,
      0 0 0 12px #fff,
      0 0 0 13px #ec407a;
    }

    .dot-a {
      background-color: #ec407a;
    }
  }

  &:nth-of-type(6n+2) {
    .dot {
      background-color: #ab47bc;
      box-shadow: 0 0 2px 5px #fff,
      0 0 0 7px #808080,
      0 0 0 12px #fff,
      0 0 0 13px #ab47bc;
    }

    .dot-a {
      background-color: #ab47bc;
    }
  }

  &:nth-of-type(6n+3) {
    .dot {
      background-color: #26c6da;
      box-shadow: 0 0 2px 5px #fff,
      0 0 0 7px #808080,
      0 0 0 12px #fff,
      0 0 0 13px #26c6da;
    }

    .dot-a {
      background-color: #26c6da;
    }
  }

  &:nth-of-type(6n+4) {
    .dot {
      background-color: #ffc107;
      box-shadow: 0 0 2px 5px #fff,
      0 0 0 7px #808080,
      0 0 0 12px #fff,
      0 0 0 13px #ffc107;
    }

    .dot-a {
      background-color: #ffc107;
    }
  }

  &:nth-of-type(6n+5) {
    .dot {
      background-color: #006064;
      box-shadow: 0 0 2px 5px #fff,
      0 0 0 7px #808080,
      0 0 0 12px #fff,
      0 0 0 13px #006064;
    }

    .dot-a {
      background-color: #006064;
    }
  }

  &:nth-of-type(6n) {
    .dot {
      background-color: #ff7043;
      box-shadow: 0 0 2px 5px #fff,
      0 0 0 7px #808080,
      0 0 0 12px #fff,
      0 0 0 13px #ff7043;
    }

    .dot-a {
      background-color: #ff7043;
    }
  }

@media (max-width: 767px) {
&:nth-of-type(n) {
      margin-left: 0;
      width: 100%;
      margin-top: 50px;

      > div:first-of-type {
        margin-left: auto;
      }

      .line {
        left: 5%;
      }

      .dot-a {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 20%;
        margin-left: -10px;
        margin-top: -5px;
        z-index: 2;
        box-shadow: none;
      }

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 5%;
        margin-left: -5px;
        margin-top: -5px;
      }
    }
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
const WorkExperience = () => {
  return (
    <TimeLine>
      <TimelineItem>
        <Div>
          <div className="workExpe">
            <div className="col-9">
              <h5>
                Software Engineer Intern
              </h5>
              <h6>
                Virtusa
              </h6>
              <p>
                Lorem Ipsum has been the industry's standard
              </p>
            </div>
            <div className="col-3 ">
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
          </div>
        </Div>
      </TimelineItem>
    </TimeLine>
  )
}
export default WorkExperience
