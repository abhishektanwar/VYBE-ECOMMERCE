import React, { useEffect, useState } from "react";
import BadgeIconButton from "../Header/BadgeIconButton";
import "./image-slider.css";

const ImageSlider = (props) => {
  const {sliderData} = props;
  const [current, setCurrent] = useState(0);

  // TODO fix me
  // useEffect(()=>{
  //   const clearInterval=setInterval(()=>{
  //     setCurrent(current === length-1 ? 0 : current + 1)
  //   },4000);
  //   return ()=> {
  //     clearInterval();
  //   }
  // },[current])

  const nextSlide = () => {
    setCurrent(current === sliderData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderData.length - 1 : current - 1);
  };

  // either passed data is not an array or no items in array
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <section className="slider-container margin-top-60">
      <BadgeIconButton
        badgeIconButtonWrapper="left-arrow"
        icon={"fas fa-arrow-left"}
        onClick={prevSlide}
      />
      <BadgeIconButton
        badgeIconButtonWrapper="right-arrow"
        icon={"fas fa-arrow-right"}
        onClick={nextSlide}
      />

      {sliderData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={slide.image}
                alt="hero-image"
                className="slider-image responsive-image image-container"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
