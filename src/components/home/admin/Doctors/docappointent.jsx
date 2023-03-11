import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Button, Table } from 'react-bootstrap';

const Appointment = () => {
  const { id } = useParams();
  const [dataa, setData] = useState();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  const API_URL = `/doctors/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data);
    };
    fetchData();
  }, [token]);

  const AppointmentARR = dataa;

  if (!AppointmentARR) return <div>Loading......</div>;
  const Appoint = AppointmentARR.data.doctor.appointments;

  let i = 0;

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="header">
        <Link className="btn btn-success m-3" to={"/alldoctors"}>Doctors</Link>
        <Link className="btn btn-success m-3" to={"/allpatients"}>Patients</Link>
      </div>
      <h2 className="text-center mt-3">Appointments List</h2>
      <div className="container mt-4">
        <div className="row">
          {Appoint?.map((M) => (
            <div className="col-md-4" key={M._id}>
              <Card>
                <Card.Header>Patient #{++i}</Card.Header>
                <Card.Body>
                  <Table borderless>
                    <tbody>
                      <tr>
                        <td>Patient Name:</td>
                        <td>{M.user}</td>
                      </tr>
                      <tr>
                        <td>Data OF Reservation:</td>
                        <td>{M.date}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="outline-primary" onClick={handleBackClick}>Back</Button>
      </div>
    </>
  );
};

export default Appointment;