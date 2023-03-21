import style from "./Hospitals.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row } from "react-bootstrap";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useTranslation } from 'react-i18next';

import SwiperCore, { Pagination, FreeMode, Autoplay, Navigation } from "swiper";

SwiperCore.use([Pagination, FreeMode, Autoplay, Navigation]);

function Hospitals() {
  const { t } = useTranslation();
  const slides = [
    {
      image:
        "https://drive.google.com/uc?export=view&id=1FGTRi-ToDnGizJCQMvmuzlg2a4jKDhly",
      alt: "description1",
      link: "http://www.ganzourihospital.com/",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1LKDnlBX52cHAWL0HRGvtsvvuPXVSWIF-",
      alt: "description2",
      link: "https://www.daralfouad.org/__best-hospital-in-egypt-vision",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1qA6H8_qbMdU16xL2PhApqE4XmNm5E3bl",
      alt: "description3",
      link: "http://www.ac-medicalcenter.com/newWeb/medicalcenter-EN/index.html",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1t26Q_yzUXKKFbwqTHw_ToVKVMI7RQoSI",
      alt: "description4",
      link: "http://eyecairo.net/",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1bQlYbHojihzTMat5mulgs0UkL0wMgX_D",
      alt: "description5",
      link: "http://weqaya-hospital.com/",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=157Fe-N601rfFkEEjfhe5QGDB6zW5FeAX",
      alt: "description6",
      link: "https://www.cleopatrahospitals.com/",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=17ZIllCrneAc_iGLZmR05TJHojoLalK9V",
      alt: "description7",
      link: "http://misrhospital.org/",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1dsBZrPmXcD2ddmECM3YBRwuZiC159xXp",
      alt: "description8",
      link: "https://sghcairo.net/ar/contact-us/",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <Row className={style["head"]}>
          <h1>{t("hospitals")}</h1>
          </Row>
          <Row className={style["body"]}>
          <h4>{t("proudToHave")}</h4>
          </Row>
          <Row>
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              freeMode={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {slides.map((hospital) => (
                <SwiperSlide key={hospital.alt}>
                  <a href={hospital.link}>
                    <img src={hospital.image} alt={hospital.alt} />
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

export default Hospitals;