import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function Doctors() {
  const API_URL2 = "http://localhost:3000/api/doctors";
  const [dataa, setDataDoctor] = useState();
  const [bookingStatus, setBookingStatus] = useState(false);
  const [token] = useState(localStorage.getItem("userToken"));
  const [filter, setfilter] = useState([]);
  const [category, setMajor] = useState("");
  const handleChange2 = (event) => {
    setMajor(event.target.value);
    setfilter(AddFilter(event.target.value));
  };
  const AddFilter = (category) => {
    let filteredDoctors = doctorarray.filter(
      (doctor) => doctor.category === category
    );
    return filteredDoctors;
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL2);
      setDataDoctor(result.data.data.doctors);
      setfilter(result.data.data.doctors);
    };
    fetchData();
  }, [bookingStatus]);

  if (!dataa) {
    return <div>Loading user details...</div>;
  }
  const doctorarray = dataa;
  return (
    <>
    {/* <div  style={{marginTop:"-10rem"}} className="text-end"> */}
        <select 
        // className="text-end"
          id="selectOpt"
          name="Category"
          value={category}
          onChange={handleChange2}
         
        >
          <option value="" disabled>
            Choose specialty
          </option>
          <option value="Skin">Skin</option>
          <option value="Teeth">Teeth</option>
          <option value="Child">Child</option>
          <option value="Brain and Nerves">Brain and Nerves</option>
          <option value="Bones">Bones</option>
          <option value="Ear, Nose and Throat">Ear, Nose and Throat</option>
          <option value="Heart">Heart</option>
          <option value="Nutritionist">Nutritionist</option>
        </select>
        {/* </div> */}
     
      {filter.map((doctor) => (
        <div className="card m-3" style={{ width: " 18rem" }}>
          <img
            src={process.env.PUBLIC_URL + "/Imges/DoctorCard.png"}
            className="card-img-top"
            style={{ filter: "brightness(80%)" }}
          />
          <div className="card-body">
            <h4 className="card-title">{doctor.name}</h4>
            <h5 className="card-title ">
              <span style={{ color: "red" }}>Major </span> {doctor.major}
            </h5>
            <h6 className="card-title ">
              {" "}
              <span style={{ color: "red" }}>Categroy </span> {doctor.category}
            </h6>
            <h6 className="card-title ">
              <span style={{ color: "red" }}>Address </span> {doctor.address}
            </h6>
            <h6 className="card-title ">
              {" "}
              <span style={{ color: "red" }}>Mobile </span> {doctor.phone}
            </h6>

            <Button
              onClick={() => {
                {
                  axios.patch(
                    `http://localhost:3000/api/users/booking`,
                    {
                      doctor: doctor._id,
                    },
                    { headers: { Authorization: `Bearer ${token}` } }
                  );
                  setBookingStatus(!bookingStatus);
                }
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
export default Doctors;
