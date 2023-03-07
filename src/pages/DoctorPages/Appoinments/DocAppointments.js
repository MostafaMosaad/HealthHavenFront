import React from "react";
import DocAppointments from "../../../components/ProfileDoctor/DoctorApointments";
import SidebarDoc from "./../../../components/SideBarDoctor/SideBarDoctor";
const DoctorApointments = () => {
  return (
    <>
    <br/><br/><br/><br/>
      <div className="d-flex justify-content-evenly flex-wrap">
        <div className=" col-xxl-3 col-xl-3  col-lg-3 col-md-10  col-sm-10 col-10 mx-5">
          <SidebarDoc />
        </div>
        <div className="  d-flex flex-wrap my-5 justify-content-center mt-5">
          <DocAppointments />
        </div>
      </div>
    </>
  );
};

export default DoctorApointments;
