import React from "react";
import CategoryCard from "../CategoryCard";
import "./featured-container.css";
const FeaturedContainer = (props) => {
  const { featuredContainerTitle } = props;
  return (
    <div className="margin-top-60">
      <h3 className="featured-container-header">{featuredContainerTitle}</h3>
      <div className="featured-container">
        <CategoryCard categoryTitle={"Hiking and Trekking"} />
        <CategoryCard categoryTitle={"Wildlife Watching"} />
        <CategoryCard categoryTitle={"Swimming"} />
        <CategoryCard categoryTitle={"Horse Riding"} />
        <CategoryCard categoryTitle={"Rock Climbing"} />
        <CategoryCard categoryTitle={"Skiing and Snowboarding"} />
        <CategoryCard categoryTitle={"Fishing"} />
        <CategoryCard categoryTitle={"T-shirts and Trousers"} />
      </div>
    </div>
  );
};

export default FeaturedContainer;
