import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Contact = () => {
    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/contact">
                <Nav.Item>
                  <Nav.Link href="/" eventKey="link-2">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/portfolio" eventKey="link-1">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/contact' >Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="contentDiv">
             This is the Contact
            </div>
        </div>
    )
} 
export default Contact