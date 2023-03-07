import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { getCookie } from '../../Cookies/cookies';
import { Container, Form, Button } from 'react-bootstrap';

const Doctor_Update = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [token,SetToken] = useState(localStorage.getItem("userToken"));

  console.log(token)
  const API_URL = `http://localhost:3000/api/doctors/${id}`;

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
  }
  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Container className="mt-5">
      <h2>Update Doctor Verification Status</h2>
      <Form onSubmit={handleSubmit} >
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
