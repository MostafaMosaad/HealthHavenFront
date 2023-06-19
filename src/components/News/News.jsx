import React from "react";
import NewsTips from "./NewsAndTips";
import NewsCard from "./NewsCard";
import { Row } from "react-bootstrap";
import style from "./news.module.css";
import { useTranslation } from 'react-i18next';




export default function News() {
  const { i18n } = useTranslation();
const newsItems = [
  {
    imgSrc:
      "https://www.istockphoto.com/photo/healthy-food-for-lower-cholesterol-and-heart-care-shot-on-wooden-table-gm1279763992-378262118",
    title: i18n.t("Limit"),
    text: i18n.t("LimitCaption")
  },
  {
    imgSrc:
      "https://www.cnet.com/a/img/resize/16d13ccca62f266fec2348eca70887af99dbfc5e/hub/2020/12/11/131a74bb-f0e9-4819-9241-7035ee5d6366/gettyimages-674387919.jpg?auto=webp&fit=crop&height=675&width=1200",
    title: i18n.t("Lower"),
    text: i18n.t("LowerCaption")
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5eH98HFxuSneCx5PyrJ_7XXwCs6e6AaLQA&usqp=CAU",
    title:i18n.t("Vitamin"),
    text: i18n.t("VitaminCaption")
  }
];
  return (
    <>
      <NewsTips />
      <br />
      <Row className={style['RowStyle']} xs={1} md={2} lg={3}>
        {newsItems.map((item, index) => (
          <NewsCard key={index} imgSrc={item.imgSrc} title={item.title} text={item.text} />
        ))}
      </Row>
    </>
  );
}
