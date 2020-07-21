import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/contact'
import Foot from './components/foot'
import Land from'./components/land'
import Navi from './components/navi'
import Portfolio from './components/portfolio'
import  {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navi />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Land />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
          </Switch>
        </Router>
          <Foot />
      </div>
    );
  }
}

export default App;
