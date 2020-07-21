import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import { Jumbotron,Button } from 'react-bootstrap'


const Portfolio = () => {
    return (
        <div>         
            <Nav fill variant="tabs" defaultActiveKey="/portfolio">
                <Nav.Item>
                    <Nav.Link href="/" eventKey="link-1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/contact' eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            <Jumbotron>
                <div className="contentDiv">
                <h1>Services</h1>
                    Don't have a clue what you need at your site?
                    Give us a call and our team of professionals will guide you in the right direction. We will work with you through the whole process:
                        <ul className='servicesList'>
                            <li>• Survey • Logo design • Sign design •</li> 
                            <li>• Maintenance • Permitting* •</li>
                            <li>• Construction • Installation •</li>
                        </ul>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="danger" id="dropdown-basic">
                        Services
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Banners</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Boat Letters</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Channel Letters</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Electronic Message Signs</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Flag Poles</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Monument</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Multiple Tenant Signs</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Plaques</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Pole Signs</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Pylon Signs</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
export default Portfolio