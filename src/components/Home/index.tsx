import React from 'react'
import { Box, Button, Typography, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SignOut from '../AuthFlow/SignOut'
import { withAuthentication } from '../../services/Session'

const INITIAL_STATE = {
  search: ''
}

function Home(props) {

  const [values, setValues] = React.useState(INITIAL_STATE);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

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

      <TextField id="search" label="Search" margin="normal"
        color="primary" variant="outlined"
        style={{borderRadius: '50px'}}
        value={values.search}
        onChange={handleChange('search')}
      />

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
        <SignOut />
      }

    </Box>
  )
}

export default withAuthentication(Home)