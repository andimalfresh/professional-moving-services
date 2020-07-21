import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Navi = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={require("./img/LogoBad.jpg")}
                width="50"
                height="30"
                className="d-inline-block align-top"
            /> <span className="smallTitle"> Serving Tallahassee Since 1969</span>
            </Navbar.Brand>
        </Navbar>
        </>
    )
} 
export default Navi