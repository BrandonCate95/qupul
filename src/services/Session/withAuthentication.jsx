import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    authUser: null,
}

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {

    state = { ...INITIAL_STATE }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {() => <Component {...this.props} authUser={this.state.authUser} />}      
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;