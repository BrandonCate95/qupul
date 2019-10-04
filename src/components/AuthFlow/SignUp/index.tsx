import React from 'react';

import { Button, TextField, Container, Box, Paper, Typography } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import * as ROUTES from '../../../constants/routes'
import { withFirebase } from '../../../services/Firebase';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  }

function SignUp(props) {

  const [values, setValues] = React.useState(INITIAL_STATE);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();

    const { username, email, passwordOne } = values;
    props.firebase
      .doCreateUserWithEmailAndPassword(username, email, passwordOne)
      .then(() => {
        setValues({ ...INITIAL_STATE });
        props.history.push(ROUTES.HOME.path);
      })
      .catch(error => {
        setValues({ ...values, error });
      });
  };

  const isInvalid =
      values.passwordOne !== values.passwordTwo ||
      values.passwordOne === '' ||
      values.email === '' ||
      values.username === '';

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

                <TextField id="username" label="Username" margin="normal"
                  color="primary"
                  value={values.username}
                  onChange={handleChange('username')}
                />

                <TextField id="email" label="Email" margin="normal"
                  color="primary"
                  value={values.email}
                  onChange={handleChange('email')}
                />

                <TextField id="passwordOne" label="Password" margin="normal"
                  color="primary"
                  value={values.passwordOne}
                  onChange={handleChange('passwordOne')}
                />

                <TextField id="passwordTwo" label="Same Password" margin="normal"
                  color="primary"
                  value={values.passwordTwo}
                  onChange={handleChange('passwordTwo')}
                />

                {values.error && 
                  <Typography variant="body1" color="error">{values.error.message}</Typography>
                }

                <Button
                  to={ROUTES.SIGNIN.path}
                  component={Link}
                  p={3}
                  m={3}
                >
                  Already have an account?
                </Button>

                <Button type="submit" variant="contained" color="primary"
                  disabled={isInvalid}
                >
                  sign up
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
)(SignUp);
