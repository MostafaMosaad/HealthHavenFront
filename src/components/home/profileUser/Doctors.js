import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AvergeRating from "../../Rating/AvarageRating";
import './Doc.css'

function Doctors() {
  const API_URL2 = "/doctors";
  const [dataa, setDataDoctor] = useState();
  const [bookingStatus, setBookingStatus] = useState(false);
  const [token] = useState(localStorage.getItem("userToken"));
  const [filter, setfilter] = useState([]);
  const [category, setMajor] = useState("");
  const [bookingTimes, setBookingTimes] = useState({});

  const handleChange2 = (event) => {
    setMajor(event.target.value);
    setfilter(AddFilter(event.target.value));
  };

  const handleSubmit = (event, doctor) => {
    const time = event.target.value;
    console.log(time)
    const availableTimes = bookingTimes[doctor._id] || [];
    console.log(availableTimes)
    if (availableTimes.includes(time)) {
      axios.patch(
        `/users/booking`,
        {
          doctor: doctor._id,
          time: time
        },
        { headers: { Authorization: `Bearer ${token}` } }
      ).then(() => {
        setBookingTimes({
          ...bookingTimes,
          [doctor._id]: availableTimes.filter((t) => t !== time)
          
        });
        console.log(bookingTimes)
      }).catch((error) => {
        alert(error.response.data.message);
      });
    } else {
      alert("This time is not available, please choose another time");
    }
  };

  const AddFilter = (category) => {
    if (category === "All") {
      return doctorarray;
    } else {
      let filteredDoctors = doctorarray.filter(doctor => doctor.category === category);
      return filteredDoctors;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL2);
      setDataDoctor(result.data.data.doctors);
      setfilter(result.data.data.doctors);
      const times = {};
      result.data.data.doctors.forEach((doctor) => {
        times[doctor._id] = [
          "7:00 pm",
          "7:30 pm",
          "8:00 pm",
          "8:30 pm",
          "9:00pm",
          "9:30 pm"
        ];
      });
      setBookingTimes(times);
    };
    fetchData();
  }, [bookingStatus]);

  if (!dataa) {
    return <div>Loading user details...</div>;
  }

  const doctorarray = dataa;

  return (
    <>
      <select
        id="selectOpt2"
        name="Category"
        value={category}
        onChange={handleChange2}
      >
        <option value="" disabled>
          Choose specialty
        </option>
        <option value="All">All</option>
        <option value="Skin">Skin</option>
        <option value="Teeth">Teeth</option>
        <option value="Child">Child</option>
        <option value="Brain and Nerves">Brain and Nerves</option>
        <option value="Bones">Bones</option>
        <option value="Ear, Nose and Throat">Ear, Nose and Throat</option>
        <option value="Heart">Heart</option>
        <option value="Nutritionist">Nutritionist</option>
      </select>

      {filter.map((doctor) => (
        <div className="card m-5" style={{ width: " 18rem"}}>
          <img
            src={process.env.PUBLIC_URL + "/Imges/DoctorCard.png"}
            className="card-img-top"
            style={{ filter: "brightness(80%)" }}
          />
          <div className="card-body">
            <h5 className="card-title">{doctor.name}</h5>
            <p className="card-text">{doctor.category}</p>
            <p className="card-text">{doctor.phone}</p>
            <p className="card-text">{doctor.address}</p>
            <AvergeRating DoctorsId={doctor._id}></AvergeRating>
            <h6 className="card-subtitle mb-2 text-muted">Available Times:</h6>
            <div>
              {bookingTimes[doctor._id] &&
                bookingTimes[doctor._id].map((time) => (
                  <Button
                    variant="primary"
                    value={time}
                    onClick={(event) => handleSubmit(event, doctor)}
                    className="m-1"
                  >
                    {time}
                  </Button>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Doctors;


