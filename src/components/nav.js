import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'



const Nav = () => {
    return (
        <>
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Bills Signs
    </Navbar.Brand>
  </Navbar>
      </>
    )
} 
export default Nav