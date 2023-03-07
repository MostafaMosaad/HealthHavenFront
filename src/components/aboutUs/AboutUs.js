import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./aboutus.css";
import { Link } from "react-router-dom";
import { textAlign } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper";
export default function AboutUs() {
  return (
    <>
      <div id="imgDiv">
        <img id="IMG" src={process.env.PUBLIC_URL + "/Imges/AboutUs.jpg"} />
      </div>
      <Container>
        <Row className="mb-5">
          <Col xs={3} md={3}>
            <p className="parID">
              <Link to="/" className="link">
                <sapn id="spanID">Health Haven </sapn>{" "}
              </Link>
              is a wellness center dedicated to helping people achieve optimal
              health and well-being. Our team of highly trained professionals
              offers a range of services, including dental care, cardiliogy
              therapy, acupuncture, and nutritional counseling.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>

            <div id="DivCard">
              <h2 id="cardTitle"> Our mission</h2>
              <div id="cardText">
                Providing easy and fast health care for individuals and various other elaborate services.
                <br></br>
                If you have any questions or would like to learn more about our services,
                please don't hesitate to  <Link to="/contactus">
                  <sapn >contact us </sapn>
                </Link>
              </div>
            </div>

            <div id="DivCard">
              <h2 id="cardTitle"> Our Story </h2>
              <div id="cardText">
                We are a team of 5 scholars in the Information Technology Institute, and this website is our graduation project.
                Our aim is to address a common issue in our society - people losing their scan reports or doctor's descriptions,
                and having to wait in long lines to attain their prescribed medicines. To tackle this problem, we have created a
                personal health companion - a website that helps individuals keep track of their personal health, book appointments
                with doctors, and obtain approval for their scans and medicines from specific places to avoid long waiting times.
                Our goal is to make healthcare more accessible and convenient for everyone, and we are excited to bring this project to life.
              </div>
            </div>
            <div id="DivCard">
              <h2 id="cardTitle">Meet The Team </h2>
              <br/>

              <Swiper className=" mySwiperd-flex flex-wrap"
                slidesPerView={5}
                spaceBetween={50}
                freeMode={true}
                modules={[Pagination, FreeMode, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
              >

<SwiperSlide>
                  <div>
                    <a href="https://www.linkedin.com/in/shimaa-hamdy-17b850208/">
                    <img src="https://drive.google.com/uc?export=view&id=1ht3rHKlC1LftR2Rewnv3U1eNE34oDV5j"  alt="description2" />
                    </a>
                    <p class="text-center mt-2 ">Shimaa Hamdy</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <a href="https://www.linkedin.com/in/youssef-hossam/">
                    <img src="https://drive.google.com/uc?export=view&id=1yssTzCONSCfwLWaRcWfpCMVdE7C9Jyz2"  alt="description2" />
                    </a>
                    <p class="text-center mt-2">Youssef Hosaam</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <a href="https://www.linkedin.com/in/mostafamosaadd/">
                    <img src="https://drive.google.com/uc?export=view&id=1yx51yhCGf28LGilB-ufSmWMU0GzJc71I"  alt="description2" />
                    </a>
                    <p class="text-center mt-2">Mostafa Mosaad</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <a href="https://www.linkedin.com/in/yousef-elhalafawy-95536620b/">
                    <img src="https://drive.google.com/uc?export=view&id=18_mmV_otXZmFvc51j-94IAf-15Z8vvIN"  alt="description2" />
                    </a>
                    <p class="text-center mt-2">Youssef Mohamed</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <a href="https://www.linkedin.com/in/nagham-reda-a56b05223/">
                    <img src="https://drive.google.com/uc?export=view&id=12ZdA-92dfTjPRBhfrUUlK3l3M9JzA7Uc"  alt="description2" />
                    </a>
                    <p class="text-center mt-2">Nagham Reda</p>
                  </div>
                </SwiperSlide>
                
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
