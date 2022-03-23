import React from "react";
import CategoryCard from "../CategoryCard";
import "./featured-container.css";
const FeaturedContainer = (props) => {
  const { categories,featuredContainerTitle } = props;
  return (
    <div className="margin-top-60">
      <h3 className="featured-container-header">{featuredContainerTitle}</h3>
      <div className="featured-container">
        {categories.map((category,index)=><CategoryCard category={category} key={category._id} />)}
      </div>
    </div>
  );
};

export default FeaturedContainer;
