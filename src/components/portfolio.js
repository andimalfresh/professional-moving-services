import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
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

  function ModalForBanner (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Banners
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/banners/img1.jpg')} />
            <img src={require('./img/banners/img2.jpg')} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForBoatLetter (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Boat Lettering
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <p><span className="blurb">Flordia Law concerning Registration Decal and Numbers: Your decal must be renewed annually and must be displayed within Six Inches of your registraion numbers on the port side.</span>
              <ul>Registration numbers have the following requirements:
                  <li>Minimum 3 inches tall</li>  
                  <li>Block Letters</li>  
                  <li>Displayed on both sides of vessel</li>  
                  <li>Stand out from boat color</li>  
                  <li>Letters must be seperated from the numbers by a hyphen or equivelent space</li>  
                  <li>Permanent Materials must be used, such as Vinyl decals or Paint</li>  
              </ul>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForChannelLetter (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Banners
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/channel/img1.jpg')} />
            <img src={require('./img/channel/img2.jpg')} />
            <img src={require('./img/channel/img3.jpg')} />
            <img src={require('./img/channel/img4.jpg')} />
            <img src={require('./img/channel/img5.jpg')} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Portfolio = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [bannerShow, setBannerShow] = React.useState(false);
    const [boatLetterShow, setBoatLetterShow] = React.useState(false);
    const [channelLettersShow, setChannelLettersShow] = React.useState(false);

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
                        Services&nbsp; 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setBannerShow(true)}>Banners</Dropdown.Item>
                        <ModalForBanner show={bannerShow}onHide={() => setBannerShow(false)}/>
                        <Dropdown.Item onClick={() => setBoatLetterShow(true)}>Boat Letters</Dropdown.Item>
                        <ModalForBoatLetter show={boatLetterShow}onHide={() => setBoatLetterShow(false)}/>
                        <Dropdown.Item onClick={() => setChannelLettersShow(true)}>Channel Letters</Dropdown.Item>
                        <ModalForChannelLetter show={channelLettersShow}onHide={() => setChannelLettersShow(false)}/>
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
export default Portfolio