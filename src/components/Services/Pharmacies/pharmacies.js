import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper";
import './pharmacies.css';

export default function App() {
    return (
        <>
            <h3>Pharmacies</h3>
            <h5>We also partner with several pharmacies to offer discounts to our clients. Our clients can save money on their prescriptions by visiting one of our affiliated pharmacies. We have carefully selected pharmacies that offer high-quality products and excellent customer service. By using our services, our clients can access a network of reliable pharmacies that offer competitive pricing and discounts on a wide range of medications. </h5>
            <br />
            <br />
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                freeMode={true}
                modules={[Pagination, FreeMode, Autoplay, Navigation]}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                className="mySwiper"
            >

                <SwiperSlide>

                    <a href="https://misr-online.com/">

                        <img src="https://drive.google.com/uc?export=view&id=1hx2mDPnDyPoYuNuMvLdL6TzFRBBi3yxl" alt="description1" />

                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://elezabypharmacy.com/"> <img src="https://drive.google.com/uc?export=view&id=1o5Bf2rEuiHUFYvb1ogrT28NEsReDqBnM" alt="description2" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://seif-online.com/"> <img src="https://drive.google.com/uc?export=view&id=1os-IQTYBaagPCZ3aube0T51wRXVS05hC" alt="description3" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://alamalpharmacy.com/"> <img src="https://drive.google.com/uc?export=view&id=1pYUMbPMUfBDh2W-pQzsiZCU7Ih5lDKQi" alt="description3" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.nilepharmacy.com/"> <img src="https://drive.google.com/uc?export=view&id=1RkJNiZ9F8tZnc9Vga6v3GrpYEV1Lraig" alt="description3" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://dawaya.com/"> <img src="https://drive.google.com/uc?export=view&id=1BYN8EdwZbGlC7kVrbB6ms3YlG-zKJhJk" alt="description3" /></a>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
