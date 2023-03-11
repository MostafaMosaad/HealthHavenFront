import React, { useContext, useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { authContext } from "../../context/loginContext";
function NavBar() {
  var n;
  const [clicked, setClicked] = useState(false);
  const isAuthen = useContext(authContext);
  const Logged = isAuthen.isLoggend;
  const token = isAuthen.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [role, setRole] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [Logged]);
  useEffect(() => {
    if (role === "user") {
      axios
        .get(
          "/users/getMe" ||
            "/doctors/getMe",
          config
        )
        .then((response) => {
          setName(
            response.data.data.user.name || response.data.data.doctor.name
          );
          console.log(`Name: ${name}`);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (role === "doctor") {
      axios
        .get("/doctors/getMe", config)
        .then((response) => {
          setName(response.data.data.doctor.name);
          console.log(`Name: ${name}`);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [Logged, role]);

  const handleLogout = () => {
    isAuthen.logout();
    localStorage.removeItem("role");
  };
  const handleClick = () => {
    setClicked(!clicked);
  };
  if (Logged) {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> Health Haven</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          {role === "user" && (
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                <i className="fa-solid fa-user"></i>
                <span>{name}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/homeUser/MyProfile">
                    <div style={{ color: "rgba(32,21,79)" }}>Profile</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/homeUser/MyProfile/Doctors">
                    <div style={{ color: "rgba(32,21,79)" }}>Book Now</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/homeUser/MyProfile/myBookings">
                    <div style={{ color: "rgba(32,21,79)" }}>
                      My Appointment
                    </div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/homeUser/MyProfile/medicalHistory">
                    <div style={{ color: "rgba(32,21,79)" }}>
                      Medical History
                    </div>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/">
                    <div
                      style={{ color: "rgba(32,21,79)" }}
                      onClick={handleLogout}
                    >
                      Log out
                    </div>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {role === "doctor" && (
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                <i className="fa-solid fa-user"></i>
                <span>{name}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/homeDoctor/MyProfile">
                    <div style={{ color: "rgba(32,21,79)" }}>Home</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/homeDoctor/MyProfile/PatientData">
                    <div style={{ color: "rgba(32,21,79)" }}>
                      My Appointment
                    </div>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/">
                    <div
                      style={{ color: "rgba(32,21,79)" }}
                      onClick={handleLogout}
                    >
                      Log out
                    </div>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {role === "admin" && (
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                <i className="fa-solid fa-user"></i>
                <span style={{ color: "rgba(32,21,79)" }}>admin</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/admin">
                    <div style={{ color: "rgba(32,21,79)" }}>Home</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/alldoctors">
                    <div style={{ color: "rgba(32,21,79)" }}>Doctors</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/allpatients">
                    <div style={{ color: "rgba(32,21,79)" }}>Patients</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/">
                    <div
                      style={{ color: "rgba(32,21,79)" }}
                      onClick={handleLogout}
                    >
                      Log out
                    </div>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> Health Haven</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/login" className="nav-links">
            <i className="fa-solid fa-user"></i>Log in
          </Link>
          <Link to="/signup" className="nav-links">
            <i className="fa-solid fa-user"></i>Sign Up
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
