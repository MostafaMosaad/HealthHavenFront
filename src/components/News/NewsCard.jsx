import St from'./news.module.css'
import { Card} from "react-bootstrap";

export default function NewsCard({ imgSrc, title, text }) {
    return (
      <Card style={{ width: "24rem", background: "rgb(238, 242, 242)" }} className="my-3">
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body className={St["CardBodyStyle"]}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }