import React from "react";
import { useProductListing } from "../../Contexts/ProductListingContext";
import { dispatchActionTypes } from "../../Reducers/dispatchActionTypes";
import Button from "../Header/Button";
import "./selected-filter.css";
const SelectedFilter = () => {
  const { productListingState, productListingDispatch } = useProductListing();
  const { sortBy, priceRange, categories } = productListingState;
  const { CLEAR, REMOVE_FILTER, PRICE_RANGE, CATEGORY } = dispatchActionTypes;
  return (
    <div className="selected-filter-container">
      <p className="typo-xs">Selected Filters :</p>
      {sortBy !== "" ? (
        <Button
          icon="fas fa-times"
          buttonText={"Colors"}
          buttonStyle="btn-filled-primary cancel-filter-button"
          onClick={() =>
            productListingDispatch({
              type: REMOVE_FILTER,
              payload: { filter: sortBy },
            })
          }
        />
      ) : null}
      {priceRange.lower !== "" || priceRange.higher !== "" ? (
        <Button
          icon="fas fa-times"
          buttonText={"Price Range"}
          buttonStyle="btn-filled-primary cancel-filter-button"
          onClick={() =>
            productListingDispatch({
              type: REMOVE_FILTER,
              payload: { filter: PRICE_RANGE },
            })
          }
        />
      ) : null}
      {categories.hikingandtrekking ? (
        <Button
          icon="fas fa-times"
          buttonText={"Hiking and Trekking"}
          buttonStyle="btn-filled-primary cancel-filter-button"
          onClick={() =>
            productListingDispatch({
              type: REMOVE_FILTER,
              payload: { filter: CATEGORY, value: "hikingandtrekking" },
            })
          }
        />
      ) : null}
      {categories.skiingandsnowboarding ? (
        <Button
          icon="fas fa-times"
          buttonText={"Hiking and Trekking"}
          buttonStyle="btn-filled-primary cancel-filter-button"
          onClick={() =>
            productListingDispatch({
              type: REMOVE_FILTER,
              payload: { filter: CATEGORY, value: "skiingandsnowboarding" },
            })
          }
        />
      ) : null}
      {categories.rockclimbingandmountaineering ? (
        <Button
          icon="fas fa-times"
          buttonText={"Rockclimbing and Mountaineering"}
          buttonStyle="btn-filled-primary cancel-filter-button"
          onClick={() =>
            productListingDispatch({
              type: REMOVE_FILTER,
              payload: {
                filter: CATEGORY,
                value: "rockclimbingandmountaineering",
              },
            })
          }
        />
      ) : null}
      {categories.snorkellingdiving ? (
        <Button
          icon="fas fa-times"
          buttonText={"Snorkelling and Diving"}
          buttonStyle="btn-filled-primary cancel-filter-button"
          onClick={() =>
            productListingDispatch({
              type: REMOVE_FILTER,
              payload: { filter: CATEGORY, value: "snorkellingdiving" },
            })
          }
        />
      ) : null}
      <Button
        buttonText={"Clear All"}
        buttonStyle="btn-filled-primary secondary-button "
        onClick={() => productListingDispatch({ type: CLEAR })}
      />
    </div>
  );
};

export default SelectedFilter;
