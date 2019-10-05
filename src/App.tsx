import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/AuthFlow/SignIn';
import SignUp from './components/AuthFlow/SignUp';
import Home from './components/Home';
import SwitchWithSlide from './components/Slider/SwitchWithSlide';

import * as ROUTES from './constants/routes'
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <SwitchWithSlide>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </SwitchWithSlide>
    </Router>
  );
}

export default App;
