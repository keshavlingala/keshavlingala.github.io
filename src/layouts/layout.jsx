import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Logo from "../hooks/useLogo"
import "./layout.css"

const AppBar = styled.header`
  width: 100%;
  height: 9.2vh;
  //background-color: #1b1b1b;
  //background-color: inherit;
  display: flex;
  box-sizing: border-box;
  //border-bottom: 1px solid;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  position: fixed;
  z-index: 4;
  top:0;
  &:before{
    content: '';
    position:absolute;
    box-shadow: inset 0 0 100px #1b1b1b;
    width: 100%;
    top:0;
    left: 0;
    right: 0;
    height: 9.2vh;
    backdrop-filter: opacity(0.9) blur(21px);
    z-index: -1;
  }
`
const Brand = styled(Link)`
  filter:invert(0);
  transition: filter 0.3s ease-in-out;
  &:active{
    filter:invert(1);
  }
  &:hover{
  filter:invert(1);
  }
`
const Header = () => {
  return (
    <AppBar>
      <Brand to={"/"}>
        <Logo />
      </Brand>
    </AppBar>
  )
}
const Screen = styled.div`
  min-height: 100vh;
  padding-top: 10vh;
`
const Row = styled.div`
  display: flex;
  justify-content: center;
  min-height: 10vh;
  align-items: center;
  span{
  margin:5px
  }
`
const Footer = styled.footer`
  margin-top: 50px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1b;
`
const Layout = ({ children }) => {
  return (
    <Screen>
      <Header />
      {children}
      <Footer>
        <i><span>Designed and Developed by <a
          href="https://www.linkedin.com/in/keshavlingala/">Keshav Lingala</a></span></i>
        <Row>
          <span title='Gatsby' className="k-icon gatsby" />
          <span title='GraphQL' className="k-icon graphql" />
          <span title='ReactJS' className="k-icon react" />
          <span title='NestJS' className="k-icon nestjs" />
        </Row>
      </Footer>
    </Screen>
  )
}
export default Layout
