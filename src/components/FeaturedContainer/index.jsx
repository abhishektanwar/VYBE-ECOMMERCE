import React from "react";
import CategoryCard from "../CategoryCard";
import "./featured-container.css";
const FeaturedContainer = (props) => {
  const { featuredContainerTitle } = props;
  return (
    <div className="margin-top-60">
      <h3 className="featured-container-header">{featuredContainerTitle}</h3>
      <div className="featured-container">
        {[...Array(8)].map((item,index)=><CategoryCard categoryTitle={"Wildlife Watching"} />)}
      </div>
    </div>
  );
};

export default FeaturedContainer;
