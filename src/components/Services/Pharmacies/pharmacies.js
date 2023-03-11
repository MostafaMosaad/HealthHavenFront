import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container, Row } from "react-bootstrap";

// import required modules
import { Pagination, FreeMode,Navigation } from "swiper";
import style from"./pharmacies.module.css";
const pharmacie = [
    {
      id: 1,
      url: "https://misr-online.com/",
      alt: "description1",
      src: "https://drive.google.com/uc?export=view&id=1hx2mDPnDyPoYuNuMvLdL6TzFRBBi3yxl",
    },
    {
      id: 2,
      url: "https://elezabypharmacy.com/",
      alt: "description2",
      src: "https://drive.google.com/uc?export=view&id=1o5Bf2rEuiHUFYvb1ogrT28NEsReDqBnM",
    },
    {
      id: 3,
      url: "https://seif-online.com/",
      alt: "description3",
      src: "https://drive.google.com/uc?export=view&id=1os-IQTYBaagPCZ3aube0T51wRXVS05hC",
    },
    {
      id: 4,
      url: "https://alamalpharmacy.com/",
      alt: "description4",
      src: "https://drive.google.com/uc?export=view&id=1pYUMbPMUfBDh2W-pQzsiZCU7Ih5lDKQi",
    },
    {
      id: 5,
      url: "https://www.nilepharmacy.com/",
      alt: "description5",
      src: "https://drive.google.com/uc?export=view&id=1RkJNiZ9F8tZnc9Vga6v3GrpYEV1Lraig",
    },
    {
      id: 6,
      url: "https://dawaya.com/",
      alt: "description6",
      src: "https://drive.google.com/uc?export=view&id=1BYN8EdwZbGlC7kVrbB6ms3YlG-zKJhJk",
    },
  ];
export default function Pharmacies() {
  return (
    <>
      <Container>
        <Row>
          <Row className={style["head"]}>
            <h1>Pharmacies</h1>
          </Row>
          <Row className={style["body"]}>
            <h4>
              We also partner with several pharmacies to offer discounts to our
              clients. Our clients can save money on their prescriptions by
              visiting one of our affiliated pharmacies. We have carefully
              selected pharmacies that offer high-quality products and excellent
              customer service. By using our services, our clients can access a
              network of reliable pharmacies that offer competitive pricing and
              discounts on a wide range of medications.
            </h4>
          </Row>
          <Row>
            <Swiper
              slidesPerView={5}
              spaceBetween={50}
              freeMode={true}
              modules={[Pagination, FreeMode, Navigation]}
              pagination={{ clickable: true }}
              navigation
            >
              {pharmacie.map((pharmacie) => (
                <SwiperSlide key={pharmacie.id}>
                  <a href={pharmacie.url}>
                    <img src={pharmacie.src} alt={pharmacie.alt} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Row>
      </Container>
    </>
  );
}
