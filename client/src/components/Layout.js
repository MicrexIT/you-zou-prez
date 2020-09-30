import React from "react"
import {Box, Grommet, grommet, Heading, Text} from "grommet"
import {Link} from "@reach/router"
import AppBar from "./AppBar"

/**
 * Format the pages
 * @param pages
 * @param children
 * @returns {JSX.Element}
 */
export default ({pages, children}) => {
  return (
    <Grommet theme={grommet} full>
      <AppBar>
        <Heading level='3' margin='none'>You Zou <Text margin="xsmall">🧳</Text></Heading>
        <div>{pages && pages.length && pages.map(
          page => <Link key={page} to={`/${page}`}> <Text style={{'textTransform': 'capitalize'}} margin="xsmall" >{page}</Text></Link>
        )}</div>
      </AppBar>
      <Box direction='row' flex overflow={{horizontal: "hidden"}}>
        <Box flex align='center' justify='center'>
          {children}
        </Box>
      </Box>
    </Grommet>
  )
}
