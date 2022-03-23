import React from "react";
import heroImage1 from '../../assets/images/hero-carousel/hero-image1.webp'
import './category-card.css'
const CategoryCard = (props) => {
  const {category} = props;
  return (
    
      <div class="margin-trb-16 category-card">
      <img
        src={category.img}
        alt="avatar"
        loading="lazy"
        class="responsive-img"
      />
      <p className="typo-sm category-title" >
        {category.title}
      </p>
    </div>
    
    
  );
};

export default CategoryCard;
