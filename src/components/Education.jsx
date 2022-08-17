import React from "react"
import { Div, TimeLine, TimelineItem } from "./WorkExperience"

const educations=[
  {
    key:'1',
    name:'Keshav Memorial Institute of Technology',
    course:'Computer Science and Engineering',
    percentage:'7.61 CGPA',
    description:'',
    location:'Hyderabad, India',
    date:{
      startDate:'2017',
      endDate:'2021'
    }
  },
  {
    key:'2',
    name:'California State University, Fullerton',
    course:'Master of Science in Computer Science',
    percentage:'',
    description:'',
    location:'Fullerton, California',
    date:{
      startDate:'2022',
      endDate:'Present'
    }
  }
]

const Education = () => {
  return (
    <TimeLine>
      {educations.sort(o=>-o.date.startDate).map(edu=>{
        return <TimelineItem key={edu.key}>
          <Div>
            <h3>
              {edu.name}
            </h3>
            <h6>
              {edu.course}
            </h6>
            <span className='location'>{edu.location}</span>
            <span className='date'>{edu.date.startDate} - {edu.date.endDate}</span>
            <p>
              {edu.percentage}
            </p>
          </Div>
        </TimelineItem>
      })}

    </TimeLine>
  )
}

export default Education
