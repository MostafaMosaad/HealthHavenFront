import axios from "axios";
import React, { useEffect, useState,useCallback } from "react";
 import "./doctorForm.css";
 import  Alert  from 'react-bootstrap/Alert';

function DoctorForm() {

  const [token,SetToken] = useState(localStorage.getItem("userToken"));
  const API_URL = '/doctors/getMe';
  const API_URL2 = "/doctors/updateMe";

const [data, setData] = useState({});
const [success, setSuccess] = useState();

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
      setSuccess("successfully updated ✅ 🙂");

  };

  return (
    <div>
      <form id="DocForm" onSubmit={handleSubmit}>
          <div className="mb-2 d-flex">
            <label htmlFor="exampleInputNameDoc" className="labelsDoc">Your name{" "} </label>
            <input type="text" className="formInputDoc" id="exampleInputNameDoc"
                value={data.name} name="name" onChange={handleChange}/>
          </div>
          <div className="mb-2 d-flex">
            <label htmlFor="exampleInputEmialDoc" className="labelsDoc">E-mail Address{" "} </label>
            <input type="text" className="formInputDoc" id="exampleInputEmialDoc"
                value={data.email} name="email" onChange={handleChange}/>
          </div>
          <div className="mb-2 d-flex">
            <label htmlFor="exampleInputPhoneDoc" className="labelsDoc">Phone Number{" "} </label>
            <input type="text" className="formInputDoc" id="exampleInputPhoneDoc"
                value={data.phone} name="phone" onChange={handleChange}/>
          </div>
          <div className="mb-2 d-flex">
            <label htmlFor="exampleInputAddressDoc" className="labelsDoc">Address{" "} </label>
            <input type="text" className="formInputDoc" id="exampleInputAddressDoc"
                value={data.address} name="address" onChange={handleChange}/>
          </div>
          <div className="mb-2 d-flex" id='d1'>
            <label htmlFor="exampleInputMajoryDoc" className="labelsDoc">Category{" "} </label>
            <lable className="formInputDoc" id="exampleInputMajorDoc"
                 name="category">{data.category}</lable>
          </div>
          <div className="mb-2 d-flex" id='d1'>
            <label htmlFor="exampleInputCategoryDoc" className="labelsDoc">Major{" "} </label>
            <lable className="formInputDoc" id="exampleInputCategoryDoc"
                 name="category">{data.major}</lable>
          </div>
          <div id="divBtnDoc">
            <button type="submit" className="saveBtnDoc">
              Save
            </button>
            </div>
     </form>
     {success && <Alert variant={"success"}>{success}</Alert>}

    </div>

  );
}

export default DoctorForm;
