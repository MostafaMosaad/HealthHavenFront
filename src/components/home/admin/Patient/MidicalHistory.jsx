import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import axios from "axios";
import { getCookie } from '../../../Cookies/cookies';
import { Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Medical = () => {
  const { t } = useTranslation();

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
      
      <h2 className="text-center"> {t("Medical History")}</h2>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {medicalArr.map((medical, index) => (
          <Card key={index} className="m-3">
            <Card.Body>
              <Card.Title ><span style={{color:"red"}}>{t("Medical History Number")} {index + 1} </span></Card.Title>
              <Card.Text > <span style={{color:"red"}}>{t("State")}</span>  {medical.Discriptions}</Card.Text>
              <Card.Text > <span style={{color:"red"}}>{t("Labs")}</span>  {medical.Labs}</Card.Text>
              <Card.Text><span style={{color:"red"}}>{t("prescription drugs")}</span>  {medical.Pharmacies}</Card.Text>
              <Card.Text><span style={{color:"red"}}>{t("Doctor")}</span>  {medical.DocName}</Card.Text>


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
