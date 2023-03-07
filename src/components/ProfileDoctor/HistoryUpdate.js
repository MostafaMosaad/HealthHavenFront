// import React, { useEffect, useState } from "react";
// import { Card,Button } from "react-bootstrap";
// import { useNavigate} from 'react-router-dom'
// import axios from "axios";
// import { BiShow } from "react-icons/bi";
// import Medical from "../profileUser/MedicalHistory";

// const DocAppointments = () => {
//   const [token, SetToken] = useState(localStorage.getItem("userToken"));
//   const [data, setData] = useState({});
//   const API_URL = "http://localhost:3000/api/doctors/getMe";
//   const navigate = useNavigate();
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get(API_URL, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setData(result.data.data.doctor);
//     };
//     fetchData();
//   }, [token]);
  
//   if (!data) {
//     return <div>Loading user details...</div>;
// }
//   const userAppointments = data.appointments;

//   return (
//     <>
//       {userAppointments?.map((M) => (
//         <Card key={M.date}  style={{ width: '24rem' , backgroundColor:"rgb(238, 242, 242)",borderColor:"#24326c", borderRadius:"20px", marginLeft:"1rem", marginBottom:"1rem"}}>
//           <Card.Body>
//             <Card.Text>{M.user}</Card.Text>
//             {/* <Card.Text>{M.date}</Card.Text> */}
//             <Button
//                       className="d-block w-60 mb-2 m-auto"
//                       onClick={() => { 
//                         navigate('/homeDoctor/myProfile/history')
//                       }}
//                     >
//                       <BiShow /> 
//                       Medical History
//                     </Button>
//           </Card.Body>
//         </Card>
//       ))}
//       {/* {M.user} */}
//     </>
//   );
// };
// export default DocAppointments;


import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const History_Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [token] = useState(localStorage.getItem("userToken"));

  const API_URL = `http://localhost:3000/api/users/${id}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fetchData = async () => {
      await axios.patch(API_URL,
        {
          medicalHistory: data.get('is').toString(),
          missedBookings: data.get('missed').toString()

        },
        {
          headers: { Authorization: `Bearer ${token}` }
        },
      );
    };
    fetchData();
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
            <h2 className="text-center mb-4">Update Patient</h2>
            <Form onSubmit={handleSubmit} border="primary" className="p-3">
              <Form.Group as={Row}>
                <Form.Label column sm={5}>Medical History</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" name="is" />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default History_Update;

