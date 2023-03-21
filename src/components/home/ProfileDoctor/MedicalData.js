import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import './DoctorStyle.css';
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
var houres = today.getHours();
var min = today.getMinutes();

if (houres < 10) houres = "0" + houres;
if (min < 10) min = "0" + min;

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

let hh = houres;
let ampm = "am";
if (hh > 12) {
  hh = hh % 12;
  ampm = "pm";
}
const formattedToday = yyyy + "-" + mm + "-" + dd;
function MedicalData() {
  const { t, i18n } = useTranslation();
  const { id ,date} = useParams();
  const [token] = useState(localStorage.getItem("userToken"));
  const nav = useNavigate();
  const API_URL = "/doctors/getMe";
  const [data, setData] = useState({});
  const [dis,setDis]=useState(true);

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
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <br key={index} />
      ))}
          <div className="m-5 " >
          {formattedToday == date&&<button
  style={{background:"#20154f",color:"white"}}
  onClick={() => {
    nav(`/updatehistorybydoc/${id}`);
  }}
>
  {i18n.t("Update medical history")}
</button>}
</div>

      {userHistory?.map(
        (doctor) =>
          doctor.id == id &&
          doctor.again != true &&
          doctor.medical?.map((z, index) => {
            return z?.map((x,index) => {
              return (
                <div className="  d-inline-block m-3  " >
                <div
                  className="card "
                  style={{
                    width: " 22rem",
                    height:"45rem",
                    marginBottom: "4rem",
                    marginLeft: "2rem",
                    marginTop: "-3.5rem",
                  }}
                >
                  <img src={"/Imges/State.png"}  />
                  <div className="card-body">
                    <table style={{margin:"0 auto"}}>
                      <tbody>
                        <tr  className="trDoctor">
                          <td  className="LeftSide">{i18n.t("Date")} </td>
                          <td className="RightSide">{x.date}</td>
                        </tr>
                        <tr  className="trDoctor">
                          <td className="LeftSide">{i18n.t("State")} </td>
                          <td className="RightSide">{x.Discriptions}</td>
                        </tr>
                        <tr  className="trDoctor">
                          <td className="LeftSide">{i18n.t("Analysis")} </td>
                          <td className="RightSide">{x.Labs}</td>
                        </tr>
                        <tr  className="trDoctor">
                          <td className="LeftSide">{i18n.t("Prescription")} </td>
                          <td className="RightSide">{x.Pharmacies}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                </div>
              );
                
            });
          })
      )}
      
    </>
  );
}
export default MedicalData;

