import React, { useContext,useState,useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import axios from 'axios';


import { authContext } from "../../context/loginContext";
;
function NavBar() {
  const [clicked, setClicked] = useState(false);
  const isAuthen = useContext(authContext);
  const Logged = isAuthen.isLoggend;
  const token = isAuthen.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  
  const [role, setRole] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    setRole( localStorage.getItem("role"));

  }
  , [Logged]);
  useEffect(() => {
  if(role==="user"){

    axios.get("http://localhost:3000/api/users/getMe"||"http://localhost:3000/api/doctors/getMe", config)
  .then((response) => {
    setName(response.data.data.user.name||response.data.data.doctor.name) 
    console.log(`Name: ${name}`);
  })
  .catch((error) => {
    console.error(error);
  });
  
  }else if(role==="doctor"){
    
    axios.get("http://localhost:3000/api/doctors/getMe", config)
  .then((response) => {
    setName(response.data.data.doctor.name) 
    console.log(`Name: ${name}`);
  })
  .catch((error) => {
    console.error(error);
  });
  
  }
  }
  

  , [Logged,role]);


  const handleLogout=()=>{
    isAuthen.logout();
    localStorage.removeItem('role');

  }
  const handleClick = () => {
    setClicked(!clicked);
  };
if(Logged){
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
      
     
      <Link to="/" className="nav-links">
      <div onClick={handleLogout} className="logout-btn">
        <i className="fa-solid fa-user"></i>
        <span>Log out</span>
      </div>
    </Link>
    {role==="user"&&<Link to="/homeUser/MyProfile" className="nav-links">
      <div >
        <i className="fa-solid fa-user"></i>
        <span>{name}</span>
      </div></Link>}
      {role==="doctor"&&<Link to="/homeDoctor" className="nav-links">
      <div >
        <i className="fa-solid fa-user"></i>
        <span>{name}</span>
      </div>
    </Link>}
    {role==="admin"&& <Link to="/admin" className="nav-links">
      <div >
        <i className="fa-solid fa-user"></i>
        <span>admin</span>
      </div>
    </Link>}
  
     </ul>
              {/* <button onClick={()=>{isAuthen.logout();}} className="btn"> */}

   </nav>
  );
}else{

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










// import React, { useContext,useState,useEffect } from "react";
// import "./NavBar.css";
// import { Link } from "react-router-dom";
// import { MenuItems } from "./MenuItems";


// import { authContext } from "../../context/loginContext";
// ;
// function NavBar() {
//   const [clicked, setClicked] = useState(false);
//   const isAuthen = useContext(authContext);
//   const Logged = isAuthen.isLoggend;
//   const [role, setRole] = useState();
//   useEffect(() => {
//     setRole( localStorage.getItem("role"));
//   }
//   , [Logged]);
//   const handleLogout=()=>{
//     isAuthen.logout();
//     localStorage.removeItem('role');

//   }
//   const handleClick = () => {
//     setClicked(!clicked);
//   };
// if(Logged){
//   return (
   
//      <nav className="NavbarItems">
//      <h1 className="navbar-logo"> Health Haven</h1>
//      <div className="menu-icons" onClick={handleClick}>
//        <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
//      </div>
//      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
//        {MenuItems.map((item, index) => {
//          return (
//            <li key={index}>
//              <Link to={item.url} className={item.cName}>
//                <i className={item.icon}></i>
//                {item.title}
//              </Link>
//            </li>
//          );
//        })}
      
     
//       <Link to="/" className="nav-links">
//       <div onClick={handleLogout} className="logout-btn">
//         <i className="fa-solid fa-user"></i>
//         <span>Log out</span>
//       </div>
//     </Link>
//     {role==="user"&&<Link to="/homeUser/MyProfile" className="nav-links">
//       <div >
//         <i className="fa-solid fa-user"></i>
//         <span>user home</span>
//       </div></Link>}
//       {role==="doctor"&&<Link to="/homeDoctor" className="nav-links">
//       <div >
//         <i className="fa-solid fa-user"></i>
//         <span>doctor home</span>
//       </div>
//     </Link>}
//     {role==="admin"&& <Link to="/admin" className="nav-links">
//       <div >
//         <i className="fa-solid fa-user"></i>
//         <span>admin home</span>
//       </div>
//     </Link>}
  
//      </ul>
//               {/* <button onClick={()=>{isAuthen.logout();}} className="btn"> */}

//    </nav>
//   );
// }else{

//   return (
//     <nav className="NavbarItems">
//     <h1 className="navbar-logo"> Health Haven</h1>
//     <div className="menu-icons" onClick={handleClick}>
//       <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
//     </div>
//     <ul className={clicked ? "nav-menu active" : "nav-menu"}>
//       {MenuItems.map((item, index) => {
//         return (
//           <li key={index}>
//             <Link to={item.url} className={item.cName}>
//               <i className={item.icon}></i>
//               {item.title}
//             </Link>
         
//           </li>
//         );
//       })}
//       <Link to="/login" className="nav-links">
         
//          <i className="fa-solid fa-user"></i>Log in
       
//      </Link>
//        <Link to="/signup" className="nav-links">
         
//            <i className="fa-solid fa-user"></i>Sign Up
         
//        </Link>
       
   
//     </ul>
//   </nav>
//   );

 
// }
 
// }

// export default NavBar;
