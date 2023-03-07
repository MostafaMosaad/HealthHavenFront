import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Main from "../components/main/main";
import Login from "../components/login/login";
import SignUpDoc from "../components/signUpDoc/signUpDoc";
import SignUpUser from "../components/signUpUser/signUpUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { useContext,useState,useEffect } from "react";
import { authContext } from "../context/loginContext";

import ContactUs from "../components/contactUs/ContactUs";
import AboutUs from "../components/aboutUs/AboutUs";
import Services from "./../components/Services/Services";
import SignUp from "./../components/SignUp/SignUp";
import NavBar from "./../components/NavBar/NavBar";
import Admin from "./../components/home/admin/adminHome";
import AllDoc from "./../components/home/admin/allDoctors/Alldoctors";
import AllPatient from "./../components/home/admin/allPatients/Allpatient";
import Appointment from "./../components/home/admin/docappointent";
import Doctor_Update from "./../components/home/admin/updatedoc";
import Patient_Update from "./../components/home/admin/updatePatient";
import Midical from "./../components/home/admin/MidicalHistory";


import History from "../pages/UserPages/MedicalHistory/MedicalHistoryPage";
import Reservation from "../pages/UserPages/Reservation/ReservationPage";
import MyBookings from '../pages/UserPages/MyBookings/MyBookings';
import MyProfilePage from '../pages/UserPages/myProfile/myProfilepage';
import DoctorProfilePage from './../pages/DoctorPages/myProfile/DocProfile';
import History_Update from "../components/ProfileDoctor/HistoryUpdate";
import PatientData from "../components/ProfileDoctor/PatientData";
import ErrorMe from "../components/error";
import Footer from './../components/Footer/Footer';
function App() {
  const { isLoggend } = useContext(authContext);
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [isLoggend]);
  return (
    <div className="App">

      <BrowserRouter>
      
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signupDoctor" element={<SignUpDoc />}></Route>
          <Route path="/signupUser" element={<SignUpUser></SignUpUser>}></Route>

          {/* homeuser */}
          {role==="user"&&<><Route path="/homeUser/myProfile" element={<MyProfilePage/>}  ></Route>
          <Route path="/homeUser/myProfile/myBookings" element={<MyBookings/>}  ></Route>
          <Route path="/homeUser/myProfile/Doctors" element={<Reservation/>}  ></Route>
          <Route path="/homeUser/myProfile/medicalHistory" element={<History/>} ></Route> </>}

          
          {/* homeDoctor */}
          {role==="doctor"&&<><Route path="/homeDoctor/myProfile" element={<DoctorProfilePage/>}></Route>
          <Route path="/homeDoctor/myProfile/PatientData" element={<PatientData/>}></Route>
          <Route path="/updatehistorybydoc/:id" element={< History_Update/>}></Route>
          </>}

   
          {/* adminHome */}
          {role==="admin"&&<> <Route path="/admin"  element={<Admin/>}></Route>
          <Route path="/alldoctors" element={<AllDoc />}></Route>
          <Route path="/allpatients" element={<AllPatient />}></Route>
          <Route path="/appointment/:id" element={<Appointment />}></Route>
          <Route path="/updatedocbyadmin/:id" element={<Doctor_Update />} ></Route>
          <Route path="/updatepatirntbyadmin/:id" element={<Patient_Update />}></Route>
          <Route path="/MidicalHistory/:id" element={<Midical />}></Route></>}
        

          <Route path="*" element={<ErrorMe/>}></Route>

        </Routes>
        
          {/* <Footer></Footer>  */}
      </BrowserRouter>

    </div>
  );
}

export default App;
