import React from "react"
import {Router} from "@reach/router"
import Admin from "./Admin"
import Users from "./Users"
import Request from "./Request"


export default () => {
  return (
    <Router>
      <Request path={`/${routes[0]}`}/>
      <Users path={`/${routes[1]}`}/>
      <Admin path={`${routes[2]}`}/>
      <Users path={`/`}/>
    </Router>
  )
}

export const routes = [
  "request",
  "users",
  "admin"
]
