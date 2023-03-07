import * as React from "react";

import { Card,Row } from "react-bootstrap";
import "./news.css";

export default function News() {
  return (
    <> 
      <div className="news-tips m-5">
        <h3>News and Tips</h3>
        <p>Here is some news and tips.</p>
      </div>
      <br></br>
      <Row
      className="RowStyle"
        xs={1}
        md={2}
        lg={3}
        style={{ display: "flex", justifyContent: "Space-evenly" }}
      >
        <Card style={{ width: "24rem",background: "rgb(238, 242, 242)" }} className=" my-3">
          <Card.Img
            variant="top"
            src="https://heartstrokeprod.azureedge.net/-/media/images/articles/getty_1047798504_1920x1080.ashx?rev=10f9ef9ef9794e998b5cfe1bd3d60d85&bc=f7f7f7&w=1160&h=653&as=1&la=en&hash=D9C95AA0CDF0CD9503BE1E57B2542B8F"
          />
          <Card.Body className="CardBodyStyle">
            <Card.Title>Limit Unhealthy Foods and Eat Healthy Meals</Card.Title>
            <Card.Text>
              Do not forget to eat breakfast and choose a nutritious meal with
              more protein and fiber and less fat, sugar, and calories.
            </Card.Text>
          </Card.Body>
        </Card>
        

        <Card style={{ width: "24rem" ,background: "rgb(238, 242, 242)"}} className=" my-3">
          <Card.Img
            variant="top"
            src="https://www.cnet.com/a/img/resize/16d13ccca62f266fec2348eca70887af99dbfc5e/hub/2020/12/11/131a74bb-f0e9-4819-9241-7035ee5d6366/gettyimages-674387919.jpg?auto=webp&fit=crop&height=675&width=1200"
          />
          <Card.Body className="CardBodyStyle">
            <Card.Title>Lower Your Risk of Heart Disease</Card.Title>
            <Card.Text>
              Take a daily walk , Keep stress levels low, Prioritize sleep ,
              Quit smoking , Eat heart-healthy foods.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "24rem",background: "rgb(238, 242, 242)" }} className=" my-3">
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5eH98HFxuSneCx5PyrJ_7XXwCs6e6AaLQA&usqp=CAU" />
          <Card.Body className="CardBodyStyle">
            <Card.Title>Vitamin C</Card.Title>
            <Card.Text>
              Vitamin C plays a role in controlling infections and healing
              wounds, and is a powerful antioxidant that can neutralize harmful
              free radicals.
            </Card.Text>
          </Card.Body >
        </Card>
      </Row>
    </>
  );
}
