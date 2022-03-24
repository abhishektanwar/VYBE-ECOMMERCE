import React from "react";
import CategoryCard from "../CategoryCard";
import "./featured-container.css";
import { useNavigate } from "react-router-dom";
import { useProductListing } from "../../Contexts/ProductListingContext";
import { dispatchActionTypes } from "../../Reducers/dispatchActionTypes";

const FeaturedContainer = (props) => {
  const { categories, featuredContainerTitle } = props;
  const { productListingDispatch } = useProductListing();
  const { CATEGORY } = dispatchActionTypes;
  const navigate = useNavigate();
  const categoryCardClickNavigationHandler = (target, payload) => {
    productListingDispatch({ type: CATEGORY, payload: payload });
    navigate(target);
  };
  return (
    <div className="margin-top-60">
      <h3 className="featured-container-header">{featuredContainerTitle}</h3>
      <div className="featured-container">
        {categories.map((category, index) => (
          <CategoryCard
            category={category}
            key={category._id}
            onClick={categoryCardClickNavigationHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedContainer;
