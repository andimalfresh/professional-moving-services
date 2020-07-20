import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/contact'
import Foot from './components/foot'
import Land from'./components/land'
import Nav from './components/nav'
import Work from './components/work'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          {/* <Contact />
          <Work /> */}
          <Land />
          <Foot />
      </div>
    );
  }
}

export default App;
