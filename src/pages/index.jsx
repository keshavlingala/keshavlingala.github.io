import React from "react"
import Layout from "../layouts/layout"
import Profile from "../components/Profile"
import TabSection from "../components/TabSection"
import styled from "@emotion/styled"

const Title = styled.h1`
      margin-left: 2vw;
      @keyframes fadeInLeft{
        0% {
          opacity: 0;
          transform: translateX(30px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      animation: fadeInLeft 1s;
`
const SubTitle = styled.h3`
margin-left: 2vw;
font-weight: initial;
font-size: 1.3rem;
`
const IndexPage = () => {
  return (
    <Layout>
      <Profile/>
      <Title>Keshav Lingala</Title>
      <SubTitle>Computer Science Student</SubTitle>
      <TabSection/>
    </Layout>
  )
}
export default IndexPage
