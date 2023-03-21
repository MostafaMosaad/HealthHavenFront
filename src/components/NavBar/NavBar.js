import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./NavBar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { authContext } from "../../context/loginContext";
function NavBar() {
  
  const { t, i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsArabic(i18n.language === 'ar');
  }, [i18n.language]);

  const handleLanguage = () => {
    const newLanguage = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLanguage);
    setIsArabic(!isArabic);
  };
    MenuItems = [
    {
      title:  i18n.t('Home'),
      url: "/",
      cName: "nav-links",
      icon: "fa-solid fa-house-user",
    },
    {
      title:  i18n.t('Service'),
      url: "/service",
      cName: "nav-links",
      icon: "fa-solid fa-briefcase",
    },
    {
      title:  i18n.t('about'),
      url: "/aboutus",
      cName: "nav-links",
      icon: "fa-solid fa-circle-info",
    },
    {
      title: i18n.t('Contact'),
      url: "/contactus",
      cName: "nav-links",
      icon: "fa-solid fa-address-book",
    },
  ];

  const [clicked, setClicked] = useState(false);
  const [clickedLogged, setClickedLogged] = useState(false);
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
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (role === "doctor") {
      axios
        .get("/doctors/getMe", config)
        .then((response) => {
          setName(response.data.data.doctor.name);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, );

  const handleLogout = () => {
    isAuthen.logout();
    localStorage.removeItem("role");
  };
  const handleClick = () => {
    setClicked(!clicked);
  };
   const handleClickAfterLogin =()=>{
    setClickedLogged(!clickedLogged);
   }
 
  if (Logged) {
    return (
      <nav className="NavbarItems">
        <Link to="/"><h1 className="navbar-logo"> {t("title")}</h1></Link>
        <div className="menu-icons">
          <i className={clickedLogged ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={handleClickAfterLogin}></i>
        </div>
        <ul className={clickedLogged ? "nav-menu active" : "nav-menu"}>
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
                    <div style={{ color: "rgba(32,21,79)" }}>{i18n.t("Profile")}</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/homeUser/MyProfile/Doctors">
                    <div style={{ color: "rgba(32,21,79)" }}>{i18n.t("Book Now")}</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/homeUser/MyProfile/myBookings">
                    <div style={{ color: "rgba(32,21,79)" }}>
                    {i18n.t("My Appointment")}
                    </div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/homeUser/MyProfile/medicalHistory">
                    <div style={{ color: "rgba(32,21,79)" }}>
                    {i18n.t("Medical History")}
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
                    {i18n.t("Logout")}
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
                    <div style={{ color: "rgba(32,21,79)" }}>{i18n.t("Profile")}</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/homeDoctor/MyProfile/PatientData">
                    <div style={{ color: "rgba(32,21,79)" }}>
                      {i18n.t("My Appointment")}
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
                    {i18n.t("Logout")}
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
                    <div style={{ color: "rgba(32,21,79)" }}>{i18n.t("Dashboard")}</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/alldoctors">
                    <div style={{ color: "rgba(32,21,79)" }}>{i18n.t("Doctors")}</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/allpatients">
                    <div style={{ color: "rgba(32,21,79)" }}>{i18n.t("Patients")}</div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/">
                    <div
                      style={{ color: "rgba(32,21,79)" }}
                      onClick={handleLogout}
                    >
                     {i18n.t("Logout")}
                    </div>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          <div>
           <button  className="nav-links"onClick={handleLanguage} style={{background:"none",border:"none",color:"#24326c"}}>{isArabic ? <i className="fa-sharp fa-solid fa-earth-americas"></i>: <i className="fa-sharp fa-solid fa-earth-americas"></i>}  </button>
          </div>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="NavbarItems">
        <Link to="/"><h1 className="navbar-logo"> {t("title")}</h1></Link>
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
            <i className="fa-solid fa-user"></i>{t("LOGIN")}
          </Link>
          <Link to="/signup" className="nav-links">
          <i className="fa fa-user-plus"></i>{t("SignUp")}
          </Link>
          <button  className="nav-links"onClick={handleLanguage} style={{background:"none",border:"none",color:"#24326c"}}>{isArabic ? <i className="fa-sharp fa-solid fa-earth-americas"></i>: <i className="fa-sharp fa-solid fa-earth-americas"></i>}  </button>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
