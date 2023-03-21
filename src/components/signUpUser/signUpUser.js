import Alert from 'react-bootstrap/Alert';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import './signUpUser.css';
const API_URL = '/signup';
const Swal = require('sweetalert2')


export default function SignUpUser() {
  const { i18n } = useTranslation();

  const navigate = useNavigate();
  const [data, setData] = useState();
  function validation (name,phone,email,DOB,password,password2){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^01\d{9}$/;
    const namePattern =  /^[a-zA-Z]{2,}(?:\s[a-zA-Z]+){1,}$/;

  if(emailPattern.test(email)){
    if (password.length >= 8){
      if(password2===password){
        if(phonePattern.test(phone)){
          if(namePattern.test(name)){
            if(/^[1-9][0-9]$/.test(DOB)){ //10 to 90
              return true

            }else return  `${i18n.t("Age Should between 10 and 90")}`

          }else return  `${i18n.t("name is invalid")}`

        }else return  `${i18n.t("phone is 11 numbers start with 01")}`

      }else return  `${i18n.t("passwords do not match")}`

  
    }else return `${i18n.t("pass must be at least 8 chars")}`
  
  }else return `${i18n.t("invalid email")}`
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let val=validation(data.get('name'),data.get('phone'),data.get('email'),data.get('DateOfBirth'),data.get('password'),data.get('confirmPassword'))
console.log(val)
if(val===true){
  axios
  .post(API_URL, {
    email: data.get('email'),
    password: data.get('password'),
    phone: data.get('phone'),
    DateOfBirth: data.get('DateOfBirth'),
    name: data.get('name'),
    
  })
  .then((res) => {
    if(res.status===201){
      setData()
      Swal.fire({
        icon: 'success',
        title:`${i18n.t("Loginsuccessfully")}`,
        confirmButtonText: "ok"
      }).then((result)=>{
        navigate("/");
      })
    }
  })
  .catch((err) => {
    setData(err)
    console.error(err);
  });

}else{
  setData(val);
 console.log(val) 
}
  };

  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap">
      <img src={process.env.PUBLIC_URL + "/Imges/SignUp.jpg"} id="SignUserImg"  className=' col-xxl-4 col-xl-4  col-lg-4 col-md-7  col-sm-10 col-10' />
      <div id="formDivSign" className="  col-xxl-5 col-xl-5   col-lg-5 col-md-8  col-sm-10 col-10" >
        <form onSubmit={handleSubmit}>
          <input
           required
            type="text"
            placeholder={i18n.t("PlaceHolder3")}
            name="name"
            id="nameuserSign"
          />
          <input
          required
            type="email"
            placeholder={i18n.t("PlaceHolder1")}
            name="email"
            id="emailuserSign"
          />
            <input
            required
            type="password"
            placeholder={i18n.t("PlaceHolder2")}
            name="password"
            id="passworduserSign"
          />
            <input
            required
            type="password"
            placeholder={i18n.t("PlaceHolder4")}
            name="confirmPassword"
            id="ConpassworduserSign"
          />
         <div className='d-flex flex-wrap justify-content-between'>
          <input
          required
            type="text"
            placeholder={i18n.t("Mobile Number")}
            name="phone"
            id="phoneuserSign"
            pattern="[0-9]{11}"  
          />
          <input
          required
            type="number"
            placeholder={i18n.t("Age")}
            name="DateOfBirth"
            id="ageuserSign"
            pattern="[0-9]{11}"  
          />
         </div>
         <hr></hr>
          <input type="submit" value={i18n.t("SignUp")} id="subBtnSignUser"></input>
        </form>
        {data && <Alert variant={"danger"}>{data}</Alert>}
            </div>
    </div> 
      </>
  );
}