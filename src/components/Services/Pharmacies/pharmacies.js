import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import style from"./pharmacies.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

// import required modules
import  SwiperCore,{ Pagination, FreeMode, Autoplay, Navigation } from "swiper";

SwiperCore.use([Pagination, FreeMode, Autoplay, Navigation]);
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
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Row>
          <Row className={style["head"]}>
          <h1>{t("pharmacies")}</h1>
          </Row>
          <Row className={style["body"]}>
          <h4>{t("pharmaciesDescription")}</h4>
          </Row>
          <Row>
            <Swiper
              slidesPerView={4}
              spaceBetween={60}
              freeMode={true}
              modules={[Pagination, FreeMode,Autoplay, Navigation]}
              Autoplay={{delay :3000}}
              pagination={{ clickable: true }}
              navigation
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
                  slidesPerView: 4,
                  spaceBetween: 40
                }
              }}
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