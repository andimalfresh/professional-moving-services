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
      <Modal.Body className="modalDiv">
        <p>The City of Tallahassee now requires sign companies to have a state license. If they don't, they cannot pull a permit!</p>
        <p>We were the First Sign Company in Tallahassee to obtain a <span className="experpt">State License ES12000087</span>.</p> 
        <p> We qualified on 4/26/2002, which was well before the City of Tallahassee required sign contractors to obtain a state license.
            Don't be duped by other Sign Companies who aren't properly qualified.</p>
            <img id="logoImgModal" src={require('./img/billsLogo.png')} alt='logo' />    
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

  function ModalForMessage (props) {
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

  function ModalForFlag (props) {
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

  function ModalForMonmument (props) {
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

  function ModalForTenant (props) {
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

  function ModalForPlaque (props) {
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

  function ModalForPole (props) {
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

  function ModalForPylon (props) {
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

  function ModalForVehicle (props) {
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

  function ModalForVinyl (props) {
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

  function ModalForWall (props) {
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

const Services = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [bannerShow, setBannerShow] = React.useState(false);
    const [boatLetterShow, setBoatLetterShow] = React.useState(false);
    const [channelLettersShow, setChannelLettersShow] = React.useState(false);
    const [messageShow, setMessageShow] = React.useState(false);
    const [flagShow, setFlagShow] = React.useState(false);
    const [monmumentShow, setMonmumentShow] = React.useState(false);
    const [tenantShow, setTenantShow] = React.useState(false);
    const [plaqueShow, setPlaqueShow] = React.useState(false);
    const [poleShow, setPoleShow] = React.useState(false);
    const [pylonShow, setPylonShow] = React.useState(false);
    const [vehicleShow, setVehicleShow] = React.useState(false);
    const [vinylShow, setVinylShow] = React.useState(false);
    const [wallShow, setWallShow] = React.useState(false);

    return (
        <div> 
            <Nav fill variant="tabs" defaultActiveKey="/services">
                <Nav.Item>
                    <Nav.Link href="/" eventKey="link-1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/services">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/contact' eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            <Jumbotron>
                <div className="contentDiv">
                <img className="logoImg" src={require('./img/billsLogo.png')} alt='logo' />
                <h1>Services</h1>
                    Don't have a clue what you need at your site?
                    Give us a call and our team of professionals will guide you in the right direction. We will work with you through the whole process:
                        <ul className='servicesList'>
                            <li>• Consulting • Survey • </li> 
                            <li>• Design • Permitting  •</li>
                            <li>• Manufacture and Construction •</li>
                            <li>• Installation • Service and Maintenance  •</li>
                            <li>• Warranty •</li>
                        </ul>
                </div>
                <span className='exerpt'>Use the services button below to check out what we can make for your business.</span>
                <Dropdown className="buttonPadding">
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
                        <Dropdown.Item onClick={() => setMessageShow(true)}>Electronic Message Signs</Dropdown.Item>
                        <ModalForMessage show={messageShow}onHide={() => setMessageShow(false)}/>
                        <Dropdown.Item onClick={() => setFlagShow(true)}>Flag Poles</Dropdown.Item>
                        <ModalForFlag show={flagShow}onHide={() => setFlagShow(false)}/>
                        <Dropdown.Item onClick={() => setMonmumentShow(true)}>Monument</Dropdown.Item>
                        <ModalForMonmument show={monmumentShow}onHide={() => setMonmumentShow(false)}/>
                        <Dropdown.Item onClick={() => setTenantShow(true)}>Multiple Tenant Signs</Dropdown.Item>
                        <ModalForTenant show={tenantShow}onHide={() => setTenantShow(false)}/>
                        <Dropdown.Item onClick={() => setPlaqueShow(true)}>Plaques</Dropdown.Item>
                        <ModalForPlaque show={plaqueShow}onHide={() => setPlaqueShow(false)}/>
                        <Dropdown.Item onClick={() => setPoleShow(true)}>Pole Signs</Dropdown.Item>
                        <ModalForPole show={poleShow}onHide={() => setPoleShow(false)}/>
                        <Dropdown.Item onClick={() => setPylonShow(true)}>Pylon Signs</Dropdown.Item>
                        <ModalForPylon show={pylonShow}onHide={() => setPylonShow(false)}/>
                        <Dropdown.Item onClick={() => setVehicleShow(true)}>Fleet/Vehicle Signs</Dropdown.Item>
                        <ModalForVehicle show={vehicleShow}onHide={() => setVehicleShow(false)}/>
                        <Dropdown.Item onClick={() => setVinylShow(true)}>Vinyl Lettering</Dropdown.Item>
                        <ModalForVinyl show={vinylShow}onHide={() => setVinylShow(false)}/>
                        <Dropdown.Item onClick={() => setWallShow(true)}>Wall Signs</Dropdown.Item>
                        <ModalForWall show={wallShow}onHide={() => setWallShow(false)}/>
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
export default Services