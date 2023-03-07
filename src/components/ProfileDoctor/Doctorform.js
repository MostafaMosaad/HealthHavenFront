import axios from "axios";
import React, { useEffect, useState,useCallback } from "react";
// import ".././userForm.css";

function DoctorForm() {

  const [token,SetToken] = useState(localStorage.getItem("userToken"));
  const API_URL = 'http://localhost:3000/api/doctors/getMe';
  const API_URL2 = "http://localhost:3000/api/doctors/updateMe";

const [data, setData] = useState({});
useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get(
            API_URL,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        setData(result.data.data.doctor);
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
            address:Update.get('address').toString(),

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

          <form id="userForm" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="exampleInputName" className="labels">
                Your name{" "}
              </label>
              <input
                type="text"
                className="form-input"
                id="exampleInputName"
                value={data.name}
                name="name"

              onChange={handleChange}

              />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="labels">
                Email address
              </label>
              <input
                type="email"
                className="form-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={data.email}
                name="email"
                onChange={handleChange}


              />
            </div>

            <div className="mb-2">
              <label htmlFor="exampleInputnumber" className="labels">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-input"
                id="exampleInputnumber"
                value={data.phone}
                name="phone"
                onChange={handleChange}
                pattern="[0-9]{11}"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputage" className="labels">
                Age
              </label>
              <input
                type="text"
                className="form-input"
                id="exampleInputage"
                value={data.address}
                onChange={handleChange}
                name="address"
/>
 
            </div>
            <button type="submit" className="saveBtn">
              Save
            </button>
          </form>
  );

 

 
}

export default DoctorForm;
