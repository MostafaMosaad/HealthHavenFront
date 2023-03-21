import {  useNavigate, useParams } from "react-router-dom";
import { useState, } from 'react';
import axios from "axios";
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './DoctorStyle.css';
const Swal = require('sweetalert2')


const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate()+1;
var houres=today.getHours() 
var min= today.getMinutes()

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;


if (houres < 10) houres = "0" + houres;
if (min < 10) min = "0" + min;
const formattedToday2 = yyyy + "-" + mm + "-" + dd+"T"+houres+":"+min;

const History_Update = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("userToken"));
  const [Datee, SetDatte] = useState(formattedToday2);
  const todayy = Datee;
  let time = todayy.split('T')
let hh=parseInt( time[1].split(':')[0]);
let ampm="am"
if(hh > 12 )
{
  hh =hh % 12;
  ampm="pm"

}
let dte=hh +":" +time[1].split(':')[1]+" "+ampm
const handleChange = useCallback((e) => {
  const { value, name } = e.target;
  SetDatte(() => (e.target.value));
}, []);
  const API_URL = `/users/${id}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fetchData = async () => {
      await axios.patch(API_URL,
        {
          medicalHistory:data.get('state').toString(),
          Discriptions: data.get('state').toString(),
          Labs: data.get('labs').toString(),
          Pharmacies:data.get('pharamcy').toString(),
          missedBookings: data.get('missed').toString()

        },
        {
          headers: { Authorization: `Bearer ${token}` }
        },
      );
      axios.patch(
        `/doctors/booking`,
        {
          PatientID: id,
          time:dte,
          date:Datee.split('T')[0]
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        },
)

    };
    fetchData();
    Swal.fire({
      icon: 'success',
      title:`${i18n.t("successfully")}`,
      confirmButtonText: "ok"
    }).then((result)=>{
      navigate("/homeDoctor/MyProfile/PatientData");
    })
  };
  return (
    <>
       <div  id="upForm">
       <form onSubmit={handleSubmit}>
       <div className="mb-2 d-flex">
            <label className="labelsUp">{i18n.t("Patient State")}</label>
            <input type="text" className="formInputUp" name="state" />
        </div>
        <div className="mb-2 d-flex">
            <label className="labelsUp">{i18n.t("Analysis")}</label>
            <input type="text" className="formInputUp" name="labs" />
        </div>
        <div className="mb-2 d-flex">
            <label className="labelsUp">{i18n.t("Prescription")}</label>
            <input type="text" className="formInputUp" name="pharamcy" />
        </div>
        <div className="mb-2 d-flex">
            <label className="labelsUp">{i18n.t("Missed Bookings")}</label>
            <input type="text" className="formInputUp" name="missed" />
        </div>
        <div className="d-flex justify-content-around">
  <button className="btn btn-success m-3" type="submit">{i18n.t("Update")}</button>
  <button className="btn btn-success m-3"  type="button"onClick={() => navigate(-1)}>{i18n.t("Back")}</button>
        </div>
        <div  style={{textAlign:"center"}}>
        <input type = "datetime-local"   
                 name="date"
                 value={Datee}
                 onChange={handleChange}
                 min={formattedToday2}
                 style={{borderColor:"red",padding:"0.5rem",borderRadius:"0.3rem",marginTop:"1rem",marginBottom:"1rem",textAlign:"center"}}
                 /> 
        </div>
       </form>

       </div>
    </>
  );
};

export default History_Update;