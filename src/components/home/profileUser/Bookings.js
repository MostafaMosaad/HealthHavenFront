import axios from "axios";
import React, { useEffect, useState } from "react";
import StarRating from "./../../Rating/RatingStar";
import { Button } from "react-bootstrap";
function Bookings() {
  const API_URL = "/users/getMe";
  const [token] = useState(localStorage.getItem("userToken"));

  const [data, setData] = useState({});
  const [cancel, cancelBook] = useState({});

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
      {userBookings?.map((doctorData) => (
        <div
          className="card "
          style={{ width: " 18rem", marginTop: "6rem", marginLeft: "1rem" }}
          key={doctorData.doctorName}
        >
          <img
            className="card-img-top"
           src="/Imges/appoint.png"
            style={{ filter: "brightness(80%)" }}

          />
          <div className="card-body">
            <h4 className="card-title">{doctorData.doctorName}</h4>
            <div>
              <span className="card-title "> </span> {doctorData.doctorMajor}
            </div>
            <div>
              <span className="card-title "> </span> {doctorData.doctorCategory}
            </div>
            <div>
              <span className="card-title "> </span> {doctorData.doctorAddress}
            </div>
            <div>
              <span className="card-title "> </span> {doctorData.doctorPhone}
            </div>
            <div>
              <span className="card-title " style={{ color: "red" }}>
                {" "}
                Reservation Time :
              </span>{" "}
              {doctorData.time}
            </div>

            <StarRating DoctorsId={doctorData.id}></StarRating>
            <Button
              onClick={() => {
                const Cancel = async () => {
                  await axios.patch(
                    "/users/cancel",
                    {
                      doctor: doctorData.id,
                    },
                    {
                      headers: { Authorization: `Bearer ${token}` },
                    }
                  );
                };

                Cancel();
                for (let d = 0; d < userBookings.length; d++) {
                  if (doctorData.id === userBookings[d].id) {
                    cancelBook(userBookings.splice(d, 1));
                  }
                }
              }}
            >
              {" "}
              Cancel Book
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Bookings;
