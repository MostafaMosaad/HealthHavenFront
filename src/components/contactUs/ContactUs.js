import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './cont.css';

export default function ContactUs() {

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };


  const handleEmail = () => {
   
    const subject = 'Contact Us';
    const body = `Name: ${name}%0D%0AMobile: ${mobile}%0D%0AEmail: ${email}%0D%0AComments: ${comments}`;
    window.location.href = `mailto:HealthHavenTeam@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
<>
    <Container>
      <Row style={{paddingTop:"8rem"}}>
      <Col xs={12} md={6}>
          <div className=" card shadow-sm p-4 mt-4 mb-4">
            <h2>Contact Us</h2>
            <Form className='w-75' onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your mobile number" required onChange={(e) => setMobile(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email address" required onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your comments" required onChange={(e) => setComments(e.target.value)} />
              </Form.Group>
            </Form>
            <Button variant="outline-primary mt-3" onClick={handleEmail}>
              Send
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="card shadow-sm p-4 mt-4 mb-4">
            <h2>Call Us</h2>
            <p>Phone: 123-456-7890</p>
            <Button variant="outline-primary" href="tel:123-456-7890">
              Call Now
            </Button>
            <h2 className='mt-4'>Address</h2>
            <p>Beside Cairo University. Dokki. <br/>
            Giza Governorate, Egypt
            </p>
            

            <iframe
              title="map"
              width="100%"
              height="400"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDf0hZB1VECh8KYwvsFHCRRB2ZTqB6F8XU&q=30.0284408,31.201699`}
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
</>
  );
}