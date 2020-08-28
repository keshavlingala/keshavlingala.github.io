import React from "react"
import styled from "@emotion/styled"
import "./layout.css"
import { Link } from "gatsby"
import Logo from "../hooks/useLogo"

const AppBar = styled.div`
  width: 100%;
  height: 9.2vh;
  //background-color: #673ab7;
  background-color: inherit;
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  z-index: 3;
  position: sticky;
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
        <Logo/>
      </Brand>
    </AppBar>
  )
}
const Screen = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Screen>
      <Header/>
      {children}
      {/*<Footer/>*/}
    </Screen>
  )
}
export default Layout
