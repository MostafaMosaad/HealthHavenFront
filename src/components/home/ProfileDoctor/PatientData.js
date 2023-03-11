import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PatientData() {
  const [token] = useState(localStorage.getItem("userToken"));
  const [medicalData, setMedicalData] = useState("");
  const nav = useNavigate();
  const API_URL = "/doctors/getMe";
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data.data.doctor);
      console.log(result.data.data.doctor)
    };
    fetchData();
  }, [token]);

  if (!data) {
    return <div>Loading user details...</div>;
  }
  const userHistory = data.appointments;
  return (
    <>
      {[...Array(12)].map((_, index) => (
        <br key={index} />
      ))}
      {userHistory?.map((doctor) => (
        <div className="card " style={{ width: " 27rem" }}>
          <img
            src={process.env.PUBLIC_URL + "/Imges/patient.jpg"}
            className="card-img-top"
            style={{ filter: "brightness(80%)" }}
          />
          <div className="card-body" key={doctor.id}>
            <h5 className="card-title m-3">{doctor.user}</h5>

       <Table striped bordered hover  responsive >
      <thead>
        <tr>
          <th>#</th>
          <th>State</th>
          <th>Labs</th>
          <th>Pharamacy</th>
        </tr>
      </thead>
            {doctor.medical?.map((z, index) => {
              return z?.map((x, index) => {
                return ( <tbody>
                      <td>{++index}</td>
          
                      <td>{x.Discriptions}</td>
                  
                      <td>{x.Labs}</td>
                 
                      <td>{x.Pharmacies}</td>
                  </tbody>
                 
                 );
                });
              })}
              </Table>
            <div className="card-title ">
              {" "}
              <span style={{ color: "red"}}>Reservation Time : </span>{" "}
              {doctor.time}
            </div>
            <Button
              onClick={() => {
                nav(`/updatehistorybydoc/${doctor.id}`);
              }}
            >
              Update History
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
export default PatientData;

