import React from "react";
import "./Hospitals.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper";

function Hospitals() {
    return (
        <>
            <div className="container py-2">
                <div className="row">
                    <div className="col-12">
                        <h1
                            className="text-uppercase font-weight-bold mb-4 hospitals-heading"
                            onMouseEnter={() => {
                                document.querySelector('.hospitals-description').style.opacity = 1;
                                document.querySelector('.hospitals-heading').style.fontSize = '4rem';
                            }}
                            onMouseLeave={() => {
                                document.querySelector('.hospitals-description').style.opacity = 0.7;
                                document.querySelector('.hospitals-heading').style.fontSize = '3rem';
                            }}
                        >
                            Hospitals
                        </h1>
                    </div>
                    <div className="col-12">
                        <h5 className="text-secondary mb-4 hospitals-description">
                            We are proud to have a number of prestigious hospitals as our clients. By choosing to partner with us,
                            these hospitals have made it possible for patients to enjoy special discounts when seeking medical treatment.
                            These hospitals are renowned for their high standards of care and state-of-the-art facilities, and we are thrilled
                            to offer our clients the opportunity to receive top-quality medical care at a discounted rate.
                        </h5>
                    </div>
                </div>
            </div>
            
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                modules={[Pagination, FreeMode, Autoplay, Navigation]}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="http://www.ganzourihospital.com/"> <img src="https://drive.google.com/uc?export=view&id=1FGTRi-ToDnGizJCQMvmuzlg2a4jKDhly" alt="description1" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.daralfouad.org/__best-hospital-in-egypt-vision"> <img src="https://drive.google.com/uc?export=view&id=1LKDnlBX52cHAWL0HRGvtsvvuPXVSWIF-" alt="description2" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="http://www.ac-medicalcenter.com/newWeb/medicalcenter-EN/index.html"> <img src="https://drive.google.com/uc?export=view&id=1qA6H8_qbMdU16xL2PhApqE4XmNm5E3bl" alt="description3" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="http://eyecairo.net/"> <img src="https://drive.google.com/uc?export=view&id=1t26Q_yzUXKKFbwqTHw_ToVKVMI7RQoSI"alt="description4" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="http://weqaya-hospital.com/"> <img src="https://drive.google.com/uc?export=view&id=1bQlYbHojihzTMat5mulgs0UkL0wMgX_D" alt="description5" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.cleopatrahospitals.com/"> <img src="https://drive.google.com/uc?export=view&id=157Fe-N601rfFkEEjfhe5QGDB6zW5FeAX" alt="description6" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="http://misrhospital.org/"> <img src="https://drive.google.com/uc?export=view&id=17ZIllCrneAc_iGLZmR05TJHojoLalK9V" alt="description7" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://sghcairo.net/ar/contact-us/"> <img src="https://drive.google.com/uc?export=view&id=1dsBZrPmXcD2ddmECM3YBRwuZiC159xXp" alt="description8" /></a>
                </SwiperSlide>
            </Swiper>



        </>
    );
}

export default Hospitals;