import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
const StarRating = (props) => {
    const {DoctorsId}=props;
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    let  Stars = Array(5);

    const handleRating=()=> 
    {
        setHover(rating)
    }
        let token=localStorage.getItem("userToken");
        useEffect(() => {
            if(rating)
            {
            axios.post(`/rateDoctor`,
            {rating,Doctors:DoctorsId},
            {
              headers:{
                Authorization:`Bearer ${token}`
              }
            })
              .then()
          }},[rating,DoctorsId]);
    return (
      <div className="star-rating" >
        {
        [...Stars].map((star, index) => {
          index += 1;
          return (
            <button id="NormalRateID"
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() =>
                { 
                    setRating(index);
                }}
              onMouseEnter={() =>
                { setHover(index)
                }}
              onMouseLeave={handleRating}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
  export default StarRating;
