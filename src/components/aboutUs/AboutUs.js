import { Link } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./aboutus.module.css";
import MissionCard from "./MissionCard";
import StoryCard from "./StoryCard";
import Team from "./Team";
import { useTranslation } from 'react-i18next';
export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <div>
      <img
  className={style["IMG"]}
  src={
    "https://drive.google.com/uc?export=view&id=1MVp4GZV5HW63w88o-XGXHpblmrO0HaMT"
  }
  alt="Health Haven logo"
/>
      </div>
      <Container>
        <Row className="mb-5">
          <Col xs={3} md={3}>
            <p className={style["parID"]}>
              <Link to="/" className={style["link"]}>
                <span>Health Haven</span>
              </Link>{" "}
              {t("wellnessCenter")}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <MissionCard />
            <StoryCard />
            <Team />
          </Col>
        </Row>
      </Container>
   </>
   );
}