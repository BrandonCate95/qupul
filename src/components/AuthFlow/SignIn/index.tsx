import React from 'react';

import { Button, TextField, Container, Box, Paper, Typography } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import * as ROUTES from '../../../constants/routes'
import { withFirebase } from '../../../services/Firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

function SignIn(props) {

  const [values, setValues] = React.useState(INITIAL_STATE);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();

    const { email, password } = values;
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setValues({ ...INITIAL_STATE });
        props.history.push(ROUTES.HOME.path);
      })
      .catch(error => {
        setValues({ ...values, error });
      });
  };

  const isInvalid = values.password === '' || values.email === '';

  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="xs">
          <Paper>
            <form
              onSubmit={onSubmit}
            >
              <Box display="flex" flexDirection="column" p={3}>

                <Typography variant="h2">
                  QUPUL
                </Typography>

                <TextField id="email" label="Email" margin="normal"
                  color="primary"
                  value={values.email}
                  onChange={handleChange('email')}
                />

                <TextField id="password" label="Password" margin="normal"
                  color="primary"
                  value={values.password}
                  onChange={handleChange('password')}
                />

                {values.error && 
                  <Typography variant="body1" color="error">{values.error.message}</Typography>
                }

                <Button
                  to={ROUTES.SIGNUP.path}
                  component={Link}
                >
                  Dont have an account?
                </Button>

                <Button type="submit" variant="contained" color="primary"
                  disabled={isInvalid}
                >
                  sign in
                </Button>
                
              </Box>
            </form>
          </Paper>
        </Container>
      </header>
    </div>
  );
}

export default compose(
  withRouter,
  withFirebase
)(SignIn);
