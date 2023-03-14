import {  useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import  Alert  from 'react-bootstrap/Alert';

const History_Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("userToken"));
  const [success, setSuccess] = useState();

  const API_URL = `/users/${id}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fetchData = async () => {
      await axios.patch(API_URL,
        {
          medicalHistory:data.get('state').toString(),
          Discriptions: data.get('state').toString(),
          Labs: data.get('labs').toString(),
          Pharmacies:data.get('pharamcy').toString(),
          missedBookings: data.get('missed').toString()

        },
        {
          headers: { Authorization: `Bearer ${token}` }
        },
      );
    };
    fetchData();
    setSuccess("successfully updated ✅ 🙂");
    setTimeout(()=>{
      navigate("/homeDoctor/MyProfile/PatientData")
    },2000)
  };
  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <>
    
    <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Update Patient</h2>
            <Form onSubmit={handleSubmit} border="primary" className="p-3">
              <Form.Group as={Row} className="m-3">
                <Form.Label column sm={5}>Patient State</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" name="state" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="m-3">
                <Form.Label column sm={5}>Labs</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" name="labs" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="m-3">
                <Form.Label column sm={5}>Pharamacies</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" name="pharamcy" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="m-3">
                <Form.Label column sm={5}>Missed Bookings</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" name="missed" />
                </Col>
              </Form.Group>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="outline-success" type="submit" className="mx-2 mx-md-4">Update</Button>
                <Button variant="outline-primary" onClick={handleBackClick} className="mx-2 mx-md-4">Back</Button>
              </div>
            </Form>
      {success && <Alert variant={"success"}>{success}</Alert>}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default History_Update;

