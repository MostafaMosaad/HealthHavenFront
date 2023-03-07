import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper";
import './labs.css';

export default function App() {
  return (
    <>
      <h3>Labs</h3>
      <h5>Our lab partners offer top-quality services to our clients. With a focus on accuracy and efficiency, they provide a range of diagnostic tests and screenings to help patients get the care they need. And as part of our commitment to making healthcare more accessible, we've partnered with these labs to offer exclusive discounts to our clients.</h5>
      <br />
      <br />
      <Swiper
                slidesPerView={5}
                spaceBetween={50}
                freeMode={true}
                modules={[Pagination, FreeMode, Navigation]}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="https://www.almokhtabar.com/"> <img src="https://drive.google.com/uc?export=view&id=1vzLBPnHjjojbvda2a-PrXB1zgk3gWQrv" alt="description1" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.alfalaboratory.com/"> <img src="https://drive.google.com/uc?export=view&id=1FI4Qf7jhVIanhETtJ558zeA-r7fQfnuX" alt="description2" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.cairoscan.com.eg/"> <img src="https://drive.google.com/uc?export=view&id=1SHlih7jGrMtKN9hPKu8wGF-rwypx_Hsj" alt="description3" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://lab-supply.net/"> <img src="https://drive.google.com/uc?export=view&id=1FLl_Rj2cfKBCkVYmIDazU3028aauKO8O" alt="description4" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="http://www.royal-lab.net/"> <img src="https://drive.google.com/uc?export=view&id=1ZvXB0BhVy5ADGH9xxgdcq5FTfwSVdfPg" alt="description5" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.citylab-eg.com/?q=en/Home"> <img src="https://drive.google.com/uc?export=view&id=1ZSSgWnZwp37e6_fLwey6Umza5zHg0DP0" alt="description6" /></a>
                </SwiperSlide>
            </Swiper>
    </>
  );
}
