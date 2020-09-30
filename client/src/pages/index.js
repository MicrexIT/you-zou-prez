import React from "react"
import Layout from "src/components/Layout"
import Routes, {routes} from "./Routes"


export default () => {

  return (
    <Layout pages={routes}>
      <Routes/>
    </Layout>
  )
}

