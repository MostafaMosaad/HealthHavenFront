import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
function Bookings() {
  const API_URL = "http://localhost:3000/api/users/getMe";
  const [token] = useState(localStorage.getItem("userToken"));

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
  const userBookings = data.bookings || [];
  return (
    <>
      {userBookings?.map((doctor) => (
        <div
          className="card m-3"
          style={{ width: " 18rem" }}
          key={doctor.doctorName}
        >
          <img
            src={process.env.PUBLIC_URL + "/Imges/appoint.png"}
            className="card-img-top"
            style={{ filter: "brightness(80%)" }}
          />
          <div className="card-body">
            <h4 className="card-title">{doctor.doctorName}</h4>
            <h5 className="card-title ">
              <span style={{ color: "red" }}>Major </span> {doctor.doctorMajor}
            </h5>
            <h6 className="card-title ">
              {" "}
              <span style={{ color: "red" }}>Categroy </span> {doctor.doctorCategory}
            </h6>
            <h6 className="card-title ">
              <span style={{ color: "red" }}>Address </span> {doctor.doctorAddress}
            </h6>
            <h6 className="card-title ">
              {" "}
              <span style={{ color: "red" }}>Mobile </span> {doctor.doctorPhone}
            </h6>
          </div>
        </div>
      ))}
    </>
  );
}

export default Bookings;
