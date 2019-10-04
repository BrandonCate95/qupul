import React from 'react'
import { Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SignOut from '../AuthFlow/SignOut'
import { withAuthentication } from '../../services/Session'

function Home(props) {
    return(
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
            {props.authUser &&
              <SignOut />
            }
        </Box>
    )
}

export default withAuthentication(Home)