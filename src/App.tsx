import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/AuthFlow/SignIn';
import SignUp from './components/AuthFlow/SignUp';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
