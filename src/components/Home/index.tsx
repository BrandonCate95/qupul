import React from 'react'
import { Box, Button, Typography, TextField } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import SignOut from '../AuthFlow/SignOut'
import { withAuthentication } from '../../services/Session'

import * as ROUTES from '../../constants/routes'

const INITIAL_STATE = {
  search: ''
}

function Home(props) {

  const [values, setValues] = React.useState(INITIAL_STATE);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSearch = event => {
    event.preventDefault()

    props.history.push(ROUTES.SEARCH.path)
  }

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

      <form
        onSubmit={onSearch}
      >
        <TextField id="search" label="Search" margin="normal"
          color="primary" variant="outlined"
          style={{borderRadius: '50px', width: '100%'}}
          value={values.search}
          onChange={handleChange('search')}
        />
      </form>
      
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

export default compose(
  withRouter,
  withAuthentication
)(Home)