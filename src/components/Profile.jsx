import React from "react"
import styled from "@emotion/styled"
import ProfilePic from "../hooks/useProfile"

const Background = styled.div`
  //margin-top: 9.2vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 600px){
    flex-direction: column-reverse;
    text-align: center;
    margin-bottom: 10px;
  }
`
const Circle = styled.div`
  //position: absolute;
  width: 50vw;
  margin-left: -50%;
  margin-right: 5vw;
  transition: clip-path 0.5s ease-in-out;
  clip-path: polygon(37.75% 0px, 2px 99.65%, 100% 100%, 99.69% -0.11%);
  @media only screen and (max-width: 600px){
    margin-left: 0;
    width: 40vw;
    margin-right: 0;
    clip-path: polygon(0.13% 2px, 3px 99.98%, 99.84% 100%, 100.02% 0.39%);;
  }
  
  //margin-bottom: 0;
  //right: 2vw;
  //top:9.2vh;
`
const Title = styled.h1`
      margin-left: 2vw;
      font-size: 8vw;
      @keyframes fadeInLeft{
        0% {
          opacity: 0;
          transform: translateX(64%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      animation: fadeInLeft 2s;
      @media only screen and (max-width: 600px){
        margin-left: 0;
      }
`
const SubTitle = styled.h3`
margin-left: 2vw;
font-size: 3vw;
font-weight: initial;
//font-size: 1.3rem;
`
const StyledProfile = styled(ProfilePic)`
  clip-path: circle();
`
export default () => {
  return (
    <Background>
      <div>
        <Title>Keshav Lingala</Title>
        <SubTitle>Computer Science Student</SubTitle>
      </div>
      <Circle>
        <ProfilePic/>
      </Circle>
    </Background>
  )
}
