import React from "react"
import styled from "@emotion/styled"
import ProfilePic from "../hooks/useProfile"
import Cover from "../hooks/useCover"

const Background = styled.div`
  position: relative;
  margin-bottom: 13%;
`
const Circle = styled.div`
  position: absolute;
  width: 25vw;
  left: 2vw;
  bottom: -35%;
`
export default () => {
  return (
    <Background>
      <Cover />
      <Circle>
        <ProfilePic />
      </Circle>
    </Background>
  )
}
