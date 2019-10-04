import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { indigo } from '@material-ui/core/colors'

import Firebase, { FirebaseContext } from './services/Firebase'
import { AuthUserContext } from './services/Session'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
        contrastText: "white"
      }
  },
  overrides: {
    MuiButton: {
      root: {
        margin: 6,
      },
    },
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderRadius: `50px`,
          },
        }
      } 
    }
  },
});

var firebase = new Firebase()

ReactDOM.render(
  <FirebaseContext.Provider value={firebase}>
    <AuthUserContext.Provider value={firebase}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthUserContext.Provider>
  </FirebaseContext.Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
