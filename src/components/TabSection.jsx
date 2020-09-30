import React, { useState } from "react"
import Tabs from "@bit/mui-org.material-ui.tabs"
import Tab from "@bit/mui-org.material-ui.tab"
import { createMuiTheme, ThemeProvider } from "@bit/mui-org.material-ui.styles"
import styled from "@emotion/styled"
// import "font-awesome/css/font-awesome.min.css"
import deepPurple from "@bit/mui-org.material-ui.colors/deepPurple"
import { css } from "@emotion/core"

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
export const UL = styled.ul
  `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 0;
  animation: fadeUp 0.5s ease-in-out;
  @keyframes fadeUp{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
`
const TippedLI = styled.li
  `
    list-style: none;
    /* border: 1px solid black; */
    padding: 5px;
    /* box-shadow: 0px 0px 1px 0px black; */
    border-radius: 10%;
    &:focus{
    outline: none;
    }
    //width: 50px;
    //height: 50px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
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
      //background-color: #1b1b1b;
      padding: 0.5rem;
      border-radius: 6px;
      color: #ffd285;
      opacity: ${p => (p.show ? "1" : "0")};
      transition: all 0.3s ease;
      z-index: -1;
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
export const ToolTipItem = ({ children, tooltip, link }) => {
  const [show, setShow] = useState(false)
  return <TippedLI tabIndex='0' onMouseEnter={() => setShow(true)} tooltip={tooltip} show={show}
                   onTouchStart={() => setShow(true)}
                   onClick={() => link && window.open(link, "_blank")}
                   onTouchEnd={() => setShow(false)}
                   onMouseLeave={() => setShow(false)}>{children}</TippedLI>
}
const TabsPanel = ({ value, className }) => {
  if (!value) {
    return (
      <div css={css`
        @keyframes fadeInRight{
        0% {
          opacity: 0;
          transform: translateX(-64%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
        text-align: center;
        margin-top: 10px;
        transition: transform 1s ease-in-out;
        animation: fadeInRight 0.5s ease-in-out;
        
        `}>
        <h3>About</h3>
        <UL>
          <ToolTipItem link='mailto:keshavlingala@gmail.com' tooltip='Email'>
            <i className="fa fa-envelope fa-2x" />
            Email
          </ToolTipItem>
          <ToolTipItem link='tel:8639207832' tooltip='Contact'>
            <i className="fa fa-phone fa-2x" />
            Contact
          </ToolTipItem>
          <ToolTipItem link='https://goo.gl/maps/XdWKrrCvRsxHTr4PA' tooltip='Locate'>
            <i className="fa fa-map-marker fa-2x" />
            Locate
          </ToolTipItem>
          <ToolTipItem link='https://drive.google.com/file/d/18J3t_xuDEsnC3R2jxEqBxNRDrYhU4AAI/view?usp=sharing'
                       tooltip='Resume'>
            <i className="fa fa-file fa-2x" />
            Resume
          </ToolTipItem>
        </UL>
      </div>
    )
  } else {
    return (
      <div css={css`
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
        animation: fadeInLeft 0.5s ease-in-out;
        text-align: center;
        margin-top: 10px;
        
        `}>
        <h3>Profiles</h3>
        <UL>
          <ToolTipItem link='http://github.com/keshavlingala' tooltip='Github'>
            <i className='fa fa-github fa-2x' />
            Github
          </ToolTipItem>
          <ToolTipItem link='https://www.linkedin.com/in/keshavlingala/' tooltip='LinkedIn'>
            <i className="fa fa-linkedin fa-2x" />
            LinkedIn
          </ToolTipItem>
          <ToolTipItem link='http://instagram.com/im__immortal' tooltip='Instagram'>
            <i className="fa fa-instagram fa-2x" />
            Instagram
          </ToolTipItem>
          <ToolTipItem link='https://www.facebook.com/keshavlingala' tooltip='Facebook'>
            <i className="fa fa-facebook fa-2x" />
            Facebook
          </ToolTipItem>
        </UL>
      </div>
    )
  }
}
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
        <Tab textColor='inherit' label='About' />
        <Tab textColor='inherit' label="Profiles" />
      </Tabs>
      <TabsPanel value={value} />
    </ThemeProvider>
  )
}
export default TabSection
