import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

function Medical() {
  const [token] = useState(localStorage.getItem("userToken"));
  const API_URL = "/users/getMe";
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data.data.user);
    };
    fetchData();
  }, [token]);

  const userHistory = data.medicalHistory || [];

  return (
    <Row className="mt-5 mx-1 justify-content-center">
      {userHistory?.map((history) => (
        <Col xs={12} md={6} lg={4} key={history._id} className="mb-3 mt-5">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/Imges/history.png"}
              style={{ filter: "brightness(80%)", height: "20rem" }}
            />
            <Card.Body>
              <table className="w-100">
                <tbody>
                  <tr className="border-bottom">
                    <td className="text-left pr-3">State:</td>
                    <td className="text-right pr-9">{history.Discriptions}</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="text-left pr-3">Labs:</td>
                    <td className="text-right pr-9">{history.Labs}</td>
                  </tr>
                  <tr>
                    <td className="text-left pr-3">Pharmacies:</td>
                    <td className="text-right pr-9">{history.Pharmacies}</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Medical;