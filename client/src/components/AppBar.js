import React from "react"
import {Box} from "grommet"

export default (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    // background='light-2'
    pad={{vertical: "small", horizontal: "medium"}}
    elevation='medium'
    {...props}
    full
  />
);


