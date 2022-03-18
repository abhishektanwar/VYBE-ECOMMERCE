import React from "react";
import CardSlider from "../../components/CardSlider";
import CategoryCard from "../../components/CategoryCard";
import FeaturedContainer from "../../components/FeaturedContainer";
import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
import "./home.css";
const Home = () => {
  return (
    <>
      {/* <nav className="nav-bar shadow-box" id="my-nav-bar">
        <Header />
      </nav> */}
      <ImageSlider sliderData={SliderData} />
      <FeaturedContainer featuredContainerTitle={'Featured Categories'} />

      <div style={{ display: "flex", justifyContent: "space-around" }} className="margin-top-60">
        <CardSlider slides={[1,2,3,4,5,6,7,8]} />
      </div>
    </>
  );
};

export default Home;