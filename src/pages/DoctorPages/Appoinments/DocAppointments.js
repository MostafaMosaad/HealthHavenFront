import React from "react";
import PatientData from "../../../components/home/ProfileDoctor/PatientData";
import '.././DoctorPagesStyle.css';
const DoctorApointments = () => {
  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap" >
        <div className="  d-flex flex-wrap my-5 justify-content-center mt-5" id="reservationCards">
          <PatientData />
        </div>
      </div>
    </>
  );
};

export default DoctorApointments;
