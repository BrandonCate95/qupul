import React from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import SignOut from '../AuthFlow/SignOut'
import { withAuthentication } from '../../services/Session'
import HomeSearch from '../SearchForms/homeSearch'

function Home(props) {
  return(
    <Box display="flex" flexDirection="column" textAlign="center"
        justifyContent="space-evenly" height="100%" p={2}
    >

      <Typography
        variant="h2"
        color="primary"
      >
        QUPUL
      </Typography>

      <HomeSearch />
      
      {!props.authUser &&
        <Box display="flex" flexDirection="column">
          <Button 
            to="/signin" 
            component={Link} 
            variant="contained" 
            color="primary"
          >sign in</Button>

          <Button 
            to="/signin" 
            component={Link} 
            variant="contained" 
            color="primary"
          >sign up</Button>
        </Box>
      }

      {props.authUser &&
        <Box display="flex" flexDirection="column">
          <Button 
            to="/add" 
            component={Link} 
            variant="contained" 
            color="primary"
          >CREATE</Button>

          <SignOut />
        </Box>
      }

    </Box>
  )
}

export default withAuthentication(Home)