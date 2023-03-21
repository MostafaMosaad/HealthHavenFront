import axios from "axios";
import React, { useEffect, useState,useCallback } from "react";
import "./userForm.css";
import { useTranslation } from 'react-i18next';
const Swal = require('sweetalert2')


function MyProfile() {
  const { i18n } = useTranslation();
  const [token] = useState(localStorage.getItem("userToken"));

  const API_URL = "/users/getMe";
  const API_URL2 = "/users/updateMe";

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data.data.user);
    };
    fetchData();
  }, [token]);

  const handleChange = useCallback((e) => {
    const { value, name } = e.target;
    setData((oldData) => ({ ...oldData, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Update = new FormData(e.currentTarget);
       const fetchData = async () => {
        const result = await axios.patch(API_URL2,
        {
            name:Update.get('name'),
            phone:Update.get('phone'),
            email:Update.get('email'),
            DateOfBirth:Update.get('age'),

        },
        {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(result.data.data.user);
      };
      fetchData();
      Swal.fire(`${i18n.t("successfullyupdated")}`, "", "success");
  };
  return (
        <div>
          <form id="userForm" onSubmit={handleSubmit}>
            <div className="mb-2 d-flex ">
              <label htmlFor="exampleInputName" className="labels">{i18n.t("userName")} </label>
              <input type="text" className="formInput"id="exampleInputName"value={data.name} name="name"
                  onChange={handleChange}/>
            </div>
             <div className="mb-2 d-flex">
              <label htmlFor="exampleInputEmail1" className="labels">
                {i18n.t("E-mail Address")}
              </label>
              <input type="email" className="formInput"
                id="exampleInputEmail1" value={data.email} name="email"
                onChange={handleChange} />
            </div>

            <div className="mb-2 d-flex">
              <label htmlFor="exampleInputnumber" className="labels">
                {i18n.t("Mobile Number")}

                
              </label>
              <input
                type="text" className="formInput" id="exampleInputnumber" value={data.phone} name="phone"
                onChange={handleChange} pattern="[0-9]{11}"/>
            </div>
            <div className="mb-2 d-flex">
              <label htmlFor="exampleInputage" className="labels">
                {i18n.t("Age")}

              </label>
              <label type="number"  className="formInput"id="exampleInputage" 
                name="age"
             >{data.DateOfBirth}</label>
 
            </div>
            <div id="divBtn">
            <button type="submit" className="saveBtn">
              
              {i18n.t("Save")}

            </button>
            </div>
          </form>
          </div>
  );

 
}

export default MyProfile;