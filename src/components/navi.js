import React from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'

const Navi = () => {
    return (
        <>
        <div className="mobileNav">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">
            <img
                    alt=""
                    src={require("./img/LogoBad.jpg")}
                    width="50"
                    height="30"
                    className="d-inline-block align-top"
                />
                <span className="smallTitle">Bills Signs</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        <div className="largeNav">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src={require("./img/LogoBad.jpg")}
                    width="50"
                    height="30"
                    className="d-inline-block align-top"
                /> <span className="smallTitle"> Serving Tallahassee since 1969</span>
                </Navbar.Brand>
            </Navbar>
        </div>
        </>
    )
} 
export default Navi