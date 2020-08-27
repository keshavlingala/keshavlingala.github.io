import React, { useState } from "react"
import Tabs from "@bit/mui-org.material-ui.tabs"
import Tab from "@bit/mui-org.material-ui.tab"
import { createMuiTheme, ThemeProvider } from "@bit/mui-org.material-ui.styles"
import styled from "@emotion/styled"
import "font-awesome/css/font-awesome.min.css"
import deepPurple from "@bit/mui-org.material-ui.colors/deepPurple"

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: "#0e0a26"
    // },
    secondary: {
      main: deepPurple[50]
    }
  }
})


const UL = styled.ul
  `
display: flex;
flex-direction: row;
justify-content: space-around;
`
const LI = styled.li
  `
    list-style: none;
    /* border: 1px solid black; */
    padding: 5px;
    /* box-shadow: 0px 0px 1px 0px black; */
    border-radius: 10%;
    //width: 50px;
    //height: 50px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-align: center;
    transition: background-color 0.3s ease ;
    &:hover{
    background-color: #d0cfcf45;
    }
    &:active{
    box-shadow: 0 0 1px 0 black;
    }
    position:relative;
    &::before {
      content: ${p => "'" + p.tooltip + "'"};
      font-size: 0.85em;
      position: absolute;
      display: flex;
      background-color: rgba(0,0,0,0.35);
      padding: 0.5rem;
      border-radius: 6px;
      color: white;
      opacity: ${p => (p.show ? "1" : "0")};
      transition: all 0.3s ease;
      z-index: 1;
      bottom: 110%;
      left: 0;
      //right: -50%;
      width: 100%;
      align-items: center;
      height: 33px;
      white-space: nowrap;
      justify-content: center;
    }
    
`
const Item = ({ children, tooltip }) => {
  const [show, setShow] = useState(false)
  return <LI onMouseEnter={() => setShow(true)} tooltip={tooltip} show={show}
             onTouchStart={() => setShow(true)}
             onTouchEnd={() => setShow(false)}
             onMouseLeave={() => setShow(false)}>{children}</LI>
}
const TabsPanel = styled(({ value, className }) => {
  if (!value) {
    return (
      <div className={className}>
        <h3>About</h3>
        <UL>
          <Item tooltip='Email'>
            <i className="fa fa-envelope fa-2x"/>
            Email
          </Item>
          <Item tooltip='Contact'>
            <i className="fa fa-phone fa-2x"/>
            Contact
          </Item>
          <Item tooltip='Locate'>
            <i className="fa fa-map-marker fa-2x"/>
            Locate
          </Item>
          <Item tooltip='Resume'>
            <i className="fa fa-file fa-2x"/>
            Resume
          </Item>
        </UL>
      </div>
    )
  } else {
    return (
      <div className={className}>
        <h3>Profiles</h3>
        <UL>
          <Item tooltip='Github'>
            <i className='fa fa-github fa-2x'/>
            Github
          </Item>
          <Item tooltip='LinkedIn'>
            <i className="fa fa-linkedin fa-2x"/>
            LinkedIn
          </Item>
          <Item tooltip='Instagram'>
            <i className="fa fa-instagram fa-2x"/>
            Instagram
          </Item>
          <Item tooltip='Facebook'>
            <i className="fa fa-facebook fa-2x"/>
            Facebook
          </Item>
        </UL>
      </div>
    )
  }
})`
text-align: center;
`
const TabSection = () => {
  const [value, setValue] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        variant='fullWidth'
        indicatorColor='secondary'
        style={{
          backgroundColor: "#1b1b1b",
          color: "inherit",
          borderTop: "1px solid",
          borderBottom: "1px solid"
        }}
      >
        <Tab textColor='inherit' label='About'/>
        <Tab textColor='inherit' label="Profiles"/>
      </Tabs>
      <TabsPanel value={value}/>
    </ThemeProvider>
  )
}
export default TabSection
