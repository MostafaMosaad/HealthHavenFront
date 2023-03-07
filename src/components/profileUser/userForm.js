import axios from "axios";
import React, { useEffect, useState,useCallback } from "react";
import "./userForm.css";

function MyProfile() {
  const [token] = useState(localStorage.getItem("userToken"));

  const API_URL = "http://localhost:3000/api/users/getMe";
  const API_URL2 = "http://localhost:3000/api/users/updateMe";

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
          alert('successfully updated')
  };

  return (
        <div>
          <form id="userForm" onSubmit={handleSubmit}>
            <div className="mb-2 d-flex ">
              <label htmlFor="exampleInputName" className="labels">User Name </label>
              <input type="text" className="formInput"id="exampleInputName"value={data.name} name="name"
                  onChange={handleChange}/>
            </div>
             <div className="mb-2 d-flex">
              <label htmlFor="exampleInputEmail1" className="labels">
                E-mail Address
              </label>
              <input type="email" className="formInput"
                id="exampleInputEmail1" value={data.email} name="email"
                onChange={handleChange} />
            </div>

            <div className="mb-2 d-flex">
              <label htmlFor="exampleInputnumber" className="labels">
                Mobile Number
              </label>
              <input
                type="text" className="formInput" id="exampleInputnumber" value={data.phone} name="phone"
                onChange={handleChange} pattern="[0-9]{11}"/>
            </div>
            <div className="mb-2 d-flex">
              <label htmlFor="exampleInputage" className="labels">
                Age
              </label>
              <input type="number"  className="formInput"id="exampleInputage" value={data.DateOfBirth}
                onChange={handleChange}  name="age"
/>
 
            </div>
            <div id="divBtn">
            <button type="submit" className="saveBtn">
              Save
            </button>
            </div>
          </form>
          </div>
  );

 
}

export default MyProfile;