import React from "react";
import PatientData from "../../../components/home/ProfileDoctor/PatientData";
const DoctorApointments = () => {
  return (
    <>
    <br/><br/><br/><br/>
      <div className="d-flex justify-content-evenly flex-wrap">
        {/* <div className=" col-xxl-3 col-xl-3  col-lg-3 col-md-10  col-sm-10 col-10 mx-5">
          <SidebarDoc />
        </div> */}
        {/* <div className=" col-xxl-5 col-xl-5   col-lg-5 col-md-11  col-sm-10 col-10" > </div> */}

        <div className="  d-flex flex-wrap my-5 justify-content-center mt-5">
          <PatientData />
        </div>
      </div>
    </>
  );
};

export default DoctorApointments;
