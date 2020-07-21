import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Foot = () => {
    return (
        <div> 
          <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center" >
          <Navbar.Brand href="mailto:info@billssigns.com">
            <img
              // alt="Connect with us via Email"
              src={require("./img/email.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand target="_blank" rel="noopener noreferrer" href="http://facebook.com">
            <img
              // alt="Connect with us on Facebook"
              src={require("./img/facebook.svg")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand target="_blank" rel="noopener noreferrer" href="http://instagram.com">
            <img
              // alt="Connect with us on Instagram"
              src={require("./img/insta.svg")}
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