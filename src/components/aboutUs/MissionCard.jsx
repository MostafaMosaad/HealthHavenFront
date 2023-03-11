import React from "react";
import { Link } from "react-router-dom";
import st from"./aboutus.module.css";

function MissionCard() {
  return (
    <div className={st["DivCard"]}>
      <h2  className={st["cardTitle"]}> Our mission</h2>
      <p className={st["cardText"]}>
        Providing easy and fast health care for individuals and various other
        elaborate services.
        <br />
        If you have any questions or would like to learn more about our
        services, please don't hesitate to{" "}
        <Link to="/contactus">
          <span>contact us</span>
        </Link>
      </p>
    </div>
  );
}

export default MissionCard;