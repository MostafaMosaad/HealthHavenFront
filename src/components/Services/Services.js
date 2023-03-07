import React from "react";

import "./Services.css";
import Hospitals from "./Hospitals/Hospitals";
import Pharmacies from "./Pharmacies/pharmacies";
import Labs from "./Labs/labs";


function Services() {
  return (
    <div style={{padding:"25px"}}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Hospitals></Hospitals>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Labs></Labs>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Pharmacies></Pharmacies>
      <br />
      <br />
      <br />
      <br />



    </div>
  );
}
export default Services;
