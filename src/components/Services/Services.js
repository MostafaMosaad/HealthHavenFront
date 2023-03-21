import React from "react";
import style from "./Services.module.css";
// import "./Services.css";
import Hospitals from "./Hospitals/Hospitals";
import Pharmacies from "./Pharmacies/pharmacies";
import Labs from "./Labs/labs";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div >
     
        <Container>
          <Row>
            <Col
              xs={12}
              md={6}
              className={`d-flex justify-content-center align-items-center ${style["ServText"]}`}
            >
              <div>
                <h1 className="mb-5">{t("ourServices")}</h1>
                <div>
                  <p>
                  {t("medicationAndTreatment")}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Image
                src={process.env.PUBLIC_URL + "/Imges/Doc.png"}
                className={style["image"]}
                fluid
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
    </>
  );
}
export default Services;