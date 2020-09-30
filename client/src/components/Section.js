import React from "react"
import {Box} from "grommet"

export default ({children}) => {
  return (
    <Box pad="large" gap="medium" direction="column" height="h-full" justify="center" overflow="auto" wrap="true">
      {children}
    </Box>
  )
}
