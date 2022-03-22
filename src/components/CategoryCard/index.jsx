import React from "react";
import heroImage1 from '../../assets/images/hero-carousel/hero-image1.webp'
import './category-card.css'
const CategoryCard = (props) => {
  const {categoryTitle} = props;
  return (
    
      <div class="avatar child avatar-lg margin-trb-16">
      <img
        src={heroImage1}
        alt="avatar"
        loading="lazy"
        class="responsive-img circular-img"
      />
      <p className="typo-sm category-title" >
        {categoryTitle}
      </p>
    </div>
    
    
  );
};

export default CategoryCard;
