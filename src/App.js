import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import './App.css';
import LandingPages from './pages/landingPages/landingPages.jsx'
import Index from './pages/contents/index.jsx'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/start" component={Index}/>
          <Route path="/" exact component={LandingPages}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
