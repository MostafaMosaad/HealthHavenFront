import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import "./SignDoc.css";

const API_URL = "/signup";

export default function SignUpDoc() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [category, setCategory] = useState("");
  const [major, setMajor] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const handleChange2 = (event) => {
    setMajor(event.target.value);
  };

  function validation(
    name,
    phone,
    email,
    address,
    password,
    password2,
    category,
    major
  ) {
    const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    const phonePattern = /^01\d{9}$/;
    const namePattern = /^[a-zA-Z]{2,}(?:\s[a-zA-Z]+){1,}$/;

    if (emailPattern.test(email)) {
      if (password.length >= 8) {
        if (password === password2) {
          console.log(password);
          console.log(password2);
          if (phonePattern.test(phone)) {
            if (namePattern.test(name)) {
              if (address) {
                if (category) {
                  return true;
                } else {
                  return "category must be selected ❌";
                }
              } else {
                return "address is not provided ❌";
              }
            } else {
              return "name is invalid ❌";
            }
          } else {
            return "phone is 11 numbers start with 01 ❌";
          }
        } else {
          return "passwords do not match ❌";
        }
      } else {
        return "password must be at least 8 characters ❌";
      }
    } else {
      return "invalid email ❌";
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      phone: data.get("phone"),
      address: data.get("address"),
      category: data.get("category"),
      major: data.get("major"),
    });
    let val = validation(
      data.get("name"),
      data.get("phone"),
      data.get("email"),
      data.get("address"),
      data.get("password"),
      data.get("confirmPassword"),
      data.get("category"),
      data.get("major")
    );
    console.log(val);
    if (val === true) {
      axios
        .post(API_URL, {
          name: data.get("name"),
          email: data.get("email"),
          password: data.get("password"),
          phone: data.get("phone"),
          address: data.get("address"),
          category: data.get("category"),
          major: data.get("major"),
        })
        .then((res) => {
          if (res.status === 201) {
            setError();
            setSuccess(" successfully updated Wait for verification ✅🙂 ");

             setTimeout(()=>{
               navigate('/')
             },2000)
          }
        })
        .catch((err) => {
          setError(err);
          console.error(err);
        });
    } else {
      setError(val);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap">
        <img
          src={process.env.PUBLIC_URL + "/Imges/SignUp.jpg"}
          id="SignDocImg"
          className=" col-xxl-4 col-xl-4  col-lg-4 col-md-7  col-sm-10 col-10"
        />
        <div
          id="formDivSignDoc"
          className="  col-xxl-5 col-xl-5   col-lg-5 col-md-8  col-sm-10 col-10"
        >
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Enter Your Name"
              name="name"
              id="nameDocSign"
            />
            <input
              required
              type="email"
              placeholder="Enter Your E-mail"
              name="email"
              id="emailDocSign"
            />
          <input
          required
            type="text"
            placeholder="Mobile Number"
            name="phone"
            id="phoneDocSign"
            pattern="[0-9]{11}"  
          />
            <input
              required
              type="text"
              placeholder="Address "
              name="address"
              id="AddressDocSign"
            />
            <div className="d-flex flex-wrap justify-content-between">
            <input
              required
              type="password"
              placeholder="Enter Your password"
              name="password"
              id="passwordDocSign"
            />
            <input
              required
              type="password"
              placeholder="Confirm password "
              name="confirmPassword"
              id="ConpasswordDocSign"
            />

            </div>


            <div className="d-flex flex-wrap justify-content-between">
              <select
                required
                name="major"
                value={category}
                id="Sel"
                onChange={handleChange}
              >
                <option value="" disabled>
                  Major
                </option>
                <option value="Professor">Professor</option>
                <option value="Lecturer">Lecturer</option>
                <option value="Consultant">Consultant</option>
                <option value="Specialist">Specialist</option>
              </select>

              <select
                required
                name="category"
                value={major}
                id="Sel2"
                onChange={handleChange2}
              >
                <option value="" disabled>
                  category
                </option>
                <option value="Skin">Skin</option>
                <option value="Teeth">Teeth</option>
                <option value="Child">Child</option>
                <option value="Brain and Nerves">Brain and Nerves</option>
                <option value="Bones">Bones</option>
                <option value="Ear, Nose and Throat">
                  Ear, Nose and Throat
                </option>
                <option value="Heart">Heart</option>
                <option value="Nutritionist">Nutritionist</option>
              </select>
            </div>
            <hr></hr>
            <input type="submit" value="Sign up " id="subBtnSignDoc"></input>
          </form>
          {error && <Alert variant={"danger"}>{error}</Alert>}
          {success && <Alert variant={"success"}>{success}</Alert>}
        </div>{" "}
      </div>
    </>
  );
}
