import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper";
import style from "./aboutus.module.css";
import { useTranslation } from 'react-i18next';


const teamMembers = [
  {
    name: "Shimaa Hamdy",
    linkedin: "https://www.linkedin.com/in/shimaa-hamdy-17b850208/",
    image: "https://drive.google.com/uc?export=view&id=1ht3rHKlC1LftR2Rewnv3U1eNE34oDV5j",
  },
  {
    name: "Youssef Hosaam",
    linkedin: "https://www.linkedin.com/in/youssef-hossam/",
    image: "https://drive.google.com/uc?export=view&id=1yssTzCONSCfwLWaRcWfpCMVdE7C9Jyz2",
  },
  {
    name: "Mostafa Mosaad",
    linkedin: "https://www.linkedin.com/in/mostafamosaadd/",
    image: "https://drive.google.com/uc?export=view&id=1yx51yhCGf28LGilB-ufSmWMU0GzJc71I",
  },
  {
    name: "Youssef Mohamed",
    linkedin: "https://www.linkedin.com/in/yousef-elhalafawy-95536620b/",
    image: "https://drive.google.com/uc?export=view&id=18_mmV_otXZmFvc51j-94IAf-15Z8vvIN",
  },
  {
    name: "Nagham Reda",
    linkedin: "https://www.linkedin.com/in/nagham-reda-a56b05223/",
    image: "https://drive.google.com/uc?export=view&id=12ZdA-92dfTjPRBhfrUUlK3l3M9JzA7Uc",
  },
];

function Team() {
  const { t } = useTranslation();

  return (
    <>

      <div className={style["DivCard"]}>
        <div>
          <h2 className={style["cardTitle"]}>{t("meetTheTeam")}</h2>
          <br/>
          <Swiper
            slidesPerView={5}
            spaceBetween={50}
            freeMode={true}
            modules={[Pagination, FreeMode, Autoplay, Navigation]}
            autoplay={{ delay: 3000 }}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40
              }
            }}
            className="mySwiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.name}>
                <div>
                  <a href={member.linkedin}>
                    <img src={member.image} alt={member.name} />
                  </a>
                  <p className="text-center mt-2">{member.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Team;