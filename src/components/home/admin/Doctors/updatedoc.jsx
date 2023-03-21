import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { Container, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
const Swal = require('sweetalert2')

const Doctor_Update = () => {
  const { i18n } = useTranslation();

  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [token,SetToken] = useState(localStorage.getItem("userToken"));

  const API_URL = `/doctors/${id}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fetchData = async () => {
      await axios.patch(API_URL,
        {
          isVerifired: data.get('is').toString(),
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        },
      );
    };
    navigate('/alldoctors')
    fetchData();
    Swal.fire(`${i18n.t("successfullyupdated")}`, "", "success");
  }
  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <>

    <Container  style={{marginTop:"10rem"}}>
      <h2>Update Doctor Verification Status</h2>
      <Form onSubmit={handleSubmit}  style={{marginTop:"5rem"}}>
        <Form.Group>
          <Form.Label>Verification Status</Form.Label>
          <Form.Control type="text" name="is" placeholder="Enter verification status" />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3">Update</Button>
        <div className="d-flex justify-content-center ">
        <Button variant="outline-primary" onClick={handleBackClick}>Back</Button>
      </div>
      </Form>
    </Container>
   
    </>
  )
}

export default Doctor_Update;
