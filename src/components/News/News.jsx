import React from "react";
import NewsTips from "./NewsAndTips";
import NewsCard from "./NewsCard";
import { Row } from "react-bootstrap";
import style from "./news.module.css";

const newsItems = [
  {
    imgSrc:
      "https://heartstrokeprod.azureedge.net/-/media/images/articles/getty_1047798504_1920x1080.ashx?rev=10f9ef9ef9794e998b5cfe1bd3d60d85&bc=f7f7f7&w=1160&h=653&as=1&la=en&hash=D9C95AA0CDF0CD9503BE1E57B2542B8F",
    title: "Limit Unhealthy Foods and Eat Healthy Meals",
    text: "Do not forget to eat breakfast and choose a nutritious meal with more protein and fiber and less fat, sugar, and calories."
  },
  {
    imgSrc:
      "https://www.cnet.com/a/img/resize/16d13ccca62f266fec2348eca70887af99dbfc5e/hub/2020/12/11/131a74bb-f0e9-4819-9241-7035ee5d6366/gettyimages-674387919.jpg?auto=webp&fit=crop&height=675&width=1200",
    title: "Lower Your Risk of Heart Disease",
    text: "Take a daily walk, keep stress levels low, prioritize sleep, quit smoking, eat heart-healthy foods."
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5eH98HFxuSneCx5PyrJ_7XXwCs6e6AaLQA&usqp=CAU",
    title: "Vitamin C",
    text: "Vitamin C plays a role in controlling infections and healing wounds, and is a powerful antioxidant that can neutralize harmful free radicals."
  }
];

export default function News() {
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