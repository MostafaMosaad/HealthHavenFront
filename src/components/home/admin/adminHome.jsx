import { Link } from "react-router-dom";
import { Card,Container, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [numDoctors, setNumDoctors] = useState(0);
    const [numUsers, setNumUsers] = useState(0);
    const [numVerifiedDoctors, setNumVerifiedDoctors] = useState(0);
    const [numNotVerifiedDoctors, setNumNotVerifiedDoctors] = useState(0);
    const [token] = useState(localStorage.getItem("userToken"));
    const API_URL = "http://localhost:3000/api";

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await axios.get(`${API_URL}/users/`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setNumUsers(result.data.results);
        };

        const fetchDoctors = async () => {
            const result = await axios.get(`${API_URL}/doctors/admindoc/`, { 
                headers: { Authorization: `Bearer ${token}` },
            });
            setNumDoctors(result.data.results);
            setNumVerifiedDoctors(result.data.data.doctors.filter((doc) => doc.isVerifired).length);
            setNumNotVerifiedDoctors(result.data.data.doctors.filter((doc) => !doc.isVerifired).length );
        };

        fetchUsers();
        fetchDoctors();
    }, [token]);

    const verifiedDoctorsPercent = (numVerifiedDoctors / numDoctors) * 100;
    const unverifiedDoctorsPercent = (numNotVerifiedDoctors / numDoctors) * 100;

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

    <div className="admin-container">
        <Container>
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
            <div className="admin-title-box">
                <h1 className="admin-title mb-5 mt-2">Admin Dashboard</h1>
            </div>
            <div className="admin-card-box">
                <Row>
                    <Col>
                        <Card className="admin-card mb-4 mt-2">
                            <Card.Body>
                                <Card.Title>Total number of Doctors</Card.Title>
                                <Card.Text>{numDoctors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className="admin-card mb-4 mt-2">
                            <Card.Body>
                                <Card.Title>Total number of Patients</Card.Title>
                                <Card.Text>{numUsers}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card className="admin-card mt-2">
                            <Card.Body>
                                <Card.Title>Number of verified doctors</Card.Title>
                                <Card.Text>{numVerifiedDoctors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className="admin-card  mt-2">
                            <Card.Body>
                                <Card.Title>Number of not verified doctors</Card.Title>
                                <Card.Text>{numNotVerifiedDoctors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                        <Col>
                            <h3>Verified Doctors vs. Unverified Doctors</h3>
                            <div style={{ width: "50%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
                                <div style={{ width: `${verifiedDoctorsPercent}%`, backgroundColor: "lime", height: "30px" }}></div>
                                <div style={{ width: `${unverifiedDoctorsPercent}%`, backgroundColor: "red", height: "30px" }}></div>
                            </div>
                        </Col>
                    </Row>
            </div>
        </Container>
    </div>
        </>
    );
};

export default Admin;
