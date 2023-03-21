import axios from "axios";
import React, { useEffect, useState,useCallback } from "react";
import { Button } from "react-bootstrap";
import AvergeRating from "../../Rating/AvarageRating";
import "./Doc.css";
import { useTranslation } from 'react-i18next';

const Swal = require('sweetalert2')
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate() ;

let day = today.getDate() + 7;


if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const formattedToday2 = yyyy + "-" + mm + "-" + dd 
const formattedTodayMax = yyyy + "-" + mm + "-" + day 
function Doctors() {
  const { i18n } = useTranslation();

  const API_URL2 = "/doctors";
  const [dataa, setDataDoctor] = useState();
  const [bookingStatus, setBookingStatus] = useState(false);
  const [token] = useState(localStorage.getItem("userToken"));
  const [filter, setfilter] = useState([]);
  const [category, setMajor] = useState("");
  const [bookingTimes, setBookingTimes] = useState({});
  const [Datee, SetDatte] = useState(formattedToday2);

  const handleChange2 = (event) => {
    setMajor(event.target.value);
    setfilter(AddFilter(event.target.value));
  };
  const handleChange = useCallback((e) => {
    const { value, name } = e.target;
    SetDatte(() => (e.target.value));
  },  []);

  const handleSubmit = (event, doctor) => {
    const time = event.target.value;
    const availableTimes = bookingTimes[doctor._id] || [];
    Swal.fire({
      title: "Confirm Book?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (availableTimes.includes(time)) {
          axios
            .patch(
              `/users/booking`,
              {
                doctor: doctor._id,
                time: time,
                date:Datee

              },
              { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(() => {
              setBookingTimes({
                ...bookingTimes,
                [doctor._id]: availableTimes.filter((t) => t !== time),
              });
            })
            .catch((error) => {
              alert(error.response.data.message);
            });
        } else {
          alert("This time is not available, please choose another time");
        }
        Swal.fire("Done!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cancel", "", "");
      }
    });
  };

  const AddFilter = (category) => {
    if (category === "All") {
      return doctorarray;
    } else {
      let filteredDoctors = doctorarray.filter(
        (doctor) => doctor.category === category
      );
      return filteredDoctors;
    }
  };

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get(API_URL2);
      setDataDoctor(result.data.data.doctors);
      setfilter(result.data.data.doctors);
      const times = {};
      result.data.data.doctors.forEach((doctor) => {

        times[doctor._id] = [
          `${i18n.t("7:00 pm")}`,
          `${i18n.t("7:30 pm")}`,
          `${i18n.t("8:00 pm")}`,
          `${i18n.t("8:30 pm")}`,
          `${i18n.t("9:00 pm")}`,
          `${i18n.t("9:30 pm")}`,
       
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
          {i18n.t("Choose specialty")}
        </option>
        <option value="All">{i18n.t("All")}</option>
          <option value="Skin">{i18n.t("Skin")}</option>
          <option value="Teeth">{i18n.t("Teeth")}</option>
          <option value="Child">{i18n.t("Child")}</option>
          <option value="Brain and Nerves">{i18n.t("Brain and Nerves")}</option>
          <option value="Bones">{i18n.t("Bones")}</option>
          <option value="Ear, Nose and Throat">{i18n.t("Ear, Nose and Throat")}</option>
          <option value="Heart">{i18n.t("Heart")}</option>
          <option value="Nutritionist">{i18n.t("Nutritionist")}</option>
      </select>

      {filter.map((doctor) => (
        <div className="card m-5" style={{ width: " 18rem" }}>
          <img
            src="/Imges/DoctorCard.png"
            className="card-img-top"
            style={{ filter: "brightness(80%)" }}
          />
          <div className="card-body">
            <h5 className="card-title">{doctor.name}</h5>
            <p className="card-text">{i18n.t(`${doctor.category}`)}</p>
            <p className="card-text">{i18n.t(`${doctor.major}`)}</p>
            <p className="card-text">{doctor.phone}</p>
            <p className="card-text">{doctor.address}</p>
            <AvergeRating DoctorsId={doctor._id}></AvergeRating>
            <h6 className="card-subtitle mb-2 text-muted">{i18n.t("Available Times")}</h6>
            <div>
              {bookingTimes[doctor._id] &&
                bookingTimes[doctor._id].map((time) => (
                  <Button
                    variant="primary"
                    value={time}
                    onClick={(event) => handleSubmit(event, doctor)}
                    className="m-1"
                    id="selectDate"
                  >
                    {time}
                  </Button>
                ))}
            </div>
            <input
            type="date"
            name="date"
            onChange={handleChange}
            min={formattedToday2}
            max={formattedTodayMax}
            defaultValue={formattedToday2}
            style={{borderColor:"#20154f",padding:"0.5rem",borderRadius:"0.3rem",marginTop:"1rem",marginBottom:"1rem",width:"100%"}}
          />
          </div>
        </div>
      ))}
    </>
  );
}

export default Doctors;
