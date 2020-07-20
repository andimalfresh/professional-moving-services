import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import MapComponent from './mapcomponent'

const Land = () => {
    return (
        <div>
            <h2>Family Owned and Operated since 1969</h2>
            <p>
                Three Important Qualities to Look for in Your Sign Partner:
            </p>
            <p>
                Quality:
                Cheap Signs can ruin your company's image;
                Quality Signs will create or maintain a positive image
            </p>
            <p>Experience
                Make an informed decision when buying your sign;
                40 Years of experience means we know how to help
            </p>
            <p>Dependability
                Our signs are backed with industry leading warranties
                Get a great sign and peace of mind!
                How much do you spend per month on advertisement with meager results?
            </p>

            <ul>Get the most for your budget. Call us about:

                <li>Daily Traffic</li>
                <li>Best Type of Sign</li>
                <li>Effective Sign Design</li>
                <li>All Tailored for Your Specific Location</li>
            </ul>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card> 
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13759.565654649115!2d-84.372066!3d30.43918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbee05e2b1418f560!2sBill&#39;s%20Signs%20%26%20Services%20Inc!5e0!3m2!1sen!2sus!4v1595200673085!5m2!1sen!2sus" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                <MapComponent />
                <ul>
                    <li>Bills Signs</li>
                    <li>5765 Mandy Lane Tallahassee, Florida</li>
                    <li>850-576-6847</li>
                    <li> info@billssigns.com</li>
                </ul>
        </div>
        
    )
} 
export default Land