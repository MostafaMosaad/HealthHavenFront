import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';

import axios from "axios";
import "./SignDoc.css";
const Swal = require('sweetalert2')


const API_URL = "/signup";

export default function SignUpDoc() {
  const { i18n } = useTranslation();

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
                  return  `${i18n.t("category must be selected")}`;
                }
              } else {
                return  `${i18n.t("address is not provided")}`;
              }
            } else {
              return  `${i18n.t("name is invalid")}`;
            }
          } else {
            return  `${i18n.t("phone is 11 numbers start with 01")}`;
          }
        } else {
          return `${i18n.t("passwords do not match")}` ;
        }
      } else {
        return  `${i18n.t("password must be at least 8 characters")}`;
      }
    } else {
      return  `${i18n.t("invalid email")}`;
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
             Swal.fire({
              icon: 'success',
              title:`${i18n.t("Loginsuccessfullywating")}`,
              confirmButtonText: "ok"
               }).then((result)=>{
               navigate("/");
                })
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
              placeholder={i18n.t("PlaceHolder3")}
              name="name"
              id="nameDocSign"
            />
            <input
              required
              type="email"
              placeholder={i18n.t("PlaceHolder1")}
              name="email"
              id="emailDocSign"
            />
          <input
          required
            type="text"
            placeholder={i18n.t("Mobile Number")}
            name="phone"
            id="phoneDocSign"
            pattern="[0-9]{11}"  
          />
            <input
              required
              type="text"
              placeholder={i18n.t("Address")}
              name="address"
              id="AddressDocSign"
            />
            <div className="d-flex flex-wrap justify-content-between">
            <input
              required
              type="password"
              placeholder={i18n.t("PlaceHolder2")}
              name="password"
              id="passwordDocSign"
            />
            <input
              required
              type="password"
              placeholder={i18n.t("PlaceHolder4")}
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
                {i18n.t("Major")}
                </option>
                <option value="Professor">{i18n.t("Professor")}</option>
                <option value="Lecturer">{i18n.t("Lecturer")}</option>
                <option value="Consultant">{i18n.t("Consultant")}</option>
                <option value="Specialist">{i18n.t("Specialist")}</option>
              </select>

              <select
                required
                name="category"
                value={major}
                id="Sel2"
                onChange={handleChange2}
              >
                <option value="" disabled>
                {i18n.t("Category")}
                </option>
                <option value="Skin">{i18n.t("Skin")}</option>
                <option value="Teeth">{i18n.t("Teeth")}</option>
                <option value="Child">{i18n.t("Child")}</option>
                <option value="Brain and Nerves">{i18n.t("Brain and Nerves")}</option>
                <option value="Bones">{i18n.t("Bones")}</option>
                <option value="Ear, Nose and Throat">
                {i18n.t("Ear, Nose and Throat")}
                </option>
                <option value="Heart">{i18n.t("Heart")}</option>
                <option value="Nutritionist">{i18n.t("Nutritionist")}</option>
              </select>
            </div>
            <hr></hr>
            <input type="submit" value={i18n.t("SignUp")} id="subBtnSignDoc"></input>
          </form>
          {error && <Alert variant={"danger"}>{error}</Alert>}
          {success && <Alert variant={"success"}>{success}</Alert>}
        </div>{" "}
      </div>
    </>
  );
}
