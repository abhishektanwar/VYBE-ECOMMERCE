import React from "react";
import CardSlider from "../../components/CardSlider";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
import "./home.css";

const Home = ({showModal,setShowModal}) => {
  return (
    <>
      <ImageSlider sliderData={SliderData} />
      <div className="margin-top-60 slider-card-container">
        <CardSlider slides={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </div>
    </>
  );
};

export default Home;
