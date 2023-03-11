import React from "react";
import Style from"./aboutus.module.css";

function StoryCard() {
    return (
      <div className={Style["DivCard"]}>
        <h2 className={Style["cardTitle"]}> Our Story </h2>
        <p className={Style["cardText"]}>
          We are a team of 5 scholars in the Information Technology Institute,
          and this website is our graduation project. Our aim is to address a
          common issue in our society - people losing their scan reports or
          doctor's descriptions, and having to wait in long lines to attain their
          prescribed medicines. To tackle this problem, we have created a personal
          health companion - a website that helps individuals keep track of their
          personal health, book appointments with doctors, and obtain approval for
          their scans and medicines from specific places to avoid long waiting
          times. Our goal is to make healthcare more accessible and convenient for
          everyone, and we are excited to bring this project to life.
        </p>
      </div>
    );
  }

  export default StoryCard;