import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './DoctorStyle.css';

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
var houres = today.getHours()
var min = today.getMinutes()
var sec = today.getSeconds();

if (houres < 10) houres = "0" + houres;
if (min < 10) min = "0" + min;

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

let hh = houres;
let ampm = "am"
if (hh > 12) {
  hh = hh % 12;
  ampm = "pm"
}
const formattedToday = yyyy + '-' + mm + '-' + dd; //////hereeeeeee
function PatientData() {
  const { t, i18n } = useTranslation();
  const [token] = useState(localStorage.getItem("userToken"));
  const nav = useNavigate();
  const API_URL = "/doctors/getMe";
  const [data, setData] = useState({});
  const [selectedDate, setDateFilter] = useState(formattedToday);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data.data.doctor);
    };
    fetchData();
  }, [token]);

  if (!data) {
    return <div>Loading user details...</div>;
  }

  const userHistory = data.appointments;
  if (!userHistory) {
    return <div> Loading..</div>
  }

  const filteredAppointments = userHistory.filter((appointment) => {
    const appointmentDate = new Date(appointment.date);
    const diffTime = appointmentDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= -2 && diffDays <= 2;
  });

  return (
    <>
      <div className="d-flex justify-content-evenly  " style={{ marginTop: "13rem" }}>
        <img id="welcomeIMG" src={"/Imges/Welcome Doctor.png"} style={{ paddingBottom: "4rem" }}></img>
        <div>
          <h1 id="WelcomeBack" style={{ maxWidth: "30rem", marginTop: "7rem", color: "rgb(209,71,25)" }}>  {i18n.t("Welcome back")}</h1>
        </div>
      </div>

      {[...Array(12)].map((_, index) => (
  <br key={index} />
))}
<div className="header w-100 " id="filterDiv"> 
  <button className="btn btn-success m-3" onClick={() => setDateFilter("all")}>{i18n.t("All")}</button>
  <button className="btn btn-success m-3" onClick={() => setDateFilter("daybefore")}>{i18n.t("Day Before")}</button>
  <button className="btn btn-success m-3" onClick={() => setDateFilter("yesterday")}>{i18n.t("Yesterday")}</button>
  <button className="btn btn-success m-3" onClick={() => setDateFilter("today")}>{i18n.t("Today")}</button>
  <button className="btn btn-success m-3" onClick={() => setDateFilter("tomorrow")}>{i18n.t("Tomorrow")}</button>
  <button className="btn btn-success m-3" onClick={() => setDateFilter("dayafter")}>{i18n.t("Day After")}</button>
</div>

<div className="d-flex flex-wrap justify-content-center" id="filterDiv2">

  {userHistory?.filter((appointment) => {
    const appointmentDate = new Date(appointment.date);
    const diffTime = appointmentDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    switch (selectedDate) {
      case "daybefore":
        return diffDays === -2;
      case "yesterday":
        return diffDays === -1;
      case "today":
        return diffDays === 0;
      case "tomorrow":
        return diffDays === 1;
      case "dayafter":
        return diffDays === 2;
      default:
        return true;
    }
  }).map((doctor) => (
    <div className="card mx-2 mb-4" style={{ width: " 24rem" }}>
      <img src={"/Imges/patient.jpg"} className="card-img-top" alt="Patient" />
      <div className="card-body">
        <button id="userNameBuuton" onClick={() => {
          nav(`/ViewMedical/${doctor.id}/${doctor.date}`);
        }}>
          <h5 className="card-title m-3">{doctor.user}</h5>
        </button>
        {doctor.again && <h5 className="card-title m-3" style={{color:"rgb(209,71,25)"}}> {i18n.t("Consultation")}</h5>}
        <div className="card-title">
          <table id="DocReservTable">
            <tbody>

              <tr className="trDoctor">
                <td className="LeftSide">{i18n.t("Reservation Date")}</td>
                <td className="RightSide">{doctor.date}</td>
              </tr>
              <tr className="trDoctor">
                <td className="LeftSide">{i18n.t("Reservation Time")} </td>
                <td className="RightSide">{doctor.time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ))}
</div>


    </>
  );
}
export default PatientData;
