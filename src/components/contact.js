import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Jumbotron,Button,Modal } from 'react-bootstrap'

function ModalForLic (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          State Licensed and Insured
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>State License Number: ES12000087</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Contact = () => {
    
    const [modalShow, setModalShow] = React.useState(false);

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
                  <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            <Jumbotron>
            <div className="contentDiv">
             <h1>Contact Us</h1>
             <div className="blurb">We would love to hear from you! Feel free to drop us an email with any questions you may have below.</div>
                <ul><span className="redText">Sales:</span>
                    <li><a variant='blk' href="mailto:bruce@billssigns.com">Bruce Screws</a></li>
                    <li><a href="mailto:wayne@billssigns.com">Wayne Funderburke</a></li>
                    <li><a href="mailto:info@billssigns.com">General Inquiries</a></li>
                </ul>
                <ul><span className="redText">Art Department:</span>
                    <li><a href="mailto:art@billssigns.com">General Inquiries</a></li>
                </ul>    
                <ul><span className="redText">Maintenance:</span>
                    <li><a href="mailto:info@billssigns.com">Maintenance</a></li>
                </ul>
            </div>
            </Jumbotron>
            <a href="tel:850-576-6847"><Button variant="danger">Call Us Today</Button></a>
            <ul className='addressList'>
                    <li>5765 Mandy Lane Tallahassee, Florida</li>
                    <li>850-576-6847</li>
                    <li> info@billssigns.com</li>
                    <li className='lisenceModal' onClick={() => setModalShow(true)}>License Info</li>
                    <ModalForLic  show={modalShow}onHide={() => setModalShow(false)}/>
            </ul>

        </div>
    )
} 
export default Contact