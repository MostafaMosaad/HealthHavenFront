import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './DoctorStyle.css';

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
var houres=today.getHours() 
var min= today.getMinutes()
var sec =today.getSeconds();

if (houres < 10) houres = "0" + houres;
if (min < 10) min = "0" + min;

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

let hh=houres;
let ampm="am"
if(hh > 12 )
{
  hh =hh % 12;
  ampm="pm"
}
const formattedToday = yyyy + '-' + mm + '-' + dd; //////hereeeeeee
function PatientData() {
const { t, i18n } = useTranslation();
const [token] = useState(localStorage.getItem("userToken"));
const nav = useNavigate();
const API_URL = "/doctors/getMe";
const [data, setData] = useState({});
useEffect(() => {
  const fetchData = async () => {
    const result = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data.data.doctor);
      console.log(result.data.data.doctor)
    };
    fetchData();
  }, [token]);

  if (!data) {
    return <div>Loading user details...</div>;
  }
  const userHistory = data.appointments;
  if(!userHistory){
    return <div> Loading..</div>
  }

  return (
    <>
      <div className="d-flex justify-content-evenly  "style={{marginTop:"13rem" }}>
         <img  id="welcomeIMG" src={"/Imges/Welcome Doctor.png"} style={{paddingBottom:"4rem"}}></img>
         <div>
           <h1   id="WelcomeBack" style={{maxWidth:"30rem" , marginTop:"2rem",color:"rgb(209,71,25)"}}>  {i18n.t("Welcome back,")}</h1>
           <h2   id="Num" style={{paddingTop:"1rem",color:"#2d2d4f" }}>{i18n.t("the number of examination is")}  ({userHistory.length})</h2>
          </div>
        </div>
       
      {[...Array(12)].map((_, index) => (
        <br key={index} />
      ))}
      {userHistory?.map((doctor) => (
          <div className="card " style={{ width: " 24rem" ,marginBottom:"2rem",marginLeft:"2rem" ,marginTop:"1.5rem"}}>
          <img
            src={"/Imges/patient.jpg"}
            className="card-img-top"
          />
          <div className="card-body" key={doctor.id}>
             <button id="userNameBuuton" onClick={() => {
                nav(`/ViewMedical/${doctor.id}/${doctor.date}`);
              }}><h5 className="card-title m-3">{doctor.user}</h5></button>
            {doctor.again && <h5 className="card-title m-3"> Consultation </h5>}
            <div className="card-title ">
               <table id="DocReservTable">
                <tbody>
                  <tr>
                    <td className="LeftSide">{i18n.t("Reservation Date")}</td>
                    <td className="RightSide">{doctor.date}</td>
                  </tr>
                  <tr>
                    <td className="LeftSide">{i18n.t("Reservation Time")} </td>
                    <td className="RightSide">{doctor.time}</td>
                  </tr>
                </tbody>
               </table>
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
}
export default PatientData;