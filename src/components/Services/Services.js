import React from "react";
import style from "./Services.module.css";
// import "./Services.css";
import Hospitals from "./Hospitals/Hospitals";
import Pharmacies from "./Pharmacies/pharmacies";
import Labs from "./Labs/labs";
import { Container, Row, Col, Image } from "react-bootstrap";

function Services() {
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
                <h1 className="mb-5">Our Services</h1>
                <div>
                  <p>
                    High-quality medication and swift access to treatment must
                    be provided to all free of cost. There should be no
                    difference in the treatment received by the high-powered and
                    the weakest in the state
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
