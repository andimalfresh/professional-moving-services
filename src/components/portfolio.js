import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

const Portfolio = () => {
    return (
        <div>         
            <Nav fill variant="tabs" defaultActiveKey="/portfolio">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/portfolio" eventKey="link-1">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/contact' eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <div>
                <h2>Services</h2>
                    Don't have a clue what you need at your site?
                    Give us a call and our team of professionals will guide you in the right direction. We will work with you through the whole process:
                        <ul>
                            <li>Survey</li>
                            <li>Logo design</li>
                            <li>Sign design</li>
                            <li>Permitting *</li>
                            <li>Construction</li>
                            <li>Installation</li>
                            <li>Maintenance</li>
                        </ul>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
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
            </div>
        </div>
    )
} 
export default Portfolio