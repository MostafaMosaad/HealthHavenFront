import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row } from "react-bootstrap";

// Import Swiper styles
import style from './labs.module.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useTranslation } from 'react-i18next';

// import required modules

import  SwiperCore,{ Pagination, FreeMode, Autoplay, Navigation } from "swiper";

SwiperCore.use([Pagination, FreeMode, Autoplay, Navigation]);

export default function Labs() {
  const { t } = useTranslation();
    const labs = [
        {
          id: 1,
          url: "https://www.almokhtabar.com/",
          alt: "description1",
          src: "https://drive.google.com/uc?export=view&id=1vzLBPnHjjojbvda2a-PrXB1zgk3gWQrv",
        },
        {
          id: 2,
          url: "https://www.alfalaboratory.com/",
          alt: "description2",
          src: "https://drive.google.com/uc?export=view&id=1FI4Qf7jhVIanhETtJ558zeA-r7fQfnuX",
        },
        {
          id: 3,
          url: "https://www.cairoscan.com.eg/",
          alt: "description3",
          src: "https://drive.google.com/uc?export=view&id=1SHlih7jGrMtKN9hPKu8wGF-rwypx_Hsj",
        },
        {
          id: 4,
          url: "https://lab-supply.net/",
          alt: "description4",
          src: "https://drive.google.com/uc?export=view&id=1FLl_Rj2cfKBCkVYmIDazU3028aauKO8O",
        },
        {
          id: 5,
          url: "http://www.royal-lab.net/",
          alt: "description5",
          src: "https://drive.google.com/uc?export=view&id=1ZvXB0BhVy5ADGH9xxgdcq5FTfwSVdfPg",
        },
        {
          id: 6,
          url: "https://www.citylab-eg.com/?q=en/Home",
          alt: "description6",
          src: "https://drive.google.com/uc?export=view&id=1ZSSgWnZwp37e6_fLwey6Umza5zHg0DP0",
        },
      ];
  return (
    
    <>
       <Container>
        <Row>
          <Row className={style["head"]}>
          <h1>{t("labsTitle")}</h1>
          </Row>
          <Row className={style["body"]}>

          <h4>{t("labsDescription")}</h4>
          </Row>
          <Row>
          <Swiper
        slidesPerView={4}
        spaceBetween={60}
        freeMode={true}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, FreeMode,Autoplay, Navigation]}
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
        {labs.map((lab) => (
          <SwiperSlide key={lab.id}>
            <a href={lab.url}>
              <img src={lab.src} alt={lab.alt} />
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