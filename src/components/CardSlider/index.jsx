import React, { useRef } from 'react'
import BadgeIconButton from '../Header/BadgeIconButton'
import ProductCard from '../ProductCard';
import './card-slider.css'

const CardSlider = (props) => {
  const {products} = props;
  const featuredProducts = products.filter(product=>product.featured)
  const ref=useRef(null);
  console.log("ref",ref);
  const slideLeft = () =>{
    console.log("slide",ref);
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
        {featuredProducts.map((product)=>{
          return (
            <div className="slider-card">
            <ProductCard variant="vertical" cartActionBtnContainer={false} product={product} key={product._id} /></div>
          )
        })}
      </div>
    </section>
  )
}

export default CardSlider
