import React from 'react';

import { withFirebase } from '../../../services/Firebase';
import { Button } from '@material-ui/core';

const SignOutButton = ({ firebase }) => (
  <Button variant="outlined" color="primary" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);