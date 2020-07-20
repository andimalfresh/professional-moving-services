import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/contact'
import Foot from './components/foot'
import Land from'./components/land'
import Nav from './components/nav'
import Portfolio from './components/portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <Land />
          <Contact />
          <Portfolio />
          <Foot />
      </div>
    );
  }
}

export default App;
