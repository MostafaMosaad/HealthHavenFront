import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import axios from "axios";
import { getCookie } from '../../../Cookies/cookies';
import { Card, Button } from 'react-bootstrap';

const Medical = () => {
  const { id } = useParams();
  const [dataa, setData] = useState();
  const navigate = useNavigate()
  const [token,SetToken] = useState(localStorage.getItem("userToken"));

  const API_URL = `/users/${id}`;
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data);
        console.log(result.data);
    };
    fetchData();
  }, [token]);

  const medicalArr = dataa?.data.user.medicalHistory;

  if (!medicalArr) return <div>Loading...</div>;

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
      
      <h2 className="text-center">Medical History</h2>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {medicalArr.map((medical, index) => (
          <Card key={index} className="m-3">
            <Card.Body>
              <Card.Title>Medical History {index + 1}</Card.Title>
              <Card.Text> Patient's state : {medical.Discriptions}</Card.Text>
              <Card.Text> Labs: {medical.Labs}</Card.Text>
              <Card.Text>Pharamacies : {medical.Pharmacies}</Card.Text>
              <Card.Text>Doctor : {medical.DocName}</Card.Text>


            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="d-flex justify-content-center ">
        <Button variant="outline-primary" onClick={handleBackClick}>Back</Button>
      </div>
    </>
  );
}

export default Medical;
