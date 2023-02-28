import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from '@mui/material/Button';
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.css";
import { FaUserMd ,FaUser,FaPhoneAlt,FaLanguage} from "react-icons/fa";
import { HiOutlineLanguage } from "react-icons/hi2";
function Header() {
  return (
    <Navbar id="mainNavBar" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className="nav-link ">
            <svg
              id="logo-14"
              width="73"
              height="49"
              viewBox="0 0 73 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
                className="ccustom"
                fill="#68DBFF"
              ></path>{" "}
              <path
                d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
                className="ccompli1"
                fill="#FF7917"
              ></path>{" "}
              <path
                d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
                className="ccompli2"
                fill="#5D2C02"
              ></path>{" "}
            </svg>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
          {/* <Link to="/signupUser" className="nav-link">
              {" "}
              SIGNUP
            </Link> */}
          <Link to="/login" className="nav-link ">
            {" "}
            <span>   <FaUserMd/> Login</span>
            {" "}
          </Link>
          <Link to="/login" className="nav-link ">
            {" "}
            <span> <FaUser/> Login</span>
           
            {" "}
          </Link>
          <Link to="/contactus" className="nav-link ">
            {" "}
            <span>  <FaPhoneAlt/> Contact us</span>
           
            {" "}
          </Link>
          <Button id='languageID'><HiOutlineLanguage className="icones"/></Button>
          {/* 
          <Link to="/signupDoctor" className="nav-link">Join Us</Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
