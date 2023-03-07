import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCookie } from '../../../Cookies/cookies';
import { FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { BiShow } from "react-icons/bi";
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Alldoctors.css'

const AllDoc = () => {
  const navigate = useNavigate();
  const [token,SetToken] = useState(localStorage.getItem("userToken"));
  const [deletedoc,SetDelete]=useState()

  const [data, setData] = useState();
  const API_URL = "http://localhost:3000/api/doctors/admindoc";

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

  const docs = usersArr.data.doctors;

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
        <h1 className="admin-title mb-5 mt-2">All Doctors ({docs.length})</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {docs?.map((doc) => (
            <Col key={doc._id}>
              <Card className="h-100 patient-card">
                <Card.Body>
                  <Card.Title>{doc.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{doc.email}</Card.Subtitle>
                  <Card.Text>
                  <div className="mt-4 mb-2 "><strong>Phone:</strong> {doc.phone}</div>
                  <div className="mb-2"><strong>Address:</strong> {doc.address}</div>
                  <div className="mb-2"><strong>Major:</strong> {doc.major}</div>
                  <div className="mb-2"><strong>Category:</strong> {doc.category}</div>
                  <div className="mb-2"><strong>isVerified:</strong> {doc.isVerifired.toString()}</div>

                  </Card.Text>
                  <div className="card-buttons ">
                    <Button
                      variant="success"
                      className="d-block w-75 mb-2 m-auto"
                      onClick={() => {
                        navigate(`/appointment/${doc._id}`);
                      }}
                    >
                      <BiShow /> Appointments
                    </Button>
                    <Button
                      variant="success"
                      className="mx-1 w-75 mb-2 m-auto"
                      onClick={() => {
                        navigate(`/updatedocbyadmin/${doc._id}`);
                      }}
                    >
                      <RxUpdate /> Update
                    </Button>
                    <Button
                      variant="danger"
                      className="w-75 mb-2 m-auto"
                      onClick={() => {
                        axios.delete(`http://localhost:3000/api/doctors/${doc._id}`, {
                          headers: { Authorization: `Bearer ${token}` },
                        });
                        for(let d=0;d<docs.length;d++)
                        {
                          if(doc._id===docs[d]._id)
                          {

                            SetDelete(docs.splice(d,1))
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
    
    export default AllDoc;