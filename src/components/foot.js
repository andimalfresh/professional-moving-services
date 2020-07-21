import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Foot = () => {
    return (
        <div> 
          <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center" >
          <Navbar.Brand href="#home">
            <img
              // alt="Connect with us via Email"
              src={require("./img/logo.svg")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              // alt="Connect with us on Facebook"
              src={require("./img/logo.svg")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              // alt="Connect with us on Instagram"
              src={require("./img/logo.svg")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Navbar>
      </div>
    )
} 
export default Foot