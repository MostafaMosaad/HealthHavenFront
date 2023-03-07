import {  useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { BiShow } from "react-icons/bi";
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Allpatient.css'

const AllPatient = () => {
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("userToken"));

  const [data, setData] = useState();
  const API_URL = "http://localhost:3000/api/users/";
  const [deletedoc,SetDelete]=useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data);
    };
    fetchData();
  }, [token]);

  const usersArr = data;

  if (!usersArr) return <div>Loading...</div>;

  const patients = usersArr.data.users;

  return (
    <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      <Container className="my-5">
      <div className="admin-link-box ">
            <Button as={Link} to={"/admin"} variant="success" className="admin-link">
                    Home
                </Button>
                <Button as={Link} to={"/alldoctors"} variant="success" className="admin-link">
                    Doctors
                </Button>
                <Button as={Link} to={"/allpatients"} variant="success" className="admin-link">
                    Patients
                </Button>
            </div>
        <h1 className="admin-title mb-5 mt-2">All Patients ({patients.length})</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {patients?.map((patient) => (
            <Col key={patient._id}>
              <Card className="h-100 patient-card">
                <Card.Body>
                  <Card.Title>{patient.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{patient.email}</Card.Subtitle>
                  <Card.Text>
                    <div className="mt-4 mb-2 "><strong>ID:</strong> {patient._id}</div>
                    <div className="mb-2"><strong>Phone:</strong> {patient.phone}</div>
                    <div className="mb-2"><strong>Birth Of Date:</strong> {patient.DateOfBirth}</div>
                    <div className="mb-2"><strong>Missing Booking:</strong> {patient.missingBooking ? "Yes" : "No"}</div>
                  </Card.Text>
                  <div className="card-buttons ">
                    <Button
                      variant="success"
                      className="d-block w-75 mb-2 m-auto"
                      onClick={() => {
                        navigate(`/MidicalHistory/${patient._id}`);
                      }}
                    >
                      <BiShow /> History
                    </Button>
                    <Button
                      variant="success"
                      className="d-block w-75 mb-2 m-auto"
                      onClick={() => {
                        navigate(`/updatepatirntbyadmin/${patient._id}`);
                      }}
                    >
                      <RxUpdate /> Update
                    </Button>
                    <Button
                      variant="danger"
                      className="d-block w-75 m-auto"
                      onClick={() => {
                        axios.delete(`http://localhost:3000/api/users/${patient._id}`, {
                          headers: { Authorization: `Bearer ${token}` },
                        });
                        for(let d=0;d<patients.length;d++)
                        {
                          if(patient._id===patients[d]._id)
                          {

                            SetDelete(patients.splice(d,1))
                          }
                        }
                      }}
                    >
                      <FaTrash /> Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllPatient;