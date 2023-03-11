import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination, FreeMode, Navigation } from "swiper";
import style from './labs.module.css';

export default function Labs() {
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
            <h1>Labs</h1>
          </Row>
          <Row className={style["body"]}>

          <h4>
          Our lab partners offer top-quality services to our clients. With a
        focus on accuracy and efficiency, they provide a range of diagnostic
        tests and screenings to help patients get the care they need. And as
        part of our commitment to making healthcare more accessible, we've
        partnered with these labs to offer exclusive discounts to our clients.
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
