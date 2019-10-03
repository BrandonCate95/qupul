import React from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app'
import firebaseConfig from './config/firebase.config'

import 'firebase/analytics'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
