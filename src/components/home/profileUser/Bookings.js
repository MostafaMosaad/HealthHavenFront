import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import "./Style.css";
import StarRating from "./../../Rating/RatingStar";

const Swal = require("sweetalert2");
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
var houres = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

// if (houres < 10) houres = "0" + houres;
if (min < 10) min = "0" + min;

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

let hh = houres;
if (hh > 12) {
  hh = hh % 12;
}
const formattedToday = yyyy + "-" + mm + "-" + dd; //////hereeeeeee

function Bookings() {
  const { i18n } = useTranslation();

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
      {userBookings?.map((doctorData) => {
        return (
          <div className="card " style={{ width: " 24rem" ,marginLeft:"2rem" ,marginTop:"8rem"}}  key={doctorData.doctorName}>
            <img src={"/Imges/appoint.png"} className="card-img-top" style={{ filter: "brightness(92%)" }}/>
            <div className="card-body" style={{marginTop:"-3rem"}}>
              { doctorData.again && (<h6>{i18n.t("Consultation")}</h6> )}
              <h5>{doctorData.doctorName}</h5>
              <h5>{i18n.t(`${doctorData.doctorMajor}`)}</h5>
              <h5>{i18n.t(`${doctorData.doctorCategory}`)}</h5>
              <h5>{doctorData.doctorAddress}</h5>
              <h5>{doctorData.doctorPhone}</h5>
            
              <table className="tabl">
              <tbody>
               <tr className="trUser">
                <td className="leftTD"> {i18n.t("Reservation Date ")}</td>
                <td className="RightTD"> {doctorData.date}</td>
               </tr>
               <tr className="trUser">
               <td className="leftTD">{i18n.t("Reservation Time ")}</td>
                <td className="RightTD" > {doctorData.time}</td>
               </tr>
               </tbody>
              </table>
              
              {formattedToday == doctorData.date
                && (
                  <StarRating DoctorsId={doctorData.id}></StarRating>
                )}
                
                  {formattedToday < doctorData.date&&
                  <button 
                  style={{marginTop:"1rem",backgroundColor:"#20154f",color:"white",borderRadius:"0.5rem"}}
                    onClick={() => {
                      Swal.fire({
                        title: "Do you want to Cancel Reservaion?",
                        showDenyButton: true,
                        confirmButtonText: "Yes",
                        denyButtonText: `No`,
                      }).then((result) => {
                        if (result.isConfirmed) {
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
                          Swal.fire("Cancelled!", "", "success");
                        }
                      });
                    }}
                  >
                   {i18n.t("Cancel Book")}
                  </button>}
                  
            </div>
          </div>


          //   </div>
          // </div>
        );
      })}
    </>
  );
}

export default Bookings;
