import React, { useEffect, useState ,useContext} from 'react';
import Carousel from "react-bootstrap/Carousel";
import "./main.css";
import axios from 'axios';
import { Container, Card, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import News from '../News/News';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper";
import AvergeRating from './../Rating/AvarageRating';
import { useTranslation } from 'react-i18next';
import { authContext } from "../../context/loginContext";


const API_URL = '/doctors';

const Main = () => {
  const isAuthen = useContext(authContext);
  const Logged = isAuthen.isLoggend;

  const { i18n } = useTranslation();
  const [doctors, setDoctors] = useState([]);
  const [filter, setfilter] = useState([]);
  const [category, setMajor] = useState("");
  const handleChange2 = (event) => {
    setMajor(event.target.value)
    setfilter(AddFilter(event.target.value))
  }
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setDoctors(response.data.data.doctors);
        setfilter(response.data.data.doctors)

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const AddFilter = (category) => {
    if (category === "All") {
      return doctors;
    } else {
      let filteredDoctors = doctors.filter(doctor => doctor.category === category);
      return filteredDoctors;
    }
  }
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img

            className="d-block allimgs"
src="/Imges/labs.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="captionText">{i18n.t("1Caption")}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img

            className="d-block allimgs "
src="/Imges/lab.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="captionText">{i18n.t("2Caption")}</h2>
            <h3 className="captionText">{i18n.t("22Caption")}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img

            className="d-block allimgs"
src="/Imges/hospitals.jpg"
            alt="Third slide"
          />
          <div>
            <Carousel.Caption>
              <h2 className="captionText">{i18n.t("3Caption")}</h2>
              <h3 className="captionText">{i18n.t("33Caption")}</h3>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <span style={{ textAlign: "left", fontFamily: "'Noto Sans', sans-serif", color: "rgba(32,21,79,255)", fontSize: "20pt" }}><i className="fa-solid fa-calendar-plus"></i></span>
        <select id="selectOpt" style={{ marginLeft: "3rem" }}
          name="Category"
          value={category}
          onChange={handleChange2}
        >
          <option value="" disabled>{i18n.t("Choose specialty")}</option>
          <option value="All">{i18n.t("All")}</option>
          <option value="Skin">{i18n.t("Skin")}</option>
          <option value="Teeth">{i18n.t("Teeth")}</option>
          <option value="Child">{i18n.t("Child")}</option>
          <option value="Brain and Nerves">{i18n.t("Brain and Nerves")}</option>
          <option value="Bones">{i18n.t("Bones")}</option>
          <option value="Ear, Nose and Throat">{i18n.t("Ear, Nose and Throat")}</option>
          <option value="Heart">{i18n.t("Heart")}</option>
          <option value="Nutritionist">{i18n.t("Nutritionist")}</option>

        </select>
      </div>
 <Swiper style={{ marginTop: "8rem", paddingLeft: "2rem", paddingRight: "2rem" }}
        slidesPerView={3}
        spaceBetween={50}
        freeMode={true}
        modules={[Pagination, FreeMode, Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        className="mySwiper"
      >
        {filter?.map((doc) => (
          <SwiperSlide>
            <Col  key={doc._id}  >
              <div>
              <Card className="h-100 Doctor-card w-sm-100" style={{ background: "rgb(238, 242, 242)" }}>
                <Card.Body>
                  <Card.Title>{doc.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{doc.email}</Card.Subtitle>
                  <Card.Text>
                    <div className="mt-4 mb-2 "><strong>{i18n.t("Phone")}:</strong> {doc.phone}</div>
                    <div className="mb-2"><strong>{i18n.t("Address")}:</strong> {doc.address}</div>
                    <div className="mb-2"><strong>{i18n.t("Major")}:</strong>{i18n.t(`${doc.major}`)}</div>
                    <div className="mb-2"><strong>{i18n.t("Category")}:</strong>{i18n.t(`${doc.category}`)}</div>
                    <AvergeRating DoctorsId={doc._id}></AvergeRating>
                   
                      {Logged? <Link to="/homeUser/MyProfile/Doctors" className="nav-links">
                      <i className="fa-solid fa-user"></i>{i18n.t("Book")}</Link>: 
                      <Link to="/login" className="nav-links">
                      <i className="fa-solid fa-user"></i>{i18n.t("Book")}</Link>}
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </Col>

          </SwiperSlide>
        ))}
      </Swiper>
      <News />
      <Container className="my-5">
        <div className="video-wrapper text-center">
          <iframe
            title="YouTube Video Player"
            width="70%"
            height="512"
            src="https://www.youtube.com/embed/lytj_vhzsA8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </>
  );
};
export default Main;
