import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import './signUpUser.css';
import { Link } from 'react-router-dom';
const theme = createTheme();
const API_URL = '/signup';

export default function SignUpUser() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [success, setSuccess] = useState();
  function validation (name,phone,email,DOB,password,password2){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^01\d{9}$/;
    const namePattern =  /^[a-zA-Z]{2,}(?:\s[a-zA-Z]+){1,}$/;
    // const namePattern =  /^[A-Za-z]{1,32}$/;

    // if(/^(19[3-9]\d|20[0-1]\d|2022|2023)$/.test(DOB)){
    
  
  if(emailPattern.test(email)){
    if (password.length >= 8){
      if(password2===password){
        if(phonePattern.test(phone)){
          if(namePattern.test(name)){
            if(/^[1-9][0-9]$/.test(DOB)){ //10 to 90
              return true

            }else return "  Age Should between 10 and 90❌"

          }else return "name  invalid ❌"

        }else return "phone is 11 number start with 01 ❌"

      }else return "not matched password ❌"

      // return true
  
    }else return "pass must be at least 8 chars  ❌"
  
  }else return "invalid email ❌"
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    // password: data.get('password'),
    // phone: data.get('phone'),
    // DateOfBirth: data.get('DateOfBirth'),
    // name: data.get('name'),

    // });
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
      setSuccess ("Added successfully ✅🙂")
      
      setTimeout(()=>{
        navigate('/login')
      },2000)
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
            placeholder="Enter Your Name"
            name="name"
            id="nameuserSign"
          />
          <input
          required
            type="email"
            placeholder="Enter Your E-mail"
            name="email"
            id="emailuserSign"
          />
            <input
            required
            type="password"
            placeholder="Enter Your password"
            name="password"
            id="passworduserSign"
          />
            <input
            required
            type="password"
            placeholder="Confirm password "
            name="confirmPassword"
            id="ConpassworduserSign"
          />
         <div className='d-flex flex-wrap justify-content-between'>
          <input
          required
            type="text"
            placeholder="Mobile Number"
            name="phone"
            id="phoneuserSign"
            pattern="[0-9]{11}"  
          />
          <input
          required
            type="number"
            placeholder="Age"
            name="DateOfBirth"
            id="ageuserSign"
            pattern="[0-9]{11}"  
          />
         </div>
         <hr></hr>
          <input type="submit" value="Sign up " id="subBtnSignUser"></input>
        </form>
        {data && <Alert variant={"danger"}>{data}</Alert>}
          {success&&<Alert variant={'success'}>{success}</Alert>}
            </div>{" "}
    </div> 
      </>
  );
}