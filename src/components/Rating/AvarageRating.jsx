import axios from "axios";
import { useEffect, useState } from "react";
import "./styleAvg.css";
const AvergeRating = (props) => {
    const {DoctorsId}=props;
    let [averageRating, setAverRating] = useState(0);
    let idealStar=0
    useEffect(() => {
      if (DoctorsId) {
        axios
          .get(`/rateDoctor/${DoctorsId}`)
          .then((res) => {
            setAverRating(res.data.rate) })
        }
    }, [DoctorsId]);
    return (
      <div className="star-rating" >
        {
        [...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button id="rateID"
              type="button"
              key={index}
              className={index <= (averageRating || idealStar) ? "on" : "off"}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
  export default AvergeRating;