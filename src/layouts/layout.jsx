import React from "react"
import styled from "@emotion/styled"
import Logo from "../hooks/useLogo"
import "font-awesome/css/font-awesome.min.css"
import "./layout.css"
import { Link } from "gatsby"

const AppBar = styled.div`
  width: 100%;
  height: 64px;
  background-color: #673ab7;
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  @media (max-width: 599px) {
    height: 56px;
  }
`
const Header = () => {
  return (
    <AppBar>
      <Link to={"/"}>
        <Logo/>
      </Link>
    </AppBar>
  )
}

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
      {/*<Footer/>*/}
    </div>
  )
}
export default Layout
