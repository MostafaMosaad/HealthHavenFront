import React, { useEffect, useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import "./main.css";
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import News from '../News/News';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper";

const API_URL = 'http://localhost:3000/api/doctors';

const FiltDoc = () => {
  const [doctors, setDoctors] = useState([]);
  const [filter, setfilter] = useState([]);
  const [category, setMajor] = useState("");
  const handleChange2 = (event) => {
    setMajor(event.target.value)
    setfilter(AddFilter(event.target.value))
  }
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setDoctors(response.data.data.doctors);
        setfilter(response.data.data.doctors)

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const AddFilter = (category) => {
    let filteredDoctors = doctors.filter(doctor => doctor.category === category);
    return filteredDoctors
  }
  return (
    <>
     <div  style={{textAlign:"center" ,marginTop:"3rem"}}>
      <span style={{textAlign:"left" ,fontFamily:"'Noto Sans', sans-serif",color:"rgba(32,21,79,255)",fontSize:"20pt" }}><i className="fa-solid fa-calendar-plus"></i> Book a doctor </span>
        <select  id="selectOpt"  style={{marginLeft:"3rem"}}
          name="Category"
          value={category}
          onChange={handleChange2}
          >
            
          <option value="" disabled>Choose specialty</option>         
          <option value="Skin">Skin</option>
          <option value="Teeth">Teeth</option>
          <option value="Child">Child</option>
          <option value="Brain and Nerves">Brain and Nerves</option>
          <option value="Bones">Bones</option>
          <option value="Ear, Nose and Throat">Ear, Nose and Throat</option>
          <option value="Heart">Heart</option>
          <option value="Nutritionist">Nutritionist</option>

        </select> 
        </div>
    </>)
    }
    export  default FiltDoc;