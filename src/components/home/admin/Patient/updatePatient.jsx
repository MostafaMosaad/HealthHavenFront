import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Swal = require('sweetalert2');

const Patient_Update = () => {
  const { i18n } = useTranslation();

  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [token] = useState(localStorage.getItem("userToken"));

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
    navigate('/allpatients');
    fetchData();
    Swal.fire(`${i18n.t("successfullyupdated")}`, "", "success");
  };
  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4">{i18n.t('Update Patient')}</h2>
            <Form onSubmit={handleSubmit} border="primary" className="p-3">
              <Form.Group as={Row} className="m-3">
                <Form.Label column sm={5}> {i18n.t('State')}</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" name="state" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="m-3">
                <Form.Label column sm={5}>{i18n.t('Labs')}</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" name="labs" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="m-3">
                <Form.Label column sm={5}>{i18n.t("prescription drugs")}</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" name="pharamcy" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="m-3">
                <Form.Label column sm={5}>{i18n.t("Missed Bookings")}</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" name="missed" />
                </Col>
              </Form.Group>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="outline-success" type="submit" className="mx-2 mx-md-4">{i18n.t('Update')}</Button>
                <Button variant="outline-primary" onClick={handleBackClick} className="mx-2 mx-md-4">{i18n.t('Back')}</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Patient_Update;
