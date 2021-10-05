import React from "react"
import { Div, TimeLine, TimelineItem } from "./WorkExperience"


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
              Computer Science and Engineering <br/>
              Percentage: 77.1%
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
              Mathematics and Physics <br/> Percentage: 94%
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
              Secondary School Certificate (CCE) <br/> Percentage: 95%
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
