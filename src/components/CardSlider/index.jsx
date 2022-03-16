import React, { useRef } from 'react'
import BadgeIconButton from '../Header/BadgeIconButton'
import ProductCard from '../ProductCard';
import './card-slider.css'

const CardSlider = (props) => {
  const {slides} = props;
  const imageUrl='https://picsum.photos/200/300';
  const ref=useRef(null);

  const slideLeft = () =>{
    ref.current.scrollLeft -= 200;
  }
  const slideRight = () =>{
    ref.current.scrollLeft += 200;
  }

  return (
    <section className="main-slider-container">
      <BadgeIconButton
        badgeIconButtonWrapper="left-arrow"
        icon={"fas fa-arrow-left"}
        onClick={slideLeft}
      />
      <BadgeIconButton
        badgeIconButtonWrapper="right-arrow"
        icon={"fas fa-arrow-right"}
        onClick={slideRight}
      />
      <div className="card-slider" ref={ref} >
        {[1,2,3,4,5,6,7,8].map((slide,index)=>{
          return (
            // <div className="slider-card">

            // </div>
            <ProductCard imagePath={imageUrl} badgeText={'New Arrival'} title = {'One ear 100 headphones black'} price={1890} actualPrice={2099} discountPercentage={10} />
          )
        })}
      </div>
    </section>
  )
}

export default CardSlider
