import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Medical() {
  const [token] = useState(localStorage.getItem("userToken"));

  const API_URL = "http://localhost:3000/api/users/getMe";

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
    <>
      {userHistory?.map((doctor) => (
        <div className="card m-3" style={{ width: " 18rem" }}>
        <img
          src={process.env.PUBLIC_URL + "/Imges/history.png"}
          className="card-img-top"
          style={{ filter: "brightness(80%)" }}
        />
        <div className="card-body">
          <h4 className="card-title">{doctor}</h4>
          {/* <h5 className="card-title ">
            <span style={{ color: "red" }}>Major </span> {doctor.major}
          </h5> */}
        </div>
      </div>
      ))}
    </>
  );
}
export default Medical;
