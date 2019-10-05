import React, { Suspense } from 'react'
import './App.scss'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import SwitchWithSlide from './components/Slider/SwitchWithSlide'

import * as ROUTES from './constants/routes'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>{/* ADD SOME LOADER HERE */}</div>}>
        <SwitchWithSlide>
          {Object.keys(ROUTES).map(key => 
            <Route 
              key={key}
              exact={ROUTES[key].exact}
              path={ROUTES[key].path}
              component={ROUTES[key].component} 
            /> 
          )}
        </SwitchWithSlide>
      </Suspense>
    </Router>
  );
}

export default App;
