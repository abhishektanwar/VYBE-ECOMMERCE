import React from "react";
import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";

const Home = () => {
  return (
    <>
    <nav className="nav-bar shadow-box" id="my-nav-bar">
      <Header />
    </nav>
    <ImageSlider sliderData={SliderData} />
    </>
  );
};

export default Home;
