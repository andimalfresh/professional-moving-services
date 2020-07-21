import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Jumbotron,Button } from 'react-bootstrap'

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
            <Jumbotron>
            <div className="contentDiv">
             This is the Contact
            </div>
            </Jumbotron>
            <a href="tel:850-576-6847"><Button variant="danger" className='callButton'>Call Us Today</Button></a>
            <ul className='addressList'>
                    <li>5765 Mandy Lane Tallahassee, Florida</li>
                    <li>850-576-6847</li>
                    <li> info@billssigns.com</li>
                    <li><a href='#'>License Info</a></li>
            </ul>

        </div>
    )
} 
export default Contact