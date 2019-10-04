import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/AuthFlow/SignIn';
import SignUp from './components/AuthFlow/SignUp';
import Home from './components/Home';
import SwitchWithSlide from './components/Slider/SwitchWithSlide';

function App() {
  return (
    <Router>
      <SwitchWithSlide>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </SwitchWithSlide>
    </Router>
  );
}

export default App;
