import React, { useState } from "react"
import Layout from "../layouts/layout"
import Profile from "../components/Profile"
// import Tabs from "@bit/mui-org.material-ui.tabs/Tabs"
// import Tab from "@bit/mui-org.material-ui.tab"

const IndexPage = () => {
  const [value, setValue] = useState(0)
  return (
    <Layout>
      <Profile/>
      {/*<Tabs*/}
      {/*  value={value}*/}
      {/*  onChange={(e, v) => setValue(v)}*/}
      {/*  indicatorColor="primary"*/}
      {/*  textColor="primary"*/}
      {/*  centered*/}
      {/*>*/}
      {/*  <Tab label="Item One"/>*/}
      {/*  <Tab label="Item Two"/>*/}
      {/*  <Tab label="Item Three"/>*/}
      {/*</Tabs>*/}
    </Layout>
  )
}
export default IndexPage
