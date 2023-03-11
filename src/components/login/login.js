import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { authContext } from "../../context/loginContext";

export default function Login() {
  const navigate = useNavigate();
  const authCtx = useContext(authContext);
  const [data, setData] = useState();
  function validation(email, password) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      if (password.length >= 8) {
        return true;
      } else return "pass must be at least 8 chars";
    } else return "invalid email";
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
  
    let val = validation(data.get("email"), data.get("password"));
    if (val === true) {
      axios
        .post("/login", {
          email: data.get("email"),
          password: data.get("password"),
        })
        .then((res) => {
          if (res.status === 401) {
            setData("invalid mail or password :)");
          } else if (res.status === 200)
            if (!res.data.token) {
              // console.log(res.data)

              setData(" Not verfied yet");
            } else if (
              res.data.dataUser === "user" ||
              res.data.dataUser === "User"
            ) {
              authCtx.login(res.data.token, "user");
              navigate("/homeUser/MyProfile");
            } else if (res.data.dataUser === "Admin") {
              authCtx.login(res.data.token, "admin");
              navigate("/admin");
            } else if (res.data.dataUser === "Doctor") {
              authCtx.login(res.data.token, "doctor");
              navigate("/homeDoctor/MyProfile");
            }
        })
        .catch((err) => {
          setData(" mail or password may be wrong :(");

          console.error(err);
        });
    } else {
      setData(val);

    }
  };

  return (
    <>
    <div className="d-flex justify-content-evenly flex-wrap">
      <img src={process.env.PUBLIC_URL + "/Imges/Login.jpg"} id="loginImg"  className=' col-xxl-3 col-xl-3  col-lg-3 col-md-8  col-sm-10 col-10' />
      <div id="formDiv" className="  col-xxl-5 col-xl-5   col-lg-5 col-md-8  col-sm-10 col-10" >
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your email"
            name="email"
            id="email"
          />
          <input
            type="password"
            placeholder="Enter Your password"
            name="password"
            id="password"
          />
          <input type="submit" value="Login" id="subBtn"></input>
          {data && <Alert variant={"danger"}>{data}</Alert>}
        </form>
        <hr></hr>
        <div><h5 id="h5Text">Don't have  an account ? <Link to="/signup"><span id='regSpan'>Register</span></Link></h5></div>
      </div>{" "}
    </div>
</>
  );
}
